---
title: "List Card"
description: "Card de lista para pendências e ofertas: ícone da origem e tag de prioridade, título, descrição, blocos de informação em mono e ações (Detalhes, Concluir). Solid ou glass, tom brand/neutral, hover com borda."
---

```tsx
import {
  ListCard,
  ListCardActions,
  ListCardDescription,
  ListCardHeader,
  ListCardInfo,
  ListCardTitle,
} from "@t2-educacao/midas";
```

## Quando usar

- Listas de tarefas, pendências e ofertas com contexto (origem, prioridade, prazo) e ação direta.
- Enfileirados em `ListItemGroup variant="cards"` ou numa grade.

## Não use

- Para itens simples de uma linha (use [ListItem](./list-item.md)).
- Para conteúdo editorial com imagem (use Card).
- Card dentro de card.

## Uso

```tsx
<ListCard>
  <ListCardHeader>
    <IconClipboardCheck />
    <span className="text-label-md">Simulado</span>
    <Badge variant="warning" className="ms-auto">Alta</Badge>
  </ListCardHeader>
  <ListCardTitle>Simulado de renda fixa</ListCardTitle>
  <ListCardDescription>Faltam 12 questões para concluir. Revise renda fixa antes de enviar.</ListCardDescription>
  <div className="grid grid-cols-2 gap-4">
    <ListCardInfo label="Prazo">Sexta</ListCardInfo>
    <ListCardInfo label="Questões">12</ListCardInfo>
  </div>
  <ListCardActions>
    <Button variant="outline" size="sm">Detalhes</Button>
    <Button size="sm">Concluir</Button>
  </ListCardActions>
</ListCard>
```

## Anatomia

Container (`surface-default`, borda `border-subtle`, `rounded-container`, `elevation-card`) > `ListCardHeader` (ícone da origem, tag de prioridade) · `ListCardTitle` · `ListCardDescription` · blocos `ListCardInfo` (rótulo mono overline + valor) · `ListCardActions`.

## Props

Todas as partes aceitam `className` (o seu vence) e `ref`.

### ListCard

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `surface` | `"solid" \| "glass"` | `"solid"` | Glass só sobre imagem/aurora |
| `tone` | `"brand" \| "neutral"` | `"brand"` | Borda do hover: `selection-border` ou `border-strong` |
| `asChild` | `boolean` | `false` | Renderiza o filho (ex.: `<a>` quando o card inteiro é link) |

### ListCardInfo

| Prop | Tipo | Descrição |
|---|---|---|
| `label` | `ReactNode` | Rótulo em mono overline |
| `children` | `ReactNode` | Valor |

Também exportado: `listCardVariants`.

## Estados

Default; Hover: borda `selection-border` (brand) ou `border-strong` (neutral); Focus: `focus-ring` (quando `asChild` em link/botão).

## Acessibilidade

- Um único alvo principal por card; botões internos continuam focáveis, nunca aninhe `<a>` dentro de `<a>`.
- Prioridade nunca só por cor: use a tag com texto.
- Dê `role="group"` com `aria-label` ou use `<li>` em lista semântica.

## Não faça

- Mais de uma ação primária por card.
- Misturar Solid e Glass na mesma lista.
- Cores soltas e `dark:`.
