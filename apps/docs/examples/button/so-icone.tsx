import { Button } from "@t2-educacao/midas";
import { ArrowUp, Gear, MagnifyingGlass, Trash } from "@t2-educacao/midas/icons";

export default function ButtonSoIcone() {
  return (
    <>
      <Button size="icon-xs" variant="outline" aria-label="Enviar">
        <ArrowUp />
      </Button>
      <Button size="icon-sm" variant="outline" aria-label="Buscar">
        <MagnifyingGlass />
      </Button>
      <Button size="icon" variant="secondary" aria-label="Configurações">
        <Gear />
      </Button>
      <Button size="icon-lg" variant="destructive" aria-label="Excluir">
        <Trash />
      </Button>
    </>
  );
}
