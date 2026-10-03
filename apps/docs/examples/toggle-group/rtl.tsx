"use client";

import { DirectionProvider, ToggleGroup, ToggleGroupItem } from "@t2-educacao/midas";

export default function ToggleGroupRtl() {
  return (
    <div dir="rtl">
      <DirectionProvider dir="rtl">
        <ToggleGroup type="single" variant="outline" defaultValue="1" aria-label="Visualização">
          <ToggleGroupItem value="1">قائمة</ToggleGroupItem>
          <ToggleGroupItem value="2">شبكة</ToggleGroupItem>
          <ToggleGroupItem value="3">تقويم</ToggleGroupItem>
        </ToggleGroup>
      </DirectionProvider>
    </div>
  );
}
