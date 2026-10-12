import { Toggle } from "@t2-educacao/midas";
import { IconStar } from "@t2-educacao/midas/icons";

export default function ToggleOutline() {
  return (
    <>
      <Toggle variant="outline" aria-label="Favoritar">
        <IconStar />
      </Toggle>
      <Toggle variant="outline">
        <IconStar /> Favorito
      </Toggle>
    </>
  );
}
