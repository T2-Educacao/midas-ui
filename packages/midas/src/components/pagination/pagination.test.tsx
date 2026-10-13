import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { expectNoA11yViolations } from "../../test/axe";
import {
  getPageRange,
  Pagination,
  PaginationCompact,
  PaginationContent,
  PaginationDots,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationLoadMore,
  PaginationNext,
  PaginationPrevious,
  PaginationShowMore,
  PaginationSummary,
} from "./pagination";

function Exemplo() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="?p=1" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="?p=1">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="?p=2" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="?p=3" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

describe("Pagination", () => {
  it("marca a página atual com aria-current e estilo de seleção", () => {
    render(<Exemplo />);
    expect(screen.getByRole("navigation", { name: "Paginação" })).toBeInTheDocument();
    const atual = screen.getByRole("link", { name: "2" });
    expect(atual).toHaveAttribute("aria-current", "page");
    expect(atual).toHaveClass("aria-[current=page]:text-selection-content");
  });

  it("anterior e próxima têm nomes acessíveis", () => {
    render(<Exemplo />);
    expect(screen.getByRole("link", { name: "Ir para a página anterior" })).toHaveAttribute(
      "href",
      "?p=1",
    );
    expect(screen.getByRole("link", { name: "Ir para a próxima página" })).toHaveAttribute(
      "href",
      "?p=3",
    );
  });

  it("aplica tamanho e tom pelos atributos do nav", () => {
    render(
      <Pagination size="sm" tone="neutral">
        <PaginationContent>
          <PaginationItem>
            <PaginationLink href="?p=1">1</PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>,
    );
    const nav = screen.getByRole("navigation", { name: "Paginação" });
    expect(nav).toHaveAttribute("data-size", "sm");
    expect(nav).toHaveAttribute("data-tone", "neutral");
  });

  it("renderiza as peças de resumo, compacto e pontos", () => {
    render(
      <div>
        <PaginationSummary>11–20 de 128</PaginationSummary>
        <PaginationCompact page={2} total={13} />
        <PaginationDots count={4} current={1} />
      </div>,
    );
    expect(screen.getByText("11–20 de 128")).toBeInTheDocument();
    expect(screen.getByLabelText("Página 2 de 13")).toBeInTheDocument();
    expect(screen.getByRole("img", { name: "Página 2 de 4" })).toBeInTheDocument();
  });

  it("carregar mais chama onLoadMore e desabilita ao terminar", async () => {
    const onLoadMore = vi.fn();
    const { rerender } = render(
      <PaginationLoadMore shown={32} total={128} onLoadMore={onLoadMore} />,
    );
    expect(screen.getByText("Mostrando 32 de 128")).toBeInTheDocument();
    await userEvent.click(screen.getByRole("button", { name: "Carregar mais" }));
    expect(onLoadMore).toHaveBeenCalledTimes(1);
    rerender(<PaginationLoadMore shown={128} total={128} onLoadMore={onLoadMore} />);
    expect(screen.getByRole("button", { name: "Carregar mais" })).toBeDisabled();
  });

  it("ver mais chama onShowMore", async () => {
    const onShowMore = vi.fn();
    render(<PaginationShowMore onShowMore={onShowMore}>Ver mais 8 cursos</PaginationShowMore>);
    await userEvent.click(screen.getByRole("button", { name: "Ver mais 8 cursos" }));
    expect(onShowMore).toHaveBeenCalledTimes(1);
  });

  it("getPageRange calcula páginas com reticências", () => {
    expect(getPageRange(1, 5)).toEqual([1, 2, 3, 4, 5]);
    expect(getPageRange(1, 20)).toEqual([1, 2, 3, 4, 5, "ellipsis-end", 20]);
    expect(getPageRange(10, 20)).toEqual([1, "ellipsis-start", 9, 10, 11, "ellipsis-end", 20]);
    expect(getPageRange(20, 20)).toEqual([1, "ellipsis-start", 16, 17, 18, 19, 20]);
    expect(getPageRange(1, 0)).toEqual([]);
  });

  it("não tem violações de acessibilidade", async () => {
    const { container } = render(<Exemplo />);
    await expectNoA11yViolations(container);
  });
});
