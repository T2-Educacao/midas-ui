---
title: "Video Player"
description: "Player de aulas sobre <video> nativo, sem bibliotecas: VideoPlayer com linha do tempo e capítulos, velocidade, legendas, tela cheia, atalhos e próxima aula em 5s; MiniPlayer controlado por props. Formatos de 21:9 a 9:16."
---

```tsx
import { VideoPlayer, MiniPlayer } from "@t2-educacao/midas";
```

## Quando usar

- Aulas e trailers. Conteúdo sobre o vídeo usa tokens `material-*` (sempre claro, igual nos temas).
- `MiniPlayer` para manter a aula tocando enquanto o usuário navega.

## Não usar

- Streaming adaptativo (HLS/DASH) ou DRM: passe a fonte já tratada pelo seu app; o componente só cuida da interface.
- Letterbox: escolha o `ratio` igual ao do vídeo.

## Props do VideoPlayer

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `title` | `string` | obrigatório | Nome da aula (também `aria-label` do grupo) |
| `eyebrow` | `string` | | Ex.: "MÓDULO 3 · AULA 05" |
| `src`, `poster` | `string` | | Fonte e capa |
| `ratio` | `"21:9" \| "16:9" \| "4:3" \| "1:1" \| "4:5" \| "3:4" \| "9:16"` | `"16:9"` | Horizontais usam barra de controles; 1:1, 4:5, 3:4 e 9:16 usam layout imersivo (barra reduzida e trilho de `actions` à direita) |
| `device` | `"desktop" \| "mobile"` | `"desktop"` | Mobile esconde voltar/avançar/volume e limita a largura |
| `tone` | `"brand" \| "neutral"` | `"brand"` | Cor da linha do tempo |
| `chapters` | `{ time, label }[]` | `[]` | Marcas na linha do tempo e capítulo atual |
| `captions` | `{ src, srcLang, label }` | | Trilha de legendas (VTT) |
| `speeds` | `number[]` | `[0.75, 1, 1.25, 1.5, 2]` | Velocidades no menu |
| `nextLesson` | `{ title, meta?, seconds? }` | | Ao terminar, contagem (5s) com Assistir agora e Cancelar |
| `actions` | `ReactNode` | | Trilho de ações (Salvar, Anotar...) nos formatos imersivos |
| `state` | `"playing" \| "paused" \| "controls-hidden" \| "buffering" \| "settings" \| "ended"` | | Força a aparência de um estado (docs e testes). Sem ele, o estado vem do vídeo |
| `hideDelay` | `number` | `3000` | ms sem interação para esconder os controles |
| `durationHint` | `number` | `0` | Duração (s) enquanto os metadados não carregam |
| `autoPlay` | `boolean` | `false` | |
| `onPlayingChange`, `onTimeChange`, `onEnded`, `onNext`, `onNextCancel` | callbacks | | |

Estados do Figma: Playing, Paused, Controls hidden, Buffering, Settings, Ended. Exporta `videoPlayerVariants`, `formatVideoTime`.

Atalhos (com o foco no player): espaço ou K (pausar), setas (10 s), M (mudo), F (tela cheia), C (legendas), Esc (fecha configurações).

## MiniPlayer (controlado)

| Prop | Tipo | Descrição |
|---|---|---|
| `title` | `string` | Nome da aula |
| `playing` | `boolean` | Estado Playing/Paused |
| `currentTime`, `duration` | `number` (s) | Progresso |
| `tone` | `"brand" \| "neutral"` | |
| `onTogglePlay`, `onClose`, `onExpand` | callbacks | Clique no título expande para o player |

## Exemplos

```tsx
<VideoPlayer
  title="Come-cotas na prática"
  eyebrow="MÓDULO 3 · AULA 05"
  src="/aulas/05.mp4"
  poster="/aulas/05.jpg"
  captions={{ src: "/aulas/05.pt.vtt", srcLang: "pt", label: "Português" }}
  chapters={[
    { time: 0, label: "Introdução" },
    { time: 408, label: "Tabela regressiva" },
  ]}
  nextLesson={{ title: "Tributação de fundos", meta: "Aula 06 · 18 min" }}
  onNext={() => router.push("/aulas/06")}
/>
```

```tsx
<VideoPlayer ratio="9:16" title="Come-cotas em 1 min" src="/cortes/1.mp4" actions={<Button size="icon-md" aria-label="Salvar"><IconBookmark /></Button>} />
```

## Produção de vídeo (Figma)

16:9 é o padrão das aulas; mantenha texto e rostos na área segura de 90%; em 9:16 deixe livres ~14% no topo e ~20% embaixo (controles).

## Acessibilidade

- O player é um grupo com nome e atalhos de teclado; todos os botões têm `aria-label`.
- A linha do tempo é um `input range` nativo com `aria-valuetext` ("04:12 de 12:40").
- Carregando usa `role="status"`; as configurações abrem como `dialog` e fecham com Esc.
- Ofereça legendas (`captions`) e transcrição quando possível.
- Rotação e deslocamentos respeitam `motion-reduce`.

## Não faça

- Não esconda os controles sem permitir trazê-los de volta (mouse, toque ou teclado já fazem).
- Não force `state` em produção: é só para documentação e testes.
- Não dê autoplay com som sem ação do usuário.

## Limitações

- A prévia do quadro ao passar o mouse na linha do tempo e o seletor de qualidade (Auto, 1080p) do Figma não estão implementados: dependem de fonte de vídeo adaptativa e de sprites de miniatura.
- O menu de configurações cobre velocidade e legendas.
