import { IconQuote } from "@tabler/icons-react";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "../../lib/cn";

export const quoteVariants = cva("relative m-0 flex flex-col gap-3", {
  variants: {
    type: {
      blockquote: "border-s-2 ps-4",
      "pull-quote": "items-center text-center",
      testimonial: "gap-4",
      tip: "gap-2 rounded-container border",
      citation: "border-s-2 ps-4",
    },
    surface: {
      plain: "",
      card: "rounded-container border border-border-subtle bg-surface-default p-6 shadow-elevation-card",
      glass: "material-glass rounded-container p-6 text-material-on-media-content",
    },
    tone: {
      brand: "",
      neutral: "",
    },
  },
  compoundVariants: [
    { type: ["blockquote", "citation"], tone: "brand", className: "border-s-action-accent-bg" },
    { type: ["blockquote", "citation"], tone: "neutral", className: "border-s-border-strong" },
    {
      type: "tip",
      tone: "brand",
      className: "border-action-accent-bg/30 bg-action-accent-bg/10 p-4",
    },
    { type: "tip", tone: "neutral", className: "border-border-subtle bg-surface-muted p-4" },
    { type: "pull-quote", surface: "plain", className: "px-4 py-6" },
  ],
  defaultVariants: { type: "blockquote", surface: "plain", tone: "brand" },
});

const textByType = {
  blockquote: "text-body-lg",
  "pull-quote": "text-heading-lg text-balance",
  testimonial: "text-body-lg",
  tip: "text-body-sm",
  citation: "text-body-md",
} as const;

type QuoteType = keyof typeof textByType;

export interface QuoteProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "title">,
    VariantProps<typeof quoteVariants> {
  author?: React.ReactNode;
  authorRole?: React.ReactNode;
  source?: React.ReactNode;
  href?: string;
  linkLabel?: React.ReactNode;
  label?: React.ReactNode;
  avatar?: React.ReactNode;
  badge?: React.ReactNode;
  cite?: string;
}

export const Quote = React.forwardRef<HTMLElement, QuoteProps>(
  (
    {
      className,
      type = "blockquote",
      surface = "plain",
      tone = "brand",
      author,
      authorRole,
      source,
      href,
      linkLabel = "Ler o documento",
      label,
      avatar,
      badge,
      cite,
      children,
      ...props
    },
    ref,
  ) => {
    const kind = (type ?? "blockquote") as QuoteType;
    const onMedia = surface === "glass";
    const secondary = onMedia ? "text-current/70" : "text-content-secondary";
    const linkClass =
      "text-label-sm text-content-link underline underline-offset-2 outline-none focus-visible:focus-ring";
    return (
      <figure
        ref={ref}
        data-slot="quote"
        data-type={kind}
        data-surface={surface}
        data-tone={tone}
        className={cn(
          quoteVariants({ type, surface, tone }),
          !onMedia && "text-content-primary",
          className,
        )}
        {...props}
      >
        {label ? (
          <span
            data-slot="quote-label"
            className={cn("text-mono-overline", !onMedia && "text-brand-content")}
          >
            {label}
          </span>
        ) : null}
        {kind === "pull-quote" || kind === "testimonial" ? (
          <IconQuote
            aria-hidden
            className={cn("size-icon-xl", onMedia ? "text-current/60" : "text-brand-content")}
          />
        ) : null}
        {badge ? <div className="flex items-center gap-2">{badge}</div> : null}
        <blockquote
          cite={cite}
          data-slot="quote-text"
          className={cn("m-0", textByType[kind], kind === "citation" && "italic")}
        >
          {children}
        </blockquote>
        {author || source ? (
          <figcaption
            data-slot="quote-caption"
            className={cn("flex items-center gap-3", kind === "pull-quote" && "flex-col gap-1")}
          >
            {avatar}
            <div className="flex min-w-0 flex-col">
              {author ? <span className="text-label-md">{author}</span> : null}
              {authorRole ? (
                <span className={cn("text-caption", secondary)}>{authorRole}</span>
              ) : null}
              {source ? <span className={cn("text-mono-sm", secondary)}>{source}</span> : null}
            </div>
          </figcaption>
        ) : null}
        {kind === "citation" && href ? (
          <a href={href} className={linkClass}>
            {linkLabel}
          </a>
        ) : null}
      </figure>
    );
  },
);
Quote.displayName = "Quote";
