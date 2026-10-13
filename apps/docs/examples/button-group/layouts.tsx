import { Button, ButtonGroup, ButtonGroupSeparator } from "@t2-educacao/midas";

export default function ButtonGroupLayouts() {
  return (
    <div className="flex max-w-sm flex-col gap-6">
      <ButtonGroup layout="attached" aria-label="Período">
        <Button variant="ghost">Dia</Button>
        <ButtonGroupSeparator />
        <Button variant="secondary">Semana</Button>
        <ButtonGroupSeparator />
        <Button variant="ghost">Mês</Button>
      </ButtonGroup>
      <ButtonGroup layout="spaced" aria-label="Ações do rascunho">
        <Button variant="secondary">Cancelar</Button>
        <Button variant="ghost">Salvar rascunho</Button>
        <Button variant="accent">Publicar</Button>
      </ButtonGroup>
      <ButtonGroup layout="stacked" aria-label="Continuar">
        <Button variant="accent">Continuar</Button>
        <Button variant="secondary">Salvar para depois</Button>
        <Button variant="ghost">Agora não</Button>
      </ButtonGroup>
    </div>
  );
}
