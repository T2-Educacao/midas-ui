"use client";

import * as React from "react";
import { cn } from "../../lib/cn";
import type { OverlayTone } from "../../lib/overlay-styles";
import {
  BottomSheet,
  BottomSheetClose,
  BottomSheetContent,
  type BottomSheetContentProps,
  BottomSheetFooter,
  BottomSheetHeader,
  BottomSheetTitle,
  BottomSheetTrigger,
} from "../bottom-sheet/bottom-sheet";
import { Button } from "../button/button";
import { Calendar } from "../calendar/calendar";
import { WheelPicker } from "../wheel-picker/wheel-picker";

const monthNames = Array.from({ length: 12 }, (_, month) =>
  new Intl.DateTimeFormat("pt-BR", { month: "long" })
    .format(new Date(2026, month, 1))
    .replace(/^./, (c) => c.toUpperCase()),
);

export interface DateSheetProps
  extends Omit<BottomSheetContentProps, "onChange" | "defaultValue" | "title"> {
  type?: "calendar" | "wheel";
  title?: React.ReactNode;
  trigger?: React.ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  value?: Date;
  defaultValue?: Date;
  onValueChange?: (date: Date | undefined) => void;
  tone?: OverlayTone;
  confirmLabel?: string;
  minYear?: number;
  maxYear?: number;
}

export const DateSheet = React.forwardRef<HTMLDivElement, DateSheetProps>(
  (
    {
      type = "calendar",
      title = "Selecione a data",
      trigger,
      open,
      defaultOpen,
      onOpenChange,
      value,
      defaultValue,
      onValueChange,
      tone = "brand",
      confirmLabel = "Confirmar",
      minYear = new Date().getFullYear() - 2,
      maxYear = new Date().getFullYear() + 2,
      className,
      ...props
    },
    ref,
  ) => {
    const [internal, setInternal] = React.useState<Date | undefined>(defaultValue);
    const current = value ?? internal;
    const [draft, setDraft] = React.useState<Date | undefined>(current);

    const years = Array.from({ length: maxYear - minYear + 1 }, (_, i) => String(minYear + i));
    const base = draft ?? new Date();
    const daysInMonth = new Date(base.getFullYear(), base.getMonth() + 1, 0).getDate();

    const confirm = () => {
      if (value === undefined) setInternal(draft);
      onValueChange?.(draft);
    };

    return (
      <BottomSheet
        open={open}
        defaultOpen={defaultOpen}
        onOpenChange={(next) => {
          if (next) setDraft(current);
          onOpenChange?.(next);
        }}
      >
        {trigger && <BottomSheetTrigger asChild>{trigger}</BottomSheetTrigger>}
        <BottomSheetContent
          ref={ref}
          data-slot="date-sheet"
          data-type={type}
          aria-describedby={undefined}
          className={cn("gap-4", className)}
          {...props}
        >
          <BottomSheetHeader>
            <BottomSheetTitle>{title}</BottomSheetTitle>
          </BottomSheetHeader>
          {type === "wheel" ? (
            <WheelPicker
              tone={tone}
              value={{
                day: String(base.getDate()),
                month: String(base.getMonth()),
                year: String(base.getFullYear()),
              }}
              columns={[
                {
                  id: "day",
                  label: "Dia",
                  options: Array.from({ length: daysInMonth }, (_, i) => ({
                    value: String(i + 1),
                    label: String(i + 1),
                  })),
                },
                {
                  id: "month",
                  label: "Mês",
                  className: "flex-[1.5]",
                  options: monthNames.map((label, i) => ({ value: String(i), label })),
                },
                {
                  id: "year",
                  label: "Ano",
                  options: years.map((year) => ({ value: year, label: year })),
                },
              ]}
              onValueChange={(next) => {
                const year = Number(next.year);
                const month = Number(next.month);
                const day = Math.min(Number(next.day), new Date(year, month + 1, 0).getDate());
                setDraft(new Date(year, month, day));
              }}
            />
          ) : (
            <div className="flex justify-center">
              <Calendar
                mode="single"
                size="lg"
                tone={tone}
                selected={draft}
                defaultMonth={draft}
                onSelect={setDraft}
                className="p-0"
              />
            </div>
          )}
          <BottomSheetFooter>
            <BottomSheetClose asChild>
              <Button variant={tone === "neutral" ? "default" : "accent"} onClick={confirm}>
                {confirmLabel}
              </Button>
            </BottomSheetClose>
          </BottomSheetFooter>
        </BottomSheetContent>
      </BottomSheet>
    );
  },
);
DateSheet.displayName = "DateSheet";
