---
title: "Slider"
description: "Slider (Radix) do Midas: trilho de 4px, preenchimento ciano (brand) ou preto/branco (neutral), thumb de 20px com área de toque de 40px, foco com borda + halo. Valor único ou intervalo, passos, vertical, desabilitado."
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

## Variantes do Figma

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `tone` | `"brand" \| "neutral"` | `"brand"` | Preenchimento e foco ciano ou neutro |

Tipos: Single (`defaultValue={[45]}`), Range (`defaultValue={[10, 40]}`), Steps (`step={1}` com marcas feitas por você) e Input (combine com um [Input](./input.md) `type="number"` no mesmo valor).

Regras: mostre sempre o valor atual ao lado do rótulo, em JetBrains Mono (`text-mono-sm` / `text-mono-md`); a área de toque tem no mínimo 40px; setas mudam 1 passo e Shift + seta, 10. Limitação: o tooltip de valor do estado Focus não é renderizado, exiba o valor no rótulo.

```tsx
<div className="flex flex-col gap-3">
  <div className="flex justify-between">
    <span className="text-label-md">Tempo de estudo por dia</span>
    <span className="text-mono-md text-selection-content">{minutos} min</span>
  </div>
  <Slider value={[minutos]} onValueChange={([v]) => setMinutos(v)} max={120} aria-label="Tempo de estudo por dia" />
</div>
```
