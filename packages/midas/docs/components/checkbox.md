---
title: "Checkbox"
description: "Caixa de seleção de 16px para escolhas independentes (aceitar termos, filtros). Estados marcado, desmarcado, indeterminado, desabilitado e inválido."
---

```tsx
import { Checkbox } from "@t2-educacao/midas";
```

## Uso

```tsx
<div className="flex items-center gap-2">
  <Checkbox id="termos" />
  <Label htmlFor="termos">Aceito os termos de uso</Label>
</div>
```

## Props

Aceita as props do [Checkbox do Radix](https://www.radix-ui.com/primitives/docs/components/checkbox):

| Prop | Tipo | Descrição |
|---|---|---|
| `checked` / `defaultChecked` | `boolean \| "indeterminate"` | Estado controlado / inicial |
| `onCheckedChange` | `(checked) => void` | Chamado ao mudar |
| `disabled` | `boolean` | Desabilita |
| `required` / `name` / `value` | | Para formulários |

## Exemplos

### Com descrição (Field horizontal)

```tsx
<Field orientation="horizontal" className="items-start">
  <Checkbox id="novidades" defaultChecked />
  <div className="grid gap-1">
    <FieldLabel htmlFor="novidades">Receber novidades</FieldLabel>
    <FieldDescription>Avisamos sobre novos cursos e simulados.</FieldDescription>
  </div>
</Field>
```

### Indeterminado ("selecionar todos")

```tsx
<Checkbox checked="indeterminate" aria-label="Selecionar todas as aulas" />
```

## Acessibilidade

- Use `Label htmlFor`: clicar no texto marca a caixa.
- `Espaço` marca e desmarca.

## Não faça

- Usar Checkbox para escolha única: use [RadioGroup](./radio-group.md).
- Usar Checkbox para ligar/desligar algo na hora: use [Toggle](./toggle.md).
