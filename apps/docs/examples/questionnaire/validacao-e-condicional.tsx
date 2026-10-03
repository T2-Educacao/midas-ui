"use client";

import { Questionnaire, type QuestionnaireQuestion } from "@t2-educacao/midas";

const perguntas: QuestionnaireQuestion[] = [
  {
    id: "certificacao",
    title: "Qual certificação?",
    options: [
      { value: "cpa", label: "CPA" },
      { value: "cpro-r", label: "CPRO-R" },
    ],
  },
  {
    id: "modulo",
    title: "Qual módulo da CPRO-R você quer começar?",
    description: "Só aparece para quem escolheu CPRO-R.",
    when: (respostas) => respostas.certificacao?.values[0] === "cpro-r",
    options: [
      { value: "mercado", label: "Mercado financeiro" },
      { value: "produtos", label: "Produtos de investimento" },
    ],
  },
  {
    id: "dias",
    title: "Em quais dias você estuda?",
    description: "Escolha pelo menos dois.",
    type: "multiple",
    options: [
      { value: "seg", label: "Segunda" },
      { value: "qua", label: "Quarta" },
      { value: "sex", label: "Sexta" },
      { value: "sab", label: "Sábado" },
    ],
    validate: (resposta) =>
      resposta.values.length < 2 ? "Escolha pelo menos dois dias." : undefined,
  },
];

export default function QuestionnaireValidacaoECondicional() {
  return <Questionnaire className="max-w-md" questions={perguntas} progress="bar" />;
}
