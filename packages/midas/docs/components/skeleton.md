---
title: Skeleton
description: "Forma do conteúdo enquanto ele carrega: bloco Skeleton (line, circle, rect, pill; shimmer ou static) e padrões prontos SkeletonText, SkeletonListItem, SkeletonCard, SkeletonCourseCard, SkeletonNotification, SkeletonProfile, SkeletonTable e SkeletonHero."
---

```tsx
import { Skeleton, SkeletonCard } from "@t2-educacao/midas";
```

Mostra a forma do conteúdo para a página não "pular" quando os dados chegam.

## Uso

```tsx
<div aria-busy="true" aria-live="polite">
  <Skeleton />
  <Skeleton shape="circle" />
  <Skeleton shape="rect" className="h-40" />
</div>

<SkeletonCourseCard />
```

## Props

Skeleton (bloco):

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `shape` | `"line" \| "circle" \| "rect" \| "pill"` | `"line"` | Line 12px de altura, circle 40px, rect 120px, pill 24x80 |
| `animation` | `"shimmer" \| "static"` | `"shimmer"` | `static` sem movimento |
| `className` | `string` | | Dimensões e raio próprios (a sua vence) |

Padrões (`SkeletonText`, `SkeletonListItem`, `SkeletonCard`, `SkeletonCourseCard`, `SkeletonNotification`, `SkeletonProfile`, `SkeletonTable`, `SkeletonHero`): aceitam `animation` e `className`. Use o padrão que tem a mesma forma do conteúdo real.

## Regras

- O skeleton deve ter a mesma estrutura do conteúdo real (alturas e espaçamentos).
- `static` quando houver muitos blocos na tela ou com movimento reduzido.
- Se carregar em menos de 300 ms, não mostre skeleton.
- Não misture com [Spinner](./spinner.md) na mesma área.

## Limitação

O shimmer é implementado como pulso de opacidade (`animate-pulse`); a faixa de brilho do Figma exige um keyframe que ainda não existe em `theme.css`.

## Acessibilidade

- Os blocos são `aria-hidden`. Marque o container com `aria-busy="true"` e anuncie o fim do carregamento.
- `motion-reduce` desliga a animação.

## Não faça

- Usar skeleton para ações de botão (use o `loading` do Button).
- Deixar o skeleton com dimensões diferentes do conteúdo final.
