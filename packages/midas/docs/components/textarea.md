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

Para botões dentro da mesma borda, use `InputGroupTextarea` (veja [InputGroup](./input-group.md)).

## Acessibilidade

- Precisa de label (`FieldLabel htmlFor` ou `aria-label`).
