import { Toggle } from "@t2-educacao/midas";
import { IconBold, IconItalic, IconUnderline } from "@t2-educacao/midas/icons";

export default function ToggleBasico() {
  return (
    <>
      <Toggle aria-label="Negrito">
        <IconBold />
      </Toggle>
      <Toggle aria-label="Itálico" defaultPressed>
        <IconItalic />
      </Toggle>
      <Toggle aria-label="Sublinhado">
        <IconUnderline />
      </Toggle>
    </>
  );
}
