"use client";

import { Slider } from "@t2-educacao/midas";
import * as React from "react";

export default function SliderIntervalo() {
  const [faixa, setFaixa] = React.useState([200, 800]);

  return (
    <div className="grid w-full max-w-sm gap-3">
      <div className="flex justify-between text-sm">
        <span>Faixa de preço</span>
        <span className="text-muted-foreground">
          R$ {faixa[0]} a R$ {faixa[1]}
        </span>
      </div>
      <Slider
        value={faixa}
        onValueChange={setFaixa}
        min={0}
        max={1000}
        step={50}
        aria-label="Faixa de preço"
      />
    </div>
  );
}
