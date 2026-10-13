import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";
import * as React from "react";
import { cn } from "../../lib/cn";

export const agendaItemVariants = cva(
  [
    "group/agenda-item flex w-full items-center gap-3 text-start text-content-primary outline-none",
    "transition-[background-color,border-color,box-shadow] duration-150 motion-reduce:transition-none",
    "hover:bg-state-hover focus-visible:focus-ring",
  ],
  {
    variants: {
      type: {
        card: "rounded-container border border-border-subtle bg-surface-default p-3 shadow-elevation-card",
        row: "rounded-control border border-transparent p-2",
      },
      tone: {
        brand: "",
        neutral: "",
      },
    },
    defaultVariants: { type: "card", tone: "brand" },
  },
);

export interface AgendaItemProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof agendaItemVariants> {
  asChild?: boolean;
  month: React.ReactNode;
  day: React.ReactNode;
  today?: boolean;
  description?: React.ReactNode;
}

export const AgendaItem = React.forwardRef<HTMLElement, AgendaItemProps>(
  (
    {
      className,
      asChild = false,
      type,
      tone,
      month,
      day,
      today = false,
      description,
      children,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot.Root : "div";
    const resolvedTone = tone ?? "brand";
    return (
      <Comp
        ref={ref as React.Ref<HTMLDivElement>}
        data-slot="agenda-item"
        data-type={type ?? "card"}
        data-today={today ? "true" : undefined}
        aria-current={today ? "date" : undefined}
        className={cn(
          agendaItemVariants({ type, tone }),
          today &&
            (resolvedTone === "brand"
              ? "border-selection-border bg-selection-bg"
              : "border-border-strong bg-surface-muted"),
          className,
        )}
        {...props}
      >
        <span
          data-slot="agenda-item-date"
          className={cn(
            "flex size-control-xl shrink-0 flex-col items-center justify-center rounded-control border",
            today
              ? resolvedTone === "brand"
                ? "border-action-accent-bg bg-action-accent-bg text-action-accent-content"
                : "border-action-primary-bg bg-action-primary-bg text-action-primary-content"
              : "border-border-subtle bg-surface-muted text-content-primary",
          )}
        >
          <span className="text-mono-overline">{month}</span>
          <span className="text-heading-sm leading-none">{day}</span>
        </span>
        {asChild ? (
          <Slot.Slottable>{children}</Slot.Slottable>
        ) : (
          <span className="flex min-w-0 flex-1 flex-col gap-0.5">
            <span data-slot="agenda-item-title" className="truncate text-label-md">
              {children}
            </span>
            {description ? (
              <span className="text-body-sm text-content-secondary">{description}</span>
            ) : null}
          </span>
        )}
      </Comp>
    );
  },
);
AgendaItem.displayName = "AgendaItem";
