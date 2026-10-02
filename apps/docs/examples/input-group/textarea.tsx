import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupTextarea,
} from "@t2-educacao/midas";
import { ArrowUp } from "@t2-educacao/midas/icons";

export default function InputGroupTextareaExemplo() {
  return (
    <InputGroup className="max-w-sm flex-col">
      <InputGroupTextarea placeholder="Pergunte algo sobre finanças..." aria-label="Pergunta" />
      <InputGroupAddon align="end" className="w-full justify-end pb-2">
        <InputGroupButton variant="default" size="icon-xs" rounded aria-label="Enviar">
          <ArrowUp />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  );
}
