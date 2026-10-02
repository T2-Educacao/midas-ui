import { Field, FieldError, FieldLabel, Input } from "@t2-educacao/midas";

export default function InputInvalido() {
  return (
    <Field invalid className="max-w-xs">
      <FieldLabel htmlFor="cupom">Cupom</FieldLabel>
      <Input id="cupom" defaultValue="T2DESCONTO" aria-invalid aria-describedby="cupom-erro" />
      <FieldError id="cupom-erro">Este cupom expirou.</FieldError>
    </Field>
  );
}
