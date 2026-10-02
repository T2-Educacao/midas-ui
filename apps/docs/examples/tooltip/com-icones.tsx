import { Button, Tooltip, TooltipContent, TooltipItem, TooltipTrigger } from "@t2-educacao/midas";
import { Calendar, ListBullets } from "@t2-educacao/midas/icons";

export default function TooltipComIcones() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Com ícones</Button>
      </TooltipTrigger>
      <TooltipContent>
        <TooltipItem icon={<Calendar />} label="Gestão de risco" value="380" />
        <TooltipItem icon={<ListBullets />} label="Análise de investimentos" value="420" />
      </TooltipContent>
    </Tooltip>
  );
}
