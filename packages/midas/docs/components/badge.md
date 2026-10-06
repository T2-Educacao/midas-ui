---
title: "Badge"
description: "Etiqueta pequena em formato pill para status e destaques (ex.: Beta, Novo). Variantes secondary (padrão), default, outline, destructive e success."
---

```tsx
import { Badge } from "@t2-educacao/midas";
```

## Uso

```tsx
<Badge>Beta</Badge>
```

## Props

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `variant` | `"secondary" \| "default" \| "outline" \| "destructive" \| "success" \| "warning" \| "info"` | `"secondary"` | Estilo visual |
| `asChild` | `boolean` | `false` | Renderiza o filho (ex.: link) com o visual de badge |

## Variantes

| Variante | Quando usar |
|---|---|
| `secondary` | Etiquetas neutras ("Beta", "Rascunho") |
| `default` | Destaque na cor da T2 ("Novo") |
| `outline` | Filtros e categorias |
| `destructive` | Erro, expirado, cancelado |
| `success` | Concluído, aprovado, ativo |
| `warning` | Pendente, atenção, prazo perto de vencer |
| `info` | Informação neutra, dica, novidade sem urgência |

## Exemplos

```tsx
<Badge variant="success"><CheckCircle /> Aprovado</Badge>

<Badge asChild variant="outline">
  <a href="/cursos?categoria=cpa">CPA</a>
</Badge>
```

No label de um campo, o badge vai para a direita automaticamente:

```tsx
<FieldLabel htmlFor="webhook">
  Webhook <Badge>Beta</Badge>
</FieldLabel>
```

## Acessibilidade

- Não dependa só da cor: o texto do badge precisa dizer o status.

## Não faça

- Usar badge como botão. Para ações, use [Button](./button.md).
