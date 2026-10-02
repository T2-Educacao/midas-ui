"use client";

import { Button, toast } from "@t2-educacao/midas";

export default function ToastTipos() {
  return (
    <>
      <Button variant="outline" onClick={() => toast("Evento criado")}>
        Default
      </Button>
      <Button variant="outline" onClick={() => toast.success("Matrícula confirmada")}>
        Success
      </Button>
      <Button variant="outline" onClick={() => toast.info("Chegue 10 minutos antes da prova.")}>
        Info
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.warning("A prova não pode começar antes das 8h.")}
      >
        Warning
      </Button>
      <Button variant="outline" onClick={() => toast.error("Não foi possível criar o evento.")}>
        Error
      </Button>
    </>
  );
}
