---
title: "Select"
description: "Lista de opções fechada, com visual do Midas (Radix Select). Para poucas opções sem busca; tamanhos default e sm, grupos, separador e itens desabilitados."
---

```tsx
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@t2-educacao/midas";
```

## Uso

```tsx
<Select defaultValue="25">
  <SelectTrigger aria-label="Linhas por página" className="w-20">
    <SelectValue />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="10">10</SelectItem>
    <SelectItem value="25">25</SelectItem>
    <SelectItem value="50">50</SelectItem>
  </SelectContent>
</Select>
```

## Props principais

| Componente | Prop | Descrição |
|---|---|---|
| `Select` | `value`, `defaultValue`, `onValueChange`, `disabled`, `name`, `required` | Estado e formulário |
| `SelectTrigger` | `size` (`"default"` 32px ou `"sm"` 28px), `fullWidth` (ocupa a largura toda), `aria-invalid` | Botão que abre a lista |
| `SelectValue` | `placeholder` | Texto quando vazio |
| `SelectContent` | `position` (`"item-aligned"` ou `"popper"`) | Posição da lista |
| `SelectItem` | `value`, `disabled` | Opção |

## Exemplos

### Com grupos

```tsx
<Select>
  <SelectTrigger className="w-56" aria-label="Certificação">
    <SelectValue placeholder="Selecione" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>Bancárias</SelectLabel>
      <SelectItem value="cpa">CPA</SelectItem>
      <SelectItem value="cpro-r">CPRO-R</SelectItem>
    </SelectGroup>
    <SelectSeparator />
    <SelectGroup>
      <SelectLabel>Planejamento</SelectLabel>
      <SelectItem value="cfp">CFP®</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>
```

## Quando usar o quê

| Situação | Componente |
|---|---|
| Até ~10 opções, sem busca | `Select` |
| Muitas opções ou precisa buscar | [Combobox](./combobox.md) |
| Formulário simples, mobile nativo | [NativeSelect](./native-select.md) |

## Acessibilidade

- Teclado: setas, `Enter`, digitar a inicial pula para a opção.
- Dê nome ao trigger (`FieldLabel htmlFor` + `id`, ou `aria-label`).
