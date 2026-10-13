import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import { describe, expect, it } from "vitest";
import { expectNoA11yViolations } from "../../test/axe";
import { Kbd, KbdGroup } from "./kbd";

describe("Kbd", () => {
  it("renderiza a tecla em <kbd> com fonte mono e tamanho SM", () => {
    render(<Kbd>Ctrl</Kbd>);
    const kbd = screen.getByText("Ctrl");
    expect(kbd.tagName).toBe("KBD");
    expect(kbd).toHaveAttribute("data-slot", "kbd");
    expect(kbd).toHaveClass("font-mono", "h-5", "bg-surface-muted");
  });

  it("aceita tamanho md", () => {
    render(<Kbd size="md">⌘K</Kbd>);
    expect(screen.getByText("⌘K")).toHaveClass("h-6");
  });

  it("mescla className e encaminha ref", () => {
    const ref = createRef<HTMLElement>();
    render(
      <Kbd ref={ref} className="h-8">
        K
      </Kbd>,
    );
    expect(ref.current).toHaveClass("h-8");
    expect(ref.current).not.toHaveClass("h-5");
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
