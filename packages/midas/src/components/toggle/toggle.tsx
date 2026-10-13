"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { Toggle as TogglePrimitive } from "radix-ui";
import * as React from "react";
import { cn } from "../../lib/cn";

export const toggleVariants = cva(
  [
    "inline-flex shrink-0 items-center justify-center whitespace-nowrap border border-transparent text-content-primary outline-none",
    "transition-[color,background-color,border-color,box-shadow] duration-150 motion-reduce:transition-none",
    "hover:bg-state-hover active:bg-state-pressed data-[state=on]:bg-selection-bg data-[state=on]:text-selection-content",
    "focus-visible:focus-ring aria-invalid:focus-ring-danger",
    "disabled:pointer-events-none disabled:opacity-disabled",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0",
  ],
  {
    variants: {
      variant: {
        ghost: "bg-transparent",
        outline:
          "border-border-default bg-surface-default shadow-elevation-control data-[state=on]:border-selection-border",
      },
      size: {
        xs: "h-control-xs min-w-control-xs gap-1 rounded-xs px-2 text-label-sm [&_svg:not([class*='size-'])]:size-icon-sm",
        sm: "h-control-sm min-w-control-sm gap-1.5 rounded-xs px-2.5 text-label-sm [&_svg:not([class*='size-'])]:size-icon-sm",
        default:
          "h-control-md min-w-control-md gap-1.5 rounded-control px-3 text-label-md [&_svg:not([class*='size-'])]:size-icon-sm",
        md: "h-control-md min-w-control-md gap-1.5 rounded-control px-3 text-label-md [&_svg:not([class*='size-'])]:size-icon-sm",
        lg: "h-control-lg min-w-control-lg gap-2 rounded-control px-4 text-label-md [&_svg:not([class*='size-'])]:size-icon-md",
        xl: "h-control-xl min-w-control-xl gap-2 rounded-md px-5 text-label-lg [&_svg:not([class*='size-'])]:size-icon-md",
      },
    },
    defaultVariants: {
      variant: "ghost",
      size: "default",
    },
  },
);

export interface ToggleProps
  extends React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root>,
    VariantProps<typeof toggleVariants> {}

export const Toggle = React.forwardRef<
  React.ComponentRef<typeof TogglePrimitive.Root>,
  ToggleProps
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    data-slot="toggle"
    className={cn(toggleVariants({ variant, size }), className)}
    {...props}
  />
));
Toggle.displayName = "Toggle";
