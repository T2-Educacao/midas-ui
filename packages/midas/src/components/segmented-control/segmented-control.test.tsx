import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createRef } from "react";
import { describe, expect, it, vi } from "vitest";
import { expectNoA11yViolations } from "../../test/axe";
import { SegmentedControl, SegmentedControlItem } from "./segmented-control";

function Exemplo({
  onValueChange,
  ...props
}: Partial<React.ComponentProps<typeof SegmentedControl>>) {
  return (
    <SegmentedControl
      defaultValue="mes"
      aria-label="Período"
      onValueChange={onValueChange}
      {...props}
    >
      <SegmentedControlItem value="dia">Dia</SegmentedControlItem>
      <SegmentedControlItem value="mes">Mês</SegmentedControlItem>
      <SegmentedControlItem value="ano">Ano</SegmentedControlItem>
    </SegmentedControl>
  );
}

describe("SegmentedControl", () => {
  it("renderiza um radiogroup com radios", () => {
    render(<Exemplo />);
    expect(screen.getByRole("radiogroup", { name: "Período" })).toBeInTheDocument();
    expect(screen.getAllByRole("radio")).toHaveLength(3);
    expect(screen.getByRole("radio", { name: "Mês" })).toBeChecked();
  });

  it("troca a seleção ao clicar", async () => {
    const onValueChange = vi.fn();
    render(<Exemplo onValueChange={onValueChange} />);
    await userEvent.click(screen.getByRole("radio", { name: "Ano" }));
    expect(screen.getByRole("radio", { name: "Ano" })).toBeChecked();
    expect(screen.getByRole("radio", { name: "Mês" })).not.toBeChecked();
    expect(onValueChange).toHaveBeenCalledWith("ano");
  });

  it("não desmarca ao clicar no item já selecionado", async () => {
    const onValueChange = vi.fn();
    render(<Exemplo onValueChange={onValueChange} />);
    await userEvent.click(screen.getByRole("radio", { name: "Mês" }));
    expect(screen.getByRole("radio", { name: "Mês" })).toBeChecked();
    expect(onValueChange).not.toHaveBeenCalled();
  });

  it("navega por setas e seleciona pelo teclado", async () => {
    render(<Exemplo />);
    await userEvent.tab();
    expect(screen.getByRole("radio", { name: "Mês" })).toHaveFocus();
    await userEvent.keyboard("{ArrowRight}");
    expect(screen.getByRole("radio", { name: "Ano" })).toHaveFocus();
    await userEvent.keyboard(" ");
    expect(screen.getByRole("radio", { name: "Ano" })).toBeChecked();
  });

  it("aplica tamanho sm e padrão", () => {
    const { rerender } = render(<Exemplo size="sm" />);
    expect(screen.getByRole("radio", { name: "Dia" })).toHaveClass("h-7");
    rerender(<Exemplo />);
    expect(screen.getByRole("radio", { name: "Dia" })).toHaveClass("h-8");
  });

  it("mescla className no grupo", () => {
    render(<Exemplo className="w-full" />);
    expect(screen.getByRole("radiogroup")).toHaveClass("w-full");
  });

  it("className do item vence", () => {
    render(
      <SegmentedControl aria-label="A" defaultValue="x">
        <SegmentedControlItem value="x" className="px-6">
          X
        </SegmentedControlItem>
      </SegmentedControl>,
    );
    const item = screen.getByRole("radio", { name: "X" });
    expect(item).toHaveClass("px-6");
    expect(item).not.toHaveClass("px-2.5");
  });

  it("respeita disabled", async () => {
    const onValueChange = vi.fn();
    render(<Exemplo disabled onValueChange={onValueChange} />);
    await userEvent.click(screen.getByRole("radio", { name: "Ano" }));
    expect(onValueChange).not.toHaveBeenCalled();
  });

  it("encaminha ref e data-slot", () => {
    const ref = createRef<HTMLDivElement>();
    const itemRef = createRef<HTMLButtonElement>();
    render(
      <SegmentedControl ref={ref} aria-label="A">
        <SegmentedControlItem ref={itemRef} value="x">
          X
        </SegmentedControlItem>
      </SegmentedControl>,
    );
    expect(ref.current).toHaveAttribute("data-slot", "segmented-control");
    expect(itemRef.current).toHaveAttribute("data-slot", "segmented-control-item");
  });

  it("não tem violações de acessibilidade", async () => {
    const { container } = render(<Exemplo />);
    await expectNoA11yViolations(container);
  });
});
