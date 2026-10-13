import { RadioGroup, RadioGroupItem } from "@t2-educacao/midas";

export default function RadioGroupTamanhosETons() {
  return (
    <div className="flex flex-col gap-3">
      {(["sm", "md", "lg"] as const).map((size) => (
        <RadioGroup
          key={size}
          defaultValue="a"
          aria-label={`Tamanho ${size}`}
          className="flex gap-3"
        >
          <RadioGroupItem value="a" size={size} aria-label="Marcado" />
          <RadioGroupItem value="b" size={size} aria-label="Vazio" />
          <RadioGroupItem value="c" size={size} tone="neutral" aria-label="Neutro" />
          <RadioGroupItem value="d" size={size} aria-invalid aria-label="Erro" />
          <RadioGroupItem value="e" size={size} disabled aria-label="Desabilitado" />
        </RadioGroup>
      ))}
    </div>
  );
}
