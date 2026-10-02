"use client";

import { Button, toast } from "@t2-educacao/midas";

export default function ToastComDescricaoEAcao() {
  return (
    <Button
      variant="outline"
      onClick={() =>
        toast("Aula removida", {
          description: "Módulo 3, aula 2",
          action: { label: "Desfazer", onClick: () => toast("Aula restaurada") },
        })
      }
    >
      Remover aula
    </Button>
  );
}
