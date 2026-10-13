import {
  type ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartTooltipContent,
} from "@t2-educacao/midas";

const config = {
  aulas: { label: "Aulas" },
  simulados: { label: "Simulados" },
} satisfies ChartConfig;

const dados = [
  { mes: "Jan", aulas: 12, simulados: 3 },
  { mes: "Fev", aulas: 18, simulados: 5 },
  { mes: "Mar", aulas: 9, simulados: 2 },
  { mes: "Abr", aulas: 21, simulados: 6 },
];

const maximo = 24;

export default function ChartBarrasComTooltip() {
  return (
    <div className="flex flex-col items-center gap-4">
      <ChartContainer config={config} palette="multi" aria-label="Estudo por mês">
        <svg
          viewBox="0 0 200 100"
          className="h-full w-full"
          role="img"
          aria-label="Aulas e simulados por mês"
        >
          {dados.map((item, i) => (
            <g key={item.mes} transform={`translate(${i * 48 + 10} 0)`}>
              <rect
                x="0"
                y={90 - (item.aulas / maximo) * 80}
                width="16"
                height={(item.aulas / maximo) * 80}
                rx="3"
                fill="var(--color-aulas)"
              />
              <rect
                x="18"
                y={90 - (item.simulados / maximo) * 80}
                width="16"
                height={(item.simulados / maximo) * 80}
                rx="3"
                fill="var(--color-simulados)"
              />
              <text
                x="17"
                y="98"
                textAnchor="middle"
                fontSize="6"
                className="fill-content-secondary"
              >
                {item.mes}
              </text>
            </g>
          ))}
        </svg>
      </ChartContainer>
      <ChartContainer
        config={config}
        palette="multi"
        aria-label="Legenda e tooltip"
        aspectRatio="auto"
      >
        <div className="flex flex-col items-center gap-3">
          <ChartLegend items={[{ key: "aulas" }, { key: "simulados" }]} />
          <ChartTooltipContent
            active
            label="Abril"
            showTotal
            payload={[
              { dataKey: "aulas", name: "aulas", value: 21 },
              { dataKey: "simulados", name: "simulados", value: 6 },
            ]}
          />
        </div>
      </ChartContainer>
    </div>
  );
}
