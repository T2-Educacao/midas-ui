---
"@t2-educacao/midas": minor
---

Ícones: o Midas passa a usar só o Tabler Icons, igual à página Icons do Figma. Quebra de API (0.x, por isso minor).

- `@t2-educacao/midas/icons` agora exporta os ícones do Tabler com os nomes originais (`IconArrowRight`, `IconSearch`...). Antes exportava o Phosphor (`ArrowRight`, `MagnifyingGlass`...): troque os nomes pelos equivalentes do Tabler (https://tabler.io/icons).
- `@t2-educacao/midas/icons/tabler` continua existindo como alias com o mesmo conteúdo.
- A dependência `@phosphor-icons/react` foi removida; os componentes internos usam o Tabler.
- Os tipos `IconWeight` e a prop `weight` deixam de existir: use `stroke` (traço) ou as variantes `Filled`.
