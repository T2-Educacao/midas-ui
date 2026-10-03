import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@t2-educacao/midas";
import { Plus } from "@t2-educacao/midas/icons";

export default function AvatarGrupo() {
  return (
    <>
      <AvatarGroup>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="Ana Souza" />
          <AvatarFallback>AS</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>BR</AvatarFallback>
        </Avatar>
        <AvatarGroupCount>+3</AvatarGroupCount>
      </AvatarGroup>
      <AvatarGroup>
        <Avatar>
          <AvatarFallback>CL</AvatarFallback>
        </Avatar>
        <AvatarGroupCount aria-label="Convidar">
          <Plus />
        </AvatarGroupCount>
      </AvatarGroup>
    </>
  );
}
