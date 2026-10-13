import {
  IconBulb,
  IconFlame,
  IconGauge,
  IconSun,
  IconTrendingDown,
  IconTrendingUp,
  IconTrophy,
} from "@tabler/icons-react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";
import * as React from "react";
import { cn } from "../../lib/cn";

export const widgetVariants = cva(
  "relative isolate flex max-w-full flex-col overflow-hidden rounded-3xl p-4 text-body-sm",
  {
    variants: {
      size: {
        s: "size-[170px]",
        m: "h-[170px] w-[360px]",
        l: "size-[360px]",
      },
      surface: {
        solid:
          "border border-border-subtle bg-surface-default text-content-primary shadow-elevation-card",
        glass: "material-glass border border-material-glass-border text-material-on-media-content",
        aurora:
          "border border-border-subtle bg-surface-default text-content-primary shadow-elevation-card before:absolute before:-top-1/4 before:-end-1/4 before:-z-10 before:size-3/4 before:rounded-pill before:bg-(--widget-accent) before:opacity-30 before:blur-3xl before:content-[''] after:absolute after:-bottom-1/4 after:-start-1/4 after:-z-10 after:size-2/3 after:rounded-pill after:bg-(--widget-accent) after:opacity-15 after:blur-3xl after:content-['']",
        liquid:
          "material-liquid border border-material-glass-border text-material-on-media-content",
      },
      palette: {
        neutral: "[--widget-accent:var(--midas-content-primary)]",
        cyan: "[--widget-accent:var(--midas-chart-1)]",
        violet: "[--widget-accent:var(--midas-chart-3)]",
        amber: "[--widget-accent:var(--midas-chart-5)]",
        emerald: "[--widget-accent:var(--midas-chart-4)]",
        rose: "[--widget-accent:var(--midas-chart-6)]",
      },
    },
    defaultVariants: { size: "m", surface: "solid", palette: "neutral" },
  },
);

type WidgetVariantProps = VariantProps<typeof widgetVariants>;

export interface WidgetStatProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title">,
    Pick<WidgetVariantProps, "surface" | "palette"> {
  size?: "s" | "m";
  label: React.ReactNode;
  value: React.ReactNode;
  unit?: React.ReactNode;
  delta?: React.ReactNode;
  trend?: "up" | "down";
  icon?: React.ReactNode;
  footer?: React.ReactNode;
}

export const WidgetStat = React.forwardRef<HTMLDivElement, WidgetStatProps>(
  (
    {
      className,
      size = "m",
      surface,
      palette,
      label,
      value,
      unit,
      delta,
      trend,
      icon,
      footer,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="widget-stat"
      className={cn(widgetVariants({ size, surface, palette }), "justify-between", className)}
      {...props}
    >
      <div className="flex items-center justify-between gap-2 text-label-sm text-current/70">
        <span>{label}</span>
        {icon}
      </div>
      <div className="flex flex-col gap-1">
        <p
          className={cn(
            "flex items-baseline gap-1 font-semibold tracking-tight tabular-nums",
            size === "s" ? "text-heading-lg" : "text-display-md",
          )}
        >
          {value}
          {unit ? <span className="text-label-md text-current/70">{unit}</span> : null}
        </p>
        {delta ? (
          <p
            data-trend={trend}
            className={cn(
              "flex items-center gap-1 text-label-sm",
              trend === "up" && "text-status-success-content",
              trend === "down" && "text-status-danger-content",
              !trend && "text-current/70",
            )}
          >
            {trend === "up" ? <IconTrendingUp aria-hidden className="size-icon-sm" /> : null}
            {trend === "down" ? <IconTrendingDown aria-hidden className="size-icon-sm" /> : null}
            {delta}
          </p>
        ) : null}
        {footer ? <div className="text-caption text-current/70">{footer}</div> : null}
      </div>
    </div>
  ),
);
WidgetStat.displayName = "WidgetStat";

export interface WidgetChartProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title">,
    Pick<WidgetVariantProps, "palette"> {
  size?: "s" | "m" | "l";
  type?: "bars" | "area" | "ring" | "dots";
  surface?: "solid" | "aurora";
  title?: React.ReactNode;
  value?: React.ReactNode;
  data: number[];
  labels?: string[];
  highlightIndex?: number;
  max?: number;
  chartLabel?: string;
}

function withIds(data: number[]) {
  return data.map((v, i) => ({ id: `ponto-${i}`, v, i }));
}

function areaPath(data: number[], max: number) {
  const width = 100;
  const height = 40;
  const step = data.length > 1 ? width / (data.length - 1) : width;
  const points = data.map((v, i) => [i * step, height - (Math.max(v, 0) / max) * (height - 4) - 2]);
  const line = points.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x} ${y}`).join(" ");
  return { line, area: `${line} L${width} ${height} L0 ${height} Z` };
}

export const WidgetChart = React.forwardRef<HTMLDivElement, WidgetChartProps>(
  (
    {
      className,
      size = "m",
      type = "bars",
      surface = "solid",
      palette,
      title,
      value,
      data,
      labels,
      highlightIndex,
      max,
      chartLabel,
      ...props
    },
    ref,
  ) => {
    const peak = max ?? Math.max(...data, 1);
    const highlighted = highlightIndex ?? data.length - 1;
    const summary =
      chartLabel ?? (typeof title === "string" ? `${title}: ${data.join(", ")}` : data.join(", "));
    const ringValue = Math.min(Math.max(data[0] ?? 0, 0), peak);
    const radius = 40;
    const circumference = 2 * Math.PI * radius;

    return (
      <div
        ref={ref}
        data-slot="widget-chart"
        data-type={type}
        className={cn(widgetVariants({ size, surface, palette }), "gap-2", className)}
        {...props}
      >
        {title || value ? (
          <div className="flex items-baseline justify-between gap-2">
            {title ? <span className="text-label-sm text-current/70">{title}</span> : null}
            {value ? (
              <span className="text-heading-sm font-semibold tabular-nums">{value}</span>
            ) : null}
          </div>
        ) : null}
        <div className="flex min-h-0 flex-1 items-end justify-center">
          {type === "bars" ? (
            <div role="img" aria-label={summary} className="flex h-full w-full items-end gap-1.5">
              {withIds(data).map(({ id, v, i }) => (
                <div
                  key={id}
                  className="flex h-full flex-1 flex-col items-center justify-end gap-1"
                >
                  <div
                    className={cn(
                      "w-full rounded-xs bg-(--widget-accent)",
                      i === highlighted ? "opacity-100" : "opacity-30",
                    )}
                    style={{ height: `${Math.max((v / peak) * 100, 4)}%` }}
                  />
                  {labels?.[i] ? (
                    <span className="text-caption text-current/70">{labels[i]}</span>
                  ) : null}
                </div>
              ))}
            </div>
          ) : null}
          {type === "area" ? (
            <svg
              role="img"
              aria-label={summary}
              viewBox="0 0 100 40"
              preserveAspectRatio="none"
              className="h-full w-full overflow-visible"
            >
              <defs>
                <linearGradient id="widget-area-fill" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="var(--widget-accent)" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="var(--widget-accent)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d={areaPath(data, peak).area} fill="url(#widget-area-fill)" />
              <path
                d={areaPath(data, peak).line}
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
                className="stroke-(--widget-accent)"
              />
            </svg>
          ) : null}
          {type === "ring" ? (
            <svg
              role="img"
              aria-label={summary}
              viewBox="0 0 100 100"
              className="h-full max-h-full w-auto -rotate-90"
            >
              <circle
                cx="50"
                cy="50"
                r={radius}
                fill="none"
                strokeWidth="10"
                className="stroke-surface-muted"
              />
              <circle
                cx="50"
                cy="50"
                r={radius}
                fill="none"
                strokeWidth="10"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={circumference * (1 - ringValue / peak)}
                className="stroke-(--widget-accent) transition-[stroke-dashoffset] duration-500 motion-reduce:transition-none"
              />
            </svg>
          ) : null}
          {type === "dots" ? (
            <div role="img" aria-label={summary} className="flex w-full items-end justify-between">
              {withIds(data).map(({ id, v, i }) => (
                <div key={id} className="flex flex-col items-center gap-1">
                  <span
                    className={cn(
                      "size-3 rounded-pill",
                      v > 0 ? "bg-(--widget-accent)" : "bg-surface-muted",
                    )}
                  />
                  {labels?.[i] ? (
                    <span className="text-caption text-current/70">{labels[i]}</span>
                  ) : null}
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    );
  },
);
WidgetChart.displayName = "WidgetChart";

const messageIcons = {
  greeting: IconSun,
  insight: IconBulb,
  streak: IconFlame,
  achievement: IconTrophy,
  score: IconGauge,
} as const;

export interface WidgetMessageProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title">,
    Pick<WidgetVariantProps, "palette"> {
  size?: "s" | "m" | "l";
  type?: keyof typeof messageIcons;
  surface?: "solid" | "aurora";
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  icon?: React.ReactNode;
  action?: React.ReactNode;
}

export const WidgetMessage = React.forwardRef<HTMLDivElement, WidgetMessageProps>(
  (
    {
      className,
      size = "m",
      type = "greeting",
      surface = "solid",
      palette,
      eyebrow,
      title,
      description,
      icon,
      action,
      children,
      ...props
    },
    ref,
  ) => {
    const DefaultIcon = messageIcons[type];
    return (
      <div
        ref={ref}
        data-slot="widget-message"
        data-type={type}
        className={cn(widgetVariants({ size, surface, palette }), "gap-2", className)}
        {...props}
      >
        <div className="flex items-center gap-2">
          <span className="flex size-control-md shrink-0 items-center justify-center rounded-pill bg-(--widget-accent)/15 text-(color:--widget-accent)">
            {icon ?? <DefaultIcon aria-hidden className="size-icon-md" />}
          </span>
          {eyebrow ? <span className="text-mono-overline text-current/70">{eyebrow}</span> : null}
        </div>
        <div className="flex min-h-0 flex-1 flex-col gap-1">
          <p className="text-heading-sm text-balance">{title}</p>
          {description ? <p className="text-body-sm text-current/70">{description}</p> : null}
          {children}
        </div>
        {action ? <div className="flex items-center">{action}</div> : null}
      </div>
    );
  },
);
WidgetMessage.displayName = "WidgetMessage";

export interface WidgetFilterOption {
  value: string;
  label: React.ReactNode;
}

export interface WidgetFilterProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title" | "onChange" | "defaultValue"> {
  type?: "category" | "period" | "chips" | "range";
  tone?: "brand" | "neutral";
  title?: React.ReactNode;
  options?: WidgetFilterOption[];
  value?: string | string[];
  onValueChange?: (value: string) => void;
  rangeValue?: number;
  rangeMin?: number;
  rangeMax?: number;
  rangeStep?: number;
  onRangeChange?: (value: number) => void;
  rangeLabel?: string;
}

const filterSelected = {
  brand: "bg-action-accent-bg text-action-accent-content",
  neutral: "bg-action-primary-bg text-action-primary-content",
} as const;

export const WidgetFilter = React.forwardRef<HTMLDivElement, WidgetFilterProps>(
  (
    {
      className,
      type = "category",
      tone = "brand",
      title,
      options = [],
      value,
      onValueChange,
      rangeValue,
      rangeMin = 0,
      rangeMax = 100,
      rangeStep = 1,
      onRangeChange,
      rangeLabel = "Intervalo",
      ...props
    },
    ref,
  ) => {
    const selected = Array.isArray(value) ? value : value === undefined ? [] : [value];
    return (
      <div
        ref={ref}
        data-slot="widget-filter"
        data-type={type}
        className={cn(
          "flex flex-col gap-3 rounded-3xl border border-border-subtle bg-surface-default p-4 text-content-primary shadow-elevation-card",
          className,
        )}
        {...props}
      >
        {title ? <p className="text-label-sm text-content-secondary">{title}</p> : null}
        {type === "range" ? (
          <input
            type="range"
            aria-label={rangeLabel}
            min={rangeMin}
            max={rangeMax}
            step={rangeStep}
            value={rangeValue ?? rangeMin}
            onChange={(event) => onRangeChange?.(Number(event.target.value))}
            className="w-full accent-(--midas-action-accent-bg) focus-visible:focus-ring"
          />
        ) : (
          <div
            className={cn(
              "flex gap-2",
              type === "period" ? "rounded-control bg-surface-muted p-0.5" : "flex-wrap",
            )}
          >
            {options.map((option) => {
              const active = selected.includes(option.value);
              return (
                <button
                  key={option.value}
                  type="button"
                  aria-pressed={active}
                  data-state={active ? "selected" : "default"}
                  onClick={() => onValueChange?.(option.value)}
                  className={cn(
                    "inline-flex h-control-sm items-center justify-center px-3 text-label-sm transition-colors outline-none focus-visible:focus-ring motion-reduce:transition-none",
                    type === "period" ? "flex-1 rounded-control" : "rounded-pill",
                    active
                      ? filterSelected[tone]
                      : type === "period"
                        ? "text-content-secondary hover:bg-state-hover"
                        : "border border-border-default text-content-primary hover:bg-state-hover",
                  )}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        )}
      </div>
    );
  },
);
WidgetFilter.displayName = "WidgetFilter";

export interface WidgetAssetProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title">,
    Pick<WidgetVariantProps, "palette"> {
  size?: "s" | "m";
  surface?: "solid" | "glass";
  trend?: "up" | "down";
  symbol: string;
  name: string;
  price: React.ReactNode;
  change: React.ReactNode;
  sparkline?: number[];
}

export const WidgetAsset = React.forwardRef<HTMLDivElement, WidgetAssetProps>(
  (
    {
      className,
      size = "s",
      surface = "solid",
      palette,
      trend = "up",
      symbol,
      name,
      price,
      change,
      sparkline,
      ...props
    },
    ref,
  ) => {
    const trendClass =
      trend === "up" ? "text-status-success-content" : "text-status-danger-content";
    const Trend = trend === "up" ? IconTrendingUp : IconTrendingDown;
    return (
      <div
        ref={ref}
        data-slot="widget-asset"
        data-trend={trend}
        className={cn(widgetVariants({ size, surface, palette }), "justify-between", className)}
        {...props}
      >
        <div className="flex items-center gap-2">
          <span className="flex size-control-md shrink-0 items-center justify-center rounded-pill bg-surface-muted text-label-sm text-content-primary">
            {symbol.slice(0, 2).toUpperCase()}
          </span>
          <div className="flex min-w-0 flex-col">
            <span className="truncate text-label-md">{symbol}</span>
            <span className="truncate text-caption text-current/70">{name}</span>
          </div>
        </div>
        {sparkline && size === "m" ? (
          <svg
            aria-hidden
            viewBox="0 0 100 40"
            preserveAspectRatio="none"
            className="h-10 w-full overflow-visible"
          >
            <path
              d={areaPath(sparkline, Math.max(...sparkline, 1)).line}
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              className={
                trend === "up" ? "stroke-status-success-fill" : "stroke-status-danger-fill"
              }
            />
          </svg>
        ) : null}
        <div className="flex items-end justify-between gap-2">
          <span className="text-heading-md tabular-nums">{price}</span>
          <span className={cn("flex items-center gap-0.5 text-label-sm tabular-nums", trendClass)}>
            <Trend aria-hidden className="size-icon-sm" />
            {change}
          </span>
        </div>
      </div>
    );
  },
);
WidgetAsset.displayName = "WidgetAsset";

export interface WidgetImageProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  asChild?: boolean;
  size?: "s" | "m" | "l";
  type?: "course" | "quote" | "news";
  src: string;
  alt?: string;
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  meta?: React.ReactNode;
  author?: React.ReactNode;
}

export const WidgetImage = React.forwardRef<HTMLDivElement, WidgetImageProps>(
  (
    {
      className,
      asChild = false,
      size = "s",
      type = "course",
      src,
      alt = "",
      eyebrow,
      title,
      meta,
      author,
      children,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot.Root : "div";
    return (
      <Comp
        ref={ref}
        data-slot="widget-image"
        data-type={type}
        className={cn(
          widgetVariants({ size, surface: "solid", palette: "neutral" }),
          "justify-end gap-1 border-0 p-4 text-material-on-media-content outline-none focus-visible:focus-ring",
          className,
        )}
        {...props}
      >
        {asChild ? (
          React.isValidElement(children) ? (
            React.cloneElement(
              children as React.ReactElement<{ children?: React.ReactNode }>,
              undefined,
              <WidgetImageBody
                src={src}
                alt={alt}
                type={type}
                eyebrow={eyebrow}
                title={title}
                meta={meta}
                author={author}
              />,
            )
          ) : null
        ) : (
          <WidgetImageBody
            src={src}
            alt={alt}
            type={type}
            eyebrow={eyebrow}
            title={title}
            meta={meta}
            author={author}
          />
        )}
      </Comp>
    );
  },
);
WidgetImage.displayName = "WidgetImage";

function WidgetImageBody({
  src,
  alt,
  type,
  eyebrow,
  title,
  meta,
  author,
}: Pick<WidgetImageProps, "src" | "alt" | "type" | "eyebrow" | "title" | "meta" | "author">) {
  return (
    <>
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 -z-20 size-full object-cover"
        loading="lazy"
      />
      <span aria-hidden className="absolute inset-0 -z-10 bg-material-scrim-bg" />
      {eyebrow ? <span className="text-mono-overline">{eyebrow}</span> : null}
      {type === "quote" ? (
        <blockquote className="text-heading-sm text-balance">{title}</blockquote>
      ) : (
        <span className="text-heading-sm text-balance">{title}</span>
      )}
      {author ? <span className="text-caption opacity-80">{author}</span> : null}
      {meta ? <span className="text-caption opacity-80">{meta}</span> : null}
    </>
  );
}

export const widgetAlertVariants = cva(
  "relative isolate flex flex-col gap-3 overflow-hidden rounded-3xl border p-4 text-body-sm",
  {
    variants: {
      surface: {
        solid: "",
        gradient: "",
        glass: "material-glass border-material-glass-border text-material-on-media-content",
        liquid: "material-liquid border-material-glass-border text-material-on-media-content",
      },
      severity: {
        warning: "",
        danger: "",
        info: "",
        success: "",
      },
    },
    compoundVariants: [
      {
        surface: "solid",
        severity: "warning",
        className:
          "border-status-warning-border bg-status-warning-subtle text-status-warning-content",
      },
      {
        surface: "solid",
        severity: "danger",
        className: "border-status-danger-border bg-status-danger-subtle text-status-danger-content",
      },
      {
        surface: "solid",
        severity: "info",
        className: "border-status-info-border bg-status-info-subtle text-status-info-content",
      },
      {
        surface: "solid",
        severity: "success",
        className:
          "border-status-success-border bg-status-success-subtle text-status-success-content",
      },
      {
        surface: "gradient",
        severity: "warning",
        className:
          "border-status-warning-border bg-linear-to-br from-status-warning-subtle to-surface-default text-status-warning-content",
      },
      {
        surface: "gradient",
        severity: "danger",
        className:
          "border-status-danger-border bg-linear-to-br from-status-danger-subtle to-surface-default text-status-danger-content",
      },
      {
        surface: "gradient",
        severity: "info",
        className:
          "border-status-info-border bg-linear-to-br from-status-info-subtle to-surface-default text-status-info-content",
      },
      {
        surface: "gradient",
        severity: "success",
        className:
          "border-status-success-border bg-linear-to-br from-status-success-subtle to-surface-default text-status-success-content",
      },
    ],
    defaultVariants: { surface: "solid", severity: "warning" },
  },
);

export interface WidgetAlertItem {
  title: React.ReactNode;
  description?: React.ReactNode;
}

export interface WidgetAlertProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title">,
    VariantProps<typeof widgetAlertVariants> {
  type?: "attention" | "single";
  eyebrow?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  items?: WidgetAlertItem[];
  icon?: React.ReactNode;
  action?: React.ReactNode;
}

export const WidgetAlert = React.forwardRef<HTMLDivElement, WidgetAlertProps>(
  (
    {
      className,
      type = "attention",
      surface,
      severity,
      eyebrow,
      title,
      description,
      items = [],
      icon,
      action,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      role="status"
      data-slot="widget-alert"
      data-type={type}
      data-severity={severity ?? "warning"}
      className={cn(widgetAlertVariants({ surface, severity }), className)}
      {...props}
    >
      <div className="flex items-center gap-2">
        {icon ? <span className="shrink-0 [&_svg]:size-icon-md">{icon}</span> : null}
        {eyebrow ? <span className="text-mono-overline">{eyebrow}</span> : null}
      </div>
      {title ? <p className="text-heading-sm text-balance">{title}</p> : null}
      {type === "single" && description ? (
        <p className="text-body-sm text-current/80">{description}</p>
      ) : null}
      {type === "attention" && items.length > 0 ? (
        <ul className="flex flex-col gap-2">
          {items.map((item, index) => (
            <li
              key={`alerta-${item.title}-${index.toString()}`}
              className="flex flex-col rounded-control bg-surface-default/60 px-3 py-2"
            >
              <span className="text-label-md">{item.title}</span>
              {item.description ? (
                <span className="text-caption text-current/80">{item.description}</span>
              ) : null}
            </li>
          ))}
        </ul>
      ) : null}
      {action ? <div className="flex items-center">{action}</div> : null}
    </div>
  ),
);
WidgetAlert.displayName = "WidgetAlert";
