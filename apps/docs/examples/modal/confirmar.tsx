import { Button, Modal } from "@t2-educacao/midas";
import { IconTrash } from "@t2-educacao/midas/icons";

export default function ModalConfirmar() {
  return (
    <Modal
      type="confirm"
      trigger={<Button variant="outline">Excluir meta</Button>}
      title="Excluir meta de investimento?"
      description="A meta e o histórico serão removidos. Essa ação não pode ser desfeita."
      secondaryAction={{ label: "Cancelar" }}
      primaryAction={{ label: "Excluir", icon: <IconTrash /> }}
    />
  );
}
