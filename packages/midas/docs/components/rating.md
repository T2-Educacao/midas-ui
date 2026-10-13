---
title: Rating
description: "Avaliação do Midas (Figma Rating): Rating de entrada com estrelas, moedas, cofrinho, humor (emoji), escala 1-5 e NPS 0-10; Plain ou Boxed; tamanhos SM 16, MD 24, LG 32. RatingSummary mostra nota e quantidade; RatingIcon é o ícone com estados vazio/meio/cheio."
---

```tsx
import { Rating, RatingIcon, RatingSummary } from "@t2-educacao/midas";
```

## Quando usar

| Tipo | Uso |
|---|---|
| `star` | Avaliar conteúdo, aulas, produtos |
| `coin` / `piggy` | Momentos de marca (valor, metas). Um tipo por produto, não misture |
| `emoji` | Pesquisa de sentimento rápida, sempre com rótulo do valor |
| `number` / `nps` | Pesquisas formais: escala 1-5 e NPS 0-10, com rótulos nas pontas |

`RatingSummary` mostra a avaliação de leitura (nota + quantidade) em cards e listas.

## Props

`Rating`:

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `type` | `"star" \| "coin" \| "piggy" \| "emoji" \| "number" \| "nps"` | `"star"` | Tipo |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | 16 / 24 / 32px (ícones) |
| `boxed` | `boolean` | `false` | Itens em caixas de 48/56px (alvo de toque no mobile) |
| `value` / `defaultValue` | `number` | `0` | Valor (1-5; 0-10 no NPS) |
| `onValueChange` | `(value: number) => void` | | |
| `readOnly` / `disabled` | `boolean` | | Leitura / desabilitado |
| `showValueLabel` | `boolean` | `true` | Rótulo do valor (Péssimo… Excelente) |
| `showScaleLabels` | `boolean` | `true` | Rótulos das pontas em number e NPS |
| `scaleLabels` | `[string, string]` | | Substitui "Nada satisfeito" / "Muito satisfeito" |
| `labels` | `readonly string[]` | `ratingLabels` | Rótulos 1 a 5 |
| `aria-label` | `string` | `"Avaliação"` | Nome do grupo |

`RatingSummary`: `score`, `count`, `type` (`star`/`coin`), `size` (`sm`/`md`), `max`.
`RatingIcon`: `type`, `state` (`empty`/`half`/`filled`), `size`. Meia estrela só em leitura.

Limitação: o Figma usa tokens `rating/fill|stroke|empty`, que ainda não existem no tema. Aproximação com tokens existentes: preenchido `status-warning-fill` + `status-warning-content`, vazio `border-default`, cofrinho em `selection-*` (ciano).

## Exemplos

```tsx
<Rating aria-label="Avalie a aula" onValueChange={enviar} />
<Rating type="coin" boxed size="lg" aria-label="Quanto valeu" />
<Rating type="emoji" size="lg" aria-label="Como foi a aula?" />
<Rating type="nps" aria-label="Recomendaria?" />
<RatingSummary score={4.8} count={1284} />
```

## Acessibilidade

Entrada = `radiogroup`, cada item com `aria-label` ("4 de 5 estrelas — Muito bom"); setas mudam o valor; `RatingSummary` tem `role="img"` com o texto ("Avaliação 4,8 de 5, 1.284 avaliações"). Emoji nunca sozinho: sempre com rótulo. No mobile, alvo ≥ 44px (Boxed ou LG).

## Não faça

- Não misture estrelas e moedas na mesma tela.
- Não use meia estrela em entrada.
- Não use emojis coloridos do sistema.
