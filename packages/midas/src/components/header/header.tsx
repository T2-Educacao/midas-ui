import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "../../lib/cn";
import { NavItem, type NavItemProps } from "../sidebar/sidebar";

export const headerVariants = cva(
  "group/header relative flex h-14 w-full items-center gap-4 px-4 text-content-primary md:h-16 md:px-6",
  {
    variants: {
      variant: {
        transparent: "bg-transparent",
        glass:
          "material-glass-strong border-b border-material-glass-border bg-material-glass-surface",
        solid: "border-b border-border-subtle bg-surface-default",
        floating:
          "material-glass-strong mx-auto w-[calc(100%-2rem)] rounded-pill border border-material-glass-border bg-material-glass-surface shadow-elevation-overlay",
      },
      showLight: {
        true: "",
        false: "",
      },
    },
    defaultVariants: { variant: "transparent", showLight: false },
  },
);

export interface HeaderProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof headerVariants> {}

export const Header = React.forwardRef<HTMLElement, HeaderProps>(
  ({ className, variant, showLight, ...props }, ref) => (
    <header
      ref={ref}
      data-slot="header"
      data-variant={variant ?? "transparent"}
      data-light={showLight ? "true" : undefined}
      className={cn(headerVariants({ variant, showLight }), className)}
      {...props}
    />
  ),
);
Header.displayName = "Header";

export const HeaderBrand = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="header-brand"
      className={cn("flex shrink-0 items-center gap-2", className)}
      {...props}
    />
  ),
);
HeaderBrand.displayName = "HeaderBrand";

export const HeaderNav = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, "aria-label": ariaLabel = "Principal", children, ...props }, ref) => (
    <nav
      ref={ref}
      aria-label={ariaLabel}
      data-slot="header-nav"
      className={cn("hidden flex-1 items-center md:flex", className)}
      {...props}
    >
      <ul className="flex items-center gap-1">{children}</ul>
    </nav>
  ),
);
HeaderNav.displayName = "HeaderNav";

export const HeaderNavItem = React.forwardRef<HTMLElement, NavItemProps>(
  ({ className, ...props }, ref) => (
    <li data-slot="header-nav-item" className="flex">
      <NavItem
        ref={ref}
        type="header"
        className={cn(
          "group-data-[light=true]/header:aria-[current=page]:bg-linear-to-b group-data-[light=true]/header:aria-[current=page]:from-transparent group-data-[light=true]/header:aria-[current=page]:to-selection-bg",
          className,
        )}
        {...props}
      />
    </li>
  ),
);
HeaderNavItem.displayName = "HeaderNavItem";

export const HeaderActions = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="header-actions"
      className={cn("ms-auto flex shrink-0 items-center gap-2", className)}
      {...props}
    />
  ),
);
HeaderActions.displayName = "HeaderActions";
