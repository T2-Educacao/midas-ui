import { Button, ButtonGroup } from "@t2-educacao/midas";
import { IconRotate, IconRotateClockwise } from "@t2-educacao/midas/icons";

export default function ButtonGroupAninhado() {
  return (
    <ButtonGroup aria-label="Editor">
      <ButtonGroup aria-label="Histórico">
        <Button variant="outline" size="icon" aria-label="Desfazer">
          <IconRotate />
        </Button>
        <Button variant="outline" size="icon" aria-label="Refazer">
          <IconRotateClockwise />
        </Button>
      </ButtonGroup>
      <ButtonGroup aria-label="Arquivo">
        <Button variant="outline">Salvar</Button>
        <Button variant="outline">Exportar</Button>
      </ButtonGroup>
    </ButtonGroup>
  );
}
