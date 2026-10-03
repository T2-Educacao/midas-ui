import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Toggle } from "../toggle/toggle";
import { ToggleGroup, ToggleGroupItem } from "../toggle-group/toggle-group";
import { DirectionProvider, useDirection } from "./direction";

function MostraDirecao() {
  return <span>{useDirection()}</span>;
}

describe("DirectionProvider", () => {
  it("é ltr por padrão", () => {
    render(<MostraDirecao />);
    expect(screen.getByText("ltr")).toBeInTheDocument();
  });

  it("repassa rtl para os componentes", () => {
    render(
      <DirectionProvider dir="rtl">
        <MostraDirecao />
        <ToggleGroup type="single" aria-label="Alinhamento">
          <ToggleGroupItem value="a" aria-label="A">
            A
          </ToggleGroupItem>
        </ToggleGroup>
        <Toggle aria-label="Negrito">B</Toggle>
      </DirectionProvider>,
    );
    expect(screen.getByText("rtl")).toBeInTheDocument();
    expect(document.querySelector("[data-slot=toggle-group]")).toHaveAttribute("dir", "rtl");
  });
});
