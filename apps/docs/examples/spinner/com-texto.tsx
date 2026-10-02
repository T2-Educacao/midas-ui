import { Spinner } from "@t2-educacao/midas";

export default function SpinnerComTexto() {
  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground">
      <Spinner label="" aria-hidden />
      Gerando relatório
    </div>
  );
}
