import { Progress } from "@t2-educacao/midas";

export default function ProgressBasico() {
  return (
    <div className="grid w-full max-w-sm gap-2">
      <div className="flex justify-between text-sm">
        <span>Módulo 2</span>
        <span className="text-muted-foreground">8 de 12 aulas</span>
      </div>
      <Progress value={8} max={12} aria-label="Aulas concluídas do módulo 2" />
    </div>
  );
}
