import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { expectNoA11yViolations } from "../../test/axe";
import { ChoiceChip, ChoiceChipGroup } from "./choice-chip";

describe("ChoiceChip", () => {
  it("escolha única funciona como radiogroup", async () => {
    const onValueChange = vi.fn();
    render(
      <ChoiceChipGroup aria-label="Tema" defaultValue="a" onValueChange={onValueChange}>
        <ChoiceChip value="a">Renda fixa</ChoiceChip>
        <ChoiceChip value="b">Ações</ChoiceChip>
      </ChoiceChipGroup>,
    );
    expect(screen.getByRole("radiogroup")).toBeInTheDocument();
    await userEvent.click(screen.getByRole("radio", { name: "Ações" }));
    expect(onValueChange).toHaveBeenCalledWith("b");
    expect(screen.getByRole("radio", { name: "Ações" })).toBeChecked();
  });

  it("múltipla escolha usa checkboxes", async () => {
    const onValueChange = vi.fn();
    render(
      <ChoiceChipGroup type="multiple" aria-label="Temas" onValueChange={onValueChange}>
        <ChoiceChip value="a">Renda fixa</ChoiceChip>
        <ChoiceChip value="b">Ações</ChoiceChip>
      </ChoiceChipGroup>,
    );
    await userEvent.click(screen.getByRole("checkbox", { name: "Renda fixa" }));
    await userEvent.click(screen.getByRole("checkbox", { name: "Ações" }));
    expect(onValueChange).toHaveBeenLastCalledWith(["a", "b"]);
    await userEvent.click(screen.getByRole("checkbox", { name: "Ações" }));
    expect(onValueChange).toHaveBeenLastCalledWith(["a"]);
  });

  it("aplica tamanho, estilo e tom", () => {
    render(
      <ChoiceChipGroup aria-label="Tema" size="lg" appearance="filled" tone="neutral">
        <ChoiceChip value="a">A</ChoiceChip>
      </ChoiceChipGroup>,
    );
    const chip = screen.getByRole("radio");
    expect(chip).toHaveClass("h-11", "bg-surface-muted", "rounded-pill");
    expect(chip.className).toContain("data-[state=checked]:bg-action-primary-bg");
  });

  it("respeita disabled", async () => {
    const onValueChange = vi.fn();
    render(
      <ChoiceChipGroup aria-label="Tema" onValueChange={onValueChange}>
        <ChoiceChip value="a" disabled>
          A
        </ChoiceChip>
      </ChoiceChipGroup>,
    );
    await userEvent.click(screen.getByRole("radio"));
    expect(onValueChange).not.toHaveBeenCalled();
  });

  it("não tem violações de acessibilidade", async () => {
    const { container } = render(
      <ChoiceChipGroup aria-label="Tema" defaultValue="a">
        <ChoiceChip value="a">Renda fixa</ChoiceChip>
        <ChoiceChip value="b">Ações</ChoiceChip>
      </ChoiceChipGroup>,
    );
    await expectNoA11yViolations(container);
  });
});
