import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { expectNoA11yViolations } from "../../test/axe";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";

function Exemplo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Plano anual</CardTitle>
        <CardDescription>Acesso a todos os cursos</CardDescription>
        <CardAction>1/2</CardAction>
      </CardHeader>
      <CardContent>Conteúdo</CardContent>
      <CardFooter>Rodapé</CardFooter>
    </Card>
  );
}

describe("Card", () => {
  it("renderiza todas as partes com data-slot", () => {
    render(<Exemplo />);
    expect(screen.getByText("Plano anual")).toHaveAttribute("data-slot", "card-title");
    expect(screen.getByText("Acesso a todos os cursos")).toHaveAttribute(
      "data-slot",
      "card-description",
    );
    expect(screen.getByText("1/2")).toHaveAttribute("data-slot", "card-action");
    expect(screen.getByText("Rodapé")).toHaveClass("bg-muted", "border-t");
  });

  it("aceita o tamanho sm", () => {
    render(<Card size="sm">Compacto</Card>);
    expect(screen.getByText("Compacto")).toHaveAttribute("data-size", "sm");
  });

  it("não tem violações de acessibilidade", async () => {
    const { container } = render(<Exemplo />);
    await expectNoA11yViolations(container);
  });

  it("deixa o conteúdo vazar quando a classe do usuário pede", () => {
    const { container } = render(<Card className="overflow-visible py-0">Conteúdo</Card>);
    const card = container.querySelector("[data-slot=card]");
    expect(card).toHaveClass("overflow-visible", "py-0");
    expect(card).not.toHaveClass("overflow-hidden", "py-4");
  });
});
