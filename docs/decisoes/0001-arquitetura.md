# 0001: Arquitetura do Midas

- **Data:** 2026-09-29
- **Status:** aceita
- **Contexto:** a design criou um design system novo (Midas) no Figma. A T2 tem vários projetos React/Next (site, blog, lps, faq, docs, questoes, plataforma do aluno, hub) e quer que todos compartilhem os mesmos componentes, tokens e ícones, instalando uma única dependência.

## Objetivo

Um pacote npm, `@t2-educacao/midas`, que um projeto novo instala **uma vez** para ter o design system completo. Requisitos:

1. **Simples de usar:** um `npm install`, um import de CSS.
2. **Leve:** o projeto só carrega o que usa.
3. **Padronizado, mas ajustável:** visual consistente por padrão, com espaço para ajustes (`className`, variantes, `asChild`).
4. **Tema claro e escuro.**
5. **Muito bem documentado**, inclusive para agentes de IA, que a T2 usa bastante.

## Decisões

### D1. Pacote npm clássico (e não registry estilo shadcn)

Opções consideradas: (A) pacote npm clássico, (B) registry com CLI que copia código para o projeto (modelo shadcn), (C) híbrido.

**Escolhido: A.** Com B, cada projeto edita sua cópia e as versões se afastam em poucos meses; correções não se espalham. A preocupação de performance do B é resolvida no A com tree-shaking (D4). Customização é resolvida com `className` + `tailwind-merge`, variantes e `asChild` (D3).

### D2. Um pacote só, com os ícones inclusos

Opções: um pacote vs. vários (`/tokens`, `/icons`, `/react`). **Escolhido: um pacote.** A T2 só usa React; separar seria complexidade sem uso. Subcaminhos (`@t2-educacao/midas/icons`, `/theme.css`, `/styles.css`) dão a organização sem múltiplas versões. Separar no futuro é possível sem quebrar quem usa.

Ícones: **Phosphor** (`@phosphor-icons/react`) como dependência do Midas, reexportado em `@t2-educacao/midas/icons` a partir da build SSR (funciona em Server e Client Components). Uma segunda biblioteca de ícones pode ser adicionada depois (ver roadmap).

### D3. React + Radix UI + CVA + tailwind-merge + Tailwind v4

Mesmo modelo do shadcn/ui, já conhecido pelo time (a hub usa essas libs) e muito bem conhecido por agentes de IA.

- **Radix UI** (`radix-ui`): acessibilidade, teclado e foco de componentes interativos.
- **CVA**: variantes tipadas (`variant`, `size`).
- **tailwind-merge** via `cn()`: `className` do usuário vence em conflito.
- **Tailwind v4 + variáveis CSS**: tokens como `--midas-*`, mapeados para classes semânticas (`bg-primary`).

### D4. Build com tsdown, sem bundle (1 arquivo por módulo), ESM

`tsdown` com `unbundle: true`: cada componente vira um arquivo em `dist/`. Resultado: tree-shaking real (`sideEffects` só para CSS) e `"use client"` preservado por arquivo, então componentes sem estado funcionam como Server Components. Tipos (`.d.ts`) gerados junto. Somente ESM: todos os projetos são Next/bundlers modernos.

### D5. Duas formas de entregar o CSS

- `theme.css` para projetos com **Tailwind v4**: registra os tokens no Tailwind do projeto e aponta `@source` para o `dist` do Midas. O projeto gera só as classes usadas e pode usar os tokens no próprio código.
- `styles.css` compilado para projetos com **Tailwind v3** (ex.: hub em Next 14). Sem preflight, em `@layer`.

**Risco conhecido:** em Tailwind v3 com tokens shadcn antigos (`bg-primary` com outra cor), as classes do projeto (fora de layer) vencem as do Midas. Mitigação: remover tokens antigos equivalentes ao adotar o Midas, ou migrar para Tailwind v4. Documentado em `instalacao.md`.

### D6. Tema claro padrão, escuro via `.dark` / `data-theme="dark"`

Tokens em `:root` (claro) e `.dark, [data-theme="dark"]` (escuro). A variante `dark:` do Tailwind segue a mesma regra. Compatível com `next-themes` (`attribute="class"`). Variáveis com prefixo `--midas-` para não colidir com variáveis existentes nos projetos.

### D7. Documentação: Markdown dentro do pacote + site Fumadocs

- **Fonte única:** `packages/midas/docs/**/*.md`, publicada **dentro do pacote npm**. Agentes de IA no projeto consumidor leem `node_modules/@t2-educacao/midas/docs` na versão exata instalada, sem internet.
- `llms.txt` gerado no build, com o índice das docs.
- **Site** (`apps/docs`, Next 16 + Fumadocs) lê a mesma pasta e gera busca, `llms.txt`, `llms-full.txt` e versão `.md` de cada página.
- Docs internas de manutenção (decisões, guias de publicação) em `/docs`, fora do pacote.
- Storybook fica fora por ora (ruim para IA, custo de manutenção). Pode entrar depois para a design.

### D8. Qualidade: Vitest + Testing Library + axe, Biome, publint + attw

- Todo componente tem testes de comportamento e de acessibilidade (axe).
- **Biome** para lint e formatação (uma ferramenta só, rápida).
- **publint** e **are-the-types-wrong** validam o pacote antes de publicar (exports e tipos corretos).

### D9. Versionamento com Changesets, publicação pelo GitHub Actions

- Quem muda o pacote registra a mudança com `pnpm changeset`.
- O workflow `release.yml` abre um PR de versão com o CHANGELOG. O merge desse PR publica no npm e cria a tag.
- A publicação usa trusted publishing (OIDC): nenhum token do npm fica guardado no GitHub, e cada versão mostra de qual commit saiu.
- O `ci.yml` roda `pnpm check` em todo PR e push na `main`.
- A primeira versão (0.1.0) foi publicada manualmente; a publicação manual fica só para emergência.

### D10. Público no npm

O pacote é público (grátis, sem token para instalar). Seguro porque contém **só UI**: nenhuma chave, URL interna, chamada de API ou lógica de negócio (regra no `AGENTS.md`). Licença MIT (a confirmar com a T2).

### D11. Compatibilidade

`peerDependencies`: `react` e `react-dom` `^18.2.0 || ^19.0.0`. Componentes usam `forwardRef` (necessário no React 18). Alvo: Next 14 (hub) a 16 (site, plataforma do aluno).

## Fora de escopo (por enquanto)

Vue/Flutter/React Native; CLI de cópia estilo shadcn; Storybook; temas por produto além de sobrescrever tokens.
