import { Toggle } from "@t2-educacao/midas";
import { Star } from "@t2-educacao/midas/icons";

export default function ToggleOutline() {
  return (
    <>
      <Toggle variant="outline" aria-label="Favoritar">
        <Star />
      </Toggle>
      <Toggle variant="outline">
        <Star /> Favorito
      </Toggle>
    </>
  );
}
