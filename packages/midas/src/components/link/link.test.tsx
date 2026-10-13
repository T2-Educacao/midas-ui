import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import { describe, expect, it } from "vitest";
import { expectNoA11yViolations } from "../../test/axe";
import { Link } from "./link";

describe("Link", () => {
  it("renderiza um <a> inline sublinhado na cor de link", () => {
    render(<Link href="/regulamento">regulamento da ANBIMA</Link>);
    const link = screen.getByRole("link", { name: "regulamento da ANBIMA" });
    expect(link).toHaveAttribute("href", "/regulamento");
    expect(link).toHaveAttribute("data-slot", "link");
    expect(link).toHaveClass("underline", "text-content-link", "text-body-md");
  });

  it("standalone mostra a seta e sublinha só no hover", () => {
    render(
      <Link href="/cursos" variant="standalone">
        Ver todos os cursos
      </Link>,
    );
    const link = screen.getByRole("link");
    expect(link).toHaveClass("hover:underline");
    expect(link.querySelector("svg")).not.toBeNull();
  });

  it("subtle não mostra ícone por padrão e aceita tom neutral e media", () => {
    render(
      <div>
        <Link href="/termos" variant="subtle" tone="neutral">
          Termos de uso
        </Link>
        <Link href="/sobre" tone="media">
          Sobre
        </Link>
      </div>,
    );
    const termos = screen.getByRole("link", { name: "Termos de uso" });
    expect(termos.querySelector("svg")).toBeNull();
    expect(termos).toHaveClass("text-content-primary");
    expect(screen.getByRole("link", { name: "Sobre" })).toHaveClass(
      "text-material-on-media-content",
    );
  });

  it("external abre em nova aba com rel seguro e avisa leitores de tela", () => {
    render(
      <Link href="https://exemplo.com" external>
        Edital
      </Link>,
    );
    const link = screen.getByRole("link", { name: /Edital/ });
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
    expect(link).toHaveTextContent("(abre em nova aba)");
  });

  it("disabled remove o href e marca aria-disabled", () => {
    render(
      <Link href="/x" disabled>
        Indisponível
      </Link>,
    );
    const link = screen.getByText("Indisponível");
    expect(link).not.toHaveAttribute("href");
    expect(link).toHaveAttribute("aria-disabled", "true");
  });

  it("asChild aplica o estilo ao filho", () => {
    render(
      <Link asChild>
        <a href="/curso">Curso</a>
      </Link>,
    );
    expect(screen.getByRole("link", { name: "Curso" })).toHaveClass("text-content-link");
  });

  it("mescla className e encaminha a ref", () => {
    const ref = createRef<HTMLAnchorElement>();
    render(
      <Link ref={ref} href="/" className="text-content-primary">
        Início
      </Link>,
    );
    expect(ref.current).toHaveClass("text-content-primary");
    expect(ref.current).not.toHaveClass("text-content-link");
  });

  it("não tem violações de acessibilidade", async () => {
    const { container } = render(
      <p>
        Leia o{" "}
        <Link href="/a" external>
          regulamento
        </Link>
        .
      </p>,
    );
    await expectNoA11yViolations(container);
  });
});
