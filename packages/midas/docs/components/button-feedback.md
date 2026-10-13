---
title: "ButtonFeedback"
description: "Confirmação ao lado do botão depois do clique (Figma Button Feedback): status success, warning, error, info e loading, mensagem em texto ou pill, à direita ou à esquerda, com horário opcional. Sem toast."
---

```tsx
import { ButtonFeedback } from "@t2-educacao/midas";
```

## Quando usar

Depois de uma ação de formulário, para mostrar o resultado sem toast e sem tirar o foco. Loading usa o estado `loading` do botão; success some após cerca de 4s (controle no app); error e warning ficam até a próxima ação. `text` para rodapés de formulário; `pill` para barras de ação e cards. O ícone sempre acompanha o texto.

## Uso

```tsx
<ButtonFeedback status="success" text="Alterações salvas" time="· agora">
  <Button variant="accent">Salvar alterações</Button>
</ButtonFeedback>

<ButtonFeedback status="error" message="pill" text="Não foi possível salvar. Tente de novo.">
  <Button variant="accent">Salvar alterações</Button>
</ButtonFeedback>
```

## Props

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `status` | `"success" \| "warning" \| "error" \| "info" \| "loading"` | obrigatório | Ícone e cor |
| `text` | `ReactNode` | obrigatório | Mensagem |
| `time` | `ReactNode` | | Texto de tempo ("· agora") |
| `message` | `"text" \| "pill"` | `"text"` | Estilo da mensagem |
| `placement` | `"right" \| "left"` | `"right"` | Lado da mensagem em relação ao botão |
| `children` | `ReactNode` | obrigatório | O botão |

Aceita props de `<div>`, `className` e `ref`. Exporta também `buttonFeedbackMessageVariants`.

## Acessibilidade

- A mensagem tem `role="status"` (polite); `error` e `warning` usam `role="alert"`.
- O ícone é decorativo e o texto sempre existe: nunca só a cor. O spinner respeita `motion-reduce`.

## Não faça

- Usar no lugar de erro de validação por campo: use a mensagem do campo.
- Esconder `error` automaticamente: deve ficar até a próxima ação.
