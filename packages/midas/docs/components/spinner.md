---
title: Spinner
description: "Indicador de carregamento de duração desconhecida: Ring (padrão) ou Dots, tamanhos xs a xl (12 a 48px), tons current (padrão), brand, neutral e media. Role status com rótulo acessível."
---

```tsx
import { Spinner } from "@t2-educacao/midas";
```

Mostra que algo está acontecendo quando não sabemos quanto tempo vai levar. Tempo conhecido: [Progress](./progress.md). Carregamento de página: [Skeleton](./skeleton.md). Spinner com mensagem: [LoadingState](./loading-state.md).

## Uso

```tsx
<Spinner />
<Spinner size="lg" tone="brand" />
<Spinner variant="dots" size="md" label="Assistente digitando" />
<Spinner label="" aria-hidden="true" />
```

## Props

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `variant` | `"ring" \| "dots"` | `"ring"` | Ring é o padrão; Dots para contextos de conversa (digitando, IA pensando) |
| `size` | `"xs" \| "sm" \| "md" \| "lg" \| "xl"` | `"sm"` | 12, 16, 24, 32 e 48px |
| `tone` | `"current" \| "brand" \| "neutral" \| "media"` | `"current"` | `current` herda a cor do texto (ideal dentro de botões); `brand` ciano; `neutral` escuro; `media` branco sobre imagem |
| `label` | `string` | `"Carregando"` | Nome acessível. Vazio (`""`) deixa decorativo (sem `role="status"`) |

O padrão do Figma é `brand`; aqui o padrão é `current` para o Spinner funcionar dentro de botões coloridos. Passe `tone="brand"` fora deles.

## Regras

- Botões usam o próprio estado `loading` do [Button](./button.md): não coloque Spinner solto ao lado.
- Se a espera passar de 2 s, mostre uma mensagem dizendo o que está acontecendo ([LoadingState](./loading-state.md)).

## Acessibilidade

- `role="status"` com `aria-label`. Quando houver texto visível ao lado, use `label=""` e `aria-hidden`.
- Com `prefers-reduced-motion` o giro e o salto dos pontos são desligados (`motion-reduce`).

## Não faça

- Usar vários spinners na mesma área.
- Usar Spinner para páginas inteiras (use Skeleton).
