import { existsSync, readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
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
        .replace(/^["']|["']$/g, "")
        .replace(/\\"/g, '"');
  }
  return data;
}

const body = (source) => source.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, "").trim();

function exportsOf(name) {
  const index = join("src", "components", name, "index.ts");
  if (!existsSync(index)) return [];
  const source = readFileSync(index, "utf8");
  const names = [];
  for (const block of source.matchAll(/export\s*\{([\s\S]*?)\}/g)) {
    for (const item of block[1].split(",")) {
      const clean = item.trim().replace(/^type\s+/, "");
      if (clean && !item.trim().startsWith("type ")) names.push(clean.split(/\s+as\s+/).pop());
    }
  }
  return names;
}

const entries = walk(docsDir)
  .sort((a, b) => a.localeCompare(b))
  .map((file) => {
    const source = readFileSync(file, "utf8");
    const { title, description } = frontmatter(source);
    const path = relative(".", file).replaceAll("\\", "/");
    return { path, title: title ?? path, description: description ?? "", source };
  });

const guides = entries.filter((e) => !e.path.startsWith("docs/components/"));
const components = entries.filter((e) => e.path.startsWith("docs/components/"));
const line = (e) => `- [${e.title}](node_modules/${pkg.name}/${e.path}): ${e.description}`;

const rules = [
  "Use só os componentes do Midas: nada de `<button>`, `<input>`, `<select>` ou modais caseiros.",
  "Estilo só com tokens semânticos (`bg-surface-default`, `text-content-secondary`, `border-border-default`, `bg-action-accent-bg`...). Nunca hex, `rgb()`, valores arbitrários de cor nem a paleta padrão do Tailwind (`bg-blue-500`).",
  "Não use `dark:`: o tema (Light, Dark, Dark Blue) troca pelos tokens. Defina o tema com `data-theme` ou a classe `dark` no `<html>`.",
  "Ícones: só Tabler, importados de `@t2-educacao/midas/icons` (`IconArrowRight`).",
  "Classes lógicas para RTL (`ps`/`pe`, `ms`/`me`, `start`/`end`), nunca `pl`/`pr`/`left`/`right`.",
  "Todo componente aceita `className` (a sua vence), `ref` e as props do elemento. Variantes via `<nome>Variants`.",
  "Antes de usar um componente, leia o `.md` dele: tem quando usar, quando não usar, props, exemplos e acessibilidade.",
];

const llms = `# ${pkg.name}

> ${pkg.description}

Versão: ${pkg.version}. Todas as docs abaixo estão dentro do pacote instalado (node_modules/${pkg.name}/docs).

Arquivos para agentes de IA no pacote: \`llms.txt\` (este índice), \`llms-full.txt\` (todas as docs em um arquivo só) e \`components.json\` (manifesto: nome, descrição, imports e caminho da doc de cada componente).

## Regras para quem gera UI com o Midas

${rules.map((r, i) => `${i + 1}. ${r}`).join("\n")}

## Guias

${guides.map(line).join("\n")}

## Componentes (${components.length})

${components.map(line).join("\n")}
`;

const full = `# ${pkg.name} ${pkg.version}: documentação completa

> ${pkg.description}

Este arquivo reúne todas as docs do pacote em Markdown. Índice curto em llms.txt.

## Regras para quem gera UI com o Midas

${rules.map((r, i) => `${i + 1}. ${r}`).join("\n")}

${entries.map((e) => `\n---\n\n<!-- ${e.path} -->\n\n${body(e.source)}\n`).join("")}`;

const manifest = {
  name: pkg.name,
  version: pkg.version,
  description: pkg.description,
  docs: `node_modules/${pkg.name}/docs`,
  rules,
  guides: guides.map((e) => ({ title: e.title, description: e.description, doc: e.path })),
  components: components.map((e) => {
    const name = e.path.replace("docs/components/", "").replace(/\.md$/, "");
    const exported = exportsOf(name);
    return {
      name,
      title: e.title,
      description: e.description,
      doc: e.path,
      exports: exported,
      import: exported.length ? `import { ${exported.join(", ")} } from "${pkg.name}";` : null,
    };
  }),
};

writeFileSync("llms.txt", llms);
writeFileSync("llms-full.txt", full);
writeFileSync("components.json", `${JSON.stringify(manifest, null, 2)}\n`);
console.log(
  `llms.txt, llms-full.txt e components.json gerados com ${entries.length} documentos (${components.length} componentes).`,
);
