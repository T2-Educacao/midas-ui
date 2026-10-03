import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
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

  it("não tem violações de acessibilidade", async () => {
    const { container } = render(<Textarea aria-label="Mensagem" />);
    await expectNoA11yViolations(container);
  });
});
