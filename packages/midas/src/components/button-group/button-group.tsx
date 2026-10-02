import { cva, type VariantProps } from "class-variance-authority";
import { Separator as SeparatorPrimitive, Slot } from "radix-ui";
import * as React from "react";
import { cn } from "../../lib/cn";

export const buttonGroupVariants = cva(
  [
    "flex w-fit items-stretch",
    "has-[>[data-slot=button-group]]:gap-2",
    "*:focus-visible:relative *:focus-visible:z-10",
    "[&>input]:flex-1",
  ],
  {
    variants: {
      orientation: {
        horizontal:
          "[&>*:not(:first-child)]:rounded-l-none [&>*:not(:first-child)]:border-l-0 [&>*:not(:last-child)]:rounded-r-none",
        vertical:
          "flex-col [&>*:not(:first-child)]:rounded-t-none [&>*:not(:first-child)]:border-t-0 [&>*:not(:last-child)]:rounded-b-none",
      },
    },
    defaultVariants: {
      orientation: "horizontal",
    },
  },
);

export interface ButtonGroupProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof buttonGroupVariants> {}

export const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ className, orientation, ...props }, ref) => (
    <div
      ref={ref}
      role="group"
      data-slot="button-group"
      data-orientation={orientation ?? "horizontal"}
      className={cn(buttonGroupVariants({ orientation }), className)}
      {...props}
    />
  ),
);
ButtonGroup.displayName = "ButtonGroup";

export interface ButtonGroupTextProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
}

export const ButtonGroupText = React.forwardRef<HTMLDivElement, ButtonGroupTextProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot.Root : "div";
    return (
      <Comp
        ref={ref}
        data-slot="button-group-text"
        className={cn(
          "flex items-center gap-2 rounded-lg border border-border bg-muted px-2.5 text-sm font-medium text-foreground",
          "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
          className,
        )}
        {...props}
      />
    );
  },
);
ButtonGroupText.displayName = "ButtonGroupText";

export const ButtonGroupSeparator = React.forwardRef<
  React.ComponentRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(({ className, orientation = "vertical", ...props }, ref) => (
  <SeparatorPrimitive.Root
    ref={ref}
    data-slot="button-group-separator"
    orientation={orientation}
    className={cn(
      "relative m-0! shrink-0 self-stretch bg-input",
      orientation === "vertical" ? "w-px" : "h-px",
      className,
    )}
    {...props}
  />
));
ButtonGroupSeparator.displayName = "ButtonGroupSeparator";
