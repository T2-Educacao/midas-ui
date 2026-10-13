import { TagDetail } from "@t2-educacao/midas";
import { IconFlame } from "@t2-educacao/midas/icons";

export default function TagDetalhe() {
  return (
    <div className="flex flex-col items-start gap-3">
      <TagDetail
        icon={<IconFlame />}
        title="NOVIDADE"
        description="Trilha de renda fixa atualizada"
      />
      <TagDetail
        shape="pill"
        tone="brand"
        size="lg"
        icon={<IconFlame />}
        title="CONQUISTA"
        description="7 dias seguidos"
      />
    </div>
  );
}
