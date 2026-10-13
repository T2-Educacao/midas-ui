"use client";

import { IconX } from "@tabler/icons-react";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "../../lib/cn";

export const chipVariants = cva(
  [
    "inline-flex w-fit shrink-0 items-center gap-1 whitespace-nowrap rounded-pill border",
    "transition-[color,background-color,box-shadow] duration-150 motion-reduce:transition-none",
    "[&>svg]:pointer-events-none [&>svg]:size-icon-sm",
    "data-[disabled]:pointer-events-none data-[disabled]:border-disabled-border data-[disabled]:bg-disabled-bg data-[disabled]:text-content-disabled",
  ],
  {
    variants: {
      variant: {
        default: "border-transparent bg-surface-muted text-content-primary",
        outline: "border-border-subtle bg-transparent text-content-primary",
        primary: "border-transparent bg-action-accent-bg text-action-accent-content",
      },
      size: {
        sm: "h-6 ps-2 pe-1 text-label-sm",
        default: "h-7 ps-3 pe-1.5 text-label-md",
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
              "inline-flex size-5 shrink-0 items-center justify-center rounded-pill outline-none",
              "transition-[color,background-color,box-shadow] duration-150 motion-reduce:transition-none",
              "hover:bg-state-hover focus-visible:focus-ring",
              "disabled:pointer-events-none",
            )}
          >
            <IconX aria-hidden="true" className="size-icon-xs" />
          </button>
        ) : null}
      </span>
    );
  },
);
Chip.displayName = "Chip";
