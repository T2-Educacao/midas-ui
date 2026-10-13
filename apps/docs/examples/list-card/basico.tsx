import {
  Badge,
  Button,
  ListCard,
  ListCardActions,
  ListCardDescription,
  ListCardHeader,
  ListCardInfo,
  ListCardTitle,
} from "@t2-educacao/midas";
import { IconClipboardCheck } from "@t2-educacao/midas/icons";

export default function ListCardBasico() {
  return (
    <div className="flex max-w-md flex-col gap-3">
      <ListCard>
        <ListCardHeader>
          <IconClipboardCheck aria-hidden="true" />
          <span className="text-label-md">Simulado</span>
          <Badge variant="warning" className="ms-auto">
            Alta
          </Badge>
        </ListCardHeader>
        <ListCardTitle>Simulado de renda fixa</ListCardTitle>
        <ListCardDescription>
          Faltam 12 questões para concluir. Revise renda fixa antes de enviar.
        </ListCardDescription>
        <div className="grid grid-cols-2 gap-4">
          <ListCardInfo label="Prazo">Sexta</ListCardInfo>
          <ListCardInfo label="Questões">12</ListCardInfo>
        </div>
        <ListCardActions>
          <Button variant="outline" size="sm">
            Detalhes
          </Button>
          <Button size="sm">Concluir</Button>
        </ListCardActions>
      </ListCard>
      <ListCard tone="neutral">
        <ListCardTitle>Planilha de metas</ListCardTitle>
        <ListCardDescription>
          Envie sua planilha de metas para correção do mentor até sexta.
        </ListCardDescription>
      </ListCard>
    </div>
  );
}
