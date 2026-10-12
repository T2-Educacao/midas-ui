import { ToggleGroup, ToggleGroupItem } from "@t2-educacao/midas";
import { IconBold, IconItalic, IconUnderline } from "@t2-educacao/midas/icons";

export default function ToggleGroupMultiplaEscolha() {
  return (
    <ToggleGroup type="multiple" defaultValue={["negrito"]} aria-label="Formatação">
      <ToggleGroupItem value="negrito" aria-label="Negrito">
        <IconBold />
      </ToggleGroupItem>
      <ToggleGroupItem value="italico" aria-label="Itálico">
        <IconItalic />
      </ToggleGroupItem>
      <ToggleGroupItem value="sublinhado" aria-label="Sublinhado">
        <IconUnderline />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
