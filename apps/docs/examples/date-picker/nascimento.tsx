import { DatePicker, Field, FieldLabel } from "@t2-educacao/midas";
import { CaretDown } from "@t2-educacao/midas/icons";

export default function DatePickerNascimento() {
  return (
    <Field className="w-56">
      <FieldLabel htmlFor="nascimento">Data de nascimento</FieldLabel>
      <DatePicker
        id="nascimento"
        captionLayout="dropdown"
        startMonth={new Date(1940, 0)}
        endMonth={new Date()}
        disabledDays={{ after: new Date() }}
        icon={<CaretDown className="order-last ml-auto text-muted-foreground" />}
      />
    </Field>
  );
}
