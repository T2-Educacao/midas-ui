import { Tag } from "@t2-educacao/midas";

const tons = ["neutral", "brand", "success", "danger", "warning", "info", "inverse"] as const;

export default function TagVariantes() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap gap-2">
        {tons.map((tone) => (
          <Tag key={tone} tone={tone} size="md">
            {tone}
          </Tag>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {tons.slice(0, 6).map((tone) => (
          <Tag key={tone} tone={tone} variant="outline" size="md" dot>
            {tone}
          </Tag>
        ))}
      </div>
    </div>
  );
}
