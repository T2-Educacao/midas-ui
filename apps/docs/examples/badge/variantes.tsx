import { Badge } from "@t2-educacao/midas";
import { CheckCircle } from "@t2-educacao/midas/icons";

export default function BadgeVariantes() {
  return (
    <>
      <Badge>Beta</Badge>
      <Badge variant="default">Novo</Badge>
      <Badge variant="outline">CPA</Badge>
      <Badge variant="destructive">Expirado</Badge>
      <Badge variant="success">
        <CheckCircle /> Aprovado
      </Badge>
    </>
  );
}
