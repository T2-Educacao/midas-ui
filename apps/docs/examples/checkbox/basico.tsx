import { Checkbox, Field, FieldDescription, FieldLabel, Label } from "@t2-educacao/midas";

export default function CheckboxBasico() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Checkbox id="termos" />
        <Label htmlFor="termos">Aceito os termos de uso</Label>
      </div>
      <Field orientation="horizontal" className="items-start">
        <Checkbox id="novidades" defaultChecked />
        <div className="grid gap-1">
          <FieldLabel htmlFor="novidades">Receber novidades</FieldLabel>
          <FieldDescription>Avisamos sobre novos cursos e simulados.</FieldDescription>
        </div>
      </Field>
      <div className="flex items-center gap-2">
        <Checkbox id="desabilitado" disabled />
        <Label htmlFor="desabilitado">Desabilitado</Label>
      </div>
    </div>
  );
}
