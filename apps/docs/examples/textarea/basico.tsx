import { Field, FieldDescription, FieldLabel, Textarea } from "@t2-educacao/midas";

export default function TextareaBasico() {
  return (
    <Field className="max-w-sm">
      <FieldLabel htmlFor="duvida">Sua dúvida</FieldLabel>
      <Textarea id="duvida" placeholder="Escreva aqui" />
      <FieldDescription>Respondemos em até 24 horas.</FieldDescription>
    </Field>
  );
}
