import {
  Button,
  EmptyState,
  EmptyStateActions,
  EmptyStateDescription,
  EmptyStateIcon,
  EmptyStateTitle,
} from "@t2-educacao/midas";
import { IconInbox, IconPlus } from "@t2-educacao/midas/icons";

export default function EmptyStateBasico() {
  return (
    <EmptyState>
      <EmptyStateIcon>
        <IconInbox />
      </EmptyStateIcon>
      <EmptyStateTitle>Nenhum curso ainda</EmptyStateTitle>
      <EmptyStateDescription>
        Quando você se matricular, seus cursos aparecem aqui.
      </EmptyStateDescription>
      <EmptyStateActions>
        <Button>
          <IconPlus /> Explorar cursos
        </Button>
      </EmptyStateActions>
    </EmptyState>
  );
}
