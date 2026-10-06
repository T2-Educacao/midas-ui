import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";
import * as React from "react";
import { cn } from "../../lib/cn";

export const listItemVariants = cva(
  [
    "flex w-full items-center gap-3 rounded-lg border border-border bg-card p-3 text-start text-sm text-card-foreground outline-none",
    "transition-colors motion-reduce:transition-none",
    "data-[selected=true]:border-primary data-[selected=true]:bg-accent",
  ],
  {
    variants: {
      interactive: {
        true: [
          "cursor-pointer select-none hover:bg-accent hover:text-accent-foreground",
          "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
          "disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50",
        ],
        false: "",
      },
    },
    defaultVariants: {
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
    { className, asChild = false, interactive, selected, leading, trailing, children, ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot.Root : "div";
    return (
      <Comp
        ref={ref as React.Ref<HTMLDivElement>}
        data-slot="list-item"
        data-selected={selected ? "true" : undefined}
        className={cn(listItemVariants({ interactive }), className)}
        {...props}
      >
        {leading ? (
          <span
            data-slot="list-item-leading"
            className="flex shrink-0 items-center [&_svg:not([class*='size-'])]:size-5"
          >
            {leading}
          </span>
        ) : null}
        <Slot.Slottable>{children}</Slot.Slottable>
        {trailing ? (
          <span
            data-slot="list-item-trailing"
            className="ms-auto flex shrink-0 items-center text-muted-foreground [&_svg:not([class*='size-'])]:size-4"
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
    className={cn("truncate font-medium leading-snug", className)}
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
    className={cn("text-xs leading-snug text-muted-foreground", className)}
    {...props}
  />
));
ListItemDescription.displayName = "ListItemDescription";

export interface ListItemGroupProps extends React.HTMLAttributes<HTMLElement> {
  asChild?: boolean;
}

export const ListItemGroup = React.forwardRef<HTMLElement, ListItemGroupProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot.Root : "div";
    return (
      <Comp
        ref={ref as React.Ref<HTMLDivElement>}
        data-slot="list-item-group"
        className={cn("flex w-full flex-col gap-2", className)}
        {...props}
      />
    );
  },
);
ListItemGroup.displayName = "ListItemGroup";
