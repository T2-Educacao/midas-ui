import {
  Button,
  ButtonGroup,
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@t2-educacao/midas";
import { Microphone, Plus } from "@t2-educacao/midas/icons";

export default function ButtonGroupComInputGroup() {
  return (
    <ButtonGroup className="w-full max-w-sm">
      <Button variant="outline" size="icon" aria-label="Anexar">
        <Plus />
      </Button>
      <InputGroup>
        <InputGroupInput placeholder="Pergunte à Tati..." aria-label="Mensagem" />
        <InputGroupAddon align="end">
          <Microphone />
        </InputGroupAddon>
      </InputGroup>
    </ButtonGroup>
  );
}
