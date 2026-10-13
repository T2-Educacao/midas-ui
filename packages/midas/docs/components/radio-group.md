---
title: "RadioGroup"
description: "Grupo de opções onde só uma pode ser escolhida. Navegação por setas, indicador de 16px na cor primária."
---

```tsx
import { RadioGroup, RadioGroupItem } from "@t2-educacao/midas";
```

## Uso

```tsx
<RadioGroup defaultValue="mensal" aria-label="Plano">
  <div className="flex items-center gap-2">
    <RadioGroupItem value="mensal" id="mensal" />
    <Label htmlFor="mensal">Mensal</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="anual" id="anual" />
    <Label htmlFor="anual">Anual</Label>
  </div>
</RadioGroup>
```

## Tamanhos, tons e estados (Figma Radio)

`RadioGroupItem` aceita `size` (`"sm"` 16px, `"md"` 20px padrão, `"lg"` 24px; ponto de 6, 8 e 10px) e `tone` (`"brand"` Cyan, `"neutral"` preto no claro e branco nos escuros). Desmarcado: fundo `field-bg` e borda `border-default`; hover: borda `selection-border`; marcado: `selection-fill` (hover `action-accent-bg-hover`); erro com `aria-invalid` (`status-danger-fill`); foco com `focus-ring`; desabilitado com `opacity-disabled`. Exporta `radioGroupItemVariants` e `RadioGroupItemProps`. Para radio com rótulo e descrição, use [SelectionField](./selection-field.md).

```tsx
<RadioGroup defaultValue="a" aria-label="Plano">
  <RadioGroupItem value="a" size="lg" tone="neutral" aria-label="Mensal" />
</RadioGroup>
```

## Props

### RadioGroup

| Prop | Tipo | Descrição |
|---|---|---|
| `value` / `defaultValue` | `string` | Valor controlado / inicial |
| `onValueChange` | `(value: string) => void` | Chamado ao mudar |
| `orientation` | `"vertical" \| "horizontal"` | Direção das setas |
| `disabled` / `required` / `name` | | Estado e formulário |

### RadioGroupItem

| Prop | Tipo | Descrição |
|---|---|---|
| `value` | `string` | Valor da opção (obrigatório) |
| `disabled` | `boolean` | Desabilita só esta opção |

## Acessibilidade

- Setas movem entre as opções; `Tab` sai do grupo.
- Dê um nome ao grupo (`aria-label` ou um título com `aria-labelledby`).

## Não faça

- Usar RadioGroup com uma opção só: use Checkbox.
- Mais de 7 opções: use [Combobox](./combobox.md) ou [Select](./select.md).
