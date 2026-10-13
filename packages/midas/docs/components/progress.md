---
title: Progress
description: "Barra de progresso (Progress), com rótulo, valor e ajuda (ProgressField) e linha fina presa ao header (ProgressLine). Estilos accent, neutral, gradient, glow e shimmer; tamanhos sm/md/lg (4/8/12px); horizontal ou vertical. Role progressbar."
---

```tsx
import { Progress, ProgressField, ProgressLine } from "@t2-educacao/midas";
```

Progress mostra QUANTO de uma tarefa já foi feito. Etapas com nome: use [Stepper](./stepper.md).

## Uso

```tsx
<Progress value={50} aria-label="Upload" />

<ProgressField label="Seu progresso" value={75} helper="30 seg restantes" appearance="gradient" />

<ProgressField label="Nível" value={75} orientation="vertical" appearance="glow" />

<ProgressLine value={50} appearance="glow" aria-label="Pergunta 3 de 6" />
```

## Props (Progress)

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `value` | `number \| null` | | Valor atual. Sem valor e `appearance="shimmer"`: indeterminado |
| `max` | `number` | `100` | Valor máximo |
| `appearance` | `"accent" \| "neutral" \| "gradient" \| "glow" \| "shimmer"` | `"accent"` | Estilo (Style do Figma) |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | 4, 8 e 12px |
| `orientation` | `"horizontal" \| "vertical"` | `"horizontal"` | Vertical cresce de baixo para cima (altura padrão `h-40`, ajuste com `className`) |
| `variant` | `"default" \| "success" \| "warning" \| "info" \| "destructive"` | `"default"` | Cor de estado (legado) |
| `indicatorClassName` | `string` | | Classes do preenchimento |

## Props (ProgressField)

Aceita todas as de Progress e mais:

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `label` | `ReactNode` | | Rótulo (vira o nome acessível da barra) |
| `showValue` | `boolean` | `true` | Mostra a porcentagem |
| `valueLabel` | `ReactNode` | | Substitui a porcentagem (ex.: `3 de 4`) |
| `helper` / `helperIcon` | `ReactNode` | | Texto de apoio (tempo restante) com ícone opcional |
| `containerClassName` | `string` | | Classes do container |

## Props (ProgressLine)

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `value` | `number` | `0` | Avanço |
| `appearance` | `"accent" \| "gradient" \| "glow"` | `"accent"` | Estilo. Glow para fluxos de conquista, accent para carregamento |
| `showTrack` | `boolean` | `false` | Mostra o trilho |

A linha tem 3px, ocupa toda a largura e fica na borda inferior do header (`absolute inset-x-0 bottom-0`).

## Estilos: quando usar

| Estilo | Quando usar |
|---|---|
| `accent` | Padrão (ciano sólido) |
| `neutral` | Interfaces sóbrias e dados |
| `gradient` | Degradê curto na cor da marca |
| `glow` | Conquista e progresso "vivo". Um por tela |
| `shimmer` | Carregamento ativo ou indeterminado |

## Acessibilidade

- `role="progressbar"` com `aria-valuenow`, `aria-valuemin`, `aria-valuemax`. Dê sempre `aria-label` (ou `label` no ProgressField).
- Indeterminado: sem `aria-valuenow`; marque a região com `aria-busy="true"`.
- Mostre % ou "x de y" junto da barra; a cor não é a única informação.
- `motion-reduce` desliga o pulso; a mudança de largura é instantânea.

## Limitação

O shimmer é um pulso de opacidade (a faixa de brilho do Figma precisa de um keyframe em `theme.css`). O glow usa a sombra com `--midas-action-accent-gradient-top`.

## Não faça

- Barra parada em 99% sem explicação.
- Vários `glow`/`shimmer` na mesma tela.
- `shimmer` em barra já completa.
- Usar Progress para etapas com nome (use Stepper).
