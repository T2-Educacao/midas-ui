import { Button, ButtonGroup } from "@t2-educacao/midas";
import { Minus, Plus } from "@t2-educacao/midas/icons";

export default function ButtonGroupVertical() {
  return (
    <ButtonGroup orientation="vertical" aria-label="Zoom">
      <Button variant="outline" size="icon" aria-label="Aumentar">
        <Plus />
      </Button>
      <Button variant="outline" size="icon" aria-label="Diminuir">
        <Minus />
      </Button>
    </ButtonGroup>
  );
}
