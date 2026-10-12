---
title: "Toggle"
description: "Botão de dois estados (ligado/desligado), como negrito num editor ou favoritar. Variantes ghost e outline; tamanhos sm, default e lg."
---

```tsx
import { Toggle } from "@t2-educacao/midas";
```

## Uso

```tsx
import { IconBold } from "@t2-educacao/midas/icons";

<Toggle aria-label="Negrito">
  <IconBold />
</Toggle>
```

## Props

Aceita as props do [Toggle do Radix](https://www.radix-ui.com/primitives/docs/components/toggle) mais:

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `variant` | `"ghost" \| "outline"` | `"ghost"` | Estilo visual |
| `size` | `"sm" \| "default" \| "lg"` | `"default"` | 28, 32 ou 36px de altura |
| `pressed` | `boolean` | | Estado controlado |
| `defaultPressed` | `boolean` | `false` | Estado inicial (não controlado) |
| `onPressedChange` | `(pressed: boolean) => void` | | Chamado ao alternar |
| `disabled` | `boolean` | `false` | Desabilita |

## Variantes

| Variante | Quando usar |
|---|---|
| `ghost` | Barras de ferramentas, onde vários toggles ficam lado a lado |
| `outline` | Toggle isolado que precisa parecer clicável |

## Exemplos

### Com texto

```tsx
import { IconStar, IconStarFilled } from "@t2-educacao/midas/icons";

<Toggle variant="outline">
  <IconStar /> Favorito
</Toggle>
```

### Controlado

```tsx
const [favorito, setFavorito] = useState(false);

<Toggle pressed={favorito} onPressedChange={setFavorito} aria-label="Favoritar curso">
  {favorito ? <IconStarFilled /> : <IconStar />}
</Toggle>
```

Para vários toggles relacionados, use [ToggleGroup](./toggle-group.md).

## Acessibilidade

- Usa `aria-pressed` para anunciar o estado.
- Toggle só com ícone exige `aria-label`.
- O rótulo descreve a ação, não o estado ("Negrito", não "Negrito ativado").

## Não faça

- Usar `Toggle` para ações que não têm estado (ex.: "Enviar"): use [Button](./button.md).
- Usar `Toggle` em formulários de configuração: prefira `Switch` ou `Checkbox`.
