---
title: "Table Toolbar"
description: "Barra superior de uma tabela: título com contador mono, ações (busca, filtros, exportar, ação primária) e tipo selection para ações em massa. Solid ou glass, tom brand/neutral."
---

```tsx
import { TableToolbar } from "@t2-educacao/midas";
```

## Quando usar

- Acima de uma [Table](./table.md): título, contador, busca, filtros e a ação primária.
- Tipo `selection`: no lugar da barra padrão quando há linhas selecionadas, com ações em massa.

## Não use

- Como cabeçalho de página (use Header ou título da página).
- Mais de uma ação primária na barra.

## Uso

```tsx
<TableToolbar title="Alunos" count={128}>
  <Input placeholder="Buscar" className="w-56" />
  <Button variant="outline" size="sm">Exportar</Button>
  <Button size="sm">Novo aluno</Button>
</TableToolbar>
```

## Anatomia

Título (`h3`, `heading/sm`) + contador (mono) à esquerda; ações (children) à direita. No tipo `selection`, o texto de seleção substitui título e contador.

## Props

Aceita `className` (o seu vence), `ref` e as props de `div`.

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `type` | `"default" \| "selection"` | `"default"` | Barra padrão ou de seleção em massa |
| `title` | `ReactNode` | | Título |
| `count` | `ReactNode` | | Contador em mono ao lado do título |
| `selection` | `ReactNode` | | Texto do tipo `selection` (ex.: "3 selecionados") |
| `surface` | `"solid" \| "glass"` | `"solid"` | Glass só sobre imagem/aurora |
| `tone` | `"brand" \| "neutral"` | `"brand"` | No `selection`: fundo `selection-bg` ou `surface-muted` |

Também exportado: `tableToolbarVariants`.

## Exemplos

### Seleção em massa

```tsx
<TableToolbar type="selection" selection="3 selecionados">
  <Button variant="ghost" size="sm">Exportar</Button>
  <Button variant="ghost" size="sm" className="text-status-danger-content">Excluir</Button>
</TableToolbar>
```

## Acessibilidade

- O texto de seleção é `aria-live="polite"`: leitores de tela anunciam a mudança.
- Campos de busca e botões só com ícone precisam de rótulo (`aria-label`).

## Não faça

- Botão destrutivo saturado na barra de seleção: use texto `text-status-danger-content`.
- Cores soltas e `dark:`.
