---
title: "DateSheet"
description: "Seleção de data no mobile em bottom sheet: calendário de 44px (type calendar) ou roleta dia/mês/ano (type wheel), com botão Confirmar em largura total. Versão mobile do DatePicker."
---

```tsx
import { DateSheet } from "@t2-educacao/midas";
```

## Quando usar

Escolher uma data em telas pequenas. No desktop use [DatePicker](./date-picker.md).

## Props

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `type` | `"calendar" \| "wheel"` | `"calendar"` | Calendário ou roleta |
| `trigger` | `ReactNode` | | Elemento que abre (vira `asChild`) |
| `value` / `defaultValue` / `onValueChange` | `Date` | | Valor; só é aplicado ao confirmar |
| `open` / `defaultOpen` / `onOpenChange` | | | Estado |
| `title` | `ReactNode` | "Selecione a data" | Título |
| `tone` | `"brand" \| "neutral"` | `"brand"` | Cor da seleção e do botão |
| `confirmLabel` | `string` | "Confirmar" | |
| `minYear` / `maxYear` | `number` | ±2 anos | Intervalo da roleta |
| `appearance`, `height` | | | Herdados do [BottomSheet](./bottom-sheet.md) |

## Exemplo

```tsx
const [data, setData] = useState<Date | undefined>();

<DateSheet
  type="wheel"
  value={data}
  onValueChange={setData}
  trigger={<Button variant="outline">{data ? data.toLocaleDateString("pt-BR") : "Escolher data"}</Button>}
/>
```

## Acessibilidade

Herda do BottomSheet (foco preso, Esc, título). O calendário usa células de 44px; a roleta tem `listbox` por coluna.

## Não faça

- Usar no desktop.
- Aplicar a data antes de Confirmar.
