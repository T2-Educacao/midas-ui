"use client";

import { Combobox, type ComboboxOption } from "@t2-educacao/midas";

const fusos: ComboboxOption[] = [
  { value: "sp", label: "(GMT-3) São Paulo", group: "Américas" },
  { value: "ny", label: "(GMT-5) Nova York", group: "Américas" },
  { value: "la", label: "(GMT-8) Los Angeles", group: "Américas" },
  { value: "lisboa", label: "(GMT+0) Lisboa", group: "Europa" },
  { value: "paris", label: "(GMT+1) Paris", group: "Europa" },
  { value: "toquio", label: "(GMT+9) Tóquio", group: "Ásia" },
];

export default function ComboboxGrupos() {
  return (
    <Combobox
      className="max-w-56"
      options={fusos}
      placeholder="Selecione o fuso"
      aria-label="Fuso horário"
    />
  );
}
