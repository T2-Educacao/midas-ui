"use client";

import { WheelPicker } from "@t2-educacao/midas";
import { useState } from "react";

const meses = ["Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

export default function WheelPickerBasico() {
  const [valor, setValor] = useState<Record<string, string>>({ mes: "2", ano: "2026" });
  return (
    <div className="max-w-sm">
      <WheelPicker
        value={valor}
        onValueChange={setValor}
        columns={[
          {
            id: "mes",
            label: "Mês",
            className: "flex-[1.5]",
            options: meses.map((label, index) => ({ value: String(index), label })),
          },
          {
            id: "ano",
            label: "Ano",
            options: ["2025", "2026", "2027"].map((ano) => ({ value: ano, label: ano })),
          },
        ]}
      />
    </div>
  );
}
