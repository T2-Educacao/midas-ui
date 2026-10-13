---
title: "Chart"
description: "Wrapper agnóstico para gráficos (sem recharts no pacote): ChartContainer com config de séries e paleta Brand/Neutral/Multi, ChartLegend, ChartTooltipContent para passar ao recharts como content, e ScoreBubbles (notas por módulo)."
---

```tsx
import {
  ChartContainer,
  ChartLegend,
  ChartTooltipContent,
  ScoreBubbles,
} from "@t2-educacao/midas";
```

O Midas **não** instala nem importa `recharts`. O consumidor instala a biblioteca de gráficos que quiser e usa estes componentes só para tema, cores de série, legenda e tooltip. O wrapper define variáveis `--color-<chave>` por série (a partir dos tokens `chart-1..8`) e estiliza grade e eixos (classes `recharts-*`) com tokens.

## Quando usar

- Dados que o usuário precisa comparar ou acompanhar (desempenho, patrimônio, progresso).
- Escolha a forma pela função: comparação = barras; tendência = linha/área; parte do todo = donut (até 5 partes); distribuição = dispersão/heatmap; variação acumulada = waterfall.

## Não usar

- Para um único número: use `WidgetStat`.
- Eixo Y duplo: duas medidas de escala diferente são dois gráficos.
- Mais de 6 séries coloridas: a 7ª vira "Outros".

## Regras de dados (Figma)

- Cores categóricas em ordem fixa (`chart-1` a `chart-8`); nunca recicle cor dentro do mesmo gráfico.
- Linhas de 2 a 2,5px, barras com cantos de 6 a 8 só no topo, 2px entre segmentos.
- Grade recessiva tracejada (`border-subtle`) e rótulos em `content-secondary`; texto nunca na cor da série.
- 2 ou mais séries sempre com legenda.
- Verde e vermelho de status só para alta/baixa, sempre com rótulo.
- Ofereça a tabela de dados como alternativa acessível.
- No Figma há 27 tipos de gráfico (Bar, Line, Area, Donut, Radar, Candlestick, Waterfall...). A renderização do desenho é da biblioteca do consumidor; o Midas entrega o invólucro.

## Props

### ChartContainer

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `config` | `Record<string, { label?, icon?, color? }>` | obrigatório | Séries. A chave vira `--color-<chave>`. Sem `color`, usa a paleta |
| `palette` | `"brand" \| "neutral" \| "multi"` | `"brand"` | Brand: tons do Cyan; Neutral: tons de cinza; Multi: `chart-1..8` |
| `size` | `"default" \| "wide" \| "fluid"` | `"default"` | Largura máxima: 400px, 800px (cards horizontais) ou sem limite |
| `aspectRatio` | `string` | `"16 / 9"` | `aspect-ratio` CSS |
| `className`, `...props` | | | Repassados à `div` (`role="figure"`; passe `aria-label`) |

### ChartLegend

| Prop | Tipo | Descrição |
|---|---|---|
| `items` | `{ key, label?, color? }[]` | Itens manuais (rótulo vem da `config`) |
| `payload` | array do recharts | Use `content={<ChartLegend />}` no `Legend` do recharts |
| `verticalAlign` | `"top" \| "bottom"` | Espaçamento conforme a posição |

### ChartTooltipContent

Passe ao recharts: `<Tooltip content={<ChartTooltipContent />} />`.

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `active`, `payload`, `label` | do recharts | | Preenchidos pelo recharts |
| `indicator` | `"dot" \| "line"` | `"dot"` | Marcador de cada série |
| `hideLabel`, `hideIndicator` | `boolean` | `false` | |
| `labelFormatter` | `(label, payload) => ReactNode` | | Formata o título |
| `formatter` | `(value, name, item, index) => ReactNode` | | Substitui a linha do item |
| `nameKey` | `string` | | Chave do `payload` usada como nome da série |
| `showTotal` | `boolean` | `false` | Linha de total |

### ScoreBubbles

Bolhas de nota por módulo (Figma Score Bubbles: Modules 4, 6 ou 8; Color Status, Multi, Brand, Neutral; Size Default ou Compact).

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `items` | `{ label, value?, max? }[]` | obrigatório | `value` nulo mostra bolha vazia tracejada. `max` padrão 100 |
| `modules` | `4 \| 6 \| 8` | `4` | Quantidade exibida |
| `color` | `"status" \| "multi" \| "brand" \| "neutral"` | `"status"` | Status: verde ≥ 70%, âmbar ≥ 40%, vermelho abaixo |
| `size` | `"default" \| "compact"` | `"default"` | 48px ou 32px (`size-control-xl` / `size-control-md`) |

Também exportados: `chartContainerVariants`, `scoreBubblesVariants`, `scoreBubbleVariants`, `chartSeriesColor(index, palette)` e `useChart()`.

## Exemplo com recharts (instalado no projeto consumidor)

```tsx
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis } from "recharts";
import { ChartContainer, ChartLegend, ChartTooltipContent } from "@t2-educacao/midas";

const config = { aulas: { label: "Aulas" }, simulados: { label: "Simulados" } };

export function EstudoPorMes({ data }) {
  return (
    <ChartContainer config={config} palette="multi" aria-label="Estudo por mês">
      <BarChart data={data}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="mes" tickLine={false} axisLine={false} />
        <Tooltip content={<ChartTooltipContent />} />
        <Legend content={<ChartLegend />} />
        <Bar dataKey="aulas" fill="var(--color-aulas)" radius={[6, 6, 0, 0]} />
        <Bar dataKey="simulados" fill="var(--color-simulados)" radius={[6, 6, 0, 0]} />
      </BarChart>
    </ChartContainer>
  );
}
```

## Acessibilidade

- O contêiner é `role="figure"`: dê `aria-label` descrevendo o gráfico.
- A cor nunca é a única informação: use legenda, rótulos e ofereça a tabela de dados.
- `ScoreBubbles` é uma lista (`ol`); cada bolha tem `aria-label` com módulo e nota.
- Tokens validados para daltonismo nos temas Light, Dark e Dark Blue.

## Não faça

- Não importe `recharts` dentro do Midas nem espere que o pacote o instale.
- Não use cores fixas (`#00b8db`): use `var(--color-<chave>)` ou `chart-1..8`.
- Não use degradê em mais de 1 gráfico por tela (Bar Gradient, Line Gradient e similares são destaque).

## Limitações

- As variantes visuais do Figma (21 tipos de desenho) dependem da biblioteca de gráficos; o Midas cobre container, paleta, legenda, tooltip e Score Bubbles.
- Tokens `chart/grid`, `chart/axis`, `chart/mono-*` e `chart/series-*-soft` do Figma ainda não existem como variáveis: a grade usa `border-subtle` e os eixos `content-secondary`.
