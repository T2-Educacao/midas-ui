import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "../../lib/cn";

export const alertVariants = cva(
  [
    "relative grid w-full grid-cols-[0_1fr] items-start gap-y-0.5 rounded-container border px-4 py-3 text-body-sm",
    "has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] has-[>svg]:gap-x-3 [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
    "has-[[data-slot=alert-action]]:pe-24",
  ],
  {
    variants: {
      variant: {
        default: "border-border-default bg-surface-default text-content-primary",
        info: "border-status-info-border bg-status-info-subtle text-status-info-content",
        success:
          "border-status-success-border bg-status-success-subtle text-status-success-content",
        warning:
          "border-status-warning-border bg-status-warning-subtle text-status-warning-content",
        destructive:
          "border-status-danger-border bg-status-danger-subtle text-status-danger-content",
      },
      filled: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      {
        filled: true,
        variant: "destructive",
        className: "border-transparent bg-status-danger-fill text-status-danger-on-fill",
      },
      {
        filled: true,
        variant: "success",
        className: "border-transparent bg-status-success-fill text-status-success-on-fill",
      },
      {
        filled: true,
        variant: "warning",
        className: "border-transparent bg-status-warning-fill text-status-warning-on-fill",
      },
      {
        filled: true,
        variant: "info",
        className: "border-transparent bg-status-info-fill text-status-info-on-fill",
      },
    ],
    defaultVariants: {
      variant: "default",
      filled: false,
    },
  },
);

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {}

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant, filled, role, ...props }, ref) => {
    const defaultRole = variant === "destructive" || variant === "warning" ? "alert" : "status";
    return (
      <div
        ref={ref}
        role={role ?? defaultRole}
        data-slot="alert"
        className={cn(alertVariants({ variant, filled }), className)}
        {...props}
      />
    );
  },
);
Alert.displayName = "Alert";

export const AlertTitle = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="alert-title"
      className={cn("col-start-2 line-clamp-1 min-h-4 text-label-md", className)}
      {...props}
    />
  ),
);
AlertTitle.displayName = "AlertTitle";

export const AlertDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="alert-description"
    className={cn(
      "col-start-2 grid justify-items-start gap-1 text-body-sm text-current/80 [&_p]:leading-relaxed",
      className,
    )}
    {...props}
  />
));
AlertDescription.displayName = "AlertDescription";

export const AlertAction = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="alert-action"
      className={cn("absolute end-3 top-2.5", className)}
      {...props}
    />
  ),
);
AlertAction.displayName = "AlertAction";
