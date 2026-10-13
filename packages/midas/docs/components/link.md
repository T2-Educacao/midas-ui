---
title: "Link"
description: "Texto clicável que leva a outra página ou recurso (Figma Link). Variantes inline, standalone e subtle; tamanhos sm, md, lg; tons brand, neutral e media; ícone de nova aba; estados hover, focus, visited e disabled."
---

```tsx
import { Link } from "@t2-educacao/midas";
```

## Quando usar

Para **navegar** a outra página ou recurso. Para executar uma ação (salvar, enviar) use [Button](./button.md). Não use para ações destrutivas nem envio de formulário.

## Regras

- O texto diz para onde vai ("Ver grade do curso"), nunca "clique aqui".
- `inline` fica dentro de parágrafos e é sempre sublinhado; `standalone` e `subtle` sublinham só no hover.
- Links externos usam `external` (abre em nova aba, mostra o ícone e avisa leitores de tela).
- Sobre imagens e Heroes use `tone="media"`.

## Uso

```tsx
<p>
  Leia o <Link href="/regulamento" external>regulamento da ANBIMA</Link> e confira o edital.
</p>
<Link href="/cursos" variant="standalone">Ver todos os cursos</Link>
<Link href="/termos" variant="subtle" tone="neutral">Termos de uso</Link>
```

## Props

Aceita todas as props de `<a>` mais:

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `variant` | `"inline" \| "standalone" \| "subtle"` | `"inline"` | Forma do link |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | 14, 16 e 18px (inline) |
| `tone` | `"brand" \| "neutral" \| "media"` | `"brand"` | Cyan, texto neutro ou claro sobre mídia |
| `external` | `boolean` | `false` | `target="_blank"`, `rel="noopener noreferrer"`, ícone de abrir e texto para leitor de tela |
| `showIcon` | `boolean` | `true` em `standalone` ou `external` | Mostra o ícone |
| `icon` | `ReactNode` | | Ícone Tabler próprio no lugar do padrão |
| `disabled` | `boolean` | `false` | Remove o `href`, aplica `aria-disabled` e `text-content-disabled` |
| `asChild` | `boolean` | `false` | Aplica o estilo ao filho (ex.: `next/link`); ícones não são adicionados |
| `className` | `string` | | Classes extras (as suas vencem) |

## Variantes

| Variante | Quando usar |
|---|---|
| `inline` | Dentro de parágrafos, sempre sublinhado |
| `standalone` | Ação isolada com seta (a seta vira no RTL e avança no hover) |
| `subtle` | Rodapés, metadados e listas densas, peso medium |

Tons: `brand` para ações principais, `neutral` (o visitado fica em `content-secondary`) para conteúdo, `media` sobre imagens.

## Estados

Default, hover, focus (borda 1px + halo de 4px), visited e disabled.

## Com Next.js

```tsx
import NextLink from "next/link";

<Link asChild variant="standalone">
  <NextLink href="/cursos">Ver cursos</NextLink>
</Link>
```

## Acessibilidade

- Usa `<a>` nativo; foco visível com `focus-ring`.
- `external` acrescenta "(abre em nova aba)" só para leitores de tela.
- Link desabilitado fica sem `href` e com `aria-disabled="true"`.
- O sublinhado (ou ícone) garante que o link não dependa só da cor.

## Não faça

- "Clique aqui" como texto.
- Link para ação (`onClick` sem `href`): use Button.
- Link inline sem sublinhado.
