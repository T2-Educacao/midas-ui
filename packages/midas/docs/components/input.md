---
title: "Input"
description: "Campo de texto de 32px. Aceita todos os tipos de <input> (text, email, password, file...), estados disabled e inválido (aria-invalid). Use dentro de Field para label, descrição e erro."
---

```tsx
import { Input } from "@t2-educacao/midas";
```

## Uso

```tsx
<Input type="email" placeholder="voce@email.com" aria-label="E-mail" />
```

Quase sempre o Input vai dentro de um [Field](./field.md), que traz label, descrição e mensagem de erro:

```tsx
<Field>
  <FieldLabel htmlFor="email">E-mail</FieldLabel>
  <Input id="email" type="email" placeholder="voce@email.com" />
  <FieldDescription>Usamos para enviar seu certificado.</FieldDescription>
</Field>
```

## Props

Aceita todas as props de `<input>` (`type`, `value`, `onChange`, `placeholder`, `disabled`, `required`...). `type` é `"text"` por padrão.

| Prop | Tipo | Descrição |
|---|---|---|
| `aria-invalid` | `boolean` | Mostra o estado de erro (borda e anel vermelhos) |
| `className` | `string` | Classes extras (as suas vencem) |
| `ref` | `Ref<HTMLInputElement>` | Encaminhada ao `<input>` |

## Estados

| Estado | Como ativar |
|---|---|
| Foco | Automático: borda e anel na cor `ring` |
| Desabilitado | `disabled` |
| Inválido | `aria-invalid` (e `invalid` no `Field` para o label ficar vermelho) |

## Exemplos

### Arquivo

```tsx
<Input id="foto" type="file" />
```

### Com botão ao lado

```tsx
<div className="flex gap-2">
  <Input placeholder="Buscar" aria-label="Buscar" />
  <Button>Buscar</Button>
</div>
```

Para ícone, prefixo ou botão **dentro** do campo, use [InputGroup](./input-group.md). Para um campo e um botão encostados, use [ButtonGroup](./button-group.md).

## Acessibilidade

- Todo campo precisa de um nome: `FieldLabel` com `htmlFor`, ou `aria-label`.
- Para ligar a descrição ou o erro ao campo, use `aria-describedby` com o `id` do `FieldDescription`/`FieldError`.
- `placeholder` não substitui label.

## Não faça

- Usar o Input sem label visível em formulários.
- Mudar a altura com `className` para "caber" no layout: use os componentes de grupo.
