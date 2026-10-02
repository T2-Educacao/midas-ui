"use client";

import {
  Button,
  Combobox,
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  Input,
} from "@t2-educacao/midas";

export default function FieldFormulario() {
  return (
    <form className="w-full max-w-sm" onSubmit={(event) => event.preventDefault()}>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="form-nome">Nome</FieldLabel>
          <Input id="form-nome" placeholder="Ana Souza" />
        </Field>
        <Field>
          <FieldLabel htmlFor="form-email">E-mail</FieldLabel>
          <Input id="form-email" type="email" placeholder="ana@email.com" />
          <FieldDescription>Nunca compartilhamos seu e-mail.</FieldDescription>
        </Field>
        <div className="grid grid-cols-2 gap-4">
          <Field>
            <FieldLabel htmlFor="form-telefone">Telefone</FieldLabel>
            <Input id="form-telefone" placeholder="(11) 99999-9999" />
          </Field>
          <Field>
            <FieldLabel htmlFor="form-estado">Estado</FieldLabel>
            <Combobox
              id="form-estado"
              trigger="button"
              defaultValue="sp"
              options={[
                { value: "sp", label: "São Paulo" },
                { value: "rj", label: "Rio de Janeiro" },
                { value: "mg", label: "Minas Gerais" },
              ]}
            />
          </Field>
        </div>
        <Field>
          <FieldLabel htmlFor="form-endereco">Endereço</FieldLabel>
          <Input id="form-endereco" placeholder="Rua Exemplo, 123" />
        </Field>
        <div className="flex gap-2">
          <Button type="reset" variant="outline">
            Cancelar
          </Button>
          <Button type="submit">Enviar</Button>
        </div>
      </FieldGroup>
    </form>
  );
}
