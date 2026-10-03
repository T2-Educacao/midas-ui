import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@t2-educacao/midas";
import { CreditCard, Gear, SignOut, User } from "@t2-educacao/midas/icons";

export default function DropdownMenuAvatar() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" rounded aria-label="Minha conta">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="" />
            <AvatarFallback>AS</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel className="flex items-center gap-2 py-1.5 text-foreground">
          <Avatar size="sm">
            <AvatarImage src="https://github.com/shadcn.png" alt="" />
            <AvatarFallback>AS</AvatarFallback>
          </Avatar>
          <span className="grid text-sm font-normal">
            <span className="font-medium">Ana Souza</span>
            <span className="text-xs text-muted-foreground">ana@email.com</span>
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User /> Conta
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CreditCard /> Assinatura
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Gear /> Configurações
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <SignOut /> Sair
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
