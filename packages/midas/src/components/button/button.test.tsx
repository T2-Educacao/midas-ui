import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createRef } from "react";
import { describe, expect, it, vi } from "vitest";
import { expectNoA11yViolations } from "../../test/axe";
import { Button } from "./button";

describe("Button", () => {
  it("renderiza um <button> com type='button' por padrão", () => {
    render(<Button>Salvar</Button>);
    const button = screen.getByRole("button", { name: "Salvar" });
    expect(button.tagName).toBe("BUTTON");
    expect(button).toHaveAttribute("type", "button");
    expect(button).toHaveClass("bg-action-primary-bg", "h-control-md");
  });

  it("aplica variante, tamanho e formato arredondado", () => {
    render(
      <Button variant="destructive" size="lg" rounded>
        Excluir
      </Button>,
    );
    expect(screen.getByRole("button")).toHaveClass(
      "bg-action-destructive-bg",
      "h-control-lg",
      "rounded-pill",
    );
  });

  it("tem tamanhos de ícone quadrados", () => {
    render(
      <Button size="icon-sm" aria-label="Buscar">
        <svg />
      </Button>,
    );
    expect(screen.getByRole("button", { name: "Buscar" })).toHaveClass("size-control-sm");
  });

  it("mescla className e a classe do usuário vence", () => {
    render(<Button className="h-14 px-8">Grande</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("h-14", "px-8");
    expect(button).not.toHaveClass("h-control-md", "px-3");
  });

  it("chama onClick e respeita disabled", async () => {
    const onClick = vi.fn();
    const { rerender } = render(<Button onClick={onClick}>Clique</Button>);
    await userEvent.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalledTimes(1);

    rerender(
      <Button onClick={onClick} disabled>
        Clique
      </Button>,
    );
    await userEvent.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("em loading mostra o spinner, fica desabilitado e marca aria-busy", () => {
    render(<Button loading>Salvando</Button>);
    const button = screen.getByRole("button", { name: "Salvando" });
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute("aria-busy", "true");
    expect(button.querySelector("[data-slot=spinner]")).not.toBeNull();
  });

  it("com asChild renderiza o filho com o visual de botão", () => {
    render(
      <Button asChild>
        <a href="/cursos">Ver cursos</a>
      </Button>,
    );
    const link = screen.getByRole("link", { name: "Ver cursos" });
    expect(link).toHaveAttribute("href", "/cursos");
    expect(link).toHaveClass("bg-action-primary-bg");
    expect(link).not.toHaveAttribute("type");
  });

  it("encaminha a ref para o elemento", () => {
    const ref = createRef<HTMLButtonElement>();
    render(<Button ref={ref}>Ref</Button>);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });

  it("não tem violações de acessibilidade", async () => {
    const { container } = render(
      <div>
        <Button>Acessível</Button>
        <Button loading>Carregando</Button>
      </div>,
    );
    await expectNoA11yViolations(container);
  });

  it("aplica as variantes warning e info", () => {
    render(
      <div>
        <Button variant="warning">Atenção</Button>
        <Button variant="info">Info</Button>
      </div>,
    );
    expect(screen.getByRole("button", { name: "Atenção" })).toHaveClass(
      "text-status-warning-content",
    );
    expect(screen.getByRole("button", { name: "Info" })).toHaveClass("text-status-info-content");
  });

  it("em botão só de ícone, loading mostra apenas o spinner", () => {
    render(
      <Button size="icon" loading aria-label="Salvar">
        <svg data-testid="icone" />
      </Button>,
    );
    expect(screen.queryByTestId("icone")).not.toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Salvar" })).toHaveAttribute("aria-busy", "true");
  });

  it("em botão com texto, loading mantém o conteúdo ao lado do spinner", () => {
    render(<Button loading>Salvando</Button>);
    expect(screen.getByRole("button", { name: /Salvando/ })).toBeInTheDocument();
  });

  it("filled preenche as variantes de estado", () => {
    render(
      <div>
        <Button variant="destructive" filled>
          Excluir
        </Button>
        <Button variant="success" filled>
          Aprovar
        </Button>
      </div>,
    );
    const excluir = screen.getByRole("button", { name: "Excluir" });
    expect(excluir).toHaveClass("bg-action-destructive-bg", "text-action-destructive-content");
    expect(screen.getByRole("button", { name: "Aprovar" })).toHaveClass(
      "bg-status-success-fill",
      "text-status-success-on-fill",
    );
  });

  it("loadingText substitui o conteúdo durante o carregamento", () => {
    const { rerender } = render(
      <Button loading loadingText="Salvando...">
        Salvar
      </Button>,
    );
    expect(screen.getByRole("button")).toHaveTextContent("Salvando...");
    expect(screen.getByRole("button")).not.toHaveTextContent("Salvar");
    rerender(<Button loadingText="Salvando...">Salvar</Button>);
    expect(screen.getByRole("button")).toHaveTextContent("Salvar");
  });

  it("aplica as variantes do Figma (accent, secondary, outline, ghost)", () => {
    render(
      <div>
        <Button variant="accent">Assinar</Button>
        <Button variant="secondary">Voltar</Button>
        <Button variant="outline">Filtrar</Button>
        <Button variant="ghost">Mais</Button>
      </div>,
    );
    expect(screen.getByRole("button", { name: "Assinar" })).toHaveClass("bg-action-accent-bg");
    expect(screen.getByRole("button", { name: "Voltar" })).toHaveClass("bg-action-secondary-bg");
    expect(screen.getByRole("button", { name: "Filtrar" })).toHaveClass(
      "border-border-default",
      "shadow-elevation-control",
    );
    expect(screen.getByRole("button", { name: "Mais" })).toHaveClass("hover:bg-state-hover");
  });

  it("aplica a escala de tamanhos do Figma (xs a xl) com raios por tamanho", () => {
    render(
      <div>
        <Button size="xs">XS</Button>
        <Button size="md">MD</Button>
        <Button size="xl">XL</Button>
      </div>,
    );
    expect(screen.getByRole("button", { name: "XS" })).toHaveClass("h-control-xs", "rounded-xs");
    expect(screen.getByRole("button", { name: "MD" })).toHaveClass(
      "h-control-md",
      "rounded-control",
    );
    expect(screen.getByRole("button", { name: "XL" })).toHaveClass("h-control-xl", "rounded-md");
  });

  it("aplica variantes expressivas sobre mídia", () => {
    render(
      <div>
        <Button variant="glass" size="2xl">
          Glass
        </Button>
        <Button variant="gradient-accent">Gradiente</Button>
      </div>,
    );
    expect(screen.getByRole("button", { name: "Glass" })).toHaveClass(
      "material-glass",
      "h-control-2xl",
    );
    expect(screen.getByRole("button", { name: "Gradiente" })).toHaveClass("material-sheen");
  });

  it("não tem hover quando desabilitado", () => {
    render(<Button disabled>Desabilitado</Button>);
    expect(screen.getByRole("button")).toHaveClass(
      "disabled:pointer-events-none",
      "disabled:opacity-disabled",
    );
  });
});
