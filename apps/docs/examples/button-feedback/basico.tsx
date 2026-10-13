import { Button, ButtonFeedback } from "@t2-educacao/midas";

export default function ButtonFeedbackBasico() {
  return (
    <div className="flex flex-col gap-4">
      <ButtonFeedback status="success" text="Alterações salvas" time="· agora">
        <Button variant="accent">Salvar alterações</Button>
      </ButtonFeedback>
      <ButtonFeedback status="loading" text="Salvando alterações…">
        <Button variant="accent" loading>
          Salvar alterações
        </Button>
      </ButtonFeedback>
      <ButtonFeedback status="error" message="pill" text="Não foi possível salvar. Tente de novo.">
        <Button variant="accent">Salvar alterações</Button>
      </ButtonFeedback>
      <ButtonFeedback status="warning" text="2 campos não foram salvos" placement="left">
        <Button variant="accent">Salvar alterações</Button>
      </ButtonFeedback>
    </div>
  );
}
