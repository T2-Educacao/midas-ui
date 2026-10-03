import * as React from "react";
import { cn } from "../../lib/cn";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "default" | "sm";
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, size = "default", ...props }, ref) => (
    <div
      ref={ref}
      data-slot="card"
      data-size={size}
      className={cn(
        "group/card flex flex-col gap-4 overflow-hidden rounded-xl border border-border bg-card py-4 text-sm text-card-foreground",
        "has-[>[data-slot=card-footer]]:pb-0 data-[size=sm]:gap-3 data-[size=sm]:py-3",
        className,
      )}
      {...props}
    />
  ),
);
Card.displayName = "Card";

export const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="card-header"
      className={cn(
        "grid auto-rows-min items-start gap-1 px-4 group-data-[size=sm]/card:px-3",
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
      className={cn("text-base font-medium leading-snug text-foreground", className)}
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
    className={cn("text-sm text-muted-foreground", className)}
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
      className={cn("px-4 group-data-[size=sm]/card:px-3", className)}
      {...props}
    />
  ),
);
CardContent.displayName = "CardContent";

export const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="card-footer"
      className={cn(
        "flex items-center gap-2 border-t border-border bg-muted p-4 group-data-[size=sm]/card:p-3",
        className,
      )}
      {...props}
    />
  ),
);
CardFooter.displayName = "CardFooter";
