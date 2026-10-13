---
title: "ListItem"
description: "Item de lista (List Item do Figma): leading, título, descrição, meta mono e ações; tamanhos sm/md/lg, orientação vertical, estados hover e selected (brand ou neutral), skeleton; ListItemGroup com variantes basic, bordered e cards. asChild transforma em link ou botão."
---

```tsx
import {
  ListItem,
  ListItemActions,
  ListItemContent,
  ListItemDescription,
  ListItemGroup,
  ListItemMeta,
  ListItemSkeleton,
  ListItemTitle,
} from "@t2-educacao/midas";
import { IconBook } from "@t2-educacao/midas/icons";
```

## Quando usar

- Listas de atividades, aulas, resultados e feeds: Simple (leading + título), Meta (avatar + título + descrição + tempo), Actions (Editar + mais), Vertical (artigo com imagem extra) e Skeleton.
- Ação principal no clique da linha; ações secundárias à direita.
- Até 7 itens visíveis: depois use `PaginationLoadMore`/`PaginationShowMore` ou Pagination.

## Não use

- Para dados tabulares comparáveis (use Table).
- Para cards de destaque com várias informações (use [List Card](./list-card.md) ou Card).

## Uso

```tsx
<ListItemGroup variant="bordered">
  <ListItem leading={<IconBook />} trailing={<ListItemMeta>12 aulas</ListItemMeta>}>
    <ListItemContent>
      <ListItemTitle>Renda fixa do zero</ListItemTitle>
      <ListItemDescription>Fundamentos de CDB e Tesouro</ListItemDescription>
    </ListItemContent>
  </ListItem>
</ListItemGroup>
```

Sem `asChild`, `ListItem` renderiza um `<div>` e não é interativo. Para item clicável use `asChild` com `<button>` ou `<a>` e `interactive`.

## Anatomia

`ListItemGroup` > `ListItem` (`leading` | `ListItemContent` (`ListItemTitle`, `ListItemDescription`) | `ListItemMeta` | `ListItemActions` | `trailing`). Divisores de 1px `border-subtle` entre itens no `bordered`.

## Props

Todas as partes aceitam `className` (o seu vence), `ref` e repassam as props.

### ListItem

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Espaçamento: 8/12/16px (small/default/large do Ant) |
| `orientation` | `"horizontal" \| "vertical"` | `"horizontal"` | Vertical: conteúdo empilhado (artigo com imagem) |
| `tone` | `"brand" \| "neutral"` | `"brand"` | Selecionado em `selection-bg` + borda (brand) ou `surface-muted` |
| `asChild` | `boolean` | `false` | Renderiza o filho (`<a>`, `<button>`, `<li>`) |
| `interactive` | `boolean` | `false` | Hover (`state-hover`), foco e cursor de clique |
| `selected` | `boolean` | `false` | `data-selected="true"` e destaque |
| `leading` / `trailing` | `ReactNode` | | Conteúdo no início/fim (ícone, avatar, valor) |

### Outras partes

| Componente | Descrição |
|---|---|
| `ListItemMeta` | Texto curto em mono (tempo, contagem) |
| `ListItemActions` | Grupo de botões à direita (`ms-auto`) |
| `ListItemSkeleton` | Placeholder de carregamento (`role="status"`) |

### ListItemGroup

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `variant` | `"basic" \| "bordered" \| "cards"` | `"basic"` | Basic: sem contêiner (listas dentro de páginas). Bordered: em card com divisores. Cards: itens espaçados |
| `asChild` | `boolean` | `false` | Renderiza o filho (ex.: `<ul>`) |

Também exportados: `listItemVariants`, `listItemGroupVariants`.

## Estados

Default; Hover `state-hover`; Selected (`selection-bg` + borda 1px no brand, `surface-muted` no neutral); Focus `focus-ring`; Disabled `content-disabled`.

## Exemplos

### Como link

```tsx
<ListItem asChild interactive trailing={<IconChevronRight className="rtl:rotate-180" />}>
  <a href="/cursos/algebra">
    <ListItemContent>
      <ListItemTitle>Álgebra</ListItemTitle>
    </ListItemContent>
  </a>
</ListItem>
```

### Meta e ações

```tsx
<ListItem leading={<Avatar size="sm"><AvatarFallback>AS</AvatarFallback></Avatar>}>
  <ListItemContent>
    <ListItemTitle>Ana Souza</ListItemTitle>
    <ListItemDescription>Concluiu o módulo Renda fixa do zero</ListItemDescription>
  </ListItemContent>
  <ListItemMeta>há 2h</ListItemMeta>
  <ListItemActions>
    <Button size="icon-sm" variant="ghost" aria-label="Mais ações"><IconDots /></Button>
  </ListItemActions>
</ListItem>
```

### Carregando

```tsx
<ListItemGroup variant="bordered">
  <ListItemSkeleton />
  <ListItemSkeleton />
</ListItemGroup>
```

## Acessibilidade

- Para listas semânticas use `ListItemGroup asChild` em `<ul>` e `ListItem asChild` em `<li>`.
- Item clicável: elemento nativo (`<a>`/`<button>`) com `asChild`; `selected` em navegação deve acompanhar `aria-current`.
- Botões só com ícone precisam de `aria-label`.
- Skeleton usa `role="status"` e `aria-busy`.

## Não faça

- `div` clicável sem papel: use `asChild`.
- Bordas fortes: divisores são 1px `border-subtle`.
- Cores soltas e `dark:`.
