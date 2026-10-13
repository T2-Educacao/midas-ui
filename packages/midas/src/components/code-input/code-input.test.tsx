import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { expectNoA11yViolations } from "../../test/axe";
import { CodeInput } from "./code-input";

describe("CodeInput", () => {
  it("renderiza 4 ou 6 campos, um por dígito, com one-time-code no primeiro", () => {
    const { unmount } = render(<CodeInput aria-label="Código" />);
    expect(screen.getAllByRole("textbox")).toHaveLength(4);
    expect(screen.getAllByRole("textbox")[0]).toHaveAttribute("autocomplete", "one-time-code");
    unmount();
    render(<CodeInput aria-label="Código" length={6} />);
    expect(screen.getAllByRole("textbox")).toHaveLength(6);
  });

  it("digita avançando e chama onComplete", async () => {
    const onComplete = vi.fn();
    render(<CodeInput aria-label="Código" onComplete={onComplete} />);
    await userEvent.type(screen.getAllByRole("textbox")[0] as HTMLElement, "4851");
    expect(onComplete).toHaveBeenCalledWith("4851");
  });

  it("ignora letras no modo numérico e aceita colar", async () => {
    const onComplete = vi.fn();
    render(<CodeInput aria-label="Código" onComplete={onComplete} />);
    const first = screen.getAllByRole("textbox")[0] as HTMLElement;
    await userEvent.type(first, "a");
    expect(first).toHaveValue("");
    await userEvent.click(first);
    await userEvent.paste("1234");
    expect(onComplete).toHaveBeenCalledWith("1234");
  });

  it("marca erro", () => {
    render(<CodeInput aria-label="Código" invalid />);
    expect(screen.getAllByRole("textbox")[0]).toHaveAttribute("aria-invalid", "true");
  });

  it("não tem violações de acessibilidade", async () => {
    const { container } = render(<CodeInput aria-label="Código" defaultValue="12" />);
    await expectNoA11yViolations(container);
  });
});
