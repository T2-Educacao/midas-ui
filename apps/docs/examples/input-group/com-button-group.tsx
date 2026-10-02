import { Button, ButtonGroup, Field, FieldLabel, Input } from "@t2-educacao/midas";

export default function InputGroupComButtonGroup() {
  return (
    <Field className="max-w-xs">
      <FieldLabel htmlFor="busca">Busca</FieldLabel>
      <ButtonGroup className="w-full">
        <Input id="busca" placeholder="Digite para buscar..." />
        <Button variant="outline">Buscar</Button>
      </ButtonGroup>
    </Field>
  );
}
