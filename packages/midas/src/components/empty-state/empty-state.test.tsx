import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import { describe, expect, it } from "vitest";
import { expectNoA11yViolations } from "../../test/axe";
import {
  EmptyState,
  EmptyStateActions,
  EmptyStateDescription,
  EmptyStateIcon,
  EmptyStateTitle,
} from "./empty-state";

function Exemplo({ className }: { className?: string }) {
  return (
    <EmptyState data-testid="raiz" className={className}>
      <EmptyStateIcon data-testid="icone">
        <svg aria-hidden="true" viewBox="0 0 8 8" />
      </EmptyStateIcon>
      <EmptyStateTitle>Nenhum curso</EmptyStateTitle>
      <EmptyStateDescription>Matricule-se para começar.</EmptyStateDescription>
      <EmptyStateActions>
        <button type="button">Ver cursos</button>
      </EmptyStateActions>
    </EmptyState>
  );
}

describe("EmptyState", () => {
  it("renderiza as partes com data-slot e conteúdo centralizado", () => {
    render(<Exemplo />);
    expect(screen.getByTestId("raiz")).toHaveAttribute("data-slot", "empty-state");
    expect(screen.getByTestId("raiz")).toHaveClass("items-center", "text-center");
    expect(screen.getByRole("heading", { name: "Nenhum curso" })).toHaveAttribute(
      "data-slot",
      "empty-state-title",
    );
    expect(screen.getByText("Matricule-se para começar.")).toHaveAttribute(
      "data-slot",
      "empty-state-description",
    );
    expect(screen.getByRole("button", { name: "Ver cursos" }).parentElement).toHaveAttribute(
      "data-slot",
      "empty-state-actions",
    );
  });

  it("ícone fica em círculo muted e escondido de leitores de tela", () => {
    render(<Exemplo />);
    expect(screen.getByTestId("icone")).toHaveClass("rounded-full", "bg-muted");
    expect(screen.getByTestId("icone")).toHaveAttribute("aria-hidden", "true");
  });

  it("mescla className com a do usuário vencendo", () => {
    render(<Exemplo className="py-2" />);
    expect(screen.getByTestId("raiz")).toHaveClass("py-2");
    expect(screen.getByTestId("raiz")).not.toHaveClass("py-10");
  });

  it("encaminha a ref", () => {
    const ref = createRef<HTMLDivElement>();
    render(<EmptyState ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it("não tem violações de acessibilidade", async () => {
    const { container } = render(<Exemplo />);
    await expectNoA11yViolations(container);
  });
});
