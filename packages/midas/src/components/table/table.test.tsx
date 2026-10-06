import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { expectNoA11yViolations } from "../../test/axe";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "./table";

function Exemplo(props: React.ComponentProps<typeof Table>) {
  return (
    <Table {...props}>
      <TableCaption>Alunos</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Nome</TableHead>
          <TableHead>Nota</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow data-state="selected">
          <TableCell>Ana</TableCell>
          <TableCell>9</TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell>Total</TableCell>
          <TableCell>1</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}

describe("Table", () => {
  it("renderiza a estrutura com roles corretos e container com rolagem", () => {
    render(<Exemplo />);
    const table = screen.getByRole("table");
    expect(table).toHaveAttribute("data-slot", "table");
    expect(table.parentElement).toHaveAttribute("data-slot", "table-container");
    expect(table.parentElement).toHaveClass("overflow-x-auto");
    expect(screen.getAllByRole("columnheader")).toHaveLength(2);
    expect(screen.getByRole("cell", { name: "Ana" })).toHaveAttribute("data-slot", "table-cell");
    expect(screen.getByText("Alunos")).toHaveAttribute("data-slot", "table-caption");
  });

  it("aplica a densidade", () => {
    const { rerender } = render(<Exemplo />);
    expect(screen.getByRole("table")).toHaveAttribute("data-size", "default");
    rerender(<Exemplo size="sm" />);
    expect(screen.getByRole("table")).toHaveAttribute("data-size", "sm");
  });

  it("linha selecionada usa data-state", () => {
    render(<Exemplo />);
    const linha = screen.getByRole("cell", { name: "Ana" }).closest("tr");
    expect(linha).toHaveAttribute("data-state", "selected");
    expect(linha).toHaveClass("data-[state=selected]:bg-muted");
  });

  it("mescla className e encaminha ref", () => {
    const ref = { current: null as HTMLTableElement | null };
    render(
      <Table ref={ref} className="bg-muted">
        <TableBody>
          <TableRow>
            <TableCell>x</TableCell>
          </TableRow>
        </TableBody>
      </Table>,
    );
    expect(screen.getByRole("table")).toHaveClass("bg-muted");
    expect(ref.current).toBe(screen.getByRole("table"));
  });

  it("coluna ordenável define aria-sort e chama onSort", async () => {
    const onSort = vi.fn();
    const { rerender } = render(
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead sortable onSort={onSort}>
              Nome
            </TableHead>
          </TableRow>
        </TableHeader>
      </Table>,
    );
    expect(screen.getByRole("columnheader")).toHaveAttribute("aria-sort", "none");
    await userEvent.click(screen.getByRole("button", { name: "Nome" }));
    expect(onSort).toHaveBeenCalledTimes(1);
    for (const [direction, value] of [
      ["asc", "ascending"],
      ["desc", "descending"],
    ] as const) {
      rerender(
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead sortable sortDirection={direction} onSort={onSort}>
                Nome
              </TableHead>
            </TableRow>
          </TableHeader>
        </Table>,
      );
      expect(screen.getByRole("columnheader")).toHaveAttribute("aria-sort", value);
    }
  });

  it("coluna não ordenável não tem botão nem aria-sort", () => {
    render(<Exemplo />);
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
    expect(screen.getAllByRole("columnheader")[0]).not.toHaveAttribute("aria-sort");
  });

  it("não tem violações de acessibilidade", async () => {
    const { container } = render(
      <Table>
        <TableCaption>Alunos</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead sortable sortDirection="asc" onSort={() => {}}>
              Nome
            </TableHead>
            <TableHead>Nota</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Ana</TableCell>
            <TableCell>9</TableCell>
          </TableRow>
        </TableBody>
      </Table>,
    );
    await expectNoA11yViolations(container);
  });
});
