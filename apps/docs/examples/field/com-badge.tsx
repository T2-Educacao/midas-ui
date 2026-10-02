import { Badge, Field, FieldLabel, Input } from "@t2-educacao/midas";

export default function FieldComBadge() {
  return (
    <Field className="max-w-xs">
      <FieldLabel htmlFor="webhook">
        URL do webhook <Badge>Beta</Badge>
      </FieldLabel>
      <Input id="webhook" placeholder="https://api.exemplo.com/webhook" />
    </Field>
  );
}
