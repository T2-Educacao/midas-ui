"use client";

import { IconX } from "@tabler/icons-react";
import { cva, type VariantProps } from "class-variance-authority";
import { Dialog as DialogPrimitive } from "radix-ui";
import * as React from "react";
import { cn } from "../../lib/cn";
import { overlayAppearance, overlayScrimClasses } from "../../lib/overlay-styles";

export const Drawer = DialogPrimitive.Root;
export const DrawerTrigger = DialogPrimitive.Trigger;
export const DrawerPortal = DialogPrimitive.Portal;
export const DrawerClose = DialogPrimitive.Close;

export const DrawerOverlay = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    data-slot="drawer-overlay"
    className={cn(overlayScrimClasses, className)}
    {...props}
  />
));
DrawerOverlay.displayName = "DrawerOverlay";

export const drawerContentVariants = cva(
  [
    "fixed inset-y-0 z-(--midas-z-overlay) flex w-full flex-col border text-content-primary shadow-elevation-modal outline-none",
    "motion-reduce:animate-none",
  ],
  {
    variants: {
      side: {
        right: "end-0 rounded-s-3xl animate-midas-slide",
        left: "start-0 rounded-e-3xl animate-midas-fade",
      },
      width: {
        default: "max-w-110",
        navigation: "max-w-80",
      },
      appearance: overlayAppearance,
    },
    defaultVariants: {
      side: "right",
      width: "default",
      appearance: "solid",
    },
  },
);

export interface DrawerContentProps
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>,
    VariantProps<typeof drawerContentVariants> {
  overlayClassName?: string;
}

export const DrawerContent = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Content>,
  DrawerContentProps
>(({ className, overlayClassName, side, width, appearance, children, ...props }, ref) => (
  <DrawerPortal>
    <DrawerOverlay className={overlayClassName} />
    <DialogPrimitive.Content
      ref={ref}
      data-slot="drawer-content"
      data-side={side ?? "right"}
      className={cn(drawerContentVariants({ side, width, appearance }), className)}
      {...props}
    >
      {children}
    </DialogPrimitive.Content>
  </DrawerPortal>
));
DrawerContent.displayName = "DrawerContent";

export interface DrawerHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  showCloseButton?: boolean;
}

export const DrawerHeader = React.forwardRef<HTMLDivElement, DrawerHeaderProps>(
  ({ className, children, showCloseButton = true, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="drawer-header"
      className={cn(
        "flex shrink-0 items-start gap-3 border-b border-border-subtle pt-5 pe-4 pb-4 ps-6",
        className,
      )}
      {...props}
    >
      <div className="flex min-w-0 flex-1 flex-col gap-0.5">{children}</div>
      {showCloseButton && (
        <DialogPrimitive.Close
          data-slot="drawer-close"
          className="flex size-control-sm shrink-0 items-center justify-center rounded-control text-content-secondary outline-none transition-colors hover:bg-state-hover hover:text-content-primary focus-visible:focus-ring motion-reduce:transition-none"
        >
          <IconX className="size-icon-sm" />
          <span className="sr-only">Fechar</span>
        </DialogPrimitive.Close>
      )}
    </div>
  ),
);
DrawerHeader.displayName = "DrawerHeader";

export const DrawerTitle = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    data-slot="drawer-title"
    className={cn("text-heading-sm text-content-primary", className)}
    {...props}
  />
));
DrawerTitle.displayName = "DrawerTitle";

export const DrawerDescription = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    data-slot="drawer-description"
    className={cn("text-caption text-content-secondary", className)}
    {...props}
  />
));
DrawerDescription.displayName = "DrawerDescription";

export const DrawerBody = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="drawer-body"
      className={cn("flex min-h-0 flex-1 flex-col gap-6 overflow-y-auto p-6", className)}
      {...props}
    />
  ),
);
DrawerBody.displayName = "DrawerBody";

export const DrawerFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="drawer-footer"
      className={cn(
        "flex shrink-0 items-center justify-end gap-2 border-t border-border-subtle px-6 py-4",
        className,
      )}
      {...props}
    />
  ),
);
DrawerFooter.displayName = "DrawerFooter";
