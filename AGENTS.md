# AGENTS.md: regras para agentes de IA neste repositório

Este repositório é o **Midas**, design system da T2 Educação, publicado como `@t2-educacao/midas`. Ele é consumido por vários projetos (site, hub, plataforma do aluno). Qualquer mudança aqui afeta todos eles: seja conservador com a API pública.

## Antes de começar

1. Leia `README.md` (estrutura e comandos) e `docs/decisoes/0001-arquitetura.md` (por que as coisas são como são).
2. Para criar ou alterar componente, siga `docs/guias/criar-componente.md` à risca.
3. Fontes da verdade (detalhes em `docs/decisoes/0002-tokens-e-componentes.md`):
   - **componentes, ícones, tipografia, espaçamento e raios**: o Figma do Midas (páginas de componentes, Icons e Design Tokens; ignore Cover, Foundation, Templates e a página Colors);
   - **cores**: as da hub (`hub-t2/styles/ds-globals.css`), já em `src/styles/theme.css`;
   - **fonte**: Geist e Geist Mono, como no site.
   Não use outros design systems da T2 como referência (design-skill, DS-T2 Clareza).

## Comandos

- `pnpm install`, `pnpm dev`, `pnpm test`, `pnpm lint`, `pnpm typecheck`
- `pnpm check` antes de considerar qualquer tarefa pronta. Tem que passar.

## Regras do código (packages/midas)

- **Stack:** React (18.2+ e 19), Radix UI (`radix-ui`), `class-variance-authority`, `tailwind-merge` via `cn()`, Tailwind v4. Nada de CSS-in-JS, nada de outras libs de UI.
- **Um componente por pasta:** `src/components/<nome>/{<nome>.tsx, <nome>.test.tsx, index.ts}` + `docs/components/<nome>.md`. Export no `src/index.ts`.
- **Estilo só com tokens:** classes como `bg-primary`, `text-muted-foreground`, `rounded-md`. Nunca hex, `rgb()`, valores arbitrários de cor (`bg-[#...]`) ou paleta padrão do Tailwind (`bg-blue-500`). Token novo vai em `src/styles/theme.css` (claro + escuro + `@theme`).
- **API padrão de todo componente:** aceita `className` (mesclado com `cn`, o do usuário vence), repassa `...props` ao elemento, encaminha `ref` com `React.forwardRef` (compatível com React 18), tem `displayName`, `data-slot="<nome>"`. Variantes via `cva`, exportadas (`<nome>Variants`). `asChild` quando fizer sentido.
- **Server Components:** só coloque `"use client"` no topo do arquivo se o componente usa estado, efeito, contexto ou Radix interativo. O build preserva a diretiva por arquivo.
- **Acessibilidade não é opcional:** use primitivos Radix para qualquer coisa interativa complexa (dialog, menu, select, tabs, tooltip...). Todo componente tem teste com `expectNoA11yViolations`.
- **Ícones:** Phosphor (padrão, de `@phosphor-icons/react/ssr` dentro do pacote) e Tabler (secundária). Consumidores importam de `@t2-educacao/midas/icons` e `@t2-educacao/midas/icons/tabler`.
- **Sem segredos, URLs internas, chamadas de API ou lógica de negócio.** O pacote é PÚBLICO no npm. Só UI.
- **Sem comentários no código** (nem JSDoc, nem em CSS). Nomes claros são a documentação; explicações vão no `.md`.
- **Português** em docs e mensagens de teste. Nomes de código (componentes, props) em inglês, como no ecossistema React.

## Documentação é parte da entrega

Um componente sem doc não está pronto. O `.md` do componente (formato em `docs/guias/criar-componente.md`) vai dentro do pacote npm e é o que agentes de IA nos projetos consumidores vão ler. Ele precisa ter: import, props (tabela), variantes com "quando usar", exemplos copiáveis, acessibilidade e "não faça".

## Versionamento

- Toda mudança no pacote que afeta quem usa precisa de um changeset: `pnpm changeset` (patch = correção, minor = novo componente/prop, major = quebra de API).
- Enquanto a versão for 0.x, quebras vão como minor, mas documente-as no changeset.
- Publicar é manual e só quem tem acesso à org `t2-educacao` no npm faz. Agentes de IA não publicam: siga `docs/guias/publicar-no-npm.md` só quando o usuário pedir.

## Não faça

- Não adicione dependência nova ao pacote sem justificar (vira dependência de todos os projetos da T2).
- Não mude nome de token, prop ou variante existente sem changeset `major`/aviso de quebra.
- Não edite `dist/`, `llms.txt` (gerado) nem `CHANGELOG.md` (gerado pelo changesets).
