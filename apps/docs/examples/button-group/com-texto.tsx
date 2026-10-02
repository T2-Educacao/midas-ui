import { Button, ButtonGroup, ButtonGroupText } from "@t2-educacao/midas";

export default function ButtonGroupComTexto() {
  return (
    <ButtonGroup aria-label="Moeda">
      <ButtonGroupText>R$</ButtonGroupText>
      <Button variant="outline">Alterar moeda</Button>
    </ButtonGroup>
  );
}
