---
title: "Widget"
description: "Blocos de informação para home e dashboards: WidgetStat, WidgetChart (bars, area, ring, dots), WidgetMessage, WidgetFilter, WidgetAsset, WidgetImage e WidgetAlert, com superfícies Solid, Glass, Aurora e Liquid e paletas Neutral, Cyan, Violet, Amber, Emerald e Rose."
---

```tsx
import {
  WidgetStat,
  WidgetChart,
  WidgetMessage,
  WidgetFilter,
  WidgetAsset,
  WidgetImage,
  WidgetAlert,
} from "@t2-educacao/midas";
```

Widgets são só UI: os dados vêm por props. Tamanhos em grade: **S** 170x170, **M** 360x170, **L** 360x360, cantos `rounded-3xl` (18px; o Figma usa 28, sem token equivalente).

## Quando usar

- Home personalizada, dashboards e blocos de acompanhamento (meta, sequência, patrimônio, alertas).
- Use o primeiro nome do usuário ("Bom dia, Ana") e mensagens no positivo e acionáveis.

## Não usar

- Para listas longas ou tabelas: use `Table`/`ListItem`.
- Mais de 2 widgets Aurora lado a lado.
- Glass e Liquid sem imagem ou fundo colorido atrás (sempre sobre mídia).

## Props comuns (superfície e paleta)

| Prop | Valores | Descrição |
|---|---|---|
| `size` | `"s" \| "m" \| "l"` | Dimensões fixas do Figma (cada widget limita os tamanhos que oferece) |
| `surface` | `"solid" \| "glass" \| "aurora" \| "liquid"` | Solid: `surface-default` + borda + `elevation-card`. Glass/Liquid: materiais, só sobre mídia. Aurora: fundo com manchas desfocadas da paleta |
| `palette` | `"neutral" \| "cyan" \| "violet" \| "amber" \| "emerald" \| "rose"` | Define `--widget-accent` (tokens `chart-*`) usado em barras, anéis, ícones e Aurora |

`widgetVariants({ size, surface, palette })` é exportado para criar blocos próprios.

## Componentes

### WidgetStat (número grande), tamanhos S e M

`label`, `value`, `unit?`, `delta?`, `trend?: "up" | "down"`, `icon?`, `footer?`.

### WidgetChart, tamanhos S, M e L, superfícies Solid e Aurora

| Prop | Descrição |
|---|---|
| `type` | `"bars"` (padrão), `"area"`, `"ring"`, `"dots"` |
| `data` | `number[]`. No `ring`, o primeiro valor é o progresso |
| `max` | Valor máximo (padrão: maior de `data`; no ring, use 100) |
| `labels` | Rótulos de bars/dots |
| `highlightIndex` | Barra em destaque (padrão: última) |
| `title`, `value` | Cabeçalho |
| `chartLabel` | `aria-label` do gráfico (padrão: título + dados) |

### WidgetMessage, tamanhos S, M e L

`type`: `"greeting" | "insight" | "streak" | "achievement" | "score"` (escolhe o ícone padrão). `eyebrow`, `title`, `description`, `icon`, `action`, `children`.

### WidgetFilter

`type`: `"category" | "period" | "chips" | "range"`; `tone`: `"brand" | "neutral"`; `options: { value, label }[]`; `value` (string ou string[]); `onValueChange(value)`; para `range`: `rangeValue`, `rangeMin`, `rangeMax`, `rangeStep`, `onRangeChange`, `rangeLabel`. Opções são botões com `aria-pressed`; o range é um `input type="range"` nativo.

### WidgetAsset (ações/cripto), tamanhos S e M, superfícies Solid e Glass

`symbol`, `name`, `price`, `change`, `trend: "up" | "down"`, `sparkline?: number[]` (só no M).

### WidgetImage, tamanhos S, M e L

`type`: `"course" | "quote" | "news"`; `src`, `alt` (vazio por padrão, decorativa), `eyebrow`, `title`, `meta`, `author`; `asChild` para virar link (`<WidgetImage asChild ...><a href="/curso" /></WidgetImage>`).

### WidgetAlert

`type`: `"attention"` (lista de `items`) ou `"single"` (`title` + `description`); `severity`: `"warning" | "danger" | "info" | "success"`; `surface`: `"solid" | "gradient" | "glass" | "liquid"`; `eyebrow`, `icon`, `action`. Tem `role="status"`. Também exporta `widgetAlertVariants`.

## Exemplos

```tsx
<WidgetStat label="Patrimônio" value="R$ 30.739" delta="+ R$ 317 hoje" trend="up" />

<WidgetChart
  type="bars"
  palette="violet"
  title="Aulas na semana"
  data={[2, 4, 1, 5, 3, 0, 6]}
  labels={["D", "S", "T", "Q", "Q", "S", "S"]}
/>

<WidgetMessage
  type="achievement"
  palette="emerald"
  eyebrow="CONQUISTA"
  title="Parabéns, Ana! Você concluiu a trilha Renda Fixa."
  action={<Button size="sm">Definir nova meta</Button>}
/>

<WidgetAlert
  severity="warning"
  eyebrow="ATENÇÃO"
  title="Ana, 2 coisas merecem sua atenção"
  items={[{ title: "Fatura vence amanhã", description: "R$ 1.240,00" }]}
/>
```

## Acessibilidade

- Gráficos têm `role="img"` com descrição textual dos dados.
- Cor nunca é a única informação: variação traz ícone de seta e sinal.
- Filtros usam botões com `aria-pressed` e foco visível (`focus-ring`).
- Imagens de `WidgetImage` são decorativas; o texto está no título.

## Não faça

- Não use cor fixa; troque a `palette`.
- Não coloque informação essencial só em Glass/Liquid sem garantir contraste sobre a imagem.
- Não inclua lógica de negócio (cálculo de metas, cotações): passe valores prontos.

## Limitações

- Raio de 28px do Figma aproximado por `rounded-3xl` (18px). A refração do Liquid Glass não existe em CSS (usa `material-liquid`, blur + saturação).
- Tokens `widget/<paleta>/*` do Figma são aproximados pelos tokens `chart-*` com opacidade.
- Widgets são estáticos; carrossel/reordenação ficam com o consumidor.
