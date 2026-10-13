"use client";

import { IconCheck, IconMinus } from "@tabler/icons-react";
import { cva, type VariantProps } from "class-variance-authority";
import { Checkbox as CheckboxPrimitive } from "radix-ui";
import * as React from "react";
import { cn } from "../../lib/cn";

export const checkboxVariants = cva(
  [
    "peer group/checkbox relative flex shrink-0 items-center justify-center border border-border-default bg-field-bg outline-none",
    "transition-[color,background-color,border-color,box-shadow] duration-150 motion-reduce:transition-none",
    "hover:border-selection-border focus-visible:focus-ring",
    "disabled:cursor-not-allowed disabled:opacity-disabled",
    "aria-invalid:border-status-danger-fill aria-invalid:hover:border-status-danger-fill aria-invalid:focus-visible:focus-ring-danger",
    "aria-invalid:data-[state=checked]:bg-status-danger-fill aria-invalid:data-[state=checked]:hover:bg-status-danger-fill aria-invalid:data-[state=checked]:text-status-danger-on-fill aria-invalid:data-[state=indeterminate]:hover:bg-status-danger-fill aria-invalid:data-[state=indeterminate]:bg-status-danger-fill aria-invalid:data-[state=indeterminate]:text-status-danger-on-fill",
  ],
  {
    variants: {
      size: {
        sm: "size-4 rounded-xs",
        md: "size-5 rounded-xs",
        lg: "size-6 rounded-sm",
      },
      tone: {
        brand:
          "data-[state=checked]:border-transparent data-[state=checked]:bg-selection-fill data-[state=checked]:text-selection-on-fill data-[state=checked]:hover:bg-action-accent-bg-hover data-[state=indeterminate]:border-transparent data-[state=indeterminate]:bg-selection-fill data-[state=indeterminate]:text-selection-on-fill data-[state=indeterminate]:hover:bg-action-accent-bg-hover",
        neutral:
          "data-[state=checked]:border-transparent data-[state=checked]:bg-action-primary-bg data-[state=checked]:text-action-primary-content data-[state=checked]:hover:bg-action-primary-bg-hover data-[state=indeterminate]:border-transparent data-[state=indeterminate]:bg-action-primary-bg data-[state=indeterminate]:text-action-primary-content data-[state=indeterminate]:hover:bg-action-primary-bg-hover",
      },
    },
    defaultVariants: {
      size: "md",
      tone: "brand",
    },
  },
);

const indicatorSize = {
  sm: "size-2.5",
  md: "size-3.5",
  lg: "size-4",
} as const;

export interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
    VariantProps<typeof checkboxVariants> {}

export const Checkbox = React.forwardRef<
  React.ComponentRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, size, tone, ...props }, ref) => {
  const iconSize = indicatorSize[size ?? "md"];
  return (
    <CheckboxPrimitive.Root
      ref={ref}
      data-slot="checkbox"
      data-size={size ?? "md"}
      className={cn(checkboxVariants({ size, tone }), className)}
      {...props}
    >
      <CheckboxPrimitive.Indicator className="flex items-center justify-center">
        <IconCheck
          stroke={3}
          className={cn(iconSize, "group-data-[state=indeterminate]/checkbox:hidden")}
        />
        <IconMinus
          stroke={3}
          className={cn(iconSize, "hidden group-data-[state=indeterminate]/checkbox:block")}
        />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
});
Checkbox.displayName = "Checkbox";
