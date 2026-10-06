"use client";

import { Textarea } from "@t2-educacao/midas";
import { useState } from "react";

export default function TextareaTituloInline() {
  const [titulo, setTitulo] = useState("");

  return (
    <Textarea
      autoGrow
      bare
      rows={1}
      aria-label="Título"
      placeholder="Título sem nome"
      className="max-w-md text-2xl font-semibold"
      value={titulo}
      onChange={(event) => setTitulo(event.target.value)}
    />
  );
}
