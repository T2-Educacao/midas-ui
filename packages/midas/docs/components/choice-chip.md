---
title: ChoiceChip
description: "Pílulas de escolha (Figma Choice Chip): ChoiceChipGroup type single (radiogroup) ou multiple (checkboxes com check), tamanhos MD 36 e LG 44, estilos outline/filled/glass, tom brand/neutral."
---

```tsx
import { ChoiceChip, ChoiceChipGroup } from "@t2-educacao/midas";
```

## Quando usar

Respostas curtas e filtros ("Renda fixa", "Ações"). Single = uma escolha; Multiple = várias, com check. Use LG no mobile. Para um chip removível (tag) use [Chip](./chip.md).

## Props

`ChoiceChipGroup`:

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `type` | `"single" \| "multiple"` | `"single"` | Radio ou checkbox |
| `value` / `defaultValue` | `string` ou `string[]` | | Seleção (array no multiple) |
| `onValueChange` | `(value) => void` | | Recebe `string` (single) ou `string[]` (multiple) |
| `size` | `"md" \| "lg"` | `"md"` | 36 ou 44px |
| `appearance` | `"outline" \| "filled" \| "glass"` | `"outline"` | Estilo |
| `tone` | `"brand" \| "neutral"` | `"brand"` | Selecionado ciano ou preto/branco |
| `disabled` | `boolean` | | Desabilita todos |
| `aria-label` | `string` | | Obrigatório (nome do grupo) |

`ChoiceChip`: `value` (obrigatório), `icon`, `disabled` e as props de estilo (herdam do grupo). Exporta `choiceChipVariants`.

## Exemplo

```tsx
<ChoiceChipGroup aria-label="Temas de interesse" type="multiple" defaultValue={["rf"]}>
  <ChoiceChip value="rf">Renda fixa</ChoiceChip>
  <ChoiceChip value="acoes">Ações</ChoiceChip>
  <ChoiceChip value="cripto">Cripto</ChoiceChip>
</ChoiceChipGroup>
```

## Acessibilidade

Single: `role="radiogroup"` com setas; multiple: grupo de checkboxes. O alvo é o chip inteiro. Estado selecionado não depende só de cor (o multiple mostra o check).

## Não faça

- Não use `ChoiceChip` fora de `ChoiceChipGroup`.
- Não use para ações (use Button) nem para navegação (use Tabs).
