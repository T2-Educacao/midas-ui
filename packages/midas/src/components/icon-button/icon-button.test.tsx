import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createRef } from "react";
import { describe, expect, it, vi } from "vitest";
import { expectNoA11yViolations } from "../../test/axe";
import { IconButton } from "./icon-button";

describe("IconButton", () => {
  it("renderiza um botão quadrado do tamanho md com o rótulo acessível", () => {
    render(
      <IconButton aria-label="Buscar">
        <svg />
      </IconButton>,
    );
    const button = screen.getByRole("button", { name: "Buscar" });
    expect(button).toHaveAttribute("data-slot", "icon-button");
    expect(button).toHaveClass("size-control-md", "rounded-control");
  });

  it("aplica tamanhos do Figma", () => {
    render(
      <div>
        <IconButton aria-label="XS" size="xs" />
        <IconButton aria-label="LG" size="lg" />
        <IconButton aria-label="XL" size="xl" />
      </div>,
    );
    expect(screen.getByRole("button", { name: "XS" })).toHaveClass("size-control-xs", "rounded-xs");
    expect(screen.getByRole("button", { name: "LG" })).toHaveClass("size-control-lg");
    expect(screen.getByRole("button", { name: "XL" })).toHaveClass("size-control-xl", "rounded-md");
  });

  it("shape circle fica totalmente redondo e variant muda o estilo", () => {
    render(<IconButton aria-label="Adicionar" shape="circle" variant="accent" />);
    expect(screen.getByRole("button")).toHaveClass("rounded-pill", "bg-action-accent-bg");
  });

  it("mescla className, encaminha ref e respeita disabled", async () => {
    const ref = createRef<HTMLButtonElement>();
    const onClick = vi.fn();
    render(
      <IconButton ref={ref} aria-label="Fechar" className="size-12" disabled onClick={onClick} />,
    );
    await userEvent.click(screen.getByRole("button"));
    expect(onClick).not.toHaveBeenCalled();
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
    expect(ref.current).toHaveClass("size-12");
    expect(ref.current).not.toHaveClass("size-control-md");
  });

  it("não tem violações de acessibilidade", async () => {
    const { container } = render(
      <IconButton aria-label="Buscar">
        <svg aria-hidden="true" />
      </IconButton>,
    );
    await expectNoA11yViolations(container);
  });
});
