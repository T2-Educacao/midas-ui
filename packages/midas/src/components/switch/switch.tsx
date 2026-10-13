"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { Switch as SwitchPrimitive } from "radix-ui";
import * as React from "react";
import { cn } from "../../lib/cn";

export const switchVariants = cva(
  [
    "peer group/switch inline-flex shrink-0 items-center rounded-pill outline-none",
    "transition-[color,background-color,box-shadow] duration-150 motion-reduce:transition-none",
    "focus-visible:shadow-focus-ring aria-invalid:focus-visible:shadow-focus-ring-danger",
    "disabled:cursor-not-allowed disabled:opacity-disabled",
    "data-[state=unchecked]:bg-border-strong",
  ],
  {
    variants: {
      size: {
        sm: "h-4 w-7",
        default: "h-5 w-9",
        md: "h-5 w-9",
        lg: "h-6 w-11",
      },
      tone: {
        brand:
          "data-[state=checked]:bg-selection-fill data-[state=checked]:hover:bg-action-accent-bg-hover",
        neutral:
          "data-[state=checked]:bg-action-primary-bg data-[state=checked]:hover:bg-action-primary-bg-hover",
      },
    },
    defaultVariants: {
      size: "default",
      tone: "brand",
    },
  },
);

const switchThumbVariants = cva(
  [
    "pointer-events-none block rounded-pill bg-surface-default shadow-elevation-control ring-0",
    "transition-transform duration-150 motion-reduce:transition-none",
    "translate-x-0.5 rtl:-translate-x-0.5",
  ],
  {
    variants: {
      size: {
        sm: "size-3 data-[state=checked]:translate-x-3.5 rtl:data-[state=checked]:-translate-x-3.5",
        default:
          "size-4 data-[state=checked]:translate-x-4.5 rtl:data-[state=checked]:-translate-x-4.5",
        md: "size-4 data-[state=checked]:translate-x-4.5 rtl:data-[state=checked]:-translate-x-4.5",
        lg: "size-5 data-[state=checked]:translate-x-5.5 rtl:data-[state=checked]:-translate-x-5.5",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

export interface SwitchProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>,
    VariantProps<typeof switchVariants> {}

export const Switch = React.forwardRef<
  React.ComponentRef<typeof SwitchPrimitive.Root>,
  SwitchProps
>(({ className, size, tone, ...props }, ref) => (
  <SwitchPrimitive.Root
    ref={ref}
    data-slot="switch"
    data-size={size ?? "default"}
    className={cn(switchVariants({ size, tone }), className)}
    {...props}
  >
    <SwitchPrimitive.Thumb data-slot="switch-thumb" className={switchThumbVariants({ size })} />
  </SwitchPrimitive.Root>
));
Switch.displayName = "Switch";
