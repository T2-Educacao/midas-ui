import { Button, ModalShare } from "@t2-educacao/midas";

export default function ModalCompartilhar() {
  return (
    <ModalShare
      trigger={<Button variant="outline">Compartilhar conquista</Button>}
      title="Certificado ANBIMA"
      description="Compartilhe sua conquista com a sua rede."
      caption="Certificado ANBIMA · CPA-10 desbloqueado! #T2Educacao"
      secondaryAction={{ label: "Baixar imagem" }}
      primaryAction={{ label: "Compartilhar no Instagram" }}
    />
  );
}
