---
title: "Quote"
description: "Citação para falas, depoimentos, dicas e trechos normativos: Quote com tipos blockquote, pull-quote, testimonial, tip e citation, estilos plain, card e glass e tom brand ou neutral."
---

```tsx
import { Quote } from "@t2-educacao/midas";
```

## Quando usar

- Destacar falas, depoimentos e trechos de referência em aulas, páginas de curso e materiais.

## Tipos

| `type` (Figma) | Quando usar |
|---|---|
| `blockquote` | Fala de professor ou autor dentro do conteúdo |
| `pull-quote` | Frase de destaque centralizada, com ícone de aspas |
| `testimonial` | Depoimento de aluno; aceita `badge` (ex.: "Aprovada · CPA-20") |
| `tip` | Dica curta (até 3 linhas) ligada ao aula; `label` mostra "DICA DA PROFESSORA" |
| `citation` | Texto normativo; fonte em mono (`source`) e link para o documento (`href`) |

## Props

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `type` | `"blockquote" \| "pull-quote" \| "testimonial" \| "tip" \| "citation"` | `"blockquote"` | |
| `surface` | `"plain" \| "card" \| "glass"` | `"plain"` | Figma `Style` (renomeada para não colidir com o atributo HTML `style`). Glass só sobre mídia |
| `tone` | `"brand" \| "neutral"` | `"brand"` | Cor do traço lateral e do fundo da dica |
| `author`, `authorRole` | `ReactNode` | | Quem disse (sempre informe) |
| `source` | `ReactNode` | | Fonte (citation), em JetBrains Mono |
| `href`, `linkLabel` | `string`, `ReactNode` | `"Ler o documento"` | Link da citação |
| `label` | `ReactNode` | | Overline (ex.: DICA DA PROFESSORA) |
| `avatar`, `badge` | `ReactNode` | | Avatar do autor e selo de resultado |
| `cite` | `string` | | URL da fonte no `<blockquote cite>` |

Renderiza `<figure>` com `<blockquote>` e `<figcaption>`. Exporta `quoteVariants`.

## Exemplos

```tsx
<Quote author="Ana Lima" authorRole="Professora · Fundos de investimento">
  Estudar 25 minutos por dia vence uma maratona de fim de semana.
</Quote>

<Quote type="testimonial" surface="card" author="Mariana Ribeiro" badge={<Badge>Aprovada · CPA-20</Badge>}>
  Os simulados eram iguais à prova.
</Quote>

<Quote type="citation" source="Resolução CVM 175, art. 2" href="https://www.gov.br/cvm">
  Os fundos de investimento serão constituídos sob a forma de condomínio.
</Quote>
```

## Acessibilidade

- Semântica nativa `figure`/`blockquote`/`figcaption`; ícone de aspas é decorativo.
- Links têm foco visível e texto descritivo.

## Não faça

- Não publique citação sem autor ou fonte.
- Depoimentos devem ser de alunos reais, com nome e resultado verificável: nunca inventados.
- Não use `tip` com mais de 3 linhas.
- Não use `glass` sem imagem atrás.
