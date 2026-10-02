import {
  Button,
  Tooltip,
  TooltipContent,
  TooltipItem,
  TooltipTitle,
  TooltipTrigger,
} from "@t2-educacao/midas";

export default function TooltipIndicadores() {
  return (
    <>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Linha</Button>
        </TooltipTrigger>
        <TooltipContent>
          <TooltipTitle>16 jul 2026</TooltipTitle>
          <TooltipItem indicator="line" label="Gestão de risco" value="100%" />
          <TooltipItem indicator="line" label="Análise de investimentos" value="20%" />
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Sem indicador</Button>
        </TooltipTrigger>
        <TooltipContent>
          <TooltipItem indicator="none" label="Gestão de risco" value="380" />
          <TooltipItem indicator="none" label="Análise de investimentos" value="420" />
        </TooltipContent>
      </Tooltip>
    </>
  );
}
