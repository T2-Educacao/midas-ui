"use client";

import { CaretDown, CaretLeft, CaretRight } from "@phosphor-icons/react/ssr";
import * as React from "react";
import {
  type DayButtonProps,
  DayPicker,
  type DayPickerProps,
  getDefaultClassNames,
} from "react-day-picker";
import { ptBR } from "react-day-picker/locale";
import { cn } from "../../lib/cn";
import { Button, type ButtonProps, buttonVariants } from "../button/button";

export type CalendarProps = DayPickerProps & {
  buttonVariant?: ButtonProps["variant"];
};

export function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant = "ghost",
  locale = ptBR,
  formatters,
  components,
  ...props
}: CalendarProps) {
  const defaults = getDefaultClassNames();

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      captionLayout={captionLayout}
      locale={locale}
      className={cn(
        "group/calendar bg-background p-2 [--cell-size:--spacing(7)]",
        "in-data-[slot=popover-content]:bg-transparent",
        className,
      )}
      formatters={{
        formatMonthDropdown: (date) =>
          date.toLocaleString(locale?.code ?? "pt-BR", { month: "short" }),
        ...formatters,
      }}
      classNames={{
        root: cn("w-fit", defaults.root),
        months: cn("relative flex flex-col gap-4 md:flex-row", defaults.months),
        month: cn("flex w-full flex-col gap-4", defaults.month),
        nav: cn(
          "absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1",
          defaults.nav,
        ),
        button_previous: cn(
          buttonVariants({ variant: buttonVariant, size: "icon-sm" }),
          "size-(--cell-size) select-none p-0 aria-disabled:opacity-50",
          defaults.button_previous,
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant, size: "icon-sm" }),
          "size-(--cell-size) select-none p-0 aria-disabled:opacity-50",
          defaults.button_next,
        ),
        month_caption: cn(
          "flex h-(--cell-size) w-full items-center justify-center px-(--cell-size)",
          defaults.month_caption,
        ),
        dropdowns: cn(
          "flex h-(--cell-size) w-full items-center justify-center gap-1.5 text-sm font-medium",
          defaults.dropdowns,
        ),
        dropdown_root: cn(
          "relative rounded-md has-focus:ring-3 has-focus:ring-ring/50",
          defaults.dropdown_root,
        ),
        dropdown: cn("absolute inset-0 bg-popover opacity-0", defaults.dropdown),
        caption_label: cn(
          "select-none font-medium",
          captionLayout === "label"
            ? "text-sm"
            : "flex items-center gap-1 rounded-md text-sm [&>svg]:size-3.5 [&>svg]:text-muted-foreground",
          defaults.caption_label,
        ),
        month_grid: "w-full border-collapse",
        weekdays: cn("flex", defaults.weekdays),
        weekday: cn(
          "flex-1 select-none rounded-md text-xs font-normal text-muted-foreground",
          defaults.weekday,
        ),
        week: cn("mt-2 flex w-full", defaults.week),
        week_number_header: cn("w-(--cell-size) select-none", defaults.week_number_header),
        week_number: cn("select-none text-xs text-muted-foreground", defaults.week_number),
        day: cn(
          "group/day relative aspect-square h-full w-full select-none p-0 text-center",
          "[&:first-child[data-selected=true]_button]:rounded-s-lg [&:last-child[data-selected=true]_button]:rounded-e-lg",
          defaults.day,
        ),
        range_start: cn("rounded-s-lg bg-accent", defaults.range_start),
        range_middle: cn("rounded-none", defaults.range_middle),
        range_end: cn("rounded-e-lg bg-accent", defaults.range_end),
        today: cn(
          "rounded-lg bg-accent text-accent-foreground data-[selected=true]:rounded-none",
          defaults.today,
        ),
        outside: cn("text-muted-foreground aria-selected:text-muted-foreground", defaults.outside),
        disabled: cn("text-muted-foreground opacity-50", defaults.disabled),
        hidden: cn("invisible", defaults.hidden),
        ...classNames,
      }}
      components={{
        Root: ({ className: rootClassName, rootRef, ...rootProps }) => (
          <div data-slot="calendar" ref={rootRef} className={cn(rootClassName)} {...rootProps} />
        ),
        Chevron: ({ className: chevronClassName, orientation }) => {
          if (orientation === "left")
            return <CaretLeft className={cn("size-4", chevronClassName)} />;
          if (orientation === "right")
            return <CaretRight className={cn("size-4", chevronClassName)} />;
          return <CaretDown className={cn("size-4", chevronClassName)} />;
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

  const single =
    modifiers.selected && !modifiers.range_start && !modifiers.range_end && !modifiers.range_middle;

  return (
    <Button
      ref={ref}
      variant="ghost"
      size="icon"
      data-day={toLocalISODate(day.date)}
      data-selected-single={single || undefined}
      data-range-start={modifiers.range_start || undefined}
      data-range-end={modifiers.range_end || undefined}
      data-range-middle={modifiers.range_middle || undefined}
      className={cn(
        "relative flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-1 border-0 font-normal leading-none",
        "data-selected-single:bg-primary data-selected-single:text-primary-foreground",
        "data-range-start:rounded-lg data-range-start:bg-primary data-range-start:text-primary-foreground",
        "data-range-end:rounded-lg data-range-end:bg-primary data-range-end:text-primary-foreground",
        "data-range-middle:rounded-none data-range-middle:bg-accent data-range-middle:text-accent-foreground",
        "group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-3 group-data-[focused=true]/day:ring-ring/50",
        className,
      )}
      {...props}
    />
  );
}
