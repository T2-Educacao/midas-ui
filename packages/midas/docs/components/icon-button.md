---
title: "IconButton"
description: "Botão de ação representado só por ícone (Figma Icon Button). Variantes do Button, tamanhos xs a xl, forma rounded ou circle; exige aria-label."
---

```tsx
import { IconButton } from "@t2-educacao/midas";
```

## Quando usar

Para uma ação conhecida que cabe num ícone (buscar, fechar, favoritar, configurações), em toolbars, cabeçalhos de card e listas. Se a ação não é óbvia pelo ícone, use [Button](./button.md) com texto. O ícone sozinho exige `aria-label` e, de preferência, um [Tooltip](./tooltip.md).

## Anatomia

Container quadrado (`size-control-*`) com o ícone Tabler centralizado, na cor do texto da variante. É um [Button](./button.md) com `size="icon-*"`, então herda todas as variantes e estados.

## Uso

```tsx
import { IconSearch } from "@t2-educacao/midas/icons";

<IconButton aria-label="Buscar" variant="ghost">
  <IconSearch />
</IconButton>
```

## Props

Aceita as props do [Button](./button.md) (exceto `size`, `rounded` e `filled`):

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `aria-label` | `string` | obrigatório | Nome acessível da ação |
| `size` | `"xs" \| "sm" \| "md" \| "lg" \| "xl"` | `"md"` | 24, 28, 32, 40 e 48px (quadrado) |
| `shape` | `"rounded" \| "circle"` | `"rounded"` | Cantos discretos ou totalmente redondo |
| `variant` | variantes do Button | `"default"` | `primary`, `accent`, `secondary`, `outline`, `ghost`, `destructive`... |
| `loading` | `boolean` | `false` | O spinner substitui o ícone |
| `asChild` | `boolean` | `false` | Renderiza o filho (ex.: `<a>`) com o visual |

## Tamanhos

| `size` | Medida | Ícone | Raio (`rounded`) |
|---|---|---|---|
| `xs` | 24px | 16 | 4 |
| `sm` | 28px | 16 | 4 |
| `md` | 32px | 16 | 6 |
| `lg` | 40px | 20 | 6 |
| `xl` | 48px | 20 | 8 |

## Exemplos

```tsx
<IconButton aria-label="Favoritar" variant="accent" shape="circle" size="lg">
  <IconHeart />
</IconButton>

<IconButton aria-label="Salvando" loading />
```

## Acessibilidade

- `aria-label` é obrigatório (o tipo exige).
- Foco, hover, pressed e disabled seguem o Button. Alvo de toque: em mobile use `lg` ou maior.

## Não faça

- Ícone sem rótulo acessível.
- Misturar `rounded` e `circle` no mesmo grupo.
- Usar ícones de outras bibliotecas: sempre Tabler (`@t2-educacao/midas/icons`).
