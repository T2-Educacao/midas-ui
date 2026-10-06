import { Button } from "@t2-educacao/midas";

export default function ButtonPreenchido() {
  return (
    <>
      <Button variant="destructive" filled>
        Excluir
      </Button>
      <Button variant="success" filled>
        Aprovar
      </Button>
      <Button variant="warning" filled>
        Revisar
      </Button>
      <Button variant="info" filled>
        Saiba mais
      </Button>
    </>
  );
}
