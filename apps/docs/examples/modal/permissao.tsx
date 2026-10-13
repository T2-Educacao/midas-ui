import { Button, PermissionRequest } from "@t2-educacao/midas";

export default function ModalPermissao() {
  return (
    <PermissionRequest
      type="notifications"
      trigger={<Button variant="outline">Ativar notificações</Button>}
      title="Ativar notificações"
      description="Avisamos quando seus investimentos renderem e quando houver aula nova."
      items={["Rendimentos e metas", "Novas aulas e simulados"]}
      footnote="Você pode mudar isso depois em Ajustes."
      primaryAction={{ label: "Permitir" }}
      secondaryAction={{ label: "Agora não" }}
    />
  );
}
