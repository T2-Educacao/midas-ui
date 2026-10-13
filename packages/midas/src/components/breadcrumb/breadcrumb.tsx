import { IconArrowLeft, IconChevronRight, IconDots, IconHome } from "@tabler/icons-react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";
import * as React from "react";
import { cn } from "../../lib/cn";

export const breadcrumbVariants = cva("group/breadcrumb", {
  variants: {
    contained: {
      true: "inline-flex h-control-md items-center rounded-pill border px-3",
      false: "",
    },
    tone: {
      neutral: "",
      brand: "",
      media: "",
    },
  },
  compoundVariants: [
    {
      contained: true,
      tone: ["neutral", "brand"],
      className: "border-border-subtle bg-surface-default shadow-elevation-control",
    },
    {
      contained: true,
      tone: "media",
      className: "material-frosted border-material-scrim-border bg-material-scrim-bg",
    },
  ],
  defaultVariants: {
    contained: false,
    tone: "neutral",
  },
});

export type BreadcrumbSeparatorType = "chevron" | "slash";

export interface BreadcrumbProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof breadcrumbVariants> {
  separator?: BreadcrumbSeparatorType;
}

export const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>(
  (
    {
      "aria-label": ariaLabel = "Trilha de navegação",
      className,
      tone,
      contained,
      separator = "chevron",
      ...props
    },
    ref,
  ) => (
    <nav
      ref={ref}
      aria-label={ariaLabel}
      data-slot="breadcrumb"
      data-tone={tone ?? "neutral"}
      data-separator={separator}
      data-contained={contained ? "true" : undefined}
      className={cn(breadcrumbVariants({ tone, contained }), className)}
      {...props}
    />
  ),
);
Breadcrumb.displayName = "Breadcrumb";

export const BreadcrumbList = React.forwardRef<
  HTMLOListElement,
  React.OlHTMLAttributes<HTMLOListElement>
>(({ className, ...props }, ref) => (
  <ol
    ref={ref}
    data-slot="breadcrumb-list"
    className={cn(
      "flex flex-wrap items-center gap-1.5 break-words text-body-sm text-content-secondary",
      "group-data-[tone=media]/breadcrumb:text-material-on-media-content",
      className,
    )}
    {...props}
  />
));
BreadcrumbList.displayName = "BreadcrumbList";

export const BreadcrumbItem = React.forwardRef<
  HTMLLIElement,
  React.LiHTMLAttributes<HTMLLIElement>
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    data-slot="breadcrumb-item"
    className={cn("inline-flex items-center gap-1.5", className)}
    {...props}
  />
));
BreadcrumbItem.displayName = "BreadcrumbItem";

export interface BreadcrumbLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  asChild?: boolean;
}

const breadcrumbLinkClasses = [
  "inline-flex items-center gap-1.5 rounded-xs text-label-md outline-none transition-colors motion-reduce:transition-none",
  "hover:text-content-primary focus-visible:focus-ring",
  "group-data-[tone=brand]/breadcrumb:hover:text-content-link",
  "group-data-[tone=media]/breadcrumb:text-material-on-media-content/80 group-data-[tone=media]/breadcrumb:hover:text-material-on-media-content",
  "[&_svg:not([class*='size-'])]:size-icon-sm",
];

export const BreadcrumbLink = React.forwardRef<HTMLAnchorElement, BreadcrumbLinkProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot.Root : "a";
    return (
      <Comp
        ref={ref}
        data-slot="breadcrumb-link"
        className={cn(breadcrumbLinkClasses, className)}
        {...props}
      />
    );
  },
);
BreadcrumbLink.displayName = "BreadcrumbLink";

export const BreadcrumbHome = React.forwardRef<HTMLAnchorElement, BreadcrumbLinkProps>(
  ({ className, asChild = false, children, "aria-label": ariaLabel = "Início", ...props }, ref) => {
    const Comp = asChild ? Slot.Root : "a";
    return (
      <Comp
        ref={ref}
        data-slot="breadcrumb-home"
        aria-label={ariaLabel}
        className={cn(breadcrumbLinkClasses, className)}
        {...props}
      >
        {children ?? <IconHome aria-hidden="true" />}
      </Comp>
    );
  },
);
BreadcrumbHome.displayName = "BreadcrumbHome";

export const BreadcrumbBack = React.forwardRef<HTMLAnchorElement, BreadcrumbLinkProps>(
  ({ className, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot.Root : "a";
    return (
      <Comp
        ref={ref}
        data-slot="breadcrumb-back"
        className={cn(
          breadcrumbLinkClasses,
          "h-control-md text-content-primary group-data-[tone=media]/breadcrumb:text-material-on-media-content",
          className,
        )}
        {...props}
      >
        <IconArrowLeft aria-hidden="true" className="rtl:rotate-180" />
        {children}
      </Comp>
    );
  },
);
BreadcrumbBack.displayName = "BreadcrumbBack";

export const BreadcrumbPage = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    data-slot="breadcrumb-page"
    aria-current="page"
    className={cn(
      "text-label-md text-content-primary",
      "group-data-[tone=media]/breadcrumb:text-material-on-media-content",
      className,
    )}
    {...props}
  />
));
BreadcrumbPage.displayName = "BreadcrumbPage";

export const BreadcrumbSeparator = React.forwardRef<
  HTMLLIElement,
  React.LiHTMLAttributes<HTMLLIElement>
>(({ className, children, ...props }, ref) => (
  <li
    ref={ref}
    role="presentation"
    aria-hidden="true"
    data-slot="breadcrumb-separator"
    className={cn(
      "inline-flex items-center text-content-secondary [&>svg]:size-icon-xs",
      "group-data-[tone=media]/breadcrumb:text-material-on-media-content/70",
      className,
    )}
    {...props}
  >
    {children ?? (
      <>
        <IconChevronRight className="rtl:rotate-180 group-data-[separator=slash]/breadcrumb:hidden" />
        <span className="hidden text-label-md group-data-[separator=slash]/breadcrumb:inline">
          /
        </span>
      </>
    )}
  </li>
));
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";

export const BreadcrumbEllipsis = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    role="presentation"
    aria-hidden="true"
    data-slot="breadcrumb-ellipsis"
    className={cn("inline-flex size-6 items-center justify-center", className)}
    {...props}
  >
    <IconDots className="size-icon-sm" />
  </span>
));
BreadcrumbEllipsis.displayName = "BreadcrumbEllipsis";
