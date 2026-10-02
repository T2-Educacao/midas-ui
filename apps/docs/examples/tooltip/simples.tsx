import { Button, Tooltip, TooltipContent, TooltipTrigger } from "@t2-educacao/midas";
import { Question } from "@t2-educacao/midas/icons";

export default function TooltipSimples() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline" size="icon" aria-label="Ajuda">
          <Question />
        </Button>
      </TooltipTrigger>
      <TooltipContent>Tire dúvidas sobre a plataforma</TooltipContent>
    </Tooltip>
  );
}
