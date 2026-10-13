import { cva, type VariantProps } from "class-variance-authority";
import { Separator as SeparatorPrimitive, Slot } from "radix-ui";
import * as React from "react";
import { cn } from "../../lib/cn";

export const buttonGroupVariants = cva(
  [
    "flex items-stretch",
    "has-[>[data-slot=button-group]]:gap-2",
    "*:focus-visible:relative *:focus-visible:z-10",
    "[&>input]:flex-1",
  ],
  {
    variants: {
      layout: {
        joined: "w-fit",
        attached:
          "w-fit gap-0 rounded-overlay border border-border-default bg-surface-default p-0.5 shadow-elevation-control *:rounded-control [&>[data-slot=button-group-separator]]:self-center",
        spaced: "w-fit gap-2",
        stacked: "w-full gap-2 *:w-full",
      },
      orientation: {
        horizontal: "",
        vertical: "flex-col",
      },
    },
    compoundVariants: [
      {
        layout: "joined",
        orientation: "horizontal",
        className:
          "[&>*:not(:first-child)]:rounded-s-none [&>*:not(:first-child)]:border-s-0 [&>*:not(:last-child)]:rounded-e-none",
      },
      {
        layout: "joined",
        orientation: "vertical",
        className:
          "[&>*:not(:first-child)]:rounded-t-none [&>*:not(:first-child)]:border-t-0 [&>*:not(:last-child)]:rounded-b-none",
      },
    ],
    defaultVariants: {
      layout: "joined",
      orientation: "horizontal",
    },
  },
);

export interface ButtonGroupProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof buttonGroupVariants> {}

export const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ className, orientation, layout, ...props }, ref) => {
    const resolvedOrientation = layout === "stacked" ? "vertical" : (orientation ?? "horizontal");
    return (
      <div
        ref={ref}
        role="group"
        data-slot="button-group"
        data-orientation={resolvedOrientation}
        data-layout={layout ?? "joined"}
        className={cn(buttonGroupVariants({ layout, orientation: resolvedOrientation }), className)}
        {...props}
      />
    );
  },
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
          "flex items-center gap-1.5 rounded-control border border-border-default bg-surface-muted px-3 text-label-md text-content-primary",
          "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-icon-sm",
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
      "relative m-0! shrink-0 self-stretch bg-border-default",
      orientation === "vertical" ? "w-px" : "h-px",
      className,
    )}
    {...props}
  />
));
ButtonGroupSeparator.displayName = "ButtonGroupSeparator";
