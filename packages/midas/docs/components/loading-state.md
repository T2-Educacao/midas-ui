---
title: Loading State
description: "Spinner com mensagem para esperas acima de 2 s: Inline (spinner + texto), Stacked (spinner, título e descrição empilhados) e Overlay (cobre um container com blur e cartão central). Tons brand e neutral."
---

```tsx
import { LoadingState } from "@t2-educacao/midas";
```

## Uso

```tsx
<LoadingState title="Carregando aulas…" />

<LoadingState
  type="stacked"
  title="Gerando seu plano de estudos"
  description="Isso leva só alguns segundos."
/>

<div className="relative min-h-64">
  <Conteudo />
  {carregando && <LoadingState type="overlay" title="Gerando seu plano de estudos" description="Isso leva só alguns segundos." />}
</div>
```

## Props

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `type` | `"inline" \| "stacked" \| "overlay"` | `"inline"` | Disposição |
| `tone` | `"brand" \| "neutral"` | `"brand"` | Cor do spinner |
| `title` | `ReactNode` | | Mensagem (inline) ou título (stacked/overlay) |
| `description` | `ReactNode` | | Texto de apoio (stacked/overlay) |

## Variantes: quando usar

| Tipo | Quando usar |
|---|---|
| `inline` | Dentro de listas, cards ou ao lado de um título |
| `stacked` | Área inteira vazia aguardando conteúdo |
| `overlay` | Cobrir conteúdo existente durante uma ação longa. O pai precisa de `position: relative` |

## Acessibilidade

- `role="status"` e `aria-live="polite"`: a mensagem é anunciada. O spinner interno é decorativo.

## Não faça

- Misturar com [Skeleton](./skeleton.md) na mesma área.
- Usar overlay sobre a página inteira sem necessidade: bloqueia a leitura.
