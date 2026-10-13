import { Button, Modal } from "@t2-educacao/midas";

export default function ModalPromo() {
  return (
    <Modal
      type="promo"
      tone="neutral"
      trigger={<Button variant="outline">Ver oferta</Button>}
      image={<span className="text-heading-lg text-content-secondary">50% off</span>}
      title="50% off no plano anual"
      description="Acesso a todas as trilhas, simulados e mentorias. Oferta válida até domingo."
      primaryAction={{ label: "Quero aproveitar" }}
      secondaryAction={{ label: "Agora não" }}
    />
  );
}
