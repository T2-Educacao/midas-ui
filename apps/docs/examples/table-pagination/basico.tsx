"use client";

import { TablePagination } from "@t2-educacao/midas";
import { useState } from "react";

export default function TablePaginationBasico() {
  const [pagina, setPagina] = useState(2);

  return (
    <div className="flex max-w-2xl flex-col gap-4 rounded-container border border-border-subtle">
      <TablePagination
        page={pagina}
        pageCount={13}
        onPageChange={setPagina}
        range={`${(pagina - 1) * 10 + 1}–${pagina * 10} de 128`}
      />
      <TablePagination
        type="simple"
        tone="neutral"
        page={pagina}
        pageCount={13}
        onPageChange={setPagina}
      />
    </div>
  );
}
