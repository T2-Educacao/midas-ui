import { Button, ButtonGroup } from "@t2-educacao/midas";

export default function ButtonGroupBasico() {
  return (
    <ButtonGroup aria-label="Ações da mensagem">
      <Button variant="outline">Arquivar</Button>
      <Button variant="outline">Denunciar</Button>
      <Button variant="outline">Adiar</Button>
    </ButtonGroup>
  );
}
