"use client";

import { DynamicCodeBlock } from "fumadocs-ui/components/dynamic-codeblock";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import type { ReactNode } from "react";

export function ComponentPreview({
  title,
  description,
  code,
  children,
}: {
  title: string;
  description?: string;
  code: string;
  children: ReactNode;
}) {
  return (
    <section className="not-prose my-8">
      <h3 className="text-base font-semibold text-foreground">{title}</h3>
      {description && <p className="mt-1 text-sm text-muted-foreground">{description}</p>}
      <Tabs items={["Preview", "Código"]} className="mt-3">
        <Tab value="Preview" className="p-0">
          <div className="flex min-h-48 flex-wrap items-center justify-center gap-3 rounded-lg bg-background p-8 bg-[radial-gradient(var(--midas-border)_1px,transparent_1px)] [background-size:16px_16px]">
            {children}
          </div>
        </Tab>
        <Tab value="Código" className="p-0">
          <DynamicCodeBlock
            lang="tsx"
            code={code}
            codeblock={{ className: "my-0 rounded-none border-0" }}
          />
        </Tab>
      </Tabs>
    </section>
  );
}
