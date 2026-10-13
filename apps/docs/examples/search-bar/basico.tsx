"use client";

import { SearchBar } from "@t2-educacao/midas";
import * as React from "react";

export default function SearchBarBasico() {
  const [busca, setBusca] = React.useState("");

  return (
    <div className="grid w-full max-w-md gap-3">
      <SearchBar
        aria-label="Buscar"
        value={busca}
        onValueChange={setBusca}
        shortcut="⌘K"
        placeholder="Buscar cursos, trilhas e aulas"
      />
      <SearchBar aria-label="Buscar (LG)" size="lg" shape="pill" appearance="filled" />
    </div>
  );
}
