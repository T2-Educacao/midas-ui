import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
  FieldSuccess,
  Input,
} from "@t2-educacao/midas";

export default function InputEstados() {
  return (
    <div className="grid w-full max-w-sm gap-5">
      <Field>
        <FieldLabel htmlFor="es-padrao">Padrão</FieldLabel>
        <Input id="es-padrao" placeholder="Digite aqui" />
        <FieldDescription>Texto de apoio</FieldDescription>
      </Field>
      <Field invalid>
        <FieldLabel htmlFor="es-erro">Erro</FieldLabel>
        <Input id="es-erro" defaultValue="ana@t2" aria-invalid aria-describedby="es-erro-msg" />
        <FieldError id="es-erro-msg">Mensagem de erro</FieldError>
      </Field>
      <Field>
        <FieldLabel htmlFor="es-ok">Sucesso</FieldLabel>
        <Input id="es-ok" defaultValue="ana@t2.com.br" success aria-describedby="es-ok-msg" />
        <FieldSuccess id="es-ok-msg">Tudo certo</FieldSuccess>
      </Field>
      <Field disabled>
        <FieldLabel htmlFor="es-desab">Desabilitado</FieldLabel>
        <Input id="es-desab" placeholder="Digite aqui" disabled />
      </Field>
    </div>
  );
}
