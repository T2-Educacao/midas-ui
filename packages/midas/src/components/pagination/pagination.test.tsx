import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { expectNoA11yViolations } from "../../test/axe";
import {
  getPageRange,
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
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
  it("marca a página atual com aria-current e variante outline", () => {
    render(<Exemplo />);
    expect(screen.getByRole("navigation", { name: "Paginação" })).toBeInTheDocument();
    const atual = screen.getByRole("link", { name: "2" });
    expect(atual).toHaveAttribute("aria-current", "page");
    expect(atual).toHaveClass("border-border");
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
