"use client";

import {
  IconAlertTriangle,
  IconCircleCheck,
  IconCircleX,
  IconInfoCircle,
  IconX,
} from "@tabler/icons-react";
import type * as React from "react";
import { Toaster as Sonner, type ToasterProps as SonnerProps, toast } from "sonner";
import { cn } from "../../lib/cn";
import { Spinner } from "../spinner/spinner";

export type ToastStyle = "subtle" | "surface" | "inverse" | "glass";

export interface ToasterProps extends SonnerProps {
  toastStyle?: ToastStyle;
}

const styleClasses: Record<ToastStyle, string> = {
  subtle: "border-border-default bg-surface-muted text-content-primary",
  surface: "border-border-default bg-surface-default text-content-primary shadow-elevation-overlay",
  inverse:
    "border-action-primary-bg-hover bg-action-primary-bg text-action-primary-content shadow-elevation-overlay",
  glass: "material-glass border text-content-primary shadow-elevation-overlay",
};

const tile = "[&_[data-icon]]:size-8 [&_[data-icon]]:rounded-md";

export function Toaster({
  toastOptions,
  style,
  className,
  toastStyle = "surface",
  offset = 24,
  mobileOffset = 16,
  ...props
}: ToasterProps) {
  return (
    <Sonner
      className={cn("toaster group", className)}
      closeButton
      offset={offset}
      mobileOffset={mobileOffset}
      icons={{
        loading: <Spinner label="" aria-hidden tone="brand" size="sm" />,
        success: <IconCircleCheck className="size-icon-md" />,
        info: <IconInfoCircle className="size-icon-md" />,
        warning: <IconAlertTriangle className="size-icon-md" />,
        error: <IconCircleX className="size-icon-md" />,
        close: <IconX className="size-icon-sm" />,
      }}
      style={{ "--width": "400px", ...style } as React.CSSProperties}
      toastOptions={{
        unstyled: true,
        ...toastOptions,
        classNames: {
          toast: cn(
            "group/toast relative flex w-(--width) max-w-full items-start gap-3 rounded-container border p-3 pe-10",
            styleClasses[toastStyle],
            tile,
          ),
          content: "flex min-w-0 flex-1 flex-col gap-0.5 pt-px",
          title: "text-label-md text-current",
          description: "text-body-sm text-current opacity-70",
          icon: "flex shrink-0 items-center justify-center",
          closeButton:
            "absolute top-3 end-2 flex size-7 items-center justify-center rounded-sm text-current opacity-70 transition-[opacity,background-color] hover:bg-state-hover hover:opacity-100 focus-visible:focus-ring focus-visible:outline-none motion-reduce:transition-none",
          actionButton:
            "inline-flex h-control-sm shrink-0 items-center rounded-control bg-action-accent-bg px-2.5 text-label-sm text-action-accent-content hover:bg-action-accent-bg-hover focus-visible:focus-ring focus-visible:outline-none",
          cancelButton:
            "inline-flex h-control-sm shrink-0 items-center rounded-control bg-action-secondary-bg px-2.5 text-label-sm text-action-secondary-content hover:bg-action-secondary-bg-hover focus-visible:focus-ring focus-visible:outline-none",
          default: "[&_[data-icon]]:hidden",
          success:
            "[&_[data-icon]]:bg-status-success-subtle [&_[data-icon]]:text-status-success-content",
          info: "[&_[data-icon]]:bg-status-info-subtle [&_[data-icon]]:text-status-info-content",
          warning:
            "[&_[data-icon]]:bg-status-warning-subtle [&_[data-icon]]:text-status-warning-content",
          error:
            "[&_[data-icon]]:bg-status-danger-subtle [&_[data-icon]]:text-status-danger-content",
          loading: "[&_[data-icon]]:bg-surface-canvas [&_[data-icon]]:text-action-accent-bg",
          ...toastOptions?.classNames,
        },
      }}
      {...props}
    />
  );
}

export { toast };
