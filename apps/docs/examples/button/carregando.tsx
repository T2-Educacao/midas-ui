import { Button } from "@t2-educacao/midas";

export default function ButtonCarregando() {
  return (
    <>
      <Button loading>Gerando</Button>
      <Button loading variant="outline">
        Baixando
      </Button>
    </>
  );
}
