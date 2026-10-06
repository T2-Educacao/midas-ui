import {
  Button,
  EmptyState,
  EmptyStateActions,
  EmptyStateDescription,
  EmptyStateIcon,
  EmptyStateTitle,
} from "@t2-educacao/midas";
import { Plus, Tray } from "@t2-educacao/midas/icons";

export default function EmptyStateBasico() {
  return (
    <EmptyState>
      <EmptyStateIcon>
        <Tray />
      </EmptyStateIcon>
      <EmptyStateTitle>Nenhum curso ainda</EmptyStateTitle>
      <EmptyStateDescription>
        Quando você se matricular, seus cursos aparecem aqui.
      </EmptyStateDescription>
      <EmptyStateActions>
        <Button>
          <Plus /> Explorar cursos
        </Button>
      </EmptyStateActions>
    </EmptyState>
  );
}
