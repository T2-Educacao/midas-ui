"use client";

import { Calendar, type DateRange } from "@t2-educacao/midas";
import { useState } from "react";

export default function CalendarTamanhos() {
  const [data, setData] = useState<Date | undefined>(new Date());
  const [periodo, setPeriodo] = useState<DateRange | undefined>();
  return (
    <div className="flex flex-wrap items-start gap-6">
      <Calendar mode="single" selected={data} onSelect={setData} appearance="solid" />
      <Calendar
        mode="range"
        size="lg"
        tone="neutral"
        selected={periodo}
        onSelect={setPeriodo}
        appearance="solid"
        disabled={{ before: new Date() }}
      />
    </div>
  );
}
