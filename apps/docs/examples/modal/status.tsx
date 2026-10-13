import { Button, ModalStatus } from "@t2-educacao/midas";

export default function ModalStatusExemplo() {
  return (
    <ModalStatus
      trigger={<Button variant="outline">Enviar arquivo</Button>}
      status="progress"
      progress={68}
      title="Só um instante…"
      description="Seu arquivo está sendo enviado. Já já termina."
      secondaryAction={{ label: "Cancelar" }}
    />
  );
}
