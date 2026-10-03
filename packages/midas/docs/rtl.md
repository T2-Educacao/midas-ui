---
title: "Direita para esquerda (RTL)"
description: "Como usar o Midas em idiomas escritos da direita para a esquerda: dir=\"rtl\" no HTML e DirectionProvider para os componentes interativos."
---

Todos os componentes do Midas funcionam em direita para esquerda (RTL), como no Figma (variantes `Dir=RTL`). Espaçamentos, cantos, bordas, ícones de seta e a navegação por teclado se invertem sozinhos.

## Como ativar

1. Coloque `dir="rtl"` no elemento raiz (normalmente o `<html>`).
2. Envolva a aplicação no `DirectionProvider`, para menus, carrossel, toggles e outros componentes interativos saberem a direção:

```tsx
import { DirectionProvider } from "@t2-educacao/midas";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <DirectionProvider dir="rtl">{children}</DirectionProvider>
      </body>
    </html>
  );
}
```

Para só uma área da página, use os dois no mesmo container:

```tsx
<div dir="rtl">
  <DirectionProvider dir="rtl">
    <ToggleGroup type="single">...</ToggleGroup>
  </DirectionProvider>
</div>
```

## useDirection

Para seus próprios componentes, leia a direção atual:

```tsx
import { useDirection } from "@t2-educacao/midas";

const direcao = useDirection();
```

## Ao criar componentes

Use classes lógicas do Tailwind, que se invertem em RTL:

| Use | Em vez de |
|---|---|
| `ps-*` / `pe-*` | `pl-*` / `pr-*` |
| `ms-*` / `me-*` | `ml-*` / `mr-*` |
| `start-*` / `end-*` | `left-*` / `right-*` |
| `rounded-s-*` / `rounded-e-*` | `rounded-l-*` / `rounded-r-*` |
| `border-s` / `border-e` | `border-l` / `border-r` |
| `text-start` / `text-end` | `text-left` / `text-right` |

Ícones que indicam direção (setas, carets) recebem `rtl:rotate-180`.
