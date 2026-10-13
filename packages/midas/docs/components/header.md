---
title: "Header"
description: "Barra superior do produto e do site. Estilos transparent, glass, solid e floating; links são NavItem type header (ativo com traço Cyan); altura de 56px no mobile e 64px no desktop; luz Cyan opcional."
---

```tsx
import { Header, HeaderActions, HeaderBrand, HeaderNav, HeaderNavItem, Button } from "@t2-educacao/midas";
```

## Quando usar

- `transparent`: heros e páginas de marketing sobre imagem (garanta contraste com scrim no topo).
- `glass`: header fixo (sticky) que passa sobre o conteúdo.
- `solid`: produto/app.
- `floating`: landing pages e experiências mais leves.

## Não use

- `transparent` sobre imagem sem scrim (`bg-material-scrim-bg`): o texto perde contraste.
- Dropdown que abre só no hover.
- `showLight` fora de landing e momentos de marca.

## Uso

```tsx
<Header variant="solid">
  <HeaderBrand>
    <a href="/" aria-label="T2 Educação">T2</a>
  </HeaderBrand>
  <HeaderNav>
    <HeaderNavItem asChild active><a href="/">Início</a></HeaderNavItem>
    <HeaderNavItem asChild><a href="/trilhas">Trilhas</a></HeaderNavItem>
    <HeaderNavItem asChild><a href="/planos">Planos</a></HeaderNavItem>
  </HeaderNav>
  <HeaderActions>
    <Button variant="ghost">Entrar</Button>
    <Button variant="accent" rounded>Começar grátis</Button>
  </HeaderActions>
</Header>
```

## Anatomia

`Header` (`<header>`) > `HeaderBrand` (logo) + `HeaderNav` (`<nav aria-label="Principal">` com `<ul>`, escondido abaixo de `md`) > `HeaderNavItem` (um `NavItem type="header"`) + `HeaderActions` (à direita). No mobile, esconda a nav e coloque um botão de menu em `HeaderActions` que abre a Sidebar como drawer.

## Props

Todas as partes aceitam `className` (o seu vence) e `ref`.

### Header

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `variant` | `"transparent" \| "glass" \| "solid" \| "floating"` | `"transparent"` | Estilo do Figma |
| `showLight` | `boolean` | `false` | Spot Cyan suave sob o item ativo (use com moderação) |

### HeaderNav / HeaderNavItem

`HeaderNav` aceita `aria-label` (padrão "Principal"). `HeaderNavItem` aceita as props de [NavItem](./sidebar.md) (`active`, `icon`, `badge`, `showChevron`, `expanded`, `asChild`).

Também exportado: `headerVariants`.

## Tokens

Glass: `material-glass-surface` + `material-glass-border` + blur. Solid: `surface-default` + `border-subtle`. Floating: vidro + `elevation-overlay` + `rounded-pill`. Links: `content-secondary` para `content-primary`; indicador `action-accent-bg`.

## Limitações

O Figma troca Transparent por Glass ao rolar (200ms); isso fica a cargo do app (alterne `variant` ao rolar). O logo T2 não faz parte deste componente.

## Exemplos

### Sticky com vidro

```tsx
<Header variant="glass" className="sticky top-0 z-popup">...</Header>
```

### Dropdown em item

```tsx
<HeaderNavItem showChevron expanded={aberto} onClick={() => setAberto((v) => !v)}>
  Investimentos
</HeaderNavItem>
```

## Acessibilidade

- `<header>` + `<nav aria-label="Principal">`; item ativo com `aria-current="page"`.
- Dropdown: botão com `aria-expanded`; abre no clique e fecha com Esc.
- Em `transparent` sobre imagem, contraste ≥ 4,5:1 com scrim no topo.
- Em tema escuro o tema troca sozinho pelos tokens.

## Não faça

- Esconder a navegação principal sem alternativa no mobile.
- Cores soltas ou `dark:`.
