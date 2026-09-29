---
title: Tema e tokens
description: Lista de tokens do Midas (cores, fontes, raios, motion), como funcionam os temas claro e escuro e como sobrescrever valores.
---

Os tokens são **variáveis CSS** com prefixo `--midas-` e viram classes do Tailwind sem prefixo (`--midas-primary` → `bg-primary`, `text-primary`, `border-primary`...).

> Valores atuais são **provisórios** até a importação do Figma. Os **nomes** abaixo são o contrato: use-os à vontade.

## Cores

Cada cor de "fundo" tem um par `-foreground` para o texto que vai por cima dela. Sempre use os dois juntos: `bg-primary text-primary-foreground`.

| Token (classe) | Uso |
|---|---|
| `background` / `foreground` | Fundo da página e texto principal |
| `surface` / `surface-foreground` | Cards, painéis, popovers |
| `muted` / `muted-foreground` | Áreas neutras e texto secundário |
| `border` | Bordas padrão |
| `input` | Borda de campos de formulário |
| `ring` | Anel de foco (acessibilidade) |
| `primary` / `primary-hover` / `primary-foreground` | Ação principal, links, marca |
| `secondary` / `secondary-hover` / `secondary-foreground` | Ações secundárias |
| `accent` / `accent-foreground` | Destaques e seleção |
| `success` / `success-foreground` | Sucesso, aprovação |
| `warning` / `warning-foreground` | Atenção |
| `danger` / `danger-hover` / `danger-foreground` | Erro, ações destrutivas |

## Tipografia

| Token | Classe |
|---|---|
| `--midas-font-sans` | `font-sans` |
| `--midas-font-mono` | `font-mono` |

## Raios

| Token | Classe | Valor atual |
|---|---|---|
| `--midas-radius-xs` | `rounded-xs` | 4px |
| `--midas-radius-sm` | `rounded-sm` | 6px |
| `--midas-radius-md` | `rounded-md` | 8px |
| `--midas-radius-lg` | `rounded-lg` | 12px |
| `--midas-radius-xl` | `rounded-xl` | 16px |

## Motion

| Token | Classe |
|---|---|
| `--midas-ease-standard` | `ease-standard` |
| `--midas-duration-fast` (120ms) / `--midas-duration-normal` (160ms) | use `duration-150` ou `var(...)` |

Sempre inclua `motion-reduce:transition-none` em animações.

## Claro e escuro

- **Claro** é o padrão (`:root`).
- **Escuro** ativa com a classe `.dark` ou o atributo `data-theme="dark"` em qualquer ancestral (normalmente o `<html>`).
- A variante `dark:` do Tailwind segue a mesma regra.

Você quase nunca precisa de `dark:`: os tokens já trocam de valor sozinhos. `bg-surface` é claro no tema claro e escuro no tema escuro.

Certo, o token muda com o tema:

```tsx
<div className="bg-surface text-surface-foreground" />
```

Evite duplicar o tema na mão:

```tsx
<div className="bg-white dark:bg-slate-900" />
```

## Sobrescrever um token

Para ajustar um valor num projeto específico, redefina a variável **depois** do import:

```css
@import "tailwindcss";
@import "@t2-educacao/midas/theme.css";

:root {
  --midas-primary: #1d69c7;
}
.dark {
  --midas-primary: #36c5fa;
}
```

Também dá para aplicar só numa área: `<section style={{ "--midas-primary": "#F2921C" } as React.CSSProperties}>`. Use com moderação: se todo projeto precisa sobrescrever o mesmo token, o valor deve mudar no Midas.
