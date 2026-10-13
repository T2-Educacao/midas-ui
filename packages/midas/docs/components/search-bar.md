---
title: SearchBar
description: "Barra de busca do Midas (Figma Search Bar). Campo role=search com ícone, limpar, atalho (⌘K), escopo e botão de filtros com contador. Tamanhos MD 48 e LG 56; estilos outline, filled e glass; tom brand/neutral; forma rounded/pill."
---

```tsx
import { SearchBar } from "@t2-educacao/midas";
```

## Quando usar

Busca principal de páginas e cabeçalhos (cursos, trilhas, aulas). Para um campo de filtro dentro de formulário use [Input](./input.md) ou [InputGroup](./input-group.md).

## Props

Aceita as props de `<input>` (menos `size`, `value`, `defaultValue`).

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `value` / `defaultValue` | `string` | | Valor controlado ou inicial |
| `onValueChange` | `(value: string) => void` | | Chamado ao digitar e ao limpar |
| `size` | `"md" \| "lg"` | `"md"` | 48 ou 56px |
| `appearance` | `"outline" \| "filled" \| "glass"` | `"outline"` | Estilo |
| `tone` | `"brand" \| "neutral"` | `"brand"` | Cor do foco |
| `shape` | `"rounded" \| "pill"` | `"rounded"` | Raio de controle ou cápsula |
| `shortcut` | `ReactNode` | | Dica de atalho (ex.: `⌘K`), some ao digitar. Só visual: implemente o atalho no app |
| `scope` | `ReactNode` | | Conteúdo à esquerda separado por divisor (ex.: um `NativeSelect` "Todos") |
| `onFilterClick` | `() => void` | | Mostra o botão de filtros ao lado |
| `filterCount` | `number` | | Contador no botão de filtros |
| `filterLabel` / `clearLabel` | `string` | `"Filtros"` / `"Limpar busca"` | Rótulos de acessibilidade |
| `wrapperClassName` | `string` | | Classes do container `role="search"` |

Variações do Figma sem componente próprio: Suggestions (abra um [Popover](./popover.md) ou [Combobox](./combobox.md) com Recentes/Em alta), Collapsed/Expanded (alterne a renderização) e Mobile (`SearchBar` largura total + `Button variant="ghost"` "Cancelar").

## Exemplos

```tsx
<SearchBar placeholder="Buscar cursos, trilhas e aulas" shortcut="⌘K" aria-label="Buscar" />

<SearchBar size="lg" shape="pill" aria-label="Buscar" onFilterClick={abrirFiltros} filterCount={2} />
```

## Acessibilidade

`role="search"` no container, `type="search"` no campo, botão de limpar com `aria-label`. Sempre dê `aria-label` ou um rótulo.

## Não faça

- Não use mais de uma SearchBar na mesma página.
- Não dependa do atalho exibido: ele é só uma dica visual.
