import {
  Button,
  Tooltip,
  TooltipContent,
  TooltipFooter,
  TooltipItem,
  TooltipTrigger,
} from "@t2-educacao/midas";

export default function TooltipComTotal() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Tempo de estudo</Button>
      </TooltipTrigger>
      <TooltipContent>
        <TooltipItem label="Gestão de risco" value="1h" color="var(--color-primary)" />
        <TooltipItem label="Análise de investimentos" value="50 min" color="var(--color-ring)" />
        <TooltipFooter>
          <span>Total</span>
          <span>1h 50 min</span>
        </TooltipFooter>
      </TooltipContent>
    </Tooltip>
  );
}
