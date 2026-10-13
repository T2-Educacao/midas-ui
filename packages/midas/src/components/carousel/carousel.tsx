"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react";
import { Direction } from "radix-ui";
import * as React from "react";
import { cn } from "../../lib/cn";
import { Button, type ButtonProps } from "../button/button";

export type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
export type CarouselOptions = UseCarouselParameters[0];
export type CarouselPlugin = UseCarouselParameters[1];
export type CarouselType = "uniform" | "spotlight";

export interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: "horizontal" | "vertical";
  type?: CarouselType;
  setApi?: (api: CarouselApi) => void;
}

interface CarouselContextValue {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: CarouselApi;
  orientation: "horizontal" | "vertical";
  type: CarouselType;
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
  selectedIndex: number;
  snapCount: number;
}

const CarouselContext = React.createContext<CarouselContextValue | null>(null);

export function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) throw new Error("useCarousel precisa estar dentro de <Carousel>.");
  return context;
}

export const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  (
    {
      orientation = "horizontal",
      type = "uniform",
      opts,
      setApi,
      plugins,
      className,
      children,
      onKeyDown,
      ...props
    },
    ref,
  ) => {
    const direction = Direction.useDirection();
    const [carouselRef, api] = useEmblaCarousel(
      { direction, ...opts, axis: orientation === "horizontal" ? "x" : "y" },
      plugins,
    );
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const [snapCount, setSnapCount] = React.useState(0);

    const onSelect = React.useCallback((current: CarouselApi) => {
      if (!current) return;
      setCanScrollPrev(current.canScrollPrev());
      setCanScrollNext(current.canScrollNext());
      setSelectedIndex(current.selectedScrollSnap());
      setSnapCount(current.scrollSnapList().length);
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
          type,
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
          selectedIndex,
          snapCount,
        }}
      >
        <div
          ref={ref}
          role="region"
          aria-roledescription="carrossel"
          data-slot="carousel"
          data-orientation={orientation}
          data-type={type}
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
          className={cn("group/carousel relative", className)}
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    );
  },
);
Carousel.displayName = "Carousel";

export const CarouselHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="carousel-header"
    className={cn("mb-6 flex items-end justify-between gap-4", className)}
    {...props}
  />
));
CarouselHeader.displayName = "CarouselHeader";

export const CarouselEyebrow = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    data-slot="carousel-eyebrow"
    className={cn("text-mono-overline text-content-secondary", className)}
    {...props}
  />
));
CarouselEyebrow.displayName = "CarouselEyebrow";

export const CarouselTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    data-slot="carousel-title"
    className={cn("text-heading-md text-content-primary md:text-heading-lg", className)}
    {...props}
  />
));
CarouselTitle.displayName = "CarouselTitle";

export const CarouselControls = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="carousel-controls"
    className={cn("flex shrink-0 items-center gap-2", className)}
    {...props}
  />
));
CarouselControls.displayName = "CarouselControls";

export const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel();
  return (
    <div ref={carouselRef} data-slot="carousel-content" className="overflow-hidden">
      <div
        ref={ref}
        className={cn("flex", orientation === "horizontal" ? "-ms-6" : "-mt-6 flex-col", className)}
        {...props}
      />
    </div>
  );
});
CarouselContent.displayName = "CarouselContent";

export const CarouselItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, forwardedRef) => {
    const { orientation, api, type, selectedIndex } = useCarousel();
    const node = React.useRef<HTMLDivElement | null>(null);
    const [index, setIndex] = React.useState(-1);

    const setRefs = React.useCallback(
      (element: HTMLDivElement | null) => {
        node.current = element;
        if (typeof forwardedRef === "function") forwardedRef(element);
        else if (forwardedRef) forwardedRef.current = element;
      },
      [forwardedRef],
    );

    React.useEffect(() => {
      if (!api) return;
      const update = () => {
        if (node.current) setIndex(api.slideNodes().indexOf(node.current));
      };
      update();
      api.on("reInit", update);
      return () => {
        api.off("reInit", update);
      };
    }, [api]);

    const active = index === selectedIndex;
    const total = api?.slideNodes().length ?? 0;
    return (
      <div
        ref={setRefs}
        role="group"
        aria-roledescription="slide"
        aria-label={index >= 0 && total > 0 ? `${index + 1} de ${total}` : undefined}
        data-slot="carousel-item"
        data-active={active ? "true" : undefined}
        className={cn(
          "min-w-0 shrink-0 grow-0 basis-full",
          orientation === "horizontal" ? "ps-6" : "pt-6",
          type === "spotlight" &&
            "origin-center scale-90 opacity-70 transition-[transform,opacity] duration-300 ease-out data-[active=true]:scale-100 data-[active=true]:opacity-100 motion-reduce:transition-none",
          className,
        )}
        {...props}
      />
    );
  },
);
CarouselItem.displayName = "CarouselItem";

export interface CarouselButtonProps extends ButtonProps {
  inline?: boolean;
}

export const CarouselPrevious = React.forwardRef<HTMLButtonElement, CarouselButtonProps>(
  ({ className, variant = "secondary", size = "icon-md", inline = false, ...props }, ref) => {
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
          "touch-manipulation",
          !inline && "absolute",
          !inline &&
            (orientation === "horizontal"
              ? "top-1/2 -start-12 -translate-y-1/2"
              : "-top-12 left-1/2 -translate-x-1/2 rotate-90"),
          className,
        )}
        {...props}
      >
        <IconArrowLeft className="rtl:rotate-180" />
        <span className="sr-only">Slide anterior</span>
      </Button>
    );
  },
);
CarouselPrevious.displayName = "CarouselPrevious";

export const CarouselNext = React.forwardRef<HTMLButtonElement, CarouselButtonProps>(
  ({ className, variant = "secondary", size = "icon-md", inline = false, ...props }, ref) => {
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
          "touch-manipulation",
          !inline && "absolute",
          !inline &&
            (orientation === "horizontal"
              ? "top-1/2 -end-12 -translate-y-1/2"
              : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90"),
          className,
        )}
        {...props}
      >
        <IconArrowRight className="rtl:rotate-180" />
        <span className="sr-only">Próximo slide</span>
      </Button>
    );
  },
);
CarouselNext.displayName = "CarouselNext";

export const CarouselDots = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { selectedIndex, snapCount } = useCarousel();
    return (
      <div
        ref={ref}
        aria-hidden="true"
        data-slot="carousel-dots"
        className={cn("mt-6 flex items-center justify-center gap-1.5", className)}
        {...props}
      >
        {Array.from({ length: snapCount }, (_, position) => position).map((position) => (
          <span
            key={position}
            data-slot="carousel-dot"
            data-state={position === selectedIndex ? "active" : "inactive"}
            className={cn(
              "h-1.5 rounded-pill transition-[width,background-color] duration-200 motion-reduce:transition-none",
              position === selectedIndex ? "w-5 bg-action-accent-bg" : "w-1.5 bg-border-strong",
            )}
          />
        ))}
      </div>
    );
  },
);
CarouselDots.displayName = "CarouselDots";
