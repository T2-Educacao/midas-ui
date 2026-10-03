"use client";

import { NativeSelect, Questionnaire, type QuestionnaireQuestion } from "@t2-educacao/midas";
import { useState } from "react";

const perguntas: QuestionnaireQuestion[] = [
  {
    id: "proximo-passo",
    title: "O que você quer fazer agora?",
    description: "Use o atalho mostrado ou navegue com o teclado.",
    options: [
      { value: "aula", label: "Assistir a próxima aula" },
      { value: "simulado", label: "Fazer um simulado" },
      { value: "revisao", label: "Revisar os erros" },
    ],
  },
];

export default function QuestionnaireAtalhos() {
  const [modo, setModo] = useState<"letters" | "numbers">("letters");

  return (
    <div className="flex w-full max-w-md flex-col gap-8">
      <NativeSelect
        aria-label="Tipo de atalho"
        value={modo}
        onChange={(event) => setModo(event.target.value as "letters" | "numbers")}
      >
        <option value="letters">Letras</option>
        <option value="numbers">Números</option>
      </NativeSelect>
      <Questionnaire questions={perguntas} shortcuts={modo} labels={{ submit: "Confirmar" }} />
    </div>
  );
}
