import { Field, FieldDescription, FieldLabel, Label, Switch } from "@t2-educacao/midas";

export default function SwitchBasico() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Switch id="notificacoes" />
        <Label htmlFor="notificacoes">Receber notificações</Label>
      </div>
      <Field orientation="horizontal" className="items-start">
        <Switch id="avisos" defaultChecked />
        <div className="grid gap-1">
          <FieldLabel htmlFor="avisos">Avisos por e-mail</FieldLabel>
          <FieldDescription>Receba lembretes de aulas e simulados.</FieldDescription>
        </div>
      </Field>
      <div className="flex items-center gap-2">
        <Switch id="desabilitado" disabled />
        <Label htmlFor="desabilitado">Desabilitado</Label>
      </div>
      <div className="flex items-center gap-2">
        <Switch id="invalido" aria-invalid />
        <Label htmlFor="invalido">Inválido</Label>
      </div>
    </div>
  );
}
