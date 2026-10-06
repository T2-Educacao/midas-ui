---
title: "Table"
description: "Tabela de dados semântica com container de rolagem horizontal, linhas com hover e seleção, colunas ordenáveis (aria-sort) e densidade default ou sm."
---

```tsx
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@t2-educacao/midas";
```

## Uso

```tsx
<Table>
  <TableCaption>Alunos da turma</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead>Nome</TableHead>
      <TableHead>Nota</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Ana</TableCell>
      <TableCell>9,5</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

`Table` envolve o `<table>` em um container com `overflow-x-auto`: em telas estreitas a tabela rola na horizontal em vez de quebrar o layout.

## Props

`Table`:

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `size` | `"default" \| "sm"` | `"default"` | Densidade da tabela inteira |
| `containerClassName` | `string` | - | Classes do container de rolagem (o `className` vai no `<table>`) |

`TableHead`:

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `sortable` | `boolean` | `false` | Renderiza um `<button>` com ícone de ordenação dentro do `<th>` |
| `sortDirection` | `"asc" \| "desc" \| false` | `false` | Direção atual; define `aria-sort` no `<th>` |
| `onSort` | `() => void` | - | Chamado ao clicar no botão |

`TableHeader`, `TableBody`, `TableFooter`, `TableRow`, `TableCell` e `TableCaption` aceitam `className` e as props do elemento HTML correspondente. Em `TableRow`, `data-state="selected"` destaca a linha.

## Variantes

| Variante | Quando usar |
|---|---|
| `size="default"` | Tabelas principais, com bastante respiro |
| `size="sm"` | Tabelas densas, com muitas linhas ou dentro de painéis |

## Exemplos

Ordenável (o estado fica com você):

```tsx
"use client";

import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@t2-educacao/midas";

export function Alunos({ alunos }: { alunos: { nome: string; nota: number }[] }) {
  const [direcao, setDirecao] = useState<"asc" | "desc">("asc");
  const ordenados = [...alunos].sort((a, b) =>
    direcao === "asc" ? a.nota - b.nota : b.nota - a.nota,
  );

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Nome</TableHead>
          <TableHead
            sortable
            sortDirection={direcao}
            onSort={() => setDirecao(direcao === "asc" ? "desc" : "asc")}
          >
            Nota
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {ordenados.map((aluno) => (
          <TableRow key={aluno.nome}>
            <TableCell>{aluno.nome}</TableCell>
            <TableCell>{aluno.nota}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
```

Linha selecionada e rodapé:

```tsx
<TableRow data-state={selecionado ? "selected" : undefined}>...</TableRow>

<TableFooter>
  <TableRow>
    <TableCell>Total</TableCell>
    <TableCell>R$ 450,00</TableCell>
  </TableRow>
</TableFooter>
```

## Acessibilidade

- Usa os elementos nativos `table`, `thead`, `tbody`, `tfoot`, `th` e `td`, então leitores de tela navegam por células e cabeçalhos.
- Coluna ordenável tem `aria-sort` (`ascending`, `descending` ou `none`) e um `<button>` focável por teclado. O ícone é decorativo (`aria-hidden`).
- Use `TableCaption` (ou `aria-label` na tabela) para dar nome a ela.
- Ao selecionar linhas com checkbox, dê um `aria-label` a cada checkbox (ex.: "Selecionar Ana"). `data-state="selected"` é só visual.

## Não faça

- Usar `Table` para layout de página. É só para dados tabulares.
- Colocar `onClick` no `<th>`. Use `sortable` e `onSort`, que renderizam o botão.
- Marcar `sortable` sem tratar `onSort`: a coluna parece clicável e não faz nada.
- Esperar que a tabela ordene sozinha. Ela só exibe o estado; ordenar os dados é com você.
