import { Link } from "@t2-educacao/midas";

export default function LinkVariantes() {
  return (
    <div className="flex flex-col items-start gap-4">
      <p className="text-body-md text-content-primary">
        Antes da prova, leia o{" "}
        <Link href="/regulamento" external>
          regulamento da ANBIMA
        </Link>{" "}
        e confira o edital.
      </p>
      <Link href="/cursos" variant="standalone">
        Ver todos os cursos
      </Link>
      <Link href="/termos" variant="subtle" tone="neutral">
        Termos de uso
      </Link>
      <div className="flex gap-4">
        <Link href="/a" size="sm">
          SM
        </Link>
        <Link href="/a" size="md">
          MD
        </Link>
        <Link href="/a" size="lg">
          LG
        </Link>
        <Link href="/a" disabled>
          Desabilitado
        </Link>
      </div>
      <div className="rounded-container bg-action-primary-bg p-4">
        <Link href="/sobre" variant="standalone" tone="media">
          Sobre mídia
        </Link>
      </div>
    </div>
  );
}
