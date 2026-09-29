# Roadmap e pendências

## Pronto (setup, 2026-09-29)

- [x] Monorepo pnpm: `packages/midas` (pacote) + `apps/docs` (site)
- [x] Build tree-shakeable (tsdown, 1 arquivo por módulo, ESM, tipos)
- [x] Tokens com tema claro/escuro (`theme.css` p/ Tailwind v4, `styles.css` compilado)
- [x] Ícones Phosphor reexportados em `@t2-educacao/midas/icons`
- [x] `Button` como componente de referência (API, testes, doc)
- [x] Testes (Vitest + Testing Library + axe), lint (Biome), validação do pacote (publint + attw)
- [x] Docs no pacote + `llms.txt` + site Fumadocs com `llms.txt`/`llms-full.txt`
- [x] CI e release (Changesets + GitHub Actions + trusted publishing)
- [x] Organização `t2-educacao` criada no npm

## Próximos passos

1. [x] Repositório `T2-Educacao/midas-ui` no GitHub
2. [ ] Primeira publicação manual + configurar trusted publishing ([guia](guias/publicar-no-npm.md))
3. [ ] Conectar o MCP do Figma ([guia](guias/conectar-figma-mcp.md))
4. [ ] Importar os tokens do Figma (cores claro/escuro, tipografia, raios, espaçamento, sombras) e substituir os valores provisórios
5. [ ] Definir a fonte oficial e como distribuí-la (via `next/font` no projeto, ou arquivos no pacote)
6. [ ] Refazer o `Button` conforme o Figma
7. [ ] Lista de componentes do Figma, priorizada (sugestão de ordem: Input, Label, Textarea, Checkbox, Switch, Select, Card, Badge, Dialog, Tooltip, Tabs, Dropdown Menu, Toast, Avatar, Skeleton)
8. [ ] Previews vivos dos componentes no site de docs
9. [ ] Deploy do site de docs (ex.: Vercel)

## Decisões pendentes

- [ ] **Biblioteca de ícones secundária**: qual é e para quê (a design vai passar)
- [ ] **Licença**: está MIT. Confirmar com a T2 (MIT permite que qualquer pessoa reutilize o código; a marca T2 continua protegida)
- [x] **Repositório no GitHub**: `T2-Educacao/midas-ui`
- [ ] Adoção na hub (Next 14 + Tailwind v3): usar `styles.css` e remover tokens shadcn antigos, ou migrar para Tailwind v4
