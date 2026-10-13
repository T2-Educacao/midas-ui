import { IconArrowRight, IconExternalLink } from "@tabler/icons-react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";
import * as React from "react";
import { cn } from "../../lib/cn";

export const linkVariants = cva(
  [
    "group/link relative rounded-xs border border-transparent px-0.5 outline-none",
    "transition-[color,box-shadow,border-color] duration-150 motion-reduce:transition-none",
    "focus-visible:focus-ring",
    "aria-disabled:pointer-events-none aria-disabled:text-content-disabled",
  ],
  {
    variants: {
      variant: {
        inline: "inline underline underline-offset-4",
        standalone: "inline-flex items-center gap-1.5 hover:underline underline-offset-4",
        subtle: "inline-flex items-center gap-1 hover:underline underline-offset-4",
      },
      size: {
        sm: "",
        md: "",
        lg: "",
      },
      tone: {
        brand: "text-content-link",
        neutral: "text-content-primary visited:text-content-secondary",
        media: "text-material-on-media-content focus-visible:focus-ring-neutral",
      },
    },
    compoundVariants: [
      { variant: "inline", size: "sm", className: "text-body-sm" },
      { variant: "inline", size: "md", className: "text-body-md" },
      { variant: "inline", size: "lg", className: "text-body-lg" },
      { variant: "standalone", size: "sm", className: "text-label-sm" },
      { variant: "standalone", size: "md", className: "text-label-md" },
      { variant: "standalone", size: "lg", className: "text-label-lg" },
      { variant: "subtle", size: "sm", className: "text-label-md" },
      { variant: "subtle", size: "md", className: "text-label-lg" },
      { variant: "subtle", size: "lg", className: "text-body-lg font-medium" },
    ],
    defaultVariants: {
      variant: "inline",
      size: "md",
      tone: "brand",
    },
  },
);

const iconSize = {
  sm: "size-3",
  md: "size-3.5",
  lg: "size-4",
} as const;

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
  asChild?: boolean;
  external?: boolean;
  showIcon?: boolean;
  icon?: React.ReactNode;
  disabled?: boolean;
}

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      className,
      variant,
      size,
      tone,
      asChild = false,
      external = false,
      showIcon,
      icon,
      disabled = false,
      href,
      target,
      rel,
      children,
      ...props
    },
    ref,
  ) => {
    const resolvedVariant = variant ?? "inline";
    const resolvedSize = size ?? "md";
    const withIcon = showIcon ?? (external || resolvedVariant === "standalone");
    const iconClass = cn(
      iconSize[resolvedSize],
      "shrink-0",
      resolvedVariant === "inline" && "ms-1 inline align-[-0.1em]",
    );
    const defaultIcon =
      external || resolvedVariant !== "standalone" ? (
        <IconExternalLink aria-hidden className={iconClass} />
      ) : (
        <IconArrowRight
          aria-hidden
          className={cn(
            iconClass,
            "transition-transform duration-150 group-hover/link:translate-x-0.5 motion-reduce:transition-none rtl:rotate-180 rtl:group-hover/link:-translate-x-0.5",
          )}
        />
      );
    const classes = cn(linkVariants({ variant, size, tone }), className);
    const content = (
      <>
        {children}
        {withIcon && (icon ?? defaultIcon)}
        {external && <span className="sr-only"> (abre em nova aba)</span>}
      </>
    );

    if (asChild) {
      return (
        <Slot.Root
          ref={ref}
          data-slot="link"
          aria-disabled={disabled || undefined}
          className={classes}
          {...props}
        >
          {children}
        </Slot.Root>
      );
    }

    return (
      <a
        ref={ref}
        data-slot="link"
        href={disabled ? undefined : href}
        target={external ? (target ?? "_blank") : target}
        rel={external ? (rel ?? "noopener noreferrer") : rel}
        aria-disabled={disabled || undefined}
        className={classes}
        {...props}
      >
        {content}
      </a>
    );
  },
);
Link.displayName = "Link";
