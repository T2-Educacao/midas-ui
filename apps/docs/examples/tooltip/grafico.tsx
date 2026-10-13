import { ChartTooltip, TooltipDelta, TooltipFooter, TooltipItem } from "@t2-educacao/midas";

export default function TooltipGrafico() {
  return (
    <div className="flex flex-wrap items-start gap-4">
      <ChartTooltip title="12 mar 2026">
        <TooltipItem label="Renda fixa" value="R$ 30.100" color="var(--midas-chart-1)" />
        <TooltipItem label="Ações" value="R$ 12.400" color="var(--midas-chart-2)" />
        <TooltipFooter>
          <span>Total</span>
          <span>R$ 42.500</span>
        </TooltipFooter>
      </ChartTooltip>
      <ChartTooltip title="12 mar 2026" appearance="light">
        <TooltipDelta value="R$ 48.320" change="12,4%" caption="vs. 12 fev 2026" />
      </ChartTooltip>
    </div>
  );
}
