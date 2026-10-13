import {
  Button,
  EmptyState,
  EmptyStateActions,
  EmptyStateDescription,
  EmptyStateIcon,
  EmptyStateTitle,
} from "@t2-educacao/midas";
import { IconClipboardList } from "@t2-educacao/midas/icons";

export default function EmptyStateContainer() {
  return (
    <EmptyState container="card">
      <EmptyStateIcon>
        <IconClipboardList />
      </EmptyStateIcon>
      <div className="flex flex-col gap-2">
        <EmptyStateTitle>Nenhum simulado ainda</EmptyStateTitle>
        <EmptyStateDescription>
          Quando você fizer um simulado, suas notas e o resultado por módulo aparecem aqui.
        </EmptyStateDescription>
      </div>
      <EmptyStateActions>
        <Button variant="outline">Ver trilha</Button>
        <Button>Fazer primeiro simulado</Button>
      </EmptyStateActions>
    </EmptyState>
  );
}
