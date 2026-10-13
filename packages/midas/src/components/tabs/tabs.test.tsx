import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as React from "react";
import { describe, expect, it } from "vitest";
import { expectNoA11yViolations } from "../../test/axe";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";

function Exemplo({
  variant,
  orientation,
}: {
  variant?: "default" | "line" | "underline" | "pill" | "segmented" | "plain";
  orientation?: "horizontal" | "vertical";
}) {
  return (
    <Tabs defaultValue="conta" orientation={orientation}>
      <TabsList variant={variant} aria-label="Configurações">
        <TabsTrigger value="conta">Conta</TabsTrigger>
        <TabsTrigger value="senha">Senha</TabsTrigger>
        <TabsTrigger value="plano" disabled>
          Plano
        </TabsTrigger>
      </TabsList>
      <TabsContent value="conta">Conteúdo da conta</TabsContent>
      <TabsContent value="senha">Conteúdo da senha</TabsContent>
      <TabsContent value="plano">Conteúdo do plano</TabsContent>
    </Tabs>
  );
}

describe("Tabs", () => {
  it("renderiza tablist, tabs e o painel ativo", () => {
    render(<Exemplo />);
    expect(screen.getByRole("tablist")).toBeInTheDocument();
    expect(screen.getAllByRole("tab")).toHaveLength(3);
    expect(screen.getByRole("tabpanel")).toHaveTextContent("Conteúdo da conta");
  });

  it("troca de aba ao clicar", async () => {
    render(<Exemplo />);
    await userEvent.click(screen.getByRole("tab", { name: "Senha" }));
    expect(screen.getByRole("tab", { name: "Senha" })).toHaveAttribute("data-state", "active");
    expect(screen.getByRole("tabpanel")).toHaveTextContent("Conteúdo da senha");
  });

  it("navega com as setas do teclado", async () => {
    render(<Exemplo />);
    screen.getByRole("tab", { name: "Conta" }).focus();
    await userEvent.keyboard("{ArrowRight}");
    expect(screen.getByRole("tab", { name: "Senha" })).toHaveFocus();
  });

  it("não ativa aba desabilitada", async () => {
    render(<Exemplo />);
    await userEvent.click(screen.getByRole("tab", { name: "Plano" }));
    expect(screen.getByRole("tab", { name: "Conta" })).toHaveAttribute("data-state", "active");
  });

  it("aplica a variante da lista", () => {
    const { rerender } = render(<Exemplo />);
    expect(screen.getByRole("tablist")).toHaveAttribute("data-variant", "default");
    expect(screen.getByRole("tablist")).toHaveClass("bg-surface-muted");
    rerender(<Exemplo variant="line" />);
    expect(screen.getByRole("tablist")).toHaveAttribute("data-variant", "line");
    expect(screen.getByRole("tablist")).toHaveClass("bg-transparent");
  });

  it.each(["underline", "pill", "segmented", "plain"] as const)(
    "aplica o tipo %s com tamanho e tom",
    (variant) => {
      render(
        <Tabs defaultValue="a">
          <TabsList variant={variant} size="sm" tone="neutral" aria-label="Seções">
            <TabsTrigger value="a" icon={<svg aria-hidden="true" />} count={24}>
              Aulas
            </TabsTrigger>
          </TabsList>
        </Tabs>,
      );
      const list = screen.getByRole("tablist");
      expect(list).toHaveAttribute("data-variant", variant);
      expect(list).toHaveAttribute("data-size", "sm");
      expect(list).toHaveAttribute("data-tone", "neutral");
      expect(screen.getByRole("tab")).toHaveClass("h-control-md");
      expect(screen.getByText("24")).toHaveAttribute("data-slot", "tabs-count");
    },
  );

  it("usa vidro na superfície glass", () => {
    render(
      <Tabs defaultValue="a">
        <TabsList variant="pill" surface="glass" aria-label="Seções">
          <TabsTrigger value="a">A</TabsTrigger>
        </TabsList>
      </Tabs>,
    );
    expect(screen.getByRole("tablist")).toHaveClass("material-glass");
  });

  it("suporta orientação vertical", () => {
    render(<Exemplo orientation="vertical" />);
    expect(screen.getByRole("tablist")).toHaveAttribute("aria-orientation", "vertical");
    expect(screen.getByRole("tablist").parentElement).toHaveAttribute(
      "data-orientation",
      "vertical",
    );
  });

  it("mescla className e encaminha ref", () => {
    const ref = React.createRef<HTMLDivElement>();
    render(
      <Tabs defaultValue="a" ref={ref} className="gap-8">
        <TabsList className="h-12">
          <TabsTrigger value="a">A</TabsTrigger>
        </TabsList>
      </Tabs>,
    );
    expect(ref.current).toHaveAttribute("data-slot", "tabs");
    expect(ref.current).toHaveClass("gap-8");
    expect(screen.getByRole("tablist")).toHaveClass("h-12");
    expect(screen.getByRole("tablist")).not.toHaveClass("h-9");
  });

  it("não tem violações de acessibilidade", async () => {
    const { container } = render(<Exemplo />);
    await expectNoA11yViolations(container);
  });

  it("não tem violações de acessibilidade na variante line vertical", async () => {
    const { container } = render(<Exemplo variant="line" orientation="vertical" />);
    await expectNoA11yViolations(container);
  });
});
