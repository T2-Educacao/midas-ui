import { ChoiceCard, ChoiceCardGroup } from "@t2-educacao/midas";
import { IconArticle, IconBroadcast, IconVideo } from "@t2-educacao/midas/icons";

export default function ChoiceCardComIcone() {
  return (
    <ChoiceCardGroup defaultValue="video" aria-label="Formato" className="sm:grid-cols-3">
      <ChoiceCard value="video" title="Vídeo" description="Aulas gravadas" icon={<IconVideo />} />
      <ChoiceCard
        value="texto"
        title="Texto"
        description="Material para ler"
        icon={<IconArticle />}
      />
      <ChoiceCard
        value="ao-vivo"
        title="Ao vivo"
        description="Encontros semanais"
        icon={<IconBroadcast />}
      />
    </ChoiceCardGroup>
  );
}
