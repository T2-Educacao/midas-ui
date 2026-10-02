import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createRef } from "react";
import { describe, expect, it } from "vitest";
import { expectNoA11yViolations } from "../../test/axe";
import { Input } from "./input";

describe("Input", () => {
  it("renderiza um campo de texto com 32px de altura", () => {
    render(<Input aria-label="Nome" placeholder="Seu nome" />);
    const input = screen.getByRole("textbox", { name: "Nome" });
    expect(input).toHaveAttribute("type", "text");
    expect(input).toHaveClass("h-8", "rounded-lg");
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
});
