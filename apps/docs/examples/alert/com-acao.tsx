import { Alert, AlertAction, AlertDescription, AlertTitle, Button } from "@t2-educacao/midas";
import { CheckCircle } from "@t2-educacao/midas/icons";

export default function AlertComAcao() {
  return (
    <div className="w-full max-w-xl">
      <Alert variant="success">
        <CheckCircle />
        <AlertTitle>Curso arquivado</AlertTitle>
        <AlertDescription>Ele não aparece mais na sua lista.</AlertDescription>
        <AlertAction>
          <Button size="sm" variant="outline">
            Desfazer
          </Button>
        </AlertAction>
      </Alert>
    </div>
  );
}
