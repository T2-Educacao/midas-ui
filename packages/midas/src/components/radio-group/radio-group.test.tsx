import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { expectNoA11yViolations } from "../../test/axe";
import { RadioGroup, RadioGroupItem } from "./radio-group";

function Exemplo({ onValueChange }: { onValueChange?: (v: string) => void }) {
  return (
    <RadioGroup defaultValue="mensal" aria-label="Plano" onValueChange={onValueChange}>
      <RadioGroupItem value="mensal" aria-label="Mensal" />
      <RadioGroupItem value="anual" aria-label="Anual" />
    </RadioGroup>
  );
}

describe("RadioGroup", () => {
  it("seleciona apenas uma opção", async () => {
    const onValueChange = vi.fn();
    render(<Exemplo onValueChange={onValueChange} />);
    await userEvent.click(screen.getByRole("radio", { name: "Anual" }));
    expect(screen.getByRole("radio", { name: "Anual" })).toBeChecked();
    expect(screen.getByRole("radio", { name: "Mensal" })).not.toBeChecked();
    expect(onValueChange).toHaveBeenCalledWith("anual");
  });

  it("não tem violações de acessibilidade", async () => {
    const { container } = render(<Exemplo />);
    await expectNoA11yViolations(container);
  });
});
