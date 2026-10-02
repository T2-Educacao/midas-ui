import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { expectNoA11yViolations } from "../../test/axe";
import { Kbd, KbdGroup } from "./kbd";

describe("Kbd", () => {
  it("renderiza a tecla em <kbd>", () => {
    render(<Kbd>Ctrl</Kbd>);
    const kbd = screen.getByText("Ctrl");
    expect(kbd.tagName).toBe("KBD");
    expect(kbd).toHaveAttribute("data-slot", "kbd");
  });

  it("agrupa teclas de um atalho", () => {
    render(
      <KbdGroup>
        <Kbd>Ctrl</Kbd>
        <Kbd>K</Kbd>
      </KbdGroup>,
    );
    expect(screen.getByText("K").parentElement).toHaveAttribute("data-slot", "kbd-group");
  });

  it("não tem violações de acessibilidade", async () => {
    const { container } = render(
      <p>
        Pressione <Kbd>Ctrl</Kbd> + <Kbd>K</Kbd>
      </p>,
    );
    await expectNoA11yViolations(container);
  });
});
