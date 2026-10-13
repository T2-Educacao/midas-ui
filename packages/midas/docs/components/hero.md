---
title: "Hero"
description: "Destaques imersivos e acionáveis para o topo das páginas, montados por composição: Hero, HeroContent, HeroEyebrow, HeroTitle, HeroChips, HeroProgress, HeroStats, HeroCountdown, HeroPanels/HeroPanel (faixas expansíveis), HeroLesson, HeroHotspot, HeroTrailer e WalletCard."
---

```tsx
import {
  Hero,
  HeroContent,
  HeroEyebrow,
  HeroTitle,
  HeroDescription,
  HeroActions,
} from "@t2-educacao/midas";
```

O arquivo é `"use client"` (contexto, estado de painéis e trailer).

## Princípios (Figma)

1. **Ação antes de anúncio**: uma ação principal clara (Continuar, Assistir, Começar). Sem slogans, preços ou selos promocionais.
2. **Imersão com legibilidade**: mídia em tela cheia com scrim do lado do texto. Conteúdo sobre mídia usa tokens `material-on-media-*` (sempre claro).
3. **Interação na imagem**: painéis que expandem, hotspots, capítulos e mini player.
4. **Respeita o tempo**: mostra o que falta (aulas, minutos, dias até a prova).

## Quando usar

- Topo de home, curso, trilha, evento e biblioteca.
- Tipos do Figma e a composição correspondente:

| Type (Figma) | Como montar |
|---|---|
| Continue | `Hero` + `HeroChips` + `HeroEyebrow` + `HeroTitle` + `HeroProgress` + `HeroActions` + lista de `HeroLesson` |
| Video | `HeroTrailer` (capa vira vídeo no mesmo lugar) |
| Strips | `HeroPanels` com `HeroPanel` |
| Immersive | `Hero` com `media` + `HeroHotspot` + `HeroStats` |
| Playlist | `HeroContent` + coluna com `HeroLesson` |
| Event | `HeroCountdown` + `HeroActions` |
| Focus, Split, Gallery, Dashboard, Community, Frosted, Journey, Horizon, Library | Composição livre com os mesmos blocos (`surface="glass"`, `HeroContent glass`, `WidgetStat`, `CourseCover`) |
| Wallet | `WalletStack` com `WalletCard` |

## Não usar

- Como banner publicitário.
- Texto longo: título curto e descrição de até 2 linhas.
- Sem scrim sobre imagem clara.

## Props

### Hero

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `surface` | `"solid" \| "glass"` | `"solid"` | Figma `Style`. Glass pede `media` |
| `tone` | `"brand" \| "neutral"` | `"brand"` | Brand colore o eyebrow |
| `ratio` | `"auto" \| "21:9" \| "16:9" \| "4:3" \| "1:1" \| "4:5" \| "3:4" \| "9:16"` | `"auto"` | Formato (Hero Formats). `auto` usa altura mínima |
| `media` | `ReactNode` | | Imagem ou vídeo de fundo (`img`/`video` ocupam tudo). Ativa o texto claro |
| `scrim` | `boolean` | `true` | Degradê escuro do lado do texto |

Renderiza `<section>` com `data-slot="hero"`. Exporta `heroVariants`.

### Blocos

| Componente | Props principais |
|---|---|
| `HeroContent` | `glass?` (painel de vidro) |
| `HeroEyebrow`, `HeroTitle` (`as: h1 \| h2 \| h3`), `HeroDescription`, `HeroActions` | |
| `HeroChips`/`HeroChip` | `icon?` |
| `HeroStats`/`HeroStat` | `value`, `label` (números em mono) |
| `HeroProgress` | `value`, `max?`, `label?`, `detail?`, `valueLabel?` |
| `HeroCountdown` | `days`, `hours`, `minutes`, `seconds` (`role="timer"`; o consumidor atualiza os valores) |
| `HeroPanels` | `value?`, `defaultValue?`, `onValueChange?` (um painel aberto por vez) |
| `HeroPanel` | `value`, `index?`, `title`, `image?`, `children` (conteúdo quando expandido). Recolhido: P&B, título vertical. Estados: Collapsed, Hover, Expanded |
| `HeroLesson` | `index?`, `title`, `meta?`, `state?: "default" \| "playing" \| "done"`, `asChild?` |
| `HeroHotspot` | `x`, `y` (percentuais), `label`, `detail?`, `expanded?`/`defaultExpanded?`/`onExpandedChange?` |
| `HeroTrailer` | props do `VideoPlayer` + `cover` (nó ou `(abrir) => nó`), `open?`/`defaultOpen?`/`onOpenChange?`, `endContent?`, `backLabel?` |
| `WalletCard` | `page`, `metric`, `label?`, `detail?`, `open?`, `actionLabel?`, `asChild?` |
| `WalletStack` | Coluna de cartões |

## Exemplos

```tsx
<Hero media={<img src="/capa.jpg" alt="" />} aria-label="Continuar estudando">
  <HeroContent>
    <HeroChips>
      <HeroChip>7 dias seguidos</HeroChip>
    </HeroChips>
    <HeroEyebrow>CONTINUE ESTUDANDO</HeroEyebrow>
    <HeroTitle>Preparatório CPA-20</HeroTitle>
    <HeroDescription>Revise fundos de investimento e conclua o módulo 3.</HeroDescription>
    <HeroProgress label="71 de 178 aulas concluídas" value={40} />
    <HeroActions>
      <Button>Continuar estudando</Button>
    </HeroActions>
  </HeroContent>
</Hero>
```

```tsx
<HeroPanels defaultValue="3" aria-label="Módulos">
  <HeroPanel value="2" index="02" title="Ética e regulação" />
  <HeroPanel value="3" index="03" title="Fundos de investimento">
    <HeroProgress label="8 de 12 aulas" value={66} />
  </HeroPanel>
</HeroPanels>
```

```tsx
<HeroTrailer
  title="Trailer CPA-20"
  src="/trailer.mp4"
  cover={(abrir) => (
    <Hero media={<img src="/capa.jpg" alt="" />}>
      <HeroContent>
        <HeroTitle>Preparatório CPA-20</HeroTitle>
        <HeroActions>
          <Button onClick={abrir}>Ver trailer</Button>
        </HeroActions>
      </HeroContent>
    </Hero>
  )}
/>
```

## Acessibilidade

- `HeroPanel` usa botão com `aria-expanded`; `HeroHotspot` também, com rótulo textual (`sr-only` quando recolhido).
- `HeroLesson` em reprodução leva `aria-current`.
- Mídia decorativa com `alt=""`; o texto vem do conteúdo. Sempre mantenha contraste do texto sobre o scrim.
- Animações respeitam `motion-reduce`.

## Não faça

- Não use mais de uma ação primária por Hero.
- Não coloque texto sobre mídia sem scrim.
- Não use cores fixas: o texto sobre mídia é `text-material-on-media-content`.

## Limitações

- Os 17 tipos do Figma são composições: apenas os blocos recorrentes viraram componentes. Layouts específicos (Focus com timer em anel, Journey com sparklines, Library) devem ser montados pelo consumidor.
- Hotspots são posicionados por percentual; não há arrastar/reordenar na carteira.
- `HeroTrailer` troca capa por vídeo e voltar; o auto-hide de controles é do `VideoPlayer`.
