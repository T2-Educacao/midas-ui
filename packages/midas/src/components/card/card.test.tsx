import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { expectNoA11yViolations } from "../../test/axe";
import {
  Card,
  CardAction,
  CardBody,
  CardContent,
  CardDescription,
  CardExpiry,
  CardEyebrow,
  CardFooter,
  CardHeader,
  CardMedia,
  CardMeta,
  CardTag,
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
    expect(screen.getByText("Rodapé")).toHaveClass("bg-surface-muted", "border-t");
  });

  it("aceita o tamanho sm", () => {
    render(<Card size="sm">Compacto</Card>);
    expect(screen.getByText("Compacto")).toHaveAttribute("data-size", "sm");
  });

  it.each(["s", "m", "l"] as const)("tamanho %s define data-size", (size) => {
    render(<Card size={size}>Texto</Card>);
    expect(screen.getByText("Texto")).toHaveAttribute("data-size", size);
  });

  it("layouts, superfície e hover viram atributos e classes de token", () => {
    render(
      <Card layout="overlay" surface="glass" hover="tint" size="l">
        Texto
      </Card>,
    );
    const card = screen.getByText("Texto");
    expect(card).toHaveAttribute("data-layout", "overlay");
    expect(card).toHaveAttribute("data-surface", "glass");
    expect(card).toHaveAttribute("data-hover", "tint");
    expect(card).toHaveClass("material-glass", "hover:bg-selection-bg", "min-h-120");
  });

  it("partes do Figma: media, tag, eyebrow, meta, expiry, body", () => {
    render(
      <Card layout="horizontal">
        <CardMedia>
          <img alt="Capa do curso" src="/capa.png" />
          <CardTag>23 aulas</CardTag>
        </CardMedia>
        <CardBody>
          <CardEyebrow>Trilha · Investimentos</CardEyebrow>
          <CardTitle>Renda fixa do zero</CardTitle>
          <CardMeta>
            <span>25 min</span>
          </CardMeta>
          <CardExpiry status="warning">Expira em 3 dias</CardExpiry>
        </CardBody>
      </Card>,
    );
    expect(screen.getByText("23 aulas")).toHaveAttribute("data-slot", "card-tag");
    expect(screen.getByText("Trilha · Investimentos")).toHaveClass("text-mono-overline");
    expect(screen.getByText("Expira em 3 dias")).toHaveClass("text-status-warning-content");
    expect(screen.getByRole("img", { name: "Capa do curso" })).toBeInTheDocument();
  });

  it("não tem violações de acessibilidade", async () => {
    const { container } = render(<Exemplo />);
    await expectNoA11yViolations(container);
  });

  it("deixa o conteúdo vazar quando a classe do usuário pede", () => {
    const { container } = render(<Card className="overflow-visible py-0">Conteúdo</Card>);
    const card = container.querySelector("[data-slot=card]");
    expect(card).toHaveClass("overflow-visible", "py-0");
    expect(card).not.toHaveClass("overflow-hidden");
  });
});
