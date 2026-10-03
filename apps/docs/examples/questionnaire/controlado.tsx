"use client";

import {
  Button,
  Questionnaire,
  type QuestionnaireAnswers,
  type QuestionnaireQuestion,
} from "@t2-educacao/midas";
import { useState } from "react";

const perguntas: QuestionnaireQuestion[] = [
  {
    id: "certificacao",
    title: "Qual certificação você vai tirar?",
    description: "Vamos montar seu plano de estudos.",
    options: [
      { value: "cpa", label: "CPA" },
      { value: "cpro-r", label: "CPRO-R" },
      { value: "cpro-i", label: "CPRO-I" },
    ],
  },
  {
    id: "tempo",
    title: "Quanto tempo você tem por semana?",
    description: "Pode mudar depois.",
    options: [
      { value: "ate-3", label: "Até 3 horas" },
      { value: "3-a-6", label: "De 3 a 6 horas" },
      { value: "mais-6", label: "Mais de 6 horas" },
    ],
  },
  {
    id: "formato",
    title: "Como você prefere estudar?",
    options: [
      { value: "videos", label: "Videoaulas" },
      { value: "questoes", label: "Questões" },
      { value: "resumos", label: "Resumos" },
    ],
  },
];

export default function QuestionnaireControlado() {
  const [respostas, setRespostas] = useState<QuestionnaireAnswers>({
    certificacao: { values: ["cpa"] },
  });
  const [etapa, setEtapa] = useState(1);

  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <div className="flex items-center justify-between rounded-lg border border-border bg-muted px-3 py-2 text-xs text-muted-foreground">
        <span>Etapa salva: {etapa + 1}</span>
        <Button size="xs" variant="outline" onClick={() => setEtapa(0)}>
          Recomeçar
        </Button>
      </div>
      <Questionnaire
        questions={perguntas}
        value={respostas}
        onValueChange={setRespostas}
        step={etapa}
        onStepChange={setEtapa}
      />
    </div>
  );
}
