---
title: "Card"
description: "Agrupa conteúdo e ações sobre um assunto (curso, trilha, artigo, produto). Layouts vertical, horizontal e overlay; tamanhos s/m/l (e sm/default para cards genéricos); superfícies solid e glass; hover ring, lift, tint e reveal. Partes: media, tag, eyebrow, título, descrição, meta, validade, ações e rodapé."
---

```tsx
import {
  Card,
  CardAction,
  CardBody,
  CardContent,
  CardDescription,
  CardExpiry,
  CardEyebrow,
  CardFooter,
  CardHeader,
  CardMedia,
  CardMeta,
  CardTag,
  CardTitle,
} from "@t2-educacao/midas";
```

## Quando usar

- Listas e grades de itens navegáveis (cursos, trilhas, artigos), vitrines e destaques editoriais (overlay, tamanho l), slides de Carousel, resumos com uma ação principal clara.

## Não use

- Para agrupar campos de formulário (use seções/containers).
- Para dados tabulares comparáveis (use Table).
- Card dentro de card; mais de uma ação primária por card; cor de marca como fundo do card.

## Uso

```tsx
<Card size="s" hover="ring">
  <CardMedia>
    <img src={capa} alt="Capa do curso Renda fixa do zero" />
    <CardTag>23 aulas</CardTag>
  </CardMedia>
  <CardBody>
    <CardEyebrow>Trilha · Investimentos</CardEyebrow>
    <CardTitle>Renda fixa do zero</CardTitle>
    <CardDescription>Entenda CDB, Tesouro e LCI com exemplos práticos e no seu ritmo.</CardDescription>
    <CardMeta>
      <span><IconClock /> 25 min</span>
      <span><IconStar /> 4,8</span>
    </CardMeta>
  </CardBody>
  <CardFooter>
    <Button rounded>Começar</Button>
  </CardFooter>
</Card>
```

Card genérico (compatível com o uso anterior): `CardHeader` + `CardTitle` + `CardDescription` + `CardAction`, `CardContent`, `CardFooter`.

## Anatomia

Container (`surface-default`, borda `border-subtle`, `elevation-card`) · `CardMedia` (imagem, raio interno de controle, 16:10 no vertical) · `CardTag` (pílula escura sobre a imagem) · `CardEyebrow` (mono overline) · `CardTitle` (heading sm/md/lg) · `CardDescription` · `CardMeta` (ícones Tabler + mono) · `CardExpiry` · `CardFooter`. Em horizontal e overlay, agrupe o texto em `CardBody`.

## Props

Todas as partes aceitam `className` (o seu vence) e `ref`.

### Card

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `size` | `"sm" \| "default" \| "s" \| "m" \| "l"` | `"default"` | `sm` e `default`: cards genéricos (padding 12/16px). `s`, `m`, `l` (Figma): padding 24/32/40px, raio `container`/`3xl`/`3xl`, título heading sm/md/lg |
| `layout` | `"vertical" \| "horizontal" \| "overlay"` | `"vertical"` | Vertical para grades; horizontal para listas e busca; overlay para destaque (texto sobre a imagem com scrim) |
| `surface` | `"solid" \| "glass"` | `"solid"` | Glass só sobre imagem, gradiente ou vídeo |
| `hover` | `"none" \| "ring" \| "lift" \| "tint" \| "reveal"` | `"none"` | Ring (recomendado): borda Cyan + zoom da imagem + `elevation-raised`. Lift: cresce 1.03 + `elevation-overlay`. Tint: fundo `selection-bg`. Reveal: a mídia fica translúcida (posicione um botão central) |

### Partes

| Componente | Observação |
|---|---|
| `CardMedia` | Aceita `<img>` filho; no overlay vira o fundo absoluto com scrim |
| `CardTag` | Posicionado `absolute` no canto superior da mídia |
| `CardBody` | Coluna de texto; obrigatório em `horizontal` e `overlay` |
| `CardMeta` | Itens em `<span>` com ícone e texto em mono |
| `CardExpiry` | `status`: `default`, `warning` (7 dias ou menos) ou `expired` ("Expirou em ..."); com ação "Renovar acesso" |

Também exportados: `cardVariants`, `cardExpiryVariants`.

## Estados

Default; Hover (um padrão por produto, veja `hover`); Focus: `focus-ring` quando um elemento interno recebe foco por teclado. Hover nunca é a única pista: o foco usa o mesmo realce.

## Exemplos

### Overlay sobre imagem

```tsx
<Card layout="overlay" size="m">
  <CardMedia><img src={foto} alt="" /></CardMedia>
  <CardBody>
    <CardEyebrow>Destaque</CardEyebrow>
    <CardTitle>Planejamento financeiro</CardTitle>
  </CardBody>
</Card>
```

Prefira imagens médias a escuras no overlay; para imagem clara, use `surface="glass"` ou o layout vertical.

### Progresso e validade

```tsx
<CardBody>
  <CardTitle>Investindo em ações</CardTitle>
  <Progress value={22} />
  <CardExpiry status="warning">Expira em 3 dias</CardExpiry>
</CardBody>
```

### Card inteiro como link

O título deve conter o `<a>` com área clicável estendida (`after:absolute after:inset-0`); botões internos continuam focáveis e não podem ser aninhados dentro de outro `<a>`.

## Acessibilidade

- Imagens com `alt` descritivo; decorativas com `alt=""`.
- Texto nunca direto na foto: overlay usa scrim; tags usam fundo escuro; contraste ≥ 4,5:1.
- `prefers-reduced-motion`: sem zoom nem translate (`motion-reduce`).
- Uma ação primária por card.

## Limitações

O token de raio 24px (`radius/4xl`) do Figma ainda não existe em `theme.css`: o tamanho `l` usa `rounded-3xl` (18px). As larguras fixas de 280/340/420 do Figma não são impostas: defina a largura no contêiner.

## Não faça

- Misturar Solid e Glass na mesma lista, ou layouts/tamanhos diferentes numa grade.
- Texto longo em overlay.
- Cores soltas, sombras avulsas ou `dark:`.
