import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { expectNoA11yViolations } from "../../test/axe";
import { Badge } from "./badge";

describe("Badge", () => {
  it("renderiza a variante secondary por padrão", () => {
    render(<Badge>Beta</Badge>);
    expect(screen.getByText("Beta")).toHaveClass("bg-secondary", "rounded-full");
  });

  it("aplica outras variantes", () => {
    render(<Badge variant="destructive">Erro</Badge>);
    expect(screen.getByText("Erro")).toHaveClass("text-destructive");
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
    expect(screen.getByText("Pendente")).toHaveClass("text-warning");
    expect(screen.getByText("Dica")).toHaveClass("text-info");
  });

  it("filled preenche as variantes de estado", () => {
    render(
      <Badge variant="warning" filled>
        Pendente
      </Badge>,
    );
    expect(screen.getByText("Pendente")).toHaveClass("bg-warning", "text-warning-foreground");
    expect(screen.getByText("Pendente")).not.toHaveClass("bg-warning/10");
  });
});
