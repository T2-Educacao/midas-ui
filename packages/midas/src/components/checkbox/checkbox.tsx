"use client";

import { Check, Minus } from "@phosphor-icons/react/ssr";
import { Checkbox as CheckboxPrimitive } from "radix-ui";
import * as React from "react";
import { cn } from "../../lib/cn";

export const Checkbox = React.forwardRef<
  React.ComponentRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    data-slot="checkbox"
    className={cn(
      "peer group/checkbox relative flex size-4 shrink-0 items-center justify-center rounded-[4px] border border-input bg-transparent outline-none",
      "transition-[color,background-color,border-color,box-shadow] duration-150 motion-reduce:transition-none",
      "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
      "disabled:cursor-not-allowed disabled:opacity-50",
      "aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20",
      "data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      "data-[state=indeterminate]:border-primary data-[state=indeterminate]:bg-primary data-[state=indeterminate]:text-primary-foreground",
      "dark:border-muted-foreground/50 dark:bg-input/30 dark:data-[state=checked]:border-primary dark:data-[state=indeterminate]:border-primary",
      className,
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator className="flex items-center justify-center">
      <Check weight="bold" className="size-3 group-data-[state=indeterminate]/checkbox:hidden" />
      <Minus
        weight="bold"
        className="hidden size-3 group-data-[state=indeterminate]/checkbox:block"
      />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = "Checkbox";
