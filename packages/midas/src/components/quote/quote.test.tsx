import { render, screen } from "@testing-library/react";
import * as React from "react";
import { describe, expect, it } from "vitest";
import { expectNoA11yViolations } from "../../test/axe";
import { Quote } from "./quote";

describe("Quote", () => {
  it("renderiza figure com blockquote e autor", async () => {
    const ref = React.createRef<HTMLElement>();
    const { container } = render(
      <Quote ref={ref} author="Ana Lima" authorRole="Professora" className="extra">
        Estudar 25 minutos por dia vence uma maratona.
      </Quote>,
    );
    const figure = container.querySelector("figure");
    expect(figure).toHaveAttribute("data-slot", "quote");
    expect(figure?.className).toContain("extra");
    expect(figure?.className).toContain("border-s-action-accent-bg");
    expect(ref.current).toBe(figure);
    expect(screen.getByText(/Estudar 25 minutos/).tagName).toBe("BLOCKQUOTE");
    expect(screen.getByText("Ana Lima")).toBeInTheDocument();
    await expectNoA11yViolations(container);
  });

  it.each(["pull-quote", "testimonial", "tip", "citation"] as const)("tipo %s", async (type) => {
    const { container } = render(
      <Quote type={type} label="DICA" author="Fulano" badge={<span>Aprovada</span>}>
        Texto
      </Quote>,
    );
    expect(container.firstElementChild).toHaveAttribute("data-type", type);
    await expectNoA11yViolations(container);
  });

  it("citation com fonte e link", () => {
    render(
      <Quote type="citation" source="Resolução CVM 175" href="/cvm175">
        Os fundos serão constituídos.
      </Quote>,
    );
    expect(screen.getByText("Resolução CVM 175")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Ler o documento" })).toHaveAttribute(
      "href",
      "/cvm175",
    );
  });

  it("aplica estilos Card, Glass e tom neutro", () => {
    const { rerender, container } = render(<Quote surface="card">x</Quote>);
    expect(container.firstElementChild?.className).toContain("shadow-elevation-card");
    rerender(<Quote surface="glass">x</Quote>);
    expect(container.firstElementChild?.className).toContain("material-glass");
    rerender(<Quote tone="neutral">x</Quote>);
    expect(container.firstElementChild?.className).toContain("border-s-border-strong");
  });
});
