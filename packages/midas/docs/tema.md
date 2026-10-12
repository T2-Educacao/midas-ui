---
title: "Tema e tokens"
description: "Visão geral dos tokens do Midas (variáveis --midas-*, 86 cores semânticas em Light, Dark e Dark Blue, tipografia, escalas, elevação e grid), como ativar cada tema e como migrar dos nomes antigos."
---

O Midas segue o Figma: **a fonte da verdade são os tokens do arquivo do Midas**. Eles viram **variáveis CSS** com prefixo `--midas-` e utilitários do Tailwind sem prefixo (`--midas-surface-canvas` vira `bg-surface-canvas`).

## Mapa dos fundamentos

| Assunto | Doc | Exemplos de classes |
|---|---|---|
| Cores (86 tokens semânticos, 3 temas, aliases) | [Cores](./fundamentos/cores.md) | `bg-surface-canvas`, `text-content-secondary`, `border-border-subtle`, `bg-action-accent-bg` |
| Tipografia (Geist, JetBrains Mono, 16 text styles) | [Tipografia](./fundamentos/tipografia.md) | `text-heading-xl`, `text-body-md`, `text-label-sm`, `text-mono-md` |
| Escalas (espaçamento, controles, ícones, raios, borda) | [Escalas](./fundamentos/escalas.md) | `h-control-md`, `size-icon-sm`, `rounded-control`, `rounded-container` |
| Elevação, foco e materiais | [Elevação, foco e materiais](./fundamentos/elevacao-e-foco.md) | `shadow-elevation-card`, `focus-ring`, `material-glass` |
| Grid e breakpoints | [Grid](./fundamentos/grid.md) | `grid-midas`, `--midas-grid-columns` |

## Temas: Light, Dark e Dark Blue

| Tema | Ativação |
|---|---|
| **Light** (padrão) | sem nada, ou `data-theme="light"` em qualquer ancestral |
| **Dark** | classe `.dark` ou `data-theme="dark"` em qualquer ancestral (normalmente o `<html>`) |
| **Dark Blue** | `data-theme="dark-blue"` em qualquer ancestral |

- A variante `dark:` do Tailwind vale nos **dois** escuros (`.dark`, `data-theme="dark"` e `data-theme="dark-blue"`).
- Os tokens são idênticos nos três temas; só os valores mudam. Por isso quase nunca é preciso escrever `dark:`.
- O tema vale para toda a subárvore: dá para ter um bloco `data-theme="dark-blue"` dentro de uma página Light.
- Com `next-themes`: `<ThemeProvider attribute="data-theme" themes={["light", "dark", "dark-blue"]}>`. Com `attribute="class"` só funcionam Light e Dark.

Certo, o token muda com o tema:

```tsx
<div className="bg-surface-default text-content-primary" />
```

Evite duplicar o tema na mão:

```tsx
<div className="bg-white dark:bg-slate-900" />
```

## Famílias de token

| Grupo | Prefixo da variável | Exemplo |
|---|---|---|
| Cor semântica | `--midas-<grupo>-<nome>` | `--midas-content-secondary`, `--midas-action-accent-bg-hover`, `--midas-status-danger-subtle` |
| Cor (nomes antigos, alias) | `--midas-background`, `--midas-primary`... | veja a tabela abaixo |
| Fonte | `--midas-font-sans`, `--midas-font-mono` | |
| Tipografia | `--midas-font-size-*`, `--midas-line-height-*`, `--midas-font-weight-*`, `--midas-tracking-*` | |
| Espaçamento | `--midas-space-*` | `--midas-space-6` |
| Tamanho | `--midas-size-control-*`, `--midas-size-icon-*` | |
| Raio | `--midas-radius-*` | `--midas-radius-control` |
| Borda / opacidade | `--midas-border-width-*`, `--midas-opacity-disabled` | |
| Elevação / foco | `--midas-elevation-*`, `--midas-focus-ring-shadow` | |
| Blur | `--midas-blur-*` | |
| Grid | `--midas-grid-columns`, `--midas-grid-gutter`, `--midas-grid-margin`, `--midas-grid-max-width` | |
| Camadas | `--midas-z-overlay`, `--midas-z-popup` | |

## Nomes antigos viraram alias

Os nomes herdados do shadcn (`background`, `foreground`, `card`, `primary`, `muted`, `border`...) continuam funcionando, apontando para os novos tokens. Resumo (tabela completa em [Cores](./fundamentos/cores.md#nomes-antigos-aliases)):

| Antigo | Novo |
|---|---|
| `background` / `foreground` | `surface-canvas` / `content-primary` |
| `card` | `surface-default` |
| `popover` | `overlay-surface` |
| `primary` | `action-accent-bg` (Cyan) com `action-accent-content` |
| `secondary` | `action-secondary-bg` com `action-secondary-content` |
| `muted` / `muted-foreground` | `surface-muted` / `content-secondary` |
| `accent` | `state-hover` |
| `destructive`, `success`, `warning`, `info` | `action-destructive-bg`, `status-success-fill`, `status-warning-fill`, `status-info-fill` |
| `border`, `input` | `border-default` |
| `ring` | `focus-ring` |
| `chart-1` a `chart-8` | `chart-1` a `chart-5` do Figma; 6 a 8 são extensões do código |

Em código novo use os nomes novos. Os aliases existem para migração gradual e não serão removidos sem aviso de quebra.

## Camadas (z-index)

Os overlays e popups usam variáveis, para encaixar o Midas em projetos com camadas próprias:

| Variável | Padrão | Usada por |
|---|---|---|
| `--midas-z-overlay` | `50` | Dialog (fundo e conteúdo) |
| `--midas-z-popup` | `50` | Select, DropdownMenu, Popover, Combobox, DatePicker, Tooltip |

Para que menus abram acima de modais antigos do projeto, sobrescreva no CSS global:

```css
:root {
  --midas-z-overlay: 1000;
  --midas-z-popup: 1100;
}
```

## Sobrescrever um token

Para ajustar um valor num projeto específico, redefina a variável **depois** do import, no seletor do tema que quiser alterar:

```css
@import "tailwindcss";
@import "@t2-educacao/midas/theme.css";

:root {
  --midas-action-accent-bg: #0e7490;
}

[data-theme="dark-blue"] {
  --midas-surface-canvas: #0b1020;
}
```

Também dá para aplicar só numa área: `<section style={{ "--midas-surface-canvas": "#0b1020" } as React.CSSProperties}>`. Use com moderação: se todo projeto precisa sobrescrever o mesmo token, o valor deve mudar no Midas.

## Tailwind v3

Em projetos Tailwind v3, o preset `@t2-educacao/midas/tailwind-preset` expõe as mesmas cores semânticas, aliases, raios (inclusive `rounded-control`), fontes, sombras (`shadow-elevation-*`, `shadow-focus-ring*`), alturas (`h-control-md`) e text styles (`text-heading-xl`). Os utilitários `material-*`, `focus-ring*`, `grid-midas` e `opacity-disabled` são do Tailwind v4 (`theme.css`); no v3 use as sombras e variáveis `--midas-*` equivalentes. Veja [Instalação](./instalacao.md).
