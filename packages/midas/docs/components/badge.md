---
title: Badge
description: "Badge: contador numérico (type=count, com 99+) ou ponto (type=dot) para sinalizar notificações em ícones e avatares, com tons brand, neutral, inverse, danger, success e warning e tamanhos sm, md e lg. Também mantém o rótulo em pill legado (type=label); para rótulos novos prefira Tag."
---

```tsx
import { Badge } from "@t2-educacao/midas";
```

No Figma, Badge conta ou sinaliza (número ou ponto). Rótulos e categorias agora são o componente [Tag](./tag.md). O uso antigo de `Badge` como rótulo (`variant`, `filled`, `icon`) continua funcionando.

## Uso

```tsx
<Badge type="count" count={3} />
<Badge type="count" count={120} tone="danger" />

<span className="relative inline-flex">
  <IconBell />
  <Badge type="dot" tone="danger" className="absolute -end-0.5 -top-0.5" aria-label="Há novidades" />
</span>

<Badge variant="success">Aprovado</Badge>
```

## Props

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `type` | `"label" \| "count" \| "dot"` | `"label"` | Rótulo (legado), contador ou ponto |
| `count` | `number` | | Número do contador (`type="count"`) |
| `max` | `number` | `99` | Acima disso mostra `99+` |
| `tone` | `"brand" \| "neutral" \| "inverse" \| "danger" \| "success" \| "warning"` | `"brand"` | Cor de `count` e `dot` |
| `size` | `"sm" \| "md" \| "lg"` (e `"default"` = md) | `"default"` | Count: 16, 20, 24px. Dot: 6, 8, 10px. Label: 18, 22, 26px |
| `variant` | `"secondary" \| "default" \| "outline" \| "destructive" \| "success" \| "warning" \| "info"` | `"secondary"` | Só `type="label"` (legado) |
| `filled` | `boolean` | `false` | Só `type="label"`: cor cheia nas variantes de estado |
| `icon` | `ReactNode` | | Só `type="label"`: ícone antes do texto |
| `asChild` | `boolean` | `false` | Renderiza o filho (ex.: link) com o visual de badge |

## Variantes: quando usar

| Tipo | Quando usar |
|---|---|
| `count` | Quantidade de itens novos (notificações, mensagens). Limite visual em `99+` |
| `dot` | Existe novidade mas a quantidade não importa; tem anel na cor do fundo para sobrepor ícone ou avatar |
| `label` | Legado. Prefira [Tag](./tag.md) |

## Acessibilidade

- O contador isolado não diz do que é: o elemento pai (botão do sino) deve ter o texto acessível (`Notificações, 3 não lidas`). Dentro de um botão, marque o badge com `aria-hidden`.
- `dot` não tem texto: dê `aria-label` ou descreva no pai.
- Não dependa só da cor para estados.

## Não faça

- Usar badge como botão. Para ações, use [Button](./button.md).
- Usar `count` para valores que não são "novos" (use texto ou [Tag](./tag.md)).
- Mostrar números acima de `99` sem `max`.
