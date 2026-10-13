---
title: "WheelPicker"
description: "Roleta de colunas (dia, mês, ano ou qualquer lista) com faixa de seleção, rolagem com snap e teclado. Usada no DateSheet (type wheel). tone brand|neutral."
---

```tsx
import { WheelPicker } from "@t2-educacao/midas";
```

## Quando usar

Escolher valores em lista curta no mobile (data, hora) com o polegar. No desktop prefira [DatePicker](./date-picker.md).

## Props

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `columns` | `{ id, label, options: {value, label}[], className? }[]` | | Colunas; `label` nomeia o `listbox` |
| `value` / `defaultValue` | `Record<string, string>` | primeira opção | Valor por id de coluna |
| `onValueChange` | `(value) => void` | | Recebe o objeto completo |
| `tone` | `"brand" \| "neutral"` | `"brand"` | Faixa `selection-bg` ou `state-hover`; item ativo em `selection-content` ou `content-primary` |

## Exemplo

```tsx
const [valor, setValor] = useState({ mes: "9", ano: "2026" });

<WheelPicker
  value={valor}
  onValueChange={setValor}
  columns={[
    { id: "mes", label: "Mês", options: [{ value: "8", label: "Setembro" }, { value: "9", label: "Outubro" }] },
    { id: "ano", label: "Ano", options: [{ value: "2026", label: "2026" }, { value: "2027", label: "2027" }] },
  ]}
/>
```

## Acessibilidade

Cada coluna é um `listbox` focável com `option` e `aria-selected`; setas cima/baixo mudam a opção, clique seleciona. Itens vizinhos ficam esmaecidos só visualmente.

## Não faça

- Usar para listas longas (mais de ~60 itens) ou quando a pessoa precisa digitar.
- Esquecer o `label` das colunas.
