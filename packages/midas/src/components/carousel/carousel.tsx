"use client";

import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/ssr";
import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react";
import { Direction } from "radix-ui";
import * as React from "react";
import { cn } from "../../lib/cn";
import { Button, type ButtonProps } from "../button/button";

export type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
export type CarouselOptions = UseCarouselParameters[0];
export type CarouselPlugin = UseCarouselParameters[1];

export interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApi) => void;
}

interface CarouselContextValue {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: CarouselApi;
  orientation: "horizontal" | "vertical";
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
}

const CarouselContext = React.createContext<CarouselContextValue | null>(null);

export function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) throw new Error("useCarousel precisa estar dentro de <Carousel>.");
  return context;
}

export const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  (
    { orientation = "horizontal", opts, setApi, plugins, className, children, onKeyDown, ...props },
    ref,
  ) => {
    const direction = Direction.useDirection();
    const [carouselRef, api] = useEmblaCarousel(
      { direction, ...opts, axis: orientation === "horizontal" ? "x" : "y" },
      plugins,
    );
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);

    const onSelect = React.useCallback((current: CarouselApi) => {
      if (!current) return;
      setCanScrollPrev(current.canScrollPrev());
      setCanScrollNext(current.canScrollNext());
    }, []);

    const scrollPrev = React.useCallback(() => api?.scrollPrev(), [api]);
    const scrollNext = React.useCallback(() => api?.scrollNext(), [api]);

    React.useEffect(() => {
      if (api && setApi) setApi(api);
    }, [api, setApi]);

    React.useEffect(() => {
      if (!api) return;
      onSelect(api);
      api.on("reInit", onSelect);
      api.on("select", onSelect);
      return () => {
        api.off("reInit", onSelect);
        api.off("select", onSelect);
      };
    }, [api, onSelect]);

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api,
          orientation,
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
        }}
      >
        <div
          ref={ref}
          role="region"
          aria-roledescription="carrossel"
          data-slot="carousel"
          data-orientation={orientation}
          onKeyDownCapture={(event) => {
            onKeyDown?.(event);
            const rtl = direction === "rtl";
            const prevKey =
              orientation === "vertical" ? "ArrowUp" : rtl ? "ArrowRight" : "ArrowLeft";
            const nextKey =
              orientation === "vertical" ? "ArrowDown" : rtl ? "ArrowLeft" : "ArrowRight";
            if (event.key === prevKey) {
              event.preventDefault();
              scrollPrev();
            } else if (event.key === nextKey) {
              event.preventDefault();
              scrollNext();
            }
          }}
          className={cn("relative", className)}
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    );
  },
);
Carousel.displayName = "Carousel";

export const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel();
  return (
    <div ref={carouselRef} data-slot="carousel-content" className="overflow-hidden">
      <div
        ref={ref}
        className={cn("flex", orientation === "horizontal" ? "-ms-4" : "-mt-4 flex-col", className)}
        {...props}
      />
    </div>
  );
});
CarouselContent.displayName = "CarouselContent";

export const CarouselItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { orientation } = useCarousel();
    return (
      <div
        ref={ref}
        role="group"
        aria-roledescription="slide"
        data-slot="carousel-item"
        className={cn(
          "min-w-0 shrink-0 grow-0 basis-full",
          orientation === "horizontal" ? "ps-4" : "pt-4",
          className,
        )}
        {...props}
      />
    );
  },
);
CarouselItem.displayName = "CarouselItem";

export const CarouselPrevious = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "outline", size = "icon-sm", ...props }, ref) => {
    const { orientation, scrollPrev, canScrollPrev } = useCarousel();
    return (
      <Button
        ref={ref}
        data-slot="carousel-previous"
        variant={variant}
        size={size}
        rounded
        disabled={!canScrollPrev}
        onClick={scrollPrev}
        className={cn(
          "absolute touch-manipulation",
          orientation === "horizontal"
            ? "top-1/2 -start-12 -translate-y-1/2"
            : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
          className,
        )}
        {...props}
      >
        <ArrowLeft className="rtl:rotate-180" />
        <span className="sr-only">Slide anterior</span>
      </Button>
    );
  },
);
CarouselPrevious.displayName = "CarouselPrevious";

export const CarouselNext = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "outline", size = "icon-sm", ...props }, ref) => {
    const { orientation, scrollNext, canScrollNext } = useCarousel();
    return (
      <Button
        ref={ref}
        data-slot="carousel-next"
        variant={variant}
        size={size}
        rounded
        disabled={!canScrollNext}
        onClick={scrollNext}
        className={cn(
          "absolute touch-manipulation",
          orientation === "horizontal"
            ? "top-1/2 -end-12 -translate-y-1/2"
            : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
          className,
        )}
        {...props}
      >
        <ArrowRight className="rtl:rotate-180" />
        <span className="sr-only">Próximo slide</span>
      </Button>
    );
  },
);
CarouselNext.displayName = "CarouselNext";
