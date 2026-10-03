"use client";

import { Questionnaire, type QuestionnaireQuestion, toast } from "@t2-educacao/midas";

const perguntas: QuestionnaireQuestion[] = [
  {
    id: "temas",
    title: "Quais temas você quer revisar?",
    description: "Marque todos que se aplicam ou escreva outro.",
    type: "multiple",
    options: [
      { value: "etica", label: "Ética e regulamentação" },
      { value: "investimentos", label: "Fundos de investimento" },
      { value: "previdencia", label: "Previdência" },
    ],
    other: { placeholder: "Outro tema…" },
  },
];

export default function QuestionnaireMultiplaELivre() {
  return (
    <Questionnaire
      className="max-w-md"
      questions={perguntas}
      labels={{ submit: "Salvar temas" }}
      onComplete={(respostas) =>
        toast("Temas salvos", { description: JSON.stringify(respostas.temas) })
      }
    />
  );
}
