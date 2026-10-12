import { ToggleGroup, ToggleGroupItem } from "@t2-educacao/midas";
import { IconAlignCenter, IconAlignLeft, IconAlignRight } from "@t2-educacao/midas/icons";

export default function ToggleGroupEscolhaUnica() {
  return (
    <ToggleGroup type="single" variant="outline" defaultValue="esquerda" aria-label="Alinhamento">
      <ToggleGroupItem value="esquerda" aria-label="Alinhar à esquerda">
        <IconAlignLeft />
      </ToggleGroupItem>
      <ToggleGroupItem value="centro" aria-label="Centralizar">
        <IconAlignCenter />
      </ToggleGroupItem>
      <ToggleGroupItem value="direita" aria-label="Alinhar à direita">
        <IconAlignRight />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
