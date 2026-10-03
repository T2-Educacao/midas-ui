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

  it("não tem violações de acessibilidade", async () => {
    const { container } = render(<Checkbox aria-label="Lembrar de mim" />);
    await expectNoA11yViolations(container);
  });
});
