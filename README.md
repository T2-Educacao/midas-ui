<div align="center">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://t2.com.br/brand/horizontal-negativa.png">
  <img src="https://t2.com.br/brand/horizontal-padrao.png" alt="T2 Educação" width="420">
</picture>

# Midas UI

**Biblioteca de componentes React do Midas, o design system da T2 Educação**

[![React](https://img.shields.io/badge/React-18%20%7C%2019-61dafb?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![Next.js](https://img.shields.io/badge/Next.js-14%20a%2016-black?style=flat-square&logo=next.js&logoColor=white)](https://nextjs.org)
[![Tailwind](https://img.shields.io/badge/Tailwind-v4-06b6d4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Radix](https://img.shields.io/badge/Radix-UI-161618?style=flat-square&logo=radixui&logoColor=white)](https://www.radix-ui.com)
[![Phosphor](https://img.shields.io/badge/Phosphor-icons-3d2eff?style=flat-square)](https://phosphoricons.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178c6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)

</div>

---

## O que é

O Midas UI é o pacote npm **`@t2-educacao/midas`**: componentes React acessíveis, tokens de design com tema claro e escuro e ícones Phosphor, tudo numa única dependência. Um projeto novo da T2 instala **uma vez** e já tem o design system completo, igual em todos os produtos (site, hub, plataforma do aluno).

A fonte da verdade visual é o **Figma do Midas**. Este repositório não substitui a página pública de marca (`design-t2`) nem a skill de design (`design-skill`): ele é o **código** que os projetos instalam.

> Status: **pré-lançamento (0.x), ainda não publicado no npm**. Estrutura, build e docs prontos. Os valores dos tokens ainda são provisórios e os componentes serão construídos a partir do Figma. Veja o [roadmap](docs/roadmap.md).

### Como vai ser usado num projeto

Depois da primeira publicação no npm:

```bash
npm install @t2-educacao/midas
```

No CSS global do projeto (Tailwind v4):

```css
@import "tailwindcss";
@import "@t2-educacao/midas/theme.css";
```

Projeto em Tailwind v3 (ex.: hub): `import "@t2-educacao/midas/styles.css"` no layout raiz. Detalhes em [instalação](packages/midas/docs/instalacao.md).

```tsx
import { Button } from "@t2-educacao/midas";
import { ArrowRight } from "@t2-educacao/midas/icons";

<Button size="lg">Começar <ArrowRight /></Button>
```

### O que tem

| Entrada | O que entrega |
|---------|--------------|
| `@t2-educacao/midas` | Componentes React + utilitário `cn()` |
| `@t2-educacao/midas/icons` | Ícones Phosphor (funcionam em Server e Client Components) |
| `@t2-educacao/midas/theme.css` | Tokens para o Tailwind v4 do projeto (claro e escuro) |
| `@t2-educacao/midas/styles.css` | CSS já compilado para projetos em Tailwind v3 |
| `@t2-educacao/midas/docs/*` | Documentação em Markdown, na versão instalada |
| `@t2-educacao/midas/llms.txt` | Índice das docs para agentes de IA |

---

## Stack

```
React 18 | 19 + Radix UI     →  componentes acessíveis (teclado, foco, ARIA)
class-variance-authority      →  variantes tipadas (variant, size)
tailwind-merge (cn)           →  className do projeto vence sem conflito
Tailwind CSS v4 + CSS vars    →  tokens --midas-* com tema claro/escuro
Phosphor Icons                →  biblioteca de ícones oficial
tsdown (unbundle, ESM)        →  1 arquivo por componente, tree-shaking real
Vitest + Testing Library + axe → testes de comportamento e acessibilidade
Biome                         →  lint e formatação
Fumadocs (Next 16)            →  site de documentação + llms.txt
Changesets                    →  versionamento e CHANGELOG
```

---

## Estrutura

```
packages/midas/        →  O PACOTE publicado no npm (@t2-educacao/midas)
  src/components/        um componente por pasta: .tsx · .test.tsx · index.ts
  src/icons/             reexporta Phosphor
  src/styles/            theme.css (tokens) · styles.css (CSS compilado)
  docs/                  docs em Markdown: vão no npm e alimentam o site
apps/docs/             →  site de documentação (não publicado)
docs/                  →  docs internas: decisões e guias de manutenção
.changeset/            →  mudanças pendentes para a próxima versão
```

---

## Regras do projeto

As regras completas estão em [`AGENTS.md`](AGENTS.md) e nos guias de [`docs/`](docs). Resumo:

1. Só tokens do Midas: nada de hex, `rgb()`, `bg-[#...]` ou paleta padrão do Tailwind
2. Todo componente aceita `className`, encaminha `ref`, tem variantes com `cva` e teste de acessibilidade
3. `"use client"` só em componente com estado, efeito ou Radix interativo
4. Componente sem `.md` em `packages/midas/docs/components/` não está pronto
5. Toda mudança que afeta quem usa tem changeset (`pnpm changeset`)
6. O pacote é público: só UI, nunca segredo, URL interna ou lógica de negócio
7. Rode `pnpm check` antes de publicar

### Guias

| Guia | Quando ler |
|------|-----------|
| [Decisões de arquitetura](docs/decisoes/0001-arquitetura.md) | Entender por que cada ferramenta foi escolhida |
| [Tokens e componentes](docs/decisoes/0002-tokens-e-componentes.md) | De onde vêm cores, fontes, ícones e componentes |
| [Criar um componente](docs/guias/criar-componente.md) | Antes de adicionar ou alterar componente |
| [Publicar no npm](docs/guias/publicar-no-npm.md) | Primeira publicação e fluxo de versões |
| [Conectar o Figma (MCP)](docs/guias/conectar-figma-mcp.md) | Importar tokens e componentes do Figma |
| [Roadmap](docs/roadmap.md) | O que está pronto e o que vem a seguir |

---

## Rodar localmente

Requisitos: Node.js 24 (`.nvmrc`) e pnpm 10 (`corepack enable`).

```bash
pnpm install
pnpm dev
```

`pnpm dev` roda o pacote em modo watch e o site de docs em http://localhost:3000.

> Pare o `pnpm dev` antes de rodar `pnpm build` ou `pnpm check`: os dois usam a pasta `apps/docs/.next` e o build corrompe o cache do servidor de desenvolvimento (as páginas passam a dar 404). Se acontecer, apague `apps/docs/.next` e rode `pnpm dev` de novo.

| Comando | O que faz |
|---------|-----------|
| `pnpm dev` | Pacote em watch + site de docs |
| `pnpm build` | Build do pacote e do site |
| `pnpm test` | Testes do pacote |
| `pnpm lint` / `pnpm format` | Checa / corrige lint e formatação |
| `pnpm typecheck` | TypeScript em todos os workspaces |
| `pnpm check` | Tudo acima + validação do pacote. Rode antes de abrir PR |
| `pnpm changeset` | Registra uma mudança para a próxima versão |
