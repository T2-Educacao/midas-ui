# Como criar um componente

Passo a passo para adicionar um componente ao Midas. Use o `Button` (`packages/midas/src/components/button`) como referência viva.

## 0. Pegue a referência no Figma

Com o MCP do Figma conectado ([guia](conectar-figma-mcp.md)), selecione o componente no Figma e peça ao agente o código/variáveis do nó. Anote: variantes, tamanhos, estados (hover, focus, disabled, erro), tokens usados. Se o componente usa um token que ainda não existe, crie o token primeiro (passo 2).

## 1. Crie a pasta

```
packages/midas/src/components/<nome>/
├─ <nome>.tsx
├─ <nome>.test.tsx
└─ index.ts
packages/midas/docs/components/<nome>.md
```

Nome em kebab-case na pasta (`dropdown-menu`), PascalCase no componente (`DropdownMenu`).

## 2. Tokens (se precisar)

Em `packages/midas/src/styles/theme.css`, adicione a variável nos **três** lugares:

1. `:root` (tema claro): `--midas-<nome>: <valor>;`
2. `.dark, [data-theme="dark"]` (tema escuro), se o valor muda no escuro;
3. `@theme inline`: `--color-<nome>: var(--midas-<nome>);` (ou `--radius-*`, `--font-*`...).

E documente o token em `packages/midas/docs/tema.md`.

## 3. Implemente

Checklist da API (todo componente):

- [ ] `React.forwardRef` + `displayName`
- [ ] aceita `className` e aplica com `cn(variants(...), className)`
- [ ] repassa `...props` para o elemento raiz
- [ ] `data-slot="<nome>"` no elemento raiz
- [ ] variantes com `cva`, exportadas como `<nome>Variants`, com `defaultVariants`
- [ ] `asChild` (via `Slot.Root` do `radix-ui`) se fizer sentido o componente "virar" outro elemento
- [ ] só classes de token, `focus-visible` visível, `motion-reduce:transition-none` em transições
- [ ] interativo complexo? use o primitivo do Radix (`import { Dialog } from "radix-ui"`)
- [ ] `"use client"` na primeira linha **só** se usa estado/efeito/contexto/Radix interativo
- [ ] **sem comentários no código** (nem JSDoc): nomes claros são a documentação; explicações vão no `.md` do componente

Componentes compostos (ex.: `Card`, `CardHeader`, `CardTitle`) ficam no mesmo arquivo e são todos exportados.

## 4. Exporte

- `src/components/<nome>/index.ts`: `export { Nome, type NomeProps, nomeVariants } from "./<nome>";`
- `src/index.ts`: reexporte a mesma coisa.

## 5. Teste

No mínimo:

- renderiza com o papel (role) correto;
- cada variante/tamanho aplica suas classes;
- `className` mescla (a do usuário vence);
- interação (clique, teclado) e estado desabilitado;
- `ref` encaminhada;
- `expectNoA11yViolations(container)`.

```bash
pnpm test
```

## 6. Documente

Crie `packages/midas/docs/components/<nome>.md` com este esqueleto e adicione o nome em `docs/components/meta.json`:

```md
---
title: Nome
description: Uma frase: o que é, variantes principais. (vai para o llms.txt)
---

\`\`\`tsx
import { Nome } from "@t2-educacao/midas";
\`\`\`

## Uso
## Props            (tabela: Prop | Tipo | Padrão | Descrição)
## Variantes        (tabela: Variante | Quando usar)
## Exemplos         (código copiável, casos reais)
## Acessibilidade
## Não faça
```

A `description` do frontmatter é o que agentes de IA leem primeiro: seja específico.

## 7. Exemplos no site de docs

Cada exemplo é um arquivo em `apps/docs/examples/<nome>/<exemplo>.tsx` com um `export default` (o código desse arquivo é o que aparece na aba "Código", então escreva como o dev vai copiar). Depois registre os exemplos em `apps/docs/examples/index.ts`, na chave do componente, com `id` (nome do arquivo), `title` e `description` opcional.

Confira em `pnpm dev`, nos temas claro e escuro.

## 8. Changeset e PR

Registre a mudança (escolha `minor` e descreva, ex.: "Adiciona componente Nome") e rode todas as verificações, que têm que passar inteiras:

```bash
pnpm changeset
pnpm check
```

Abra o PR.
