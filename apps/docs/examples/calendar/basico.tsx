"use client";

import { Calendar } from "@t2-educacao/midas";
import { useState } from "react";

export default function CalendarBasico() {
  const [data, setData] = useState<Date | undefined>(new Date());
  return (
    <Calendar mode="single" selected={data} onSelect={setData} className="rounded-lg border" />
  );
}
