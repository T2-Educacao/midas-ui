import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createRef } from "react";
import { describe, expect, it, vi } from "vitest";
import { expectNoA11yViolations } from "../../test/axe";
import { Textarea } from "./textarea";

describe("Textarea", () => {
  it("aceita digitação em várias linhas", async () => {
    render(<Textarea aria-label="Mensagem" />);
    await userEvent.type(screen.getByRole("textbox"), "Olá{Enter}tudo bem?");
    expect(screen.getByRole("textbox")).toHaveValue("Olá\ntudo bem?");
  });

  it("marca estado inválido", () => {
    render(<Textarea aria-label="Mensagem" aria-invalid />);
    expect(screen.getByRole("textbox")).toHaveAttribute("aria-invalid", "true");
  });

  it("mantém o visual padrão com borda, fundo e altura mínima", () => {
    render(<Textarea aria-label="Mensagem" />);
    expect(screen.getByRole("textbox")).toHaveClass(
      "min-h-24",
      "border",
      "rounded-control",
      "border-border-subtle",
    );
  });

  it("bare remove borda, fundo, anel, altura mínima e padding", () => {
    render(<Textarea aria-label="Título" bare />);
    const campo = screen.getByRole("textbox");
    expect(campo).toHaveClass("border-0", "bg-transparent", "p-0", "min-h-0");
    expect(campo).not.toHaveClass("min-h-24", "border-border-subtle");
  });

  it("className do usuário vence", () => {
    render(<Textarea aria-label="Mensagem" className="min-h-32" />);
    expect(screen.getByRole("textbox")).toHaveClass("min-h-32");
    expect(screen.getByRole("textbox")).not.toHaveClass("min-h-16");
  });

  it("autoGrow ajusta a altura ao conteúdo ao digitar", async () => {
    render(<Textarea aria-label="Título" autoGrow />);
    const campo = screen.getByRole("textbox") as HTMLTextAreaElement;
    Object.defineProperty(campo, "scrollHeight", { configurable: true, value: 90 });
    await userEvent.type(campo, "a");
    expect(campo.style.height).toBe("90px");
    expect(campo).toHaveClass("resize-none");
  });

  it("autoGrow ajusta a altura inicial e chama onInput", async () => {
    const onInput = vi.fn();
    render(<Textarea aria-label="Título" autoGrow defaultValue="texto" onInput={onInput} />);
    await userEvent.type(screen.getByRole("textbox"), "x");
    expect(onInput).toHaveBeenCalled();
  });

  it("encaminha a ref com e sem autoGrow", () => {
    const ref = createRef<HTMLTextAreaElement>();
    const { rerender } = render(<Textarea aria-label="Mensagem" ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLTextAreaElement);
    rerender(<Textarea aria-label="Mensagem" ref={ref} autoGrow />);
    expect(ref.current).toBeInstanceOf(HTMLTextAreaElement);
  });

  it("não tem violações de acessibilidade", async () => {
    const { container } = render(<Textarea aria-label="Mensagem" />);
    await expectNoA11yViolations(container);
  });
});

describe("Textarea (Figma)", () => {
  it("aplica estilo, tom e forma pill com raio grande", () => {
    render(
      <div>
        <Textarea aria-label="filled" appearance="filled" />
        <Textarea aria-label="pill" shape="pill" tone="neutral" />
      </div>,
    );
    expect(screen.getByLabelText("filled")).toHaveClass("bg-surface-muted");
    expect(screen.getByLabelText("pill")).toHaveClass("rounded-3xl");
    expect(screen.getByLabelText("pill").className).toContain("focus-ring-neutral");
  });
});
