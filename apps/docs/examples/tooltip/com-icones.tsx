import { Button, Tooltip, TooltipContent, TooltipItem, TooltipTrigger } from "@t2-educacao/midas";
import { IconCalendar, IconList } from "@t2-educacao/midas/icons";

export default function TooltipComIcones() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Com ícones</Button>
      </TooltipTrigger>
      <TooltipContent>
        <TooltipItem icon={<IconCalendar />} label="Gestão de risco" value="380" />
        <TooltipItem icon={<IconList />} label="Análise de investimentos" value="420" />
      </TooltipContent>
    </Tooltip>
  );
}
