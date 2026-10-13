import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { expectNoA11yViolations } from "../../test/axe";
import { Button } from "../button/button";
import { ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from "./button-group";

describe("ButtonGroup", () => {
  it("agrupa botões com role='group' na horizontal por padrão", () => {
    render(
      <ButtonGroup aria-label="Ações">
        <Button variant="outline">Arquivar</Button>
        <Button variant="outline">Denunciar</Button>
      </ButtonGroup>,
    );
    const group = screen.getByRole("group", { name: "Ações" });
    expect(group).toHaveAttribute("data-orientation", "horizontal");
    expect(screen.getAllByRole("button")).toHaveLength(2);
  });

  it("aceita orientação vertical", () => {
    render(
      <ButtonGroup orientation="vertical" aria-label="Zoom">
        <Button variant="outline">+</Button>
        <Button variant="outline">-</Button>
      </ButtonGroup>,
    );
    const group = screen.getByRole("group", { name: "Zoom" });
    expect(group).toHaveAttribute("data-orientation", "vertical");
    expect(group).toHaveClass("flex-col");
  });

  it("renderiza texto e separador", () => {
    render(
      <ButtonGroup aria-label="Moeda">
        <ButtonGroupText>R$</ButtonGroupText>
        <ButtonGroupSeparator />
        <Button variant="outline">Alterar</Button>
      </ButtonGroup>,
    );
    expect(screen.getByText("R$")).toHaveAttribute("data-slot", "button-group-text");
    expect(document.querySelector("[data-slot=button-group-separator]")).not.toBeNull();
  });

  it("não tem violações de acessibilidade", async () => {
    const { container } = render(
      <ButtonGroup aria-label="Ações">
        <Button variant="outline">Arquivar</Button>
        <ButtonGroupSeparator />
        <Button variant="outline">Adiar</Button>
      </ButtonGroup>,
    );
    await expectNoA11yViolations(container);
  });

  it("layout attached cria o contêiner segmentado do Figma", () => {
    render(
      <ButtonGroup layout="attached" aria-label="Período">
        <Button variant="ghost">Dia</Button>
        <ButtonGroupSeparator />
        <Button variant="secondary">Semana</Button>
      </ButtonGroup>,
    );
    const group = screen.getByRole("group", { name: "Período" });
    expect(group).toHaveAttribute("data-layout", "attached");
    expect(group).toHaveClass("rounded-overlay", "border-border-default", "p-0.5");
  });

  it("layout spaced afasta os botões e stacked empilha em largura total", () => {
    render(
      <div>
        <ButtonGroup layout="spaced" aria-label="Ações">
          <Button>Salvar</Button>
        </ButtonGroup>
        <ButtonGroup layout="stacked" aria-label="Pilha">
          <Button>Continuar</Button>
        </ButtonGroup>
      </div>,
    );
    expect(screen.getByRole("group", { name: "Ações" })).toHaveClass("gap-2");
    const stacked = screen.getByRole("group", { name: "Pilha" });
    expect(stacked).toHaveClass("flex-col", "w-full");
    expect(stacked).toHaveAttribute("data-orientation", "vertical");
  });
});
