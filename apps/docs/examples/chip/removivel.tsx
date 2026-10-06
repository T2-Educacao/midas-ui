"use client";

import { Chip } from "@t2-educacao/midas";
import * as React from "react";

export default function ChipRemovivel() {
  const [tags, setTags] = React.useState(["CPA", "CEA", "CFP"]);

  return (
    <div className="flex flex-wrap items-center gap-2">
      {tags.map((tag) => (
        <Chip key={tag} onRemove={() => setTags((atual) => atual.filter((item) => item !== tag))}>
          {tag}
        </Chip>
      ))}
    </div>
  );
}
