---
title: CodeInput
description: "Campo de código de verificação (OTP) do Midas: um campo por dígito, 4 ou 6 dígitos (6 com separador no meio), colar, setas e Backspace, autocomplete one-time-code. Tamanhos MD e LG, estilos outline/filled/glass, tom, forma, estados de erro e sucesso."
---

```tsx
import { CodeInput } from "@t2-educacao/midas";
```

## Quando usar

Confirmar e-mail, telefone ou login com código numérico. LG no mobile.

## Props

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `length` | `4 \| 6` | `4` | Quantidade de dígitos |
| `value` / `defaultValue` | `string` | `""` | Código (controlado ou inicial) |
| `onValueChange` | `(value: string) => void` | | A cada alteração |
| `onComplete` | `(value: string) => void` | | Quando todos os dígitos foram preenchidos |
| `size` | `"md" \| "lg"` | `"md"` | Slot 48x56 ou 56x64 |
| `appearance` | `"outline" \| "filled" \| "glass"` | `"outline"` | Estilo |
| `tone` | `"brand" \| "neutral"` | `"brand"` | Cor do foco |
| `shape` | `"rounded" \| "pill"` | `"rounded"` | Forma dos slots |
| `numeric` | `boolean` | `true` | Só dígitos (`inputMode="numeric"`) |
| `invalid` / `success` | `boolean` | | Estados de erro e sucesso |
| `disabled` | `boolean` | | |
| `name` | `string` | | Cria um `<input type="hidden">` com o código para formulários |
| `slotLabel` | `(index, total) => string` | `"Dígito 1 de 4"` | `aria-label` de cada slot |

Exporta `codeSlotVariants`.

## Exemplo

```tsx
<div className="flex flex-col gap-2">
  <CodeInput aria-label="Código de verificação" length={6} onComplete={verificar} />
  <FieldDescription>Enviamos um código para seu e-mail.</FieldDescription>
</div>
```

Erro: `<CodeInput invalid />` com `<FieldError>Código inválido. Tente novamente.</FieldError>`. Sucesso: `success` com `FieldSuccess`.

## Acessibilidade

Um campo por dígito, o primeiro com `autocomplete="one-time-code"` (preenchimento automático de SMS). Dê `aria-label` ao grupo. Erro com texto, nunca só cor.

## Não faça

- Não use para senhas (o código fica visível).
- Não envie o código a cada dígito: use `onComplete`.
