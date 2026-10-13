"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { Progress as ProgressPrimitive } from "radix-ui";
import * as React from "react";
import { cn } from "../../lib/cn";

export const progressVariants = cva("relative shrink-0 rounded-pill bg-border-default", {
  variants: {
    orientation: {
      horizontal: "w-full",
      vertical: "h-40",
    },
    size: {
      sm: "",
      md: "",
      lg: "",
    },
  },
  compoundVariants: [
    { orientation: "horizontal", size: "sm", className: "h-1" },
    { orientation: "horizontal", size: "md", className: "h-2" },
    { orientation: "horizontal", size: "lg", className: "h-3" },
    { orientation: "vertical", size: "sm", className: "w-1" },
    { orientation: "vertical", size: "md", className: "w-2" },
    { orientation: "vertical", size: "lg", className: "w-3" },
  ],
  defaultVariants: {
    orientation: "horizontal",
    size: "md",
  },
});

const glowShadow = "shadow-[0_0_12px_var(--midas-action-accent-gradient-top)]";
const tipShadow = "after:shadow-[0_0_10px_var(--midas-action-accent-gradient-top)]";

export const progressIndicatorVariants = cva(
  "rounded-pill transition-[width,height] duration-300 ease-out motion-reduce:transition-none",
  {
    variants: {
      variant: {
        default: "bg-action-accent-bg",
        success: "bg-status-success-fill",
        warning: "bg-status-warning-fill",
        info: "bg-status-info-fill",
        destructive: "bg-status-danger-fill",
      },
      appearance: {
        accent: "",
        neutral: "",
        gradient: "",
        glow: "",
        shimmer: "",
      },
      orientation: {
        horizontal: "relative h-full",
        vertical: "absolute inset-x-0 bottom-0 w-full",
      },
    },
    compoundVariants: [
      { variant: "default", appearance: "neutral", className: "bg-content-primary" },
      {
        variant: "default",
        appearance: ["gradient", "glow"],
        orientation: "horizontal",
        className:
          "bg-linear-to-r from-action-accent-gradient-top to-action-accent-gradient-bottom",
      },
      {
        variant: "default",
        appearance: ["gradient", "glow"],
        orientation: "vertical",
        className:
          "bg-linear-to-t from-action-accent-gradient-bottom to-action-accent-gradient-top",
      },
      {
        variant: "default",
        appearance: "glow",
        className: `${glowShadow} after:absolute after:size-2.5 after:rounded-full after:bg-material-on-media-content after:content-[''] ${tipShadow}`,
      },
      {
        variant: "default",
        appearance: "glow",
        orientation: "horizontal",
        className: "after:inset-y-0 after:end-0 after:my-auto",
      },
      {
        variant: "default",
        appearance: "glow",
        orientation: "vertical",
        className: "after:inset-x-0 after:top-0 after:mx-auto",
      },
      {
        appearance: "shimmer",
        className: "animate-pulse motion-reduce:animate-none",
      },
    ],
    defaultVariants: {
      variant: "default",
      appearance: "accent",
      orientation: "horizontal",
    },
  },
);

export interface ProgressProps
  extends Omit<React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>, "orientation">,
    Omit<VariantProps<typeof progressVariants>, "orientation">,
    Pick<VariantProps<typeof progressIndicatorVariants>, "variant" | "appearance"> {
  value?: number | null;
  orientation?: "horizontal" | "vertical";
  indicatorClassName?: string;
}

const percentOf = (value: number | null | undefined, max: number) =>
  Math.min(100, Math.max(0, ((value ?? 0) / max) * 100));

export const Progress = React.forwardRef<
  React.ComponentRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(
  (
    {
      className,
      indicatorClassName,
      variant,
      appearance,
      size,
      orientation = "horizontal",
      value,
      max = 100,
      ...props
    },
    ref,
  ) => {
    const indeterminate = value == null && appearance === "shimmer";
    const percent = indeterminate ? 100 : percentOf(value, max);
    return (
      <ProgressPrimitive.Root
        ref={ref}
        data-slot="progress"
        data-orientation={orientation}
        value={value}
        max={max}
        className={cn(progressVariants({ orientation, size }), className)}
        {...props}
      >
        <ProgressPrimitive.Indicator
          data-slot="progress-indicator"
          className={cn(
            progressIndicatorVariants({ variant, appearance, orientation }),
            indicatorClassName,
          )}
          style={orientation === "vertical" ? { height: `${percent}%` } : { width: `${percent}%` }}
        />
      </ProgressPrimitive.Root>
    );
  },
);
Progress.displayName = "Progress";

const valueStyle = {
  sm: "text-label-sm",
  md: "text-label-md",
  lg: "text-label-lg",
} as const;

export interface ProgressFieldProps extends Omit<ProgressProps, "children"> {
  label?: React.ReactNode;
  showValue?: boolean;
  valueLabel?: React.ReactNode;
  helper?: React.ReactNode;
  helperIcon?: React.ReactNode;
  containerClassName?: string;
}

export const ProgressField = React.forwardRef<
  React.ComponentRef<typeof ProgressPrimitive.Root>,
  ProgressFieldProps
>(
  (
    {
      className,
      containerClassName,
      label,
      showValue = true,
      valueLabel,
      helper,
      helperIcon,
      orientation = "horizontal",
      size = "md",
      value,
      max = 100,
      ...props
    },
    ref,
  ) => {
    const labelId = React.useId();
    const valueText =
      valueLabel ?? (value == null ? null : `${Math.round(percentOf(value, max))}%`);
    const labelNode = label ? (
      <span id={labelId} className="text-body-sm text-content-secondary">
        {label}
      </span>
    ) : null;
    const valueNode =
      showValue && valueText !== null ? (
        <span
          data-slot="progress-value"
          className={cn(valueStyle[size ?? "md"], "text-content-primary")}
        >
          {valueText}
        </span>
      ) : null;
    const bar = (
      <Progress
        ref={ref}
        value={value}
        max={max}
        size={size}
        orientation={orientation}
        aria-labelledby={label ? labelId : undefined}
        className={className}
        {...props}
      />
    );

    if (orientation === "vertical") {
      return (
        <div
          data-slot="progress-field"
          className={cn("inline-flex flex-col items-center gap-2", containerClassName)}
        >
          {bar}
          {valueNode}
          {labelNode}
        </div>
      );
    }

    return (
      <div
        data-slot="progress-field"
        className={cn("flex w-full flex-col gap-2", containerClassName)}
      >
        {labelNode || valueNode ? (
          <div className="flex items-center justify-between gap-3">
            {labelNode}
            {valueNode}
          </div>
        ) : null}
        {bar}
        {helper ? (
          <p className="flex items-center gap-1 text-body-sm text-content-secondary [&>svg]:size-icon-sm">
            {helperIcon}
            {helper}
          </p>
        ) : null}
      </div>
    );
  },
);
ProgressField.displayName = "ProgressField";

export interface ProgressLineProps
  extends Omit<React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>, "value"> {
  value?: number;
  appearance?: "accent" | "gradient" | "glow";
  showTrack?: boolean;
  indicatorClassName?: string;
}

export const ProgressLine = React.forwardRef<
  React.ComponentRef<typeof ProgressPrimitive.Root>,
  ProgressLineProps
>(
  (
    {
      className,
      indicatorClassName,
      appearance = "accent",
      showTrack = false,
      value = 0,
      max = 100,
      "aria-label": ariaLabel = "Progresso",
      ...props
    },
    ref,
  ) => (
    <ProgressPrimitive.Root
      ref={ref}
      data-slot="progress-line"
      value={value}
      max={max}
      aria-label={ariaLabel}
      className={cn("relative h-0.75 w-full", showTrack && "bg-border-default", className)}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-line-indicator"
        className={cn(
          progressIndicatorVariants({ appearance, orientation: "horizontal" }),
          "rounded-none duration-400",
          indicatorClassName,
        )}
        style={{ width: `${percentOf(value, max)}%` }}
      />
    </ProgressPrimitive.Root>
  ),
);
ProgressLine.displayName = "ProgressLine";
