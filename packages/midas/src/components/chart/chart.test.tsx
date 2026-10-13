import { render, screen } from "@testing-library/react";
import * as React from "react";
import { describe, expect, it } from "vitest";
import { expectNoA11yViolations } from "../../test/axe";
import {
  ChartContainer,
  ChartLegend,
  ChartTooltipContent,
  chartSeriesColor,
  ScoreBubbles,
} from "./chart";

const config = {
  receita: { label: "Receita" },
  custo: { label: "Custo", color: "var(--midas-chart-5)" },
};

describe("ChartContainer", () => {
  it("define variáveis de cor por série e repassa className e ref", () => {
    const ref = React.createRef<HTMLDivElement>();
    render(
      <ChartContainer ref={ref} config={config} className="extra" aria-label="Receita mensal">
        <span>gráfico</span>
      </ChartContainer>,
    );
    const el = screen.getByRole("figure", { name: "Receita mensal" });
    expect(el).toHaveAttribute("data-slot", "chart-container");
    expect(el.className).toContain("extra");
    expect(el.style.getPropertyValue("--color-custo")).toBe("var(--midas-chart-5)");
    expect(el.style.getPropertyValue("--color-receita")).toContain("--midas-chart-1");
    expect(ref.current).toBe(el);
  });

  it("aplica o tamanho wide", () => {
    render(
      <ChartContainer config={config} size="wide" aria-label="g">
        <span />
      </ChartContainer>,
    );
    expect(screen.getByRole("figure").className).toContain("max-w-200");
  });

  it("não tem violações de acessibilidade", async () => {
    const { container } = render(
      <ChartContainer config={config} aria-label="Receita">
        <ChartLegend items={[{ key: "receita" }, { key: "custo" }]} />
      </ChartContainer>,
    );
    await expectNoA11yViolations(container);
  });
});

describe("chartSeriesColor", () => {
  it("cicla a paleta multi e usa tom único em brand", () => {
    expect(chartSeriesColor(0, "multi")).toBe("var(--midas-chart-1)");
    expect(chartSeriesColor(8, "multi")).toBe("var(--midas-chart-1)");
    expect(chartSeriesColor(1, "brand")).toContain("--midas-chart-1");
  });
});

describe("ChartLegend", () => {
  it("lista as séries com rótulo da config", () => {
    render(
      <ChartContainer config={config} aria-label="g">
        <ChartLegend items={[{ key: "receita" }, { key: "custo" }]} />
      </ChartContainer>,
    );
    expect(screen.getByText("Receita")).toBeInTheDocument();
    expect(screen.getAllByRole("listitem")).toHaveLength(2);
  });

  it("aceita o payload do recharts", () => {
    render(
      <ChartContainer config={config} aria-label="g">
        <ChartLegend payload={[{ dataKey: "receita", value: "Receita", color: "red" }]} />
      </ChartContainer>,
    );
    expect(screen.getByText("Receita")).toBeInTheDocument();
  });
});

describe("ChartTooltipContent", () => {
  it("não renderiza inativo", () => {
    const { container } = render(
      <ChartContainer config={config} aria-label="g">
        <ChartTooltipContent active={false} payload={[]} />
      </ChartContainer>,
    );
    expect(container.querySelector("[data-slot=chart-tooltip]")).toBeNull();
  });

  it("mostra título, itens e total", () => {
    render(
      <ChartContainer config={config} aria-label="g">
        <ChartTooltipContent
          active
          label="Jan"
          showTotal
          payload={[
            { dataKey: "receita", value: 1200, name: "receita" },
            { dataKey: "custo", value: 300, name: "custo" },
          ]}
        />
      </ChartContainer>,
    );
    expect(screen.getByText("Jan")).toBeInTheDocument();
    expect(screen.getByText("Receita")).toBeInTheDocument();
    expect(screen.getByText("Total")).toBeInTheDocument();
    expect(screen.getByText((1500).toLocaleString("pt-BR"))).toBeInTheDocument();
  });

  it("sem violações de acessibilidade", async () => {
    const { container } = render(
      <ChartContainer config={config} aria-label="g">
        <ChartTooltipContent active label="Jan" payload={[{ dataKey: "receita", value: 1 }]} />
      </ChartContainer>,
    );
    await expectNoA11yViolations(container);
  });
});

describe("ScoreBubbles", () => {
  const items = [
    { label: "Módulo 1", value: 90 },
    { label: "Módulo 2", value: 50 },
    { label: "Módulo 3", value: 10 },
    { label: "Módulo 4", value: null },
    { label: "Módulo 5", value: 80 },
  ];

  it("limita pela quantidade de módulos e colore por status", () => {
    render(<ScoreBubbles items={items} modules={4} />);
    const bubbles = screen.getAllByRole("listitem");
    expect(bubbles).toHaveLength(4);
    expect(bubbles[0]?.className).toContain("bg-status-success-subtle");
    expect(bubbles[1]?.className).toContain("bg-status-warning-subtle");
    expect(bubbles[2]?.className).toContain("bg-status-danger-subtle");
    expect(bubbles[3]).toHaveAttribute("aria-label", "Módulo 4: sem nota");
  });

  it("aplica compact e className", () => {
    render(<ScoreBubbles items={items} size="compact" color="brand" className="x" />);
    expect(screen.getAllByRole("listitem")[0]?.className).toContain("size-control-md");
    expect(screen.getByRole("list").className).toContain("x");
  });

  it("sem violações de acessibilidade", async () => {
    const { container } = render(<ScoreBubbles items={items} modules={6} color="multi" />);
    await expectNoA11yViolations(container);
  });
});
