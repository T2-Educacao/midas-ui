"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { RadioGroup as RadioGroupPrimitive } from "radix-ui";
import * as React from "react";
import { cn } from "../../lib/cn";

export const RadioGroup = React.forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => (
  <RadioGroupPrimitive.Root
    ref={ref}
    data-slot="radio-group"
    className={cn("grid gap-3", className)}
    {...props}
  />
));
RadioGroup.displayName = "RadioGroup";

export const radioGroupItemVariants = cva(
  [
    "peer relative flex aspect-square shrink-0 items-center justify-center rounded-pill border border-border-default bg-field-bg outline-none",
    "transition-[color,background-color,border-color,box-shadow] duration-150 motion-reduce:transition-none",
    "hover:border-selection-border focus-visible:focus-ring",
    "disabled:cursor-not-allowed disabled:opacity-disabled",
    "aria-invalid:border-status-danger-fill aria-invalid:hover:border-status-danger-fill aria-invalid:focus-visible:focus-ring-danger",
    "aria-invalid:data-[state=checked]:bg-status-danger-fill aria-invalid:data-[state=checked]:hover:bg-status-danger-fill aria-invalid:data-[state=checked]:text-status-danger-on-fill",
  ],
  {
    variants: {
      size: {
        sm: "size-4",
        md: "size-5",
        lg: "size-6",
      },
      tone: {
        brand:
          "data-[state=checked]:border-transparent data-[state=checked]:bg-selection-fill data-[state=checked]:text-selection-on-fill data-[state=checked]:hover:bg-action-accent-bg-hover",
        neutral:
          "data-[state=checked]:border-transparent data-[state=checked]:bg-action-primary-bg data-[state=checked]:text-action-primary-content data-[state=checked]:hover:bg-action-primary-bg-hover",
      },
    },
    defaultVariants: {
      size: "md",
      tone: "brand",
    },
  },
);

const dotSize = {
  sm: "size-1.5",
  md: "size-2",
  lg: "size-2.5",
} as const;

export interface RadioGroupItemProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>,
    VariantProps<typeof radioGroupItemVariants> {}

export const RadioGroupItem = React.forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitive.Item>,
  RadioGroupItemProps
>(({ className, size, tone, ...props }, ref) => (
  <RadioGroupPrimitive.Item
    ref={ref}
    data-slot="radio-group-item"
    data-size={size ?? "md"}
    className={cn(radioGroupItemVariants({ size, tone }), className)}
    {...props}
  >
    <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
      <span className={cn("rounded-pill bg-current", dotSize[size ?? "md"])} />
    </RadioGroupPrimitive.Indicator>
  </RadioGroupPrimitive.Item>
));
RadioGroupItem.displayName = "RadioGroupItem";
