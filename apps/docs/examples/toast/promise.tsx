"use client";

import { Button, toast } from "@t2-educacao/midas";

export default function ToastPromise() {
  return (
    <Button
      variant="outline"
      onClick={() =>
        toast.promise(new Promise((resolve) => setTimeout(resolve, 2000)), {
          loading: "Criando evento...",
          success: "Evento criado",
          error: "Não foi possível criar o evento",
        })
      }
    >
      Promise
    </Button>
  );
}
