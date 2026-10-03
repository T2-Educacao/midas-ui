"use client";

import { Combobox, type ComboboxOption } from "@t2-educacao/midas";

const cursos: ComboboxOption[] = [
  { value: "cpa", label: "Preparatório CPA" },
  { value: "cpro-r", label: "Preparatório CPRO-R" },
  { value: "cpro-i", label: "Preparatório CPRO-I" },
  { value: "cfp", label: "Preparatório CFP®" },
  { value: "excel", label: "Excel para o mercado financeiro" },
  { value: "hp12c", label: "HP 12C" },
];

export default function ComboboxDestaqueAutomatico() {
  return (
    <Combobox
      className="max-w-64"
      options={cursos}
      placeholder="Digite e aperte Enter"
      aria-label="Curso"
    />
  );
}
