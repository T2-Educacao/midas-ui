"use client";

import { IconCheck, IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import { Select as SelectPrimitive } from "radix-ui";
import * as React from "react";
import { cn } from "../../lib/cn";
import { type FieldControlVariantProps, fieldControlVariants } from "../../lib/field-styles";

export const Select = SelectPrimitive.Root;
export const SelectGroup = SelectPrimitive.Group;
export const SelectValue = SelectPrimitive.Value;

export interface SelectTriggerProps
  extends Omit<React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>, "size">,
    Omit<FieldControlVariantProps, "size"> {
  size?: "sm" | "md" | "lg" | "default";
  fullWidth?: boolean;
  success?: boolean;
}

export const SelectTrigger = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Trigger>,
  SelectTriggerProps
>(
  (
    {
      className,
      size = "default",
      appearance,
      tone,
      shape,
      success,
      fullWidth = false,
      children,
      ...props
    },
    ref,
  ) => (
    <SelectPrimitive.Trigger
      ref={ref}
      data-slot="select-trigger"
      data-size={size}
      data-success={success ? "true" : undefined}
      className={cn(
        fieldControlVariants({ size: size === "default" ? "md" : size, appearance, tone, shape }),
        "flex w-fit items-center justify-between gap-2 whitespace-nowrap select-none",
        "data-placeholder:text-content-secondary",
        "data-[state=open]:border-border-default",
        "*:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2",
        "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-icon-md",
        fullWidth && "w-full",
        className,
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <IconChevronDown className="text-content-secondary" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  ),
);
SelectTrigger.displayName = "SelectTrigger";

export const SelectContent = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "item-aligned", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      data-slot="select-content"
      position={position}
      className={cn(
        "relative z-(--midas-z-popup) max-h-(--radix-select-content-available-height) min-w-36 overflow-x-hidden overflow-y-auto rounded-overlay border border-overlay-border bg-overlay-surface text-content-primary shadow-elevation-overlay",
        "origin-(--radix-select-content-transform-origin) animate-midas-in motion-reduce:animate-none",
        position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=top]:-translate-y-1",
        className,
      )}
      {...props}
    >
      <SelectPrimitive.ScrollUpButton className="flex cursor-default items-center justify-center py-1">
        <IconChevronUp className="size-icon-sm" />
      </SelectPrimitive.ScrollUpButton>
      <SelectPrimitive.Viewport
        className={cn(
          "p-1",
          position === "popper" &&
            "h-(--radix-select-trigger-height) w-full min-w-(--radix-select-trigger-width) scroll-my-1",
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectPrimitive.ScrollDownButton className="flex cursor-default items-center justify-center py-1">
        <IconChevronDown className="size-icon-sm" />
      </SelectPrimitive.ScrollDownButton>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = "SelectContent";

export const SelectLabel = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    data-slot="select-label"
    className={cn("px-2 py-1.5 text-mono-overline text-content-secondary", className)}
    {...props}
  />
));
SelectLabel.displayName = "SelectLabel";

export const SelectItem = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item> & { description?: React.ReactNode }
>(({ className, children, description, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    data-slot="select-item"
    className={cn(
      "relative flex w-full cursor-default select-none items-center gap-2 rounded-control py-2 pe-9 ps-2 text-label-md text-content-primary outline-none",
      "focus:bg-state-hover data-[state=checked]:bg-selection-bg data-[state=checked]:text-selection-content",
      "data-disabled:pointer-events-none data-disabled:text-content-disabled",
      "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-icon-md",
      className,
    )}
    {...props}
  >
    <span className="pointer-events-none absolute end-2.5 flex size-icon-md items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <IconCheck className="size-icon-md" />
      </SelectPrimitive.ItemIndicator>
    </span>
    {description ? (
      <span className="flex min-w-0 flex-col">
        <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
        <span data-slot="select-item-description" className="text-caption text-content-secondary">
          {description}
        </span>
      </span>
    ) : (
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    )}
  </SelectPrimitive.Item>
));
SelectItem.displayName = "SelectItem";

export const SelectSeparator = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    data-slot="select-separator"
    className={cn("pointer-events-none -mx-1 my-1 h-px bg-border-subtle", className)}
    {...props}
  />
));
SelectSeparator.displayName = "SelectSeparator";
