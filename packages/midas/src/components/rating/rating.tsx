"use client";

import {
  IconCoin,
  IconMoodCry,
  IconMoodHappy,
  IconMoodNeutral,
  IconMoodSad,
  IconMoodSmile,
  IconPigMoney,
  IconStar,
} from "@tabler/icons-react";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "../../lib/cn";

export type RatingType = "star" | "coin" | "piggy" | "emoji" | "number" | "nps";
export type RatingSize = "sm" | "md" | "lg";

export const ratingLabels = ["Péssimo", "Ruim", "Regular", "Muito bom", "Excelente"] as const;

const iconTypes = {
  star: IconStar,
  coin: IconCoin,
  piggy: IconPigMoney,
} as const;

const moods = [IconMoodCry, IconMoodSad, IconMoodNeutral, IconMoodSmile, IconMoodHappy] as const;

const iconSizes: Record<RatingSize, string> = {
  sm: "size-icon-sm",
  md: "size-icon-lg",
  lg: "size-icon-xl",
};

const boxSizes: Record<RatingSize, string> = {
  sm: "size-9",
  md: "size-12",
  lg: "size-14",
};

export const ratingItemVariants = cva(
  [
    "inline-flex shrink-0 items-center justify-center outline-none",
    "transition-[color,background-color,border-color,box-shadow,transform] duration-150 motion-reduce:transition-none motion-reduce:hover:scale-100",
    "focus-visible:focus-ring",
    "disabled:pointer-events-none disabled:text-content-disabled",
  ],
  {
    variants: {
      boxed: {
        true: "rounded-overlay border border-border-default bg-surface-default",
        false: "",
      },
    },
    defaultVariants: { boxed: false },
  },
);

export interface RatingIconProps extends React.SVGAttributes<SVGElement> {
  type?: "star" | "coin" | "piggy";
  state?: "empty" | "half" | "filled";
  size?: RatingSize;
}

export function RatingIcon({
  type = "star",
  state = "empty",
  size = "md",
  className,
}: RatingIconProps) {
  const Icon = iconTypes[type];
  const filled = state === "filled";
  return (
    <span
      data-slot="rating-icon"
      data-state={state}
      aria-hidden="true"
      className={cn("relative inline-flex shrink-0", iconSizes[size], className)}
    >
      <Icon
        className={cn(
          "size-full",
          type === "piggy"
            ? filled
              ? "fill-selection-bg text-selection-fill"
              : "text-border-default"
            : filled
              ? "fill-status-warning-fill text-status-warning-content"
              : "text-border-default",
        )}
      />
      {state === "half" ? (
        <span className="absolute inset-0 overflow-hidden" style={{ clipPath: "inset(0 50% 0 0)" }}>
          <Icon
            className={cn(
              "size-full",
              type === "piggy"
                ? "fill-selection-bg text-selection-fill"
                : "fill-status-warning-fill text-status-warning-content",
            )}
          />
        </span>
      ) : null}
    </span>
  );
}

export interface RatingProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange" | "defaultValue">,
    VariantProps<typeof ratingItemVariants> {
  type?: RatingType;
  size?: RatingSize;
  value?: number;
  defaultValue?: number;
  onValueChange?: (value: number) => void;
  readOnly?: boolean;
  disabled?: boolean;
  showValueLabel?: boolean;
  showScaleLabels?: boolean;
  scaleLabels?: [string, string];
  labels?: readonly string[];
}

function itemLabel(type: RatingType, n: number, count: number, text?: string) {
  if (type === "number" || type === "nps") return text ? `${n}: ${text}` : `${n}`;
  const unit = type === "star" ? "estrelas" : type === "coin" ? "moedas" : "cofrinhos";
  const base = type === "emoji" ? `${n} de ${count}` : `${n} de ${count} ${unit}`;
  return text ? `${base} — ${text}` : base;
}

export const Rating = React.forwardRef<HTMLDivElement, RatingProps>(
  (
    {
      className,
      type = "star",
      size = "md",
      boxed,
      value,
      defaultValue = 0,
      onValueChange,
      readOnly,
      disabled,
      showValueLabel = true,
      showScaleLabels = true,
      scaleLabels,
      labels = ratingLabels,
      "aria-label": ariaLabel = "Avaliação",
      ...props
    },
    ref,
  ) => {
    const [internal, setInternal] = React.useState(defaultValue);
    const [hover, setHover] = React.useState<number | null>(null);
    const current = value ?? internal;
    const isNps = type === "nps";
    const start = isNps ? 0 : 1;
    const count = isNps ? 11 : 5;
    const items = Array.from({ length: count }, (_, i) => i + start);
    const shown = hover ?? current;
    const itemRefs = React.useRef<Array<HTMLButtonElement | null>>([]);
    const interactive = !readOnly && !disabled;
    const isIcon = type === "star" || type === "coin" || type === "piggy";
    const scaleText =
      scaleLabels ??
      (isNps ? ["Nada provável", "Muito provável"] : ["Nada satisfeito", "Muito satisfeito"]);

    const select = (n: number) => {
      if (!interactive) return;
      if (value === undefined) setInternal(n);
      onValueChange?.(n);
    };

    const onKeyDown = (event: React.KeyboardEvent, index: number) => {
      const rtl = getComputedStyle(event.currentTarget).direction === "rtl";
      const forward = rtl ? "ArrowLeft" : "ArrowRight";
      const backward = rtl ? "ArrowRight" : "ArrowLeft";
      let next = index;
      if (event.key === forward || event.key === "ArrowUp") next = Math.min(index + 1, count - 1);
      else if (event.key === backward || event.key === "ArrowDown") next = Math.max(index - 1, 0);
      else return;
      event.preventDefault();
      itemRefs.current[next]?.focus();
      select(items[next] as number);
    };

    const checkedIndex = items.indexOf(current);
    const focusable = checkedIndex === -1 ? 0 : checkedIndex;
    const valueText = !isNps && current >= 1 ? labels[current - 1] : undefined;

    return (
      <div
        ref={ref}
        data-slot="rating"
        data-type={type}
        className={cn("inline-flex flex-col gap-2", className)}
        {...props}
      >
        <div className="flex items-center gap-3">
          <div
            role="radiogroup"
            aria-label={ariaLabel}
            aria-readonly={readOnly || undefined}
            aria-disabled={disabled || undefined}
            className={cn("flex items-center", type === "number" || isNps ? "gap-1.5" : "gap-2")}
            onMouseLeave={() => setHover(null)}
          >
            {items.map((n, index) => {
              const checked = n === current;
              const filled = n <= shown;
              const text = isNps ? undefined : labels[n - 1];
              const Mood = moods[n - 1];
              return (
                <button
                  key={n}
                  ref={(node) => {
                    itemRefs.current[index] = node;
                  }}
                  type="button"
                  role="radio"
                  aria-checked={checked}
                  aria-label={itemLabel(type, n, count, text)}
                  tabIndex={interactive && index === focusable ? 0 : -1}
                  disabled={disabled}
                  data-slot="rating-item"
                  data-state={checked ? "checked" : "unchecked"}
                  onClick={() => select(n)}
                  onKeyDown={(event) => onKeyDown(event, index)}
                  onMouseEnter={() => interactive && isIcon && setHover(n)}
                  className={cn(
                    ratingItemVariants({ boxed: isIcon && boxed }),
                    isIcon && boxed && boxSizes[size],
                    isIcon && interactive && "hover:scale-110",
                    !interactive && "cursor-default",
                    type === "emoji" &&
                      cn(
                        "rounded-pill bg-surface-muted text-content-secondary hover:bg-state-hover",
                        size === "lg" ? "size-12" : "size-10",
                        checked &&
                          "scale-110 border border-selection-border bg-selection-bg text-selection-content",
                      ),
                    (type === "number" || isNps) &&
                      cn(
                        "rounded-control border border-border-subtle bg-surface-canvas text-label-md text-content-primary hover:bg-state-hover",
                        size === "lg" ? "size-12 text-label-lg" : "size-10",
                        isNps && "size-9",
                        checked &&
                          "border-action-accent-bg bg-action-accent-bg text-action-accent-content hover:bg-action-accent-bg",
                      ),
                  )}
                >
                  {isIcon ? (
                    <RatingIcon type={type} size={size} state={filled ? "filled" : "empty"} />
                  ) : type === "emoji" && Mood ? (
                    <Mood
                      aria-hidden="true"
                      className={size === "lg" ? "size-icon-xl" : "size-icon-lg"}
                    />
                  ) : (
                    n
                  )}
                </button>
              );
            })}
          </div>
          {showValueLabel && valueText ? (
            <span data-slot="rating-value" className="text-label-md text-content-secondary">
              {valueText}
            </span>
          ) : null}
        </div>
        {showScaleLabels && (type === "number" || isNps) ? (
          <div className="flex justify-between text-caption text-content-secondary">
            <span>{scaleText[0]}</span>
            <span>{scaleText[1]}</span>
          </div>
        ) : null}
      </div>
    );
  },
);
Rating.displayName = "Rating";

export interface RatingSummaryProps extends React.HTMLAttributes<HTMLDivElement> {
  score: number;
  count?: number;
  type?: "star" | "coin";
  size?: "sm" | "md";
  max?: number;
}

const numberFormat = new Intl.NumberFormat("pt-BR", {
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
});
const countFormat = new Intl.NumberFormat("pt-BR");

export const RatingSummary = React.forwardRef<HTMLDivElement, RatingSummaryProps>(
  ({ className, score, count, type = "star", size = "md", max = 5, ...props }, ref) => {
    const scoreText = numberFormat.format(score);
    const countText = count === undefined ? undefined : `${countFormat.format(count)} avaliações`;
    return (
      <div
        ref={ref}
        data-slot="rating-summary"
        role="img"
        aria-label={`Avaliação ${scoreText} de ${max}${countText ? `, ${countText}` : ""}`}
        className={cn("inline-flex items-center gap-1.5", className)}
        {...props}
      >
        <RatingIcon type={type} state="filled" size={size === "sm" ? "sm" : "md"} />
        <span
          aria-hidden="true"
          className={cn("text-content-primary", size === "sm" ? "text-label-md" : "text-label-lg")}
        >
          {scoreText}
        </span>
        {countText ? (
          <span aria-hidden="true" className="text-body-sm text-content-secondary">
            ({countText})
          </span>
        ) : null}
      </div>
    );
  },
);
RatingSummary.displayName = "RatingSummary";
