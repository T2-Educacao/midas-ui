---
title: "Select"
description: "Seletor com menu (Radix Select) do Midas: gatilho com os mesmos tamanhos, estilos, tons e formas do Input (sm 40, md 48, lg 56), menu em superfície overlay com sombra de elevação, itens com descrição opcional e estado selecionado."
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

## Variantes do Figma

`SelectTrigger` aceita `size` (`"sm" | "md" | "lg"`; `"default"` = `md`), `appearance`, `tone`, `shape` e `success` como o [Input](./input.md). O menu usa `bg-overlay-surface`, `border-overlay-border`, `shadow-elevation-overlay` e `rounded-overlay`; o item selecionado usa `selection-bg` e o foco `state-hover`.

`SelectItem` aceita `description` (linha de apoio, formato Rich do Select Menu):

```tsx
<Select defaultValue="rf">
  <SelectTrigger aria-label="Perfil" size="lg" fullWidth>
    <SelectValue placeholder="Selecione" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="rf" description="Para quem busca previsibilidade">Renda fixa</SelectItem>
    <SelectItem value="acoes" description="Maior risco e retorno">Ações</SelectItem>
  </SelectContent>
</Select>
```

Menu Multiple (checkbox + Limpar/Aplicar) e Searchable: use [Combobox](./combobox.md). People (avatar): coloque um `Avatar` dentro do `SelectItem`.

## Não faça

- Não use para listas com busca ou mais de ~15 itens: use `Combobox`.
- Não deixe sem rótulo: ligue a um `FieldLabel` ou passe `aria-label`.
- Não use para ações (menus): use `DropdownMenu`.
