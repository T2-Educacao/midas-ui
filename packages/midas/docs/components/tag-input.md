---
title: TagInput
description: "Campo para vários valores como tags removíveis (Figma Tag Input). Enter ou vírgula adiciona, Backspace remove a última. Tamanhos MD 48 e LG 56, estilos outline/filled/glass, tom brand/neutral, forma rounded/pill, quebra de linha automática."
---

```tsx
import { TagInput } from "@t2-educacao/midas";
```

## Quando usar

Palavras-chave, e-mails, interesses: lista livre de valores curtos. Para escolher entre opções conhecidas use [Combobox](./combobox.md) com `multiple`.

## Props

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `value` / `defaultValue` | `string[]` | `[]` | Tags (controlado ou inicial) |
| `onValueChange` | `(value: string[]) => void` | | Chamado ao adicionar/remover |
| `size` | `"md" \| "lg"` | `"md"` | Altura mínima 48 / 56px |
| `appearance` | `"outline" \| "filled" \| "glass"` | `"outline"` | Estilo |
| `tone` | `"brand" \| "neutral"` | `"brand"` | Tom das tags e do foco |
| `shape` | `"rounded" \| "pill"` | `"rounded"` | Forma |
| `maxTags` | `number` | | Limite de tags |
| `allowDuplicates` | `boolean` | `false` | Permite repetir |
| `separators` | `string[]` | `["Enter", ","]` | Teclas que confirmam a tag |
| `removeLabel` | `string` | `"Remover"` | Prefixo do `aria-label` do botão de remover |
| `invalid` | `boolean` | | Borda de erro |
| `placeholder` | `string` | `"Adicionar…"` | |

Aceita as demais props do `<input>` interno.

## Exemplo

```tsx
<Field>
  <FieldLabel htmlFor="tags">Tags</FieldLabel>
  <TagInput id="tags" defaultValue={["Design System", "UI Kit"]} />
  <FieldDescription>Pressione Enter para adicionar.</FieldDescription>
</Field>
```

## Acessibilidade

Cada tag tem botão "Remover <tag>". O texto digitado é confirmado também ao sair do campo. Sempre com rótulo visível.

## Não faça

- Não use para valores longos ou que exijam validação complexa.
- Não esconda o texto de apoio com as teclas de confirmação.
