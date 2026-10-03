import { Avatar, AvatarFallback, AvatarImage } from "@t2-educacao/midas";

export default function AvatarTamanhos() {
  return (
    <>
      {(["sm", "default", "lg"] as const).map((size) => (
        <Avatar key={size} size={size}>
          <AvatarImage src="https://github.com/shadcn.png" alt="Ana Souza" />
          <AvatarFallback>AS</AvatarFallback>
        </Avatar>
      ))}
    </>
  );
}
