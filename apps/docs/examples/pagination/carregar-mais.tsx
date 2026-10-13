"use client";

import { PaginationLoadMore, PaginationShowMore } from "@t2-educacao/midas";
import { useState } from "react";

const cursos = [
  "Renda fixa do zero",
  "Investindo em ações",
  "Planejamento financeiro",
  "Fundos imobiliários",
  "Tesouro Direto",
  "Declaração de IR",
];

export default function PaginationCarregarMais() {
  const [mostrados, setMostrados] = useState(32);
  const [aberto, setAberto] = useState(false);

  return (
    <div className="flex flex-col gap-8">
      <PaginationLoadMore
        shown={mostrados}
        total={128}
        onLoadMore={() => setMostrados((atual) => Math.min(128, atual + 32))}
      />
      <div className="relative">
        <ul
          className={
            aberto ? "flex flex-col gap-2" : "flex max-h-40 flex-col gap-2 overflow-hidden"
          }
        >
          {cursos.map((curso) => (
            <li
              key={curso}
              className="rounded-control border border-border-subtle bg-surface-default p-3 text-body-md"
            >
              {curso}
            </li>
          ))}
        </ul>
        {aberto ? null : (
          <PaginationShowMore onShowMore={() => setAberto(true)}>
            Ver mais 4 cursos
          </PaginationShowMore>
        )}
      </div>
    </div>
  );
}
