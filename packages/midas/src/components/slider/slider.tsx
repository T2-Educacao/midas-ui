"use client";

import { Slider as SliderPrimitive } from "radix-ui";
import * as React from "react";
import { cn } from "../../lib/cn";

export type SliderProps = React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> & {
  tone?: "brand" | "neutral";
};

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
      tone = "brand",
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
        data-tone={tone}
        value={value}
        defaultValue={value === undefined && defaultValue === undefined ? [min] : defaultValue}
        min={min}
        className={cn(
          "group/slider relative flex min-h-10 w-full touch-none select-none items-center",
          "data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-40 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
          "data-[disabled]:cursor-not-allowed",
          className,
        )}
        {...props}
      >
        <SliderPrimitive.Track
          data-slot="slider-track"
          className="relative grow overflow-hidden rounded-pill bg-border-subtle data-[orientation=horizontal]:h-1 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1"
        >
          <SliderPrimitive.Range
            data-slot="slider-range"
            className={cn(
              "absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full",
              tone === "neutral" ? "bg-action-primary-bg" : "bg-action-accent-bg",
              "group-data-[disabled]/slider:bg-content-disabled",
            )}
          />
        </SliderPrimitive.Track>
        {thumbs.map((thumb) => (
          <SliderPrimitive.Thumb
            key={thumb}
            aria-label={thumbLabel(ariaLabel, thumb, thumbs.length)}
            aria-labelledby={ariaLabelledBy}
            data-slot="slider-thumb"
            className={cn(
              "block size-icon-md shrink-0 rounded-pill border border-border-subtle bg-surface-canvas shadow-elevation-card outline-none",
              "transition-[border-color,box-shadow] duration-150 motion-reduce:transition-none",
              "hover:border-border-default",
              tone === "neutral" ? "focus-visible:focus-ring-neutral" : "focus-visible:focus-ring",
              "data-[disabled]:pointer-events-none data-[disabled]:border-disabled-border data-[disabled]:bg-disabled-bg data-[disabled]:shadow-none",
            )}
          />
        ))}
      </SliderPrimitive.Root>
    );
  },
);
Slider.displayName = "Slider";
