"use client";

import { Progress, Questionnaire, type QuestionnaireQuestion } from "@t2-educacao/midas";

const perguntas: QuestionnaireQuestion[] = [
  {
    id: "certificacao",
    title: "Qual certificação você vai tirar?",
    options: [
      { value: "cpa", label: "CPA" },
      { value: "cpro-r", label: "CPRO-R" },
      { value: "cpro-i", label: "CPRO-I" },
    ],
  },
  {
    id: "tempo",
    title: "Quanto tempo você tem por semana?",
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

export default function QuestionnaireProgressoPersonalizado() {
  return (
    <Questionnaire
      className="max-w-md"
      questions={perguntas}
      renderProgress={({ current, total }) => (
        <div className="grid gap-2">
          <Progress value={current} max={total} aria-label="Progresso do questionário" />
          <p className="text-xs font-medium text-muted-foreground">
            Etapa {current} de {total}: falta {total - current === 0 ? "só esta" : total - current}
          </p>
        </div>
      )}
    />
  );
}
