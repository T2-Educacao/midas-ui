import { Button, TableToolbar } from "@t2-educacao/midas";
import { IconDownload } from "@t2-educacao/midas/icons";

export default function TableToolbarBasico() {
  return (
    <div className="flex max-w-2xl flex-col gap-4 overflow-hidden rounded-container border border-border-subtle">
      <TableToolbar title="Alunos" count={128}>
        <Button variant="outline" size="sm">
          <IconDownload />
          Exportar
        </Button>
        <Button size="sm">Novo aluno</Button>
      </TableToolbar>
      <TableToolbar type="selection" selection="3 selecionados">
        <Button variant="ghost" size="sm">
          Exportar
        </Button>
        <Button variant="ghost" size="sm" className="text-status-danger-content">
          Excluir
        </Button>
      </TableToolbar>
    </div>
  );
}
