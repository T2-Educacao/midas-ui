---
title: "ListItem"
description: "Linha ou card de lista com conteúdo à esquerda (leading), à direita (trailing), título e descrição. Variante interactive para itens clicáveis e selected para o item ativo; asChild transforma em link ou botão."
---

```tsx
import {
  ListItem,
  ListItemContent,
  ListItemDescription,
  ListItemGroup,
  ListItemTitle,
} from "@t2-educacao/midas";
```

## Uso

```tsx
<ListItemGroup>
  <ListItem leading={<BookOpen />} trailing={<span>12 aulas</span>}>
    <ListItemContent>
      <ListItemTitle>Módulo 1</ListItemTitle>
      <ListItemDescription>Fundamentos de álgebra</ListItemDescription>
    </ListItemContent>
  </ListItem>
</ListItemGroup>
```

Sem `asChild`, `ListItem` renderiza um `<div>` e não é interativo. Para um item clicável, use `asChild` com `<button>` ou `<a>` e a variante `interactive`.

## Props

`ListItem`:

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `asChild` | `boolean` | `false` | Renderiza o filho (`<a>`, `<button>`, `<li>`) no lugar do `<div>` |
| `interactive` | `boolean` | `false` | Hover, `focus-visible` e cursor de clique |
| `selected` | `boolean` | `false` | Marca com `data-selected="true"` e destaca o item |
| `leading` | `ReactNode` | - | Conteúdo no início (ícone, avatar, número) |
| `trailing` | `ReactNode` | - | Conteúdo no fim (badge, ícone de seta, valor) |

`ListItemContent` agrupa título e descrição em coluna. `ListItemTitle` e `ListItemDescription` aceitam `className` e as props do `span`. `ListItemGroup` aceita `asChild` e as props do `div`; empilha os itens com espaçamento.

## Variantes

| Variante | Quando usar |
|---|---|
| padrão | Linha só de leitura |
| `interactive` | Item que navega ou executa ação (sempre com `asChild` em `<a>` ou `<button>`) |
| `selected` | Item atual em uma lista de seleção ou navegação |

## Exemplos

Como link:

```tsx
<ListItem asChild interactive trailing={<CaretRight className="rtl:rotate-180" />}>
  <a href="/cursos/algebra">
    <ListItemContent>
      <ListItemTitle>Álgebra</ListItemTitle>
      <ListItemDescription>Continue de onde parou</ListItemDescription>
    </ListItemContent>
  </a>
</ListItem>
```

Como botão selecionável:

```tsx
<ListItem asChild interactive selected={ativo === "a"}>
  <button type="button" aria-pressed={ativo === "a"} onClick={() => setAtivo("a")}>
    <ListItemTitle>Opção A</ListItemTitle>
  </button>
</ListItem>
```

Lista semântica:

```tsx
<ListItemGroup asChild>
  <ul>
    <ListItem asChild>
      <li>Primeiro</li>
    </ListItem>
    <ListItem asChild>
      <li>Segundo</li>
    </ListItem>
  </ul>
</ListItemGroup>
```

## Acessibilidade

- Item interativo precisa ser `<a>` ou `<button>` (via `asChild`): assim recebe foco e responde a Enter/Espaço. `interactive` em um `<div>` é só visual.
- `selected` é visual. Comunique o estado com `aria-pressed` (botão), `aria-current="page"` (link) ou `aria-selected` conforme o padrão usado.
- Para lista semântica use `ul`/`li` com `asChild`. Não coloque `role="list"` sem `role="listitem"` nos filhos.
- Ícones decorativos em `leading` e `trailing` levam `aria-hidden="true"`.

## Não faça

- Usar `interactive` em `<div>` com `onClick`: não é focável nem acessível por teclado.
- Aninhar botões ou links dentro de um `ListItem` que já é `<a>` ou `<button>`.
- Esquecer `rtl:rotate-180` em setas de direção no `trailing`.
- Colocar muito conteúdo no `trailing`. Para ações múltiplas, prefira um menu.
