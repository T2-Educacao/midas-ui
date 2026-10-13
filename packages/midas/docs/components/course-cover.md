---
title: "CourseCover"
description: "Capa de curso: imagem com proporção fixa, scrim, título, eyebrow, selo e barra de progresso opcional."
---

```tsx
import { CourseCover } from "@t2-educacao/midas";
```

## Quando usar

- Cards de curso, trilhas e listas de continuar estudando.

## Props

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `src` | `string` | | Imagem de capa |
| `alt` | `string` | `""` | Vazio quando o título já descreve a capa |
| `ratio` | `"16:9" \| "4:3" \| "1:1" \| "4:5" \| "3:4"` | `"16:9"` | Proporção |
| `radius` | `"container" \| "none"` | `"container"` | |
| `eyebrow`, `title` | `ReactNode` | | Texto sobre a imagem (com scrim) |
| `badge` | `ReactNode` | | Selo no canto superior |
| `progress` | `number` (0 a 100) | | Barra de progresso na base (`role="progressbar"`) |

Exporta `courseCoverVariants`. Aceita `className` e `ref`.

## Exemplo

```tsx
<CourseCover
  src="/cursos/cpa-20.jpg"
  eyebrow="CURSO"
  title="Preparatório CPA-20"
  badge={<Badge>Novo</Badge>}
  progress={40}
/>
```

## Acessibilidade

- Imagem decorativa por padrão; passe `alt` se a capa trouxer informação.
- A barra de progresso tem papel e valores ARIA.

## Não faça

- Não estique imagens de outra proporção: use o `ratio` correto.
- Não coloque texto longo sobre a imagem.

## Limitações

- A página Image Gallery do Figma não traz propriedades de componente documentadas para Course Cover e Illustration; este é um componente simples de capa. Ilustrações use `<img>`/SVG direto.
