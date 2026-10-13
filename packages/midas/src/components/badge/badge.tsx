import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";
import * as React from "react";
import { cn } from "../../lib/cn";

export const badgeVariants = cva(
  [
    "inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-pill border border-transparent font-medium",
    "transition-[color,background-color,box-shadow] duration-150 motion-reduce:transition-none",
    "focus-visible:focus-ring",
    "[&>svg]:pointer-events-none",
  ],
  {
    variants: {
      type: {
        label: "",
        count: "justify-center tabular-nums",
        dot: "p-0",
      },
      size: {
        sm: "",
        md: "",
        default: "",
        lg: "",
      },
      variant: {
        default:
          "bg-action-accent-bg text-action-accent-content [a&]:hover:bg-action-accent-bg-hover",
        secondary:
          "border-border-subtle bg-surface-muted text-content-primary [a&]:hover:bg-state-hover",
        outline: "border-border-default text-content-primary [a&]:hover:bg-state-hover",
        destructive:
          "border-status-danger-border bg-status-danger-subtle text-status-danger-content",
        success:
          "border-status-success-border bg-status-success-subtle text-status-success-content",
        warning:
          "border-status-warning-border bg-status-warning-subtle text-status-warning-content",
        info: "border-status-info-border bg-status-info-subtle text-status-info-content",
      },
      tone: {
        brand: "",
        neutral: "",
        inverse: "",
        danger: "",
        success: "",
        warning: "",
      },
      filled: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      { type: "label", size: "sm", className: "h-4.5 px-1.5 text-label-sm [&>svg]:size-icon-xs" },
      {
        type: "label",
        size: ["default", "md"],
        className: "h-5.5 px-2 text-label-sm [&>svg]:size-icon-xs",
      },
      { type: "label", size: "lg", className: "h-6.5 px-2.5 text-label-md [&>svg]:size-icon-sm" },
      { type: "count", size: "sm", className: "h-4 min-w-4 px-1 text-label-sm" },
      { type: "count", size: ["default", "md"], className: "h-5 min-w-5 px-1.5 text-label-sm" },
      { type: "count", size: "lg", className: "h-6 min-w-6 px-2 text-label-sm" },
      { type: "dot", size: "sm", className: "size-1.5 border-[1.5px] border-surface-canvas" },
      { type: "dot", size: ["default", "md"], className: "size-2 border-2 border-surface-canvas" },
      { type: "dot", size: "lg", className: "size-2.5 border-2 border-surface-canvas" },
      {
        type: "label",
        filled: true,
        variant: "destructive",
        className: "border-transparent bg-status-danger-fill text-status-danger-on-fill",
      },
      {
        type: "label",
        filled: true,
        variant: "success",
        className: "border-transparent bg-status-success-fill text-status-success-on-fill",
      },
      {
        type: "label",
        filled: true,
        variant: "warning",
        className: "border-transparent bg-status-warning-fill text-status-warning-on-fill",
      },
      {
        type: "label",
        filled: true,
        variant: "info",
        className: "border-transparent bg-status-info-fill text-status-info-on-fill",
      },
      {
        type: ["count", "dot"],
        tone: "brand",
        className: "bg-action-accent-bg text-action-accent-content",
      },
      {
        type: ["count", "dot"],
        tone: "neutral",
        className: "bg-border-strong text-content-inverse",
      },
      {
        type: ["count", "dot"],
        tone: "inverse",
        className: "bg-action-primary-bg text-action-primary-content",
      },
      {
        type: ["count", "dot"],
        tone: "danger",
        className: "bg-status-danger-fill text-status-danger-on-fill",
      },
      {
        type: ["count", "dot"],
        tone: "success",
        className: "bg-status-success-fill text-status-success-on-fill",
      },
      {
        type: ["count", "dot"],
        tone: "warning",
        className: "bg-status-warning-fill text-status-warning-on-fill",
      },
    ],
    defaultVariants: {
      type: "label",
      variant: "secondary",
      size: "default",
      filled: false,
    },
  },
);

export interface BadgeProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, "children">,
    Omit<VariantProps<typeof badgeVariants>, "tone"> {
  tone?: "brand" | "neutral" | "inverse" | "danger" | "success" | "warning";
  asChild?: boolean;
  icon?: React.ReactNode;
  count?: number;
  max?: number;
  children?: React.ReactNode;
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      className,
      variant,
      size,
      filled,
      type,
      tone = "brand",
      icon,
      count,
      max = 99,
      asChild = false,
      children,
      ...props
    },
    ref,
  ) => {
    const resolvedType = type ?? "label";
    const Comp = asChild ? Slot.Root : "span";
    const countText = count === undefined ? children : count > max ? `${max}+` : String(count);
    return (
      <Comp
        ref={ref}
        data-slot="badge"
        data-type={resolvedType}
        className={cn(
          badgeVariants({
            type,
            variant: resolvedType === "label" ? variant : null,
            size,
            filled,
            tone: resolvedType === "label" ? null : tone,
          }),
          className,
        )}
        {...props}
      >
        {asChild ? (
          children
        ) : resolvedType === "dot" ? null : resolvedType === "count" ? (
          countText
        ) : (
          <>
            {icon}
            {children}
          </>
        )}
      </Comp>
    );
  },
);
Badge.displayName = "Badge";
