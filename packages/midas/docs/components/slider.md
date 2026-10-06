---
title: "Slider"
description: "Controle deslizante para escolher um valor numérico ou um intervalo (dois thumbs) dentro de um limite. Suporta orientação horizontal e vertical, passo e desabilitado."
---

```tsx
import { Slider } from "@t2-educacao/midas";
```

## Uso

O valor é sempre um array. Um item é um valor único; dois itens formam um intervalo, e o Slider renderiza um thumb por valor.

```tsx
<Slider defaultValue={[40]} max={100} step={1} aria-label="Volume" />
```

## Props

Repassa todas as props do `Slider.Root` do Radix UI.

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `value` | `number[]` | n/a | Valor controlado. O tamanho define a quantidade de thumbs |
| `defaultValue` | `number[]` | `[min]` | Valor inicial (não controlado) |
| `onValueChange` | `(value: number[]) => void` | n/a | Chamado a cada mudança |
| `onValueCommit` | `(value: number[]) => void` | n/a | Chamado ao soltar o thumb |
| `min` | `number` | `0` | Menor valor |
| `max` | `number` | `100` | Maior valor |
| `step` | `number` | `1` | Passo |
| `orientation` | `"horizontal" \| "vertical"` | `"horizontal"` | Direção do controle |
| `disabled` | `boolean` | `false` | Desabilita a interação |
| `className` | `string` | n/a | Mesclada ao elemento raiz |

## Variantes

| Variante | Quando usar |
|---|---|
| Valor único (`[40]`) | Volume, velocidade, nível de preferência |
| Intervalo (`[20, 80]`) | Faixa de preço, carga horária mínima e máxima |
| `orientation="vertical"` | Equalizadores e espaços estreitos em largura (dê altura ao contêiner) |

## Exemplos

```tsx
<Slider defaultValue={[20, 80]} min={0} max={100} step={5} aria-label="Faixa de preço" />

const [volume, setVolume] = React.useState([50]);
<Slider value={volume} onValueChange={setVolume} aria-label="Volume" />
```

## Acessibilidade

- Cada thumb tem `role="slider"` com `aria-valuenow`, `aria-valuemin` e `aria-valuemax`.
- Teclado: setas mudam o valor em um passo, `PageUp`/`PageDown` em passos maiores, `Home`/`End` vão aos extremos.
- Dê um nome acessível com `aria-label` ou `aria-labelledby` (o Midas repassa para os thumbs). Em intervalos de dois valores, os thumbs ganham o sufixo "(mínimo)" e "(máximo)".
- Mostre o valor atual em texto perto do controle: o slider sozinho é difícil de ler com precisão.

## Não faça

- Usar slider para valores que exigem precisão exata (ex.: quantia em reais). Use um campo de [Input](./input.md).
- Passar um número em vez de array em `value` ou `defaultValue`.
- Esquecer a altura do contêiner na orientação vertical.
