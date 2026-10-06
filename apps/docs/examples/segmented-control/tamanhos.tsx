import { SegmentedControl, SegmentedControlItem } from "@t2-educacao/midas";

export default function SegmentedControlTamanhos() {
  return (
    <div className="flex flex-col items-start gap-4">
      <SegmentedControl defaultValue="lista" size="sm" aria-label="Visualização pequena">
        <SegmentedControlItem value="lista">Lista</SegmentedControlItem>
        <SegmentedControlItem value="grade">Grade</SegmentedControlItem>
      </SegmentedControl>
      <SegmentedControl defaultValue="lista" aria-label="Visualização padrão">
        <SegmentedControlItem value="lista">Lista</SegmentedControlItem>
        <SegmentedControlItem value="grade">Grade</SegmentedControlItem>
      </SegmentedControl>
      <SegmentedControl defaultValue="a" orientation="vertical" aria-label="Vertical">
        <SegmentedControlItem value="a">Rascunho</SegmentedControlItem>
        <SegmentedControlItem value="b">Publicado</SegmentedControlItem>
        <SegmentedControlItem value="c" disabled>
          Arquivado
        </SegmentedControlItem>
      </SegmentedControl>
    </div>
  );
}
