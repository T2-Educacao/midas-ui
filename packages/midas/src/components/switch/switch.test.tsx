import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as React from "react";
import { describe, expect, it, vi } from "vitest";
import { expectNoA11yViolations } from "../../test/axe";
import { Label } from "../field/field";
import { Switch } from "./switch";

describe("Switch", () => {
  it("renderiza com o papel switch e alterna ao clicar no label", async () => {
    const onCheckedChange = vi.fn();
    render(
      <div className="flex gap-2">
        <Switch id="notificacoes" onCheckedChange={onCheckedChange} />
        <Label htmlFor="notificacoes">Notificações</Label>
      </div>,
    );
    const alternador = screen.getByRole("switch", { name: "Notificações" });
    expect(alternador).toHaveAttribute("data-state", "unchecked");
    await userEvent.click(screen.getByText("Notificações"));
    expect(alternador).toHaveAttribute("data-state", "checked");
    expect(onCheckedChange).toHaveBeenCalledWith(true);
  });

  it("alterna com o teclado", async () => {
    render(<Switch aria-label="Modo escuro" />);
    await userEvent.tab();
    await userEvent.keyboard(" ");
    expect(screen.getByRole("switch")).toHaveAttribute("aria-checked", "true");
  });

  it("aplica o tamanho sm", () => {
    render(<Switch aria-label="Compacto" size="sm" />);
    const alternador = screen.getByRole("switch");
    expect(alternador).toHaveAttribute("data-size", "sm");
    expect(alternador).toHaveClass("h-4", "w-7");
  });

  it("mescla className com a do usuário vencendo", () => {
    render(<Switch aria-label="Custom" className="h-6" />);
    expect(screen.getByRole("switch")).toHaveClass("h-6");
    expect(screen.getByRole("switch")).not.toHaveClass("h-5");
  });

  it("não alterna quando desabilitado", async () => {
    render(<Switch aria-label="Desabilitado" disabled />);
    await userEvent.click(screen.getByRole("switch"));
    expect(screen.getByRole("switch")).toHaveAttribute("data-state", "unchecked");
  });

  it("encaminha a ref e define data-slot", () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(<Switch ref={ref} aria-label="Ref" />);
    expect(ref.current).toBe(screen.getByRole("switch"));
    expect(ref.current).toHaveAttribute("data-slot", "switch");
  });

  it("não tem violações de acessibilidade", async () => {
    const { container } = render(<Switch aria-label="Receber avisos" />);
    await expectNoA11yViolations(container);
  });
});
