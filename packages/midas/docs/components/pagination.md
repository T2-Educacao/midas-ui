---
title: "Pagination"
description: "Navegação entre páginas de listas, tabelas e carrosséis. Peças para os tipos do Figma: numbers, simple, compact, jumper, load more, dots e show more (com fog). Tamanhos md/sm, tom brand/neutral. Números em mono."
---

```tsx
import {
  getPageRange,
  Pagination,
  PaginationCompact,
  PaginationContent,
  PaginationDots,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationLoadMore,
  PaginationNext,
  PaginationPrevious,
  PaginationShowMore,
  PaginationSummary,
} from "@t2-educacao/midas";
```

## Quando usar

| Tipo do Figma | Quando usar | Como montar |
|---|---|---|
| Numbers | Padrão para tabelas e listas com total conhecido | `Pagination` + `getPageRange` |
| Jumper | Muitas páginas: intervalo e "ir para página" | `PaginationSummary` + Numbers + `Input` |
| Simple | Fluxos lineares ou total pouco importante | `PaginationPrevious` + `PaginationCompact`/texto + `PaginationNext` |
| Compact | Mobile e cards estreitos | `PaginationCompact` (`2 / 13`) com as setas |
| Load more | Feeds e listas mobile | `PaginationLoadMore` |
| Dots | Carrossel, onboarding e stories | `PaginationDots` |
| Show more | Lista cortada com fog; versão Glass sobre imagem | `PaginationShowMore` (`glass`) |

## Não use

- Dots para listas ou tabelas: só para carrossel/onboarding.
- Mais de 7 itens visíveis: primeira, atual ±1/±2, reticências e última.
- Esconder as setas na primeira/última página: use `aria-disabled`.

## Uso

```tsx
const [pagina, setPagina] = useState(2);
const total = 13;

<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious aria-disabled={pagina === 1} onClick={() => setPagina((p) => Math.max(1, p - 1))} />
    </PaginationItem>
    {getPageRange(pagina, total).map((item) =>
      typeof item === "string" ? (
        <PaginationItem key={item}><PaginationEllipsis /></PaginationItem>
      ) : (
        <PaginationItem key={item}>
          <PaginationLink isActive={item === pagina} onClick={() => setPagina(item)}>{item}</PaginationLink>
        </PaginationItem>
      ),
    )}
    <PaginationItem>
      <PaginationNext aria-disabled={pagina === total} onClick={() => setPagina((p) => Math.min(total, p + 1))} />
    </PaginationItem>
  </PaginationContent>
</Pagination>
```

## Anatomia

`Pagination` (nav) > `PaginationContent` (ul) > `PaginationItem` (li) > `PaginationLink` / `PaginationPrevious` / `PaginationNext` / `PaginationEllipsis`. Peças soltas: `PaginationSummary`, `PaginationCompact`, `PaginationDots`, `PaginationLoadMore`, `PaginationShowMore`. Os links são `<a>`: passe `href` (SSR e links reais) ou `onClick`.

## Props

Todas as partes aceitam `className` (o seu vence) e `ref` (exceto `PaginationEllipsis`).

### Pagination

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `size` | `"md" \| "sm"` | `"md"` | MD: 32px (`h-control-md`, `text-mono-md`). SM: 28px |
| `tone` | `"brand" \| "neutral"` | `"brand"` | Página atual em `selection-*` (Cyan) ou preto/branco |

### PaginationLink

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `isActive` | `boolean` | `false` | Página atual (`aria-current="page"`) |
| `size` | `ButtonProps["size"]` | `"icon"` | `icon*` = quadrado; outro valor = largo com padding |
| `rounded` | `boolean` | `false` | Pílula em vez de `rounded-control` |

`PaginationPrevious` e `PaginationNext` aceitam `label` (texto, oculto abaixo de `sm`).

### Peças

| Componente | Props |
|---|---|
| `PaginationSummary` | `children` (intervalo em mono, ex.: "11–20 de 128") |
| `PaginationCompact` | `page`, `total` |
| `PaginationDots` | `count`, `current` (índice base 0) |
| `PaginationLoadMore` | `shown`, `total`, `label`, `onLoadMore`, `loading` |
| `PaginationShowMore` | `glass`, `onShowMore`, `children`. Posiciona-se `absolute` na base: o pai precisa ser `relative` |

Também exportados: `getPageRange(atual, total, siblings)`, `paginationVariants`, `paginationLinkVariants`.

## Estados do item

Default (`content-secondary`), Hover (`state-hover`), Active (`selection-bg` + borda 1px `selection-border` no Brand; `action-primary-bg` no Neutral), Focus (borda 1px + halo 4px do `focus-ring`), Disabled (`aria-disabled`, `content-disabled`).

## Exemplos

### Tabela: intervalo mono à esquerda e simples à direita

```tsx
<div className="flex items-center justify-between">
  <PaginationSummary>1–10 de 128</PaginationSummary>
  <Pagination className="mx-0 w-auto">
    <PaginationContent>
      <PaginationItem><PaginationPrevious href="#" aria-disabled /></PaginationItem>
      <PaginationItem><PaginationNext href="#" /></PaginationItem>
    </PaginationContent>
  </Pagination>
</div>
```

### Compacto no mobile

```tsx
<Pagination size="sm">
  <PaginationContent>
    <PaginationItem><PaginationPrevious href="#" label="" /></PaginationItem>
    <PaginationItem><PaginationCompact page={2} total={13} /></PaginationItem>
    <PaginationItem><PaginationNext href="#" label="" /></PaginationItem>
  </PaginationContent>
</Pagination>
```

### Carregar mais e ver mais com fog

```tsx
<PaginationLoadMore shown={32} total={128} onLoadMore={carregar} />

<div className="relative max-h-96 overflow-hidden">
  {cursos}
  <PaginationShowMore onShowMore={abrir}>Ver mais 8 cursos</PaginationShowMore>
</div>
```

### Pontos de carrossel

```tsx
<PaginationDots count={5} current={1} />
```

## Acessibilidade

- `<nav aria-label="Paginação">`; a página atual leva `aria-current="page"`.
- Anterior e Próxima têm `aria-label` próprio ("Ir para a página anterior"/"Ir para a próxima página"), mesmo sem texto visível.
- Desabilitado com `aria-disabled` (não use `disabled` em `<a>`); a seta continua visível, nunca escondida.
- `PaginationDots` tem `role="img"` com "Página X de Y"; `PaginationLoadMore` expõe um `progressbar`.
- Ícones de seta invertem em RTL.

## Não faça

- Mostrar todas as páginas quando o total é grande: use `getPageRange`.
- Usar Dots fora de carrossel/onboarding.
- Cores soltas, `dark:` ou sombras avulsas: tudo vem de tokens.
