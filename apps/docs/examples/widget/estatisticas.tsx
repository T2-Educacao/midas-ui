import { WidgetAsset, WidgetChart, WidgetStat } from "@t2-educacao/midas";

export default function WidgetEstatisticas() {
  return (
    <div className="flex flex-wrap gap-4">
      <WidgetStat
        size="s"
        palette="cyan"
        surface="aurora"
        label="Meta do mês"
        value="72"
        unit="%"
      />
      <WidgetStat label="Patrimônio" value="R$ 30.739" delta="+ R$ 317 hoje" trend="up" />
      <WidgetChart
        size="s"
        type="ring"
        palette="emerald"
        title="Meta reserva"
        value="68%"
        data={[68]}
        max={100}
        chartLabel="Meta reserva: 68%"
      />
      <WidgetChart
        type="bars"
        palette="violet"
        title="Aulas na semana"
        data={[2, 4, 1, 5, 3, 0, 6]}
        labels={["D", "S", "T", "Q", "Q", "S", "S"]}
      />
      <WidgetAsset
        symbol="ITUB4"
        name="Itaú Unibanco"
        price="R$ 36,42"
        change="+2,31%"
        trend="up"
      />
    </div>
  );
}
