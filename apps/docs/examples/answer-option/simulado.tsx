"use client";

import { AnswerOption, AnswerOptionGroup, Button } from "@t2-educacao/midas";
import * as React from "react";

const alternativas = [
  { value: "a", letter: "A", texto: "A poupança, por render mais que a inflação." },
  { value: "b", letter: "B", texto: "O Tesouro Selic, pela liquidez diária e baixo risco." },
  { value: "c", letter: "C", texto: "Ações de empresas pequenas, pelo potencial de valorização." },
];

export default function AnswerOptionSimulado() {
  const [resposta, setResposta] = React.useState("");
  const [confirmada, setConfirmada] = React.useState(false);
  const correta = "b";

  return (
    <div className="grid w-full max-w-xl gap-4">
      <p className="text-label-lg text-content-primary">
        Qual investimento é mais indicado para a reserva de emergência?
      </p>
      <AnswerOptionGroup
        aria-label="Alternativas"
        value={resposta}
        onValueChange={setResposta}
        disabled={confirmada}
      >
        {alternativas.map((alt) => {
          const result = !confirmada
            ? undefined
            : alt.value === correta
              ? resposta === correta
                ? "correct"
                : "missed"
              : alt.value === resposta
                ? "incorrect"
                : undefined;
          return (
            <AnswerOption key={alt.value} value={alt.value} letter={alt.letter} result={result}>
              {alt.texto}
            </AnswerOption>
          );
        })}
      </AnswerOptionGroup>
      <p aria-live="polite" className="sr-only">
        {confirmada
          ? resposta === correta
            ? "Resposta correta."
            : "Resposta incorreta. A correta é a B."
          : ""}
      </p>
      <Button disabled={!resposta || confirmada} onClick={() => setConfirmada(true)}>
        Confirmar resposta
      </Button>
    </div>
  );
}
