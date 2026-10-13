import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "../../lib/cn";

export const tableToolbarVariants = cva(
  "flex min-h-control-3xl flex-wrap items-center gap-3 border-b border-border-subtle px-4 py-2",
  {
    variants: {
      type: {
        default: "",
        selection: "",
      },
      surface: {
        solid: "bg-surface-default",
        glass: "material-glass border-material-glass-border bg-transparent",
      },
      tone: {
        brand: "",
        neutral: "",
      },
    },
    compoundVariants: [
      { type: "selection", tone: "brand", className: "bg-selection-bg" },
      { type: "selection", tone: "neutral", className: "bg-surface-muted" },
    ],
    defaultVariants: { type: "default", surface: "solid", tone: "brand" },
  },
);

export interface TableToolbarProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title">,
    VariantProps<typeof tableToolbarVariants> {
  title?: React.ReactNode;
  count?: React.ReactNode;
  selection?: React.ReactNode;
}

export const TableToolbar = React.forwardRef<HTMLDivElement, TableToolbarProps>(
  ({ className, type, surface, tone, title, count, selection, children, ...props }, ref) => {
    const selecting = type === "selection";
    return (
      <div
        ref={ref}
        data-slot="table-toolbar"
        data-type={type ?? "default"}
        data-surface={surface ?? "solid"}
        data-tone={tone ?? "brand"}
        className={cn(tableToolbarVariants({ type, surface, tone }), className)}
        {...props}
      >
        {selecting ? (
          <p aria-live="polite" className="text-label-md text-content-primary">
            {selection}
          </p>
        ) : (
          <div className="flex items-baseline gap-2">
            {title ? <h3 className="text-heading-sm text-content-primary">{title}</h3> : null}
            {count !== undefined && count !== null ? (
              <span className="text-mono-md text-content-secondary">{count}</span>
            ) : null}
          </div>
        )}
        {children ? (
          <div
            data-slot="table-toolbar-actions"
            className="ms-auto flex flex-wrap items-center gap-2"
          >
            {children}
          </div>
        ) : null}
      </div>
    );
  },
);
TableToolbar.displayName = "TableToolbar";
