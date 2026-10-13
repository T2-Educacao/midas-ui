"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { RadioGroup as RadioGroupPrimitive } from "radix-ui";
import * as React from "react";
import { cn } from "../../lib/cn";

export const segmentedControlVariants = cva(
  [
    "inline-flex shrink-0 items-center justify-center gap-1.5 whitespace-nowrap text-content-secondary outline-none",
    "transition-[color,background-color,box-shadow] duration-150 motion-reduce:transition-none",
    "hover:bg-state-hover hover:text-content-primary",
    "data-[state=checked]:bg-surface-canvas data-[state=checked]:text-content-primary data-[state=checked]:shadow-elevation-control",
    "focus-visible:z-10 focus-visible:focus-ring",
    "disabled:pointer-events-none disabled:text-content-disabled",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-icon-sm",
  ],
  {
    variants: {
      size: {
        sm: "h-control-sm min-w-control-sm rounded-control px-2.5 text-label-sm",
        md: "h-9 min-w-9 rounded-overlay px-3.5 text-label-md",
        default: "h-9 min-w-9 rounded-overlay px-3.5 text-label-md",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

type SegmentedControlSize = NonNullable<VariantProps<typeof segmentedControlVariants>["size"]>;

const SegmentedControlContext = React.createContext<SegmentedControlSize>("md");

export interface SegmentedControlProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> {
  size?: SegmentedControlSize;
  fullWidth?: boolean;
}

export const SegmentedControl = React.forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitive.Root>,
  SegmentedControlProps
>(({ className, size = "md", orientation = "horizontal", fullWidth, children, ...props }, ref) => (
  <RadioGroupPrimitive.Root
    ref={ref}
    data-slot="segmented-control"
    data-size={size}
    orientation={orientation}
    className={cn(
      "group/segmented-control flex items-center gap-0.5 bg-surface-muted p-0.75",
      size === "sm" ? "rounded-xl" : "rounded-2xl",
      fullWidth ? "w-full [&>*]:flex-1" : "w-fit",
      orientation === "vertical" && "flex-col items-stretch",
      className,
    )}
    {...props}
  >
    <SegmentedControlContext.Provider value={size}>{children}</SegmentedControlContext.Provider>
  </RadioGroupPrimitive.Root>
));
SegmentedControl.displayName = "SegmentedControl";

export type SegmentedControlItemProps = React.ComponentPropsWithoutRef<
  typeof RadioGroupPrimitive.Item
>;

export const SegmentedControlItem = React.forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitive.Item>,
  SegmentedControlItemProps
>(({ className, ...props }, ref) => {
  const size = React.useContext(SegmentedControlContext);
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      data-slot="segmented-control-item"
      className={cn(segmentedControlVariants({ size }), className)}
      {...props}
    />
  );
});
SegmentedControlItem.displayName = "SegmentedControlItem";
