import { cva, type VariantProps } from "class-variance-authority";
import { Separator as SeparatorPrimitive } from "radix-ui";
import * as React from "react";
import { cn } from "../../lib/cn";

export const separatorVariants = cva("shrink-0", {
  variants: {
    orientation: {
      horizontal: "h-px w-full",
      vertical: "w-px self-stretch",
    },
    tone: {
      subtle: "bg-border-subtle",
      default: "bg-border-default",
      media: "bg-material-scrim-border",
    },
    dashed: {
      true: "border-dashed bg-transparent",
      false: "",
    },
  },
  compoundVariants: [
    { dashed: true, orientation: "horizontal", className: "h-0 border-t" },
    { dashed: true, orientation: "vertical", className: "w-0 border-s" },
    { dashed: true, tone: "subtle", className: "border-border-subtle" },
    { dashed: true, tone: "default", className: "border-border-default" },
    { dashed: true, tone: "media", className: "border-material-scrim-border" },
  ],
  defaultVariants: {
    orientation: "horizontal",
    tone: "subtle",
    dashed: false,
  },
});

export type SeparatorType = "line" | "dashed" | "label-center" | "label-left" | "icon";

export interface SeparatorProps
  extends Omit<React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>, "orientation">,
    Pick<VariantProps<typeof separatorVariants>, "tone"> {
  orientation?: "horizontal" | "vertical";
  type?: SeparatorType;
}

export const Separator = React.forwardRef<
  React.ComponentRef<typeof SeparatorPrimitive.Root>,
  SeparatorProps
>(
  (
    {
      className,
      orientation = "horizontal",
      decorative = true,
      type = "line",
      tone = "subtle",
      children,
      ...props
    },
    ref,
  ) => {
    const labeled = type === "label-center" || type === "label-left" || type === "icon";

    if (labeled && orientation === "horizontal") {
      const line = (
        <span
          aria-hidden="true"
          className={cn(separatorVariants({ orientation: "horizontal", tone }), "flex-1")}
        />
      );
      return (
        <div
          ref={ref}
          data-slot="separator"
          data-type={type}
          {...(decorative
            ? { role: "none" }
            : { role: "separator", "aria-orientation": "horizontal" as const })}
          className={cn("flex w-full items-center gap-3 py-1", className)}
          {...props}
        >
          {type === "label-left" ? null : line}
          <span
            data-slot="separator-label"
            className={cn(
              "shrink-0 text-label-sm [&>svg]:size-icon-sm",
              tone === "media" ? "text-material-on-media-content" : "text-content-secondary",
            )}
          >
            {children}
          </span>
          {line}
        </div>
      );
    }

    return (
      <SeparatorPrimitive.Root
        ref={ref}
        data-slot="separator"
        data-type={type === "dashed" ? "dashed" : "line"}
        decorative={decorative}
        orientation={orientation}
        className={cn(
          separatorVariants({ orientation, tone, dashed: type === "dashed" }),
          className,
        )}
        {...props}
      />
    );
  },
);
Separator.displayName = "Separator";
