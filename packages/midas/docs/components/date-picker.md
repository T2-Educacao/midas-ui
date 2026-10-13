---
title: "DatePicker"
description: "Campo de data (Date Field) que abre um calendário em popover (Date Picker). Data única, período ou presets, com appearance outline|filled|glass, tone brand|neutral, shape rounded|pill, rodapé Cancelar/Aplicar opcional, formatação pt-BR, dropdown de mês/ano e input hidden ISO. No mobile use DateSheet."
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
| `size` / `appearance` / `tone` / `shape` | `sm|md|lg` / `outline|filled|glass` / `brand|neutral` / `rounded|pill` | `md` / `outline` / `brand` / `rounded` | Mesmos eixos do [Input](./input.md) (Date Field do Figma) |
| `calendarSize` | `"md" | "lg"` | `"md"` | Célula do calendário |
| `presets` | `{ label, description?, value: Date | DateRange }[]` | | Atalhos à esquerda (Hoje, Últimos 7 dias...) |
| `confirm` | `boolean` | `false` | Mostra rodapé com resumo, Cancelar e Aplicar; a seleção só vale ao aplicar |
| `cancelLabel` / `applyLabel` | `string` | Cancelar / Aplicar | Textos do rodapé |
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

### Presets com confirmação

```tsx
const hoje = new Date();
<DatePicker
  mode="range"
  confirm
  presets={[
    { label: "Hoje", value: { from: hoje, to: hoje } },
    { label: "Últimos 7 dias", value: { from: new Date(Date.now() - 6 * 864e5), to: hoje } },
  ]}
/>
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


## Acessibilidade e mobile

- Setas navegam entre dias, Enter seleciona, Esc fecha. Hoje com contorno; indisponíveis riscados.
- O popover tem nome "Calendário". Permita também digitar a data quando o fluxo exigir (veja Linguagem natural).
- No mobile use [DateSheet](./date-sheet.md) (bottom sheet com calendário de 44px ou roleta).

## Não faça

- Não use para datas muito distantes (nascimento): ative os dropdowns de mês e ano em vez de navegar mês a mês.
- Não aceite datas sem validar `min`/`max` no seu formulário: o componente limita a escolha, não valida o texto digitado.
- Não use `Input type="date"` e `DatePicker` no mesmo fluxo: escolha um padrão por tela.
