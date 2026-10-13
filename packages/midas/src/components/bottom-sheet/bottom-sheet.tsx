"use client";

import { IconX } from "@tabler/icons-react";
import { cva, type VariantProps } from "class-variance-authority";
import { Dialog as DialogPrimitive } from "radix-ui";
import * as React from "react";
import { cn } from "../../lib/cn";
import {
  overlayAppearance,
  overlayHandleClasses,
  overlayScrimClasses,
} from "../../lib/overlay-styles";

export const BottomSheet = DialogPrimitive.Root;
export const BottomSheetTrigger = DialogPrimitive.Trigger;
export const BottomSheetPortal = DialogPrimitive.Portal;
export const BottomSheetClose = DialogPrimitive.Close;

export const BottomSheetOverlay = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    data-slot="bottom-sheet-overlay"
    className={cn(overlayScrimClasses, className)}
    {...props}
  />
));
BottomSheetOverlay.displayName = "BottomSheetOverlay";

export const bottomSheetContentVariants = cva(
  [
    "fixed inset-x-0 bottom-0 z-(--midas-z-overlay) mx-auto flex w-full max-w-xl flex-col gap-4 rounded-t-3xl border px-5 pt-2.5 pb-8 text-content-primary shadow-elevation-modal outline-none",
    "animate-midas-fade motion-reduce:animate-none",
  ],
  {
    variants: {
      height: {
        auto: "max-h-[calc(100dvh-2rem)]",
        half: "h-[50dvh]",
        full: "h-[calc(100dvh-2rem)]",
      },
      appearance: {
        ...overlayAppearance,
        liquid: "material-liquid border-material-glass-border",
      },
    },
    defaultVariants: {
      height: "auto",
      appearance: "solid",
    },
  },
);

export interface BottomSheetContentProps
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>,
    VariantProps<typeof bottomSheetContentVariants> {
  overlayClassName?: string;
}

export const BottomSheetContent = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Content>,
  BottomSheetContentProps
>(({ className, overlayClassName, height, appearance, children, ...props }, ref) => (
  <BottomSheetPortal>
    <BottomSheetOverlay className={overlayClassName} />
    <DialogPrimitive.Content
      ref={ref}
      data-slot="bottom-sheet-content"
      data-height={height ?? "auto"}
      className={cn(bottomSheetContentVariants({ height, appearance }), className)}
      {...props}
    >
      <span aria-hidden data-slot="bottom-sheet-handle" className={overlayHandleClasses} />
      {children}
    </DialogPrimitive.Content>
  </BottomSheetPortal>
));
BottomSheetContent.displayName = "BottomSheetContent";

export interface BottomSheetHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  showCloseButton?: boolean;
}

export const BottomSheetHeader = React.forwardRef<HTMLDivElement, BottomSheetHeaderProps>(
  ({ className, children, showCloseButton = true, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="bottom-sheet-header"
      className={cn("flex shrink-0 items-start gap-3", className)}
      {...props}
    >
      <div className="flex min-w-0 flex-1 flex-col gap-1">{children}</div>
      {showCloseButton && (
        <DialogPrimitive.Close
          data-slot="bottom-sheet-close"
          className="material-raised-button flex size-control-md shrink-0 items-center justify-center rounded-pill border border-action-secondary-border bg-action-secondary-bg text-action-secondary-content outline-none focus-visible:focus-ring"
        >
          <IconX className="size-icon-md" />
          <span className="sr-only">Fechar</span>
        </DialogPrimitive.Close>
      )}
    </div>
  ),
);
BottomSheetHeader.displayName = "BottomSheetHeader";

export const BottomSheetTitle = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    data-slot="bottom-sheet-title"
    className={cn("text-heading-md text-content-primary", className)}
    {...props}
  />
));
BottomSheetTitle.displayName = "BottomSheetTitle";

export const BottomSheetDescription = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    data-slot="bottom-sheet-description"
    className={cn("text-body-sm text-content-secondary", className)}
    {...props}
  />
));
BottomSheetDescription.displayName = "BottomSheetDescription";

export const BottomSheetBody = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="bottom-sheet-body"
    className={cn("flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto", className)}
    {...props}
  />
));
BottomSheetBody.displayName = "BottomSheetBody";

export const BottomSheetFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="bottom-sheet-footer"
    className={cn("flex shrink-0 flex-col gap-2.5 [&>*]:h-control-xl [&>*]:w-full", className)}
    {...props}
  />
));
BottomSheetFooter.displayName = "BottomSheetFooter";
