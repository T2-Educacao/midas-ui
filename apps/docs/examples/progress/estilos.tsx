import { ProgressField } from "@t2-educacao/midas";

const estilos = ["accent", "neutral", "gradient", "glow", "shimmer"] as const;

export default function ProgressEstilos() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-5">
      {estilos.map((appearance) => (
        <ProgressField
          key={appearance}
          appearance={appearance}
          label={appearance}
          value={75}
          helper="30 seg restantes"
        />
      ))}
    </div>
  );
}
