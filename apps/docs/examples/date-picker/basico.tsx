import { DatePicker, Field, FieldLabel } from "@t2-educacao/midas";

export default function DatePickerBasico() {
  return (
    <Field className="w-56">
      <FieldLabel htmlFor="data">Data</FieldLabel>
      <DatePicker id="data" icon={false} placeholder="Escolha uma data" />
    </Field>
  );
}
