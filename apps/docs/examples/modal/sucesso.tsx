import { Button, ModalSuccess } from "@t2-educacao/midas";

export default function ModalSucesso() {
  return (
    <ModalSuccess
      type="receipt"
      trigger={<Button variant="outline">Ver recibo</Button>}
      title="Pagamento confirmado"
      description="Obrigado! Seu plano já está ativo."
      details={[
        { label: "Nº do pedido", value: "T2-0121478" },
        { label: "Plano", value: "Business anual" },
        { label: "Valor", value: "R$ 1.200,00" },
      ]}
      primaryAction={{ label: "Concluir" }}
    />
  );
}
