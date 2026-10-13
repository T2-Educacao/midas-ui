import {
  IconAlertCircle,
  IconAlertTriangle,
  IconCircleCheck,
  IconInfoCircle,
  IconLoader2,
} from "@tabler/icons-react";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "../../lib/cn";

export type ButtonFeedbackStatus = "success" | "warning" | "error" | "info" | "loading";

const statusIcons = {
  success: IconCircleCheck,
  warning: IconAlertTriangle,
  error: IconAlertCircle,
  info: IconInfoCircle,
  loading: IconLoader2,
} as const;

export const buttonFeedbackMessageVariants = cva("inline-flex items-center gap-2", {
  variants: {
    status: {
      success: "",
      warning: "",
      error: "",
      info: "",
      loading: "",
    },
    message: {
      text: "text-body-sm text-content-primary",
      pill: "rounded-pill border px-3 py-1.5 text-body-sm",
    },
  },
  compoundVariants: [
    {
      message: "text",
      status: "loading",
      className: "text-content-secondary",
    },
    {
      message: "pill",
      status: "success",
      className:
        "border-status-success-border bg-status-success-subtle text-status-success-content",
    },
    {
      message: "pill",
      status: "warning",
      className:
        "border-status-warning-border bg-status-warning-subtle text-status-warning-content",
    },
    {
      message: "pill",
      status: "error",
      className: "border-status-danger-border bg-status-danger-subtle text-status-danger-content",
    },
    {
      message: "pill",
      status: "info",
      className: "border-status-info-border bg-status-info-subtle text-status-info-content",
    },
    {
      message: "pill",
      status: "loading",
      className: "border-border-default bg-surface-muted text-content-secondary",
    },
  ],
  defaultVariants: {
    status: "info",
    message: "text",
  },
});

const iconColors: Record<ButtonFeedbackStatus, string> = {
  success: "text-status-success-fill",
  warning: "text-status-warning-fill",
  error: "text-status-danger-fill",
  info: "text-status-info-fill",
  loading: "text-content-secondary",
};

export interface ButtonFeedbackProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children">,
    Omit<VariantProps<typeof buttonFeedbackMessageVariants>, "status"> {
  status: ButtonFeedbackStatus;
  text: React.ReactNode;
  time?: React.ReactNode;
  placement?: "right" | "left";
  children: React.ReactNode;
}

export const ButtonFeedback = React.forwardRef<HTMLDivElement, ButtonFeedbackProps>(
  ({ className, status, text, time, message, placement = "right", children, ...props }, ref) => {
    const Icon = statusIcons[status];
    const assertive = status === "error" || status === "warning";
    return (
      <div
        ref={ref}
        data-slot="button-feedback"
        data-status={status}
        className={cn(
          "inline-flex items-center gap-4",
          placement === "left" && "flex-row-reverse",
          className,
        )}
        {...props}
      >
        {children}
        <div
          data-slot="button-feedback-message"
          role={assertive ? "alert" : "status"}
          className={buttonFeedbackMessageVariants({ status, message })}
        >
          <Icon
            aria-hidden
            className={cn(
              "size-icon-sm shrink-0",
              iconColors[status],
              status === "loading" && "animate-spin motion-reduce:animate-none",
            )}
          />
          <span>{text}</span>
          {time ? <span className="text-caption text-content-secondary">{time}</span> : null}
        </div>
      </div>
    );
  },
);
ButtonFeedback.displayName = "ButtonFeedback";
