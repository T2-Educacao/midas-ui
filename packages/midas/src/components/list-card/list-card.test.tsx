import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import { describe, expect, it } from "vitest";
import { expectNoA11yViolations } from "../../test/axe";
import {
  ListCard,
  ListCardActions,
  ListCardDescription,
  ListCardHeader,
  ListCardInfo,
  ListCardTitle,
} from "./list-card";

function Exemplo(props: React.ComponentProps<typeof ListCard>) {
  return (
    <ListCard aria-label="Pendência" role="group" {...props}>
      <ListCardHeader>
        <svg aria-hidden="true" />
        <span>Simulado</span>
      </ListCardHeader>
      <ListCardTitle>Simulado de renda fixa</ListCardTitle>
      <ListCardDescription>Faltam 12 questões para concluir.</ListCardDescription>
      <div className="grid grid-cols-2 gap-4">
        <ListCardInfo label="Prazo">Sexta</ListCardInfo>
        <ListCardInfo label="Questões">12</ListCardInfo>
      </div>
      <ListCardActions>
        <button type="button">Detalhes</button>
        <button type="button">Concluir</button>
      </ListCardActions>
    </ListCard>
  );
}

describe("ListCard", () => {
  it("renderiza título, descrição, blocos de informação e ações", () => {
    render(<Exemplo />);
    expect(screen.getByText("Simulado de renda fixa")).toHaveAttribute(
      "data-slot",
      "list-card-title",
    );
    expect(screen.getByText("Prazo")).toHaveClass("text-mono-overline");
    expect(screen.getByRole("button", { name: "Concluir" })).toBeInTheDocument();
  });

  it("superfície e tom aplicados", () => {
    const { rerender } = render(<Exemplo />);
    const card = screen.getByRole("group");
    expect(card).toHaveClass("bg-surface-default", "shadow-elevation-card", "rounded-container");
    rerender(<Exemplo surface="glass" tone="neutral" />);
    expect(screen.getByRole("group")).toHaveClass("material-glass", "hover:border-border-strong");
  });

  it("className mescla, asChild e ref", () => {
    const ref = createRef<HTMLElement>();
    render(
      <ListCard asChild ref={ref} className="p-8">
        <a href="/pendencia">Abrir</a>
      </ListCard>,
    );
    expect(ref.current?.tagName).toBe("A");
    expect(ref.current).toHaveClass("p-8");
    expect(ref.current).not.toHaveClass("p-4");
  });

  it("não tem violações de acessibilidade", async () => {
    const { container } = render(<Exemplo />);
    await expectNoA11yViolations(container);
  });
});
