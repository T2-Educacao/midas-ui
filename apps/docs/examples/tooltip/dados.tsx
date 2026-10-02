import {
  Button,
  Tooltip,
  TooltipContent,
  TooltipItem,
  TooltipTitle,
  TooltipTrigger,
} from "@t2-educacao/midas";

export default function TooltipDados() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Passe o mouse</Button>
      </TooltipTrigger>
      <TooltipContent>
        <TooltipTitle>16 jul 2026</TooltipTitle>
        <TooltipItem label="Gestão de risco" value="50" color="var(--color-primary)" />
        <TooltipItem label="Análise de investimentos" value="30" color="var(--color-ring)" />
      </TooltipContent>
    </Tooltip>
  );
}
