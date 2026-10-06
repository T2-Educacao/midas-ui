"use client";

import { Slider } from "@t2-educacao/midas";
import * as React from "react";

export default function SliderBasico() {
  const [volume, setVolume] = React.useState([40]);

  return (
    <div className="grid w-full max-w-sm gap-3">
      <div className="flex justify-between text-sm">
        <span>Volume</span>
        <span className="text-muted-foreground">{volume[0]}%</span>
      </div>
      <Slider value={volume} onValueChange={setVolume} max={100} step={1} aria-label="Volume" />
    </div>
  );
}
