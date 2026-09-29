---
title: Ícones
description: Ícones Phosphor pelo Midas. Import, tamanhos, pesos, cores e uso em Server Components.
---

O Midas usa [Phosphor Icons](https://phosphoricons.com) como biblioteca oficial e a reexporta em `@t2-educacao/midas/icons`. Você **não** precisa instalar o Phosphor separadamente.

```tsx
import { ArrowRight, CheckCircle, MagnifyingGlass } from "@t2-educacao/midas/icons";
```

Procure os nomes em [phosphoricons.com](https://phosphoricons.com). O nome do componente é o nome do ícone em PascalCase (`magnifying-glass` → `MagnifyingGlass`).

## Server e Client Components

Os ícones do Midas funcionam nos dois, sem configuração: eles vêm da versão SSR do Phosphor, que não usa contexto React.

## Tamanho, peso e cor

```tsx
<CheckCircle size={20} weight="fill" className="text-success" />
```

| Prop | Padrão | Valores |
|---|---|---|
| `size` | `1em` | número (px) ou string CSS |
| `weight` | `regular` | `thin`, `light`, `regular`, `bold`, `fill`, `duotone` |
| `color` | `currentColor` | prefira `className="text-..."` com tokens |

- A cor herda o texto (`currentColor`). Use tokens: `text-primary`, `text-muted-foreground`.
- Dentro de `Button`, o tamanho já é ajustado automaticamente pelo `size` do botão.

## Acessibilidade

- Ícone **decorativo** (ao lado de texto): não precisa de nada.
- Ícone **sozinho** com significado: dê um nome acessível ao elemento pai.

```tsx
<Button size="icon" aria-label="Buscar">
  <MagnifyingGlass />
</Button>
```

## Tipos

```tsx
import type { Icon, IconProps, IconWeight } from "@t2-educacao/midas/icons";

type Item = { label: string; icon: Icon };
```

## Regras

- Use **só** ícones do Midas. Não misture `lucide-react`, `react-icons`, heroicons etc.
- Não importe de `@phosphor-icons/react` direto: importe de `@t2-educacao/midas/icons`, assim a versão fica sincronizada com o design system.
