"use client";

import { Combobox, type ComboboxOption } from "@t2-educacao/midas";

const certificacoes: ComboboxOption[] = [
  { value: "cpa", label: "CPA" },
  { value: "cpro-r", label: "CPRO-R" },
  { value: "cpro-i", label: "CPRO-I" },
  { value: "cfp", label: "CFP®" },
  { value: "ancord", label: "ANCORD" },
];

export default function ComboboxInvalidoEDesabilitado() {
  return (
    <>
      <Combobox className="max-w-56" invalid options={certificacoes} aria-label="Inválido" />
      <Combobox className="max-w-56" disabled options={certificacoes} aria-label="Desabilitado" />
    </>
  );
}
