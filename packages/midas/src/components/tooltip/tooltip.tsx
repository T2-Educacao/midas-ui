"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { Tooltip as TooltipPrimitive } from "radix-ui";
import * as React from "react";
import { cn } from "../../lib/cn";

export function TooltipProvider({
  delayDuration = 400,
  skipDelayDuration = 0,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return (
    <TooltipPrimitive.Provider
      delayDuration={delayDuration}
      skipDelayDuration={skipDelayDuration}
      {...props}
    />
  );
}

export function Tooltip({
  delayDuration,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  return (
    <TooltipProvider delayDuration={delayDuration}>
      <TooltipPrimitive.Root data-slot="tooltip" {...props} />
    </TooltipProvider>
  );
}

const focusable = { tabIndex: 0 };

export const TooltipTrigger = React.forwardRef<
  React.ComponentRef<typeof TooltipPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Trigger>
>(({ asChild, children, ...props }, ref) => {
  const child = asChild && React.isValidElement(children) ? children : null;
  const childDisabled =
    child !== null && (child.props as { disabled?: boolean } | undefined)?.disabled === true;

  if (childDisabled) {
    return (
      <TooltipPrimitive.Trigger asChild ref={ref} data-slot="tooltip-trigger" {...props}>
        <span {...focusable} className="inline-flex">
          {children}
        </span>
      </TooltipPrimitive.Trigger>
    );
  }

  return (
    <TooltipPrimitive.Trigger asChild={asChild} ref={ref} data-slot="tooltip-trigger" {...props}>
      {children}
    </TooltipPrimitive.Trigger>
  );
});
TooltipTrigger.displayName = "TooltipTrigger";

export const tooltipVariants = cva("border text-label-sm", {
  variants: {
    appearance: {
      inverse:
        "border-transparent bg-action-primary-bg text-action-primary-content shadow-elevation-raised",
      light:
        "border-border-subtle bg-overlay-surface text-content-primary shadow-elevation-overlay",
      glass:
        "border-material-glass-border bg-material-glass-surface text-content-primary backdrop-blur-midas-lg",
    },
  },
  defaultVariants: { appearance: "inverse" },
});

const tooltipArrowFill = {
  inverse: "fill-action-primary-bg",
  light: "fill-overlay-surface",
  glass: "fill-material-glass-surface",
};

export interface TooltipContentProps
  extends React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>,
    VariantProps<typeof tooltipVariants> {
  arrow?: boolean;
  rich?: boolean;
}

export const TooltipContent = React.forwardRef<
  React.ComponentRef<typeof TooltipPrimitive.Content>,
  TooltipContentProps
>(
  (
    { className, sideOffset = 6, appearance, arrow = true, rich = false, children, ...props },
    ref,
  ) => (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        ref={ref}
        data-slot="tooltip-content"
        data-appearance={appearance ?? "inverse"}
        sideOffset={sideOffset}
        className={cn(
          tooltipVariants({ appearance }),
          "z-(--midas-z-popup) flex w-fit items-center gap-2 rounded-control px-2.5 py-1.5",
          rich && "max-w-60 flex-col items-stretch gap-1 px-3 py-2.5 text-body-sm",
          "origin-(--radix-tooltip-content-transform-origin) animate-midas-in motion-reduce:animate-none",
          className,
        )}
        {...props}
      >
        {children}
        {arrow && (
          <TooltipPrimitive.Arrow
            data-slot="tooltip-arrow"
            width={12}
            height={6}
            className={tooltipArrowFill[appearance ?? "inverse"]}
          />
        )}
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  ),
);
TooltipContent.displayName = "TooltipContent";

export const TooltipTitle = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="tooltip-title"
      className={cn("text-label-md", className)}
      {...props}
    />
  ),
);
TooltipTitle.displayName = "TooltipTitle";

export const TooltipDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="tooltip-description"
    className={cn("text-body-sm opacity-70", className)}
    {...props}
  />
));
TooltipDescription.displayName = "TooltipDescription";

export const TooltipShortcut = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => (
    <kbd
      ref={ref}
      data-slot="tooltip-shortcut"
      className={cn(
        "inline-flex h-5 items-center rounded-xs border border-current/20 px-1.5 text-mono-sm opacity-70",
        className,
      )}
      {...props}
    />
  ),
);
TooltipShortcut.displayName = "TooltipShortcut";

export interface TooltipItemProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "color"> {
  label: React.ReactNode;
  value?: React.ReactNode;
  color?: string;
  indicator?: "dot" | "line" | "none";
  icon?: React.ReactNode;
}

export const TooltipItem = React.forwardRef<HTMLDivElement, TooltipItemProps>(
  ({ className, label, value, color, indicator = "dot", icon, style, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="tooltip-item"
      className={cn(
        "flex w-full items-center gap-2 text-body-sm [&_svg]:size-icon-xs [&_svg]:opacity-70",
        className,
      )}
      style={{ "--midas-tooltip-color": color, ...style } as React.CSSProperties}
      {...props}
    >
      {icon}
      {!icon && indicator !== "none" && (
        <span
          aria-hidden
          data-indicator={indicator}
          className={cn(
            "shrink-0 bg-[var(--midas-tooltip-color,var(--midas-chart-1))]",
            indicator === "dot" && "size-2 rounded-pill",
            indicator === "line" && "h-3 w-1 rounded-xs",
          )}
        />
      )}
      <span className="opacity-70">{label}</span>
      {value !== undefined && (
        <span className="ms-auto ps-4 text-label-md tabular-nums">{value}</span>
      )}
    </div>
  ),
);
TooltipItem.displayName = "TooltipItem";

export const TooltipFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="tooltip-footer"
      className={cn(
        "flex items-center justify-between gap-4 border-t border-current/20 pt-2 text-label-md tabular-nums",
        className,
      )}
      {...props}
    />
  ),
);
TooltipFooter.displayName = "TooltipFooter";

export const chartTooltipVariants = cva(
  "flex w-fit min-w-40 max-w-64 flex-col gap-2 rounded-overlay p-3 text-body-sm",
  {
    variants: {
      appearance: {
        inverse: tooltipVariants({ appearance: "inverse" }),
        light: tooltipVariants({ appearance: "light" }),
        glass: tooltipVariants({ appearance: "glass" }),
      },
    },
    defaultVariants: { appearance: "inverse" },
  },
);

export interface ChartTooltipProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title">,
    VariantProps<typeof chartTooltipVariants> {
  title?: React.ReactNode;
}

export const ChartTooltip = React.forwardRef<HTMLDivElement, ChartTooltipProps>(
  ({ className, appearance, title, children, ...props }, ref) => (
    <div
      ref={ref}
      role="tooltip"
      data-slot="chart-tooltip"
      data-appearance={appearance ?? "inverse"}
      className={cn(chartTooltipVariants({ appearance }), className)}
      {...props}
    >
      {title && (
        <div data-slot="chart-tooltip-title" className="text-body-sm opacity-70">
          {title}
        </div>
      )}
      {children}
    </div>
  ),
);
ChartTooltip.displayName = "ChartTooltip";

export const tooltipDeltaVariants = cva(
  "inline-flex h-5 items-center rounded-pill px-1.5 text-label-sm tabular-nums",
  {
    variants: {
      trend: {
        up: "bg-status-success-subtle text-status-success-content",
        down: "bg-status-danger-subtle text-status-danger-content",
      },
    },
    defaultVariants: { trend: "up" },
  },
);

export interface TooltipDeltaProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children">,
    VariantProps<typeof tooltipDeltaVariants> {
  value: React.ReactNode;
  change: React.ReactNode;
  caption?: React.ReactNode;
}

export const TooltipDelta = React.forwardRef<HTMLDivElement, TooltipDeltaProps>(
  ({ className, value, change, caption, trend = "up", ...props }, ref) => (
    <div ref={ref} data-slot="tooltip-delta" className={cn("grid gap-2", className)} {...props}>
      <div className="flex items-center gap-2">
        <span className="text-heading-sm tabular-nums">{value}</span>
        <span className={tooltipDeltaVariants({ trend })}>
          <span aria-hidden>{trend === "down" ? "▼" : "▲"}</span>
          <span className="ms-1">{change}</span>
        </span>
      </div>
      {caption && <span className="text-body-sm opacity-70">{caption}</span>}
    </div>
  ),
);
TooltipDelta.displayName = "TooltipDelta";
