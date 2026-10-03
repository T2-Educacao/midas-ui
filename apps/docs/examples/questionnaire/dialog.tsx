"use client";

import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  Questionnaire,
  type QuestionnaireQuestion,
  toast,
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

export default function QuestionnaireDialog() {
  const [aberto, setAberto] = useState(false);

  return (
    <Dialog open={aberto} onOpenChange={setAberto}>
      <DialogTrigger asChild>
        <Button>Montar meu plano</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle className="sr-only">Montar plano de estudos</DialogTitle>
        <Questionnaire
          questions={perguntas}
          onComplete={() => {
            setAberto(false);
            toast.success("Plano de estudos criado");
          }}
        />
      </DialogContent>
    </Dialog>
  );
}
