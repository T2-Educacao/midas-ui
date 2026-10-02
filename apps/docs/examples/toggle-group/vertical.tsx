import { ToggleGroup, ToggleGroupItem } from "@t2-educacao/midas";

export default function ToggleGroupVertical() {
  return (
    <ToggleGroup
      type="single"
      orientation="vertical"
      variant="outline"
      defaultValue="semana"
      aria-label="Período"
    >
      <ToggleGroupItem value="dia">Dia</ToggleGroupItem>
      <ToggleGroupItem value="semana">Semana</ToggleGroupItem>
      <ToggleGroupItem value="mes">Mês</ToggleGroupItem>
    </ToggleGroup>
  );
}
