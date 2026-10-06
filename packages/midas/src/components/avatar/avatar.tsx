"use client";

import { Avatar as AvatarPrimitive } from "radix-ui";
import * as React from "react";
import { cn } from "../../lib/cn";

export type AvatarSize = "sm" | "default" | "lg";

const customSize = (size: AvatarSize | number, style?: React.CSSProperties): React.CSSProperties =>
  typeof size === "number"
    ? ({
        "--midas-avatar-size": `${size}px`,
        width: size,
        height: size,
        ...style,
      } as React.CSSProperties)
    : (style ?? {});

export interface AvatarProps
  extends Omit<React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>, "size"> {
  size?: AvatarSize | number;
}

export const Avatar = React.forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Root>,
  AvatarProps
>(({ className, size = "default", style, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    data-slot="avatar"
    data-size={typeof size === "number" ? "custom" : size}
    style={customSize(size, style)}
    className={cn(
      "group/avatar relative flex size-8 shrink-0 select-none rounded-full",
      "data-[size=sm]:size-6 data-[size=lg]:size-10",
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
    className={cn("aspect-square size-full rounded-full object-cover", className)}
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
      "flex size-full items-center justify-center rounded-full text-sm",
      colorFrom
        ? [colorFor(colorFrom), "text-primary-foreground"]
        : "bg-muted text-muted-foreground",
      "group-data-[size=sm]/avatar:text-xs group-data-[size=custom]/avatar:text-[length:calc(var(--midas-avatar-size)*0.4)]",
      className,
    )}
    {...props}
  />
));
AvatarFallback.displayName = "AvatarFallback";

export interface AvatarBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "status" | "icon";
}

export const AvatarBadge = React.forwardRef<HTMLSpanElement, AvatarBadgeProps>(
  ({ className, variant = "status", ...props }, ref) => (
    <span
      ref={ref}
      data-slot="avatar-badge"
      data-variant={variant}
      className={cn(
        "absolute end-0 bottom-0 z-10 inline-flex size-2.5 items-center justify-center rounded-full ring-1 ring-background select-none",
        "group-data-[size=sm]/avatar:size-2 group-data-[size=lg]/avatar:size-3",
        "data-[variant=status]:bg-success",
        "data-[variant=icon]:bg-primary data-[variant=icon]:text-primary-foreground",
        "[&>svg]:size-2 group-data-[size=sm]/avatar:[&>svg]:hidden group-data-[size=lg]/avatar:[&>svg]:size-2.5",
        "group-data-[size=custom]/avatar:size-[max(0.5rem,calc(var(--midas-avatar-size)*0.28))]",
        className,
      )}
      {...props}
    />
  ),
);
AvatarBadge.displayName = "AvatarBadge";

export const AvatarGroup = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="avatar-group"
      className={cn(
        "group/avatar-group flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background",
        className,
      )}
      {...props}
    />
  ),
);
AvatarGroup.displayName = "AvatarGroup";

export interface AvatarGroupCountProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "size"> {
  size?: AvatarSize | number;
}

export const AvatarGroupCount = React.forwardRef<HTMLDivElement, AvatarGroupCountProps>(
  ({ className, size = "default", style, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="avatar-group-count"
      data-size={typeof size === "number" ? "custom" : size}
      style={customSize(size, style)}
      className={cn(
        "relative flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-sm text-muted-foreground ring-2 ring-background",
        "data-[size=sm]:size-6 data-[size=sm]:text-xs data-[size=lg]:size-10 data-[size=custom]:text-[length:calc(var(--midas-avatar-size)*0.4)]",
        "[&>svg]:size-4 data-[size=sm]:[&>svg]:size-3.5 data-[size=lg]:[&>svg]:size-4.5",
        className,
      )}
      {...props}
    />
  ),
);
AvatarGroupCount.displayName = "AvatarGroupCount";
