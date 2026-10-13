import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createRef } from "react";
import { describe, expect, it, vi } from "vitest";
import { expectNoA11yViolations } from "../../test/axe";
import {
  BottomNavigation,
  BottomNavigationAction,
  BottomNavigationItem,
} from "./bottom-navigation";

function Exemplo({
  variant,
}: {
  variant?: "bar" | "minimal" | "glass-bar" | "floating" | "icon-pill" | "center-action";
}) {
  return (
    <BottomNavigation variant={variant}>
      <BottomNavigationItem active icon={<svg aria-hidden="true" />}>
        Início
      </BottomNavigationItem>
      <BottomNavigationItem icon={<svg aria-hidden="true" />}>Trilhas</BottomNavigationItem>
      <BottomNavigationItem icon={<svg aria-hidden="true" />}>Carteira</BottomNavigationItem>
    </BottomNavigation>
  );
}

describe("BottomNavigation", () => {
  it("renderiza nav Principal com itens e item atual", () => {
    render(<Exemplo />);
    expect(screen.getByRole("navigation", { name: "Principal" })).toHaveAttribute(
      "data-slot",
      "bottom-navigation",
    );
    expect(screen.getByRole("button", { name: "Início" })).toHaveAttribute("aria-current", "page");
    expect(screen.getByRole("button", { name: "Trilhas" })).not.toHaveAttribute("aria-current");
  });

  it.each(["bar", "minimal", "glass-bar", "floating", "icon-pill", "center-action"] as const)(
    "aplica o estilo %s",
    (variant) => {
      render(<Exemplo variant={variant} />);
      expect(screen.getByRole("navigation")).toHaveAttribute("data-variant", variant);
    },
  );

  it("vidro usa material glass", () => {
    render(<Exemplo variant="floating" />);
    expect(screen.getByRole("navigation")).toHaveClass("material-glass-strong", "rounded-pill");
  });

  it("ação central dispara onClick", async () => {
    const onClick = vi.fn();
    render(
      <BottomNavigation variant="center-action">
        <BottomNavigationAction aria-label="Nova nota" onClick={onClick} />
      </BottomNavigation>,
    );
    await userEvent.click(screen.getByRole("button", { name: "Nova nota" }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("className mescla e ref é encaminhada", () => {
    const ref = createRef<HTMLElement>();
    render(<BottomNavigation ref={ref} className="bg-surface-muted" aria-label="Abas" />);
    expect(ref.current?.tagName).toBe("NAV");
    expect(ref.current).toHaveClass("bg-surface-muted");
    expect(ref.current).not.toHaveClass("bg-surface-default");
  });

  it("não tem violações de acessibilidade", async () => {
    const { container } = render(<Exemplo />);
    await expectNoA11yViolations(container);
  });
});
