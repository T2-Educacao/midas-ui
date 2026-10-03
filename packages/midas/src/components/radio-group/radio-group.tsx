"use client";

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

export const RadioGroupItem = React.forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => (
  <RadioGroupPrimitive.Item
    ref={ref}
    data-slot="radio-group-item"
    className={cn(
      "peer relative flex aspect-square size-4 shrink-0 items-center justify-center rounded-full border border-input bg-background outline-none",
      "transition-[color,background-color,border-color,box-shadow] duration-150 motion-reduce:transition-none",
      "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
      "disabled:cursor-not-allowed disabled:opacity-50",
      "aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20",
      "data-[state=checked]:border-primary data-[state=checked]:bg-primary",
      "dark:border-muted-foreground/50 dark:bg-input/30 dark:data-[state=checked]:border-primary",
      className,
    )}
    {...props}
  >
    <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
      <span className="size-2 rounded-full bg-primary-foreground" />
    </RadioGroupPrimitive.Indicator>
  </RadioGroupPrimitive.Item>
));
RadioGroupItem.displayName = "RadioGroupItem";
