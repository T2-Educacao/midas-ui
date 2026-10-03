"use client";

import { Calendar, type DateRange } from "@t2-educacao/midas";
import { useState } from "react";

export default function CalendarIntervalo() {
  const hoje = new Date();
  const [periodo, setPeriodo] = useState<DateRange | undefined>({
    from: hoje,
    to: new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate() + 6),
  });

  return (
    <Calendar
      mode="range"
      numberOfMonths={2}
      selected={periodo}
      onSelect={setPeriodo}
      className="rounded-lg border"
    />
  );
}
