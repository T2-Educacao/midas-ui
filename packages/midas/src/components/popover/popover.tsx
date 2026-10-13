"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { Popover as PopoverPrimitive } from "radix-ui";
import * as React from "react";
import { cn } from "../../lib/cn";
import { overlayAppearance } from "../../lib/overlay-styles";

export const Popover = PopoverPrimitive.Root;
export const PopoverTrigger = PopoverPrimitive.Trigger;
export const PopoverAnchor = PopoverPrimitive.Anchor;
export const PopoverClose = PopoverPrimitive.Close;

export const popoverContentVariants = cva(
  [
    "z-(--midas-z-popup) flex w-75 max-w-[calc(100vw-2rem)] flex-col gap-3 rounded-container border p-4 text-body-sm text-content-primary shadow-elevation-overlay outline-none",
    "origin-(--radix-popover-content-transform-origin) animate-midas-in motion-reduce:animate-none",
  ],
  {
    variants: {
      appearance: overlayAppearance,
    },
    defaultVariants: {
      appearance: "solid",
    },
  },
);

export interface PopoverContentProps
  extends React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>,
    VariantProps<typeof popoverContentVariants> {
  arrow?: boolean;
}

export const PopoverContent = React.forwardRef<
  React.ComponentRef<typeof PopoverPrimitive.Content>,
  PopoverContentProps
>(
  (
    { className, align = "center", sideOffset = 8, appearance, arrow = true, children, ...props },
    ref,
  ) => (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        ref={ref}
        data-slot="popover-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(popoverContentVariants({ appearance }), className)}
        {...props}
      >
        {children}
        {arrow && (
          <PopoverPrimitive.Arrow
            data-slot="popover-arrow"
            width={16}
            height={8}
            className={cn(
              appearance === "glass" ? "fill-material-glass-surface" : "fill-overlay-surface",
              "stroke-border-subtle",
            )}
          />
        )}
      </PopoverPrimitive.Content>
    </PopoverPrimitive.Portal>
  ),
);
PopoverContent.displayName = "PopoverContent";

export const PopoverHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="popover-header"
      className={cn("flex flex-col gap-1", className)}
      {...props}
    />
  ),
);
PopoverHeader.displayName = "PopoverHeader";

export const PopoverTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h4
    ref={ref}
    data-slot="popover-title"
    className={cn("text-label-md text-content-primary", className)}
    {...props}
  />
));
PopoverTitle.displayName = "PopoverTitle";

export const PopoverDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    data-slot="popover-description"
    className={cn("text-body-sm text-content-secondary", className)}
    {...props}
  />
));
PopoverDescription.displayName = "PopoverDescription";

export const PopoverFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="popover-footer"
      className={cn("flex items-center justify-end gap-2", className)}
      {...props}
    />
  ),
);
PopoverFooter.displayName = "PopoverFooter";
