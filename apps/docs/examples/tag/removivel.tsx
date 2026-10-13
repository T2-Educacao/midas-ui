"use client";

import { Tag } from "@t2-educacao/midas";
import { useState } from "react";

export default function TagRemovivel() {
  const [tags, setTags] = useState(["CPA-20", "CEA", "Renda fixa"]);

  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <Tag
          key={tag}
          size="md"
          tone="brand"
          onRemove={() => setTags((atual) => atual.filter((item) => item !== tag))}
        >
          {tag}
        </Tag>
      ))}
    </div>
  );
}
