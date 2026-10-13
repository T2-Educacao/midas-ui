---
title: "Switch"
description: "Alternador liga/desliga para configurações que valem na hora (notificações, modo escuro). Tamanhos default e sm; estados desabilitado e inválido; funciona em RTL."
---

```tsx
import { Switch } from "@t2-educacao/midas";
```

## Uso

```tsx
<div className="flex items-center gap-2">
  <Switch id="notificacoes" />
  <Label htmlFor="notificacoes">Receber notificações</Label>
</div>
```

## Props

Aceita as props do [Switch do Radix](https://www.radix-ui.com/primitives/docs/components/switch) e `className`.

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `size` | `"sm" \| "default" \| "md" \| "lg"` | `"default"` | Tamanho do alternador (`default` = `md`) |
| `tone` | `"brand" \| "neutral"` | `"brand"` | Ligado em Cyan (`selection-fill`) ou preto no claro e branco nos escuros |
| `checked` / `defaultChecked` | `boolean` | `false` | Estado controlado / inicial |
| `onCheckedChange` | `(checked: boolean) => void` | | Chamado ao mudar |
| `disabled` | `boolean` | `false` | Desabilita |
| `required` / `name` / `value` | | | Para formulários |

## Variantes

| Tamanho | Quando usar |
|---|---|
| `md` / `default` (36x20px) | Padrão em configurações e formulários |
| `sm` (28x16px) | Listas densas e tabelas |
| `lg` (44x24px) | Mobile e alvos de toque maiores |

Este é o "Toggle" do Figma (Selection Controls). Trilho desligado em `border-strong` (contraste de 3:1 ou mais), ligado em `selection-fill`, pino em `surface-default` com `shadow-elevation-control`; foco com halo `focus-ring`. Para rótulo, descrição e cartão de configurações use [SelectionField](./selection-field.md) com `control="toggle"`.

## Exemplos

### Com descrição (Field horizontal)

```tsx
<Field orientation="horizontal" className="items-start">
  <Switch id="avisos" defaultChecked />
  <div className="grid gap-1">
    <FieldLabel htmlFor="avisos">Avisos por e-mail</FieldLabel>
    <FieldDescription>Receba lembretes de aulas e simulados.</FieldDescription>
  </div>
</Field>
```

### Controlado

```tsx
const [ativo, setAtivo] = React.useState(false);

<Switch aria-label="Modo escuro" checked={ativo} onCheckedChange={setAtivo} />
```

### Inválido

```tsx
<Switch aria-label="Aceito os termos" aria-invalid />
```

## Acessibilidade

- Tem o papel `switch`. Use `Label htmlFor` ou `aria-label`: clicar no texto alterna.
- `Espaço` alterna; o foco é visível.
- No RTL o botão desliza para o lado correto sozinho.

## Não faça

- Usar Switch para escolha que só vale ao enviar um formulário: use [Checkbox](./checkbox.md).
- Usar Switch para escolher entre opções: use [RadioGroup](./radio-group.md).
- Deixar o Switch sem texto ou `aria-label`.
