"use client";

import { IconArrowLeft, IconCheck, IconPlayerPlayFilled } from "@tabler/icons-react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";
import * as React from "react";
import { cn } from "../../lib/cn";
import { VideoPlayer, type VideoPlayerProps } from "../video-player";

interface HeroContextValue {
  tone: "brand" | "neutral";
  onMedia: boolean;
}

const HeroContext = React.createContext<HeroContextValue>({ tone: "brand", onMedia: false });

export const heroVariants = cva(
  "relative isolate flex w-full overflow-hidden rounded-container border border-border-subtle",
  {
    variants: {
      style: {
        solid: "",
        glass: "",
      },
      tone: {
        brand: "",
        neutral: "",
      },
      ratio: {
        auto: "min-h-80",
        "21:9": "aspect-[21/9]",
        "16:9": "aspect-video",
        "4:3": "aspect-[4/3]",
        "1:1": "aspect-square",
        "4:5": "aspect-[4/5]",
        "3:4": "aspect-[3/4]",
        "9:16": "aspect-[9/16]",
      },
    },
    defaultVariants: { style: "solid", tone: "brand", ratio: "auto" },
  },
);

export interface HeroProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "style">,
    Omit<VariantProps<typeof heroVariants>, "style"> {
  surface?: "solid" | "glass";
  media?: React.ReactNode;
  scrim?: boolean;
}

export const Hero = React.forwardRef<HTMLElement, HeroProps>(
  (
    {
      className,
      surface = "solid",
      tone = "brand",
      ratio,
      media,
      scrim = true,
      children,
      ...props
    },
    ref,
  ) => {
    const onMedia = Boolean(media);
    const value = React.useMemo<HeroContextValue>(
      () => ({ tone: tone ?? "brand", onMedia }),
      [tone, onMedia],
    );
    return (
      <HeroContext.Provider value={value}>
        <section
          ref={ref}
          data-slot="hero"
          data-surface={surface}
          data-tone={tone}
          className={cn(
            heroVariants({ style: surface, tone, ratio }),
            onMedia
              ? "border-0 bg-material-on-media-bg-content text-material-on-media-content"
              : "bg-surface-default text-content-primary",
            className,
          )}
          {...props}
        >
          {media ? (
            <div
              data-slot="hero-media"
              className="absolute inset-0 -z-10 [&>img]:size-full [&>img]:object-cover [&>video]:size-full [&>video]:object-cover"
            >
              {media}
            </div>
          ) : null}
          {media && scrim ? (
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-r rtl:bg-linear-to-l from-material-scrim-bg via-material-scrim-bg/50 to-transparent"
            />
          ) : null}
          {children}
        </section>
      </HeroContext.Provider>
    );
  },
);
Hero.displayName = "Hero";

export interface HeroContentProps extends React.HTMLAttributes<HTMLDivElement> {
  glass?: boolean;
}

export const HeroContent = React.forwardRef<HTMLDivElement, HeroContentProps>(
  ({ className, glass = false, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="hero-content"
      className={cn(
        "relative flex min-w-0 max-w-xl flex-col gap-4 p-6 md:p-8",
        glass && "material-glass m-4 rounded-container border border-material-glass-border",
        className,
      )}
      {...props}
    />
  ),
);
HeroContent.displayName = "HeroContent";

export const HeroEyebrow = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const { tone, onMedia } = React.useContext(HeroContext);
  return (
    <p
      ref={ref}
      data-slot="hero-eyebrow"
      className={cn(
        "text-mono-overline",
        tone === "brand" ? (onMedia ? "text-brand-primary" : "text-brand-content") : "opacity-70",
        className,
      )}
      {...props}
    />
  );
});
HeroEyebrow.displayName = "HeroEyebrow";

export const HeroTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement> & { as?: "h1" | "h2" | "h3" }
>(({ className, as: Tag = "h2", ...props }, ref) => (
  <Tag
    ref={ref}
    data-slot="hero-title"
    className={cn("m-0 text-display-md text-balance", className)}
    {...props}
  />
));
HeroTitle.displayName = "HeroTitle";

export const HeroDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    data-slot="hero-description"
    className={cn("m-0 text-body-lg text-current/80", className)}
    {...props}
  />
));
HeroDescription.displayName = "HeroDescription";

export const HeroActions = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="hero-actions"
      className={cn("flex flex-wrap items-center gap-3", className)}
      {...props}
    />
  ),
);
HeroActions.displayName = "HeroActions";

export const HeroChips = React.forwardRef<HTMLUListElement, React.HTMLAttributes<HTMLUListElement>>(
  ({ className, ...props }, ref) => (
    <ul
      ref={ref}
      data-slot="hero-chips"
      className={cn("m-0 flex list-none flex-wrap items-center gap-2 p-0", className)}
      {...props}
    />
  ),
);
HeroChips.displayName = "HeroChips";

export const HeroChip = React.forwardRef<
  HTMLLIElement,
  React.HTMLAttributes<HTMLLIElement> & { icon?: React.ReactNode }
>(({ className, icon, children, ...props }, ref) => {
  const { onMedia } = React.useContext(HeroContext);
  return (
    <li
      ref={ref}
      data-slot="hero-chip"
      className={cn(
        "inline-flex h-control-sm items-center gap-1.5 rounded-pill border px-3 text-label-sm [&_svg]:size-icon-sm",
        onMedia
          ? "material-frosted border-material-scrim-border bg-material-scrim-bg text-material-on-media-content"
          : "border-border-default bg-surface-muted text-content-primary",
        className,
      )}
      {...props}
    >
      {icon}
      {children}
    </li>
  );
});
HeroChip.displayName = "HeroChip";

export const HeroStats = React.forwardRef<HTMLDListElement, React.HTMLAttributes<HTMLDListElement>>(
  ({ className, ...props }, ref) => (
    <dl
      ref={ref}
      data-slot="hero-stats"
      className={cn("m-0 flex flex-wrap items-end gap-x-8 gap-y-3", className)}
      {...props}
    />
  ),
);
HeroStats.displayName = "HeroStats";

export interface HeroStatProps extends React.HTMLAttributes<HTMLDivElement> {
  value: React.ReactNode;
  label: React.ReactNode;
}

export const HeroStat = React.forwardRef<HTMLDivElement, HeroStatProps>(
  ({ className, value, label, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="hero-stat"
      className={cn("flex flex-col-reverse", className)}
      {...props}
    >
      <dt className="text-caption text-current/70">{label}</dt>
      <dd className="m-0 text-mono-md font-medium tabular-nums">{value}</dd>
    </div>
  ),
);
HeroStat.displayName = "HeroStat";

export interface HeroProgressProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  value: number;
  max?: number;
  label?: React.ReactNode;
  detail?: React.ReactNode;
  valueLabel?: React.ReactNode;
}

export const HeroProgress = React.forwardRef<HTMLDivElement, HeroProgressProps>(
  ({ className, value, max = 100, label, detail, valueLabel, ...props }, ref) => {
    const percent = Math.min(Math.max((value / max) * 100, 0), 100);
    return (
      <div
        ref={ref}
        data-slot="hero-progress"
        className={cn("flex flex-col gap-1.5", className)}
        {...props}
      >
        <div className="flex items-center justify-between gap-3 text-label-sm">
          <span>{label}</span>
          <span className="tabular-nums">{valueLabel ?? `${Math.round(percent)}%`}</span>
        </div>
        <div
          role="progressbar"
          aria-label={typeof label === "string" ? label : "Progresso"}
          aria-valuemin={0}
          aria-valuemax={max}
          aria-valuenow={value}
          className="h-1.5 w-full overflow-hidden rounded-pill bg-current/20"
        >
          <div
            className="h-full rounded-pill bg-action-accent-bg"
            style={{ width: `${percent}%` }}
          />
        </div>
        {detail ? <p className="m-0 text-caption text-current/70">{detail}</p> : null}
      </div>
    );
  },
);
HeroProgress.displayName = "HeroProgress";

export interface HeroCountdownProps extends React.HTMLAttributes<HTMLDivElement> {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const HeroCountdown = React.forwardRef<HTMLDivElement, HeroCountdownProps>(
  ({ className, days, hours, minutes, seconds, ...props }, ref) => {
    const parts = [
      { label: "dias", value: days },
      { label: "horas", value: hours },
      { label: "min", value: minutes },
      { label: "seg", value: seconds },
    ];
    return (
      <div
        ref={ref}
        role="timer"
        aria-label={`Faltam ${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos`}
        data-slot="hero-countdown"
        className={cn("flex items-center gap-3", className)}
        {...props}
      >
        {parts.map((part) => (
          <div
            key={part.label}
            aria-hidden
            className="material-frosted flex min-w-16 flex-col items-center rounded-container border border-material-scrim-border bg-material-scrim-bg px-3 py-2"
          >
            <span className="text-heading-lg font-semibold tabular-nums">
              {String(part.value).padStart(2, "0")}
            </span>
            <span className="text-mono-overline">{part.label}</span>
          </div>
        ))}
      </div>
    );
  },
);
HeroCountdown.displayName = "HeroCountdown";

interface HeroPanelsContextValue {
  value: string | undefined;
  setValue: (next: string | undefined) => void;
}

const HeroPanelsContext = React.createContext<HeroPanelsContextValue | null>(null);

export interface HeroPanelsProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "defaultValue"> {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string | undefined) => void;
}

export const HeroPanels = React.forwardRef<HTMLDivElement, HeroPanelsProps>(
  ({ className, value, defaultValue, onValueChange, ...props }, ref) => {
    const [internal, setInternal] = React.useState(defaultValue);
    const current = value !== undefined ? value : internal;
    const setValue = React.useCallback(
      (next: string | undefined) => {
        setInternal(next);
        onValueChange?.(next);
      },
      [onValueChange],
    );
    const context = React.useMemo(() => ({ value: current, setValue }), [current, setValue]);
    return (
      <HeroPanelsContext.Provider value={context}>
        <div
          ref={ref}
          role="group"
          data-slot="hero-panels"
          className={cn("flex h-96 w-full gap-2", className)}
          {...props}
        />
      </HeroPanelsContext.Provider>
    );
  },
);
HeroPanels.displayName = "HeroPanels";

export interface HeroPanelProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  value: string;
  index?: React.ReactNode;
  title: React.ReactNode;
  image?: string;
}

export const HeroPanel = React.forwardRef<HTMLDivElement, HeroPanelProps>(
  ({ className, value, index, title, image, children, ...props }, ref) => {
    const context = React.useContext(HeroPanelsContext);
    if (!context) {
      throw new Error("HeroPanel precisa estar dentro de HeroPanels");
    }
    const expanded = context.value === value;
    return (
      <div
        ref={ref}
        data-slot="hero-panel"
        data-state={expanded ? "expanded" : "collapsed"}
        className={cn(
          "group/panel relative isolate flex min-w-0 overflow-hidden rounded-container border border-border-subtle bg-surface-muted text-content-primary transition-[flex-grow] duration-300 motion-reduce:transition-none",
          expanded ? "grow-[6] text-material-on-media-content" : "grow hover:grow-[1.4]",
          className,
        )}
        {...props}
      >
        {image ? (
          <img
            src={image}
            alt=""
            className={cn(
              "absolute inset-0 -z-10 size-full object-cover",
              !expanded && "grayscale",
            )}
          />
        ) : null}
        {expanded ? (
          <span
            aria-hidden
            className="absolute inset-0 -z-10 bg-linear-to-t from-material-scrim-bg to-transparent"
          />
        ) : null}
        <button
          type="button"
          aria-expanded={expanded}
          onClick={() => context.setValue(expanded ? undefined : value)}
          className="flex h-full w-full flex-col justify-between gap-3 p-4 text-start outline-none focus-visible:focus-ring"
        >
          {index ? <span className="text-mono-overline">{index}</span> : <span />}
          <span
            className={cn(
              "text-heading-md",
              !expanded && "[writing-mode:vertical-rl] rtl:rotate-180",
            )}
          >
            {title}
          </span>
        </button>
        {expanded && children ? (
          <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-4 pt-16">
            <span className="text-heading-md">{title}</span>
            {children}
          </div>
        ) : null}
      </div>
    );
  },
);
HeroPanel.displayName = "HeroPanel";

export type HeroLessonState = "default" | "playing" | "done";

export interface HeroLessonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "title"> {
  asChild?: boolean;
  index?: React.ReactNode;
  title: React.ReactNode;
  meta?: React.ReactNode;
  state?: HeroLessonState;
}

export const HeroLesson = React.forwardRef<HTMLButtonElement, HeroLessonProps>(
  (
    { className, asChild = false, index, title, meta, state = "default", children, ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot.Root : "button";
    return (
      <Comp
        ref={ref}
        type={asChild ? undefined : "button"}
        data-slot="hero-lesson"
        data-state={state}
        aria-current={state === "playing" ? "true" : undefined}
        className={cn(
          "flex w-full items-center gap-3 rounded-control px-3 py-2 text-start outline-none transition-colors hover:bg-state-hover focus-visible:focus-ring motion-reduce:transition-none",
          state === "playing" && "bg-action-accent-bg/15",
          state === "done" && "opacity-70",
          className,
        )}
        {...props}
      >
        {asChild ? (
          children
        ) : (
          <>
            <span
              aria-hidden
              className={cn(
                "flex size-control-md shrink-0 items-center justify-center rounded-pill",
                state === "done" && "bg-status-success-subtle text-status-success-content",
                state === "playing" && "bg-action-accent-bg text-action-accent-content",
                state === "default" && "bg-surface-muted text-content-secondary",
              )}
            >
              {state === "done" ? (
                <IconCheck className="size-icon-sm" />
              ) : (
                <IconPlayerPlayFilled className="size-icon-sm" />
              )}
            </span>
            <span className="flex min-w-0 flex-1 flex-col">
              {index ? <span className="text-mono-overline">{index}</span> : null}
              <span className="truncate text-label-md">{title}</span>
              {meta ? <span className="truncate text-caption text-current/70">{meta}</span> : null}
            </span>
          </>
        )}
      </Comp>
    );
  },
);
HeroLesson.displayName = "HeroLesson";

export interface HeroHotspotProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "title"> {
  x: number;
  y: number;
  label: React.ReactNode;
  detail?: React.ReactNode;
  expanded?: boolean;
  defaultExpanded?: boolean;
  onExpandedChange?: (expanded: boolean) => void;
}

export const HeroHotspot = React.forwardRef<HTMLButtonElement, HeroHotspotProps>(
  (
    {
      className,
      x,
      y,
      label,
      detail,
      expanded,
      defaultExpanded = false,
      onExpandedChange,
      onClick,
      style,
      ...props
    },
    ref,
  ) => {
    const [internal, setInternal] = React.useState(defaultExpanded);
    const open = expanded !== undefined ? expanded : internal;
    return (
      <button
        ref={ref}
        type="button"
        data-slot="hero-hotspot"
        data-state={open ? "expanded" : "collapsed"}
        aria-expanded={open}
        onClick={(event) => {
          onClick?.(event);
          setInternal(!open);
          onExpandedChange?.(!open);
        }}
        className={cn(
          "material-frosted absolute flex items-center gap-2 rounded-pill border border-material-scrim-border bg-material-scrim-bg p-1.5 text-start text-material-on-media-content outline-none focus-visible:focus-ring-neutral",
          className,
        )}
        style={{ insetInlineStart: `${x}%`, top: `${y}%`, ...style }}
        {...props}
      >
        <span aria-hidden className="size-3 shrink-0 rounded-pill bg-brand-primary" />
        {open ? (
          <span className="flex flex-col pe-2">
            <span className="text-label-md">{label}</span>
            {detail ? <span className="text-caption opacity-80">{detail}</span> : null}
          </span>
        ) : (
          <span className="sr-only">{label}</span>
        )}
      </button>
    );
  },
);
HeroHotspot.displayName = "HeroHotspot";

export interface HeroTrailerProps extends VideoPlayerProps {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  cover: React.ReactNode | ((openTrailer: () => void) => React.ReactNode);
  endContent?: React.ReactNode;
  backLabel?: string;
}

export const HeroTrailer = React.forwardRef<HTMLDivElement, HeroTrailerProps>(
  (
    {
      className,
      open,
      defaultOpen = false,
      onOpenChange,
      cover,
      endContent,
      backLabel = "Voltar",
      onEnded,
      ...player
    },
    ref,
  ) => {
    const [internal, setInternal] = React.useState(defaultOpen);
    const [finished, setFinished] = React.useState(false);
    const isOpen = open !== undefined ? open : internal;
    const setOpen = (next: boolean) => {
      setInternal(next);
      if (!next) setFinished(false);
      onOpenChange?.(next);
    };
    if (!isOpen) {
      return (
        <div
          ref={ref}
          data-slot="hero-trailer"
          data-state="cover"
          className={cn("relative", className)}
        >
          {typeof cover === "function" ? cover(() => setOpen(true)) : cover}
        </div>
      );
    }
    return (
      <div
        ref={ref}
        data-slot="hero-trailer"
        data-state="playing"
        className={cn("relative", className)}
      >
        {finished && endContent ? (
          endContent
        ) : (
          <VideoPlayer
            {...player}
            autoPlay
            onEnded={() => {
              setFinished(true);
              onEnded?.();
            }}
          />
        )}
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="material-frosted absolute start-4 top-4 z-10 inline-flex h-control-md items-center gap-1.5 rounded-pill border border-material-scrim-border bg-material-scrim-bg px-3 text-label-sm text-material-on-media-content outline-none focus-visible:focus-ring-neutral"
        >
          <IconArrowLeft aria-hidden className="size-icon-sm rtl:rotate-180" />
          {backLabel}
        </button>
      </div>
    );
  },
);
HeroTrailer.displayName = "HeroTrailer";

export interface WalletCardProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "title"> {
  asChild?: boolean;
  open?: boolean;
  page: React.ReactNode;
  metric: React.ReactNode;
  label?: React.ReactNode;
  detail?: React.ReactNode;
  actionLabel?: React.ReactNode;
}

export const WalletCard = React.forwardRef<HTMLButtonElement, WalletCardProps>(
  (
    {
      className,
      asChild = false,
      open = false,
      page,
      metric,
      label,
      detail,
      actionLabel = "Abrir página",
      children,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot.Root : "button";
    return (
      <Comp
        ref={ref}
        type={asChild ? undefined : "button"}
        data-slot="wallet-card"
        data-state={open ? "open" : "stacked"}
        className={cn(
          "relative flex w-full flex-col justify-between gap-3 rounded-container border border-border-subtle bg-surface-default p-4 text-start text-content-primary shadow-elevation-card outline-none transition-transform duration-200 hover:-translate-y-1 hover:shadow-elevation-raised focus-visible:focus-ring motion-reduce:transition-none",
          open ? "min-h-48" : "min-h-20",
          className,
        )}
        {...props}
      >
        {asChild ? (
          children
        ) : (
          <>
            <span className="flex items-center justify-between gap-2">
              <span className="text-label-md">{page}</span>
              {open ? null : <span className="text-heading-sm tabular-nums">{metric}</span>}
            </span>
            {open ? (
              <span className="flex flex-col gap-1">
                {label ? (
                  <span className="text-mono-overline text-content-secondary">{label}</span>
                ) : null}
                <span className="text-display-md tabular-nums">{metric}</span>
                {detail ? (
                  <span className="text-body-sm text-content-secondary">{detail}</span>
                ) : null}
                <span className="mt-2 text-label-sm text-content-link">{actionLabel}</span>
              </span>
            ) : null}
          </>
        )}
      </Comp>
    );
  },
);
WalletCard.displayName = "WalletCard";

export const WalletStack = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="wallet-stack"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  ),
);
WalletStack.displayName = "WalletStack";
