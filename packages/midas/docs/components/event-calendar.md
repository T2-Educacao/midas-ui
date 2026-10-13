---
title: "EventCalendar"
description: "Calendário de eventos (provas, aulas ao vivo, simulados, entregas, mentorias) com visão Mês e Agenda, filtros por categoria (toggle), botão Hoje e navegação. Até 2 eventos por dia e '+N mais'. CalendarEvent tem variantes soft, solid e block. Diferente do Calendar, que só escolhe datas."
---

```tsx
import { CalendarEvent, EventCalendar } from "@t2-educacao/midas";
```

## Quando usar

Mostrar agenda de eventos por categoria. Para escolher uma data use [Calendar](./calendar.md) ou [DatePicker](./date-picker.md).

## Props (`EventCalendar`)

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `events` | `{ id, title, date, category, time?, details? }[]` | | `category`: `prova`, `aula`, `simulado`, `entrega`, `mentoria` |
| `month` / `defaultMonth` / `onMonthChange` | `Date` | mês atual | Mês exibido |
| `view` | `"month" \| "agenda"` | `"month"` | Mês ou lista ordenada |
| `onEventSelect` | `(event) => void` | | Clique em evento |
| `maxEventsPerDay` | `number` | `2` | O restante vira "+N mais" |
| `todayLabel` | `string` | "Hoje" | Texto do botão |

### CalendarEvent

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `title` | `ReactNode` | | Texto |
| `category` | `EventCategory` | `"prova"` | Cor (`chart-1` a `chart-5`, ordem fixa) |
| `variant` | `"soft" \| "solid" \| "block"` | `"soft"` | Soft com ponto; Solid para destaque (ex.: prova); Block com barra lateral |

## Exemplo

```tsx
<EventCalendar
  defaultMonth={new Date(2027, 7, 1)}
  events={[
    { id: "1", title: "Simulado 03", date: new Date(2027, 7, 5), category: "simulado" },
    { id: "2", title: "C-Pro R", date: new Date(2027, 7, 11), category: "prova", time: "09:00 – 12:00" },
  ]}
  onEventSelect={(evento) => abrirDetalhes(evento.id)}
/>
```

## Acessibilidade

Categoria sempre com cor + nome (filtros com ponto e rótulo; desligado = tracejado e ponto cinza, `aria-pressed`). A grade usa `role="grid"`. Horários e datas em mono.

## Não faça

- Mais de 5 categorias.
- Mostrar categoria só por cor.

## Limitações

A visão Semana (blocos por horário) e o Agenda Item rico do Figma não foram implementados; use `view="agenda"` para lista. Navegação entre dias por setas dentro da grade não existe (os eventos são botões).
