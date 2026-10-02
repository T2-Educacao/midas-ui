import { Button, Field, Input } from "@t2-educacao/midas";

export default function FieldHorizontal() {
  return (
    <Field orientation="horizontal" className="max-w-sm">
      <Input placeholder="Buscar" aria-label="Buscar" />
      <Button>Buscar</Button>
    </Field>
  );
}
