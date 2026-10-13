"use client";

import { IconCheck, IconPlus } from "@tabler/icons-react";
import { Avatar as AvatarPrimitive, Slot } from "radix-ui";
import * as React from "react";
import { cn } from "../../lib/cn";

export type AvatarSize = "xs" | "sm" | "default" | "md" | "lg" | "xl" | "2xl";
export type AvatarShape = "circle" | "rounded";

const normalizeSize = (size: AvatarSize | number) =>
  typeof size === "number" ? "custom" : size === "default" ? "sm" : size;

const customSize = (size: AvatarSize | number, style?: React.CSSProperties): React.CSSProperties =>
  typeof size === "number"
    ? ({
        "--midas-avatar-size": `${size}px`,
        width: size,
        height: size,
        ...style,
      } as React.CSSProperties)
    : (style ?? {});

const sizeClasses =
  "data-[size=xs]:size-6 data-[size=sm]:size-8 data-[size=md]:size-10 data-[size=lg]:size-12 data-[size=xl]:size-16 data-[size=2xl]:size-24";

export interface AvatarProps
  extends Omit<React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>, "size"> {
  size?: AvatarSize | number;
  shape?: AvatarShape;
  ring?: boolean;
}

export const Avatar = React.forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Root>,
  AvatarProps
>(({ className, size = "default", shape = "circle", ring = false, style, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    data-slot="avatar"
    data-size={normalizeSize(size)}
    data-shape={shape}
    style={customSize(size, style)}
    className={cn(
      "group/avatar relative flex shrink-0 select-none",
      sizeClasses,
      shape === "circle"
        ? "rounded-full"
        : "rounded-[25%] data-[size=xs]:rounded-sm data-[size=sm]:rounded-md data-[size=md]:rounded-lg data-[size=lg]:rounded-xl data-[size=xl]:rounded-[1rem] data-[size=2xl]:rounded-[1.5rem]",
      ring && "ring-2 ring-surface-canvas",
      className,
    )}
    {...props}
  />
));
Avatar.displayName = "Avatar";

export const AvatarImage = React.forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    data-slot="avatar-image"
    className={cn("aspect-square size-full rounded-[inherit] object-cover", className)}
    {...props}
  />
));
AvatarImage.displayName = "AvatarImage";

const fallbackColors = [
  "bg-chart-1",
  "bg-chart-2",
  "bg-chart-3",
  "bg-chart-4",
  "bg-chart-5",
  "bg-chart-6",
  "bg-chart-7",
  "bg-chart-8",
];

const colorFor = (source: string) => {
  let hash = 0;
  for (const char of source) hash = (hash * 31 + char.charCodeAt(0)) >>> 0;
  return fallbackColors[hash % fallbackColors.length];
};

export interface AvatarFallbackProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback> {
  colorFrom?: string;
}

export const AvatarFallback = React.forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Fallback>,
  AvatarFallbackProps
>(({ className, colorFrom, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    data-slot="avatar-fallback"
    data-color-from={colorFrom ? "" : undefined}
    className={cn(
      "flex size-full items-center justify-center rounded-[inherit] text-label-md",
      colorFrom
        ? [colorFor(colorFrom), "text-action-accent-content"]
        : "bg-surface-muted text-content-primary",
      "group-data-[size=xs]/avatar:text-[0.625rem] group-data-[size=sm]/avatar:text-label-sm group-data-[size=xl]/avatar:text-heading-md group-data-[size=2xl]/avatar:text-heading-lg group-data-[size=custom]/avatar:text-[length:calc(var(--midas-avatar-size)*0.4)]",
      "[&>svg]:size-[50%]",
      className,
    )}
    {...props}
  />
));
AvatarFallback.displayName = "AvatarFallback";

export type AvatarBadgeStatus = "online" | "away" | "busy" | "offline" | "verified" | "count";

const statusLabel: Record<AvatarBadgeStatus, string> = {
  online: "Online",
  away: "Ausente",
  busy: "Ocupado",
  offline: "Offline",
  verified: "Verificado",
  count: "Notificações",
};

export interface AvatarBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  status?: AvatarBadgeStatus;
  variant?: "status" | "icon";
}

export const AvatarBadge = React.forwardRef<HTMLSpanElement, AvatarBadgeProps>(
  ({ className, status, variant = "status", children, ...props }, ref) => {
    const resolved: AvatarBadgeStatus = status ?? (variant === "icon" ? "verified" : "online");
    const hasCustomChildren = React.Children.count(children) > 0;
    return (
      <span
        ref={ref}
        role="img"
        aria-label={statusLabel[resolved]}
        data-slot="avatar-badge"
        data-variant={variant}
        data-status={resolved}
        className={cn(
          "absolute end-0 bottom-0 z-10 inline-flex size-2.5 items-center justify-center rounded-full ring-2 ring-surface-canvas select-none",
          "group-data-[size=xs]/avatar:size-2 group-data-[size=xs]/avatar:ring-[1.5px] group-data-[size=sm]/avatar:size-2 group-data-[size=sm]/avatar:ring-[1.5px] group-data-[size=lg]/avatar:size-3.5 group-data-[size=xl]/avatar:size-4.5 group-data-[size=2xl]/avatar:size-4.5",
          "group-data-[size=custom]/avatar:size-[max(0.5rem,calc(var(--midas-avatar-size)*0.28))]",
          "data-[status=online]:bg-status-success-fill",
          "data-[status=away]:bg-status-warning-fill",
          "data-[status=busy]:bg-status-danger-fill",
          "data-[status=offline]:bg-surface-canvas data-[status=offline]:ring-border-strong data-[status=offline]:ring-1",
          "data-[status=verified]:bg-action-accent-bg data-[status=verified]:text-action-accent-content",
          "data-[status=count]:bg-status-danger-fill data-[status=count]:px-1 data-[status=count]:text-label-sm data-[status=count]:text-status-danger-on-fill",
          "data-[status=verified]:size-3 group-data-[size=md]/avatar:data-[status=verified]:size-4 group-data-[size=lg]/avatar:data-[status=verified]:size-5 group-data-[size=xl]/avatar:data-[status=verified]:size-6 group-data-[size=2xl]/avatar:data-[status=verified]:size-6",
          "data-[status=count]:size-auto data-[status=count]:min-h-3 data-[status=count]:min-w-3",
          "[&>svg]:size-[60%]",
          className,
        )}
        {...props}
      >
        {hasCustomChildren ? (
          children
        ) : resolved === "verified" ? (
          <IconCheck aria-hidden="true" stroke={3} />
        ) : resolved === "busy" ? (
          <span aria-hidden="true" className="h-0.5 w-1/2 rounded-xs bg-status-danger-on-fill" />
        ) : null}
      </span>
    );
  },
);
AvatarBadge.displayName = "AvatarBadge";

export interface AvatarAddProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: AvatarSize | number;
  shape?: AvatarShape;
}

export const AvatarAdd = React.forwardRef<HTMLButtonElement, AvatarAddProps>(
  ({ className, size = "default", shape = "circle", style, children, ...props }, ref) => (
    <button
      ref={ref}
      type="button"
      data-slot="avatar-add"
      data-size={normalizeSize(size)}
      data-shape={shape}
      style={customSize(size, style)}
      className={cn(
        "group/avatar inline-flex shrink-0 items-center justify-center border border-dashed border-border-strong text-content-secondary outline-none",
        "transition-[color,background-color,box-shadow] duration-150 motion-reduce:transition-none hover:bg-state-hover focus-visible:focus-ring",
        sizeClasses,
        shape === "circle" ? "rounded-full" : "rounded-[25%]",
        "[&>svg]:size-[45%]",
        className,
      )}
      {...props}
    >
      {children ?? <IconPlus aria-hidden="true" />}
    </button>
  ),
);
AvatarAdd.displayName = "AvatarAdd";

export type AvatarGroupSize = "sm" | "md" | "lg";

const groupOverlap: Record<AvatarGroupSize, string> = {
  sm: "-space-x-2",
  md: "-space-x-2.5",
  lg: "-space-x-3",
};

export interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: AvatarGroupSize;
}

export const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ className, size = "sm", ...props }, ref) => (
    <div
      ref={ref}
      data-slot="avatar-group"
      data-size={size}
      className={cn(
        "group/avatar-group flex items-center",
        groupOverlap[size],
        "*:relative *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-surface-canvas",
        "[&>*:nth-child(1)]:z-5 [&>*:nth-child(2)]:z-4 [&>*:nth-child(3)]:z-3 [&>*:nth-child(4)]:z-2 [&>*:nth-child(5)]:z-1",
        className,
      )}
      {...props}
    />
  ),
);
AvatarGroup.displayName = "AvatarGroup";

export interface AvatarGroupCountProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "size"> {
  size?: AvatarSize | number;
  asChild?: boolean;
}

export const AvatarGroupCount = React.forwardRef<HTMLDivElement, AvatarGroupCountProps>(
  ({ className, size = "default", style, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot.Root : "div";
    return (
      <Comp
        ref={ref}
        data-slot="avatar-group-count"
        data-size={normalizeSize(size)}
        style={customSize(size, style)}
        className={cn(
          "relative flex shrink-0 items-center justify-center rounded-full bg-surface-muted text-label-sm text-content-secondary ring-2 ring-surface-canvas outline-none focus-visible:focus-ring",
          sizeClasses,
          "data-[size=custom]:text-[length:calc(var(--midas-avatar-size)*0.4)]",
          "[&>svg]:size-4",
          className,
        )}
        {...props}
      />
    );
  },
);
AvatarGroupCount.displayName = "AvatarGroupCount";

export interface AvatarOptionProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean;
}

export const AvatarOption = React.forwardRef<HTMLButtonElement, AvatarOptionProps>(
  ({ className, selected = false, ...props }, ref) => (
    <button
      ref={ref}
      type="button"
      aria-pressed={selected}
      data-slot="avatar-option"
      data-state={selected ? "selected" : "default"}
      className={cn(
        "relative flex size-26 items-center justify-center overflow-hidden rounded-2xl border border-border-subtle bg-surface-default outline-none",
        "transition-[background-color,border-color,box-shadow] duration-150 motion-reduce:transition-none",
        "hover:bg-state-hover focus-visible:focus-ring",
        "data-[state=selected]:border-border-strong data-[state=selected]:bg-state-hover",
        "disabled:pointer-events-none disabled:opacity-disabled",
        className,
      )}
      {...props}
    />
  ),
);
AvatarOption.displayName = "AvatarOption";
