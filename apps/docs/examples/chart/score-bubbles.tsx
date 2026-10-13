import { ScoreBubbles } from "@t2-educacao/midas";

const modulos = [
  { label: "Módulo 1", value: 92 },
  { label: "Módulo 2", value: 64 },
  { label: "Módulo 3", value: 31 },
  { label: "Módulo 4", value: null },
];

export default function ChartScoreBubbles() {
  return (
    <div className="flex flex-col gap-4">
      <ScoreBubbles items={modulos} aria-label="Notas por módulo" />
      <ScoreBubbles items={modulos} color="multi" size="compact" aria-label="Notas compactas" />
      <ScoreBubbles items={modulos} color="brand" aria-label="Notas em tom de marca" />
    </div>
  );
}
