"use client";

import { Field, FieldDescription, FieldLabel, TagInput } from "@t2-educacao/midas";
import * as React from "react";

export default function TagInputBasico() {
  const [tags, setTags] = React.useState(["Design System", "UI Kit"]);

  return (
    <Field className="max-w-sm">
      <FieldLabel htmlFor="tags">Tags</FieldLabel>
      <TagInput id="tags" value={tags} onValueChange={setTags} maxTags={6} />
      <FieldDescription>Pressione Enter para adicionar.</FieldDescription>
    </Field>
  );
}
