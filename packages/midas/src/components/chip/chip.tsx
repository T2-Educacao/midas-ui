"use client";

import { X } from "@phosphor-icons/react/ssr";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "../../lib/cn";

export const chipVariants = cva(
  [
    "inline-flex w-fit shrink-0 items-center gap-1 whitespace-nowrap rounded-full border font-medium",
    "transition-[color,background-color,box-shadow] duration-150 motion-reduce:transition-none",
    "[&>svg]:pointer-events-none [&>svg]:size-3.5",
    "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
  ],
  {
    variants: {
      variant: {
        default: "border-transparent bg-secondary text-secondary-foreground",
        outline: "border-border bg-transparent text-foreground",
        primary: "border-transparent bg-primary text-primary-foreground",
      },
      size: {
        sm: "h-6 ps-2 pe-1 text-xs",
        default: "h-7 ps-3 pe-1.5 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ChipProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof chipVariants> {
  onRemove?: () => void;
  removeLabel?: string;
  disabled?: boolean;
}

export const Chip = React.forwardRef<HTMLSpanElement, ChipProps>(
  (
    {
      className,
      variant,
      size,
      onRemove,
      removeLabel = "Remover",
      disabled = false,
      children,
      ...props
    },
    ref,
  ) => {
    const ariaLabel = typeof children === "string" ? `${removeLabel} ${children}` : removeLabel;
    return (
      <span
        ref={ref}
        data-slot="chip"
        data-disabled={disabled ? "" : undefined}
        className={cn(chipVariants({ variant, size }), !onRemove && "pe-3", className)}
        {...props}
      >
        {children}
        {onRemove ? (
          <button
            type="button"
            data-slot="chip-remove"
            aria-label={ariaLabel}
            disabled={disabled}
            onClick={onRemove}
            className={cn(
              "inline-flex size-5 shrink-0 items-center justify-center rounded-full outline-none",
              "transition-[color,background-color,box-shadow] duration-150 motion-reduce:transition-none",
              "hover:bg-foreground/10 focus-visible:ring-3 focus-visible:ring-ring/50",
              "disabled:pointer-events-none",
            )}
          >
            <X aria-hidden="true" className="size-3" />
          </button>
        ) : null}
      </span>
    );
  },
);
Chip.displayName = "Chip";
