import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { expectNoA11yViolations } from "../../test/axe";
import { ToggleGroup, ToggleGroupItem } from "./toggle-group";

function Alinhamento(props: { onValueChange?: (value: string) => void }) {
  return (
    <ToggleGroup type="single" variant="outline" aria-label="Alinhamento" {...props}>
      <ToggleGroupItem value="esquerda" aria-label="Esquerda">
        E
      </ToggleGroupItem>
      <ToggleGroupItem value="centro" aria-label="Centro">
        C
      </ToggleGroupItem>
      <ToggleGroupItem value="direita" aria-label="Direita">
        D
      </ToggleGroupItem>
    </ToggleGroup>
  );
}

describe("ToggleGroup", () => {
  it("no modo single, só um item fica ligado", async () => {
    const onValueChange = vi.fn();
    render(<Alinhamento onValueChange={onValueChange} />);
    await userEvent.click(screen.getByRole("radio", { name: "Centro" }));
    await userEvent.click(screen.getByRole("radio", { name: "Direita" }));
    expect(screen.getByRole("radio", { name: "Direita" })).toHaveAttribute("data-state", "on");
    expect(screen.getByRole("radio", { name: "Centro" })).toHaveAttribute("data-state", "off");
    expect(onValueChange).toHaveBeenLastCalledWith("direita");
  });

  it("no modo multiple, vários itens ficam ligados", async () => {
    render(
      <ToggleGroup type="multiple" aria-label="Estilo">
        <ToggleGroupItem value="negrito" aria-label="Negrito">
          B
        </ToggleGroupItem>
        <ToggleGroupItem value="italico" aria-label="Itálico">
          I
        </ToggleGroupItem>
      </ToggleGroup>,
    );
    await userEvent.click(screen.getByRole("button", { name: "Negrito" }));
    await userEvent.click(screen.getByRole("button", { name: "Itálico" }));
    expect(screen.getByRole("button", { name: "Negrito" })).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByRole("button", { name: "Itálico" })).toHaveAttribute("aria-pressed", "true");
  });

  it("repassa variante e tamanho do grupo para os itens", () => {
    render(<Alinhamento />);
    expect(screen.getByRole("radio", { name: "Esquerda" })).toHaveClass("border-input", "h-8");
  });

  it("aplica espaçamento entre itens quando spacing > 0", () => {
    render(
      <ToggleGroup type="single" spacing={2} aria-label="Visão">
        <ToggleGroupItem value="lista">Lista</ToggleGroupItem>
      </ToggleGroup>,
    );
    expect(document.querySelector("[data-slot=toggle-group]")).toHaveAttribute("data-spacing", "2");
  });

  it("não tem violações de acessibilidade", async () => {
    const { container } = render(<Alinhamento />);
    await expectNoA11yViolations(container);
  });
});
