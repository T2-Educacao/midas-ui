import * as React from "react";
import { cn } from "../../lib/cn";

export const EmptyState = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="empty-state"
      className={cn(
        "flex w-full flex-col items-center justify-center gap-2 px-6 py-10 text-center",
        className,
      )}
      {...props}
    />
  ),
);
EmptyState.displayName = "EmptyState";

export const EmptyStateIcon = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    aria-hidden="true"
    data-slot="empty-state-icon"
    className={cn(
      "mb-2 flex size-12 items-center justify-center rounded-full bg-muted text-muted-foreground [&>svg]:size-6",
      className,
    )}
    {...props}
  />
));
EmptyStateIcon.displayName = "EmptyStateIcon";

export const EmptyStateTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    data-slot="empty-state-title"
    className={cn("text-base font-medium text-foreground", className)}
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
    className={cn("max-w-sm text-sm text-muted-foreground", className)}
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
    className={cn("mt-4 flex flex-wrap items-center justify-center gap-2", className)}
    {...props}
  />
));
EmptyStateActions.displayName = "EmptyStateActions";
