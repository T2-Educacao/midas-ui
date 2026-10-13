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

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogPortal = DialogPrimitive.Portal;
export const DialogClose = DialogPrimitive.Close;

export const dialogOverlayVariants = cva(overlayScrimClasses, {
  variants: {
    blur: {
      true: "backdrop-blur-midas-sm",
      false: "",
    },
  },
  defaultVariants: { blur: true },
});

export interface DialogOverlayProps
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>,
    VariantProps<typeof dialogOverlayVariants> {}

export const DialogOverlay = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Overlay>,
  DialogOverlayProps
>(({ className, blur, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    data-slot="dialog-overlay"
    className={cn(dialogOverlayVariants({ blur }), className)}
    {...props}
  />
));
DialogOverlay.displayName = "DialogOverlay";

export const dialogContentVariants = cva(
  [
    "fixed z-(--midas-z-overlay) grid gap-5 overflow-y-auto border p-6 text-content-primary shadow-elevation-modal outline-none",
    "max-h-[calc(100dvh-2rem)] animate-midas-in motion-reduce:animate-none",
  ],
  {
    variants: {
      appearance: overlayAppearance,
      size: {
        sm: "max-w-100",
        md: "max-w-130",
        lg: "max-w-180",
        xl: "max-w-240",
      },
      device: {
        responsive:
          "start-1/2 top-1/2 w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 rounded-3xl rtl:translate-x-1/2 max-sm:inset-x-0 max-sm:top-auto max-sm:bottom-0 max-sm:w-full max-sm:max-w-none max-sm:translate-x-0 max-sm:translate-y-0 max-sm:rounded-b-none max-sm:px-5 max-sm:pt-3 max-sm:pb-8 rtl:max-sm:translate-x-0",
        desktop:
          "start-1/2 top-1/2 w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 rounded-3xl rtl:translate-x-1/2",
        mobile: "inset-x-0 top-auto bottom-0 w-full max-w-none rounded-t-3xl px-5 pt-3 pb-8",
      },
    },
    defaultVariants: {
      appearance: "solid",
      size: "md",
      device: "responsive",
    },
  },
);

export interface DialogContentProps
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>,
    VariantProps<typeof dialogContentVariants> {
  showCloseButton?: boolean;
  overlayClassName?: string;
  blur?: boolean;
}

export const DialogContent = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Content>,
  DialogContentProps
>(
  (
    {
      className,
      overlayClassName,
      children,
      showCloseButton = true,
      appearance,
      size,
      device,
      blur,
      ...props
    },
    ref,
  ) => (
    <DialogPortal>
      <DialogOverlay blur={blur} className={overlayClassName} />
      <DialogPrimitive.Content
        ref={ref}
        data-slot="dialog-content"
        data-appearance={appearance ?? "solid"}
        className={cn(dialogContentVariants({ appearance, size, device }), className)}
        {...props}
      >
        {device !== "desktop" && (
          <span
            aria-hidden
            data-slot="dialog-handle"
            className={cn(overlayHandleClasses, device !== "mobile" && "sm:hidden")}
          />
        )}
        {children}
        {showCloseButton && (
          <DialogPrimitive.Close
            data-slot="dialog-close"
            className="absolute end-4 top-4 flex size-control-sm items-center justify-center rounded-pill text-content-secondary outline-none transition-colors hover:bg-state-hover hover:text-content-primary focus-visible:focus-ring motion-reduce:transition-none max-sm:top-6"
          >
            <IconX className="size-icon-sm" />
            <span className="sr-only">Fechar</span>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </DialogPortal>
  ),
);
DialogContent.displayName = "DialogContent";

export const DialogHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="dialog-header"
      className={cn("flex flex-col gap-2 pe-8", className)}
      {...props}
    />
  ),
);
DialogHeader.displayName = "DialogHeader";

export const DialogFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="dialog-footer"
      className={cn("flex flex-col-reverse gap-2.5 sm:flex-row sm:justify-end", className)}
      {...props}
    />
  ),
);
DialogFooter.displayName = "DialogFooter";

export const DialogTitle = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    data-slot="dialog-title"
    className={cn("text-heading-md text-content-primary", className)}
    {...props}
  />
));
DialogTitle.displayName = "DialogTitle";

export const DialogDescription = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    data-slot="dialog-description"
    className={cn("text-body-md text-content-secondary", className)}
    {...props}
  />
));
DialogDescription.displayName = "DialogDescription";
