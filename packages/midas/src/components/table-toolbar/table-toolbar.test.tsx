import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import { describe, expect, it } from "vitest";
import { expectNoA11yViolations } from "../../test/axe";
import { TableToolbar } from "./table-toolbar";

describe("TableToolbar", () => {
  it("mostra título, contador mono e ações", () => {
    render(
      <TableToolbar title="Alunos" count={128}>
        <button type="button">Exportar</button>
      </TableToolbar>,
    );
    expect(screen.getByRole("heading", { name: "Alunos" })).toBeInTheDocument();
    expect(screen.getByText("128")).toHaveClass("text-mono-md");
    expect(screen.getByRole("button", { name: "Exportar" })).toBeInTheDocument();
  });

  it("tipo selection mostra o texto de seleção com tom brand ou neutral", () => {
    const { rerender } = render(<TableToolbar type="selection" selection="3 selecionados" />);
    expect(screen.getByText("3 selecionados")).toHaveAttribute("aria-live", "polite");
    expect(screen.getByText("3 selecionados").parentElement).toHaveClass("bg-selection-bg");
    rerender(<TableToolbar type="selection" tone="neutral" selection="3 selecionados" />);
    expect(screen.getByText("3 selecionados").parentElement).toHaveClass("bg-surface-muted");
  });

  it("superfície glass usa material", () => {
    render(<TableToolbar surface="glass" title="Alunos" data-testid="barra" />);
    expect(screen.getByTestId("barra")).toHaveClass("material-glass");
  });

  it("className mescla e ref é encaminhada", () => {
    const ref = createRef<HTMLDivElement>();
    render(<TableToolbar ref={ref} className="px-8" title="Alunos" />);
    expect(ref.current).toHaveAttribute("data-slot", "table-toolbar");
    expect(ref.current).toHaveClass("px-8");
    expect(ref.current).not.toHaveClass("px-4");
  });

  it("não tem violações de acessibilidade", async () => {
    const { container } = render(
      <TableToolbar title="Alunos" count={128}>
        <button type="button">Exportar</button>
      </TableToolbar>,
    );
    await expectNoA11yViolations(container);
  });
});
