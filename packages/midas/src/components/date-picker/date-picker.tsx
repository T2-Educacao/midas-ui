"use client";

import { IconCalendar, IconChevronDown } from "@tabler/icons-react";
import { Popover as PopoverPrimitive } from "radix-ui";
import * as React from "react";
import type { DateRange, Matcher } from "react-day-picker";
import { cn } from "../../lib/cn";
import {
  type FieldAppearance,
  type FieldShape,
  type FieldSize,
  type FieldTone,
  fieldControlVariants,
} from "../../lib/field-styles";
import { overlayAppearance } from "../../lib/overlay-styles";
import { Button } from "../button/button";
import { Calendar, type CalendarProps } from "../calendar/calendar";

export type { DateRange };

const defaultFormat = (date: Date) =>
  new Intl.DateTimeFormat("pt-BR", { day: "2-digit", month: "short", year: "numeric" }).format(
    date,
  );

const summaryFormat = (date: Date) =>
  new Intl.DateTimeFormat("pt-BR", { weekday: "short", day: "numeric", month: "short" })
    .format(date)
    .replace(".", "");

const dayMs = 24 * 60 * 60 * 1000;

const summarize = (single?: Date, range?: DateRange) => {
  if (range?.from) {
    if (!range.to) return summaryFormat(range.from);
    const days = Math.round((range.to.getTime() - range.from.getTime()) / dayMs) + 1;
    return `${summaryFormat(range.from)} – ${summaryFormat(range.to)} · ${days} ${days === 1 ? "dia" : "dias"}`;
  }
  return single ? summaryFormat(single) : "";
};

export interface DatePickerPreset {
  label: string;
  description?: string;
  value: Date | DateRange;
}

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
  size?: FieldSize;
  appearance?: FieldAppearance;
  tone?: FieldTone;
  shape?: FieldShape;
  calendarSize?: "md" | "lg";
  presets?: DatePickerPreset[];
  confirm?: boolean;
  cancelLabel?: string;
  applyLabel?: string;
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

const isRange = (value: Date | DateRange): value is DateRange => !(value instanceof Date);

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
    size,
    appearance,
    tone,
    shape,
    calendarSize,
    presets,
    confirm = false,
    cancelLabel = "Cancelar",
    applyLabel = "Aplicar",
    id,
    name,
    className,
  } = props;

  const [openState, setOpenState] = React.useState(false);
  const open = props.open ?? openState;

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

  const [draftSingle, setDraftSingle] = React.useState<Date | undefined>(selectedSingle);
  const [draftRange, setDraftRange] = React.useState<DateRange | undefined>(selectedRange);

  const setOpen = (next: boolean) => {
    if (next) {
      setDraftSingle(selectedSingle);
      setDraftRange(selectedRange);
    }
    if (props.open === undefined) setOpenState(next);
    props.onOpenChange?.(next);
  };

  const commitSingle = (next: Date | undefined) => {
    if (props.mode === "range") return;
    if (props.value === undefined) setSingle(next);
    props.onValueChange?.(next);
  };

  const commitRange = (next: DateRange | undefined) => {
    if (props.mode !== "range") return;
    if (props.value === undefined) setRange(next);
    props.onValueChange?.(next);
  };

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
    tone,
    size: calendarSize,
    autoFocus: true,
  } as const;

  const applyPreset = (value: Date | DateRange) => {
    if (props.mode === "range" && isRange(value)) {
      if (confirm) setDraftRange(value);
      else commitRange(value);
    } else if (props.mode !== "range" && !isRange(value)) {
      if (confirm) setDraftSingle(value);
      else {
        commitSingle(value);
        setOpen(false);
      }
    }
  };

  const apply = () => {
    if (props.mode === "range") commitRange(draftRange);
    else commitSingle(draftSingle);
    setOpen(false);
  };

  const shownSingle = confirm ? draftSingle : selectedSingle;
  const shownRange = confirm ? draftRange : selectedRange;

  return (
    <PopoverPrimitive.Root open={open} onOpenChange={setOpen}>
      <PopoverPrimitive.Trigger asChild disabled={disabled}>
        <button
          type="button"
          id={id}
          data-slot="date-picker-trigger"
          data-empty={!label || undefined}
          aria-invalid={invalid || undefined}
          aria-label={props["aria-label"]}
          aria-describedby={props["aria-describedby"]}
          disabled={disabled}
          className={cn(
            fieldControlVariants({ size, appearance, tone, shape }),
            "flex items-center justify-start gap-2.5 text-start data-empty:text-content-secondary",
            className,
          )}
        >
          {icon !== false && (
            <span aria-hidden className="shrink-0 text-content-secondary [&_svg]:size-icon-md">
              {icon ?? <IconCalendar />}
            </span>
          )}
          <span className="flex-1 truncate">{label || placeholder}</span>
          <IconChevronDown aria-hidden className="size-icon-md shrink-0 text-content-secondary" />
        </button>
      </PopoverPrimitive.Trigger>
      {name && <input type="hidden" name={name} value={hiddenValue} />}
      <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content
          data-slot="popover-content"
          aria-label="Calendário"
          align={align}
          sideOffset={6}
          className={cn(
            "z-(--midas-z-popup) w-auto overflow-hidden rounded-overlay border p-2 text-content-primary shadow-elevation-overlay outline-none",
            overlayAppearance[appearance === "glass" ? "glass" : "solid"],
            "origin-(--radix-popover-content-transform-origin) animate-midas-in motion-reduce:animate-none",
          )}
        >
          <div className="flex gap-3">
            {presets && presets.length > 0 && (
              <ul
                data-slot="date-picker-presets"
                className="flex w-44 shrink-0 flex-col gap-0.5 border-e border-border-subtle p-1 pe-3"
              >
                {presets.map((preset) => (
                  <li key={preset.label}>
                    <button
                      type="button"
                      onClick={() => applyPreset(preset.value)}
                      className="flex w-full flex-col rounded-lg px-2.5 py-2 text-start outline-none transition-colors hover:bg-overlay-hover focus-visible:focus-ring motion-reduce:transition-none"
                    >
                      <span className="text-label-md">{preset.label}</span>
                      {preset.description && (
                        <span className="text-caption text-content-secondary">
                          {preset.description}
                        </span>
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            )}
            {props.mode === "range" ? (
              <Calendar
                {...shared}
                mode="range"
                numberOfMonths={props.numberOfMonths ?? 2}
                defaultMonth={shownRange?.from}
                selected={shownRange}
                onSelect={(next) => {
                  if (confirm) setDraftRange(next);
                  else commitRange(next);
                }}
              />
            ) : (
              <Calendar
                {...shared}
                mode="single"
                numberOfMonths={props.numberOfMonths ?? 1}
                defaultMonth={shownSingle}
                selected={shownSingle}
                onSelect={(next) => {
                  if (confirm) {
                    setDraftSingle(next);
                    return;
                  }
                  commitSingle(next);
                  if (next) setOpen(false);
                }}
              />
            )}
          </div>
          {confirm && (
            <div
              data-slot="date-picker-footer"
              className="mt-1 flex items-center gap-2 border-t border-border-subtle px-3 pt-2"
            >
              <span className="flex-1 text-body-sm text-content-secondary">
                {summarize(shownSingle, shownRange)}
              </span>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => {
                  setOpen(false);
                }}
              >
                {cancelLabel}
              </Button>
              <Button
                type="button"
                variant={tone === "neutral" ? "default" : "accent"}
                size="sm"
                onClick={apply}
              >
                {applyLabel}
              </Button>
            </div>
          )}
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Portal>
    </PopoverPrimitive.Root>
  );
}
