import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createRef } from "react";
import { describe, expect, it, vi } from "vitest";
import { expectNoA11yViolations } from "../../test/axe";
import { TablePagination } from "./table-pagination";

describe("TablePagination", () => {
  it("mostra o intervalo em mono e as páginas numeradas", () => {
    render(
      <TablePagination page={2} pageCount={13} range="11–20 de 128" onPageChange={() => {}} />,
    );
    expect(screen.getByText("11–20 de 128")).toHaveAttribute("data-slot", "pagination-summary");
    expect(screen.getByRole("link", { name: "2" })).toHaveAttribute("aria-current", "page");
    expect(screen.getByRole("link", { name: "13" })).toBeInTheDocument();
  });

  it("chama onPageChange ao clicar em número, anterior e próxima", async () => {
    const onPageChange = vi.fn();
    render(<TablePagination page={2} pageCount={13} onPageChange={onPageChange} />);
    await userEvent.click(screen.getByRole("link", { name: "4" }));
    await userEvent.click(screen.getByRole("link", { name: "Ir para a página anterior" }));
    await userEvent.click(screen.getByRole("link", { name: "Ir para a próxima página" }));
    expect(onPageChange.mock.calls).toEqual([[4], [1], [3]]);
  });

  it("desabilita anterior na primeira página e próxima na última", () => {
    const { rerender } = render(<TablePagination page={1} pageCount={3} />);
    expect(screen.getByRole("link", { name: "Ir para a página anterior" })).toHaveAttribute(
      "aria-disabled",
      "true",
    );
    rerender(<TablePagination page={3} pageCount={3} />);
    expect(screen.getByRole("link", { name: "Ir para a próxima página" })).toHaveAttribute(
      "aria-disabled",
      "true",
    );
  });

  it("tipo simple mostra página X / Y", () => {
    render(<TablePagination type="simple" page={2} pageCount={13} />);
    expect(screen.getByLabelText("Página 2 de 13")).toBeInTheDocument();
    expect(screen.queryByRole("link", { name: "3" })).not.toBeInTheDocument();
  });

  it("className mescla e ref é encaminhada", () => {
    const ref = createRef<HTMLDivElement>();
    render(<TablePagination ref={ref} className="px-8" page={1} pageCount={2} />);
    expect(ref.current).toHaveClass("px-8");
    expect(ref.current).not.toHaveClass("px-4");
  });

  it("não tem violações de acessibilidade", async () => {
    const { container } = render(
      <TablePagination page={2} pageCount={13} range="11–20 de 128" onPageChange={() => {}} />,
    );
    await expectNoA11yViolations(container);
  });
});
