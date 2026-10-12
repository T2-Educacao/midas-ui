import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "@t2-educacao/midas";
import { IconCopy } from "@t2-educacao/midas/icons";

export default function InputGroupComBotao() {
  return (
    <InputGroup className="max-w-xs">
      <InputGroupInput defaultValue="t2.com.br/convite/ana" readOnly aria-label="Link de convite" />
      <InputGroupAddon align="end">
        <InputGroupButton size="icon-xs" aria-label="Copiar link">
          <IconCopy />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  );
}
