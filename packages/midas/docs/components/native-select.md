---
title: "NativeSelect"
description: "O <select> nativo do navegador com o visual do Midas. Ideal para formulários simples e mobile (abre o seletor do sistema). Tamanhos default e sm."
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
