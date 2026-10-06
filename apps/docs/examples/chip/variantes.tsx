import { Chip } from "@t2-educacao/midas";

export default function ChipVariantes() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Chip>Padrão</Chip>
      <Chip variant="outline">Outline</Chip>
      <Chip variant="primary">Primary</Chip>
      <Chip size="sm">Pequeno</Chip>
    </div>
  );
}
