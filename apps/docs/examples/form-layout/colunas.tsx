import {
  Button,
  Field,
  FieldLabel,
  FormActions,
  FormLayout,
  FormLayoutItem,
  FormSection,
  Input,
} from "@t2-educacao/midas";

export default function FormLayoutColunas() {
  return (
    <form className="flex w-full max-w-2xl flex-col gap-8">
      <FormSection title="Dados pessoais" description="Usamos para personalizar sua trilha.">
        <FormLayout columns={2}>
          <Field>
            <FieldLabel htmlFor="fl-nome">Nome</FieldLabel>
            <Input id="fl-nome" defaultValue="Ana" />
          </Field>
          <Field>
            <FieldLabel htmlFor="fl-sobrenome">Sobrenome</FieldLabel>
            <Input id="fl-sobrenome" defaultValue="Souza" />
          </Field>
          <FormLayoutItem span="full">
            <Field>
              <FieldLabel htmlFor="fl-end">Endereço</FieldLabel>
              <Input id="fl-end" defaultValue="Rua das Flores, 120" />
            </Field>
          </FormLayoutItem>
        </FormLayout>
      </FormSection>
      <FormActions>
        <Button type="button" variant="ghost">
          Cancelar
        </Button>
        <Button type="submit">Salvar alterações</Button>
      </FormActions>
    </form>
  );
}
