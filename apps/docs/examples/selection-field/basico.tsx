import { RadioGroup, SelectionField } from "@t2-educacao/midas";
import { IconBell, IconMail } from "@t2-educacao/midas/icons";

export default function SelectionFieldBasico() {
  return (
    <div className="flex max-w-md flex-col gap-4">
      <SelectionField
        label="Aceito receber novidades"
        description="Avisos sobre aulas, trilhas e certificados."
      />
      <SelectionField
        label="Li e aceito os termos"
        errorMessage="Aceite os termos para continuar."
      />
      <SelectionField
        appearance="card"
        control="toggle"
        icon={<IconBell />}
        label="Notificações"
        description="Receba lembretes de aulas e simulados."
        defaultChecked
      />
      <SelectionField
        appearance="card"
        icon={<IconMail />}
        label="Resumo semanal"
        description="Enviado toda segunda-feira."
        tone="neutral"
        disabled
      />
      <RadioGroup defaultValue="mensal" aria-label="Plano">
        <SelectionField
          control="radio"
          value="mensal"
          label="Mensal"
          description="Cancele quando quiser."
        />
        <SelectionField
          control="radio"
          value="anual"
          label="Anual"
          description="Dois meses grátis."
        />
      </RadioGroup>
    </div>
  );
}
