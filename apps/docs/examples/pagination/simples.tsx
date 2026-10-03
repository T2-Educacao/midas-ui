"use client";

import {
  getPageRange,
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@t2-educacao/midas";
import { useState } from "react";

export default function PaginationSimples() {
  const [pagina, setPagina] = useState(5);
  const total = 12;

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            aria-disabled={pagina === 1}
            onClick={() => setPagina((p) => Math.max(1, p - 1))}
          />
        </PaginationItem>
        {getPageRange(pagina, total).map((item) =>
          typeof item === "string" ? (
            <PaginationItem key={item}>
              <PaginationEllipsis />
            </PaginationItem>
          ) : (
            <PaginationItem key={item}>
              <PaginationLink isActive={item === pagina} onClick={() => setPagina(item)}>
                {item}
              </PaginationLink>
            </PaginationItem>
          ),
        )}
        <PaginationItem>
          <PaginationNext
            aria-disabled={pagina === total}
            onClick={() => setPagina((p) => Math.min(total, p + 1))}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
