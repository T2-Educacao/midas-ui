import { Button, ButtonGroup, ButtonGroupSeparator } from "@t2-educacao/midas";
import { CaretDown } from "@t2-educacao/midas/icons";

export default function ButtonGroupDividido() {
  return (
    <ButtonGroup aria-label="Publicar">
      <Button variant="secondary">Publicar</Button>
      <ButtonGroupSeparator />
      <Button variant="secondary" size="icon" aria-label="Mais opções">
        <CaretDown />
      </Button>
    </ButtonGroup>
  );
}
