"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { Tabs as TabsPrimitive } from "radix-ui";
import * as React from "react";
import { cn } from "../../lib/cn";

export const Tabs = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root>
>(({ className, orientation = "horizontal", ...props }, ref) => (
  <TabsPrimitive.Root
    ref={ref}
    data-slot="tabs"
    orientation={orientation}
    className={cn("group/tabs flex gap-2 data-[orientation=horizontal]:flex-col", className)}
    {...props}
  />
));
Tabs.displayName = "Tabs";

export const tabsListVariants = cva(
  [
    "group/tabs-list inline-flex w-fit items-center justify-center text-muted-foreground",
    "group-data-[orientation=vertical]/tabs:h-fit group-data-[orientation=vertical]/tabs:flex-col group-data-[orientation=vertical]/tabs:items-stretch",
  ],
  {
    variants: {
      variant: {
        default: "h-9 gap-1 rounded-lg bg-muted p-[3px]",
        line: [
          "h-9 gap-1 rounded-none bg-transparent p-0",
          "group-data-[orientation=horizontal]/tabs:border-b group-data-[orientation=horizontal]/tabs:border-border",
          "group-data-[orientation=vertical]/tabs:border-e group-data-[orientation=vertical]/tabs:border-border",
        ],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface TabsListProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>,
    VariantProps<typeof tabsListVariants> {}

export const TabsList = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.List>,
  TabsListProps
>(({ className, variant, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    data-slot="tabs-list"
    data-variant={variant ?? "default"}
    className={cn(tabsListVariants({ variant }), className)}
    {...props}
  />
));
TabsList.displayName = "TabsList";

export const TabsTrigger = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    data-slot="tabs-trigger"
    className={cn(
      "relative inline-flex h-full flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-md border border-transparent px-3 py-1 text-sm font-medium text-muted-foreground outline-none",
      "transition-[color,background-color,border-color,box-shadow] duration-150 motion-reduce:transition-none",
      "hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
      "disabled:pointer-events-none disabled:opacity-50",
      "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
      "group-data-[orientation=vertical]/tabs:justify-start",
      "data-[state=active]:text-foreground",
      "group-data-[variant=default]/tabs-list:data-[state=active]:bg-background group-data-[variant=default]/tabs-list:data-[state=active]:shadow-sm",
      "dark:group-data-[variant=default]/tabs-list:data-[state=active]:border-input dark:group-data-[variant=default]/tabs-list:data-[state=active]:bg-input/30",
      "group-data-[variant=line]/tabs-list:rounded-none group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:shadow-none",
      "group-data-[variant=line]/tabs-list:after:absolute group-data-[variant=line]/tabs-list:after:bg-foreground group-data-[variant=line]/tabs-list:after:opacity-0 group-data-[variant=line]/tabs-list:after:transition-opacity motion-reduce:group-data-[variant=line]/tabs-list:after:transition-none",
      "group-data-[variant=line]/tabs-list:group-data-[orientation=horizontal]/tabs:after:inset-x-0 group-data-[variant=line]/tabs-list:group-data-[orientation=horizontal]/tabs:after:-bottom-px group-data-[variant=line]/tabs-list:group-data-[orientation=horizontal]/tabs:after:h-0.5",
      "group-data-[variant=line]/tabs-list:group-data-[orientation=vertical]/tabs:after:inset-y-0 group-data-[variant=line]/tabs-list:group-data-[orientation=vertical]/tabs:after:-end-px group-data-[variant=line]/tabs-list:group-data-[orientation=vertical]/tabs:after:w-0.5",
      "group-data-[variant=line]/tabs-list:data-[state=active]:after:opacity-100",
      className,
    )}
    {...props}
  />
));
TabsTrigger.displayName = "TabsTrigger";

export const TabsContent = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    data-slot="tabs-content"
    className={cn(
      "flex-1 rounded-md text-sm outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
      className,
    )}
    {...props}
  />
));
TabsContent.displayName = "TabsContent";
