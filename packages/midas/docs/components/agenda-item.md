---
title: "Agenda Item"
description: "Item de agenda com selo de data (mês em mono e dia) e título, em Card ou Row. Estado Today destaca o selo; tom brand ou neutral; asChild vira link."
---

```tsx
import { AgendaItem } from "@t2-educacao/midas";
```

## Quando usar

- Agenda de provas, aulas ao vivo e prazos, em lista (`type="row"`) ou como cards.
- Destacar o dia atual com `today`.

## Não use

- Para calendário completo (use Calendar/EventCalendar).
- Para itens sem data (use ListItem).

## Uso

```tsx
<AgendaItem month="AGO" day="11" description="Prova de certificação">
  C-Pro R
</AgendaItem>

<AgendaItem asChild type="row" month="AGO" day="14" today>
  <a href="/provas/c-pro-r">C-Pro R</a>
</AgendaItem>
```

## Anatomia

Selo da data (`size-control-xl`: mês em `mono/overline`, dia em `heading/sm`) + título (`label/md`) e descrição opcional (`body/sm`).

## Props

Aceita `className` (o seu vence), `ref` e as props de `div`.

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `month` | `ReactNode` | | Mês abreviado ("AGO"), em mono |
| `day` | `ReactNode` | | Dia |
| `children` | `ReactNode` | | Título (com `asChild`, o elemento filho) |
| `description` | `ReactNode` | | Texto de apoio (não usado com `asChild`) |
| `type` | `"card" \| "row"` | `"card"` | Card: com borda e `elevation-card`. Row: linha sem contêiner |
| `today` | `boolean` | `false` | Estado Today: selo em `action-accent-bg` (ou `action-primary-bg` no neutral), `aria-current="date"` |
| `tone` | `"brand" \| "neutral"` | `"brand"` | Cor do estado Today |
| `asChild` | `boolean` | `false` | Renderiza o filho (`<a>`, `<button>`); o selo vai para dentro dele |

Também exportado: `agendaItemVariants`.

## Estados

Default; Hover `state-hover`; Today (selo e fundo de destaque); Focus `focus-ring`.

## Acessibilidade

- O dia atual leva `aria-current="date"`.
- O selo traz só mês e dia: inclua a data completa no título ou no `description` quando o ano importar.
- Em lista semântica, use `<ul>`/`<li>` ao redor.

## Não faça

- Depender só da cor para marcar hoje: o selo muda de fundo e há `aria-current`.
- Cores soltas e `dark:`.
