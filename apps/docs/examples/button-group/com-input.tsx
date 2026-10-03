import { Button, ButtonGroup, Input } from "@t2-educacao/midas";
import { MagnifyingGlass } from "@t2-educacao/midas/icons";

export default function ButtonGroupComInput() {
  return (
    <ButtonGroup className="w-full max-w-xs">
      <Input placeholder="Buscar cursos" aria-label="Buscar cursos" />
      <Button variant="outline" size="icon" aria-label="Buscar">
        <MagnifyingGlass />
      </Button>
    </ButtonGroup>
  );
}
