import { Field, FieldLabel, Input } from "@t2-educacao/midas";

export default function FieldGrade() {
  return (
    <div className="grid w-full max-w-sm grid-cols-2 gap-4">
      <Field>
        <FieldLabel htmlFor="nome">Nome</FieldLabel>
        <Input id="nome" placeholder="Ana" />
      </Field>
      <Field>
        <FieldLabel htmlFor="sobrenome">Sobrenome</FieldLabel>
        <Input id="sobrenome" placeholder="Souza" />
      </Field>
    </div>
  );
}
