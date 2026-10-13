import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import { describe, expect, it } from "vitest";
import { expectNoA11yViolations } from "../../test/axe";
import { Header, HeaderActions, HeaderBrand, HeaderNav, HeaderNavItem } from "./header";

function Exemplo({ variant }: { variant?: "transparent" | "glass" | "solid" | "floating" }) {
  return (
    <Header variant={variant}>
      <HeaderBrand>T2</HeaderBrand>
      <HeaderNav>
        <HeaderNavItem asChild active>
          <a href="/">Início</a>
        </HeaderNavItem>
        <HeaderNavItem asChild>
          <a href="/trilhas">Trilhas</a>
        </HeaderNavItem>
      </HeaderNav>
      <HeaderActions>
        <button type="button">Entrar</button>
      </HeaderActions>
    </Header>
  );
}

describe("Header", () => {
  it("renderiza header com nav Principal e item atual", () => {
    render(<Exemplo />);
    expect(screen.getByRole("banner")).toHaveAttribute("data-slot", "header");
    expect(screen.getByRole("navigation", { name: "Principal" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Início" })).toHaveAttribute("aria-current", "page");
    expect(screen.getByRole("link", { name: "Trilhas" })).not.toHaveAttribute("aria-current");
  });

  it.each(["transparent", "glass", "solid", "floating"] as const)(
    "aplica o estilo %s",
    (variant) => {
      render(<Exemplo variant={variant} />);
      expect(screen.getByRole("banner")).toHaveAttribute("data-variant", variant);
    },
  );

  it("glass e floating usam vidro; solid usa surface-default", () => {
    const { rerender } = render(<Exemplo variant="glass" />);
    expect(screen.getByRole("banner")).toHaveClass("material-glass-strong");
    rerender(<Exemplo variant="solid" />);
    expect(screen.getByRole("banner")).toHaveClass("bg-surface-default");
    rerender(<Exemplo variant="floating" />);
    expect(screen.getByRole("banner")).toHaveClass("rounded-pill", "shadow-elevation-overlay");
  });

  it("showLight marca o atributo", () => {
    render(<Header showLight />);
    expect(screen.getByRole("banner")).toHaveAttribute("data-light", "true");
  });

  it("className mescla e ref é encaminhada", () => {
    const ref = createRef<HTMLElement>();
    render(<Header ref={ref} className="h-20" />);
    expect(ref.current?.tagName).toBe("HEADER");
    expect(ref.current).toHaveClass("h-20");
    expect(ref.current).not.toHaveClass("h-14");
  });

  it("não tem violações de acessibilidade", async () => {
    const { container } = render(<Exemplo variant="solid" />);
    await expectNoA11yViolations(container);
  });
});
