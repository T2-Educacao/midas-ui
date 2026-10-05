"use client";

import { Checkbox, Label, Questionnaire, type QuestionnaireQuestion } from "@t2-educacao/midas";
import { useState } from "react";

const perguntas: QuestionnaireQuestion[] = [
  {
    id: "nivel",
    title: "Qual é o seu nível no mercado financeiro?",
    options: [
      { value: "iniciante", label: "Iniciante" },
      { value: "intermediario", label: "Intermediário" },
      { value: "avancado", label: "Avançado" },
    ],
  },
  {
    id: "objetivo",
    title: "Qual é o seu objetivo?",
    options: [
      { value: "certificacao", label: "Tirar uma certificação" },
      { value: "carreira", label: "Mudar de carreira" },
      { value: "investir", label: "Investir melhor" },
    ],
  },
];

export default function QuestionnaireAnimacao() {
  const [animado, setAnimado] = useState(true);

  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <div className="flex items-center gap-2">
        <Checkbox
          id="questionario-animado"
          checked={animado}
          onCheckedChange={(valor) => setAnimado(valor === true)}
        />
        <Label htmlFor="questionario-animado">Animar a troca de pergunta</Label>
      </div>
      <Questionnaire key={String(animado)} questions={perguntas} animated={animado} />
    </div>
  );
}
