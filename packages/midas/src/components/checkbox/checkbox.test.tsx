import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { expectNoA11yViolations } from "../../test/axe";
import { Label } from "../field/field";
import { Checkbox } from "./checkbox";

describe("Checkbox", () => {
  it("marca e desmarca ao clicar no label", async () => {
    const onCheckedChange = vi.fn();
    render(
      <div className="flex gap-2">
        <Checkbox id="termos" onCheckedChange={onCheckedChange} />
        <Label htmlFor="termos">Aceito os termos</Label>
      </div>,
    );
    await userEvent.click(screen.getByText("Aceito os termos"));
    expect(screen.getByRole("checkbox", { name: "Aceito os termos" })).toHaveAttribute(
      "data-state",
      "checked",
    );
    expect(onCheckedChange).toHaveBeenCalledWith(true);
  });

  it("aceita estado indeterminado", () => {
    render(<Checkbox aria-label="Todos" checked="indeterminate" />);
    expect(screen.getByRole("checkbox")).toHaveAttribute("aria-checked", "mixed");
  });

  it("aplica tamanhos e tom do Figma com tokens", () => {
    render(
      <div>
        <Checkbox aria-label="P" size="sm" />
        <Checkbox aria-label="M" />
        <Checkbox aria-label="G" size="lg" tone="neutral" />
      </div>,
    );
    expect(screen.getByRole("checkbox", { name: "P" })).toHaveClass("size-4", "rounded-xs");
    expect(screen.getByRole("checkbox", { name: "M" })).toHaveClass(
      "size-5",
      "bg-field-bg",
      "data-[state=checked]:bg-selection-fill",
    );
    expect(screen.getByRole("checkbox", { name: "G" })).toHaveClass(
      "size-6",
      "data-[state=checked]:bg-action-primary-bg",
    );
  });

  it("aria-invalid ativa os tokens de erro", () => {
    render(<Checkbox aria-label="Erro" aria-invalid />);
    expect(screen.getByRole("checkbox")).toHaveClass("aria-invalid:border-status-danger-fill");
  });

  it("desabilitado não alterna", async () => {
    const onCheckedChange = vi.fn();
    render(<Checkbox aria-label="Off" disabled onCheckedChange={onCheckedChange} />);
    await userEvent.click(screen.getByRole("checkbox"));
    expect(onCheckedChange).not.toHaveBeenCalled();
  });

  it("não tem violações de acessibilidade", async () => {
    const { container } = render(<Checkbox aria-label="Lembrar de mim" />);
    await expectNoA11yViolations(container);
  });
});
