import { Field, FieldDescription, FieldLabel, Input } from "@t2-educacao/midas";

export default function FieldObrigatorio() {
  return (
    <Field className="max-w-xs">
      <FieldLabel htmlFor="telefone" required>
        Telefone
      </FieldLabel>
      <Input id="telefone" placeholder="(11) 99999-9999" required />
      <FieldDescription>Precisamos dele para o suporte.</FieldDescription>
    </Field>
  );
}
