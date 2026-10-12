import { Button } from "@t2-educacao/midas";
import { IconPlus } from "@t2-educacao/midas/icons";

export default function ButtonArredondado() {
  return (
    <>
      <Button rounded>Inscrever</Button>
      <Button rounded variant="outline">
        Saiba mais
      </Button>
      <Button rounded size="icon" aria-label="Adicionar">
        <IconPlus />
      </Button>
    </>
  );
}
