import { Avatar, AvatarAdd, AvatarBadge, AvatarFallback } from "@t2-educacao/midas";

const tamanhos = ["xs", "sm", "md", "lg", "xl", "2xl"] as const;
const status = ["online", "away", "busy", "offline", "verified"] as const;

export default function AvatarTamanhosFormasEStatus() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-end gap-3">
        {tamanhos.map((size) => (
          <Avatar key={size} size={size}>
            <AvatarFallback>LC</AvatarFallback>
          </Avatar>
        ))}
      </div>
      <div className="flex items-end gap-3">
        {tamanhos.map((size) => (
          <Avatar key={size} size={size} shape="rounded">
            <AvatarFallback>LC</AvatarFallback>
          </Avatar>
        ))}
      </div>
      <div className="flex items-center gap-3">
        {status.map((item) => (
          <Avatar key={item} size="lg">
            <AvatarFallback>LC</AvatarFallback>
            <AvatarBadge status={item} />
          </Avatar>
        ))}
        <Avatar size="lg">
          <AvatarFallback>LC</AvatarFallback>
          <AvatarBadge status="count" aria-label="3 notificações">
            3
          </AvatarBadge>
        </Avatar>
        <AvatarAdd size="lg" aria-label="Convidar pessoa" />
      </div>
    </div>
  );
}
