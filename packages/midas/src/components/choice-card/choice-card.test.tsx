import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createRef } from "react";
import { describe, expect, it, vi } from "vitest";
import { expectNoA11yViolations } from "../../test/axe";
import { ChoiceCard, ChoiceCardCheckbox, ChoiceCardGroup } from "./choice-card";

function Grupo({ onValueChange }: { onValueChange?: (v: string) => void }) {
  return (
    <ChoiceCardGroup aria-label="Plano" defaultValue="mensal" onValueChange={onValueChange}>
      <ChoiceCard value="mensal" title="Mensal" description="Cobrança todo mês" />
      <ChoiceCard value="anual" title="Anual" description="Dois meses grátis" icon={<svg />} />
    </ChoiceCardGroup>
  );
}

describe("ChoiceCard", () => {
  it("renderiza radios nomeados pelo título e descritos pela descrição", () => {
    render(<Grupo />);
    const radio = screen.getByRole("radio", { name: "Anual" });
    expect(radio).toHaveAccessibleDescription("Dois meses grátis");
    expect(screen.getByRole("radio", { name: "Mensal" })).toBeChecked();
  });

  it("seleciona ao clicar e chama onValueChange", async () => {
    const onValueChange = vi.fn();
    render(<Grupo onValueChange={onValueChange} />);
    await userEvent.click(screen.getByRole("radio", { name: "Anual" }));
    expect(screen.getByRole("radio", { name: "Anual" })).toBeChecked();
    expect(screen.getByRole("radio", { name: "Mensal" })).not.toBeChecked();
    expect(onValueChange).toHaveBeenCalledWith("anual");
  });

  it("aplica o visual de marcado", () => {
    render(<Grupo />);
    const marcado = screen.getByRole("radio", { name: "Mensal" });
    expect(marcado).toHaveAttribute("data-state", "checked");
    expect(marcado.className).toContain("data-[state=checked]:border-primary");
  });

  it("respeita disabled", async () => {
    const onValueChange = vi.fn();
    render(
      <ChoiceCardGroup aria-label="Plano" onValueChange={onValueChange}>
        <ChoiceCard value="a" title="A" disabled />
      </ChoiceCardGroup>,
    );
    await userEvent.click(screen.getByRole("radio", { name: "A" }));
    expect(onValueChange).not.toHaveBeenCalled();
  });

  it("mescla className e encaminha ref", () => {
    const ref = createRef<HTMLButtonElement>();
    render(
      <ChoiceCardGroup aria-label="Plano" className="grid-cols-2">
        <ChoiceCard ref={ref} value="a" title="A" className="p-8" />
      </ChoiceCardGroup>,
    );
    expect(screen.getByRole("radiogroup")).toHaveClass("grid-cols-2");
    expect(ref.current).toHaveClass("p-8");
    expect(ref.current).not.toHaveClass("p-4");
    expect(ref.current).toHaveAttribute("data-slot", "choice-card");
  });

  it("não tem violações de acessibilidade", async () => {
    const { container } = render(<Grupo />);
    await expectNoA11yViolations(container);
  });
});

describe("ChoiceCardCheckbox", () => {
  it("renderiza checkbox nomeado e alterna", async () => {
    const onCheckedChange = vi.fn();
    render(
      <ChoiceCardCheckbox
        title="Receber e-mails"
        description="Novidades semanais"
        onCheckedChange={onCheckedChange}
      />,
    );
    const box = screen.getByRole("checkbox", { name: "Receber e-mails" });
    expect(box).toHaveAccessibleDescription("Novidades semanais");
    expect(box).not.toBeChecked();
    await userEvent.click(box);
    expect(box).toBeChecked();
    expect(onCheckedChange).toHaveBeenCalledWith(true);
    await userEvent.click(box);
    expect(box).not.toBeChecked();
  });

  it("respeita defaultChecked e disabled", () => {
    render(<ChoiceCardCheckbox title="A" defaultChecked disabled />);
    const box = screen.getByRole("checkbox", { name: "A" });
    expect(box).toBeChecked();
    expect(box).toBeDisabled();
  });

  it("não tem violações de acessibilidade", async () => {
    const { container } = render(<ChoiceCardCheckbox title="A" description="B" />);
    await expectNoA11yViolations(container);
  });
});
