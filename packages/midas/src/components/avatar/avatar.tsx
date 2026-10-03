"use client";

import { Avatar as AvatarPrimitive } from "radix-ui";
import * as React from "react";
import { cn } from "../../lib/cn";

export type AvatarSize = "sm" | "default" | "lg";

export interface AvatarProps extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> {
  size?: AvatarSize;
}

export const Avatar = React.forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Root>,
  AvatarProps
>(({ className, size = "default", ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    data-slot="avatar"
    data-size={size}
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

export const AvatarFallback = React.forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    data-slot="avatar-fallback"
    className={cn(
      "flex size-full items-center justify-center rounded-full bg-muted text-sm text-muted-foreground",
      "group-data-[size=sm]/avatar:text-xs",
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

export interface AvatarGroupCountProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: AvatarSize;
}

export const AvatarGroupCount = React.forwardRef<HTMLDivElement, AvatarGroupCountProps>(
  ({ className, size = "default", ...props }, ref) => (
    <div
      ref={ref}
      data-slot="avatar-group-count"
      data-size={size}
      className={cn(
        "relative flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-sm text-muted-foreground ring-2 ring-background",
        "data-[size=sm]:size-6 data-[size=sm]:text-xs data-[size=lg]:size-10",
        "[&>svg]:size-4 data-[size=sm]:[&>svg]:size-3.5 data-[size=lg]:[&>svg]:size-4.5",
        className,
      )}
      {...props}
    />
  ),
);
AvatarGroupCount.displayName = "AvatarGroupCount";
