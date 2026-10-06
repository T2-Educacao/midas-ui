---
title: "Tema e tokens"
description: "Tokens do Midas (cores da T2 em claro e escuro, fontes Geist, raios e animação), como funcionam os temas e como sobrescrever valores."
---

Os tokens são **variáveis CSS** com prefixo `--midas-` e viram classes do Tailwind sem prefixo (`--midas-primary` vira `bg-primary`, `text-primary`, `border-primary`...). Os nomes seguem o padrão do shadcn/ui, o mesmo usado na hub.

## Cores

As cores são as da T2 (as mesmas da hub), em tema claro e escuro. Cada cor de fundo tem um par `-foreground` para o texto que vai por cima dela. Sempre use os dois juntos: `bg-primary text-primary-foreground`.

| Token (classe) | Uso | Claro | Escuro |
|---|---|---|---|
| `background` / `foreground` | Fundo da página e texto principal | `#ffffff` / `#303031` | `#0a0b24` / `#f8f9fc` |
| `card` / `card-foreground` | Cards e painéis | `#ffffff` | `#111340` |
| `popover` / `popover-foreground` | Menus, tooltips, popovers | `#ffffff` | `#111340` |
| `primary` / `primary-foreground` | Azul T2: ação principal, links, foco | `#009adb` / `#ffffff` | `#009adb` / `#ffffff` |
| `secondary` / `secondary-foreground` | Ações secundárias | `#f1f5f9` | `#0c0d2c` |
| `muted` / `muted-foreground` | Áreas neutras e texto secundário | `#f1f5f9` / `#65758b` | `#0c0d2c` / `#b9c1d5` |
| `accent` / `accent-foreground` | Hover de itens de menu e seleção | `#f1f5f9` | `#151751` |
| `destructive` / `destructive-foreground` | Erro e ações destrutivas | `#dc2828` | `#dc2828` |
| `success` / `success-foreground` | Sucesso, status online | `#16a34a` | `#22c55e` |
| `warning` / `warning-foreground` | Atenção, pendências | `#db7706` | `#f6a822` |
| `info` / `info-foreground` | Informação neutra, dicas | `#2474f5` | `#61a6fa` |
| `border` | Bordas padrão | `#e1e7ef` | `#1b1c46` |
| `input` | Borda de campos | `#e1e7ef` | `#1f2151` |
| `ring` | Anel de foco | `#009adb` | `#38c6fa` |

### Camadas (z-index)

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

## Tipografia

A fonte é a mesma do site da T2: **Geist** e **Geist Mono**.

| Token | Classe | Valor |
|---|---|---|
| `--midas-font-sans` | `font-sans` | `var(--font-geist-sans)`, depois `"Geist"` |
| `--midas-font-mono` | `font-mono` | `var(--font-geist-mono)`, depois `"Geist Mono"` |

Se o projeto carrega a Geist com `next/font` nas variáveis `--font-geist-sans` e `--font-geist-mono` (como o site), o Midas usa a fonte automaticamente. Veja [Instalação](./instalacao.md).

A escala de texto do Figma é a padrão do Tailwind:

| Classe | Tamanho / altura de linha | Uso |
|---|---|---|
| `text-xs` | 12 / 16px | Labels, badges, botões pequenos |
| `text-sm` | 14 / 20px | Texto de interface, botões |
| `text-base` | 16 / 24px | Corpo |
| `text-lg` | 18 / 28px | Títulos de card |
| `text-xl` | 20 / 28px | Subtítulos |
| `text-2xl` | 24 / 32px | Títulos de seção |
| `text-3xl` | 30 / 36px | Títulos de página |

Pesos usados: 400 (corpo), 500 (interface e labels) e 600 (títulos).

## Raios

| Classe | Valor | Uso |
|---|---|---|
| `rounded-xs` | 4px | Detalhes pequenos |
| `rounded-sm` | 6px | Teclas (`Kbd`), itens de menu |
| `rounded-md` | 8px | Botões e toggles pequenos |
| `rounded-lg` | 10px | Botões, campos, tooltips |
| `rounded-xl` | 14px | Cards |
| `rounded-2xl` | 18px | Painéis e diálogos |
| `rounded-full` | 9999px | Pills, avatares |

## Espaçamento

O Figma usa a escala padrão do Tailwind (4px por unidade): `1` = 4px, `1.5` = 6px, `2` = 8px, `2.5` = 10px, `3` = 12px, `4` = 16px, `6` = 24px.

## Claro e escuro

- **Claro** é o padrão (`:root`).
- **Escuro** ativa com a classe `.dark` ou o atributo `data-theme="dark"` em qualquer ancestral (normalmente o `<html>`).
- A variante `dark:` do Tailwind segue a mesma regra.

Você quase nunca precisa de `dark:`: os tokens já trocam de valor sozinhos.

Certo, o token muda com o tema:

```tsx
<div className="bg-card text-card-foreground" />
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
  --midas-primary: hsl(213 75% 45%);
}
```

Também dá para aplicar só numa área: `<section style={{ "--midas-primary": "#F2921C" } as React.CSSProperties}>`. Use com moderação: se todo projeto precisa sobrescrever o mesmo token, o valor deve mudar no Midas.
