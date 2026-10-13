import { IconX } from "@tabler/icons-react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";
import * as React from "react";
import { cn } from "../../lib/cn";

const tones = [
  "neutral",
  "brand",
  "success",
  "danger",
  "warning",
  "info",
  "inverse",
  "media",
] as const;
export type TagTone = (typeof tones)[number];

const subtleTone: Record<TagTone, string> = {
  neutral: "border-border-subtle bg-surface-muted text-content-primary",
  brand: "border-border-subtle bg-selection-bg text-brand-content",
  success: "border-status-success-border bg-status-success-subtle text-status-success-content",
  danger: "border-status-danger-border bg-status-danger-subtle text-status-danger-content",
  warning: "border-status-warning-border bg-status-warning-subtle text-status-warning-content",
  info: "border-status-info-border bg-status-info-subtle text-status-info-content",
  inverse: "border-transparent bg-action-primary-bg text-action-primary-content",
  media:
    "border-transparent bg-material-scrim-bg text-material-on-media-content backdrop-blur-midas-sm",
};

const accentOf: Record<TagTone, string> = {
  neutral: "text-content-secondary",
  brand: "text-brand-content",
  success: "text-status-success-content",
  danger: "text-status-danger-content",
  warning: "text-status-warning-content",
  info: "text-status-info-content",
  inverse: "text-action-primary-content",
  media: "text-material-on-media-content",
};

const dotOf: Record<TagTone, string> = {
  neutral: "bg-content-secondary",
  brand: "bg-brand-content",
  success: "bg-status-success-fill",
  danger: "bg-status-danger-fill",
  warning: "bg-status-warning-fill",
  info: "bg-status-info-fill",
  inverse: "bg-action-primary-content",
  media: "bg-material-on-media-content",
};

const toneVariants = Object.fromEntries(tones.map((tone) => [tone, ""])) as Record<TagTone, "">;

export const tagVariants = cva(
  [
    "inline-flex w-fit shrink-0 items-center whitespace-nowrap rounded-pill border font-medium",
    "transition-[color,background-color,box-shadow] duration-150 motion-reduce:transition-none",
    "[&>svg]:pointer-events-none [&>svg]:shrink-0",
    "focus-visible:focus-ring",
    "data-[disabled]:pointer-events-none data-[disabled]:opacity-disabled",
  ],
  {
    variants: {
      tone: toneVariants,
      variant: {
        subtle: "",
        outline:
          "border-border-subtle bg-surface-default text-content-primary shadow-elevation-control",
        glass: "material-glass text-content-primary",
      },
      size: {
        sm: "h-5 gap-1 px-2 text-label-sm [&>svg]:size-icon-xs",
        md: "h-control-xs gap-1 px-2.5 text-label-sm [&>svg]:size-3.5",
        lg: "h-control-sm gap-1 px-3 text-label-md [&>svg]:size-icon-sm",
        xl: "h-control-md gap-1.5 px-3.5 text-label-md [&>svg]:size-icon-sm",
      },
    },
    compoundVariants: tones.map((tone) => ({
      tone,
      variant: "subtle" as const,
      className: subtleTone[tone],
    })),
    defaultVariants: {
      tone: "neutral",
      variant: "subtle",
      size: "sm",
    },
  },
);

export interface TagProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof tagVariants> {
  icon?: React.ReactNode;
  emoji?: string;
  avatar?: React.ReactNode;
  dot?: boolean;
  onRemove?: () => void;
  removeLabel?: string;
  disabled?: boolean;
  asChild?: boolean;
}

export const Tag = React.forwardRef<HTMLSpanElement, TagProps>(
  (
    {
      className,
      tone = "neutral",
      variant = "subtle",
      size = "sm",
      icon,
      emoji,
      avatar,
      dot = false,
      onRemove,
      removeLabel = "Remover",
      disabled = false,
      asChild = false,
      children,
      ...props
    },
    ref,
  ) => {
    const resolvedTone = (tone ?? "neutral") as TagTone;
    const leadingAccent = accentOf[resolvedTone];
    const ariaLabel = typeof children === "string" ? `${removeLabel} ${children}` : removeLabel;
    const Comp = asChild ? Slot.Root : "span";

    return (
      <Comp
        ref={ref}
        data-slot="tag"
        data-tone={resolvedTone}
        data-disabled={disabled ? "" : undefined}
        className={cn(tagVariants({ tone, variant, size }), onRemove && "pe-1.5", className)}
        {...props}
      >
        {asChild ? (
          children
        ) : (
          <>
            {dot ? (
              <span
                aria-hidden="true"
                data-slot="tag-leading"
                className={cn(
                  "size-1.5 shrink-0 rounded-full",
                  dotOf[resolvedTone],
                  size === "lg" || size === "xl" ? "size-2" : null,
                )}
              />
            ) : null}
            {emoji ? (
              <span aria-hidden="true" data-slot="tag-leading" className="leading-none">
                {emoji}
              </span>
            ) : null}
            {avatar ? (
              <span
                data-slot="tag-leading"
                className="inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full [&>*]:size-4"
              >
                {avatar}
              </span>
            ) : null}
            {icon ? (
              <span
                aria-hidden="true"
                data-slot="tag-leading"
                className={cn("inline-flex shrink-0 items-center", leadingAccent)}
              >
                {icon}
              </span>
            ) : null}
            {children}
            {onRemove ? (
              <button
                type="button"
                data-slot="tag-remove"
                aria-label={ariaLabel}
                disabled={disabled}
                onClick={onRemove}
                className={cn(
                  "inline-flex size-4 shrink-0 items-center justify-center rounded-full outline-none",
                  "opacity-80 transition-[opacity,background-color,box-shadow] duration-150 hover:bg-state-hover hover:opacity-100 motion-reduce:transition-none",
                  "focus-visible:focus-ring disabled:pointer-events-none",
                )}
              >
                <IconX aria-hidden="true" className="size-3" />
              </button>
            ) : null}
          </>
        )}
      </Comp>
    );
  },
);
Tag.displayName = "Tag";

export const tagDetailVariants = cva(
  "inline-flex w-fit max-w-full items-center border text-start",
  {
    variants: {
      tone: toneVariants,
      variant: {
        subtle: "",
        outline: "border-border-subtle bg-surface-default shadow-elevation-control",
        glass: "material-glass",
      },
      size: {
        md: "gap-2 p-1.5 pe-3",
        lg: "gap-2.5 p-2 pe-4",
      },
      shape: {
        rounded: "",
        pill: "rounded-pill",
      },
    },
    compoundVariants: [
      { shape: "rounded", size: "md", className: "rounded-xl" },
      { shape: "rounded", size: "lg", className: "rounded-2xl" },
      ...tones.map((tone) => ({
        tone,
        variant: "subtle" as const,
        className: subtleTone[tone],
      })),
    ],
    defaultVariants: {
      tone: "neutral",
      variant: "subtle",
      size: "md",
      shape: "rounded",
    },
  },
);

export interface TagDetailProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title">,
    VariantProps<typeof tagDetailVariants> {
  icon?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
}

export const TagDetail = React.forwardRef<HTMLDivElement, TagDetailProps>(
  (
    { className, tone, variant, size, shape, icon, title, description, children, ...props },
    ref,
  ) => {
    const resolvedTone = (tone ?? "neutral") as TagTone;
    const resolvedSize = size ?? "md";
    const pill = shape === "pill";
    return (
      <div
        ref={ref}
        data-slot="tag-detail"
        data-tone={resolvedTone}
        className={cn(tagDetailVariants({ tone, variant, size, shape }), className)}
        {...props}
      >
        {icon ? (
          <span
            aria-hidden="true"
            data-slot="tag-detail-icon"
            className={cn(
              "inline-flex shrink-0 items-center justify-center",
              accentOf[resolvedTone],
              pill
                ? "[&>svg]:size-icon-sm"
                : cn(
                    "border border-border-subtle bg-surface-default",
                    resolvedSize === "lg"
                      ? "size-8 rounded-lg [&>svg]:size-4.5"
                      : "size-7 rounded-md [&>svg]:size-icon-sm",
                  ),
            )}
          >
            {icon}
          </span>
        ) : null}
        <span className="flex min-w-0 flex-col gap-px">
          {title ? (
            <span
              data-slot="tag-detail-title"
              className={cn(
                "text-mono-overline",
                resolvedTone === "neutral" ? "text-content-secondary" : accentOf[resolvedTone],
              )}
            >
              {title}
            </span>
          ) : null}
          {description || children ? (
            <span
              data-slot="tag-detail-description"
              className={cn(resolvedSize === "lg" ? "text-label-md" : "text-label-sm")}
            >
              {description ?? children}
            </span>
          ) : null}
        </span>
      </div>
    );
  },
);
TagDetail.displayName = "TagDetail";
