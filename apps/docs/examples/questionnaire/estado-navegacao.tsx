"use client";

import {
  Badge,
  isAnswered,
  Questionnaire,
  type QuestionnaireAnswers,
  type QuestionnaireQuestion,
} from "@t2-educacao/midas";
import { useState } from "react";

const perguntas: QuestionnaireQuestion[] = [
  {
    id: "acesso",
    title: "O que a Tati pode acessar?",
    description: "Próxima fica desabilitado até você escolher pelo menos uma opção.",
    type: "multiple",
    options: [
      { value: "aulas", label: "Minhas aulas" },
      { value: "simulados", label: "Meus simulados" },
      { value: "anotacoes", label: "Minhas anotações" },
    ],
  },
  {
    id: "frequencia",
    title: "Com que frequência ela pode te lembrar?",
    options: [
      { value: "diaria", label: "Todo dia" },
      { value: "semanal", label: "Toda semana" },
    ],
  },
];

export default function QuestionnaireEstadoNavegacao() {
  const [respostas, setRespostas] = useState<QuestionnaireAnswers>({});

  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <div className="flex flex-wrap gap-2">
        {perguntas.map((pergunta, index) => (
          <Badge
            key={pergunta.id}
            variant={isAnswered(respostas[pergunta.id]) ? "success" : "outline"}
          >
            {index + 1}. {isAnswered(respostas[pergunta.id]) ? "Respondida" : "Pendente"}
          </Badge>
        ))}
      </div>
      <Questionnaire questions={perguntas} value={respostas} onValueChange={setRespostas} />
    </div>
  );
}
