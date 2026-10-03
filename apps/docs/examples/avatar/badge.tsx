import { Avatar, AvatarBadge, AvatarFallback, AvatarImage } from "@t2-educacao/midas";
import { Plus } from "@t2-educacao/midas/icons";

export default function AvatarComBadge() {
  return (
    <>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="Ana Souza" />
        <AvatarFallback>AS</AvatarFallback>
        <AvatarBadge aria-label="Online" />
      </Avatar>
      <Avatar size="lg">
        <AvatarFallback>BR</AvatarFallback>
        <AvatarBadge variant="icon" aria-label="Adicionar">
          <Plus />
        </AvatarBadge>
      </Avatar>
    </>
  );
}
