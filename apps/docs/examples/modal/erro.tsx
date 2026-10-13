import { Button, ModalError } from "@t2-educacao/midas";

export default function ModalErro() {
  return (
    <ModalError
      type="payment"
      trigger={<Button variant="outline">Simular erro</Button>}
      title="Pagamento recusado"
      description="Não conseguimos concluir o pagamento. Verifique os dados e tente de novo."
      errorDetails="Falha ao processar (402) ref 7F3A-21"
      secondaryAction={{ label: "Voltar" }}
      primaryAction={{ label: "Tentar novamente" }}
    />
  );
}
