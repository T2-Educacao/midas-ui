---
title: "Textarea"
description: "Campo de texto de várias linhas que cresce com o conteúdo. Mesmos estados do Input: foco, desabilitado e inválido."
---

```tsx
import { Textarea } from "@t2-educacao/midas";
```

## Uso

```tsx
<Field>
  <FieldLabel htmlFor="duvida">Sua dúvida</FieldLabel>
  <Textarea id="duvida" placeholder="Escreva aqui" />
</Field>
```

## Props

Aceita todas as props de `<textarea>` (`rows`, `maxLength`, `value`...). A altura mínima é 64px e cresce com o texto (`field-sizing: content`).

| Prop | Tipo | Descrição |
|---|---|---|
| `aria-invalid` | `boolean` | Estado de erro |
| `autoGrow` | `boolean` | Ajusta a altura ao conteúdo (calculada por `scrollHeight`) e desliga o redimensionamento manual. Padrão `false` |
| `bare` | `boolean` | Sem borda, fundo, anel de foco, altura mínima e padding, para texto inline como títulos. Padrão `false` |

## Exemplos

### Com contador

```tsx
const [texto, setTexto] = useState("");

<Field>
  <FieldLabel htmlFor="bio">Bio</FieldLabel>
  <Textarea id="bio" maxLength={200} value={texto} onChange={(e) => setTexto(e.target.value)} />
  <FieldDescription>{texto.length}/200</FieldDescription>
</Field>
```

### Título inline

```tsx
"use client";

const [titulo, setTitulo] = useState("");

<Textarea
  autoGrow
  bare
  rows={1}
  aria-label="Título"
  placeholder="Título sem nome"
  className="text-2xl font-semibold"
  value={titulo}
  onChange={(e) => setTitulo(e.target.value)}
/>
```

Com `bare` não há anel de foco: dê outra pista visual de foco ao contêiner e sempre use `aria-label` ou um label visível.

Para botões dentro da mesma borda, use `InputGroupTextarea` (veja [InputGroup](./input-group.md)).

## Acessibilidade

- Precisa de label (`FieldLabel htmlFor` ou `aria-label`).
