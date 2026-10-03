"use client";

import { Questionnaire, type QuestionnaireQuestion } from "@t2-educacao/midas";

const perguntas: QuestionnaireQuestion[] = [
  {
    id: "nivel",
    title: "Qual seu nível de conhecimento?",
    description: "Use as teclas A, B ou C.",
    skippable: true,
    options: [
      { value: "iniciante", label: "Estou começando" },
      { value: "intermediario", label: "Já estudei um pouco" },
      { value: "avancado", label: "Só quero revisar" },
    ],
  },
  {
    id: "objetivo",
    title: "Qual seu objetivo?",
    skippable: true,
    options: [
      { value: "aprovacao", label: "Ser aprovado na prova" },
      { value: "carreira", label: "Crescer na carreira" },
    ],
  },
];

export default function QuestionnaireAtalhosEPular() {
  return <Questionnaire className="max-w-md" questions={perguntas} shortcuts="letters" />;
}
