"use client";

import type { VariantProps } from "class-variance-authority";
import { ToggleGroup as ToggleGroupPrimitive } from "radix-ui";
import * as React from "react";
import { cn } from "../../lib/cn";
import { toggleVariants } from "../toggle/toggle";

type ToggleGroupContextValue = VariantProps<typeof toggleVariants> & { spacing: number };

const ToggleGroupContext = React.createContext<ToggleGroupContextValue>({
  variant: "ghost",
  size: "default",
  spacing: 0,
});

export type ToggleGroupProps = React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> &
  VariantProps<typeof toggleVariants> & {
    spacing?: number;
  };

export const ToggleGroup = React.forwardRef<
  React.ComponentRef<typeof ToggleGroupPrimitive.Root>,
  ToggleGroupProps
>(
  (
    {
      className,
      variant,
      size,
      spacing = 0,
      orientation = "horizontal",
      children,
      style,
      ...props
    },
    ref,
  ) => (
    <ToggleGroupPrimitive.Root
      ref={ref}
      data-slot="toggle-group"
      data-variant={variant ?? "ghost"}
      data-size={size ?? "default"}
      data-spacing={spacing}
      orientation={orientation}
      style={{ "--midas-toggle-gap": `${spacing * 4}px`, ...style } as React.CSSProperties}
      className={cn(
        "group/toggle-group flex w-fit items-center gap-(--midas-toggle-gap) rounded-lg",
        orientation === "vertical" && "flex-col items-stretch",
        className,
      )}
      {...props}
    >
      <ToggleGroupContext.Provider value={{ variant, size, spacing }}>
        {children}
      </ToggleGroupContext.Provider>
    </ToggleGroupPrimitive.Root>
  ),
);
ToggleGroup.displayName = "ToggleGroup";

export type ToggleGroupItemProps = React.ComponentPropsWithoutRef<
  typeof ToggleGroupPrimitive.Item
> &
  VariantProps<typeof toggleVariants>;

export const ToggleGroupItem = React.forwardRef<
  React.ComponentRef<typeof ToggleGroupPrimitive.Item>,
  ToggleGroupItemProps
>(({ className, variant, size, ...props }, ref) => {
  const context = React.useContext(ToggleGroupContext);
  const attached = context.spacing === 0;
  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      data-slot="toggle-group-item"
      className={cn(
        toggleVariants({ variant: context.variant ?? variant, size: context.size ?? size }),
        "shrink-0 focus:z-10 focus-visible:z-10",
        attached && [
          "group-data-[orientation=horizontal]/toggle-group:rounded-none group-data-[orientation=horizontal]/toggle-group:first:rounded-s-lg group-data-[orientation=horizontal]/toggle-group:last:rounded-e-lg",
          "group-data-[orientation=vertical]/toggle-group:rounded-none group-data-[orientation=vertical]/toggle-group:first:rounded-t-lg group-data-[orientation=vertical]/toggle-group:last:rounded-b-lg",
          "group-data-[variant=outline]/toggle-group:group-data-[orientation=horizontal]/toggle-group:border-s-0 group-data-[variant=outline]/toggle-group:group-data-[orientation=horizontal]/toggle-group:first:border-s",
          "group-data-[variant=outline]/toggle-group:group-data-[orientation=vertical]/toggle-group:border-t-0 group-data-[variant=outline]/toggle-group:group-data-[orientation=vertical]/toggle-group:first:border-t",
        ],
        className,
      )}
      {...props}
    />
  );
});
ToggleGroupItem.displayName = "ToggleGroupItem";
