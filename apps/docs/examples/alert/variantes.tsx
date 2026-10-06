import { Alert, AlertDescription, AlertTitle } from "@t2-educacao/midas";
import { CheckCircle, Info, Warning, WarningCircle } from "@t2-educacao/midas/icons";

export default function AlertVariantes() {
  return (
    <div className="grid w-full max-w-xl gap-3">
      <Alert>
        <Info />
        <AlertTitle>Aviso</AlertTitle>
        <AlertDescription>Mensagem neutra para o aluno.</AlertDescription>
      </Alert>
      <Alert variant="info">
        <Info />
        <AlertTitle>Matrículas abertas</AlertTitle>
        <AlertDescription>As turmas de março já estão disponíveis.</AlertDescription>
      </Alert>
      <Alert variant="success">
        <CheckCircle />
        <AlertTitle>Matrícula confirmada</AlertTitle>
        <AlertDescription>Você já pode acessar o conteúdo.</AlertDescription>
      </Alert>
      <Alert variant="warning">
        <Warning />
        <AlertTitle>Acesso expira em breve</AlertTitle>
        <AlertDescription>Renove em até 7 dias para não perder o progresso.</AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <WarningCircle />
        <AlertTitle>Pagamento recusado</AlertTitle>
        <AlertDescription>Confira os dados do cartão e tente novamente.</AlertDescription>
      </Alert>
    </div>
  );
}
