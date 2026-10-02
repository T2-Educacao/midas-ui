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
    expect(button).toHaveClass("bg-primary", "h-8");
  });

  it("aplica variante, tamanho e formato arredondado", () => {
    render(
      <Button variant="destructive" size="lg" rounded>
        Excluir
      </Button>,
    );
    expect(screen.getByRole("button")).toHaveClass("bg-destructive/10", "h-9", "rounded-full");
  });

  it("tem tamanhos de ícone quadrados", () => {
    render(
      <Button size="icon-sm" aria-label="Buscar">
        <svg />
      </Button>,
    );
    expect(screen.getByRole("button", { name: "Buscar" })).toHaveClass("size-7");
  });

  it("mescla className e a classe do usuário vence", () => {
    render(<Button className="h-14 px-8">Grande</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("h-14", "px-8");
    expect(button).not.toHaveClass("h-8", "px-2.5");
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
    expect(link).toHaveClass("bg-primary");
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
});
