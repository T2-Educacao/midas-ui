"use client";

import { Combobox, type ComboboxOption } from "@t2-educacao/midas";

const certificacoes: ComboboxOption[] = [
  { value: "cpa", label: "CPA" },
  { value: "cpro-r", label: "CPRO-R" },
  { value: "cpro-i", label: "CPRO-I" },
  { value: "cfp", label: "CFP®" },
  { value: "ancord", label: "ANCORD" },
];

export default function ComboboxMultiplo() {
  return (
    <Combobox
      multiple
      className="max-w-80"
      options={certificacoes}
      defaultValue={["cpa", "cpro-r"]}
      placeholder="Selecione"
      aria-label="Certificações"
    />
  );
}
