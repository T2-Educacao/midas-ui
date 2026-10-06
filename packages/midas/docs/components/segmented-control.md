---
title: "SegmentedControl"
description: "Seletor de escolha única em botões agrupados que nunca fica sem valor (clicar no item ativo não desmarca). Tamanhos sm e default, horizontal ou vertical."
---

```tsx
import { SegmentedControl, SegmentedControlItem } from "@t2-educacao/midas";
```

## Uso

Use para alternar entre 2 a 5 visões ou modos mutuamente exclusivos, onde sempre existe uma opção ativa. Diferente do `ToggleGroup type="single"`, o item selecionado não pode ser desmarcado: por baixo é um `RadioGroup` do Radix.

```tsx
<SegmentedControl defaultValue="mes" aria-label="Período">
  <SegmentedControlItem value="dia">Dia</SegmentedControlItem>
  <SegmentedControlItem value="mes">Mês</SegmentedControlItem>
  <SegmentedControlItem value="ano">Ano</SegmentedControlItem>
</SegmentedControl>
```

## Props

### SegmentedControl

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `value` / `defaultValue` | `string` | | Valor controlado / inicial |
| `onValueChange` | `(value: string) => void` | | Chamado ao mudar de item (não é chamado ao clicar no item ativo) |
| `size` | `"sm" \| "default"` | `"default"` | Altura dos itens |
| `orientation` | `"horizontal" \| "vertical"` | `"horizontal"` | Layout e direção das setas |
| `disabled` | `boolean` | `false` | Desabilita o grupo todo |
| `aria-label` | `string` | | Nome do grupo (obrigatório se não houver `aria-labelledby`) |
| `className` | `string` | | Mesclado com `cn`; o seu vence |

### SegmentedControlItem

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `value` | `string` | | Valor da opção (obrigatório) |
| `disabled` | `boolean` | `false` | Desabilita só este item |
| `children` | `ReactNode` | | Texto e/ou ícone |

Também exporta `segmentedControlVariants` (cva, variante `size`).

## Variantes

| Variante | Quando usar |
|---|---|
| `size="default"` | Barras de ferramentas e filtros comuns |
| `size="sm"` | Áreas densas, cabeçalhos de tabela e cards |
| `orientation="vertical"` | Colunas estreitas e painéis laterais |

## Exemplos

```tsx
const [visao, setVisao] = useState("lista");

<SegmentedControl value={visao} onValueChange={setVisao} aria-label="Visualização">
  <SegmentedControlItem value="lista">Lista</SegmentedControlItem>
  <SegmentedControlItem value="grade">Grade</SegmentedControlItem>
</SegmentedControl>
```

```tsx
<SegmentedControl defaultValue="a" size="sm" aria-label="Modo">
  <SegmentedControlItem value="a" aria-label="Alinhar à esquerda">
    <TextAlignLeft />
  </SegmentedControlItem>
  <SegmentedControlItem value="b" aria-label="Centralizar">
    <TextAlignCenter />
  </SegmentedControlItem>
</SegmentedControl>
```

## Acessibilidade

- Papel `radiogroup` com itens `radio`: leitores de tela anunciam "1 de 3, marcado".
- Setas movem e selecionam; `Tab` entra e sai do grupo.
- Itens só com ícone precisam de `aria-label`.
- Sempre dê nome ao grupo com `aria-label` ou `aria-labelledby`.
- Em RTL as bordas e os cantos arredondados invertem sozinhos.

## Não faça

- Usar para escolha múltipla ou para permitir "nenhum": use [ToggleGroup](./toggle-group.md).
- Usar para navegar entre páginas ou painéis de conteúdo: use Tabs ou links.
- Mais de 5 opções ou rótulos longos: use [Select](./select.md) ou [RadioGroup](./radio-group.md).
- Deixar sem valor inicial e sem `aria-label`.
