import { Field, FieldDescription, FieldLabel, Input } from "@t2-educacao/midas";

export default function InputArquivo() {
  return (
    <Field className="max-w-xs">
      <FieldLabel htmlFor="foto">Foto</FieldLabel>
      <Input id="foto" type="file" />
      <FieldDescription>Escolha uma foto para o perfil.</FieldDescription>
    </Field>
  );
}
