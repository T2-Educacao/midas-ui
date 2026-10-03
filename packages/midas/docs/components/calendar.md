---
title: "Calendar"
description: "Calendário em português (react-day-picker) com células de 28px. Seleção de um dia, vários ou intervalo; vários meses; dropdown de mês e ano; dias desabilitados. Base do DatePicker."
---

```tsx
import { Calendar } from "@t2-educacao/midas";
```

## Uso

```tsx
const [data, setData] = useState<Date | undefined>(new Date());

<Calendar mode="single" selected={data} onSelect={setData} className="rounded-lg border" />
```

Para um campo que abre o calendário, use o [DatePicker](./date-picker.md).

## Props principais

Aceita todas as props do [DayPicker](https://daypicker.dev/api) mais:

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `mode` | `"single" \| "multiple" \| "range"` | | Tipo de seleção |
| `selected` / `onSelect` | | | Valor e mudança (`Date`, `Date[]` ou `DateRange`) |
| `numberOfMonths` | `number` | `1` | Meses lado a lado |
| `captionLayout` | `"label" \| "dropdown" \| "dropdown-months" \| "dropdown-years"` | `"label"` | Cabeçalho com dropdown de mês/ano |
| `startMonth` / `endMonth` | `Date` | | Limites da navegação (necessários para o dropdown de ano) |
| `disabled` | `Matcher` | | Dias desabilitados (ex.: `{ before: new Date() }`) |
| `locale` | | `ptBR` | Idioma |
| `showOutsideDays` | `boolean` | `true` | Mostra dias de outros meses esmaecidos |

## Exemplos

### Intervalo em dois meses

```tsx
const [periodo, setPeriodo] = useState<DateRange | undefined>();

<Calendar mode="range" numberOfMonths={2} selected={periodo} onSelect={setPeriodo} />
```

### Data de nascimento (dropdown de mês e ano)

```tsx
<Calendar
  mode="single"
  captionLayout="dropdown"
  startMonth={new Date(1940, 0)}
  endMonth={new Date()}
/>
```

### Bloquear datas passadas

```tsx
<Calendar mode="single" disabled={{ before: new Date() }} />
```

## Acessibilidade

- Navegação completa por teclado: setas, `PageUp`/`PageDown` (mês), `Home`/`End`.
- Os dias têm nomes completos em português para leitores de tela.
