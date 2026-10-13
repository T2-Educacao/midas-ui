---
title: Kbd
description: "Tecla ou atalho de teclado em JetBrains Mono (Kbd) e agrupamento de teclas (KbdGroup), tamanhos sm (20px) e md (24px)."
---

```tsx
import { Kbd, KbdGroup } from "@t2-educacao/midas";
```

## Uso

```tsx
<p>Pressione <Kbd>⌘K</Kbd> para buscar.</p>

<KbdGroup>
  <Kbd>Ctrl</Kbd>
  <Kbd>K</Kbd>
</KbdGroup>
```

## Props

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `size` | `"sm" \| "md"` | `"sm"` | 20px ou 24px de altura |
| `className` | `string` | | Mesclada com `cn` |

`KbdGroup` agrupa várias `Kbd` com espaçamento de 4px.

## Acessibilidade

- Renderiza `<kbd>`, semântica nativa para entrada de teclado.
- Em atalhos com símbolos (`⌘`), descreva também em texto no contexto ("Command + K").

## Não faça

- Usar Kbd como botão (tem `pointer-events-none`).
- Usar para código: use `font-mono` com `text-mono-md`.
