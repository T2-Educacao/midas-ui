---
title: "Separator"
description: "Linha divisória horizontal ou vertical. Decorativa por padrão; com decorative={false} é anunciada como separador."
---

```tsx
import { Separator } from "@t2-educacao/midas";
```

## Uso

```tsx
<div>
  <p>Perfil</p>
  <Separator className="my-4" />
  <p>Segurança</p>
</div>
```

## Props

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `orientation` | `"horizontal" \| "vertical"` | `"horizontal"` | Direção da linha |
| `decorative` | `boolean` | `true` | `false` faz leitores de tela anunciarem a divisão |

## Exemplos

### Vertical

```tsx
<div className="flex h-5 items-center gap-4 text-sm">
  <span>Blog</span>
  <Separator orientation="vertical" />
  <span>Docs</span>
</div>
```

## Não faça

- Usar Separator para criar espaço: use margem ou `gap`.
