"use client";

import { cva } from "class-variance-authority";
import { Slot } from "radix-ui";
import * as React from "react";
import { cn } from "../../lib/cn";

const SidebarContext = React.createContext(false);

export interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
  collapsed?: boolean;
}

export const Sidebar = React.forwardRef<HTMLElement, SidebarProps>(
  ({ className, collapsed = false, ...props }, ref) => (
    <SidebarContext.Provider value={collapsed}>
      <aside
        ref={ref}
        data-slot="sidebar"
        data-collapsed={collapsed ? "true" : "false"}
        className={cn(
          "flex h-full w-64 shrink-0 flex-col border-e border-border bg-card text-card-foreground data-[collapsed=true]:w-16",
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
      className={cn("flex items-center gap-2 border-b border-border p-4", className)}
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
      className={cn("mt-auto flex items-center gap-2 border-t border-border p-4", className)}
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
        "px-3 py-1 text-xs font-medium text-muted-foreground",
        collapsed && "sr-only",
        className,
      )}
      {...props}
    />
  );
});
SidebarGroupLabel.displayName = "SidebarGroupLabel";

export const navItemVariants = cva(
  [
    "relative flex w-full items-center gap-3 rounded-md px-3 py-2 text-start text-sm font-medium outline-none",
    "transition-[color,background-color,box-shadow] duration-150 motion-reduce:transition-none",
    "focus-visible:ring-3 focus-visible:ring-ring/50",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-5",
  ],
  {
    variants: {
      active: {
        true: "bg-accent text-accent-foreground",
        false: "text-muted-foreground hover:bg-accent/60 hover:text-foreground",
      },
      collapsed: {
        true: "justify-center px-0",
        false: "",
      },
    },
    defaultVariants: {
      active: false,
      collapsed: false,
    },
  },
);

export interface NavItemProps extends React.HTMLAttributes<HTMLElement> {
  asChild?: boolean;
  icon?: React.ReactNode;
  active?: boolean;
  badge?: React.ReactNode;
}

export const NavItem = React.forwardRef<HTMLElement, NavItemProps>(
  ({ className, asChild = false, icon, active = false, badge, children, title, ...props }, ref) => {
    const collapsed = React.useContext(SidebarContext);
    const Comp = (asChild ? Slot.Root : "button") as React.ElementType;
    const child = asChild && React.isValidElement(children) ? children : null;
    const labelNode: React.ReactNode = child
      ? (child.props as { children?: React.ReactNode }).children
      : children;

    const content = (
      <>
        {icon}
        <span className={cn("min-w-0 flex-1 truncate", collapsed && "sr-only")}>{labelNode}</span>
        {badge && !collapsed ? <span className="ms-auto shrink-0">{badge}</span> : null}
      </>
    );

    const resolvedTitle = collapsed
      ? (title ?? (typeof labelNode === "string" ? labelNode : undefined))
      : title;

    return (
      <Comp
        ref={ref as React.Ref<HTMLButtonElement>}
        data-slot="nav-item"
        aria-current={active ? "page" : undefined}
        title={resolvedTitle}
        {...(asChild ? {} : { type: "button" })}
        className={cn(navItemVariants({ active, collapsed }), className)}
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
