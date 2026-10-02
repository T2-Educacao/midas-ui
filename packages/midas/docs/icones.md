---
title: "Ícones"
description: "Ícones Phosphor (padrão) e Tabler (secundária) pelo Midas. Import, tamanhos, pesos, cores e uso em Server Components."
---

O Midas traz as duas bibliotecas de ícones do Figma. Você **não** precisa instalá-las separadamente.

| Biblioteca | Import | Quando usar |
|---|---|---|
| [Phosphor](https://phosphoricons.com) (padrão) | `@t2-educacao/midas/icons` | Sempre que possível |
| [Tabler](https://tabler.io/icons) (secundária) | `@t2-educacao/midas/icons/tabler` | Só quando o ícone não existe na Phosphor |

```tsx
import { ArrowRight, CheckCircle, MagnifyingGlass } from "@t2-educacao/midas/icons";
import { IconBrandWhatsapp } from "@t2-educacao/midas/icons/tabler";
```

Só os ícones importados vão para o bundle do projeto.

## Phosphor

Procure os nomes em [phosphoricons.com](https://phosphoricons.com). O componente é o nome do ícone em PascalCase (`magnifying-glass` vira `MagnifyingGlass`).

```tsx
<CheckCircle size={20} weight="fill" className="text-success" />
```

| Prop | Padrão | Valores |
|---|---|---|
| `size` | `1em` | número (px) ou string CSS |
| `weight` | `regular` | `thin`, `light`, `regular`, `bold`, `fill`, `duotone` |
| `color` | `currentColor` | prefira `className="text-..."` com tokens |

Funciona em Server e Client Components sem configuração: o Midas usa a versão SSR do Phosphor.

## Tabler

Procure os nomes em [tabler.io/icons](https://tabler.io/icons). O componente tem o prefixo `Icon` e o nome em PascalCase (`brand-whatsapp` vira `IconBrandWhatsapp`).

```tsx
<IconBrandWhatsapp size={20} stroke={1.5} className="text-success" />
```

| Prop | Padrão | Valores |
|---|---|---|
| `size` | `24` | número (px) |
| `stroke` | `2` | espessura do traço |
| `color` | `currentColor` | prefira `className="text-..."` com tokens |

## Regras gerais

- A cor herda o texto (`currentColor`). Use tokens: `text-primary`, `text-muted-foreground`.
- Dentro de `Button`, `Toggle` e outros componentes, o tamanho é ajustado automaticamente.
- Na mesma tela, prefira uma biblioteca só. Misture apenas quando faltar um ícone.

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

## Não faça

- Usar outras bibliotecas (`lucide-react`, `react-icons`, heroicons...).
- Importar de `@phosphor-icons/react` ou `@tabler/icons-react` direto: importe pelo Midas, assim a versão fica sincronizada com o design system.
