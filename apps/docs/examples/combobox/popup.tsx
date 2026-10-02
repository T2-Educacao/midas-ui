"use client";

import { Combobox, type ComboboxOption } from "@t2-educacao/midas";

const paises: ComboboxOption[] = [
  { value: "br", label: "Brasil" },
  { value: "ar", label: "Argentina" },
  { value: "cl", label: "Chile" },
  { value: "pt", label: "Portugal" },
  { value: "us", label: "Estados Unidos" },
];

export default function ComboboxPopup() {
  return (
    <Combobox
      trigger="button"
      className="max-w-56"
      options={paises}
      placeholder="Selecione o país"
      aria-label="País"
    />
  );
}
