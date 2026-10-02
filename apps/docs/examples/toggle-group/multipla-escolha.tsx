import { ToggleGroup, ToggleGroupItem } from "@t2-educacao/midas";
import { TextB, TextItalic, TextUnderline } from "@t2-educacao/midas/icons";

export default function ToggleGroupMultiplaEscolha() {
  return (
    <ToggleGroup type="multiple" defaultValue={["negrito"]} aria-label="Formatação">
      <ToggleGroupItem value="negrito" aria-label="Negrito">
        <TextB />
      </ToggleGroupItem>
      <ToggleGroupItem value="italico" aria-label="Itálico">
        <TextItalic />
      </ToggleGroupItem>
      <ToggleGroupItem value="sublinhado" aria-label="Sublinhado">
        <TextUnderline />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
