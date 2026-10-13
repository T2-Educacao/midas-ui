import { Button, WidgetAlert, WidgetImage, WidgetMessage } from "@t2-educacao/midas";
import { IconAlertTriangle } from "@t2-educacao/midas/icons";

export default function WidgetMensagensEAlertas() {
  return (
    <div className="flex flex-wrap gap-4">
      <WidgetMessage
        type="greeting"
        palette="amber"
        surface="aurora"
        eyebrow="QUARTA, 07 OUT"
        title="Bom dia, Ana"
        description="Você está cada vez mais perto de realizar seus objetivos."
      />
      <WidgetMessage
        type="achievement"
        palette="emerald"
        eyebrow="CONQUISTA"
        title="Parabéns, Ana! Você concluiu a trilha Renda Fixa."
        action={<Button size="sm">Definir nova meta</Button>}
      />
      <WidgetAlert
        severity="warning"
        icon={<IconAlertTriangle aria-hidden />}
        eyebrow="ATENÇÃO"
        title="Ana, 2 coisas merecem sua atenção"
        items={[
          { title: "Fatura vence amanhã", description: "R$ 1.240,00 · cartão final 4821" },
          { title: "Aporte mensal pendente" },
        ]}
        className="w-90"
      />
      <WidgetImage
        src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600"
        eyebrow="CURSO"
        title="Preparatório CPA-20"
        meta="178 aulas"
      />
    </div>
  );
}
