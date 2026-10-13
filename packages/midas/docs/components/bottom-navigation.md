---
title: "Bottom Navigation"
description: "Navegação principal no mobile com 3 a 5 destinos. Estilos bar, minimal, glass-bar, floating, icon-pill e center-action; item ativo em Cyan (ou neutro no minimal); luz opcional."
---

```tsx
import {
  BottomNavigation,
  BottomNavigationAction,
  BottomNavigationItem,
} from "@t2-educacao/midas";
import { IconHome, IconBook, IconWallet } from "@t2-educacao/midas/icons";
```

## Quando usar

- Navegação principal em telas mobile, com 3 a 5 destinos de mesmo nível.
- Ações vão no `center-action` ou em botões da tela, não como destino.

## Não use

- Em desktop (use Sidebar ou Header).
- Com mais de 5 destinos, ou para destinos de níveis diferentes.
- Sem rótulo visível, exceto `icon-pill` (que exige `aria-label`).

## Uso

```tsx
<BottomNavigation>
  <BottomNavigationItem asChild active icon={<IconHome />}>
    <a href="/">Início</a>
  </BottomNavigationItem>
  <BottomNavigationItem asChild icon={<IconBook />}>
    <a href="/trilhas">Trilhas</a>
  </BottomNavigationItem>
  <BottomNavigationItem asChild icon={<IconWallet />}>
    <a href="/carteira">Carteira</a>
  </BottomNavigationItem>
</BottomNavigation>
```

## Anatomia

`BottomNavigation` (`nav`, `aria-label="Principal"`) > `BottomNavigationItem` (um [NavItem](./sidebar.md) `type="bottom"`: ícone + rótulo) e opcionalmente `BottomNavigationAction` (botão central).

## Props

Todas as partes aceitam `className` (o seu vence) e `ref`.

### BottomNavigation

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `variant` | `"bar" \| "minimal" \| "glass-bar" \| "floating" \| "icon-pill" \| "center-action"` | `"bar"` | Estilo do Figma |
| `showLight` | `boolean` | `false` | Spot Cyan suave sob o item ativo |
| `aria-label` | `string` | `"Principal"` | Nome do nav |

### BottomNavigationItem

Aceita as props do `NavItem` (`active`, `icon`, `badge`, `emphasis`, `asChild`). `type` é `"bottom"` por padrão; use `type="bottom-icon"` (só ícone, exige `aria-label`) no `icon-pill`.

### BottomNavigationAction

`<button>` circular de 56px (`action-accent-bg`), sobreposto à barra. Exige `aria-label`.

Também exportado: `bottomNavigationVariants`.

## Variantes

| Estilo | Quando usar |
|---|---|
| `bar` | Padrão, sólida (`surface-default` + `border-subtle`) |
| `minimal` | Sem cor nem brilho; ativo em `content-primary` |
| `glass-bar` | Barra de vidro sobre mídia |
| `floating` | Pílula de vidro flutuante (landing e experiências leves) |
| `icon-pill` | Só ícones em pílula (`type="bottom-icon"`) |
| `center-action` | Com `BottomNavigationAction` no centro |

## Exemplos

### Ação central

```tsx
<BottomNavigation variant="center-action">
  <BottomNavigationItem icon={<IconHome />} active>Início</BottomNavigationItem>
  <BottomNavigationAction aria-label="Nova nota"><IconPlus /></BottomNavigationAction>
  <BottomNavigationItem icon={<IconBook />}>Trilhas</BottomNavigationItem>
</BottomNavigation>
```

### Só ícones

```tsx
<BottomNavigation variant="icon-pill">
  <BottomNavigationItem type="bottom-icon" icon={<IconHome />} active aria-label="Início" />
  <BottomNavigationItem type="bottom-icon" icon={<IconBook />} aria-label="Trilhas" />
</BottomNavigation>
```

## Acessibilidade

- `<nav aria-label="Principal">`; item atual com `aria-current="page"`.
- Alvo de toque de 48px; respeite a safe area (a barra já usa `env(safe-area-inset-bottom)`).
- Rótulos sempre visíveis, exceto `icon-pill`.
- Troca de aba sem animação de página inteira.

## Não faça

- Passar de 5 destinos.
- Usar a ação central como destino de navegação.
- Vidro (`glass-bar`, `floating`, `icon-pill`) sobre fundo liso.
