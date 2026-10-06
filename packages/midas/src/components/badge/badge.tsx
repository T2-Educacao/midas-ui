import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";
import * as React from "react";
import { cn } from "../../lib/cn";

export const badgeVariants = cva(
  [
    "inline-flex h-5.5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-full border border-transparent px-2 py-0.5 text-xs font-medium",
    "transition-[color,background-color,box-shadow] duration-150 motion-reduce:transition-none",
    "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
    "[&>svg]:pointer-events-none [&>svg]:size-3",
  ],
  {
    variants: {
      size: {
        sm: "h-4.5 px-1.5 text-[0.6875rem] [&>svg]:size-2.5",
        default: "",
        lg: "h-6.5 px-2.5 text-sm [&>svg]:size-3.5",
      },
      variant: {
        default: "bg-primary text-primary-foreground [a&]:hover:bg-primary/80",
        secondary: "bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/80",
        outline: "border-border text-foreground [a&]:hover:bg-accent",
        destructive: "bg-destructive/10 text-destructive dark:bg-destructive/20",
        success: "bg-success/10 text-success dark:bg-success/20",
        warning: "bg-warning/10 text-warning dark:bg-warning/20",
        info: "bg-info/10 text-info dark:bg-info/20",
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
        className: "bg-destructive text-destructive-foreground dark:bg-destructive",
      },
      {
        filled: true,
        variant: "success",
        className: "bg-success text-success-foreground dark:bg-success",
      },
      {
        filled: true,
        variant: "warning",
        className: "bg-warning text-warning-foreground dark:bg-warning",
      },
      { filled: true, variant: "info", className: "bg-info text-info-foreground dark:bg-info" },
    ],
    defaultVariants: {
      variant: "secondary",
      size: "default",
      filled: false,
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  asChild?: boolean;
  icon?: React.ReactNode;
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, size, filled, icon, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot.Root : "span";
    return (
      <Comp
        ref={ref}
        data-slot="badge"
        className={cn(badgeVariants({ variant, size, filled }), className)}
        {...props}
      >
        {asChild ? (
          children
        ) : (
          <>
            {icon}
            {children}
          </>
        )}
      </Comp>
    );
  },
);
Badge.displayName = "Badge";
