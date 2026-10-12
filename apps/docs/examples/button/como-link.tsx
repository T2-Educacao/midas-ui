import { Button } from "@t2-educacao/midas";
import { IconArrowRight } from "@t2-educacao/midas/icons";
import Link from "next/link";

export default function ButtonComoLink() {
  return (
    <Button asChild>
      <Link href="/docs">
        Ver documentação <IconArrowRight />
      </Link>
    </Button>
  );
}
