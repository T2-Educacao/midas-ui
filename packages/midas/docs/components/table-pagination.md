---
title: "Table Pagination"
description: "Rodapé de paginação de tabelas: intervalo em mono à esquerda (1–10 de 128) e páginas numeradas ou Anterior/Próxima à direita. Usa o Pagination; tom brand/neutral."
---

```tsx
import { TablePagination } from "@t2-educacao/midas";
```

## Quando usar

- No rodapé de uma [Table](./table.md) com muitas linhas e total conhecido.
- `type="simple"` (Anterior, "2 / 13", Próxima) quando há pouco espaço ou o total importa menos.
- No mobile, prefira "Carregar mais" ([Pagination](./pagination.md) `PaginationLoadMore`).

## Não use

- Para listas infinitas ou feeds.
- Fora de tabelas: use o [Pagination](./pagination.md).

## Uso

```tsx
const [pagina, setPagina] = useState(1);

<TablePagination page={pagina} pageCount={13} onPageChange={setPagina} range="1–10 de 128" />
```

## Anatomia

Intervalo (`PaginationSummary`, mono) + `Pagination` tamanho `sm` com Anterior, números (via `getPageRange`, no máximo 7 itens) e Próxima.

## Props

Aceita `className` (o seu vence), `ref` e props de `div`.

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `page` | `number` | | Página atual (base 1) |
| `pageCount` | `number` | | Total de páginas |
| `onPageChange` | `(page: number) => void` | | Chamado ao escolher uma página |
| `range` | `ReactNode` | | Intervalo em mono, ex.: "11–20 de 128" |
| `type` | `"numbers" \| "simple"` | `"numbers"` | Números ou Anterior/Próxima |
| `tone` | `"brand" \| "neutral"` | `"brand"` | Página atual em Cyan ou preto/branco |
| `getHref` | `(page: number) => string` | | URLs reais (SSR/links); sem ele os links usam `#` e `onPageChange` |

## Acessibilidade

- `<nav aria-label="Paginação">`, página atual com `aria-current="page"`.
- Setas desabilitadas (`aria-disabled`) na primeira/última página, nunca escondidas.
- Use `getHref` quando a paginação mudar a URL.

## Não faça

- Mostrar todas as páginas quando são muitas.
- Cores soltas e `dark:`.
