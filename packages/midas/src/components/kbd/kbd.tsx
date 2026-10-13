import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "../../lib/cn";

export const kbdVariants = cva(
  "pointer-events-none inline-flex w-fit select-none items-center justify-center gap-1 rounded-sm border border-border-default bg-surface-muted font-mono text-content-secondary [&_svg:not([class*='size-'])]:size-icon-xs",
  {
    variants: {
      size: {
        sm: "h-5 min-w-5 px-1.25 text-mono-sm",
        md: "h-6 min-w-6 px-1.5 text-mono-sm",
      },
    },
    defaultVariants: {
      size: "sm",
    },
  },
);

export interface KbdProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof kbdVariants> {}

export const Kbd = React.forwardRef<HTMLElement, KbdProps>(({ className, size, ...props }, ref) => (
  <kbd ref={ref} data-slot="kbd" className={cn(kbdVariants({ size }), className)} {...props} />
));
Kbd.displayName = "Kbd";

export const KbdGroup = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => (
    <kbd
      ref={ref}
      data-slot="kbd-group"
      className={cn("inline-flex items-center gap-1", className)}
      {...props}
    />
  ),
);
KbdGroup.displayName = "KbdGroup";
