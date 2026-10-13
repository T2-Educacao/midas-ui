import { ChoiceChip, ChoiceChipGroup } from "@t2-educacao/midas";

export default function ChoiceChipUnica() {
  return (
    <div className="grid gap-4">
      <ChoiceChipGroup aria-label="Dias de estudo por semana" defaultValue="3">
        <ChoiceChip value="2">2 dias</ChoiceChip>
        <ChoiceChip value="3">3 dias</ChoiceChip>
        <ChoiceChip value="4">4 dias</ChoiceChip>
        <ChoiceChip value="5" disabled>
          5 dias
        </ChoiceChip>
      </ChoiceChipGroup>
      <ChoiceChipGroup
        aria-label="Dias (LG neutral filled)"
        size="lg"
        tone="neutral"
        appearance="filled"
        defaultValue="2"
      >
        <ChoiceChip value="2">2 dias</ChoiceChip>
        <ChoiceChip value="3">3 dias</ChoiceChip>
      </ChoiceChipGroup>
    </div>
  );
}
