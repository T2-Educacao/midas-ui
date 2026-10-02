import { ToggleGroup, ToggleGroupItem } from "@t2-educacao/midas";
import { TextAlignCenter, TextAlignLeft, TextAlignRight } from "@t2-educacao/midas/icons";

export default function ToggleGroupEscolhaUnica() {
  return (
    <ToggleGroup type="single" variant="outline" defaultValue="esquerda" aria-label="Alinhamento">
      <ToggleGroupItem value="esquerda" aria-label="Alinhar à esquerda">
        <TextAlignLeft />
      </ToggleGroupItem>
      <ToggleGroupItem value="centro" aria-label="Centralizar">
        <TextAlignCenter />
      </ToggleGroupItem>
      <ToggleGroupItem value="direita" aria-label="Alinhar à direita">
        <TextAlignRight />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
