import {
  Button,
  ButtonGroup,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@t2-educacao/midas";
import { IconChevronDown } from "@t2-educacao/midas/icons";

export default function ButtonGroupComDropdown() {
  return (
    <ButtonGroup aria-label="Mensagem">
      <Button variant="outline">Seguir</Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon" aria-label="Mais opções">
            <IconChevronDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>Silenciar conversa</DropdownMenuItem>
          <DropdownMenuItem>Marcar como lida</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive">Excluir conversa</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </ButtonGroup>
  );
}
