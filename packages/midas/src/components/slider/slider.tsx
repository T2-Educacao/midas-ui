"use client";

import { Slider as SliderPrimitive } from "radix-ui";
import * as React from "react";
import { cn } from "../../lib/cn";

export type SliderProps = React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>;

const rangeSuffixes = ["mínimo", "máximo"];

function thumbLabel(label: string | undefined, index: number, count: number) {
  if (!label) return undefined;
  if (count === 2) return `${label} (${rangeSuffixes[index]})`;
  return label;
}

export const Slider = React.forwardRef<
  React.ComponentRef<typeof SliderPrimitive.Root>,
  SliderProps
>(
  (
    {
      className,
      value,
      defaultValue,
      min = 0,
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledBy,
      ...props
    },
    ref,
  ) => {
    const thumbs = React.useMemo(() => {
      let count = 1;
      if (Array.isArray(value)) count = value.length;
      else if (Array.isArray(defaultValue)) count = defaultValue.length;
      return Array.from({ length: count }, (_, thumb) => thumb);
    }, [value, defaultValue]);

    return (
      <SliderPrimitive.Root
        ref={ref}
        data-slot="slider"
        value={value}
        defaultValue={value === undefined && defaultValue === undefined ? [min] : defaultValue}
        min={min}
        className={cn(
          "relative flex w-full touch-none select-none items-center",
          "data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-40 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
          "data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50",
          className,
        )}
        {...props}
      >
        <SliderPrimitive.Track
          data-slot="slider-track"
          className="relative grow overflow-hidden rounded-full bg-muted data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"
        >
          <SliderPrimitive.Range
            data-slot="slider-range"
            className="absolute bg-primary data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
          />
        </SliderPrimitive.Track>
        {thumbs.map((thumb) => (
          <SliderPrimitive.Thumb
            key={thumb}
            aria-label={thumbLabel(ariaLabel, thumb, thumbs.length)}
            aria-labelledby={ariaLabelledBy}
            data-slot="slider-thumb"
            className={cn(
              "block size-4 shrink-0 rounded-full border border-primary bg-background shadow-sm outline-none",
              "transition-[color,box-shadow] duration-150 motion-reduce:transition-none",
              "hover:ring-4 hover:ring-ring/30 focus-visible:ring-4 focus-visible:ring-ring/50",
              "disabled:pointer-events-none",
            )}
          />
        ))}
      </SliderPrimitive.Root>
    );
  },
);
Slider.displayName = "Slider";
