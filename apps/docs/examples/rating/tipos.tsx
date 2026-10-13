"use client";

import { Rating } from "@t2-educacao/midas";
import * as React from "react";

export default function RatingTipos() {
  const [valor, setValor] = React.useState(4);

  return (
    <div className="grid gap-6">
      <Rating aria-label="Estrelas" value={valor} onValueChange={setValor} />
      <Rating type="coin" aria-label="Moedas" defaultValue={3} />
      <Rating type="piggy" boxed aria-label="Cofrinho" defaultValue={2} />
      <Rating type="emoji" size="lg" aria-label="Como foi a aula?" defaultValue={4} />
      <Rating type="number" aria-label="Escala de 1 a 5" defaultValue={4} />
      <Rating type="nps" aria-label="NPS" defaultValue={9} />
    </div>
  );
}
