import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "../../lib/cn";

export const cardVariants = cva(
  [
    "group/card relative flex flex-col overflow-hidden border py-(--card-p) text-body-md text-content-primary",
    "transition-[background-color,border-color,box-shadow,transform] duration-200 motion-reduce:transition-none motion-reduce:hover:scale-100",
    "has-[:focus-visible]:focus-ring",
    "has-[>[data-slot=card-footer]]:pb-0",
  ],
  {
    variants: {
      size: {
        sm: "gap-3 rounded-container [--card-p:var(--midas-space-3)]",
        default: "gap-4 rounded-container [--card-p:var(--midas-space-4)]",
        s: "gap-4 rounded-container [--card-p:var(--midas-space-6)]",
        m: "gap-5 rounded-3xl [--card-p:var(--midas-space-8)]",
        l: "gap-6 rounded-3xl [--card-p:var(--midas-space-10)]",
      },
      layout: {
        vertical: "",
        horizontal: "flex-row items-stretch",
        overlay: "justify-end border-transparent text-material-on-media-content",
      },
      surface: {
        solid: "border-border-subtle bg-surface-default shadow-elevation-card",
        glass: "material-glass border-material-glass-border bg-material-glass-surface",
      },
      hover: {
        none: "",
        ring: "hover:border-selection-border hover:shadow-elevation-raised",
        lift: "hover:scale-103 hover:border-selection-border hover:shadow-elevation-overlay",
        tint: "hover:border-selection-border hover:bg-selection-bg",
        reveal: "hover:border-selection-border",
      },
    },
    compoundVariants: [
      { layout: "overlay", size: ["sm", "default", "s"], className: "min-h-85" },
      { layout: "overlay", size: "m", className: "min-h-100" },
      { layout: "overlay", size: "l", className: "min-h-120" },
    ],
    defaultVariants: {
      size: "default",
      layout: "vertical",
      surface: "solid",
      hover: "none",
    },
  },
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, size, layout, surface, hover, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="card"
      data-size={size ?? "default"}
      data-layout={layout ?? "vertical"}
      data-surface={surface ?? "solid"}
      data-hover={hover ?? "none"}
      className={cn(cardVariants({ size, layout, surface, hover }), className)}
      {...props}
    />
  ),
);
Card.displayName = "Card";

export const CardMedia = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="card-media"
      className={cn(
        "relative mx-(--card-p) overflow-hidden rounded-control bg-surface-muted",
        "[&>img]:size-full [&>img]:object-cover [&>img]:transition-transform [&>img]:duration-300 motion-reduce:[&>img]:transition-none",
        "group-data-[layout=vertical]/card:aspect-16/10",
        "group-data-[layout=horizontal]/card:ms-(--card-p) group-data-[layout=horizontal]/card:w-2/5 group-data-[layout=horizontal]/card:shrink-0",
        "group-data-[layout=overlay]/card:absolute group-data-[layout=overlay]/card:inset-0 group-data-[layout=overlay]/card:m-0 group-data-[layout=overlay]/card:rounded-none",
        "group-data-[layout=overlay]/card:after:absolute group-data-[layout=overlay]/card:after:inset-0 group-data-[layout=overlay]/card:after:bg-linear-to-t group-data-[layout=overlay]/card:after:from-material-scrim-bg group-data-[layout=overlay]/card:after:via-material-scrim-bg/60 group-data-[layout=overlay]/card:after:to-transparent",
        "group-data-[hover=ring]/card:group-hover/card:[&>img]:scale-105 group-data-[hover=lift]/card:group-hover/card:[&>img]:scale-105 motion-reduce:group-hover/card:[&>img]:scale-100",
        "group-data-[hover=reveal]/card:group-hover/card:opacity-60",
        className,
      )}
      {...props}
    />
  ),
);
CardMedia.displayName = "CardMedia";

export const CardBody = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="card-body"
      className={cn(
        "relative z-10 flex min-w-0 flex-1 flex-col gap-3 px-(--card-p)",
        "group-data-[layout=horizontal]/card:ps-0",
        className,
      )}
      {...props}
    />
  ),
);
CardBody.displayName = "CardBody";

export const CardTag = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      data-slot="card-tag"
      className={cn(
        "absolute start-3 top-3 z-10 inline-flex h-5.5 items-center rounded-pill border border-material-scrim-border bg-material-scrim-bg px-2 text-label-sm text-material-on-media-content backdrop-blur-midas-sm",
        className,
      )}
      {...props}
    />
  ),
);
CardTag.displayName = "CardTag";

export const CardEyebrow = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="card-eyebrow"
      className={cn(
        "text-mono-overline text-content-secondary group-data-[layout=overlay]/card:text-material-on-media-content/80",
        className,
      )}
      {...props}
    />
  ),
);
CardEyebrow.displayName = "CardEyebrow";

export const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="card-header"
      className={cn(
        "relative z-10 grid auto-rows-min items-start gap-1 px-(--card-p)",
        "has-[[data-slot=card-action]]:grid-cols-[1fr_auto]",
        className,
      )}
      {...props}
    />
  ),
);
CardHeader.displayName = "CardHeader";

export const CardTitle = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="card-title"
      className={cn(
        "text-heading-sm text-content-primary group-data-[layout=overlay]/card:text-material-on-media-content",
        "group-data-[size=m]/card:text-heading-md group-data-[size=l]/card:text-heading-lg",
        className,
      )}
      {...props}
    />
  ),
);
CardTitle.displayName = "CardTitle";

export const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="card-description"
    className={cn(
      "text-body-sm text-content-secondary group-data-[layout=overlay]/card:text-material-on-media-content/80",
      "group-data-[size=m]/card:text-body-md group-data-[size=l]/card:text-body-md",
      className,
    )}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

export const CardAction = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="card-action"
      className={cn("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className)}
      {...props}
    />
  ),
);
CardAction.displayName = "CardAction";

export const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="card-content"
      className={cn("relative z-10 px-(--card-p)", className)}
      {...props}
    />
  ),
);
CardContent.displayName = "CardContent";

export const CardMeta = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="card-meta"
      className={cn(
        "flex flex-wrap items-center gap-3 text-mono-sm text-content-secondary group-data-[layout=overlay]/card:text-material-on-media-content/80",
        "[&_svg:not([class*='size-'])]:size-icon-xs [&>span]:inline-flex [&>span]:items-center [&>span]:gap-1",
        className,
      )}
      {...props}
    />
  ),
);
CardMeta.displayName = "CardMeta";

export const cardExpiryVariants = cva("text-mono-sm", {
  variants: {
    status: {
      default: "text-content-secondary",
      warning: "text-status-warning-content",
      expired: "text-status-danger-content",
    },
  },
  defaultVariants: { status: "default" },
});

export interface CardExpiryProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof cardExpiryVariants> {}

export const CardExpiry = React.forwardRef<HTMLParagraphElement, CardExpiryProps>(
  ({ className, status, ...props }, ref) => (
    <p
      ref={ref}
      data-slot="card-expiry"
      data-status={status ?? "default"}
      className={cn(cardExpiryVariants({ status }), className)}
      {...props}
    />
  ),
);
CardExpiry.displayName = "CardExpiry";

export const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="card-footer"
      className={cn(
        "relative z-10 flex items-center gap-2 border-t border-border-subtle bg-surface-muted px-(--card-p) py-3",
        className,
      )}
      {...props}
    />
  ),
);
CardFooter.displayName = "CardFooter";
