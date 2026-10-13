---
title: "Sidebar"
description: "Navegação lateral do produto e o Nav Item (peça única de Sidebar, Header e Bottom Navigation). Tipos full, basic e minimal; expandida (256) ou recolhida (64, só ícones); superfícies solid, glass e inverse. NavItem com tipos sidebar, sub, rail, header, bottom e bottom-icon, badge e chevron."
---

```tsx
import {
  NavItem,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
} from "@t2-educacao/midas";
import { IconHome, IconBook } from "@t2-educacao/midas/icons";
```

## Quando usar

- Navegação lateral do produto (app, hub, plataforma do aluno), no máximo 2 níveis (item e subitem).
- `full`: busca, seções, submenu, badges, card Pro e perfil. `basic`: logo, itens e perfil. `minimal`: bem simples, sem cor.
- `collapsed`: só ícones (64px), com Tooltip/`title` com o nome.
- No mobile, a Sidebar vira drawer (use `Dialog`/`Drawer`) aberto pelo menu do Header.

## Não use

- Para mais de 2 níveis: leve para a página.
- `surface="glass"` sobre fundo liso.
- Para navegação de seções dentro de uma página: use Tabs.

## Uso

```tsx
<Sidebar aria-label="Barra lateral">
  <SidebarHeader>Midas</SidebarHeader>
  <SidebarContent aria-label="Principal">
    <SidebarGroup aria-label="Menu">
      <SidebarGroupLabel>Menu</SidebarGroupLabel>
      <NavItem asChild active icon={<IconHome />}>
        <a href="/">Início</a>
      </NavItem>
      <NavItem asChild icon={<IconBook />} badge="3">
        <a href="/trilhas">Trilhas</a>
      </NavItem>
    </SidebarGroup>
  </SidebarContent>
  <SidebarFooter>Laura Costa</SidebarFooter>
</Sidebar>
```

## Anatomia

`Sidebar` (`aside`) > `SidebarHeader` (logo), `SidebarContent` (`nav`, rolagem) > `SidebarGroup` + `SidebarGroupLabel` (mono overline) > `NavItem`; `SidebarFooter` (perfil, card Pro). Submenu: `NavItem` com `showChevron` + `Collapsible`, e subitens `NavItem type="sub"` (ponto Cyan indica o atual).

## Props

Todas as partes aceitam `className` (o seu vence), `ref` e repassam as demais props.

### Sidebar

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `collapsed` | `boolean` | `false` | Só ícones (`w-16`); rótulos viram `sr-only` e o NavItem usa `title` |
| `type` | `"full" \| "basic" \| "minimal"` | `"full"` | `minimal` deixa o item ativo neutro (sem Cyan) |
| `surface` | `"solid" \| "glass" \| "inverse"` | `"solid"` | Solid: `surface-default` + `border-subtle`. Glass: vidro denso sobre mídia. Inverse: força o tema Dark (`data-theme="dark"`) em app claro |

### NavItem

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `type` | `"sidebar" \| "sub" \| "rail" \| "header" \| "bottom" \| "bottom-icon"` | `"sidebar"` | Tipo do Figma. `rail` e `bottom-icon` mostram só o ícone |
| `active` | `boolean` | `false` | Item atual (`aria-current="page"`) |
| `emphasis` | `"selected" \| "neutral"` | `"selected"` | Selected: luz Cyan sutil (gradiente + traço). Neutral (Active do Figma): `state-pressed` |
| `icon` | `ReactNode` | | Ícone Tabler |
| `badge` | `ReactNode` | | Contador em mono, à direita (oculto quando recolhida) |
| `showChevron` | `boolean` | `false` | Chevron de dropdown; gira com `aria-expanded` |
| `expanded` | `boolean` | | Valor de `aria-expanded` (com `showChevron`) |
| `asChild` | `boolean` | `false` | Vira o filho (use com `<a>` ou `next/link`) |

Também exportado: `navItemVariants`.

## Estados do NavItem

Default `content-secondary`; Hover `state-hover` + borda sutil e texto `content-primary`; Selected gradiente Cyan (`selection-bg`) + borda `selection-border`; Active neutro `state-pressed`; Focus `focus-ring`; Disabled `content-disabled`. No tipo `header`, o item atual ganha um traço Cyan de 2px sob o texto.

## Exemplos

### Recolhida

```tsx
<Sidebar collapsed aria-label="Barra lateral">
  <SidebarContent aria-label="Principal">
    <NavItem asChild active icon={<IconHome />}><a href="/">Início</a></NavItem>
  </SidebarContent>
</Sidebar>
```

### Inverse e minimal

```tsx
<Sidebar type="minimal" surface="inverse" aria-label="Barra lateral">...</Sidebar>
```

### Submenu

```tsx
<Collapsible>
  <CollapsibleTrigger asChild>
    <NavItem icon={<IconBook />} showChevron>Trilhas</NavItem>
  </CollapsibleTrigger>
  <CollapsibleContent>
    <NavItem type="sub" asChild active><a href="/trilhas/renda-fixa">Renda fixa</a></NavItem>
    <NavItem type="sub" asChild><a href="/trilhas/acoes">Ações</a></NavItem>
  </CollapsibleContent>
</Collapsible>
```

## Acessibilidade

- `Sidebar` é `<aside>`; `SidebarContent` é `<nav>`: dê `aria-label` a ambos.
- Item atual com `aria-current="page"`; submenu em botão com `aria-expanded` (`showChevron` + `expanded`).
- Badge faz parte do nome acessível: escreva "Notificações, 3 novas" quando o número não bastar.
- Só ícone (recolhida, rail, bottom-icon): o rótulo fica em `sr-only` e em `title`; prefira também Tooltip.
- O ativo nunca é só cor: traço, fundo e peso.

## Não faça

- Cores soltas ou `dark:`: use `surface="inverse"` para a barra escura em app claro.
- Mais de 2 níveis de menu.
- Esconder o item atual ao recolher.
