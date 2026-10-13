import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "../../lib/cn";

export type SocialProvider = "google" | "linkedin";

export const socialProviderLabels: Record<SocialProvider, string> = {
  google: "Google",
  linkedin: "LinkedIn",
};

export interface SocialLogoProps extends React.SVGProps<SVGSVGElement> {
  provider: SocialProvider;
}

export const SocialLogo = React.forwardRef<SVGSVGElement, SocialLogoProps>(
  ({ provider, className, ...props }, ref) => {
    if (provider === "google") {
      return (
        <svg
          ref={ref}
          data-slot="social-logo"
          viewBox="0 0 48 48"
          aria-hidden="true"
          focusable="false"
          className={cn("shrink-0", className)}
          {...props}
        >
          <path
            fill="#EA4335"
            d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
          />
          <path
            fill="#4285F4"
            d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
          />
          <path
            fill="#FBBC05"
            d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
          />
          <path
            fill="#34A853"
            d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
          />
        </svg>
      );
    }
    return (
      <svg
        ref={ref}
        data-slot="social-logo"
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
        className={cn("shrink-0", className)}
        {...props}
      >
        <path
          fill="#0A66C2"
          d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"
        />
      </svg>
    );
  },
);
SocialLogo.displayName = "SocialLogo";

export const socialButtonVariants = cva(
  [
    "inline-flex shrink-0 items-center justify-center gap-2.5 whitespace-nowrap border border-transparent text-content-primary outline-none select-none",
    "transition-[color,background-color,border-color,box-shadow] duration-150 motion-reduce:transition-none",
    "focus-visible:focus-ring-neutral",
    "disabled:pointer-events-none disabled:border-transparent disabled:bg-disabled-bg disabled:text-content-disabled disabled:shadow-none",
    "[&_svg]:pointer-events-none",
  ],
  {
    variants: {
      variant: {
        outline:
          "border-border-default bg-surface-default shadow-elevation-control hover:bg-state-hover active:bg-state-pressed",
        filled: "bg-surface-muted hover:bg-state-hover active:bg-state-pressed",
        inverse:
          "bg-action-primary-bg text-action-primary-content hover:bg-action-primary-bg-hover active:bg-action-primary-bg-pressed",
        glass:
          "border-material-glass-border bg-material-glass-surface shadow-elevation-card backdrop-blur-midas-md hover:bg-surface-default",
      },
      size: {
        md: "h-control-lg text-label-md [&_svg]:size-icon-md",
        lg: "h-control-xl text-label-lg [&_svg]:size-icon-lg",
      },
      layout: {
        full: "",
        icon: "",
      },
      shape: {
        rounded: "",
        pill: "rounded-pill",
      },
    },
    compoundVariants: [
      { layout: "full", size: "md", className: "px-4" },
      { layout: "full", size: "lg", className: "px-5" },
      { layout: "icon", size: "md", className: "size-control-lg" },
      { layout: "icon", size: "lg", className: "size-control-xl" },
      { shape: "rounded", size: "md", className: "rounded-control" },
      { shape: "rounded", size: "lg", className: "rounded-md" },
    ],
    defaultVariants: {
      variant: "outline",
      size: "md",
      layout: "full",
      shape: "rounded",
    },
  },
);

export interface SocialButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children">,
    VariantProps<typeof socialButtonVariants> {
  provider: SocialProvider;
  children?: React.ReactNode;
}

export const SocialButton = React.forwardRef<HTMLButtonElement, SocialButtonProps>(
  ({ className, provider, variant, size, layout, shape, type, children, ...props }, ref) => {
    const label = children ?? `Continuar com ${socialProviderLabels[provider]}`;
    const iconOnly = layout === "icon";
    return (
      <button
        ref={ref}
        type={type ?? "button"}
        data-slot="social-button"
        data-provider={provider}
        aria-label={iconOnly && typeof label === "string" ? label : undefined}
        className={cn(socialButtonVariants({ variant, size, layout, shape }), className)}
        {...props}
      >
        <SocialLogo provider={provider} />
        {!iconOnly && label}
      </button>
    );
  },
);
SocialButton.displayName = "SocialButton";
