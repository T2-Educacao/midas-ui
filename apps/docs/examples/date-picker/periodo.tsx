import { DatePicker, Field, FieldLabel } from "@t2-educacao/midas";

export default function DatePickerPeriodo() {
  return (
    <Field className="w-72">
      <FieldLabel htmlFor="periodo">Período de estudo</FieldLabel>
      <DatePicker
        id="periodo"
        mode="range"
        defaultValue={{ from: new Date(2026, 0, 20), to: new Date(2026, 1, 9) }}
      />
    </Field>
  );
}
