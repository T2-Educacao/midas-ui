import { Field, FieldDescription, FieldLabel, Input } from "@t2-educacao/midas";

export default function FieldBasico() {
  return (
    <Field className="max-w-xs">
      <FieldLabel htmlFor="usuario">Usuário</FieldLabel>
      <Input id="usuario" placeholder="seu.usuario" aria-describedby="usuario-ajuda" />
      <FieldDescription id="usuario-ajuda">Escolha um nome de usuário único.</FieldDescription>
    </Field>
  );
}
