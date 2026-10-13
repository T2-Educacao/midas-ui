import { CodeInput, FieldError, FieldSuccess } from "@t2-educacao/midas";

export default function CodeInputEstados() {
  return (
    <div className="grid gap-6">
      <div className="grid gap-2">
        <CodeInput aria-label="Código com erro" defaultValue="4853" invalid />
        <FieldError>Código inválido. Tente novamente.</FieldError>
      </div>
      <div className="grid gap-2">
        <CodeInput aria-label="Código verificado" defaultValue="4853" success />
        <FieldSuccess>Código verificado</FieldSuccess>
      </div>
      <CodeInput aria-label="Código LG" size="lg" shape="pill" tone="neutral" defaultValue="48" />
    </div>
  );
}
