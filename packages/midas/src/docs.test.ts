import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

const root = join(import.meta.dirname, "..");
const components = readdirSync(join(root, "src/components"), { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .filter((name) => name !== "direction");
const meta: { pages: string[] } = JSON.parse(
  readFileSync(join(root, "docs/components/meta.json"), "utf8"),
);

const read = (name: string) => readFileSync(join(root, "docs/components", `${name}.md`), "utf8");

describe("documentação para IA", () => {
  it.each(components)("%s tem doc completa", (name) => {
    const source = read(name);
    const front = source.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? "";
    expect(front, "frontmatter com title").toMatch(/title:/);
    const description = front.match(/description:\s*(.*)/)?.[1] ?? "";
    expect(description.length, "description específica (40+ caracteres)").toBeGreaterThanOrEqual(
      40,
    );
    expect(source, "seção de props").toMatch(/^## Props/m);
    expect(source, "seção de acessibilidade").toMatch(/^## Acessibilidade/m);
    expect(source, "exemplo copiável").toMatch(/```tsx/);
    expect(source, "quando usar ou uso").toMatch(/^## (Quando usar|Uso)/m);
    expect(source, "não faça ou não use").toMatch(
      /^## (N[ãa]o faça|N[ãa]o use|Quando n[ãa]o usar)/m,
    );
    expect(meta.pages, "registrado em meta.json").toContain(name);
  });

  it("cada componente exportado em src/index.ts tem doc", () => {
    const index = readFileSync(join(root, "src/index.ts"), "utf8");
    const folders = [...index.matchAll(/from "\.\/components\/([a-z0-9-]+)"/g)].map((m) => m[1]);
    for (const folder of new Set(folders.filter((name) => name !== "direction"))) {
      expect(() => read(folder as string), folder).not.toThrow();
    }
  });
});
