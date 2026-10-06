import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import { describe, expect, it } from "vitest";
import { expectNoA11yViolations } from "../../test/axe";
import {
  NavItem,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
} from "./sidebar";

function Exemplo({ collapsed }: { collapsed?: boolean }) {
  return (
    <Sidebar collapsed={collapsed} aria-label="Principal">
      <SidebarHeader>Midas</SidebarHeader>
      <SidebarContent aria-label="Navegação">
        <SidebarGroup aria-label="Geral">
          <SidebarGroupLabel>Geral</SidebarGroupLabel>
          <NavItem asChild icon={<svg aria-hidden="true" />} active badge="3">
            <a href="/inicio">Início</a>
          </NavItem>
          <NavItem icon={<svg aria-hidden="true" />}>Cursos</NavItem>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>Rodapé</SidebarFooter>
    </Sidebar>
  );
}

describe("Sidebar", () => {
  it("renderiza aside com nav e itens", () => {
    render(<Exemplo />);
    expect(screen.getByRole("complementary")).toHaveAttribute("data-slot", "sidebar");
    expect(screen.getByRole("navigation", { name: "Navegação" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Início/ })).toHaveAttribute("data-slot", "nav-item");
    expect(screen.getByText("3")).toBeInTheDocument();
  });

  it("item ativo recebe aria-current e estilo ativo", () => {
    render(<Exemplo />);
    const link = screen.getByRole("link", { name: /Início/ });
    expect(link).toHaveAttribute("aria-current", "page");
    expect(link).toHaveClass("bg-accent");
    expect(screen.getByRole("button", { name: "Cursos" })).not.toHaveAttribute("aria-current");
  });

  it("recolhida esconde rótulos e badge e usa title", () => {
    render(<Exemplo collapsed />);
    expect(screen.getByRole("complementary")).toHaveAttribute("data-collapsed", "true");
    const link = screen.getByRole("link", { name: "Início" });
    expect(link).toHaveAttribute("title", "Início");
    expect(screen.getByText("Início")).toHaveClass("sr-only");
    expect(screen.queryByText("3")).not.toBeInTheDocument();
    expect(screen.getByText("Geral")).toHaveClass("sr-only");
  });

  it("className mescla e a do usuário vence", () => {
    render(
      <Sidebar className="w-80" aria-label="Lateral">
        <NavItem className="px-8">Item</NavItem>
      </Sidebar>,
    );
    expect(screen.getByRole("complementary")).toHaveClass("w-80");
    expect(screen.getByRole("complementary")).not.toHaveClass("w-64");
    expect(screen.getByRole("button", { name: "Item" })).toHaveClass("px-8");
    expect(screen.getByRole("button", { name: "Item" })).not.toHaveClass("px-3");
  });

  it("encaminha ref", () => {
    const ref = createRef<HTMLElement>();
    render(<Sidebar ref={ref} aria-label="Lateral" />);
    expect(ref.current?.tagName).toBe("ASIDE");
  });

  it("não tem violações de acessibilidade", async () => {
    const { container } = render(<Exemplo />);
    await expectNoA11yViolations(container);
  });

  it("não tem violações de acessibilidade recolhida", async () => {
    const { container } = render(<Exemplo collapsed />);
    await expectNoA11yViolations(container);
  });
});
