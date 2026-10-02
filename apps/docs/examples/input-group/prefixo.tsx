import {
  Field,
  FieldLabel,
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@t2-educacao/midas";
import { Info } from "@t2-educacao/midas/icons";

export default function InputGroupPrefixo() {
  return (
    <Field className="max-w-xs">
      <FieldLabel htmlFor="site">Site</FieldLabel>
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText className="text-foreground">https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput id="site" placeholder="t2.com.br" />
        <InputGroupAddon align="end">
          <Info />
        </InputGroupAddon>
      </InputGroup>
    </Field>
  );
}
