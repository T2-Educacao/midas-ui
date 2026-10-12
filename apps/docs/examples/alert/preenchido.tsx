import { Alert, AlertDescription, AlertTitle } from "@t2-educacao/midas";
import { IconAlertTriangle, IconInfoCircle } from "@t2-educacao/midas/icons";

export default function AlertPreenchido() {
  return (
    <div className="grid w-full max-w-md gap-3">
      <Alert variant="info" filled>
        <IconInfoCircle />
        <AlertTitle>Novidade</AlertTitle>
        <AlertDescription>Agora você pode baixar o certificado em PDF.</AlertDescription>
      </Alert>
      <Alert variant="warning" filled>
        <IconAlertTriangle />
        <AlertTitle>Prazo curto</AlertTitle>
        <AlertDescription>A matrícula fecha amanhã.</AlertDescription>
      </Alert>
    </div>
  );
}
