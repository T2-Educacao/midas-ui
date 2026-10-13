"use client";

import { IconChevronDown } from "@tabler/icons-react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";
import * as React from "react";
import { cn } from "../../lib/cn";

const SidebarContext = React.createContext(false);

export type SidebarType = "full" | "basic" | "minimal";
export type SidebarSurface = "solid" | "glass" | "inverse";

export interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
  collapsed?: boolean;
  type?: SidebarType;
  surface?: SidebarSurface;
}

export const Sidebar = React.forwardRef<HTMLElement, SidebarProps>(
  ({ className, collapsed = false, type = "full", surface = "solid", ...props }, ref) => (
    <SidebarContext.Provider value={collapsed}>
      <aside
        ref={ref}
        data-slot="sidebar"
        data-collapsed={collapsed ? "true" : "false"}
        data-type={type}
        data-surface={surface}
        data-theme={surface === "inverse" ? "dark" : undefined}
        className={cn(
          "group/sidebar flex h-full w-64 shrink-0 flex-col border-e text-content-primary data-[collapsed=true]:w-16",
          surface === "glass"
            ? "material-glass-strong border-material-glass-border bg-material-glass-surface"
            : "border-border-subtle bg-surface-default",
          className,
        )}
        {...props}
      />
    </SidebarContext.Provider>
  ),
);
Sidebar.displayName = "Sidebar";

export const SidebarHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="sidebar-header"
      className={cn("flex items-center gap-2 p-4", className)}
      {...props}
    />
  ),
);
SidebarHeader.displayName = "SidebarHeader";

export const SidebarContent = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => (
    <nav
      ref={ref}
      data-slot="sidebar-content"
      className={cn("flex flex-1 flex-col gap-4 overflow-y-auto p-2", className)}
      {...props}
    />
  ),
);
SidebarContent.displayName = "SidebarContent";

export const SidebarFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="sidebar-footer"
      className={cn("mt-auto flex items-center gap-2 border-t border-border-subtle p-4", className)}
      {...props}
    />
  ),
);
SidebarFooter.displayName = "SidebarFooter";

export const SidebarGroup = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      role="group"
      data-slot="sidebar-group"
      className={cn("flex flex-col gap-1", className)}
      {...props}
    />
  ),
);
SidebarGroup.displayName = "SidebarGroup";

export const SidebarGroupLabel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const collapsed = React.useContext(SidebarContext);
  return (
    <div
      ref={ref}
      data-slot="sidebar-group-label"
      className={cn(
        "px-3 py-1 text-mono-overline text-content-secondary",
        collapsed && "sr-only",
        className,
      )}
      {...props}
    />
  );
});
SidebarGroupLabel.displayName = "SidebarGroupLabel";

export type NavItemType = "sidebar" | "sub" | "rail" | "header" | "bottom" | "bottom-icon";

export const navItemVariants = cva(
  [
    "group/nav-item relative flex items-center text-start outline-none",
    "transition-[color,background-color,border-color,box-shadow] duration-150 motion-reduce:transition-none",
    "focus-visible:focus-ring",
    "disabled:pointer-events-none disabled:text-content-disabled aria-disabled:pointer-events-none aria-disabled:text-content-disabled",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0",
  ],
  {
    variants: {
      type: {
        sidebar:
          "w-full gap-3 rounded-control border border-transparent px-3 text-label-md h-control-lg [&_svg:not([class*='size-'])]:size-icon-md",
        sub: "w-full gap-3 rounded-control border border-transparent ps-9 pe-3 text-label-md h-control-md [&_svg:not([class*='size-'])]:size-icon-sm",
        rail: "size-control-xl flex-col justify-center rounded-control border border-transparent [&_svg:not([class*='size-'])]:size-icon-lg",
        header:
          "h-control-lg gap-2 rounded-control px-3 text-label-md [&_svg:not([class*='size-'])]:size-icon-sm",
        bottom:
          "min-h-control-xl flex-1 flex-col justify-center gap-1 rounded-control px-2 text-label-sm [&_svg:not([class*='size-'])]:size-icon-lg",
        "bottom-icon":
          "size-control-xl justify-center rounded-pill [&_svg:not([class*='size-'])]:size-icon-lg",
      },
      active: {
        true: "",
        false: "",
      },
      emphasis: {
        selected: "",
        neutral: "",
      },
      collapsed: {
        true: "justify-center px-0",
        false: "",
      },
    },
    compoundVariants: [
      {
        active: false,
        className:
          "text-content-secondary hover:border-border-subtle hover:bg-state-hover hover:text-content-primary",
      },
      {
        active: true,
        emphasis: "selected",
        type: ["sidebar", "sub", "rail"],
        className:
          "border-selection-border bg-linear-to-r from-selection-bg to-transparent text-selection-content",
      },
      {
        active: true,
        emphasis: "neutral",
        type: ["sidebar", "sub", "rail"],
        className: "bg-state-pressed text-content-primary",
      },
      {
        active: true,
        emphasis: "selected",
        type: ["bottom", "bottom-icon"],
        className: "text-selection-content",
      },
      {
        active: true,
        emphasis: "neutral",
        type: ["bottom", "bottom-icon"],
        className: "text-content-primary",
      },
      {
        active: true,
        type: "header",
        className:
          "text-content-primary after:absolute after:inset-x-3 after:-bottom-px after:h-0.5 after:rounded-pill after:bg-action-accent-bg",
      },
      {
        active: false,
        type: "header",
        className: "hover:border-transparent",
      },
      {
        active: false,
        type: ["bottom", "bottom-icon"],
        className: "hover:border-transparent hover:bg-transparent",
      },
    ],
    defaultVariants: {
      type: "sidebar",
      active: false,
      emphasis: "selected",
      collapsed: false,
    },
  },
);

export interface NavItemProps
  extends React.HTMLAttributes<HTMLElement>,
    Omit<VariantProps<typeof navItemVariants>, "collapsed" | "active"> {
  asChild?: boolean;
  icon?: React.ReactNode;
  active?: boolean;
  badge?: React.ReactNode;
  showChevron?: boolean;
  expanded?: boolean;
  disabled?: boolean;
}

export const NavItem = React.forwardRef<HTMLElement, NavItemProps>(
  (
    {
      className,
      asChild = false,
      icon,
      active = false,
      badge,
      type = "sidebar",
      emphasis,
      showChevron = false,
      expanded,
      disabled,
      children,
      title,
      ...props
    },
    ref,
  ) => {
    const sidebarCollapsed = React.useContext(SidebarContext);
    const iconOnly = type === "rail" || type === "bottom-icon";
    const collapsed = sidebarCollapsed || iconOnly;
    const Comp = (asChild ? Slot.Root : "button") as React.ElementType;
    const child = asChild && React.isValidElement(children) ? children : null;
    const labelNode: React.ReactNode = child
      ? (child.props as { children?: React.ReactNode }).children
      : children;

    const content = (
      <>
        {type === "sub" ? (
          <span
            aria-hidden="true"
            className={cn(
              "absolute start-4 size-1.5 rounded-pill bg-border-strong",
              active && "bg-action-accent-bg",
            )}
          />
        ) : null}
        {icon}
        <span
          className={cn(
            "min-w-0 flex-1 truncate",
            (type === "bottom" || type === "rail") && "flex-none",
            collapsed && "sr-only",
          )}
        >
          {labelNode}
        </span>
        {badge && !collapsed ? (
          <span data-slot="nav-item-badge" className="ms-auto shrink-0 text-mono-sm">
            {badge}
          </span>
        ) : null}
        {showChevron && !collapsed ? (
          <IconChevronDown
            aria-hidden="true"
            className="size-icon-sm shrink-0 transition-transform group-aria-expanded/nav-item:rotate-180 motion-reduce:transition-none"
          />
        ) : null}
      </>
    );

    const resolvedTitle = collapsed
      ? (title ?? (typeof labelNode === "string" ? labelNode : undefined))
      : title;

    return (
      <Comp
        ref={ref as React.Ref<HTMLButtonElement>}
        data-slot="nav-item"
        data-type={type}
        aria-current={active ? "page" : undefined}
        aria-expanded={showChevron ? expanded : undefined}
        title={resolvedTitle}
        {...(asChild ? {} : { type: "button", disabled })}
        className={cn(
          navItemVariants({ type, active, emphasis, collapsed: sidebarCollapsed && !iconOnly }),
          "group-data-[type=minimal]/sidebar:data-[type=sidebar]:aria-[current=page]:border-transparent group-data-[type=minimal]/sidebar:aria-[current=page]:bg-state-pressed group-data-[type=minimal]/sidebar:aria-[current=page]:from-transparent group-data-[type=minimal]/sidebar:aria-[current=page]:text-content-primary",
          className,
        )}
        {...props}
      >
        {child
          ? React.cloneElement(child as React.ReactElement<{ children?: React.ReactNode }>, {
              children: content,
            })
          : content}
      </Comp>
    );
  },
);
NavItem.displayName = "NavItem";
