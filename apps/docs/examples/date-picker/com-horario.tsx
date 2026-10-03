import { DatePicker, Field, FieldLabel, Input } from "@t2-educacao/midas";

export default function DatePickerComHorario() {
  return (
    <div className="flex gap-4">
      <Field className="w-52">
        <FieldLabel htmlFor="data-aula">Data</FieldLabel>
        <DatePicker id="data-aula" />
      </Field>
      <Field className="w-28">
        <FieldLabel htmlFor="hora-aula">Horário</FieldLabel>
        <Input
          id="hora-aula"
          type="time"
          step="60"
          defaultValue="10:30"
          className="appearance-none [&::-webkit-calendar-picker-indicator]:hidden"
        />
      </Field>
    </div>
  );
}
