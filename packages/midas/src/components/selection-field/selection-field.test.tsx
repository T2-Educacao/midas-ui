import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createRef } from "react";
import { describe, expect, it, vi } from "vitest";
import { expectNoA11yViolations } from "../../test/axe";
import { RadioGroup } from "../radio-group/radio-group";
import { SelectionField } from "./selection-field";

describe("SelectionField", () => {
  it("renderiza checkbox com rótulo e descrição ligados por aria", async () => {
    const onCheckedChange = vi.fn();
    render(
      <SelectionField
        label="Aceito receber novidades"
        description="Avisos sobre aulas."
        onCheckedChange={onCheckedChange}
      />,
    );
    const checkbox = screen.getByRole("checkbox", { name: "Aceito receber novidades" });
    expect(checkbox).toHaveAccessibleDescription("Avisos sobre aulas.");
    await userEvent.click(screen.getByText("Aceito receber novidades"));
    expect(onCheckedChange).toHaveBeenCalledWith(true);
    expect(checkbox).toHaveAttribute("data-state", "checked");
  });

  it("toggle usa role switch", async () => {
    render(<SelectionField control="toggle" label="Modo escuro" />);
    const toggle = screen.getByRole("switch", { name: "Modo escuro" });
    await userEvent.click(toggle);
    expect(toggle).toHaveAttribute("aria-checked", "true");
  });

  it("radio funciona dentro de um RadioGroup", async () => {
    render(
      <RadioGroup defaultValue="a" aria-label="Plano">
        <SelectionField control="radio" value="a" label="Mensal" />
        <SelectionField control="radio" value="b" label="Anual" />
      </RadioGroup>,
    );
    await userEvent.click(screen.getByText("Anual"));
    expect(screen.getByRole("radio", { name: "Anual" })).toHaveAttribute("data-state", "checked");
  });

  it("erro marca aria-invalid e mostra a mensagem em tom de perigo", () => {
    render(<SelectionField label="Termos" description="Leia." errorMessage="Aceite os termos" />);
    expect(screen.getByRole("checkbox")).toHaveAttribute("aria-invalid", "true");
    expect(screen.getByText("Aceite os termos")).toHaveClass("text-status-danger-content");
    expect(screen.queryByText("Leia.")).toBeNull();
  });

  it("appearance card mostra o ícone e o contêiner", () => {
    const { container } = render(
      <SelectionField
        appearance="card"
        control="toggle"
        label="Notificações"
        icon={<svg data-testid="icone" />}
      />,
    );
    expect(screen.getByTestId("icone")).toBeInTheDocument();
    expect(container.firstChild).toHaveClass("rounded-container", "border-border-default");
  });

  it("disabled desabilita o controle e esmaece o rótulo", () => {
    render(<SelectionField label="Item" disabled />);
    expect(screen.getByRole("checkbox")).toBeDisabled();
    expect(screen.getByText("Item")).toHaveClass("text-content-disabled");
  });

  it("encaminha ref e mescla className", () => {
    const ref = createRef<HTMLDivElement>();
    render(<SelectionField ref={ref} label="Item" className="w-80" />);
    expect(ref.current).toHaveAttribute("data-slot", "selection-field");
    expect(ref.current).toHaveClass("w-80");
  });

  it("não tem violações de acessibilidade", async () => {
    const { container } = render(
      <div>
        <SelectionField label="Aceito" description="Descrição" />
        <SelectionField appearance="card" control="toggle" label="Alertas" invalid />
      </div>,
    );
    await expectNoA11yViolations(container);
  });
});
