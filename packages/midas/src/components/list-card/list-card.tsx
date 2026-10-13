import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";
import * as React from "react";
import { cn } from "../../lib/cn";

export const listCardVariants = cva(
  [
    "group/list-card flex w-full flex-col gap-4 rounded-container border p-4 text-content-primary outline-none",
    "transition-[background-color,border-color,box-shadow] duration-150 motion-reduce:transition-none",
    "focus-visible:focus-ring",
  ],
  {
    variants: {
      surface: {
        solid: "border-border-subtle bg-surface-default shadow-elevation-card",
        glass: "material-glass border-material-glass-border bg-material-glass-surface",
      },
      tone: {
        brand: "hover:border-selection-border",
        neutral: "hover:border-border-strong",
      },
    },
    defaultVariants: { surface: "solid", tone: "brand" },
  },
);

export interface ListCardProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof listCardVariants> {
  asChild?: boolean;
}

export const ListCard = React.forwardRef<HTMLElement, ListCardProps>(
  ({ className, asChild = false, surface, tone, ...props }, ref) => {
    const Comp = asChild ? Slot.Root : "div";
    return (
      <Comp
        ref={ref as React.Ref<HTMLDivElement>}
        data-slot="list-card"
        data-surface={surface ?? "solid"}
        data-tone={tone ?? "brand"}
        className={cn(listCardVariants({ surface, tone }), className)}
        {...props}
      />
    );
  },
);
ListCard.displayName = "ListCard";

export const ListCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="list-card-header"
    className={cn(
      "flex items-center gap-3 [&>svg:not([class*='size-'])]:size-icon-lg [&>svg]:text-content-secondary",
      className,
    )}
    {...props}
  />
));
ListCardHeader.displayName = "ListCardHeader";

export const ListCardTitle = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="list-card-title"
      className={cn("text-heading-sm text-content-primary", className)}
      {...props}
    />
  ),
);
ListCardTitle.displayName = "ListCardTitle";

export const ListCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    data-slot="list-card-description"
    className={cn("text-body-sm text-content-secondary", className)}
    {...props}
  />
));
ListCardDescription.displayName = "ListCardDescription";

export interface ListCardInfoProps extends React.HTMLAttributes<HTMLDivElement> {
  label: React.ReactNode;
}

export const ListCardInfo = React.forwardRef<HTMLDivElement, ListCardInfoProps>(
  ({ className, label, children, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="list-card-info"
      className={cn("flex min-w-0 flex-col gap-0.5", className)}
      {...props}
    >
      <span className="text-mono-overline text-content-secondary">{label}</span>
      <span className="text-label-md text-content-primary">{children}</span>
    </div>
  ),
);
ListCardInfo.displayName = "ListCardInfo";

export const ListCardActions = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="list-card-actions"
    className={cn("flex flex-wrap items-center gap-2", className)}
    {...props}
  />
));
ListCardActions.displayName = "ListCardActions";
