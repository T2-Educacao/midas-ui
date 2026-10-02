---
title: "ToggleGroup"
description: "Conjunto de toggles relacionados. Modo single (escolha única, como alinhamento) ou multiple (vários ligados, como negrito e itálico); encostados ou com espaçamento; horizontal ou vertical."
---

```tsx
import { ToggleGroup, ToggleGroupItem } from "@t2-educacao/midas";
```

## Uso

```tsx
<ToggleGroup type="single" variant="outline" aria-label="Alinhamento do texto">
  <ToggleGroupItem value="esquerda" aria-label="Alinhar à esquerda"><TextAlignLeft /></ToggleGroupItem>
  <ToggleGroupItem value="centro" aria-label="Centralizar"><TextAlignCenter /></ToggleGroupItem>
  <ToggleGroupItem value="direita" aria-label="Alinhar à direita"><TextAlignRight /></ToggleGroupItem>
</ToggleGroup>
```

## Props

### ToggleGroup

Aceita as props do [ToggleGroup do Radix](https://www.radix-ui.com/primitives/docs/components/toggle-group) mais:

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `type` | `"single" \| "multiple"` | obrigatório | Escolha única ou múltipla |
| `value` / `defaultValue` | `string` (single) ou `string[]` (multiple) | | Valor controlado / inicial |
| `onValueChange` | `(value) => void` | | Chamado ao mudar |
| `variant` | `"ghost" \| "outline"` | `"ghost"` | Aplicado a todos os itens |
| `size` | `"sm" \| "default" \| "lg"` | `"default"` | Aplicado a todos os itens |
| `spacing` | `number` | `0` | Espaço entre itens em unidades de 4px. `0` deixa os itens encostados |
| `orientation` | `"horizontal" \| "vertical"` | `"horizontal"` | Direção e navegação por setas |

### ToggleGroupItem

| Prop | Tipo | Descrição |
|---|---|---|
| `value` | `string` | Identificador do item (obrigatório) |
| `disabled` | `boolean` | Desabilita só este item |

## Exemplos

### Múltipla escolha

```tsx
<ToggleGroup type="multiple" aria-label="Formatação">
  <ToggleGroupItem value="negrito" aria-label="Negrito"><TextB /></ToggleGroupItem>
  <ToggleGroupItem value="italico" aria-label="Itálico"><TextItalic /></ToggleGroupItem>
  <ToggleGroupItem value="sublinhado" aria-label="Sublinhado"><TextUnderline /></ToggleGroupItem>
</ToggleGroup>
```

### Com espaçamento e texto

```tsx
<ToggleGroup type="single" variant="outline" spacing={2} defaultValue="lista" aria-label="Visualização">
  <ToggleGroupItem value="lista">Lista</ToggleGroupItem>
  <ToggleGroupItem value="grade">Grade</ToggleGroupItem>
</ToggleGroup>
```

### Vertical

```tsx
<ToggleGroup type="single" orientation="vertical" variant="outline" aria-label="Período">
  <ToggleGroupItem value="dia">Dia</ToggleGroupItem>
  <ToggleGroupItem value="semana">Semana</ToggleGroupItem>
  <ToggleGroupItem value="mes">Mês</ToggleGroupItem>
</ToggleGroup>
```

## Acessibilidade

- Setas do teclado movem o foco entre os itens; `Espaço`/`Enter` liga e desliga.
- Dê um `aria-label` ao grupo e a cada item que só tenha ícone.

## Não faça

- Usar `type="single"` para navegação entre páginas: use abas ou links.
- Misturar `variant` diferentes dentro do mesmo grupo.
