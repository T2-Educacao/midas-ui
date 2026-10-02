import { Field, FieldDescription, FieldLabel, Input } from "@t2-educacao/midas";

export default function InputDesabilitado() {
  return (
    <Field disabled className="max-w-xs">
      <FieldLabel htmlFor="email-desabilitado">E-mail</FieldLabel>
      <Input id="email-desabilitado" placeholder="E-mail" disabled />
      <FieldDescription>Este campo está desabilitado.</FieldDescription>
    </Field>
  );
}
