import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";
import * as React from "react";
import { cn } from "../../lib/cn";

export const listItemVariants = cva(
  [
    "group/list-item flex w-full items-center rounded-control border border-transparent text-start text-body-md text-content-primary outline-none",
    "transition-[color,background-color,border-color,box-shadow] duration-150 motion-reduce:transition-none",
  ],
  {
    variants: {
      size: {
        sm: "gap-2 p-2",
        md: "gap-3 p-3",
        lg: "gap-4 p-4",
      },
      orientation: {
        horizontal: "",
        vertical: "flex-col items-stretch",
      },
      tone: {
        brand: "data-[selected=true]:border-selection-border data-[selected=true]:bg-selection-bg",
        neutral: "data-[selected=true]:border-border-subtle data-[selected=true]:bg-surface-muted",
      },
      interactive: {
        true: [
          "cursor-pointer select-none hover:bg-state-hover",
          "focus-visible:focus-ring",
          "disabled:pointer-events-none disabled:text-content-disabled aria-disabled:pointer-events-none aria-disabled:text-content-disabled",
        ],
        false: "",
      },
    },
    defaultVariants: {
      size: "md",
      orientation: "horizontal",
      tone: "brand",
      interactive: false,
    },
  },
);

export interface ListItemProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "content">,
    VariantProps<typeof listItemVariants> {
  asChild?: boolean;
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
  selected?: boolean;
}

export const ListItem = React.forwardRef<HTMLElement, ListItemProps>(
  (
    {
      className,
      asChild = false,
      interactive,
      selected,
      size,
      orientation,
      tone,
      leading,
      trailing,
      children,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot.Root : "div";
    return (
      <Comp
        ref={ref as React.Ref<HTMLDivElement>}
        data-slot="list-item"
        data-size={size ?? "md"}
        data-selected={selected ? "true" : undefined}
        className={cn(listItemVariants({ interactive, size, orientation, tone }), className)}
        {...props}
      >
        {leading ? (
          <span
            data-slot="list-item-leading"
            className="flex shrink-0 items-center [&_svg:not([class*='size-'])]:size-icon-md"
          >
            {leading}
          </span>
        ) : null}
        <Slot.Slottable>{children}</Slot.Slottable>
        {trailing ? (
          <span
            data-slot="list-item-trailing"
            className="ms-auto flex shrink-0 items-center text-content-secondary [&_svg:not([class*='size-'])]:size-icon-sm"
          >
            {trailing}
          </span>
        ) : null}
      </Comp>
    );
  },
);
ListItem.displayName = "ListItem";

export const ListItemContent = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    data-slot="list-item-content"
    className={cn("flex min-w-0 flex-1 flex-col gap-0.5", className)}
    {...props}
  />
));
ListItemContent.displayName = "ListItemContent";

export const ListItemTitle = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    data-slot="list-item-title"
    className={cn("truncate text-label-md text-content-primary", className)}
    {...props}
  />
));
ListItemTitle.displayName = "ListItemTitle";

export const ListItemDescription = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    data-slot="list-item-description"
    className={cn("text-body-sm text-content-secondary", className)}
    {...props}
  />
));
ListItemDescription.displayName = "ListItemDescription";

export const ListItemMeta = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    data-slot="list-item-meta"
    className={cn("shrink-0 text-mono-sm text-content-secondary", className)}
    {...props}
  />
));
ListItemMeta.displayName = "ListItemMeta";

export const ListItemActions = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    data-slot="list-item-actions"
    className={cn("ms-auto flex shrink-0 items-center gap-1", className)}
    {...props}
  />
));
ListItemActions.displayName = "ListItemActions";

export const ListItemSkeleton = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    role="status"
    aria-busy="true"
    aria-label="Carregando"
    data-slot="list-item-skeleton"
    className={cn("flex w-full items-center gap-3 p-3", className)}
    {...props}
  >
    <span className="size-control-lg shrink-0 animate-pulse rounded-pill bg-surface-muted motion-reduce:animate-none" />
    <span className="flex flex-1 flex-col gap-2">
      <span className="h-3 w-1/3 animate-pulse rounded-pill bg-surface-muted motion-reduce:animate-none" />
      <span className="h-3 w-2/3 animate-pulse rounded-pill bg-surface-muted motion-reduce:animate-none" />
    </span>
  </div>
));
ListItemSkeleton.displayName = "ListItemSkeleton";

export const listItemGroupVariants = cva("flex w-full flex-col", {
  variants: {
    variant: {
      basic: "gap-1",
      bordered:
        "divide-y divide-border-subtle overflow-hidden rounded-container border border-border-subtle bg-surface-default shadow-elevation-card",
      cards: "gap-2",
    },
  },
  defaultVariants: { variant: "basic" },
});

export interface ListItemGroupProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof listItemGroupVariants> {
  asChild?: boolean;
}

export const ListItemGroup = React.forwardRef<HTMLElement, ListItemGroupProps>(
  ({ className, asChild = false, variant, ...props }, ref) => {
    const Comp = asChild ? Slot.Root : "div";
    return (
      <Comp
        ref={ref as React.Ref<HTMLDivElement>}
        data-slot="list-item-group"
        data-variant={variant ?? "basic"}
        className={cn(listItemGroupVariants({ variant }), className)}
        {...props}
      />
    );
  },
);
ListItemGroup.displayName = "ListItemGroup";
