---
title: "Carousel"
description: "Carrossel com arraste, setas e teclado (embla). Itens de qualquer tamanho (basis-*), espaçamento ajustável, orientação horizontal ou vertical, plugins e API para ler o slide atual."
---

```tsx
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@t2-educacao/midas";
```

## Uso

```tsx
<Carousel className="mx-12 max-w-xs">
  <CarouselContent>
    {[1, 2, 3, 4, 5].map((n) => (
      <CarouselItem key={n}>
        <Card>
          <CardContent className="flex aspect-square items-center justify-center">
            <span className="text-3xl font-semibold">{n}</span>
          </CardContent>
        </Card>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
```

As setas ficam fora do carrossel (48px para cada lado): deixe margem lateral (`mx-12`) ou reposicione com `className`.

## Componentes

| Componente | O que é |
|---|---|
| `Carousel` | Raiz. Props abaixo |
| `CarouselContent` | A trilha dos slides |
| `CarouselItem` | Um slide. Por padrão ocupa 100% (`basis-full`) |
| `CarouselPrevious` / `CarouselNext` | Setas redondas de 28px (`outline`). Desabilitam nas pontas |
| `useCarousel()` | Hook para criar controles próprios dentro do `Carousel` |

## Props do Carousel

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `orientation` | `"horizontal" \| "vertical"` | `"horizontal"` | Direção |
| `opts` | `CarouselOptions` | | Opções do [Embla](https://www.embla-carousel.com/api/options/) (`loop`, `align`...) |
| `plugins` | `CarouselPlugin` | | Plugins do Embla (ex.: autoplay) |
| `setApi` | `(api: CarouselApi) => void` | | Recebe a API para controlar e ler o estado |

## Exemplos

### Tamanho dos itens

```tsx
<CarouselItem className="basis-1/3">...</CarouselItem>
```

### Espaçamento

O espaço padrão é 16px. Para mudar, ajuste o `-ml` do conteúdo e o `pl` dos itens juntos:

```tsx
<CarouselContent className="-ms-2">
  <CarouselItem className="basis-1/3 ps-2">...</CarouselItem>
</CarouselContent>
```

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
const [total, setTotal] = useState(0);

useEffect(() => {
  if (!api) return;
  setTotal(api.scrollSnapList().length);
  setAtual(api.selectedScrollSnap() + 1);
  api.on("select", () => setAtual(api.selectedScrollSnap() + 1));
}, [api]);

<Carousel setApi={setApi}>...</Carousel>
<p className="text-sm text-muted-foreground">Slide {atual} de {total}</p>
```

## Acessibilidade

- A raiz é uma região (`role="region"`, "carrossel"): dê um `aria-label`.
- Setas do teclado navegam quando o foco está no carrossel.
- Evite autoplay; se usar, ofereça pausa.
