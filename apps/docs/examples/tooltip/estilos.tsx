import {
  Button,
  Tooltip,
  TooltipContent,
  TooltipDescription,
  TooltipShortcut,
  TooltipTitle,
  TooltipTrigger,
} from "@t2-educacao/midas";

export default function TooltipEstilos() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Inverse</Button>
        </TooltipTrigger>
        <TooltipContent>Copiar link</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Light com atalho</Button>
        </TooltipTrigger>
        <TooltipContent appearance="light">
          Buscar <TooltipShortcut>⌘ K</TooltipShortcut>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Rich sem seta</Button>
        </TooltipTrigger>
        <TooltipContent rich arrow={false} side="bottom">
          <TooltipTitle>Rentabilidade líquida</TooltipTitle>
          <TooltipDescription>
            Quanto o investimento rendeu no período, já descontados taxas e impostos.
          </TooltipDescription>
        </TooltipContent>
      </Tooltip>
    </div>
  );
}
