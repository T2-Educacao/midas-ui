import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "../../lib/cn";

export const courseCoverVariants = cva(
  "group/cover relative isolate flex w-full flex-col justify-end overflow-hidden bg-surface-muted text-material-on-media-content",
  {
    variants: {
      ratio: {
        "16:9": "aspect-video",
        "4:3": "aspect-[4/3]",
        "1:1": "aspect-square",
        "4:5": "aspect-[4/5]",
        "3:4": "aspect-[3/4]",
      },
      radius: {
        container: "rounded-container",
        none: "rounded-none",
      },
    },
    defaultVariants: { ratio: "16:9", radius: "container" },
  },
);

export interface CourseCoverProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title">,
    VariantProps<typeof courseCoverVariants> {
  src?: string;
  alt?: string;
  title?: React.ReactNode;
  eyebrow?: React.ReactNode;
  badge?: React.ReactNode;
  progress?: number;
}

export const CourseCover = React.forwardRef<HTMLDivElement, CourseCoverProps>(
  (
    {
      className,
      ratio,
      radius,
      src,
      alt = "",
      title,
      eyebrow,
      badge,
      progress,
      children,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="course-cover"
      className={cn(courseCoverVariants({ ratio, radius }), className)}
      {...props}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="absolute inset-0 -z-10 size-full object-cover"
        />
      ) : null}
      {title || eyebrow ? (
        <>
          <span
            aria-hidden
            className="absolute inset-0 -z-10 bg-linear-to-t from-material-scrim-bg via-transparent to-transparent"
          />
          <div className="flex flex-col gap-1 p-4">
            {eyebrow ? <span className="text-mono-overline opacity-80">{eyebrow}</span> : null}
            {title ? <span className="text-heading-sm text-balance">{title}</span> : null}
          </div>
        </>
      ) : null}
      {badge ? <div className="absolute start-3 top-3">{badge}</div> : null}
      {children}
      {typeof progress === "number" ? (
        <div
          role="progressbar"
          aria-label="Progresso do curso"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={progress}
          className="h-1 w-full bg-material-glass-bg"
        >
          <div
            className="h-full bg-action-accent-bg"
            style={{ width: `${Math.min(Math.max(progress, 0), 100)}%` }}
          />
        </div>
      ) : null}
    </div>
  ),
);
CourseCover.displayName = "CourseCover";
