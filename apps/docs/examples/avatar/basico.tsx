import { Avatar, AvatarFallback, AvatarImage } from "@t2-educacao/midas";

export default function AvatarBasico() {
  return (
    <>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="Ana Souza" />
        <AvatarFallback>AS</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>BR</AvatarFallback>
      </Avatar>
    </>
  );
}
