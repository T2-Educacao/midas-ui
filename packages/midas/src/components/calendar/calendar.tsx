"use client";

import { IconChevronDown, IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import {
  type DayButtonProps,
  DayPicker,
  type DayPickerProps,
  getDefaultClassNames,
} from "react-day-picker";
import { ptBR } from "react-day-picker/locale";
import { cn } from "../../lib/cn";

export const calendarVariants = cva("group/calendar w-fit text-content-primary", {
  variants: {
    tone: {
      brand:
        "[--calendar-fill:var(--midas-selection-fill)] [--calendar-on-fill:var(--midas-selection-on-fill)] [--calendar-strip:var(--midas-selection-bg)] [--calendar-today:var(--midas-selection-border)] [--calendar-today-content:var(--midas-selection-content)]",
      neutral:
        "[--calendar-fill:var(--midas-action-primary-bg)] [--calendar-on-fill:var(--midas-action-primary-content)] [--calendar-strip:var(--midas-state-hover)] [--calendar-today:var(--midas-border-strong)] [--calendar-today-content:var(--midas-content-primary)]",
    },
    size: {
      md: "[--cell-size:--spacing(10)] [--cell-text:var(--midas-font-size-sm)]",
      lg: "[--cell-size:--spacing(11)] [--cell-text:var(--midas-font-size-md)]",
    },
    appearance: {
      plain: "p-4",
      solid:
        "rounded-overlay border border-border-subtle bg-overlay-surface p-4 shadow-elevation-overlay",
      glass:
        "rounded-overlay border border-material-glass-border bg-material-glass-surface p-4 backdrop-blur-midas-lg",
    },
  },
  defaultVariants: { tone: "brand", size: "md", appearance: "plain" },
});

export type CalendarProps = DayPickerProps &
  VariantProps<typeof calendarVariants> & {
    buttonVariant?: string;
  };

export function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant: _buttonVariant,
  tone,
  size,
  appearance,
  locale = ptBR,
  formatters,
  components,
  ...props
}: CalendarProps) {
  const defaults = getDefaultClassNames();
  const navButton =
    "flex size-control-sm select-none items-center justify-center rounded-pill p-0 text-content-secondary outline-none transition-colors hover:bg-state-hover hover:text-content-primary focus-visible:focus-ring aria-disabled:opacity-disabled motion-reduce:transition-none";

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      captionLayout={captionLayout}
      locale={locale}
      className={cn(
        calendarVariants({ tone, size, appearance }),
        "in-data-[slot=popover-content]:bg-transparent in-data-[slot=popover-content]:shadow-none",
        className,
      )}
      formatters={{
        formatMonthDropdown: (date) =>
          date.toLocaleString(locale?.code ?? "pt-BR", { month: "short" }),
        formatWeekdayName: (date) =>
          date.toLocaleDateString(locale?.code ?? "pt-BR", { weekday: "narrow" }),
        ...formatters,
      }}
      classNames={{
        root: cn("w-fit", defaults.root),
        months: cn("relative flex flex-col gap-6 md:flex-row", defaults.months),
        month: cn("flex w-full flex-col gap-2", defaults.month),
        nav: cn(
          "absolute inset-x-0 top-0 flex h-8 w-full items-center justify-between gap-1",
          defaults.nav,
        ),
        button_previous: cn(navButton, defaults.button_previous),
        button_next: cn(navButton, defaults.button_next),
        month_caption: cn(
          "flex h-8 w-full items-center justify-center px-9 text-label-lg",
          defaults.month_caption,
        ),
        dropdowns: cn(
          "flex h-8 w-full items-center justify-center gap-1.5 text-label-md",
          defaults.dropdowns,
        ),
        dropdown_root: cn("relative rounded-control has-focus:focus-ring", defaults.dropdown_root),
        dropdown: cn("absolute inset-0 bg-overlay-surface opacity-0", defaults.dropdown),
        caption_label: cn(
          "select-none",
          captionLayout === "label"
            ? "text-label-lg"
            : "flex items-center gap-1 rounded-control text-label-md [&>svg]:size-icon-sm [&>svg]:text-content-secondary",
          defaults.caption_label,
        ),
        month_grid: "w-full border-collapse",
        weekdays: cn("flex", defaults.weekdays),
        weekday: cn(
          "flex h-6 w-(--cell-size) select-none items-center justify-center text-caption text-content-secondary",
          defaults.weekday,
        ),
        week: cn("mt-0.5 flex w-full", defaults.week),
        week_number_header: cn("w-(--cell-size) select-none", defaults.week_number_header),
        week_number: cn("select-none text-caption text-content-secondary", defaults.week_number),
        day: cn("group/day relative size-(--cell-size) select-none p-0 text-center", defaults.day),
        range_start: cn(
          "bg-linear-to-r from-transparent from-50% to-(--calendar-strip) to-50% rtl:bg-linear-to-l",
          defaults.range_start,
        ),
        range_middle: cn("bg-(--calendar-strip)", defaults.range_middle),
        range_end: cn(
          "bg-linear-to-r from-(--calendar-strip) from-50% to-transparent to-50% rtl:bg-linear-to-l",
          defaults.range_end,
        ),
        today: cn(defaults.today),
        outside: cn("text-content-secondary", defaults.outside),
        disabled: cn("text-content-secondary", defaults.disabled),
        hidden: cn("invisible", defaults.hidden),
        ...classNames,
      }}
      components={{
        Root: ({ className: rootClassName, rootRef, ...rootProps }) => (
          <div data-slot="calendar" ref={rootRef} className={cn(rootClassName)} {...rootProps} />
        ),
        Chevron: ({ className: chevronClassName, orientation }) => {
          if (orientation === "left")
            return (
              <IconChevronLeft className={cn("size-icon-sm rtl:rotate-180", chevronClassName)} />
            );
          if (orientation === "right")
            return (
              <IconChevronRight className={cn("size-icon-sm rtl:rotate-180", chevronClassName)} />
            );
          return <IconChevronDown className={cn("size-icon-sm", chevronClassName)} />;
        },
        DayButton: CalendarDayButton,
        ...components,
      }}
      {...props}
    />
  );
}

const toLocalISODate = (date: Date) =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;

export function CalendarDayButton({ className, day, modifiers, ...props }: DayButtonProps) {
  const ref = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus();
  }, [modifiers.focused]);

  const rangeEdge = modifiers.range_start || modifiers.range_end;
  const single = modifiers.selected && !modifiers.range_middle && !rangeEdge;

  return (
    <button
      ref={ref}
      type="button"
      data-slot="calendar-day"
      data-day={toLocalISODate(day.date)}
      data-selected-single={single || undefined}
      data-range-start={modifiers.range_start || undefined}
      data-range-end={modifiers.range_end || undefined}
      data-range-middle={modifiers.range_middle || undefined}
      data-today={(modifiers.today && !modifiers.selected) || undefined}
      data-outside={modifiers.outside || undefined}
      className={cn(
        "flex size-full items-center justify-center rounded-pill border border-transparent p-0 font-medium text-content-primary outline-none transition-colors text-(length:--cell-text) motion-reduce:transition-none",
        "hover:bg-overlay-hover focus-visible:focus-ring",
        "data-today:border-(--calendar-today) data-today:text-(--calendar-today-content)",
        "data-outside:text-content-secondary",
        "data-selected-single:bg-(--calendar-fill) data-selected-single:text-(--calendar-on-fill) data-selected-single:hover:bg-(--calendar-fill)",
        "data-range-start:bg-(--calendar-fill) data-range-start:text-(--calendar-on-fill) data-range-start:hover:bg-(--calendar-fill)",
        "data-range-end:bg-(--calendar-fill) data-range-end:text-(--calendar-on-fill) data-range-end:hover:bg-(--calendar-fill)",
        "data-range-middle:hover:bg-overlay-hover",
        "disabled:pointer-events-none disabled:text-content-secondary disabled:line-through",
        className,
      )}
      {...props}
    />
  );
}
