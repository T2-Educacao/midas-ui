"use client";

import { NativeSelect, SearchBar } from "@t2-educacao/midas";
import * as React from "react";

export default function SearchBarFiltrosEEscopo() {
  const [filtros, setFiltros] = React.useState(2);

  return (
    <div className="grid w-full max-w-md gap-3">
      <SearchBar
        aria-label="Buscar com filtros"
        filterCount={filtros}
        onFilterClick={() => setFiltros((atual) => (atual === 0 ? 2 : 0))}
      />
      <SearchBar
        aria-label="Buscar por escopo"
        scope={
          <NativeSelect
            aria-label="Escopo"
            appearance="filled"
            className="h-control-md border-0 bg-transparent px-0 shadow-none"
          >
            <option>Todos</option>
            <option>Cursos</option>
            <option>Aulas</option>
          </NativeSelect>
        }
      />
    </div>
  );
}
