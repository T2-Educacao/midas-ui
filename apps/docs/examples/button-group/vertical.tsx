import { Button, ButtonGroup } from "@t2-educacao/midas";
import { IconMinus, IconPlus } from "@t2-educacao/midas/icons";

export default function ButtonGroupVertical() {
  return (
    <ButtonGroup orientation="vertical" aria-label="Zoom">
      <Button variant="outline" size="icon" aria-label="Aumentar">
        <IconPlus />
      </Button>
      <Button variant="outline" size="icon" aria-label="Diminuir">
        <IconMinus />
      </Button>
    </ButtonGroup>
  );
}
