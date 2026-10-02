import { Toggle } from "@t2-educacao/midas";
import { TextB, TextItalic, TextUnderline } from "@t2-educacao/midas/icons";

export default function ToggleBasico() {
  return (
    <>
      <Toggle aria-label="Negrito">
        <TextB />
      </Toggle>
      <Toggle aria-label="Itálico" defaultPressed>
        <TextItalic />
      </Toggle>
      <Toggle aria-label="Sublinhado">
        <TextUnderline />
      </Toggle>
    </>
  );
}
