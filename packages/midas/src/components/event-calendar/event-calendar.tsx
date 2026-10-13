"use client";

import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "../../lib/cn";
import { Button } from "../button/button";

export type EventCategory = "prova" | "aula" | "simulado" | "entrega" | "mentoria";

export const categoryLabels: Record<EventCategory, string> = {
  prova: "Provas",
  aula: "Aulas ao vivo",
  simulado: "Simulados",
  entrega: "Entregas",
  mentoria: "Mentorias",
};

const categoryOrder = Object.keys(categoryLabels) as EventCategory[];

const dot: Record<EventCategory, string> = {
  prova: "bg-chart-1",
  aula: "bg-chart-2",
  simulado: "bg-chart-3",
  entrega: "bg-chart-4",
  mentoria: "bg-chart-5",
};

const accent: Record<EventCategory, string> = {
  prova: "border-chart-1",
  aula: "border-chart-2",
  simulado: "border-chart-3",
  entrega: "border-chart-4",
  mentoria: "border-chart-5",
};

export const calendarEventVariants = cva(
  "flex min-w-0 items-center gap-1.5 rounded-xs px-1.5 py-0.5 text-label-sm",
  {
    variants: {
      variant: {
        soft: "bg-surface-muted text-content-primary",
        solid: "text-content-inverse",
        block: "border-s-2 bg-surface-muted text-content-primary",
      },
    },
    defaultVariants: { variant: "soft" },
  },
);

export interface CalendarEventProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title">,
    VariantProps<typeof calendarEventVariants> {
  title: React.ReactNode;
  category?: EventCategory;
}

export const CalendarEvent = React.forwardRef<HTMLDivElement, CalendarEventProps>(
  ({ className, title, category = "prova", variant, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="calendar-event"
      data-category={category}
      className={cn(
        calendarEventVariants({ variant }),
        variant === "solid" && dot[category],
        variant === "block" && accent[category],
        className,
      )}
      {...props}
    >
      {(variant ?? "soft") === "soft" && (
        <span aria-hidden className={cn("size-1.5 shrink-0 rounded-pill", dot[category])} />
      )}
      <span className="truncate">{title}</span>
    </div>
  ),
);
CalendarEvent.displayName = "CalendarEvent";

export interface EventCalendarItem {
  id: string;
  title: string;
  date: Date;
  category: EventCategory;
  time?: string;
  details?: string;
}

export interface EventCalendarProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onSelect"> {
  events: EventCalendarItem[];
  month?: Date;
  defaultMonth?: Date;
  onMonthChange?: (month: Date) => void;
  view?: "month" | "agenda";
  onEventSelect?: (event: EventCalendarItem) => void;
  maxEventsPerDay?: number;
  todayLabel?: string;
}

const sameDay = (a: Date, b: Date) =>
  a.getFullYear() === b.getFullYear() &&
  a.getMonth() === b.getMonth() &&
  a.getDate() === b.getDate();

export const EventCalendar = React.forwardRef<HTMLDivElement, EventCalendarProps>(
  (
    {
      className,
      events,
      month,
      defaultMonth,
      onMonthChange,
      view = "month",
      onEventSelect,
      maxEventsPerDay = 2,
      todayLabel = "Hoje",
      ...props
    },
    ref,
  ) => {
    const [internal, setInternal] = React.useState(defaultMonth ?? new Date());
    const current = month ?? internal;
    const [hidden, setHidden] = React.useState<EventCategory[]>([]);

    const setMonth = (next: Date) => {
      if (month === undefined) setInternal(next);
      onMonthChange?.(next);
    };

    const title = new Intl.DateTimeFormat("pt-BR", { month: "long", year: "numeric" })
      .format(current)
      .replace(/^./, (c) => c.toUpperCase());

    const visible = events.filter(
      (event) =>
        !hidden.includes(event.category) &&
        event.date.getMonth() === current.getMonth() &&
        event.date.getFullYear() === current.getFullYear(),
    );

    const first = new Date(current.getFullYear(), current.getMonth(), 1);
    const daysInMonth = new Date(current.getFullYear(), current.getMonth() + 1, 0).getDate();
    const cells: { id: string; date: Date | null }[] = [
      ...Array.from({ length: first.getDay() }, (_, i) => ({ id: `vazio-${i}`, date: null })),
      ...Array.from({ length: daysInMonth }, (_, i) => ({
        id: `dia-${i + 1}`,
        date: new Date(current.getFullYear(), current.getMonth(), i + 1),
      })),
    ];
    const weekdays = Array.from({ length: 7 }, (_, i) => {
      const sample = new Date(2026, 7, 2 + i);
      return {
        key: new Intl.DateTimeFormat("pt-BR", { weekday: "long" }).format(sample),
        label: new Intl.DateTimeFormat("pt-BR", { weekday: "narrow" }).format(sample),
      };
    });
    const today = new Date();

    return (
      <div
        ref={ref}
        data-slot="event-calendar"
        data-view={view}
        className={cn(
          "flex flex-col gap-4 rounded-container border border-border-subtle bg-surface-default p-4 text-content-primary shadow-elevation-card",
          className,
        )}
        {...props}
      >
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex flex-1 flex-col">
            <h3 className="text-heading-sm">{title}</h3>
            <span className="text-mono-sm text-content-secondary">
              {visible.length} {visible.length === 1 ? "evento" : "eventos"}
            </span>
          </div>
          <Button type="button" variant="outline" size="sm" onClick={() => setMonth(new Date())}>
            {todayLabel}
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="icon-sm"
            aria-label="Mês anterior"
            onClick={() => setMonth(new Date(current.getFullYear(), current.getMonth() - 1, 1))}
          >
            <IconChevronLeft className="rtl:rotate-180" />
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="icon-sm"
            aria-label="Próximo mês"
            onClick={() => setMonth(new Date(current.getFullYear(), current.getMonth() + 1, 1))}
          >
            <IconChevronRight className="rtl:rotate-180" />
          </Button>
        </div>
        <div role="group" aria-label="Filtrar por categoria" className="flex flex-wrap gap-2">
          {categoryOrder.map((category) => {
            const off = hidden.includes(category);
            return (
              <button
                key={category}
                type="button"
                aria-pressed={!off}
                onClick={() =>
                  setHidden((prev) =>
                    off ? prev.filter((item) => item !== category) : [...prev, category],
                  )
                }
                className={cn(
                  "inline-flex h-control-sm items-center gap-1.5 rounded-pill border px-3 text-label-sm outline-none transition-colors focus-visible:focus-ring motion-reduce:transition-none",
                  off
                    ? "border-dashed border-border-default text-content-secondary"
                    : "border-border-default bg-surface-default text-content-primary",
                )}
              >
                <span
                  aria-hidden
                  className={cn("size-2 rounded-pill", off ? "bg-border-strong" : dot[category])}
                />
                {categoryLabels[category]}
              </button>
            );
          })}
        </div>
        {view === "month" ? (
          <div role="group" aria-label={title} className="grid grid-cols-7 gap-px">
            {weekdays.map((weekday) => (
              <div
                key={weekday.key}
                className="py-1 text-center text-caption text-content-secondary"
              >
                {weekday.label}
              </div>
            ))}
            {cells.map(({ id, date }) => {
              if (!date) return <div key={id} aria-hidden />;
              const dayEvents = visible.filter((event) => sameDay(event.date, date));
              const shown = dayEvents.slice(0, maxEventsPerDay);
              const extra = dayEvents.length - shown.length;
              const isToday = sameDay(date, today);
              return (
                <div
                  key={id}
                  data-today={isToday || undefined}
                  className="flex min-h-24 flex-col gap-1 rounded-control border border-border-subtle p-1.5"
                >
                  <span
                    className={cn(
                      "flex size-6 items-center justify-center rounded-pill text-label-sm",
                      isToday && "bg-selection-fill text-selection-on-fill",
                    )}
                  >
                    {date.getDate()}
                  </span>
                  {shown.map((event) => (
                    <button
                      key={event.id}
                      type="button"
                      onClick={() => onEventSelect?.(event)}
                      className="rounded-xs text-start outline-none focus-visible:focus-ring"
                    >
                      <CalendarEvent title={event.title} category={event.category} />
                    </button>
                  ))}
                  {extra > 0 && (
                    <span className="px-1.5 text-caption text-content-secondary">
                      +{extra} mais
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <ul data-slot="event-calendar-agenda" className="m-0 flex list-none flex-col gap-2 p-0">
            {[...visible]
              .sort((a, b) => a.date.getTime() - b.date.getTime())
              .map((event) => (
                <li key={event.id}>
                  <button
                    type="button"
                    onClick={() => onEventSelect?.(event)}
                    className="flex w-full items-center gap-4 rounded-control border border-border-subtle p-3 text-start outline-none hover:bg-state-hover focus-visible:focus-ring"
                  >
                    <span className="flex w-10 flex-col items-center text-mono-overline text-content-secondary">
                      {new Intl.DateTimeFormat("pt-BR", { month: "short" })
                        .format(event.date)
                        .replace(".", "")}
                      <span className="text-heading-sm text-content-primary">
                        {event.date.getDate()}
                      </span>
                    </span>
                    <span className="flex min-w-0 flex-1 flex-col">
                      <span className="truncate text-label-md">{event.title}</span>
                      <span className="truncate text-mono-sm text-content-secondary">
                        {[categoryLabels[event.category], event.time, event.details]
                          .filter(Boolean)
                          .join(" · ")}
                      </span>
                    </span>
                    <span aria-hidden className={cn("size-2 rounded-pill", dot[event.category])} />
                  </button>
                </li>
              ))}
          </ul>
        )}
      </div>
    );
  },
);
EventCalendar.displayName = "EventCalendar";
