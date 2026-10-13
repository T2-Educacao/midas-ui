import { Field, FieldDescription, FieldLabel, Input } from "@t2-educacao/midas";

export default function InputTamanhos() {
  return (
    <div className="grid w-full max-w-sm gap-5">
      <Field>
        <FieldLabel htmlFor="in-sm">SM (40)</FieldLabel>
        <Input id="in-sm" size="sm" placeholder="Digite aqui" />
      </Field>
      <Field>
        <FieldLabel htmlFor="in-md">MD (48, padrão)</FieldLabel>
        <Input id="in-md" placeholder="Digite aqui" />
      </Field>
      <Field>
        <FieldLabel htmlFor="in-lg">LG (56)</FieldLabel>
        <Input id="in-lg" size="lg" placeholder="Digite aqui" />
        <FieldDescription>Destaque, busca principal e hero.</FieldDescription>
      </Field>
    </div>
  );
}
