import { fireEvent, render, screen } from "@testing-library/react";
import * as React from "react";
import { describe, expect, it, vi } from "vitest";
import { expectNoA11yViolations } from "../../test/axe";
import {
  WidgetAlert,
  WidgetAsset,
  WidgetChart,
  WidgetFilter,
  WidgetImage,
  WidgetMessage,
  WidgetStat,
} from "./widget";

describe("WidgetStat", () => {
  it("mostra rótulo, valor e variação com tendência", async () => {
    const ref = React.createRef<HTMLDivElement>();
    const { container } = render(
      <WidgetStat
        ref={ref}
        label="Patrimônio"
        value="R$ 30.739"
        delta="+2,4% no mês"
        trend="up"
        className="extra"
      />,
    );
    expect(screen.getByText("Patrimônio")).toBeInTheDocument();
    const widget = container.querySelector("[data-slot=widget-stat]");
    expect(widget?.className).toContain("extra");
    expect(widget?.className).toContain("h-[170px]");
    expect(ref.current).toBe(widget);
    expect(screen.getByText("+2,4% no mês").closest("p")).toHaveAttribute("data-trend", "up");
    await expectNoA11yViolations(container);
  });

  it("aplica tamanho S, superfície e paleta", () => {
    const { container } = render(
      <WidgetStat size="s" surface="aurora" palette="violet" label="A" value="1" />,
    );
    const className = container.firstElementChild?.className ?? "";
    expect(className).toContain("size-[170px]");
    expect(className).toContain("--midas-chart-3");
    expect(className).toContain("before:bg-(--widget-accent)");
  });
});

describe("WidgetChart", () => {
  it.each(["bars", "area", "ring", "dots"] as const)(
    "renderiza o tipo %s com descrição",
    async (type) => {
      const { container } = render(
        <WidgetChart
          type={type}
          title="Semana"
          data={[1, 2, 3, 0, 5]}
          labels={["a", "b", "c", "d", "e"]}
        />,
      );
      expect(screen.getByRole("img", { name: /Semana: 1, 2, 3, 0, 5/ })).toBeInTheDocument();
      expect(container.firstElementChild).toHaveAttribute("data-type", type);
      await expectNoA11yViolations(container);
    },
  );
});

describe("WidgetMessage", () => {
  it("renderiza título, descrição e ação", async () => {
    const { container } = render(
      <WidgetMessage
        type="achievement"
        eyebrow="CONQUISTA"
        title="Parabéns, Ana!"
        description="Você concluiu a trilha."
        action={<button type="button">Definir nova meta</button>}
      />,
    );
    expect(screen.getByText("Parabéns, Ana!")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Definir nova meta" })).toBeInTheDocument();
    expect(container.firstElementChild).toHaveAttribute("data-type", "achievement");
    await expectNoA11yViolations(container);
  });
});

describe("WidgetFilter", () => {
  const options = [
    { value: "semana", label: "Semana" },
    { value: "mes", label: "Mês" },
  ];

  it("marca a opção selecionada e dispara onValueChange", async () => {
    const onValueChange = vi.fn();
    const { container } = render(
      <WidgetFilter
        type="period"
        title="Período"
        options={options}
        value="mes"
        onValueChange={onValueChange}
      />,
    );
    expect(screen.getByRole("button", { name: "Mês" })).toHaveAttribute("aria-pressed", "true");
    fireEvent.click(screen.getByRole("button", { name: "Semana" }));
    expect(onValueChange).toHaveBeenCalledWith("semana");
    await expectNoA11yViolations(container);
  });

  it("tipo range usa slider nativo", () => {
    const onRangeChange = vi.fn();
    render(
      <WidgetFilter
        type="range"
        rangeValue={20}
        onRangeChange={onRangeChange}
        rangeLabel="Preço"
      />,
    );
    fireEvent.change(screen.getByRole("slider", { name: "Preço" }), { target: { value: "40" } });
    expect(onRangeChange).toHaveBeenCalledWith(40);
  });
});

describe("WidgetAsset", () => {
  it("mostra ativo e variação de baixa", async () => {
    const { container } = render(
      <WidgetAsset
        symbol="ITUB4"
        name="Itaú Unibanco"
        price="R$ 36,42"
        change="-1,2%"
        trend="down"
      />,
    );
    expect(screen.getByText("ITUB4")).toBeInTheDocument();
    expect(container.firstElementChild).toHaveAttribute("data-trend", "down");
    await expectNoA11yViolations(container);
  });
});

describe("WidgetImage", () => {
  it("renderiza imagem decorativa e título", async () => {
    const { container } = render(
      <WidgetImage src="/capa.jpg" type="course" eyebrow="CURSO" title="CPA-20" meta="178 aulas" />,
    );
    expect(screen.getByText("CPA-20")).toBeInTheDocument();
    expect(container.querySelector("img")).toHaveAttribute("alt", "");
    await expectNoA11yViolations(container);
  });

  it("asChild vira link", () => {
    render(
      <WidgetImage asChild src="/capa.jpg" title="Notícia" type="news">
        <a href="/noticia">Ler</a>
      </WidgetImage>,
    );
    expect(screen.getByRole("link", { name: /Notícia/ })).toHaveAttribute("href", "/noticia");
  });
});

describe("WidgetAlert", () => {
  it("attention lista itens com role status", async () => {
    const { container } = render(
      <WidgetAlert
        severity="danger"
        eyebrow="ATENÇÃO"
        title="Ana, 2 coisas merecem sua atenção"
        items={[
          { title: "Fatura vence amanhã", description: "R$ 1.240,00" },
          { title: "Aporte pendente" },
        ]}
      />,
    );
    expect(screen.getByRole("status")).toHaveAttribute("data-severity", "danger");
    expect(screen.getAllByRole("listitem")).toHaveLength(2);
    expect(container.firstElementChild?.className).toContain("bg-status-danger-subtle");
    await expectNoA11yViolations(container);
  });

  it("single mostra descrição", () => {
    render(
      <WidgetAlert
        type="single"
        surface="gradient"
        severity="success"
        title="Meta atingida!"
        description="Reserva de R$ 10 mil."
      />,
    );
    expect(screen.getByText("Reserva de R$ 10 mil.")).toBeInTheDocument();
  });
});
