import { LoadingState } from "@t2-educacao/midas";

export default function LoadingStateTipos() {
  return (
    <div className="flex w-full flex-col gap-6">
      <LoadingState title="Carregando aulas…" />
      <LoadingState
        type="stacked"
        title="Gerando seu plano de estudos"
        description="Isso leva só alguns segundos."
      />
      <div className="relative h-48 rounded-container border border-border-default">
        <LoadingState
          type="overlay"
          title="Gerando seu plano de estudos"
          description="Isso leva só alguns segundos."
        />
      </div>
    </div>
  );
}
