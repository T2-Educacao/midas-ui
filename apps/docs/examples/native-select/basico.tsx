import { NativeSelect } from "@t2-educacao/midas";

export default function NativeSelectBasico() {
  return (
    <NativeSelect aria-label="Estado" defaultValue="sp" className="w-48">
      <option value="sp">São Paulo</option>
      <option value="rj">Rio de Janeiro</option>
      <option value="mg">Minas Gerais</option>
    </NativeSelect>
  );
}
