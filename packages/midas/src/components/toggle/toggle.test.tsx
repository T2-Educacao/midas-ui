import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { expectNoA11yViolations } from "../../test/axe";
import { Toggle } from "./toggle";

describe("Toggle", () => {
  it("alterna entre ligado e desligado ao clicar", async () => {
    const onPressedChange = vi.fn();
    render(
      <Toggle aria-label="Negrito" onPressedChange={onPressedChange}>
        B
      </Toggle>,
    );
    const toggle = screen.getByRole("button", { name: "Negrito" });
    expect(toggle).toHaveAttribute("aria-pressed", "false");
    await userEvent.click(toggle);
    expect(toggle).toHaveAttribute("aria-pressed", "true");
    expect(toggle).toHaveAttribute("data-state", "on");
    expect(onPressedChange).toHaveBeenCalledWith(true);
  });

  it("aplica variante e tamanho", () => {
    render(
      <Toggle variant="outline" size="lg" aria-label="Itálico">
        I
      </Toggle>,
    );
    expect(screen.getByRole("button")).toHaveClass("border-input", "h-9");
  });

  it("não alterna quando desabilitado", async () => {
    render(
      <Toggle disabled aria-label="Sublinhado">
        U
      </Toggle>,
    );
    const toggle = screen.getByRole("button");
    await userEvent.click(toggle);
    expect(toggle).toHaveAttribute("aria-pressed", "false");
  });

  it("não tem violações de acessibilidade", async () => {
    const { container } = render(<Toggle aria-label="Negrito">B</Toggle>);
    await expectNoA11yViolations(container);
  });
});
