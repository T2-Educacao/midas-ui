import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import { describe, expect, it } from "vitest";
import { expectNoA11yViolations } from "../../test/axe";
import {
  Breadcrumb,
  BreadcrumbBack,
  BreadcrumbEllipsis,
  BreadcrumbHome,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./breadcrumb";

function Exemplo() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Início</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbEllipsis />
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <a href="/cursos">Cursos</a>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>React</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}

describe("Breadcrumb", () => {
  it("renderiza nav com label e lista ordenada", () => {
    render(<Exemplo />);
    expect(screen.getByRole("navigation", { name: "Trilha de navegação" })).toHaveAttribute(
      "data-slot",
      "breadcrumb",
    );
    expect(screen.getByRole("list").tagName).toBe("OL");
  });

  it("aceita aria-label próprio", () => {
    render(<Breadcrumb aria-label="Caminho" />);
    expect(screen.getByRole("navigation", { name: "Caminho" })).toBeInTheDocument();
  });

  it("links funcionam, inclusive com asChild", () => {
    render(<Exemplo />);
    expect(screen.getByRole("link", { name: "Início" })).toHaveAttribute("href", "/");
    expect(screen.getByRole("link", { name: "Cursos" })).toHaveAttribute(
      "data-slot",
      "breadcrumb-link",
    );
  });

  it("página atual tem aria-current", () => {
    render(<Exemplo />);
    expect(screen.getByText("React")).toHaveAttribute("aria-current", "page");
  });

  it("separador e reticências ficam ocultos e o ícone inverte em RTL", () => {
    const { container } = render(<Exemplo />);
    const separador = container.querySelector("[data-slot=breadcrumb-separator]");
    expect(separador).toHaveAttribute("aria-hidden", "true");
    expect(separador?.querySelector("svg")).toHaveClass("rtl:rotate-180");
    expect(container.querySelector("[data-slot=breadcrumb-ellipsis]")).toHaveAttribute(
      "aria-hidden",
      "true",
    );
  });

  it("className mescla e a do usuário vence", () => {
    render(<BreadcrumbPage className="font-bold text-status-danger-content">Aqui</BreadcrumbPage>);
    expect(screen.getByText("Aqui")).toHaveClass("font-bold", "text-status-danger-content");
    expect(screen.getByText("Aqui")).not.toHaveClass("text-content-primary");
  });

  it("aplica tom, separador e contêiner pelos atributos do nav", () => {
    render(
      <Breadcrumb tone="media" separator="slash" contained aria-label="Sobre o hero">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbHome href="/" />
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Aula</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>,
    );
    const nav = screen.getByRole("navigation", { name: "Sobre o hero" });
    expect(nav).toHaveAttribute("data-tone", "media");
    expect(nav).toHaveAttribute("data-separator", "slash");
    expect(nav).toHaveAttribute("data-contained", "true");
    expect(nav).toHaveClass("rounded-pill");
    expect(screen.getByRole("link", { name: "Início" })).toHaveAttribute(
      "data-slot",
      "breadcrumb-home",
    );
  });

  it("BreadcrumbBack mostra ícone invertido em RTL", () => {
    render(<BreadcrumbBack href="/modulo">Módulo 3</BreadcrumbBack>);
    const link = screen.getByRole("link", { name: "Módulo 3" });
    expect(link).toHaveAttribute("data-slot", "breadcrumb-back");
    expect(link.querySelector("svg")).toHaveClass("rtl:rotate-180");
  });

  it("encaminha ref", () => {
    const ref = createRef<HTMLAnchorElement>();
    render(
      <BreadcrumbLink ref={ref} href="/">
        Início
      </BreadcrumbLink>,
    );
    expect(ref.current?.tagName).toBe("A");
  });

  it("não tem violações de acessibilidade", async () => {
    const { container } = render(<Exemplo />);
    await expectNoA11yViolations(container);
  });
});
