"use client";

import { Combobox, type ComboboxOption } from "@t2-educacao/midas";

const paises: ComboboxOption[] = [
  { value: "ar", label: "Argentina", description: "América do Sul (ar)" },
  { value: "br", label: "Brasil", description: "América do Sul (br)" },
  { value: "pt", label: "Portugal", description: "Europa (pt)" },
  { value: "us", label: "Estados Unidos", description: "América do Norte (us)" },
];

export default function ComboboxItensComDescricao() {
  return (
    <Combobox
      className="max-w-56"
      options={paises}
      placeholder="Selecione o país"
      aria-label="País"
    />
  );
}
