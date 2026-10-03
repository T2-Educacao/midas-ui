"use client";

import { CalendarBlank } from "@phosphor-icons/react/ssr";
import { Popover as PopoverPrimitive } from "radix-ui";
import * as React from "react";
import type { DateRange, Matcher } from "react-day-picker";
import { cn } from "../../lib/cn";
import { Button } from "../button/button";
import { Calendar, type CalendarProps } from "../calendar/calendar";

export type { DateRange };

const defaultFormat = (date: Date) =>
  new Intl.DateTimeFormat("pt-BR", { day: "2-digit", month: "short", year: "numeric" }).format(
    date,
  );

interface DatePickerBaseProps {
  placeholder?: string;
  format?: (date: Date) => string;
  icon?: React.ReactNode | false;
  disabled?: boolean;
  invalid?: boolean;
  disabledDays?: Matcher | Matcher[];
  captionLayout?: CalendarProps["captionLayout"];
  startMonth?: Date;
  endMonth?: Date;
  numberOfMonths?: number;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  align?: "start" | "center" | "end";
  id?: string;
  name?: string;
  className?: string;
  "aria-label"?: string;
  "aria-describedby"?: string;
}

export interface DatePickerSingleProps extends DatePickerBaseProps {
  mode?: "single";
  value?: Date | null;
  defaultValue?: Date | null;
  onValueChange?: (date: Date | undefined) => void;
}

export interface DatePickerRangeProps extends DatePickerBaseProps {
  mode: "range";
  value?: DateRange | null;
  defaultValue?: DateRange | null;
  onValueChange?: (range: DateRange | undefined) => void;
}

export type DatePickerProps = DatePickerSingleProps | DatePickerRangeProps;

const toISODate = (date: Date) =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;

export function DatePicker(props: DatePickerProps) {
  const {
    placeholder = props.mode === "range" ? "Selecione o período" : "Selecione uma data",
    format = defaultFormat,
    icon,
    disabled,
    invalid,
    disabledDays,
    captionLayout,
    startMonth,
    endMonth,
    align = "start",
    id,
    name,
    className,
  } = props;

  const [openState, setOpenState] = React.useState(false);
  const open = props.open ?? openState;
  const setOpen = (next: boolean) => {
    if (props.open === undefined) setOpenState(next);
    props.onOpenChange?.(next);
  };

  const [single, setSingle] = React.useState<Date | undefined>(
    props.mode !== "range" ? (props.defaultValue ?? undefined) : undefined,
  );
  const [range, setRange] = React.useState<DateRange | undefined>(
    props.mode === "range" ? (props.defaultValue ?? undefined) : undefined,
  );

  const selectedSingle =
    props.mode !== "range"
      ? props.value !== undefined
        ? (props.value ?? undefined)
        : single
      : undefined;
  const selectedRange =
    props.mode === "range"
      ? props.value !== undefined
        ? (props.value ?? undefined)
        : range
      : undefined;

  const label =
    props.mode === "range"
      ? selectedRange?.from
        ? selectedRange.to
          ? `${format(selectedRange.from)} - ${format(selectedRange.to)}`
          : format(selectedRange.from)
        : ""
      : selectedSingle
        ? format(selectedSingle)
        : "";

  const hiddenValue =
    props.mode === "range"
      ? [selectedRange?.from, selectedRange?.to]
          .filter(Boolean)
          .map((d) => toISODate(d as Date))
          .join("/")
      : selectedSingle
        ? toISODate(selectedSingle)
        : "";

  const shared = {
    disabled: disabledDays,
    captionLayout,
    startMonth,
    endMonth,
    autoFocus: true,
  } as const;

  return (
    <PopoverPrimitive.Root open={open} onOpenChange={setOpen}>
      <PopoverPrimitive.Trigger asChild disabled={disabled}>
        <Button
          id={id}
          variant="outline"
          data-slot="date-picker-trigger"
          data-empty={!label || undefined}
          aria-invalid={invalid || undefined}
          aria-label={props["aria-label"]}
          aria-describedby={props["aria-describedby"]}
          className={cn(
            "w-full justify-start font-normal data-empty:text-muted-foreground",
            className,
          )}
        >
          {icon !== false && (icon ?? <CalendarBlank className="text-muted-foreground" />)}
          <span className="truncate">{label || placeholder}</span>
        </Button>
      </PopoverPrimitive.Trigger>
      {name && <input type="hidden" name={name} value={hiddenValue} />}
      <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content
          data-slot="popover-content"
          aria-label="Calendário"
          align={align}
          sideOffset={4}
          className="z-50 w-auto overflow-hidden rounded-lg border border-border bg-popover p-0 text-popover-foreground shadow-md outline-none origin-(--radix-popover-content-transform-origin) animate-midas-in motion-reduce:animate-none"
        >
          {props.mode === "range" ? (
            <Calendar
              {...shared}
              mode="range"
              numberOfMonths={props.numberOfMonths ?? 2}
              defaultMonth={selectedRange?.from}
              selected={selectedRange}
              onSelect={(next) => {
                if (props.value === undefined) setRange(next);
                props.onValueChange?.(next);
              }}
            />
          ) : (
            <Calendar
              {...shared}
              mode="single"
              numberOfMonths={props.numberOfMonths ?? 1}
              defaultMonth={selectedSingle}
              selected={selectedSingle}
              onSelect={(next) => {
                if (props.value === undefined) setSingle(next);
                props.onValueChange?.(next);
                if (next) setOpen(false);
              }}
            />
          )}
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Portal>
    </PopoverPrimitive.Root>
  );
}
