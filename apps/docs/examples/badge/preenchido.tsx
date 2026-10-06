import { Badge } from "@t2-educacao/midas";

export default function BadgePreenchido() {
  return (
    <>
      <Badge variant="destructive" filled>
        Expirado
      </Badge>
      <Badge variant="success" filled>
        Aprovado
      </Badge>
      <Badge variant="warning" filled>
        Pendente
      </Badge>
      <Badge variant="info" filled>
        Novo
      </Badge>
    </>
  );
}
