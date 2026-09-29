import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join, relative } from "node:path";

const docsDir = "docs";
const pkg = JSON.parse(readFileSync("package.json", "utf8"));

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) return walk(path);
    return path.endsWith(".md") ? [path] : [];
  });
}

function frontmatter(source) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  const data = {};
  for (const line of match?.[1].split(/\r?\n/) ?? []) {
    const [key, ...rest] = line.split(":");
    if (key && rest.length)
      data[key.trim()] = rest
        .join(":")
        .trim()
        .replace(/^["']|["']$/g, "");
  }
  return data;
}

const entries = walk(docsDir)
  .sort((a, b) => a.localeCompare(b))
  .map((file) => {
    const { title, description } = frontmatter(readFileSync(file, "utf8"));
    const path = relative(".", file).replaceAll("\\", "/");
    return { path, title: title ?? path, description: description ?? "" };
  });

const guides = entries.filter((e) => !e.path.startsWith("docs/components/"));
const components = entries.filter((e) => e.path.startsWith("docs/components/"));
const line = (e) => `- [${e.title}](node_modules/${pkg.name}/${e.path}): ${e.description}`;

const output = `# ${pkg.name}

> ${pkg.description}

Versão: ${pkg.version}. Todas as docs abaixo estão dentro do pacote instalado (node_modules/${pkg.name}/docs).
Antes de criar UI em um projeto da T2, leia "Guia para agentes de IA" e o .md do componente que for usar.

## Guias

${guides.map(line).join("\n")}

## Componentes

${components.map(line).join("\n")}
`;

writeFileSync("llms.txt", output);
console.log(`llms.txt gerado com ${entries.length} documentos.`);
