"use client";

import {
  IconCheck,
  IconChevronDown,
  IconChevronRight,
  IconCircleFilled,
} from "@tabler/icons-react";
import { cva, type VariantProps } from "class-variance-authority";
import { DropdownMenu as DropdownMenuPrimitive } from "radix-ui";
import * as React from "react";
import { cn } from "../../lib/cn";
import { type OverlayTone, overlayAppearance } from "../../lib/overlay-styles";

export const DropdownMenu = DropdownMenuPrimitive.Root;
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
export const DropdownMenuGroup = DropdownMenuPrimitive.Group;
export const DropdownMenuPortal = DropdownMenuPrimitive.Portal;
export const DropdownMenuSub = DropdownMenuPrimitive.Sub;
export const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

export const dropdownMenuContentVariants = cva(
  [
    "z-(--midas-z-popup) min-w-56 overflow-y-auto overflow-x-hidden rounded-overlay border p-1.5 text-content-primary shadow-elevation-overlay outline-none",
    "max-h-(--radix-dropdown-menu-content-available-height) origin-(--radix-dropdown-menu-content-transform-origin)",
    "animate-midas-in motion-reduce:animate-none",
  ],
  {
    variants: {
      appearance: overlayAppearance,
    },
    defaultVariants: { appearance: "solid" },
  },
);

export const dropdownMenuItemVariants = cva(
  [
    "relative flex min-h-9 cursor-default select-none items-center gap-2.5 rounded-lg px-2.5 py-2 text-body-sm text-content-primary outline-none",
    "transition-colors motion-reduce:transition-none",
    "data-highlighted:bg-overlay-hover data-[state=open]:bg-overlay-hover",
    "data-disabled:pointer-events-none data-disabled:text-content-disabled data-disabled:[&_svg]:text-content-disabled",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-icon-md [&_svg]:text-content-secondary",
  ],
  {
    variants: {
      variant: {
        default: "",
        destructive:
          "text-status-danger-content data-highlighted:bg-status-danger-subtle [&_svg]:text-status-danger-content",
      },
    },
    defaultVariants: { variant: "default" },
  },
);

const indicatorClasses =
  "pointer-events-none absolute end-2.5 flex size-4 items-center justify-center text-selection-content in-data-[tone=neutral]:text-content-primary";

export interface DropdownMenuContentProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>,
    VariantProps<typeof dropdownMenuContentVariants> {
  tone?: OverlayTone;
}

export const DropdownMenuContent = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.Content>,
  DropdownMenuContentProps
>(({ className, sideOffset = 6, align = "start", appearance, tone = "brand", ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      data-slot="dropdown-menu-content"
      data-tone={tone}
      sideOffset={sideOffset}
      align={align}
      className={cn(dropdownMenuContentVariants({ appearance }), className)}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
));
DropdownMenuContent.displayName = "DropdownMenuContent";

export interface DropdownMenuItemProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item>,
    VariantProps<typeof dropdownMenuItemVariants> {
  inset?: boolean;
}

export const DropdownMenuItem = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.Item>,
  DropdownMenuItemProps
>(({ className, inset, variant, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    data-slot="dropdown-menu-item"
    data-variant={variant ?? "default"}
    className={cn(dropdownMenuItemVariants({ variant }), inset && "ps-9", className)}
    {...props}
  />
));
DropdownMenuItem.displayName = "DropdownMenuItem";

export const DropdownMenuCheckboxItem = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    data-slot="dropdown-menu-checkbox-item"
    className={cn(dropdownMenuItemVariants(), "pe-9", className)}
    {...props}
  >
    {children}
    <span className={indicatorClasses}>
      <DropdownMenuPrimitive.ItemIndicator>
        <IconCheck className="size-icon-sm" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
  </DropdownMenuPrimitive.CheckboxItem>
));
DropdownMenuCheckboxItem.displayName = "DropdownMenuCheckboxItem";

export const DropdownMenuRadioItem = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    data-slot="dropdown-menu-radio-item"
    className={cn(dropdownMenuItemVariants(), "pe-9", className)}
    {...props}
  >
    {children}
    <span className={indicatorClasses}>
      <DropdownMenuPrimitive.ItemIndicator>
        <IconCircleFilled className="size-2" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
  </DropdownMenuPrimitive.RadioItem>
));
DropdownMenuRadioItem.displayName = "DropdownMenuRadioItem";

export const DropdownMenuLabel = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & { inset?: boolean }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    data-slot="dropdown-menu-label"
    className={cn(
      "px-2.5 pt-2 pb-1 text-mono-overline text-content-secondary",
      inset && "ps-9",
      className,
    )}
    {...props}
  />
));
DropdownMenuLabel.displayName = "DropdownMenuLabel";

export const DropdownMenuSeparator = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    data-slot="dropdown-menu-separator"
    className={cn("-mx-1.5 my-1 h-px bg-border-subtle", className)}
    {...props}
  />
));
DropdownMenuSeparator.displayName = "DropdownMenuSeparator";

export function DropdownMenuShortcut({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      data-slot="dropdown-menu-shortcut"
      className={cn(
        "ms-auto inline-flex h-5 items-center rounded-xs border border-border-subtle bg-surface-muted px-1.5 text-mono-sm text-content-secondary",
        className,
      )}
      {...props}
    />
  );
}

export const DropdownMenuFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="dropdown-menu-footer"
    className={cn("flex items-center justify-end gap-2 px-1 pt-1.5 pb-0.5", className)}
    {...props}
  />
));
DropdownMenuFooter.displayName = "DropdownMenuFooter";

export const DropdownMenuSubTrigger = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & { inset?: boolean }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    data-slot="dropdown-menu-sub-trigger"
    className={cn(dropdownMenuItemVariants(), inset && "ps-9", className)}
    {...props}
  >
    {children}
    <IconChevronRight className="ms-auto size-icon-sm rtl:rotate-180" />
  </DropdownMenuPrimitive.SubTrigger>
));
DropdownMenuSubTrigger.displayName = "DropdownMenuSubTrigger";

export const DropdownMenuSubContent = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent> &
    VariantProps<typeof dropdownMenuContentVariants>
>(({ className, sideOffset = 6, appearance, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.SubContent
      ref={ref}
      data-slot="dropdown-menu-sub-content"
      sideOffset={sideOffset}
      className={cn(dropdownMenuContentVariants({ appearance }), className)}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
));
DropdownMenuSubContent.displayName = "DropdownMenuSubContent";

export const dropdownTriggerVariants = cva(
  [
    "inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap text-content-primary outline-none select-none",
    "transition-[color,background-color,border-color,box-shadow] duration-150 motion-reduce:transition-none",
    "disabled:pointer-events-none disabled:opacity-disabled",
    "[&_svg]:shrink-0",
  ],
  {
    variants: {
      kind: {
        prefix: "",
        simple: "",
        icon: "justify-center",
        ghost: "border-transparent hover:bg-state-hover aria-expanded:bg-state-hover",
      },
      size: {
        md: "h-control-lg rounded-control px-3 text-label-md",
        sm: "h-control-md rounded-control px-2.5 text-label-md",
      },
      tone: {
        brand: "focus-visible:focus-ring aria-expanded:focus-ring",
        neutral: "focus-visible:focus-ring-neutral aria-expanded:focus-ring-neutral",
      },
    },
    compoundVariants: [
      {
        kind: ["prefix", "simple", "icon"],
        className:
          "border border-border-subtle bg-field-bg shadow-elevation-control hover:border-border-default hover:bg-field-bg-hover",
      },
      { kind: "ghost", className: "border" },
      { kind: "icon", size: "md", className: "w-control-lg px-0" },
      { kind: "icon", size: "sm", className: "w-control-md px-0" },
    ],
    defaultVariants: { kind: "prefix", size: "md", tone: "brand" },
  },
);

export interface DropdownTriggerProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "prefix">,
    VariantProps<typeof dropdownTriggerVariants> {
  prefix?: React.ReactNode;
  icon?: React.ReactNode;
}

export const DropdownTrigger = React.forwardRef<HTMLButtonElement, DropdownTriggerProps>(
  ({ className, kind, size, tone, prefix, icon, children, type = "button", ...props }, ref) => (
    <button
      ref={ref}
      type={type}
      data-slot="dropdown-trigger"
      data-kind={kind ?? "prefix"}
      className={cn(dropdownTriggerVariants({ kind, size, tone }), className)}
      {...props}
    >
      {kind === "icon" ? (
        (icon ?? children)
      ) : (
        <>
          {icon}
          {kind !== "simple" && kind !== "ghost" && prefix && (
            <span className="font-normal text-content-secondary">{prefix}</span>
          )}
          {children}
          <IconChevronDown aria-hidden className="size-icon-sm text-content-secondary" />
        </>
      )}
    </button>
  ),
);
DropdownTrigger.displayName = "DropdownTrigger";
