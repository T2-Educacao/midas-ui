import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createRef } from "react";
import { describe, expect, it } from "vitest";
import { expectNoA11yViolations } from "../../test/axe";
import { Input } from "./input";

describe("Input", () => {
  it("renderiza um campo de texto com 48px de altura e raio de controle", () => {
    render(<Input aria-label="Nome" placeholder="Seu nome" />);
    const input = screen.getByRole("textbox", { name: "Nome" });
    expect(input).toHaveAttribute("type", "text");
    expect(input).toHaveClass("h-control-xl", "rounded-control", "border-border-subtle");
  });

  it("aplica tamanhos SM e LG do Figma", () => {
    render(
      <div>
        <Input aria-label="sm" size="sm" />
        <Input aria-label="lg" size="lg" />
      </div>,
    );
    expect(screen.getByLabelText("sm")).toHaveClass("h-control-lg");
    expect(screen.getByLabelText("lg")).toHaveClass("h-control-2xl");
  });

  it("aplica estilo filled, glass, tom neutro e forma pill", () => {
    render(
      <div>
        <Input aria-label="filled" appearance="filled" />
        <Input aria-label="glass" appearance="glass" />
        <Input aria-label="neutro" tone="neutral" />
        <Input aria-label="pill" shape="pill" />
      </div>,
    );
    expect(screen.getByLabelText("filled")).toHaveClass("bg-surface-muted");
    expect(screen.getByLabelText("glass")).toHaveClass("bg-material-glass-surface");
    expect(screen.getByLabelText("neutro").className).toContain("focus-ring-neutral");
    expect(screen.getByLabelText("pill")).toHaveClass("rounded-pill");
  });

  it("marca sucesso com data-success", () => {
    render(<Input aria-label="ok" success />);
    expect(screen.getByLabelText("ok")).toHaveAttribute("data-success", "true");
  });

  it("mescla className com a do usuário vencendo", () => {
    render(<Input aria-label="x" className="h-10" />);
    expect(screen.getByLabelText("x")).toHaveClass("h-10");
    expect(screen.getByLabelText("x")).not.toHaveClass("h-control-xl");
  });

  it("aceita digitação", async () => {
    render(<Input aria-label="Nome" />);
    await userEvent.type(screen.getByRole("textbox"), "Ana");
    expect(screen.getByRole("textbox")).toHaveValue("Ana");
  });

  it("marca o estado inválido com aria-invalid", () => {
    render(<Input aria-label="E-mail" aria-invalid />);
    expect(screen.getByRole("textbox")).toHaveAttribute("aria-invalid", "true");
  });

  it("aceita outros tipos, como file", () => {
    const { container } = render(<Input type="file" aria-label="Foto" />);
    expect(container.querySelector("input[type=file]")).not.toBeNull();
  });

  it("encaminha a ref", () => {
    const ref = createRef<HTMLInputElement>();
    render(<Input ref={ref} aria-label="Ref" />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  it("não tem violações de acessibilidade", async () => {
    const { container } = render(<Input aria-label="Nome" />);
    await expectNoA11yViolations(container);
  });

  it("limita o ano de campos de data por padrão", () => {
    render(
      <div>
        <Input type="date" aria-label="Data" />
        <Input type="datetime-local" aria-label="Quando" />
      </div>,
    );
    expect(screen.getByLabelText("Data")).toHaveAttribute("min", "1900-01-01");
    expect(screen.getByLabelText("Data")).toHaveAttribute("max", "2100-12-31");
    expect(screen.getByLabelText("Quando")).toHaveAttribute("max", "2100-12-31T23:59");
  });

  it("respeita min e max passados pelo chamador", () => {
    render(<Input type="date" aria-label="Data" min="2020-01-01" max="2030-01-01" />);
    expect(screen.getByLabelText("Data")).toHaveAttribute("min", "2020-01-01");
    expect(screen.getByLabelText("Data")).toHaveAttribute("max", "2030-01-01");
  });

  it("não aplica limites a outros tipos", () => {
    render(<Input aria-label="Nome" />);
    expect(screen.getByLabelText("Nome")).not.toHaveAttribute("max");
  });
});
