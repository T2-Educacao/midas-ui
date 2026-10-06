"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { Switch as SwitchPrimitive } from "radix-ui";
import * as React from "react";
import { cn } from "../../lib/cn";

export const switchVariants = cva(
  [
    "peer group/switch inline-flex shrink-0 items-center rounded-full border border-transparent outline-none",
    "transition-[color,background-color,border-color,box-shadow] duration-150 motion-reduce:transition-none",
    "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
    "disabled:cursor-not-allowed disabled:opacity-50",
    "aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20",
    "data-[state=checked]:bg-primary data-[state=unchecked]:bg-input dark:data-[state=unchecked]:bg-input/80",
  ],
  {
    variants: {
      size: {
        default: "h-5 w-9",
        sm: "h-4 w-7",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

const switchThumbVariants = cva(
  [
    "pointer-events-none block rounded-full bg-background shadow-sm ring-0",
    "transition-transform duration-150 motion-reduce:transition-none",
    "data-[state=unchecked]:translate-x-0",
  ],
  {
    variants: {
      size: {
        default:
          "size-4 data-[state=checked]:translate-x-4 rtl:data-[state=checked]:-translate-x-4",
        sm: "size-3 data-[state=checked]:translate-x-3 rtl:data-[state=checked]:-translate-x-3",
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
>(({ className, size, ...props }, ref) => (
  <SwitchPrimitive.Root
    ref={ref}
    data-slot="switch"
    data-size={size ?? "default"}
    className={cn(switchVariants({ size }), className)}
    {...props}
  >
    <SwitchPrimitive.Thumb data-slot="switch-thumb" className={switchThumbVariants({ size })} />
  </SwitchPrimitive.Root>
));
Switch.displayName = "Switch";
