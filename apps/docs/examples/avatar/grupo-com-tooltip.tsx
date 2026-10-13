import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@t2-educacao/midas";

const pessoas = [
  { nome: "Camila Ribeiro", iniciais: "CR" },
  { nome: "Rafael Souza", iniciais: "RS" },
  { nome: "Ana Lima", iniciais: "AL" },
];

export default function AvatarGrupoComTooltip() {
  return (
    <TooltipProvider>
      <AvatarGroup size="md">
        {pessoas.map((pessoa) => (
          <Tooltip key={pessoa.nome}>
            <TooltipTrigger asChild>
              <Avatar size="md" tabIndex={0} aria-label={pessoa.nome}>
                <AvatarFallback>{pessoa.iniciais}</AvatarFallback>
              </Avatar>
            </TooltipTrigger>
            <TooltipContent>{pessoa.nome}</TooltipContent>
          </Tooltip>
        ))}
        <AvatarGroupCount size="md" asChild>
          <button type="button" aria-label="Ver mais 5 pessoas">
            +5
          </button>
        </AvatarGroupCount>
      </AvatarGroup>
    </TooltipProvider>
  );
}
