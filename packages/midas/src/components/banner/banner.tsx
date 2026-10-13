import {
  IconAlertTriangle,
  IconCircleCheck,
  IconCircleX,
  IconInfoCircle,
  IconX,
} from "@tabler/icons-react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";
import * as React from "react";
import { cn } from "../../lib/cn";

export type BannerStatus = "info" | "success" | "warning" | "error" | "neutral";

export const bannerVariants = cva("flex w-full items-center gap-3 border", {
  variants: {
    status: {
      info: "",
      success: "",
      warning: "",
      error: "",
      neutral: "",
    },
    appearance: {
      subtle: "",
      inverse: "border-action-primary-bg-hover bg-action-primary-bg text-action-primary-content",
    },
    layout: {
      full: "border-x-0 border-t-0 py-2 ps-6 pe-4",
      inline: "rounded-xl py-2.5 ps-4 pe-2",
    },
  },
  compoundVariants: [
    {
      status: "info",
      appearance: "subtle",
      className: "border-status-info-border bg-status-info-subtle text-content-primary",
    },
    {
      status: "success",
      appearance: "subtle",
      className: "border-status-success-border bg-status-success-subtle text-content-primary",
    },
    {
      status: "warning",
      appearance: "subtle",
      className: "border-status-warning-border bg-status-warning-subtle text-content-primary",
    },
    {
      status: "error",
      appearance: "subtle",
      className: "border-status-danger-border bg-status-danger-subtle text-content-primary",
    },
    {
      status: "neutral",
      appearance: "subtle",
      className: "border-border-default bg-surface-muted text-content-primary",
    },
  ],
  defaultVariants: {
    status: "info",
    appearance: "subtle",
    layout: "full",
  },
});

const iconTone: Record<BannerStatus, string> = {
  info: "text-status-info-content",
  success: "text-status-success-content",
  warning: "text-status-warning-content",
  error: "text-status-danger-content",
  neutral: "text-content-secondary",
};

const statusIcon: Record<BannerStatus, React.ReactNode> = {
  info: <IconInfoCircle />,
  success: <IconCircleCheck />,
  warning: <IconAlertTriangle />,
  error: <IconCircleX />,
  neutral: <IconInfoCircle />,
};

export interface BannerProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title">,
    VariantProps<typeof bannerVariants> {
  icon?: React.ReactNode;
  title?: React.ReactNode;
  action?: React.ReactNode;
  onClose?: () => void;
  closeLabel?: string;
}

export const Banner = React.forwardRef<HTMLDivElement, BannerProps>(
  (
    {
      className,
      status = "info",
      appearance = "subtle",
      layout = "full",
      icon,
      title,
      action,
      onClose,
      closeLabel = "Fechar aviso",
      role,
      children,
      ...props
    },
    ref,
  ) => {
    const resolvedStatus = (status ?? "info") as BannerStatus;
    const defaultRole =
      resolvedStatus === "error" || resolvedStatus === "warning" ? "alert" : "status";
    return (
      <div
        ref={ref}
        role={role ?? defaultRole}
        data-slot="banner"
        data-status={resolvedStatus}
        data-layout={layout}
        data-appearance={appearance}
        className={cn("group/banner", bannerVariants({ status, appearance, layout }), className)}
        {...props}
      >
        <span
          aria-hidden="true"
          data-slot="banner-icon"
          className={cn(
            "inline-flex shrink-0 items-center [&>svg]:size-icon-md",
            appearance === "inverse" ? "text-action-primary-content" : iconTone[resolvedStatus],
          )}
        >
          {icon ?? statusIcon[resolvedStatus]}
        </span>
        <div className="flex min-w-0 flex-1 flex-wrap items-center gap-x-1.5 gap-y-0.5">
          {title ? (
            <span data-slot="banner-title" className="text-label-sm">
              {title}
            </span>
          ) : null}
          {children ? (
            <span
              data-slot="banner-message"
              className={cn(
                "text-body-sm",
                appearance === "inverse" ? "opacity-70" : "text-content-secondary",
              )}
            >
              {children}
            </span>
          ) : null}
          {action}
        </div>
        {onClose ? (
          <button
            type="button"
            data-slot="banner-close"
            aria-label={closeLabel}
            onClick={onClose}
            className="inline-flex size-6 shrink-0 items-center justify-center rounded-xs outline-none transition-[background-color,box-shadow] duration-150 hover:bg-state-hover focus-visible:focus-ring motion-reduce:transition-none"
          >
            <IconX aria-hidden="true" className="size-icon-sm" />
          </button>
        ) : null}
      </div>
    );
  },
);
Banner.displayName = "Banner";

export interface BannerActionProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

export const BannerAction = React.forwardRef<HTMLButtonElement, BannerActionProps>(
  ({ className, asChild = false, type, ...props }, ref) => {
    const Comp = asChild ? Slot.Root : "button";
    return (
      <Comp
        ref={ref}
        type={asChild ? undefined : (type ?? "button")}
        data-slot="banner-action"
        className={cn(
          "inline-flex items-center gap-1.5 rounded-xs px-0.5 text-label-sm underline-offset-4 outline-none hover:underline focus-visible:focus-ring",
          "text-content-link group-data-[appearance=inverse]/banner:text-current",
          className,
        )}
        {...props}
      />
    );
  },
);
BannerAction.displayName = "BannerAction";
