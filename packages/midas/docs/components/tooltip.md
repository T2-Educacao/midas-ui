---
title: "Tooltip"
description: "Rótulo curto no hover ou foco (Label, Shortcut, Rich) com estilos inverse (padrão), light e glass, seta e abertura após 400ms. Inclui ChartTooltip (single, multi, delta) para valores de gráficos: ChartTooltip, TooltipItem, TooltipFooter, TooltipDelta."
---

```tsx
import {
  ChartTooltip,
  Tooltip,
  TooltipContent,
  TooltipDelta,
  TooltipDescription,
  TooltipFooter,
  TooltipItem,
  TooltipShortcut,
  TooltipTitle,
  TooltipTrigger,
} from "@t2-educacao/midas";
```

## Quando usar

Nomear botões só de ícone, mostrar nome completo (avatar, texto truncado), atalhos, explicar um termo (Rich), valores de gráfico (Chart Tooltip).

## Quando não usar

Informação essencial (ponha na tela); links/botões/formulário (use [Popover](./popover.md)); mensagens de erro (texto de ajuda do campo); única forma de ver algo no mobile.

## Tipos de conteúdo

| Conteúdo | Como |
|---|---|
| Label | `<TooltipContent>Copiar link</TooltipContent>` (1 a 4 palavras, sem ponto final) |
| Shortcut | Rótulo + `<TooltipShortcut>⌘ K</TooltipShortcut>` |
| Rich | `<TooltipContent rich>` com `TooltipTitle` + `TooltipDescription` (largura máx. 240) |

## Props

### Tooltip / TooltipProvider

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `delayDuration` | `number` | `400` | Atraso para abrir no hover (foco abre na hora). Era `0` antes |
| `open` / `defaultOpen` / `onOpenChange` | | | Controle |

### TooltipContent

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `appearance` | `"inverse" \| "light" \| "glass"` | `"inverse"` | Estilo. Inverse usa `action/primary` (escuro no Light, claro nos temas escuros); Glass só sobre mídia |
| `side` | `"top" \| "bottom" \| "left" \| "right"` | `"top"` | Placement; vira para o lado oposto se não couber |
| `sideOffset` | `number` | `6` | Distância |
| `arrow` | `boolean` | `true` | Seta (`false` = Placement None) |
| `rich` | `boolean` | `false` | Layout em coluna com padding maior |

## Chart Tooltip

`ChartTooltip` (`appearance`, `title`) é o painel que segue o cursor (não é Radix); use com `TooltipItem` (`label`, `value`, `color`, `indicator` dot|line|none), `TooltipFooter` (total) ou `TooltipDelta` (`value`, `change`, `trend` up|down, `caption`; sempre com ▲/▼ além da cor). Use as cores `chart-1…5` na mesma ordem do gráfico.

```tsx
<ChartTooltip title="12 mar 2026">
  <TooltipItem label="Renda fixa" value="R$ 30.100" color="var(--midas-chart-1)" />
  <TooltipItem label="Ações" value="R$ 12.400" color="var(--midas-chart-2)" />
  <TooltipFooter><span>Total</span><span>R$ 42.500</span></TooltipFooter>
</ChartTooltip>

<ChartTooltip title="12 mar 2026">
  <TooltipDelta value="R$ 48.320" change="12,4%" caption="vs. 12 fev 2026" />
</ChartTooltip>
```

## Exemplo

```tsx
<Tooltip>
  <TooltipTrigger asChild>
    <Button variant="outline" size="icon" aria-label="Salvar"><IconDeviceFloppy /></Button>
  </TooltipTrigger>
  <TooltipContent>
    Salvar <TooltipShortcut>⌘ S</TooltipShortcut>
  </TooltipContent>
</Tooltip>
```

Botão desabilitado: `TooltipTrigger asChild` envolve o botão em um `span` focável automaticamente.

## Acessibilidade

`role="tooltip"` + `aria-describedby` no alvo (Radix). Em botão só de ícone o nome também vai em `aria-label`. Esc fecha; o mouse pode ir até o tooltip sem fechar. Sem elementos interativos dentro. Ofereça os valores do gráfico também por tabela/teclado.

## Não faça

- Repetir o texto já visível; parágrafos longos; links ou botões dentro.
- Misturar estilos na mesma interface (use Inverse).

## Limitações

O Figma usa tokens `tooltip/*` (sempre escuros). Eles ainda não existem em `theme.css`; o estilo inverse usa `action/primary` e, nos temas escuros, fica claro em vez de escuro.
