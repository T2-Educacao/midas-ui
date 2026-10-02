"use client";

import { Combobox, type ComboboxOption } from "@t2-educacao/midas";

const certificacoes: ComboboxOption[] = [
  { value: "cpa", label: "CPA" },
  { value: "cpro-r", label: "CPRO-R" },
  { value: "cpro-i", label: "CPRO-I" },
  { value: "cfp", label: "CFP®" },
  { value: "ancord", label: "ANCORD" },
];

export default function ComboboxBasico() {
  return (
    <Combobox
      className="max-w-56"
      options={certificacoes}
      placeholder="Selecione a certificação"
      aria-label="Certificação"
    />
  );
}
