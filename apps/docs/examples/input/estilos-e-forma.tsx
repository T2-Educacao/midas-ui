import { Input } from "@t2-educacao/midas";

export default function InputEstilosEForma() {
  return (
    <div className="grid w-full max-w-sm gap-3">
      <Input aria-label="Outline" placeholder="Outline (padrão)" />
      <Input aria-label="Filled" appearance="filled" placeholder="Filled" />
      <Input aria-label="Neutral" tone="neutral" placeholder="Tom neutral (foco cinza)" />
      <Input aria-label="Pill" shape="pill" placeholder="Forma pill" />
      <div className="rounded-container bg-linear-to-br from-action-accent-bg to-brand-primary p-4">
        <Input aria-label="Glass" appearance="glass" placeholder="Glass sobre gradiente" />
      </div>
    </div>
  );
}
