"use client";

import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "../../lib/cn";

export type ChartPalette = "brand" | "neutral" | "multi";

export interface ChartSeriesConfig {
  label?: React.ReactNode;
  icon?: React.ComponentType<{ className?: string }>;
  color?: string;
}

export type ChartConfig = Record<string, ChartSeriesConfig>;

const multiSeriesColors = [
  "var(--midas-chart-1)",
  "var(--midas-chart-2)",
  "var(--midas-chart-3)",
  "var(--midas-chart-4)",
  "var(--midas-chart-5)",
  "var(--midas-chart-6)",
  "var(--midas-chart-7)",
  "var(--midas-chart-8)",
];

export function chartSeriesColor(index: number, palette: ChartPalette = "multi"): string {
  if (palette === "brand") {
    const share = Math.max(100 - index * 25, 25);
    return `color-mix(in oklab, var(--midas-chart-1) ${share}%, transparent)`;
  }
  if (palette === "neutral") {
    const share = Math.max(80 - index * 20, 20);
    return `color-mix(in oklab, var(--midas-content-primary) ${share}%, transparent)`;
  }
  return multiSeriesColors[index % multiSeriesColors.length] as string;
}

interface ChartContextValue {
  config: ChartConfig;
  palette: ChartPalette;
}

const ChartContext = React.createContext<ChartContextValue | null>(null);

export function useChart(): ChartContextValue {
  const context = React.useContext(ChartContext);
  if (!context) {
    throw new Error("useChart precisa estar dentro de um ChartContainer");
  }
  return context;
}

export const chartContainerVariants = cva(
  [
    "flex w-full justify-center text-caption text-content-secondary",
    "[&_.recharts-cartesian-axis-tick_text]:fill-content-secondary",
    "[&_.recharts-cartesian-grid_line]:stroke-border-subtle [&_.recharts-cartesian-grid_line]:[stroke-dasharray:3_3]",
    "[&_.recharts-curve.recharts-tooltip-cursor]:stroke-border-default",
    "[&_.recharts-layer]:outline-hidden [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden",
    "[&_.recharts-polar-grid_polygon]:stroke-border-subtle [&_.recharts-polar-grid_circle]:stroke-border-subtle",
    "[&_.recharts-rectangle.recharts-tooltip-cursor]:fill-state-hover",
    "[&_.recharts-radial-bar-background-sector]:fill-surface-muted",
  ],
  {
    variants: {
      size: {
        default: "max-w-100",
        wide: "max-w-200",
        fluid: "max-w-none",
      },
    },
    defaultVariants: { size: "default" },
  },
);

export interface ChartContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof chartContainerVariants> {
  config: ChartConfig;
  palette?: ChartPalette;
  aspectRatio?: string;
}

export const ChartContainer = React.forwardRef<HTMLDivElement, ChartContainerProps>(
  (
    {
      className,
      config,
      palette = "brand",
      size,
      aspectRatio = "16 / 9",
      style,
      children,
      ...props
    },
    ref,
  ) => {
    const colorVars = React.useMemo(() => {
      const vars: Record<string, string> = {};
      Object.entries(config).forEach(([key, item], index) => {
        vars[`--color-${key}`] = item.color ?? chartSeriesColor(index, palette);
      });
      return vars;
    }, [config, palette]);

    const contextValue = React.useMemo(() => ({ config, palette }), [config, palette]);

    return (
      <ChartContext.Provider value={contextValue}>
        <div
          ref={ref}
          data-slot="chart-container"
          data-palette={palette}
          role="figure"
          className={cn(chartContainerVariants({ size }), className)}
          style={{ aspectRatio, ...colorVars, ...style } as React.CSSProperties}
          {...props}
        >
          {children}
        </div>
      </ChartContext.Provider>
    );
  },
);
ChartContainer.displayName = "ChartContainer";

export interface ChartLegendItem {
  key: string;
  label?: React.ReactNode;
  color?: string;
}

export interface ChartLegendProps extends React.HTMLAttributes<HTMLUListElement> {
  items?: ChartLegendItem[];
  payload?: Array<{ dataKey?: string | number; value?: string; color?: string }>;
  verticalAlign?: "top" | "bottom";
}

export const ChartLegend = React.forwardRef<HTMLUListElement, ChartLegendProps>(
  ({ className, items, payload, verticalAlign = "bottom", ...props }, ref) => {
    const { config } = useChart();
    const resolved: ChartLegendItem[] =
      items ??
      (payload ?? []).map((entry) => ({
        key: String(entry.dataKey ?? entry.value ?? ""),
        color: entry.color,
        label: entry.value,
      }));
    if (resolved.length === 0) return null;

    return (
      <ul
        ref={ref}
        data-slot="chart-legend"
        className={cn(
          "flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-label-sm text-content-secondary",
          verticalAlign === "top" ? "pb-3" : "pt-3",
          className,
        )}
        {...props}
      >
        {resolved.map((item) => {
          const series = config[item.key];
          const Icon = series?.icon;
          return (
            <li key={item.key} className="flex items-center gap-1.5">
              {Icon ? (
                <Icon className="size-icon-xs" />
              ) : (
                <span
                  aria-hidden
                  className="size-2 shrink-0 rounded-pill"
                  style={{ backgroundColor: item.color ?? `var(--color-${item.key})` }}
                />
              )}
              {item.label ?? series?.label ?? item.key}
            </li>
          );
        })}
      </ul>
    );
  },
);
ChartLegend.displayName = "ChartLegend";

export interface ChartTooltipPayloadItem {
  dataKey?: string | number;
  name?: string | number;
  value?: React.ReactNode;
  color?: string;
  payload?: Record<string, unknown>;
}

export interface ChartTooltipContentProps extends React.HTMLAttributes<HTMLDivElement> {
  active?: boolean;
  payload?: ChartTooltipPayloadItem[];
  label?: React.ReactNode;
  hideLabel?: boolean;
  hideIndicator?: boolean;
  indicator?: "dot" | "line";
  labelFormatter?: (label: React.ReactNode, payload: ChartTooltipPayloadItem[]) => React.ReactNode;
  formatter?: (
    value: React.ReactNode,
    name: string,
    item: ChartTooltipPayloadItem,
    index: number,
  ) => React.ReactNode;
  nameKey?: string;
  showTotal?: boolean;
}

export const ChartTooltipContent = React.forwardRef<HTMLDivElement, ChartTooltipContentProps>(
  (
    {
      className,
      active,
      payload,
      label,
      hideLabel = false,
      hideIndicator = false,
      indicator = "dot",
      labelFormatter,
      formatter,
      nameKey,
      showTotal = false,
      ...props
    },
    ref,
  ) => {
    const { config } = useChart();
    if (!active || !payload || payload.length === 0) return null;

    const heading = hideLabel ? null : labelFormatter ? labelFormatter(label, payload) : label;

    const total = showTotal
      ? payload.reduce((sum, item) => sum + (typeof item.value === "number" ? item.value : 0), 0)
      : null;

    return (
      <div
        ref={ref}
        data-slot="chart-tooltip"
        className={cn(
          "grid min-w-32 max-w-xs gap-1.5 rounded-overlay border border-overlay-border bg-overlay-surface px-3 py-2 text-label-sm text-content-primary shadow-elevation-overlay",
          className,
        )}
        {...props}
      >
        {heading ? <div className="text-label-md text-content-primary">{heading}</div> : null}
        <div className="grid gap-1.5">
          {payload.map((item, index) => {
            const key = String(
              (nameKey ? (item.payload?.[nameKey] as string | undefined) : undefined) ??
                item.dataKey ??
                item.name ??
                "value",
            );
            const series = config[key];
            const name = String(series?.label ?? item.name ?? key);
            const color = item.color ?? `var(--color-${key})`;
            return (
              <div key={key} data-slot="chart-tooltip-item" className="flex items-center gap-2">
                {hideIndicator ? null : (
                  <span
                    aria-hidden
                    data-indicator={indicator}
                    className={cn(
                      "shrink-0",
                      indicator === "dot" ? "size-2.5 rounded-pill" : "h-3 w-1 rounded-xs",
                    )}
                    style={{ backgroundColor: color }}
                  />
                )}
                {formatter && item.value !== undefined ? (
                  formatter(item.value, name, item, index)
                ) : (
                  <>
                    <span className="text-content-secondary">{name}</span>
                    {item.value !== undefined ? (
                      <span className="ms-auto ps-4 font-medium tabular-nums text-content-primary">
                        {typeof item.value === "number"
                          ? item.value.toLocaleString("pt-BR")
                          : item.value}
                      </span>
                    ) : null}
                  </>
                )}
              </div>
            );
          })}
        </div>
        {total !== null ? (
          <div className="flex items-center justify-between gap-4 border-t border-border-subtle pt-1.5 font-medium tabular-nums">
            <span>Total</span>
            <span>{total.toLocaleString("pt-BR")}</span>
          </div>
        ) : null}
      </div>
    );
  },
);
ChartTooltipContent.displayName = "ChartTooltipContent";

export const scoreBubblesVariants = cva("flex items-center", {
  variants: {
    size: {
      default: "gap-2",
      compact: "gap-1.5",
    },
  },
  defaultVariants: { size: "default" },
});

export const scoreBubbleVariants = cva(
  "flex shrink-0 items-center justify-center rounded-pill font-medium tabular-nums",
  {
    variants: {
      size: {
        default: "size-control-xl text-label-md",
        compact: "size-control-md text-label-sm",
      },
      tone: {
        success: "bg-status-success-subtle text-status-success-content",
        warning: "bg-status-warning-subtle text-status-warning-content",
        danger: "bg-status-danger-subtle text-status-danger-content",
        brand: "bg-action-accent-bg text-action-accent-content",
        neutral: "bg-surface-muted text-content-primary",
        multi: "text-action-accent-content",
        empty: "border border-dashed border-border-default text-content-disabled",
      },
    },
    defaultVariants: { size: "default", tone: "neutral" },
  },
);

export type ScoreBubbleColor = "status" | "multi" | "brand" | "neutral";

export interface ScoreBubbleItem {
  label: string;
  value?: number | null;
  max?: number;
}

export interface ScoreBubblesProps
  extends Omit<React.HTMLAttributes<HTMLOListElement>, "color">,
    VariantProps<typeof scoreBubblesVariants> {
  items: ScoreBubbleItem[];
  modules?: 4 | 6 | 8;
  color?: ScoreBubbleColor;
}

function statusTone(ratio: number): "success" | "warning" | "danger" {
  if (ratio >= 0.7) return "success";
  if (ratio >= 0.4) return "warning";
  return "danger";
}

export const ScoreBubbles = React.forwardRef<HTMLOListElement, ScoreBubblesProps>(
  ({ className, items, modules = 4, color = "status", size = "default", ...props }, ref) => {
    const visible = items.slice(0, modules);
    return (
      <ol
        ref={ref}
        data-slot="score-bubbles"
        data-modules={modules}
        className={cn(scoreBubblesVariants({ size }), className)}
        {...props}
      >
        {visible.map((item, index) => {
          const hasValue = typeof item.value === "number";
          const ratio = hasValue ? (item.value as number) / (item.max ?? 100) : 0;
          const tone = !hasValue
            ? "empty"
            : color === "status"
              ? statusTone(ratio)
              : color === "multi"
                ? "multi"
                : color;
          return (
            <li
              key={item.label}
              data-slot="score-bubble"
              aria-label={`${item.label}: ${hasValue ? item.value : "sem nota"}`}
              className={scoreBubbleVariants({ size, tone })}
              style={
                tone === "multi" ? { backgroundColor: chartSeriesColor(index, "multi") } : undefined
              }
            >
              {hasValue ? item.value : "–"}
            </li>
          );
        })}
      </ol>
    );
  },
);
ScoreBubbles.displayName = "ScoreBubbles";
