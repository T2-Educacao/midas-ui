---
title: Separator
description: "Linha fina de 1px que separa grupos de conteúdo, horizontal ou vertical. Tipos line, dashed, label-center, label-left e icon; tons subtle (padrão), default e media (sobre imagem)."
---

```tsx
import { Separator } from "@t2-educacao/midas";
```

Use espaço antes de usar linha. Nunca use espessura maior que 1px.

## Uso

```tsx
<Separator />
<Separator type="dashed" />
<Separator type="label-center">ou continue com</Separator>
<Separator type="label-left">MÓDULO 3</Separator>
<Separator type="icon"><IconStar /></Separator>

<div className="flex h-5 items-center gap-4">
  <span>178 aulas</span>
  <Separator orientation="vertical" />
  <span>42h</span>
</div>
```

## Props

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `orientation` | `"horizontal" \| "vertical"` | `"horizontal"` | Direção |
| `type` | `"line" \| "dashed" \| "label-center" \| "label-left" \| "icon"` | `"line"` | Rótulos/ícone só na horizontal; o conteúdo vai em `children` |
| `tone` | `"subtle" \| "default" \| "media"` | `"subtle"` | Cor da linha |
| `decorative` | `boolean` | `true` | `true`: sem semântica; `false`: `role="separator"` |

## Variantes: quando usar

| Item | Quando usar |
|---|---|
| `tone="subtle"` | Padrão |
| `tone="default"` | Só quando a separação precisa ser mais clara (tabelas, listas densas) |
| `tone="media"` | Sobre imagem |
| `label-center` | Alternativas ("ou continue com") |
| `label-left` | Títulos de grupo em listas e menus |

## Acessibilidade

- Decorativo por padrão. Use `decorative={false}` apenas quando a divisão tem significado para leitores de tela.
- O rótulo é texto de interface comum; mantenha-o curto.

## Não faça

- Usar Separator para criar espaço: use margem/gap.
- Aplicar `type` de rótulo em orientação vertical (cai para linha simples).
