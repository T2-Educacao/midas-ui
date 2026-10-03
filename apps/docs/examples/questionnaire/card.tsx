"use client";

import { Questionnaire, type QuestionnaireQuestion } from "@t2-educacao/midas";

const perguntas: QuestionnaireQuestion[] = [
  {
    id: "detalhe",
    title: "Quanto detalhe você quer nos resumos?",
    description: "Escolha a profundidade.",
    options: [
      { value: "conciso", label: "Resumo conciso" },
      { value: "completo", label: "Explicação completa" },
    ],
  },
  {
    id: "exemplos",
    title: "Quer exemplos práticos?",
    options: [
      { value: "sim", label: "Sim, sempre" },
      { value: "nao", label: "Não precisa" },
    ],
  },
];

export default function QuestionnaireCard() {
  return (
    <Questionnaire
      className="w-full max-w-md"
      variant="card"
      progress="fraction"
      questions={perguntas}
    />
  );
}
