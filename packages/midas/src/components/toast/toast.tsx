"use client";

import { X } from "@phosphor-icons/react/ssr";
import type * as React from "react";
import { Toaster as Sonner, type ToasterProps as SonnerProps, toast } from "sonner";
import { cn } from "../../lib/cn";
import { Spinner } from "../spinner/spinner";

export type ToasterProps = SonnerProps;

const hideIcon = "[&_[data-icon]]:hidden";

export function Toaster({ toastOptions, style, className, ...props }: ToasterProps) {
  return (
    <Sonner
      className={cn("toaster group", className)}
      closeButton
      icons={{ loading: <Spinner label="" aria-hidden />, close: <X className="size-4" /> }}
      style={{ "--width": "382px", ...style } as React.CSSProperties}
      toastOptions={{
        unstyled: true,
        ...toastOptions,
        classNames: {
          toast: cn(
            "group/toast relative flex w-(--width) items-center gap-3 rounded-2xl border border-border bg-popover p-4 pe-14 text-popover-foreground shadow-lg",
          ),
          content: "flex min-w-0 flex-1 flex-col gap-1",
          title: "text-sm font-medium text-muted-foreground",
          description: "text-xs text-muted-foreground",
          icon: "flex size-4 shrink-0 items-center justify-center text-muted-foreground",
          closeButton:
            "absolute top-1/2 end-4 flex size-7 -translate-y-1/2 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none",
          actionButton:
            "inline-flex h-7 shrink-0 items-center rounded-md bg-primary px-2.5 text-xs font-medium text-primary-foreground hover:bg-primary/80",
          cancelButton:
            "inline-flex h-7 shrink-0 items-center rounded-md bg-secondary px-2.5 text-xs font-medium text-secondary-foreground hover:bg-secondary/80",
          default: hideIcon,
          success: hideIcon,
          info: hideIcon,
          warning: hideIcon,
          error: hideIcon,
          ...toastOptions?.classNames,
        },
      }}
      {...props}
    />
  );
}

export { toast };
