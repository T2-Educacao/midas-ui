import { SegmentedControl, SegmentedControlItem } from "@t2-educacao/midas";

export default function SegmentedControlBasico() {
  return (
    <SegmentedControl defaultValue="mes" aria-label="Período">
      <SegmentedControlItem value="dia">Dia</SegmentedControlItem>
      <SegmentedControlItem value="semana">Semana</SegmentedControlItem>
      <SegmentedControlItem value="mes">Mês</SegmentedControlItem>
      <SegmentedControlItem value="ano">Ano</SegmentedControlItem>
    </SegmentedControl>
  );
}
