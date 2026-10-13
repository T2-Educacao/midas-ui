"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { Tabs as TabsPrimitive } from "radix-ui";
import * as React from "react";
import { cn } from "../../lib/cn";

export type TabsType = "underline" | "pill" | "segmented" | "plain";
export type TabsVariant = TabsType | "default" | "line";
export type TabsSize = "md" | "sm";
export type TabsTone = "brand" | "neutral";
export type TabsSurface = "solid" | "glass";

interface TabsListContextValue {
  type: TabsType;
  size: TabsSize;
  tone: TabsTone;
  surface: TabsSurface;
}

const TabsListContext = React.createContext<TabsListContextValue>({
  type: "segmented",
  size: "md",
  tone: "brand",
  surface: "solid",
});

const typeByVariant: Record<TabsVariant, TabsType> = {
  default: "segmented",
  line: "underline",
  underline: "underline",
  pill: "pill",
  segmented: "segmented",
  plain: "plain",
};

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
    "group/tabs-list inline-flex w-fit items-center justify-center text-content-secondary",
    "group-data-[orientation=vertical]/tabs:h-fit group-data-[orientation=vertical]/tabs:flex-col group-data-[orientation=vertical]/tabs:items-stretch",
  ],
  {
    variants: {
      type: {
        underline: [
          "gap-0 rounded-none bg-transparent",
          "group-data-[orientation=horizontal]/tabs:border-b group-data-[orientation=horizontal]/tabs:border-border-subtle",
          "group-data-[orientation=vertical]/tabs:border-e group-data-[orientation=vertical]/tabs:border-border-subtle",
        ],
        pill: "gap-1 bg-transparent",
        segmented: "gap-1 rounded-control bg-surface-muted p-1",
        plain: "gap-0 bg-transparent",
      },
      surface: {
        solid: "",
        glass: "",
      },
    },
    compoundVariants: [
      {
        type: ["pill", "segmented"],
        surface: "glass",
        className: "material-glass rounded-pill bg-material-glass-surface p-1",
      },
    ],
    defaultVariants: {
      type: "segmented",
      surface: "solid",
    },
  },
);

export interface TabsListProps
  extends Omit<React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>, "type">,
    Omit<VariantProps<typeof tabsListVariants>, "type"> {
  variant?: TabsVariant;
  size?: TabsSize;
  tone?: TabsTone;
}

export const TabsList = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.List>,
  TabsListProps
>(({ className, variant = "default", size = "md", tone = "brand", surface, ...props }, ref) => {
  const type = typeByVariant[variant];
  const resolvedSurface = surface ?? "solid";
  const context = React.useMemo(
    () => ({ type, size, tone, surface: resolvedSurface }),
    [type, size, tone, resolvedSurface],
  );
  return (
    <TabsListContext.Provider value={context}>
      <TabsPrimitive.List
        ref={ref}
        data-slot="tabs-list"
        data-variant={variant}
        data-size={size}
        data-tone={tone}
        data-surface={resolvedSurface}
        className={cn(tabsListVariants({ type, surface: resolvedSurface }), className)}
        {...props}
      />
    </TabsListContext.Provider>
  );
});
TabsList.displayName = "TabsList";

export const tabsTriggerVariants = cva(
  [
    "relative inline-flex flex-1 items-center justify-center whitespace-nowrap border border-transparent text-content-secondary outline-none",
    "transition-[color,background-color,border-color,box-shadow] duration-150 motion-reduce:transition-none",
    "hover:text-content-primary focus-visible:focus-ring",
    "disabled:pointer-events-none disabled:text-content-disabled",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0",
    "group-data-[orientation=vertical]/tabs:justify-start",
    "data-[state=active]:text-content-primary",
  ],
  {
    variants: {
      type: {
        underline: [
          "rounded-none hover:bg-state-hover",
          "after:absolute after:bg-transparent after:transition-colors motion-reduce:after:transition-none",
          "group-data-[orientation=horizontal]/tabs:after:inset-x-0 group-data-[orientation=horizontal]/tabs:after:-bottom-px group-data-[orientation=horizontal]/tabs:after:h-0.5",
          "group-data-[orientation=vertical]/tabs:after:inset-y-0 group-data-[orientation=vertical]/tabs:after:-end-px group-data-[orientation=vertical]/tabs:after:w-0.5",
        ],
        pill: "rounded-pill hover:bg-state-hover",
        segmented: "rounded-control hover:bg-state-hover",
        plain: "rounded-control hover:bg-state-hover",
      },
      size: {
        md: "h-control-lg gap-2 px-4 text-label-md [&_svg:not([class*='size-'])]:size-icon-md",
        sm: "h-control-md gap-1.5 px-3 text-label-sm [&_svg:not([class*='size-'])]:size-icon-sm",
      },
      tone: {
        brand: "",
        neutral: "",
      },
    },
    compoundVariants: [
      {
        type: "underline",
        tone: "brand",
        className:
          "data-[state=active]:text-selection-content data-[state=active]:after:bg-action-accent-bg",
      },
      {
        type: "underline",
        tone: "neutral",
        className: "data-[state=active]:after:bg-content-primary",
      },
      {
        type: "pill",
        tone: "brand",
        className:
          "data-[state=active]:border-selection-border data-[state=active]:bg-selection-bg data-[state=active]:text-selection-content",
      },
      {
        type: "pill",
        tone: "neutral",
        className:
          "data-[state=active]:bg-action-primary-bg data-[state=active]:text-action-primary-content",
      },
      {
        type: "segmented",
        tone: "brand",
        className:
          "data-[state=active]:border-border-subtle data-[state=active]:bg-surface-default data-[state=active]:text-selection-content data-[state=active]:shadow-elevation-control",
      },
      {
        type: "segmented",
        tone: "neutral",
        className:
          "data-[state=active]:border-border-subtle data-[state=active]:bg-surface-default data-[state=active]:shadow-elevation-control",
      },
      {
        type: "plain",
        tone: "brand",
        className: "data-[state=active]:bg-selection-bg data-[state=active]:text-selection-content",
      },
      {
        type: "plain",
        tone: "neutral",
        className: "data-[state=active]:bg-state-pressed",
      },
    ],
    defaultVariants: {
      type: "segmented",
      size: "md",
      tone: "brand",
    },
  },
);

export interface TabsTriggerProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> {
  icon?: React.ReactNode;
  count?: React.ReactNode;
}

export const TabsTrigger = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Trigger>,
  TabsTriggerProps
>(({ className, icon, count, children, ...props }, ref) => {
  const { type, size, tone } = React.useContext(TabsListContext);
  return (
    <TabsPrimitive.Trigger
      ref={ref}
      data-slot="tabs-trigger"
      className={cn(tabsTriggerVariants({ type, size, tone }), className)}
      {...props}
    >
      {icon}
      {children}
      {count !== undefined && count !== null ? (
        <span data-slot="tabs-count" className="text-mono-sm">
          {count}
        </span>
      ) : null}
    </TabsPrimitive.Trigger>
  );
});
TabsTrigger.displayName = "TabsTrigger";

export const TabsContent = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    data-slot="tabs-content"
    className={cn(
      "flex-1 rounded-control text-body-md outline-none focus-visible:focus-ring",
      className,
    )}
    {...props}
  />
));
TabsContent.displayName = "TabsContent";
