---
title: "Table"
description: "Tabela de dados semântica montada com Table Toolbar, cabeçalho mono (com ordenação), linhas (hover, selecionada, zebrada, agrupada) e Table Pagination. Superfícies solid, glass e plain; densidade default ou compact; tom brand/neutral. Números em mono, alinhados ao fim."
---

```tsx
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableGroupRow,
  TableHead,
  TableHeader,
  TablePagination,
  TableRow,
  TableToolbar,
} from "@t2-educacao/midas";
```

## Quando usar

- Dados tabulares comparáveis (alunos, extratos, ranking).
- Compact (linhas de 40px) para listas densas; striped para leitura horizontal longa; grouped agrupa por categoria.

## Não use

- Para layout de página ou listas simples de itens (use List/ListItem).
- Abaixo de 768px sem alternativa: vire lista (avatar e status na primeira linha, saldo na segunda) e use "Carregar mais".

## Uso

```tsx
<Table>
  <TableCaption>Alunos da turma</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead sortable sortDirection="asc" onSort={alternarOrdem}>Nome</TableHead>
      <TableHead align="end">Saldo</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Ana Souza</TableCell>
      <TableCell numeric>R$ 12.480,00</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

## Anatomia

Contêiner (rolagem horizontal e superfície) > `table` > `TableToolbar` (fora, acima, ver [Table Toolbar](./table-toolbar.md)) · `TableHeader` > `TableRow` > `TableHead` · `TableBody` > `TableRow` / `TableGroupRow` > `TableCell` · `TableFooter` · `TablePagination` (fora, abaixo, ver [Table Pagination](./table-pagination.md)). Para toolbar e paginação dentro do card, envolva tudo em um `div` com `rounded-container border` e use `surface="plain"` na tabela.

## Props

Todas as partes aceitam `className` (o seu vence), `ref` e repassam as demais props.

### Table

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `surface` | `"solid" \| "glass" \| "plain"` | `"solid"` | Solid: card com borda sutil e `elevation-card`. Glass: vidro, só sobre imagem/aurora. Plain: sem card, só divisores |
| `density` | `"default" \| "compact"` | `"default"` | Compact: linhas de 40px |
| `size` | `"default" \| "sm"` | `"default"` | Nome antigo de `density` (`sm` = `compact`); tem prioridade se informado |
| `tone` | `"brand" \| "neutral"` | `"brand"` | Linha selecionada em `selection-bg` (Cyan) ou `surface-muted` |
| `striped` | `boolean` | `false` | Linhas zebradas |
| `containerClassName` | `string` | | Classes do contêiner |

### TableHead

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `sortable` | `boolean` | `false` | Vira botão com ícone de ordenação e `aria-sort` |
| `sortDirection` | `"asc" \| "desc" \| false` | `false` | Direção atual |
| `onSort` | `() => void` | | Chamado ao clicar |
| `align` | `"start" \| "end"` | `"start"` | Use `end` em colunas numéricas |

### TableCell

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `numeric` | `boolean` | `false` | Mono, alinhado ao fim, números tabulares |

### TableGroupRow

`colSpan` (obrigatório) e `children`: cabeçalho de grupo em mono overline (`scope="colgroup"`).

Também exportados: `tableVariants`, `tableContainerVariants`.

## Estados da linha

Default; Hover (`state-hover`); Selected: `data-state="selected"` na `TableRow` (`selection-bg` no Brand, `surface-muted` no Neutral), com checkbox marcado. Divisor de 1px `border-subtle`, sem bordas verticais.

## Tipos de célula (Figma)

Text, Subtext, Number, Date: `TableCell` (+ `numeric` para mono). Avatar, Status, Progress, Trend, Actions, Checkbox e Expand são composições com os componentes do Midas dentro de `TableCell`: `Avatar`, `Badge` (tom suave com ponto, nunca só cor), `Progress`, texto com `text-status-success-content`/`text-status-danger-content` para variação, `DropdownMenu` + `Button variant="ghost" size="icon-sm"` para ações e `Checkbox` para seleção.

## Exemplos

### Compacta, zebrada e agrupada

```tsx
<Table density="compact" striped>
  <TableBody>
    <TableGroupRow colSpan={2}>Renda fixa</TableGroupRow>
    <TableRow><TableCell>CDB</TableCell><TableCell numeric>12,4%</TableCell></TableRow>
  </TableBody>
</Table>
```

### Com toolbar e paginação

```tsx
<div className="overflow-hidden rounded-container border border-border-subtle bg-surface-default shadow-elevation-card">
  <TableToolbar title="Alunos" count={128}><Button size="sm">Novo aluno</Button></TableToolbar>
  <Table surface="plain">...</Table>
  <TablePagination page={pagina} pageCount={13} onPageChange={setPagina} range="1–10 de 128" />
</div>
```

### Seleção em massa

Troque a `TableToolbar` por `<TableToolbar type="selection" selection="3 selecionados">` com as ações (ações destrutivas em texto `text-status-danger-content`, não em botão saturado).

## Acessibilidade

- Estrutura semântica (`table`, `thead`, `tbody`, `th`, `td`); `TableCaption` ou `aria-label` na tabela.
- `aria-sort` automático em colunas ordenáveis; o botão tem foco visível.
- Checkbox de seleção com `aria-label` por linha; anuncie a quantidade selecionada (a toolbar de seleção usa `aria-live="polite"`).
- Status nunca só por cor: use texto e ponto.
- Em telas estreitas o contêiner rola na horizontal.

## Limitações

As variantes Cards, Expandable e Mobile do Figma são composições (cards por linha, subtabela em `TableRow` extra) e não têm componente próprio.

## Não faça

- Bordas verticais ou strokes fortes entre células.
- `surface="glass"` sobre fundo liso.
- Cores soltas e `dark:`: o tema troca pelos tokens.
