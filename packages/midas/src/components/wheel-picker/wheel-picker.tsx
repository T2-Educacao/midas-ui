"use client";

import * as React from "react";
import { cn } from "../../lib/cn";

export interface WheelPickerOption {
  value: string;
  label: string;
}

export interface WheelPickerColumn {
  id: string;
  label: string;
  options: WheelPickerOption[];
  className?: string;
}

export interface WheelPickerProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange" | "defaultValue"> {
  columns: WheelPickerColumn[];
  value?: Record<string, string>;
  defaultValue?: Record<string, string>;
  onValueChange?: (value: Record<string, string>) => void;
  tone?: "brand" | "neutral";
}

const rowHeight = 44;

export const WheelPicker = React.forwardRef<HTMLDivElement, WheelPickerProps>(
  ({ className, columns, value, defaultValue, onValueChange, tone = "brand", ...props }, ref) => {
    const [internal, setInternal] = React.useState<Record<string, string>>(
      () =>
        defaultValue ??
        Object.fromEntries(columns.map((column) => [column.id, column.options[0]?.value ?? ""])),
    );
    const current = value ?? internal;

    const select = (columnId: string, next: string) => {
      const merged = { ...current, [columnId]: next };
      if (value === undefined) setInternal(merged);
      onValueChange?.(merged);
    };

    return (
      <div
        ref={ref}
        data-slot="wheel-picker"
        data-tone={tone}
        className={cn("relative flex h-55 w-full items-stretch overflow-hidden", className)}
        {...props}
      >
        <div
          aria-hidden
          data-slot="wheel-picker-band"
          className={cn(
            "pointer-events-none absolute inset-x-0 top-1/2 h-11 -translate-y-1/2 rounded-xl",
            tone === "neutral" ? "bg-state-hover" : "bg-selection-bg",
          )}
        />
        {columns.map((column) => (
          <WheelColumn
            key={column.id}
            column={column}
            tone={tone}
            selected={current[column.id]}
            onSelect={(next) => select(column.id, next)}
          />
        ))}
      </div>
    );
  },
);
WheelPicker.displayName = "WheelPicker";

function WheelColumn({
  column,
  selected,
  tone,
  onSelect,
}: {
  column: WheelPickerColumn;
  selected: string | undefined;
  tone: "brand" | "neutral";
  onSelect: (value: string) => void;
}) {
  const listRef = React.useRef<HTMLDivElement>(null);
  const timer = React.useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const index = Math.max(
    0,
    column.options.findIndex((option) => option.value === selected),
  );

  React.useEffect(() => {
    const list = listRef.current;
    if (list && typeof list.scrollTo === "function") {
      list.scrollTo({ top: index * rowHeight });
    }
  }, [index]);

  React.useEffect(() => () => clearTimeout(timer.current), []);

  const move = (delta: number) => {
    const next = column.options[Math.min(column.options.length - 1, Math.max(0, index + delta))];
    if (next) onSelect(next.value);
  };

  return (
    <div
      ref={listRef}
      role="listbox"
      aria-label={column.label}
      tabIndex={0}
      data-slot="wheel-picker-column"
      aria-activedescendant={`${column.id}-${selected}`}
      onKeyDown={(event) => {
        if (event.key === "ArrowDown") {
          event.preventDefault();
          move(1);
        } else if (event.key === "ArrowUp") {
          event.preventDefault();
          move(-1);
        }
      }}
      onScroll={(event) => {
        const top = event.currentTarget.scrollTop;
        clearTimeout(timer.current);
        timer.current = setTimeout(() => {
          const next = column.options[Math.round(top / rowHeight)];
          if (next && next.value !== selected) onSelect(next.value);
        }, 90);
      }}
      className={cn(
        "relative m-0 flex-1 snap-y snap-mandatory list-none overflow-y-auto py-22 outline-none [scrollbar-width:none] focus-visible:focus-ring [&::-webkit-scrollbar]:hidden",
        column.className,
      )}
    >
      {column.options.map((option, optionIndex) => {
        const distance = Math.abs(optionIndex - index);
        const active = distance === 0;
        return (
          <div
            key={option.value}
            id={`${column.id}-${option.value}`}
            role="option"
            aria-selected={active}
            tabIndex={-1}
            onClick={() => onSelect(option.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") onSelect(option.value);
            }}
            className={cn(
              "flex h-11 cursor-pointer snap-center items-center justify-center",
              active
                ? cn(
                    "text-heading-sm",
                    tone === "neutral" ? "text-content-primary" : "text-selection-content",
                  )
                : "text-body-md text-content-secondary",
              distance === 1 && "opacity-80",
              distance >= 2 && "opacity-45",
            )}
          >
            {option.label}
          </div>
        );
      })}
    </div>
  );
}
