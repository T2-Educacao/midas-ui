import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "../../lib/cn";

export const emptyStateVariants = cva(
  "group/empty flex w-full flex-col items-center justify-center gap-5 text-center",
  {
    variants: {
      container: {
        card: "rounded-[1.5rem] border border-border-default bg-surface-default px-10 py-12 shadow-elevation-control",
        plain: "py-6",
        glass: "material-glass rounded-[1.5rem] px-10 py-12",
      },
      tone: {
        brand: "",
        neutral: "",
      },
    },
    defaultVariants: {
      container: "plain",
      tone: "brand",
    },
  },
);

export interface EmptyStateProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof emptyStateVariants> {}

export const EmptyState = React.forwardRef<HTMLDivElement, EmptyStateProps>(
  ({ className, container, tone, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="empty-state"
      data-container={container ?? "plain"}
      data-tone={tone ?? "brand"}
      className={cn(emptyStateVariants({ container, tone }), className)}
      {...props}
    />
  ),
);
EmptyState.displayName = "EmptyState";

export const EmptyStateIcon = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    aria-hidden="true"
    data-slot="empty-state-icon"
    className={cn("relative flex size-28 shrink-0 items-center justify-center", className)}
    {...props}
  >
    <span className="absolute inset-0 rounded-full border border-border-default" />
    <span className="absolute inset-4 rounded-full bg-surface-muted" />
    <span className="absolute end-1 top-3 size-1.5 rounded-full bg-border-strong group-data-[tone=brand]/empty:bg-brand-primary/40" />
    <span className="absolute start-0 bottom-5 size-2 rounded-full bg-border-strong group-data-[tone=brand]/empty:bg-brand-primary/40" />
    <span className="absolute end-3 bottom-2 size-1 rounded-full bg-border-default" />
    <span className="relative flex size-14 items-center justify-center rounded-2xl border border-border-default bg-surface-default text-content-secondary shadow-elevation-control group-data-[tone=brand]/empty:text-brand-content [&>svg]:size-6.5">
      {children}
    </span>
  </div>
));
EmptyStateIcon.displayName = "EmptyStateIcon";

export const EmptyStateTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    data-slot="empty-state-title"
    className={cn("text-heading-sm text-content-primary", className)}
    {...props}
  />
));
EmptyStateTitle.displayName = "EmptyStateTitle";

export const EmptyStateDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    data-slot="empty-state-description"
    className={cn("max-w-md text-body-sm text-content-secondary", className)}
    {...props}
  />
));
EmptyStateDescription.displayName = "EmptyStateDescription";

export const EmptyStateActions = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="empty-state-actions"
    className={cn("flex flex-wrap items-center justify-center gap-2.5 pt-1", className)}
    {...props}
  />
));
EmptyStateActions.displayName = "EmptyStateActions";
