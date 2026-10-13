import { ChoiceCard, ChoiceCardGroup } from "@t2-educacao/midas";
import { IconBriefcase, IconCoin } from "@t2-educacao/midas/icons";

export default function ChoiceCardVertical() {
  return (
    <ChoiceCardGroup aria-label="Objetivo" columns={2} layout="vertical" defaultValue="carreira">
      <ChoiceCard
        value="carreira"
        icon={<IconBriefcase />}
        title="Carreira"
        description="Crescer no trabalho."
      />
      <ChoiceCard
        value="financas"
        icon={<IconCoin />}
        title="Finanças"
        description="Organizar o dinheiro."
      />
      <ChoiceCard
        value="neutro"
        tone="neutral"
        appearance="filled"
        title="Filled neutral"
        description="Sem ícone."
      />
    </ChoiceCardGroup>
  );
}
