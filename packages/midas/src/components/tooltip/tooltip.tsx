"use client";

import { Tooltip as TooltipPrimitive } from "radix-ui";
import * as React from "react";
import { cn } from "../../lib/cn";

export function TooltipProvider({
  delayDuration = 0,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return <TooltipPrimitive.Provider delayDuration={delayDuration} {...props} />;
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

export const TooltipTrigger = React.forwardRef<
  React.ComponentRef<typeof TooltipPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Trigger>
>((props, ref) => <TooltipPrimitive.Trigger ref={ref} data-slot="tooltip-trigger" {...props} />);
TooltipTrigger.displayName = "TooltipTrigger";

export const TooltipContent = React.forwardRef<
  React.ComponentRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 6, children, ...props }, ref) => (
  <TooltipPrimitive.Portal>
    <TooltipPrimitive.Content
      ref={ref}
      data-slot="tooltip-content"
      sideOffset={sideOffset}
      className={cn(
        "z-50 grid w-fit min-w-32 max-w-xs gap-1.5 rounded-lg border border-border/50 bg-popover px-2.5 py-1.5 text-xs text-popover-foreground shadow-xl",
        "origin-(--radix-tooltip-content-transform-origin) animate-midas-in motion-reduce:animate-none",
        className,
      )}
      {...props}
    >
      {children}
    </TooltipPrimitive.Content>
  </TooltipPrimitive.Portal>
));
TooltipContent.displayName = "TooltipContent";

export const TooltipTitle = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="tooltip-title"
      className={cn("font-medium text-foreground", className)}
      {...props}
    />
  ),
);
TooltipTitle.displayName = "TooltipTitle";

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
        "flex w-full items-center gap-2 [&_svg]:size-3 [&_svg]:text-muted-foreground",
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
            "shrink-0 bg-[var(--midas-tooltip-color,var(--midas-primary))]",
            indicator === "dot" && "size-2.5 rounded-full",
            indicator === "line" && "h-3 w-1 rounded-[2px]",
          )}
        />
      )}
      <span className="text-muted-foreground">{label}</span>
      {value !== undefined && (
        <span className="ms-auto ps-4 font-medium tabular-nums text-foreground">{value}</span>
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
        "flex items-center justify-between gap-4 border-t border-border/50 pt-1.5 font-medium text-foreground tabular-nums",
        className,
      )}
      {...props}
    />
  ),
);
TooltipFooter.displayName = "TooltipFooter";
