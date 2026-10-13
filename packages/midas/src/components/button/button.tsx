import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";
import * as React from "react";
import { cn } from "../../lib/cn";
import { Spinner } from "../spinner/spinner";

export const buttonVariants = cva(
  [
    "inline-flex shrink-0 items-center justify-center whitespace-nowrap border border-transparent bg-clip-padding outline-none select-none",
    "transition-[color,background-color,border-color,box-shadow,filter] duration-150 motion-reduce:transition-none",
    "focus-visible:focus-ring aria-invalid:focus-ring-danger",
    "disabled:pointer-events-none disabled:opacity-disabled aria-disabled:pointer-events-none aria-disabled:opacity-disabled",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0",
  ],
  {
    variants: {
      variant: {
        default:
          "bg-action-primary-bg text-action-primary-content hover:bg-action-primary-bg-hover active:bg-action-primary-bg-pressed",
        primary:
          "bg-action-primary-bg text-action-primary-content hover:bg-action-primary-bg-hover active:bg-action-primary-bg-pressed",
        accent:
          "bg-action-accent-bg text-action-accent-content hover:bg-action-accent-bg-hover active:bg-action-accent-bg-pressed",
        secondary:
          "material-raised-button border-action-secondary-border bg-action-secondary-bg text-action-secondary-content hover:bg-action-secondary-bg-hover active:bg-action-secondary-bg-pressed",
        outline:
          "border-border-default bg-surface-default text-content-primary shadow-elevation-control hover:border-border-strong hover:bg-state-hover active:bg-state-pressed aria-expanded:bg-state-hover",
        ghost:
          "text-content-primary hover:bg-state-hover active:bg-state-pressed aria-expanded:bg-state-hover",
        destructive:
          "bg-action-destructive-bg text-action-destructive-content hover:bg-action-destructive-bg-hover active:bg-action-destructive-bg-pressed focus-visible:focus-ring-danger",
        success:
          "bg-status-success-subtle text-status-success-content hover:bg-status-success-fill/20 active:bg-status-success-fill/30",
        warning:
          "bg-status-warning-subtle text-status-warning-content hover:bg-status-warning-fill/20 active:bg-status-warning-fill/30",
        info: "bg-status-info-subtle text-status-info-content hover:bg-status-info-fill/20 active:bg-status-info-fill/30",
        link: "text-content-link underline-offset-4 hover:underline",
        glass: "material-glass text-content-primary hover:brightness-95 active:brightness-90",
        "liquid-glass":
          "material-liquid text-content-primary hover:brightness-95 active:brightness-90",
        frosted:
          "material-frosted border-material-scrim-border bg-material-scrim-bg text-material-on-media-content hover:brightness-110 active:brightness-125",
        "frosted-accent":
          "material-frosted border-material-tint-border bg-material-tint-bg text-material-on-media-content hover:brightness-110 active:brightness-125",
        "on-media":
          "material-raised-button bg-material-on-media-bg text-material-on-media-bg-content hover:brightness-95 active:brightness-90",
        "gradient-accent":
          "material-sheen bg-linear-to-b from-action-accent-gradient-top to-action-accent-gradient-bottom text-action-accent-content hover:bg-none hover:bg-action-accent-bg-hover active:bg-action-accent-bg-pressed",
        "gradient-neutral":
          "material-sheen bg-linear-to-b from-action-primary-gradient-top to-action-primary-gradient-bottom text-action-primary-content hover:bg-none hover:bg-action-primary-bg-hover active:bg-action-primary-bg-pressed",
      },
      size: {
        xs: "h-control-xs gap-1 px-2 text-label-sm [&_svg:not([class*='size-'])]:size-icon-sm",
        sm: "h-control-sm gap-1.5 px-2.5 text-label-sm [&_svg:not([class*='size-'])]:size-icon-sm",
        default:
          "h-control-md gap-1.5 px-3 text-label-md [&_svg:not([class*='size-'])]:size-icon-sm",
        md: "h-control-md gap-1.5 px-3 text-label-md [&_svg:not([class*='size-'])]:size-icon-sm",
        lg: "h-control-lg gap-2 px-4 text-label-md [&_svg:not([class*='size-'])]:size-icon-md",
        xl: "h-control-xl gap-2 px-5 text-label-lg [&_svg:not([class*='size-'])]:size-icon-md",
        "2xl":
          "h-control-2xl gap-2.5 px-8 text-label-lg [&_svg:not([class*='size-'])]:size-icon-lg",
        "icon-xs": "size-control-xs text-label-sm [&_svg:not([class*='size-'])]:size-icon-sm",
        "icon-sm": "size-control-sm text-label-sm [&_svg:not([class*='size-'])]:size-icon-sm",
        icon: "size-control-md text-label-md [&_svg:not([class*='size-'])]:size-icon-sm",
        "icon-md": "size-control-md text-label-md [&_svg:not([class*='size-'])]:size-icon-sm",
        "icon-lg": "size-control-lg text-label-md [&_svg:not([class*='size-'])]:size-icon-md",
        "icon-xl": "size-control-xl text-label-lg [&_svg:not([class*='size-'])]:size-icon-md",
        "icon-2xl": "size-control-2xl text-label-lg [&_svg:not([class*='size-'])]:size-icon-lg",
      },
      rounded: {
        true: "rounded-pill",
        false: "",
      },
      filled: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      { rounded: false, size: ["xs", "sm", "icon-xs", "icon-sm"], className: "rounded-xs" },
      {
        rounded: false,
        size: ["default", "md", "lg", "icon", "icon-md", "icon-lg"],
        className: "rounded-control",
      },
      { rounded: false, size: ["xl", "icon-xl"], className: "rounded-md" },
      { rounded: false, size: ["2xl", "icon-2xl"], className: "rounded-lg" },
      {
        filled: true,
        variant: "success",
        className:
          "bg-status-success-fill text-status-success-on-fill hover:bg-status-success-fill/90 active:bg-status-success-fill/80",
      },
      {
        filled: true,
        variant: "warning",
        className:
          "bg-status-warning-fill text-status-warning-on-fill hover:bg-status-warning-fill/90 active:bg-status-warning-fill/80",
      },
      {
        filled: true,
        variant: "info",
        className:
          "bg-status-info-fill text-status-info-on-fill hover:bg-status-info-fill/90 active:bg-status-info-fill/80",
      },
    ],
    defaultVariants: {
      variant: "default",
      size: "default",
      rounded: false,
      filled: false,
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  loadingText?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      rounded,
      filled,
      asChild = false,
      loading = false,
      loadingText,
      disabled,
      type,
      children,
      ...props
    },
    ref,
  ) => {
    const classes = cn(buttonVariants({ variant, size, rounded, filled }), className);

    if (asChild) {
      return (
        <Slot.Root ref={ref} data-slot="button" className={classes} {...props}>
          {children}
        </Slot.Root>
      );
    }

    return (
      <button
        ref={ref}
        type={type ?? "button"}
        data-slot="button"
        disabled={disabled || loading}
        aria-busy={loading || undefined}
        className={classes}
        {...props}
      >
        {loading && <Spinner label="" aria-hidden />}
        {loading && loadingText !== undefined
          ? loadingText
          : !(loading && size?.startsWith("icon")) && children}
      </button>
    );
  },
);
Button.displayName = "Button";
