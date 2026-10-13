import { Tag } from "@t2-educacao/midas";
import { IconStar } from "@t2-educacao/midas/icons";

export default function TagTamanhosELeading() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Tag size="sm">SM</Tag>
      <Tag size="md">MD</Tag>
      <Tag size="lg">LG</Tag>
      <Tag size="xl">XL</Tag>
      <Tag size="md" icon={<IconStar />} tone="brand">
        Ícone
      </Tag>
      <Tag size="md" emoji="🔥">
        Emoji
      </Tag>
      <Tag size="md" dot tone="success">
        Ponto
      </Tag>
    </div>
  );
}
