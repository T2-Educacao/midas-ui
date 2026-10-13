---
title: "Combobox"
description: "Campo com busca e seleção (única ou múltipla): input ou botão como gatilho, grupos, descrição, ícones, limpar. Mesmas variantes do Input (size, appearance, tone, shape); menu em superfície overlay."
---

```tsx
import { Combobox, type ComboboxOption } from "@t2-educacao/midas";
```

## Uso

```tsx
const certificacoes: ComboboxOption[] = [
  { value: "cpa", label: "CPA" },
  { value: "cpro-r", label: "CPRO-R" },
  { value: "cpro-i", label: "CPRO-I" },
  { value: "cfp", label: "CFP®" },
];

<Combobox
  options={certificacoes}
  placeholder="Selecione a certificação"
  aria-label="Certificação"
/>
```

## Props

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `options` | `ComboboxOption[]` | obrigatório | Lista de opções |
| `multiple` | `boolean` | `false` | Permite escolher várias (mostra chips) |
| `value` / `defaultValue` | `string \| null` ou `string[]` (multiple) | | Valor controlado / inicial |
| `onValueChange` | `(value) => void` | | Recebe `string \| null`, ou `string[]` com `multiple` |
| `placeholder` | `string` | `"Selecione"` | Texto quando vazio |
| `emptyMessage` | `ReactNode` | `"Nenhum resultado encontrado."` | Mostrado quando a busca não encontra nada |
| `clearable` | `boolean` | `false` | Mostra o `x` para limpar quando há valor |
| `trigger` | `"input" \| "button"` | `"input"` | `input`: digita no próprio campo. `button`: abre um popup com busca |
| `searchPlaceholder` | `string` | `"Buscar"` | Placeholder da busca no modo `button` |
| `showSelectedDescription` | `boolean` | `false` | No modo `button`, mostra a `description` do item selecionado ao lado do nome |
| `startAddon` | `ReactNode` | | Ícone à esquerda do campo |
| `invalid` | `boolean` | `false` | Estado de erro |
| `disabled` | `boolean` | `false` | Desabilita |
| `open` / `onOpenChange` | | | Controle da lista aberta |
| `id` | `string` | | Para ligar com `FieldLabel htmlFor` |
| `name` | `string` | | Cria um `<input type="hidden">` para formulários (valores separados por vírgula) |
| `className` / `contentClassName` | `string` | | Classes do campo / da lista |

### ComboboxOption

| Campo | Tipo | Descrição |
|---|---|---|
| `value` | `string` | Identificador único |
| `label` | `string` | Texto exibido e usado na busca (a busca ignora acentos e maiúsculas: `sao` acha "São Paulo") |
| `description` | `string` | Segunda linha em cinza |
| `icon` | `ReactNode` | Ícone antes do texto |
| `group` | `string` | Nome do grupo (opções com o mesmo grupo ficam juntas, com título) |
| `keywords` | `string[]` | Termos extras para a busca |
| `disabled` | `boolean` | Opção não selecionável |

## Exemplos

### Destaque automático

O primeiro resultado da busca já vem destacado: digite parte do nome e aperte `Enter` para selecionar, sem usar as setas.

### Com Field

```tsx
<Field>
  <FieldLabel htmlFor="certificacao">Certificação</FieldLabel>
  <Combobox id="certificacao" options={certificacoes} placeholder="Selecione" />
</Field>
```

### Múltipla escolha

```tsx
<Combobox
  multiple
  options={certificacoes}
  defaultValue={["cpa"]}
  placeholder="Selecione as certificações"
  aria-label="Certificações"
/>
```

`Backspace` com a busca vazia remove o último chip.

### Com botão de limpar

```tsx
<Combobox clearable options={certificacoes} defaultValue="cpa" aria-label="Certificação" />
```

### Grupos

```tsx
const fusos: ComboboxOption[] = [
  { value: "sp", label: "(GMT-3) São Paulo", group: "Américas" },
  { value: "ny", label: "(GMT-5) Nova York", group: "Américas" },
  { value: "lisboa", label: "(GMT+0) Lisboa", group: "Europa" },
];

<Combobox options={fusos} placeholder="Selecione o fuso" aria-label="Fuso horário" />
```

### Itens com descrição

```tsx
const paises: ComboboxOption[] = [
  { value: "br", label: "Brasil", description: "América do Sul (br)" },
  { value: "pt", label: "Portugal", description: "Europa (pt)" },
];
```

### Popup com busca

```tsx
<Combobox trigger="button" options={paises} placeholder="Selecione o país" aria-label="País" />
```

### Com ícone

```tsx
<Combobox startAddon={<Globe />} options={fusos} placeholder="Selecione o fuso" aria-label="Fuso" />
```

### Controlado

```tsx
const [certificacao, setCertificacao] = useState<string | null>(null);

<Combobox options={certificacoes} value={certificacao} onValueChange={setCertificacao} aria-label="Certificação" />
```

### Inválido e desabilitado

```tsx
<Combobox invalid options={certificacoes} aria-label="Certificação" />
<Combobox disabled options={certificacoes} aria-label="Certificação" />
```

## Acessibilidade

- Segue o padrão ARIA de combobox: `role="combobox"`, `aria-expanded`, `aria-controls` e `aria-activedescendant`.
- Teclado: setas navegam, `Enter` seleciona, `Esc` fecha.
- Dê um nome ao campo (`FieldLabel htmlFor` + `id`, ou `aria-label`).

## Não faça

- Usar Combobox para menos de 5 opções fixas: um `ToggleGroup` ou radio é mais rápido.
- Usar Combobox para ações (ex.: "Editar", "Excluir"): use [DropdownMenu](./dropdown-menu.md).

## Lista (Figma Dropdown › Combobox)

A lista segue o mesmo visual do [DropdownMenu](./dropdown-menu.md): superfície `overlay-surface`, borda `border-subtle`, `elevation-overlay`, itens de 36px com hover `overlay-hover`, check à direita em `selection-content` e títulos de grupo em mono (`text-mono-overline`). Estado vazio: use `emptyMessage` (ex.: `Nenhum resultado para “cripto”`) e, para criar um item, mostre um botão dentro dele que adiciona a opção a `options`. O trecho digitado em destaque e o Style glass do Figma não são aplicados à lista.

## Variantes do Figma

`Combobox` aceita `size` (`"sm" | "md" | "lg"` = 40/48/56), `appearance`, `tone` e `shape` como o [Input](./input.md). O menu usa o recibo de overlay (`bg-overlay-surface`, `shadow-elevation-overlay`, `rounded-overlay`); opções marcadas usam `selection-bg` e os chips do modo múltiplo são pílulas `bg-surface-muted`. É o caminho para os menus Multiple e Searchable do Figma.
