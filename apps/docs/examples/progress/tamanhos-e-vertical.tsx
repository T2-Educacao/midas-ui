import { Progress, ProgressField, ProgressLine } from "@t2-educacao/midas";

export default function ProgressTamanhosEVertical() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-5">
      <Progress size="sm" value={50} aria-label="SM" />
      <Progress size="md" value={50} aria-label="MD" />
      <Progress size="lg" value={50} aria-label="LG" />
      <div className="flex gap-6">
        <ProgressField orientation="vertical" label="Nível" value={75} appearance="glow" />
        <ProgressField orientation="vertical" label="Meta" value={40} appearance="neutral" />
      </div>
      <div className="relative h-12 rounded-container border border-border-default">
        <ProgressLine
          value={50}
          appearance="glow"
          showTrack
          className="absolute inset-x-0 bottom-0"
          aria-label="Pergunta 3 de 6"
        />
      </div>
    </div>
  );
}
