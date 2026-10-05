# Roadmap e pendências

## Pronto (setup, 2026-09-29)

- [x] Monorepo pnpm: `packages/midas` (pacote) + `apps/docs` (site)
- [x] Build tree-shakeable (tsdown, 1 arquivo por módulo, ESM, tipos)
- [x] Tokens com tema claro/escuro (`theme.css` p/ Tailwind v4, `styles.css` compilado)
- [x] Ícones Phosphor reexportados em `@t2-educacao/midas/icons`
- [x] `Button` como componente de referência (API, testes, doc)
- [x] Testes (Vitest + Testing Library + axe), lint (Biome), validação do pacote (publint + attw)
- [x] Docs no pacote + `llms.txt` + site Fumadocs com `llms.txt`/`llms-full.txt`
- [x] Versionamento com Changesets (publicação manual)
- [x] Organização `t2-educacao` criada no npm

## Próximos passos

1. [x] Repositório `T2-Educacao/midas-ui` no GitHub
2. [ ] Primeira publicação no npm, versão `0.1.0` ([guia](guias/publicar-no-npm.md))
3. [x] Tokens do Figma (tipografia, espaçamento, raios) + cores da hub + fonte do site
4. [x] Lote 1: Button, ButtonGroup, Spinner, Kbd, Toggle, ToggleGroup, Tooltip
5. [x] Lote 2: Input, InputGroup, Field, Badge, Combobox
6. [x] Lote 3: DropdownMenu, Popover, Toast
7. [x] Lote 4: Avatar, Pagination, Carousel, Calendar, DatePicker
8. [x] Lote 5: Questionnaire
9. [x] Componentes de apoio: Card, Dialog, Progress, Select, NativeSelect, Checkbox, RadioGroup, Textarea, Separator
10. [x] Site de docs com a cara da T2 e exemplos ao vivo (preview, código, copiar)
11. [ ] Deploy do site de docs na Vercel ([guia](guias/publicar-docs.md))
12. [x] Exemplo de DatePicker com linguagem natural em português, suporte a RTL e todos os exemplos do Figma

## Decisões pendentes

- [x] **Biblioteca de ícones secundária**: Tabler (`@t2-educacao/midas/icons/tabler`)
- [ ] **Licença**: está MIT. Confirmar com a T2 (MIT permite que qualquer pessoa reutilize o código; a marca T2 continua protegida)
- [x] **Repositório no GitHub**: `T2-Educacao/midas-ui`
- [ ] Adoção na hub (Next 14 + Tailwind v3): usar `styles.css` e remover tokens shadcn antigos, ou migrar para Tailwind v4
