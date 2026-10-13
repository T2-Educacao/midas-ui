---
title: "Calendar"
description: "Calendário de escolha de data (react-day-picker, em português): single, multiple ou range, vários meses, dropdown de mês/ano. Células de 40px (md) ou 44px (lg, toque), tone brand|neutral e appearance plain|solid|glass. Estados do Calendar Day: hover, hoje (contorno), selecionado, faixa início/meio/fim, desabilitado (riscado) e fora do mês. Para agenda de eventos use EventCalendar."
---

```tsx
import { Calendar } from "@t2-educacao/midas";
```

## Quando usar

Escolher uma data ou período. Base do [DatePicker](./date-picker.md) e do [DateSheet](./date-sheet.md). Para provas, aulas e entregas: [EventCalendar](./event-calendar.md).

## Props

Aceita todas as props do [DayPicker](https://daypicker.dev/api) mais:

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `mode` | `"single" \| "multiple" \| "range"` | | Seleção |
| `selected` / `onSelect` | | | Valor (`Date`, `Date[]` ou `DateRange`) |
| `size` | `"md" \| "lg"` | `"md"` | Célula 40px ou 44px (mobile) |
| `tone` | `"brand" \| "neutral"` | `"brand"` | Seleção em cyan ou preto/branco |
| `appearance` | `"plain" \| "solid" \| "glass"` | `"plain"` | `plain` sem moldura (dentro de popover); `solid` com borda e sombra de overlay; `glass` sobre mídia |
| `numberOfMonths` | `number` | `1` | Meses lado a lado |
| `captionLayout` | `"label" \| "dropdown" \| ...` | `"label"` | Dropdown de mês/ano (exige `startMonth`/`endMonth`) |
| `disabled` | `Matcher` | | Dias riscados e desabilitados |
| `buttonVariant` | | | Obsoleta, ignorada |

`calendarVariants` e `CalendarDayButton` são exportados.

## Estados do dia

| Estado | Visual |
|---|---|
| Hover | fundo `overlay-hover` |
| Hoje | contorno (`selection-border`) e número em `selection-content` |
| Selecionado / início / fim | círculo `selection-fill` (Brand) ou `action-primary` (Neutral) |
| Meio da faixa | faixa suave `selection-bg` (Brand) ou `state-hover` (Neutral) |
| Desabilitado | riscado |
| Fora do mês | `content-secondary` |

## Exemplos

```tsx
const [data, setData] = useState<Date | undefined>(new Date());
<Calendar mode="single" selected={data} onSelect={setData} appearance="solid" />
```

```tsx
const [periodo, setPeriodo] = useState<DateRange | undefined>();
<Calendar mode="range" numberOfMonths={2} selected={periodo} onSelect={setPeriodo} />
```

```tsx
<Calendar mode="single" captionLayout="dropdown" startMonth={new Date(1940, 0)} endMonth={new Date()} />
<Calendar mode="single" size="lg" tone="neutral" disabled={{ before: new Date() }} />
```

## Acessibilidade

Setas navegam entre dias, `PageUp`/`PageDown` mudam o mês, `Home`/`End` a semana; `Enter` seleciona. Hoje é marcado por contorno (não só cor); indisponíveis são riscados. Nomes completos em português para leitores de tela. No mobile use `size="lg"` (alvo 44px).

## Não faça

- Usar para agenda de eventos (use EventCalendar).
- Deixar datas inválidas selecionáveis sem `disabled`.
