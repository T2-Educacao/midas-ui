import { Badge } from "@t2-educacao/midas";
import { IconBell } from "@t2-educacao/midas/icons";

export default function BadgeContador() {
  return (
    <div className="flex items-center gap-6">
      <Badge type="count" count={3} />
      <Badge type="count" count={120} tone="danger" size="lg" />
      <Badge type="count" count={7} tone="neutral" size="sm" />
      <span className="relative inline-flex">
        <IconBell className="size-6" />
        <Badge
          type="dot"
          tone="danger"
          aria-label="Há novidades"
          className="absolute -end-0.5 -top-0.5"
        />
      </span>
    </div>
  );
}
