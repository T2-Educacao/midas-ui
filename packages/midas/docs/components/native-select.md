---
title: "NativeSelect"
description: "Select nativo do navegador com o visual do Input: size sm/md/lg (40/48/56), appearance outline/filled/glass, tone, shape e success. Melhor opção no mobile."
---

```tsx
import { NativeSelect } from "@t2-educacao/midas";
```

## Uso

```tsx
<NativeSelect aria-label="Estado" defaultValue="sp">
  <option value="sp">São Paulo</option>
  <option value="rj">Rio de Janeiro</option>
  <option value="mg">Minas Gerais</option>
</NativeSelect>
```

## Props

Aceita todas as props de `<select>` mais:

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `size` | `"default" \| "sm"` | `"default"` | 32px ou 28px de altura |
| `fullWidth` | `boolean` | `false` | Ocupa a largura toda do container (por padrão o campo tem a largura do conteúdo) |
| `wrapperClassName` | `string` | | Classes do container que envolve o `select` (`className` vai no `select`) |

## Exemplos

### Com grupos

```tsx
<NativeSelect aria-label="Certificação">
  <optgroup label="Bancárias">
    <option value="cpa">CPA</option>
    <option value="cpro-r">CPRO-R</option>
  </optgroup>
</NativeSelect>
```

## Acessibilidade

- É o `<select>` do navegador: teclado e leitores de tela funcionam nativamente.

## Variantes do Figma

Aceita `size` (`"sm" | "md" | "lg"`; `"default"` = `md`), `appearance`, `tone`, `shape` e `success`, iguais às do [Input](./input.md).

```tsx
<NativeSelect aria-label="Estado" size="lg" shape="pill">
  <option value="sp">São Paulo</option>
</NativeSelect>
```
