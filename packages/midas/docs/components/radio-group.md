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
