import { Button } from "@t2-educacao/midas";
import { IconArrowUp, IconSearch, IconSettings, IconTrash } from "@t2-educacao/midas/icons";

export default function ButtonSoIcone() {
  return (
    <>
      <Button size="icon-xs" variant="outline" aria-label="Enviar">
        <IconArrowUp />
      </Button>
      <Button size="icon-sm" variant="outline" aria-label="Buscar">
        <IconSearch />
      </Button>
      <Button size="icon" variant="secondary" aria-label="Configurações">
        <IconSettings />
      </Button>
      <Button size="icon-lg" variant="destructive" aria-label="Excluir">
        <IconTrash />
      </Button>
    </>
  );
}
