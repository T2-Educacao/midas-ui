"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { RadioGroup as RadioGroupPrimitive } from "radix-ui";
import * as React from "react";
import { cn } from "../../lib/cn";

export const segmentedControlVariants = cva(
  [
    "inline-flex shrink-0 items-center justify-center gap-1 whitespace-nowrap font-medium text-foreground outline-none",
    "transition-[color,background-color,box-shadow] duration-150 motion-reduce:transition-none",
    "hover:bg-accent hover:text-accent-foreground data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground",
    "focus-visible:z-10 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
    "disabled:pointer-events-none disabled:opacity-50",
    "border border-input bg-background dark:bg-input/30",
    "rounded-none first:rounded-s-lg last:rounded-e-lg",
    "group-data-[orientation=horizontal]/segmented-control:border-s-0 group-data-[orientation=horizontal]/segmented-control:first:border-s",
    "group-data-[orientation=vertical]/segmented-control:border-t-0 group-data-[orientation=vertical]/segmented-control:first:border-t",
    "group-data-[orientation=vertical]/segmented-control:first:rounded-s-none group-data-[orientation=vertical]/segmented-control:last:rounded-e-none",
    "group-data-[orientation=vertical]/segmented-control:first:rounded-t-lg group-data-[orientation=vertical]/segmented-control:last:rounded-b-lg",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  ],
  {
    variants: {
      size: {
        sm: "h-7 min-w-7 px-2.5 text-xs",
        default: "h-8 min-w-8 px-2.5 text-sm",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

type SegmentedControlSize = NonNullable<VariantProps<typeof segmentedControlVariants>["size"]>;

const SegmentedControlContext = React.createContext<SegmentedControlSize>("default");

export interface SegmentedControlProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> {
  size?: SegmentedControlSize;
}

export const SegmentedControl = React.forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitive.Root>,
  SegmentedControlProps
>(({ className, size = "default", orientation = "horizontal", children, ...props }, ref) => (
  <RadioGroupPrimitive.Root
    ref={ref}
    data-slot="segmented-control"
    data-size={size}
    orientation={orientation}
    className={cn(
      "group/segmented-control flex w-fit items-center rounded-lg",
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
