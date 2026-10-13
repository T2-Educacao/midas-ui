import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "../../lib/cn";

export const spinnerVariants = cva("inline-flex shrink-0", {
  variants: {
    variant: {
      ring: "animate-spin rounded-full border-solid motion-reduce:animate-none",
      dots: "items-center justify-center gap-0.5",
    },
    size: {
      xs: "size-3",
      sm: "size-4",
      md: "size-6",
      lg: "size-8",
      xl: "size-12",
    },
    tone: {
      current: "",
      brand: "",
      neutral: "",
      media: "",
    },
  },
  compoundVariants: [
    { variant: "ring", size: ["xs", "sm", "md"], className: "border-2" },
    { variant: "ring", size: "lg", className: "border-3" },
    { variant: "ring", size: "xl", className: "border-4" },
    { variant: "ring", tone: "current", className: "border-current/25 border-t-current" },
    {
      variant: "ring",
      tone: "brand",
      className: "border-border-default border-t-action-accent-bg",
    },
    {
      variant: "ring",
      tone: "neutral",
      className: "border-border-default border-t-content-primary",
    },
    {
      variant: "ring",
      tone: "media",
      className: "border-material-on-media-content/30 border-t-material-on-media-content",
    },
    { variant: "dots", tone: "current", className: "text-current" },
    { variant: "dots", tone: "brand", className: "text-action-accent-bg" },
    { variant: "dots", tone: "neutral", className: "text-content-primary" },
    { variant: "dots", tone: "media", className: "text-material-on-media-content" },
  ],
  defaultVariants: {
    variant: "ring",
    size: "sm",
    tone: "current",
  },
});

const dotSize = {
  xs: "size-0.75",
  sm: "size-1",
  md: "size-1.25",
  lg: "size-1.5",
  xl: "size-2",
} as const;

export interface SpinnerProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, "children">,
    VariantProps<typeof spinnerVariants> {
  label?: string;
}

export const Spinner = React.forwardRef<HTMLSpanElement, SpinnerProps>(
  ({ className, variant, size, tone, label = "Carregando", ...props }, ref) => {
    const resolvedSize = size ?? "sm";
    return (
      <span
        ref={ref}
        {...(label ? { role: "status", "aria-label": label } : {})}
        data-slot="spinner"
        data-variant={variant ?? "ring"}
        className={cn(spinnerVariants({ variant, size, tone }), className)}
        {...props}
      >
        {variant === "dots"
          ? [0, 1, 2].map((index) => (
              <span
                key={index}
                aria-hidden="true"
                style={{ animationDelay: `${index * 150}ms` }}
                className={cn(
                  "animate-bounce rounded-full bg-current motion-reduce:animate-none",
                  dotSize[resolvedSize],
                )}
              />
            ))
          : null}
      </span>
    );
  },
);
Spinner.displayName = "Spinner";
