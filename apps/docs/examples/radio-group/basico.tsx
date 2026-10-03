import { Label, RadioGroup, RadioGroupItem } from "@t2-educacao/midas";

export default function RadioGroupBasico() {
  return (
    <RadioGroup defaultValue="anual" aria-label="Plano">
      {[
        { value: "mensal", label: "Mensal" },
        { value: "anual", label: "Anual" },
        { value: "vitalicio", label: "Vitalício" },
      ].map((plano) => (
        <div key={plano.value} className="flex items-center gap-2">
          <RadioGroupItem value={plano.value} id={`plano-${plano.value}`} />
          <Label htmlFor={`plano-${plano.value}`}>{plano.label}</Label>
        </div>
      ))}
    </RadioGroup>
  );
}
