---
title: "Sidebar"
description: "Navegação lateral com cabeçalho, grupos rotulados, itens de navegação (NavItem) com ícone, badge e estado ativo, e modo recolhido que mostra só os ícones."
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
```

## Uso

```tsx
<Sidebar aria-label="Principal">
  <SidebarHeader>Midas</SidebarHeader>
  <SidebarContent aria-label="Navegação">
    <SidebarGroup>
      <SidebarGroupLabel>Geral</SidebarGroupLabel>
      <NavItem asChild active icon={<House />}>
        <a href="/">Início</a>
      </NavItem>
      <NavItem asChild icon={<BookOpen />} badge="3">
        <a href="/cursos">Cursos</a>
      </NavItem>
    </SidebarGroup>
  </SidebarContent>
  <SidebarFooter>Rafael</SidebarFooter>
</Sidebar>
```

## Props

### Sidebar

Renderiza um `<aside>`. A largura padrão é `w-64` (`w-16` recolhida); troque via `className`.

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `collapsed` | `boolean` | `false` | Recolhe a barra: esconde rótulos e badges e mostra só os ícones |

### SidebarHeader, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupLabel

Aceitam `className` e as props do elemento. `SidebarContent` é um `<nav>`: dê a ele um `aria-label`. `SidebarGroupLabel` fica visível só para leitores de tela quando a barra está recolhida.

### NavItem

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `asChild` | `boolean` | `false` | Usa o filho (`<a>`, `Link` do framework) como elemento do item |
| `icon` | `ReactNode` | | Ícone antes do rótulo |
| `active` | `boolean` | `false` | Marca a página atual: `aria-current="page"` e estilo ativo |
| `badge` | `ReactNode` | | Contador ou etiqueta no fim do item (some quando recolhida) |
| `children` | `ReactNode` | | Rótulo. Com `asChild`, é o elemento link com o rótulo dentro |

Sem `asChild`, o item é um `<button type="button">`.

## Variantes

| Estado | Quando usar |
|---|---|
| `active={false}` | Itens de navegação comuns |
| `active` | Item da página atual |
| `collapsed` (no `Sidebar`) | Telas estreitas ou quando o usuário prefere mais espaço de conteúdo |

## Exemplos

### Recolhível

```tsx
"use client";

import { useState } from "react";

export default function Menu() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Sidebar collapsed={collapsed} aria-label="Principal">
      <SidebarContent aria-label="Navegação">
        <NavItem icon={<List />} onClick={() => setCollapsed((v) => !v)}>
          Recolher
        </NavItem>
      </SidebarContent>
    </Sidebar>
  );
}
```

## Acessibilidade

- `Sidebar` é `<aside>` (landmark `complementary`) e `SidebarContent` é `<nav>`: nomeie ambos com `aria-label`.
- O item ativo recebe `aria-current="page"`.
- Recolhida, o rótulo continua no DOM (visível só para leitores de tela) e o item ganha `title` com o texto, então o nome acessível não se perde.
- Ícones decorativos devem ter `aria-hidden="true"`.
- O foco é visível em todos os itens.

## Não faça

- Usar `NavItem` sem `asChild` para navegar entre páginas: use `asChild` com um link, para manter semântica e abertura em nova aba.
- Marcar mais de um item como `active`.
- Recolher a barra e deixar itens sem ícone: o item fica sem nada visível.
- Colocar conteúdo longo no `badge`: use números curtos ou uma etiqueta.
