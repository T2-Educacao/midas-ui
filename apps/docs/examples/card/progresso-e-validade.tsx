import { Card, CardBody, CardExpiry, CardEyebrow, CardTitle, Progress } from "@t2-educacao/midas";

export default function CardProgressoEValidade() {
  return (
    <div className="grid max-w-3xl gap-4 sm:grid-cols-3">
      <Card size="s">
        <CardBody>
          <CardEyebrow>Em andamento</CardEyebrow>
          <CardTitle>Investindo em ações</CardTitle>
          <Progress value={22} aria-label="Progresso do curso" />
          <CardExpiry>Expira em 30 nov 2026</CardExpiry>
        </CardBody>
      </Card>
      <Card size="s">
        <CardBody>
          <CardEyebrow>Em andamento</CardEyebrow>
          <CardTitle>Planejamento financeiro</CardTitle>
          <Progress value={65} aria-label="Progresso do curso" />
          <CardExpiry status="warning">Expira em 3 dias</CardExpiry>
        </CardBody>
      </Card>
      <Card size="s">
        <CardBody>
          <CardEyebrow>Expirado</CardEyebrow>
          <CardTitle>Renda fixa do zero</CardTitle>
          <Progress value={40} aria-label="Progresso do curso" />
          <CardExpiry status="expired">Expirou em 10 set 2026</CardExpiry>
        </CardBody>
      </Card>
    </div>
  );
}
