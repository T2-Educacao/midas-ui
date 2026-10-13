import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "../../lib/cn";
import { Spinner } from "../spinner/spinner";

export const loadingStateVariants = cva("", {
  variants: {
    type: {
      inline: "inline-flex items-center gap-2",
      stacked: "flex flex-col items-center gap-3 text-center",
      overlay:
        "absolute inset-0 z-10 flex items-center justify-center rounded-[inherit] bg-surface-canvas/70 backdrop-blur-midas-sm",
    },
  },
  defaultVariants: {
    type: "inline",
  },
});

export interface LoadingStateProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title">,
    VariantProps<typeof loadingStateVariants> {
  tone?: "brand" | "neutral";
  title?: React.ReactNode;
  description?: React.ReactNode;
}

export const LoadingState = React.forwardRef<HTMLDivElement, LoadingStateProps>(
  ({ className, type = "inline", tone = "brand", title, description, children, ...props }, ref) => {
    const content =
      type === "inline" ? (
        <>
          <Spinner label="" aria-hidden="true" size="sm" tone={tone} />
          <span className="text-body-sm text-content-secondary">{title ?? children}</span>
        </>
      ) : (
        <>
          <Spinner label="" aria-hidden="true" size="lg" tone={tone} />
          {title ? <p className="text-label-md text-content-primary">{title}</p> : null}
          {description ? (
            <p className="text-body-sm text-content-secondary">{description}</p>
          ) : null}
          {children}
        </>
      );

    return (
      <div
        ref={ref}
        role="status"
        aria-live="polite"
        data-slot="loading-state"
        data-type={type}
        className={cn(loadingStateVariants({ type }), className)}
        {...props}
      >
        {type === "overlay" ? (
          <div className="flex min-w-64 flex-col items-center gap-3 rounded-[1.25rem] border border-border-default bg-surface-default px-7 py-6 text-center shadow-elevation-overlay">
            {content}
          </div>
        ) : (
          content
        )}
      </div>
    );
  },
);
LoadingState.displayName = "LoadingState";
