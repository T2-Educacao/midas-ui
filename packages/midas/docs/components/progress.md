---
title: "Progress"
description: "Barra de progresso de 6px na cor primária (andamento de curso, upload, etapas). Valor de 0 a max (100 por padrão)."
---

```tsx
import { Progress } from "@t2-educacao/midas";
```

## Uso

```tsx
<Progress value={60} aria-label="Progresso do curso" />
```

## Props

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `value` | `number \| null` | | Valor atual. `null` = indeterminado |
| `max` | `number` | `100` | Valor máximo |
| `aria-label` | `string` | | Nome da barra (obrigatório) |

## Exemplos

### Com rótulo

```tsx
<div className="grid gap-2">
  <div className="flex justify-between text-sm">
    <span>Módulo 2</span>
    <span className="text-muted-foreground">8 de 12 aulas</span>
  </div>
  <Progress value={8} max={12} aria-label="Aulas concluídas do módulo 2" />
</div>
```

## Acessibilidade

- Tem `role="progressbar"` com `aria-valuenow`: sempre dê um `aria-label`.
