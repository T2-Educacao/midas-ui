---
title: "Carousel"
description: "Carrossel de Cards na horizontal (embla) com cabeçalho (eyebrow e título), setas, pontos e gesto de arraste. Tipos uniform (com peek do próximo) e spotlight (slide central maior); orientação horizontal ou vertical; plugins e API."
---

```tsx
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselControls,
  CarouselDots,
  CarouselEyebrow,
  CarouselHeader,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselTitle,
} from "@t2-educacao/midas";
```

## Quando usar

- Vitrines de conteúdo relacionado (trilhas, cursos, destaques). `uniform`: navegação e descoberta, todos os itens com o mesmo peso. `spotlight`: destaque editorial, onboarding, hero de página (3 a 7 itens, imagens fortes).
- Slides são normalmente [Cards](./card.md): mesmo layout e tamanho em todos os slides de um `uniform`.

## Não use

- Para conteúdo essencial que todos precisam ver (itens escondidos têm pouca visualização).
- Com mais de ~10 itens: prefira grade com "Ver tudo".
- Autoplay sem botão de pausa; dots como única forma de navegar; misturar Vertical e Horizontal no mesmo trilho.

## Uso

```tsx
<Carousel aria-label="Continue aprendendo" className="w-full">
  <CarouselHeader>
    <div>
      <CarouselEyebrow>EM ALTA</CarouselEyebrow>
      <CarouselTitle>Continue aprendendo</CarouselTitle>
    </div>
    <CarouselControls>
      <CarouselPrevious inline />
      <CarouselNext inline />
    </CarouselControls>
  </CarouselHeader>
  <CarouselContent>
    {cursos.map((curso) => (
      <CarouselItem key={curso.id} className="basis-4/5 md:basis-1/3">
        <Card size="s" hover="ring">...</Card>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselDots />
</Carousel>
```

Use `basis-4/5` (ou similar) para mostrar o "peek" do próximo slide. No mobile, troque as setas por um botão "Ver tudo" (`Button variant="ghost"`) e deixe os pontos como indicador.

## Anatomia

Header (`CarouselEyebrow` mono overline + `CarouselTitle` heading lg/md, e `CarouselControls`) · viewport (`CarouselContent`) · slides (`CarouselItem`) · pontos (`CarouselDots`: ativo pílula Cyan 20x6, inativo 6x6 `border-strong`).

## Componentes

| Componente | O que é |
|---|---|
| `Carousel` | Raiz (região). Props abaixo |
| `CarouselHeader` / `CarouselEyebrow` / `CarouselTitle` / `CarouselControls` | Cabeçalho e agrupador dos controles |
| `CarouselContent` | A trilha dos slides (gap de 24px) |
| `CarouselItem` | Um slide (`basis-full` por padrão), com `aria-label` "2 de 5" automático |
| `CarouselPrevious` / `CarouselNext` | Botões circulares `secondary` de 32px. Prop `inline` tira o posicionamento absoluto (para o cabeçalho). Desabilitam nas pontas |
| `CarouselDots` | Pontos de posição (decorativos, `aria-hidden`; não clicáveis) |
| `useCarousel()` | Hook para controles próprios: `api`, `selectedIndex`, `snapCount`, `scrollPrev`, `scrollNext`... |

## Props do Carousel

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `type` | `"uniform" \| "spotlight"` | `"uniform"` | Spotlight: o slide ativo cresce a escala 1 e os laterais ficam em 0,9 com opacidade 0,7 (300ms, `motion-reduce` desliga) |
| `orientation` | `"horizontal" \| "vertical"` | `"horizontal"` | Direção |
| `opts` | `CarouselOptions` | | Opções do [Embla](https://www.embla-carousel.com/api/options/) (`loop`, `align: "center"` para spotlight...) |
| `plugins` | `CarouselPlugin` | | Plugins do Embla (ex.: autoplay) |
| `setApi` | `(api: CarouselApi) => void` | | Recebe a API para controlar e ler o estado |

Para o spotlight use `opts={{ align: "center", loop: true }}` e slides `basis-3/5`.

## Exemplos

### Espaçamento

O gap padrão é 24px (Figma desktop). Para outro valor, ajuste o `-ms` do conteúdo e o `ps` dos itens juntos (12px no mobile):

```tsx
<CarouselContent className="-ms-3">
  <CarouselItem className="basis-1/3 ps-3">...</CarouselItem>
</CarouselContent>
```

### Setas laterais (sem cabeçalho)

```tsx
<Carousel aria-label="Exemplo" className="mx-12">
  <CarouselContent>...</CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
```

As setas ficam a 48px de cada lado: deixe margem lateral.

### Vertical

```tsx
<Carousel orientation="vertical" className="my-12 w-full max-w-xs">
  <CarouselContent className="h-48">
    <CarouselItem className="basis-1/2">...</CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
```

### API: "Slide 1 de 5"

```tsx
const [api, setApi] = useState<CarouselApi>();
const [atual, setAtual] = useState(0);

useEffect(() => {
  if (!api) return;
  setAtual(api.selectedScrollSnap() + 1);
  api.on("select", () => setAtual(api.selectedScrollSnap() + 1));
}, [api]);

<Carousel setApi={setApi}>...</Carousel>
<p className="text-body-sm text-content-secondary">Slide {atual}</p>
```

## Acessibilidade

- A raiz é `role="region"` com `aria-roledescription="carrossel"`: dê um `aria-label` (o título).
- Cada slide é `role="group"` com `aria-label` "N de M".
- Botões com nome acessível ("Slide anterior", "Próximo slide"); o anterior fica desabilitado no primeiro slide.
- Teclado: setas navegam quando o foco está no carrossel (invertem em RTL). Mobile: arraste com snap, sem bloquear a rolagem vertical.
- Sem autoplay por padrão; se usar, pause no hover/foco e ofereça botão de pausa visível.
- `prefers-reduced-motion`: sem transição de escala.

## Limitações

O Figma troca as setas por "Ver tudo" no mobile e usa fade em vez de escala com movimento reduzido: ambos ficam a cargo do app. Slides fora da área não ficam `inert` automaticamente.

## Não faça

- Esconder conteúdo crítico em slides.
- Autoplay rápido ou sem pausa.
- Cores soltas e `dark:`.
