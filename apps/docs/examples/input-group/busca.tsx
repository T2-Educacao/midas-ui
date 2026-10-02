import { InputGroup, InputGroupAddon, InputGroupInput, Kbd } from "@t2-educacao/midas";
import { MagnifyingGlass } from "@t2-educacao/midas/icons";

export default function InputGroupBusca() {
  return (
    <InputGroup className="max-w-xs">
      <InputGroupAddon>
        <MagnifyingGlass />
      </InputGroupAddon>
      <InputGroupInput placeholder="Buscar cursos" aria-label="Buscar cursos" />
      <InputGroupAddon align="end">
        <Kbd>⌘K</Kbd>
      </InputGroupAddon>
    </InputGroup>
  );
}
