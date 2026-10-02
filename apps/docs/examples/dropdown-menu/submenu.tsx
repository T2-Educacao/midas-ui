import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@t2-educacao/midas";

export default function DropdownMenuSubmenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Abrir</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Turma</DropdownMenuItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Convidar alunos</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem>E-mail</DropdownMenuItem>
            <DropdownMenuItem>WhatsApp</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Mais opções...</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuItem>
          Nova turma <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
