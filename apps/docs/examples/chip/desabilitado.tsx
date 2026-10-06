"use client";

import { Chip } from "@t2-educacao/midas";

export default function ChipDesabilitado() {
  return (
    <Chip variant="outline" disabled onRemove={() => {}}>
      Bloqueado
    </Chip>
  );
}
