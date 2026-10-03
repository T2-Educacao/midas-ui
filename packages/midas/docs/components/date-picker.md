---
title: "DatePicker"
description: "Campo que abre um calendário em popover. Data única ou período (range), formatação em pt-BR, dropdown de mês e ano (data de nascimento), dias desabilitados, estado inválido e input hidden com data ISO para formulários."
---

```tsx
import { DatePicker, type DateRange } from "@t2-educacao/midas";
```

## Uso

```tsx
<Field>
  <FieldLabel htmlFor="data-prova">Data da prova</FieldLabel>
  <DatePicker id="data-prova" />
</Field>
```

Ao escolher um dia, o calendário fecha e o campo mostra a data formatada ("16 de jul. de 2026").

## Props

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `mode` | `"single" \| "range"` | `"single"` | Data única ou período |
| `value` / `defaultValue` | `Date \| null` ou `DateRange \| null` | | Valor controlado / inicial |
| `onValueChange` | `(value) => void` | | Recebe `Date \| undefined` ou `DateRange \| undefined` |
| `placeholder` | `string` | "Selecione uma data" | Texto quando vazio |
| `format` | `(date: Date) => string` | dd de mmm. de aaaa | Como mostrar a data |
| `captionLayout` | `"label" \| "dropdown" ...` | `"label"` | Dropdown de mês/ano |
| `startMonth` / `endMonth` | `Date` | | Limites da navegação |
| `disabledDays` | `Matcher \| Matcher[]` | | Dias que não podem ser escolhidos |
| `numberOfMonths` | `number` | 1 (single) / 2 (range) | Meses no calendário |
| `icon` | `ReactNode \| false` | ícone de calendário | Ícone do campo |
| `disabled` / `invalid` | `boolean` | | Estados |
| `id` / `name` | `string` | | Label e formulário (`name` gera `<input type="hidden">` com `2026-07-16` ou `2026-01-20/2026-02-09`) |

## Exemplos

### Período

```tsx
const [periodo, setPeriodo] = useState<DateRange | undefined>();

<DatePicker mode="range" value={periodo} onValueChange={setPeriodo} />
```

### Data de nascimento

```tsx
<DatePicker
  captionLayout="dropdown"
  startMonth={new Date(1940, 0)}
  endMonth={new Date()}
  disabledDays={{ after: new Date() }}
  placeholder="Data de nascimento"
/>
```

### Data e horário

```tsx
<div className="flex gap-4">
  <Field>
    <FieldLabel htmlFor="data">Data</FieldLabel>
    <DatePicker id="data" />
  </Field>
  <Field className="w-28">
    <FieldLabel htmlFor="hora">Horário</FieldLabel>
    <Input id="hora" type="time" step="60" defaultValue="10:30" />
  </Field>
</div>
```

### Linguagem natural

Campo de texto que entende "amanhã", "próxima sexta", "em 3 dias", "15/05" ou "20 de maio", com o calendário como apoio. É uma composição de `InputGroup`, `Popover` e `Calendar`: o exemplo completo, com o interpretador de datas em português, está no site de docs (DatePicker → Linguagem natural).

### Formato próprio

```tsx
<DatePicker format={(d) => d.toLocaleDateString("pt-BR")} />
```

## Acessibilidade

- O botão abre um diálogo "Calendário"; o foco vai para o dia selecionado (ou hoje).
- `Esc` fecha e devolve o foco ao campo.
