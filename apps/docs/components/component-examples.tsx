import { readFileSync } from "node:fs";
import { join } from "node:path";
import { examples } from "@/examples";
import { ComponentPreview } from "./component-preview";

function sourceOf(component: string, id: string) {
  return readFileSync(join(process.cwd(), "examples", component, `${id}.tsx`), "utf8")
    .replace(/^"use client";\s*/, "")
    .trim();
}

export function ComponentExamples({ component }: { component: string }) {
  const list = examples[component];
  if (!list?.length) return null;

  return (
    <div className="not-prose">
      <h2 className="mt-2 text-xl font-semibold text-foreground">Exemplos</h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Interaja com o componente e copie o código de cada exemplo.
      </p>
      {list.map(({ id, title, description, Component }) => (
        <ComponentPreview
          key={id}
          title={title}
          description={description}
          code={sourceOf(component, id)}
        >
          <Component />
        </ComponentPreview>
      ))}
    </div>
  );
}
