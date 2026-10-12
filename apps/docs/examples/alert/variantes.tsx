import { Alert, AlertDescription, AlertTitle } from "@t2-educacao/midas";
import {
  IconAlertCircle,
  IconAlertTriangle,
  IconCircleCheck,
  IconInfoCircle,
} from "@t2-educacao/midas/icons";

export default function AlertVariantes() {
  return (
    <div className="grid w-full max-w-xl gap-3">
      <Alert>
        <IconInfoCircle />
        <AlertTitle>Aviso</AlertTitle>
        <AlertDescription>Mensagem neutra para o aluno.</AlertDescription>
      </Alert>
      <Alert variant="info">
        <IconInfoCircle />
        <AlertTitle>Matrículas abertas</AlertTitle>
        <AlertDescription>As turmas de março já estão disponíveis.</AlertDescription>
      </Alert>
      <Alert variant="success">
        <IconCircleCheck />
        <AlertTitle>Matrícula confirmada</AlertTitle>
        <AlertDescription>Você já pode acessar o conteúdo.</AlertDescription>
      </Alert>
      <Alert variant="warning">
        <IconAlertTriangle />
        <AlertTitle>Acesso expira em breve</AlertTitle>
        <AlertDescription>Renove em até 7 dias para não perder o progresso.</AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <IconAlertCircle />
        <AlertTitle>Pagamento recusado</AlertTitle>
        <AlertDescription>Confira os dados do cartão e tente novamente.</AlertDescription>
      </Alert>
    </div>
  );
}
