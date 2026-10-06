import { ChoiceCard, ChoiceCardGroup } from "@t2-educacao/midas";

export default function ChoiceCardBasico() {
  return (
    <ChoiceCardGroup defaultValue="anual" aria-label="Plano" className="sm:grid-cols-2">
      <ChoiceCard
        value="mensal"
        title="Mensal"
        description="Cobrança todo mês, cancele quando quiser."
      />
      <ChoiceCard
        value="anual"
        title="Anual"
        description="Dois meses grátis pagando uma vez por ano."
      />
    </ChoiceCardGroup>
  );
}
