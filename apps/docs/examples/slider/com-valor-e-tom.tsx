"use client";

import { Slider } from "@t2-educacao/midas";
import * as React from "react";

export default function SliderComValorETom() {
  const [minutos, setMinutos] = React.useState([45]);
  const [horas, setHoras] = React.useState([10, 40]);

  return (
    <div className="grid w-full max-w-sm gap-8">
      <div className="grid gap-3">
        <div className="flex justify-between">
          <span className="text-label-md text-content-primary">Tempo de estudo por dia</span>
          <span className="text-mono-md text-selection-content">{minutos[0]} min</span>
        </div>
        <Slider
          value={minutos}
          onValueChange={setMinutos}
          max={120}
          aria-label="Tempo de estudo por dia"
        />
      </div>
      <div className="grid gap-3">
        <div className="flex justify-between">
          <span className="text-label-md text-content-primary">Duração do curso</span>
          <span className="text-mono-md text-content-primary">
            {horas[0]}h – {horas[1]}h
          </span>
        </div>
        <Slider
          tone="neutral"
          value={horas}
          onValueChange={setHoras}
          max={50}
          aria-label="Duração do curso"
        />
      </div>
    </div>
  );
}
