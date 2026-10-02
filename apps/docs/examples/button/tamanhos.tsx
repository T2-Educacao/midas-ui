import { Button } from "@t2-educacao/midas";
import { ArrowRight } from "@t2-educacao/midas/icons";

export default function ButtonTamanhos() {
  return (
    <>
      <Button size="xs">Extra small</Button>
      <Button size="sm">Small</Button>
      <Button>Default</Button>
      <Button size="lg">
        Large <ArrowRight />
      </Button>
    </>
  );
}
