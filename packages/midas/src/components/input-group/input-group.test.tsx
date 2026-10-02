import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { expectNoA11yViolations } from "../../test/axe";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "./input-group";

describe("InputGroup", () => {
  it("combina addon de texto, campo e ícone", () => {
    render(
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput aria-label="Site" placeholder="t2.com.br" />
        <InputGroupAddon align="end">
          <svg data-testid="icone" />
        </InputGroupAddon>
      </InputGroup>,
    );
    expect(screen.getByRole("textbox", { name: "Site" })).toHaveAttribute(
      "data-slot",
      "input-group-control",
    );
    expect(screen.getByText("https://")).toBeInTheDocument();
    expect(screen.getByTestId("icone").parentElement).toHaveAttribute("data-align", "end");
  });

  it("clicar no addon foca o campo", async () => {
    render(
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>R$</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput aria-label="Valor" />
      </InputGroup>,
    );
    await userEvent.click(screen.getByText("R$"));
    expect(screen.getByRole("textbox", { name: "Valor" })).toHaveFocus();
  });

  it("aceita botão dentro do addon", async () => {
    const onClick = vi.fn();
    render(
      <InputGroup>
        <InputGroupInput aria-label="Busca" />
        <InputGroupAddon align="end">
          <InputGroupButton onClick={onClick}>Buscar</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>,
    );
    await userEvent.click(screen.getByRole("button", { name: "Buscar" }));
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(screen.getByRole("button")).toHaveClass("h-6");
  });

  it("aceita textarea", () => {
    render(
      <InputGroup>
        <InputGroupTextarea aria-label="Mensagem" />
      </InputGroup>,
    );
    expect(screen.getByRole("textbox", { name: "Mensagem" }).tagName).toBe("TEXTAREA");
  });

  it("não tem violações de acessibilidade", async () => {
    const { container } = render(
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput aria-label="Site" />
      </InputGroup>,
    );
    await expectNoA11yViolations(container);
  });
});
