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
});
