---
title: Tag
description: "Rótulo em pill para categorizar, filtrar e destacar (Tag) e rótulo com ícone, título mono e descrição (TagDetail). 8 tons (neutral, brand, success, danger, warning, info, inverse, media), 3 estilos (subtle, outline, glass), 4 tamanhos (sm a xl), leading de ícone, avatar, emoji ou ponto e opção removível."
---

```tsx
import { Tag, TagDetail } from "@t2-educacao/midas";
```

Tag rotula, categoriza e filtra. Para contar ou sinalizar (número ou ponto) use [Badge](./badge.md); para atalhos de teclado, [Kbd](./kbd.md); para escolher entre opções, os componentes de escolha (Choice Chip).

## Uso

```tsx
import { IconFlame } from "@t2-educacao/midas/icons";

<Tag>Renda fixa</Tag>
<Tag tone="success" icon={<IconFlame />}>Em alta</Tag>
<Tag tone="brand" size="md" onRemove={() => remover("cpa")}>CPA-20</Tag>
```

## Props (Tag)

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `tone` | `"neutral" \| "brand" \| "success" \| "danger" \| "warning" \| "info" \| "inverse" \| "media"` | `"neutral"` | Cor semântica |
| `variant` | `"subtle" \| "outline" \| "glass"` | `"subtle"` | Estilo (Style do Figma) |
| `size` | `"sm" \| "md" \| "lg" \| "xl"` | `"sm"` | 20, 24, 28 e 32px de altura |
| `icon` | `ReactNode` | | Ícone Tabler à esquerda (leading Icon) |
| `emoji` | `string` | | Emoji à esquerda (leading Emoji) |
| `avatar` | `ReactNode` | | Avatar/imagem à esquerda (leading Avatar) |
| `dot` | `boolean` | `false` | Ponto colorido à esquerda (leading Dot) |
| `onRemove` | `() => void` | | Mostra o botão de remover (Removable) |
| `removeLabel` | `string` | `"Remover"` | Prefixo do nome acessível do botão |
| `disabled` | `boolean` | `false` | Desabilita a remoção e reduz a opacidade |
| `asChild` | `boolean` | `false` | Renderiza o filho (ex.: link) com o visual de tag |
| `className` | `string` | | Mesclada com `cn` (a sua vence) |

## Props (TagDetail)

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `title` | `ReactNode` | | Título em JetBrains Mono caixa alta (ex.: `NOVIDADE`) |
| `description` | `ReactNode` | | Texto principal |
| `icon` | `ReactNode` | | Ícone Tabler |
| `tone` / `variant` | igual a Tag (sem `size` xl) | `"neutral"` / `"subtle"` | Cor e estilo |
| `size` | `"md" \| "lg"` | `"md"` | Tamanho |
| `shape` | `"rounded" \| "pill"` | `"rounded"` | `rounded`: ícone em caixinha; `pill`: bem arredondada, ícone solto |

## Variantes: quando usar

| Estilo | Quando usar |
|---|---|
| `subtle` | Padrão: fundo suave na cor do tom, para listas e cards |
| `outline` | Superfície com borda clara e sombra de controle; o tom só colore o ícone/ponto. Use sobre fundos coloridos |
| `glass` | Sobre imagens e headers (vidro com blur). Só sobre mídia |

| Tom | Quando usar |
|---|---|
| `neutral` | Categorias e metadados sem significado de estado |
| `brand` | Destaque da marca (novo, recomendado) |
| `success` / `warning` / `danger` / `info` | Estado: concluído, atenção, erro, informação |
| `inverse` | Escuro, contrasta com página clara |
| `media` | Sobre foto/vídeo (fundo escuro translúcido com blur) |

## Exemplos

```tsx
<Tag variant="outline" tone="success" dot>Ativo</Tag>
<Tag emoji="🔥">7 dias seguidos</Tag>
<Tag asChild><a href="/cursos?categoria=cpa">CPA</a></Tag>

<TagDetail
  icon={<IconFlame />}
  title="NOVIDADE"
  description="Trilha de renda fixa atualizada"
/>
<TagDetail shape="pill" tone="brand" size="lg" icon={<IconFlame />} title="META" description="Reserva de emergência" />
```

## Acessibilidade

- O botão de remover tem nome acessível (`Remover <texto>`); mude `removeLabel` para outro idioma.
- Não dependa só da cor: o texto da tag diz o significado. Emoji e ícone são decorativos (`aria-hidden`).
- Tag clicável deve ser `asChild` num link ou botão real, não um `span` com `onClick`.

## Não faça

- Usar Tag como botão de ação: use [Button](./button.md).
- Usar Tag para contar notificações: use [Badge](./badge.md) `type="count"`.
- Usar `glass`/`media` sobre fundo liso.
- Misturar tamanhos diferentes na mesma lista de tags.
