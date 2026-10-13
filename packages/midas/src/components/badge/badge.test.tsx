import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { expectNoA11yViolations } from "../../test/axe";
import { Badge } from "./badge";

describe("Badge", () => {
  it("renderiza a variante secondary por padrão", () => {
    render(<Badge>Beta</Badge>);
    expect(screen.getByText("Beta")).toHaveClass("bg-surface-muted", "rounded-pill");
  });

  it("aplica outras variantes", () => {
    render(<Badge variant="destructive">Erro</Badge>);
    expect(screen.getByText("Erro")).toHaveClass("text-status-danger-content");
  });

  it("com asChild vira link", () => {
    render(
      <Badge asChild>
        <a href="/novidades">Novo</a>
      </Badge>,
    );
    expect(screen.getByRole("link", { name: "Novo" })).toHaveAttribute("data-slot", "badge");
  });

  it("não tem violações de acessibilidade", async () => {
    const { container } = render(<Badge>Beta</Badge>);
    await expectNoA11yViolations(container);
  });

  it("aplica as variantes warning e info", () => {
    render(
      <div>
        <Badge variant="warning">Pendente</Badge>
        <Badge variant="info">Dica</Badge>
      </div>,
    );
    expect(screen.getByText("Pendente")).toHaveClass("text-status-warning-content");
    expect(screen.getByText("Dica")).toHaveClass("text-status-info-content");
  });

  it("filled preenche as variantes de estado", () => {
    render(
      <Badge variant="warning" filled>
        Pendente
      </Badge>,
    );
    expect(screen.getByText("Pendente")).toHaveClass(
      "bg-status-warning-fill",
      "text-status-warning-on-fill",
    );
  });

  it("aceita tamanho e ícone embutido", () => {
    render(
      <Badge size="lg" icon={<svg data-testid="icone" />}>
        Grande
      </Badge>,
    );
    expect(screen.getByText("Grande")).toHaveClass("h-6.5");
    expect(screen.getByTestId("icone")).toBeInTheDocument();
  });

  it("count mostra o número e limita em 99+", () => {
    render(
      <>
        <Badge type="count" count={3} />
        <Badge type="count" count={120} />
      </>,
    );
    expect(screen.getByText("3")).toHaveClass("bg-action-accent-bg", "h-5");
    expect(screen.getByText("99+")).toBeInTheDocument();
  });

  it("count aceita tons e tamanhos", () => {
    render(<Badge type="count" count={7} tone="danger" size="lg" />);
    expect(screen.getByText("7")).toHaveClass("bg-status-danger-fill", "h-6");
  });

  it("dot é um ponto com anel e sem conteúdo", () => {
    render(<Badge type="dot" tone="success" data-testid="dot" />);
    const dot = screen.getByTestId("dot");
    expect(dot).toHaveClass("bg-status-success-fill", "border-surface-canvas");
    expect(dot).toBeEmptyDOMElement();
  });
});
