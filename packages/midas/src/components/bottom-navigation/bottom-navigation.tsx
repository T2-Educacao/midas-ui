import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "../../lib/cn";
import { NavItem, type NavItemProps } from "../sidebar/sidebar";

export const bottomNavigationVariants = cva(
  "group/bottom-navigation flex items-center text-content-primary",
  {
    variants: {
      variant: {
        bar: "w-full justify-around gap-1 border-t border-border-subtle bg-surface-default px-2 pb-[env(safe-area-inset-bottom)]",
        minimal:
          "w-full justify-around gap-1 border-t border-border-subtle bg-surface-default px-2 pb-[env(safe-area-inset-bottom)]",
        "glass-bar":
          "material-glass-strong w-full justify-around gap-1 border-t border-material-glass-border bg-material-glass-surface px-2 pb-[env(safe-area-inset-bottom)]",
        floating:
          "material-glass-strong mx-auto w-fit justify-center gap-1 rounded-pill border border-material-glass-border bg-material-glass-surface p-1 shadow-elevation-overlay",
        "icon-pill":
          "material-glass-strong mx-auto w-fit justify-center gap-1 rounded-pill border border-material-glass-border bg-material-glass-surface p-1 shadow-elevation-overlay",
        "center-action":
          "w-full justify-around gap-1 border-t border-border-subtle bg-surface-default px-2 pb-[env(safe-area-inset-bottom)]",
      },
      showLight: {
        true: "",
        false: "",
      },
    },
    defaultVariants: { variant: "bar", showLight: false },
  },
);

export interface BottomNavigationProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof bottomNavigationVariants> {}

export const BottomNavigation = React.forwardRef<HTMLElement, BottomNavigationProps>(
  ({ className, variant, showLight, "aria-label": ariaLabel = "Principal", ...props }, ref) => (
    <nav
      ref={ref}
      aria-label={ariaLabel}
      data-slot="bottom-navigation"
      data-variant={variant ?? "bar"}
      data-light={showLight ? "true" : undefined}
      className={cn(bottomNavigationVariants({ variant, showLight }), className)}
      {...props}
    />
  ),
);
BottomNavigation.displayName = "BottomNavigation";

export const BottomNavigationItem = React.forwardRef<HTMLElement, NavItemProps>(
  ({ className, type, emphasis, ...props }, ref) => (
    <NavItem
      ref={ref}
      data-slot="bottom-navigation-item"
      type={type ?? "bottom"}
      emphasis={emphasis}
      className={cn(
        "group-data-[variant=minimal]/bottom-navigation:aria-[current=page]:text-content-primary",
        "group-data-[light=true]/bottom-navigation:aria-[current=page]:bg-selection-bg",
        className,
      )}
      {...props}
    />
  ),
);
BottomNavigationItem.displayName = "BottomNavigationItem";

export const BottomNavigationAction = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, type = "button", ...props }, ref) => (
  <button
    ref={ref}
    type={type}
    data-slot="bottom-navigation-action"
    className={cn(
      "-mt-6 inline-flex size-control-2xl shrink-0 items-center justify-center rounded-pill bg-action-accent-bg text-action-accent-content shadow-elevation-raised outline-none",
      "transition-[background-color,box-shadow] duration-150 motion-reduce:transition-none",
      "hover:bg-action-accent-bg-hover active:bg-action-accent-bg-pressed focus-visible:focus-ring",
      "[&_svg:not([class*='size-'])]:size-icon-lg",
      className,
    )}
    {...props}
  />
));
BottomNavigationAction.displayName = "BottomNavigationAction";
