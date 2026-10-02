import { ToggleGroup, ToggleGroupItem } from "@t2-educacao/midas";

export default function ToggleGroupEspacamento() {
  return (
    <ToggleGroup
      type="single"
      variant="outline"
      spacing={2}
      defaultValue="lista"
      aria-label="Visualização"
    >
      <ToggleGroupItem value="lista">Lista</ToggleGroupItem>
      <ToggleGroupItem value="grade">Grade</ToggleGroupItem>
      <ToggleGroupItem value="calendario">Calendário</ToggleGroupItem>
    </ToggleGroup>
  );
}
