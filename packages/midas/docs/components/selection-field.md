---
title: "SelectionField"
description: "Controle de seleção (checkbox, radio ou toggle) junto de rótulo e descrição, em linha simples (plain) ou em cartão com ícone (card). Rótulo clicável, estado de erro com mensagem, tons brand e neutral."
---

```tsx
import { SelectionField } from "@t2-educacao/midas";
```

## Quando usar

Formulários e telas de configuração onde cada opção tem rótulo e uma descrição curta. `plain` para formulários; `card` para configurações (ícone à esquerda, toggle à direita). Para só o controle, use [Checkbox](./checkbox.md), [RadioGroup](./radio-group.md) ou [Switch](./switch.md).

## Uso

```tsx
import { IconBell } from "@t2-educacao/midas/icons";

<SelectionField
  label="Aceito receber novidades"
  description="Avisos sobre aulas, trilhas e certificados."
/>

<SelectionField
  appearance="card"
  control="toggle"
  icon={<IconBell />}
  label="Notificações"
  description="Lembretes de aulas e simulados."
  defaultChecked
/>

<RadioGroup defaultValue="mensal" aria-label="Plano">
  <SelectionField control="radio" value="mensal" label="Mensal" />
  <SelectionField control="radio" value="anual" label="Anual" />
</RadioGroup>
```

## Props

Aceita as props de `<div>` (raiz, recebe `ref` e `className`) mais:

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `label` | `ReactNode` | obrigatório | Rótulo, clicável |
| `description` | `ReactNode` | | Texto de apoio |
| `errorMessage` | `ReactNode` | | Marca erro e substitui a descrição, em `status-danger-content` |
| `invalid` | `boolean` | `false` | Marca erro sem mensagem |
| `control` | `"checkbox" \| "radio" \| "toggle"` | `"checkbox"` | Controle usado (`toggle` = Switch) |
| `appearance` | `"plain" \| "card"` | `"plain"` | Linha simples ou cartão |
| `icon` | `ReactNode` | | Ícone Tabler no cartão (tile de 40px) |
| `tone` | `"brand" \| "neutral"` | `"brand"` | Cyan ou preto/branco |
| `checked` / `defaultChecked` / `onCheckedChange` | | | Estado de checkbox e toggle |
| `value` | `string` | | Valor do radio (use dentro de `RadioGroup`) |
| `disabled`, `required`, `name`, `controlId` | | | Repassados ao controle |

## Estados

Default, disabled (rótulo em `content-disabled`) e erro (borda e controle em `status-danger-fill`, mensagem em `status-danger-content`). No cartão com checkbox ou radio, marcado destaca a borda e o fundo (`selection-border`/`selection-bg`).

## Acessibilidade

- O rótulo é um `<label htmlFor>`: o texto inteiro é parte do alvo de clique.
- Descrição/erro ligados por `aria-describedby`; erro marca `aria-invalid` (nunca só a cor).
- `toggle` tem `role="switch"`. Agrupe radios em `RadioGroup` com `aria-label`.

## Não faça

- Radio fora de um `RadioGroup`.
- Toggle para escolha que só vale ao enviar o formulário: use checkbox.
- Descrição longa: máximo de uma ou duas linhas.
