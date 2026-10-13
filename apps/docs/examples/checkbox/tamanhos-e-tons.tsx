import { Checkbox } from "@t2-educacao/midas";

export default function CheckboxTamanhosETons() {
  return (
    <div className="flex flex-col gap-3">
      {(["sm", "md", "lg"] as const).map((size) => (
        <div key={size} className="flex items-center gap-3">
          <Checkbox aria-label={`Marcado ${size}`} size={size} defaultChecked />
          <Checkbox aria-label={`Neutro ${size}`} size={size} tone="neutral" defaultChecked />
          <Checkbox aria-label={`Indeterminado ${size}`} size={size} checked="indeterminate" />
          <Checkbox aria-label={`Vazio ${size}`} size={size} />
          <Checkbox aria-label={`Erro ${size}`} size={size} aria-invalid />
          <Checkbox aria-label={`Desabilitado ${size}`} size={size} disabled />
        </div>
      ))}
    </div>
  );
}
