---
title: Textarea
description: "Campo de texto longo do Midas. Mesmos estilos do Input (outline, filled, glass), tom brand/neutral e forma rounded/pill (raio grande), estados de erro e sucesso, autoGrow e modo bare. Contador em fonte mono via FieldCounter."
---

```tsx
import { Textarea } from "@t2-educacao/midas";
```

## Quando usar

Comentários, mensagens, descrições. Para uma linha use [Input](./input.md); para texto formatado, um editor rico.

## Props

Aceita as props de `<textarea>`.

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `appearance` | `"outline" \| "filled" \| "glass"` | `"outline"` | Estilo do campo |
| `tone` | `"brand" \| "neutral"` | `"brand"` | Cor do foco |
| `shape` | `"rounded" \| "pill"` | `"rounded"` | No pill o raio é grande (`rounded-3xl`), porque cápsula não funciona em área alta |
| `success` | `boolean` | `false` | Borda de sucesso |
| `autoGrow` | `boolean` | `false` | Cresce com o conteúdo |
| `bare` | `boolean` | `false` | Sem borda, fundo e padding (para compor dentro de outro container) |
| `aria-invalid` | `boolean` | | Estado de erro |
| `className` | `string` | | Classes extras (as suas vencem) |

Altura mínima de 96px (`min-h-24`).

## Exemplos

### Com contador e apoio

```tsx
import { Field, FieldCounter, FieldDescription, FieldLabel, Textarea } from "@t2-educacao/midas";

function Mensagem() {
  const [texto, setTexto] = useState("");
  return (
    <Field>
      <FieldLabel htmlFor="msg">Mensagem</FieldLabel>
      <Textarea id="msg" maxLength={200} value={texto} onChange={(e) => setTexto(e.target.value)} />
      <div className="flex">
        <FieldDescription>Máximo de 200 caracteres.</FieldDescription>
        <FieldCounter>{texto.length}/200</FieldCounter>
      </div>
    </Field>
  );
}
```

### Erro

```tsx
<Textarea aria-label="Comentário" aria-invalid />
```

## Acessibilidade

Rótulo visível, erro com ícone e texto (`FieldError`), foco com borda 1px + halo 4px.

## Não faça

- Não use `shape="pill"` com `rounded` na mesma tela.
- Não coloque o contador só em cor: mostre o número (`0/200`).
