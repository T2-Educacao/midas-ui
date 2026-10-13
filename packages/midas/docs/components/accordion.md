---
title: "Accordion"
description: "Agrupa conteúdo em seções que abrem e fecham (FAQ, grade do curso, configurações). Variantes faq, cards, filled, glass e module (lista de módulos); tom brand/neutral; ícone e meta no gatilho; single ou multiple."
---

```tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@t2-educacao/midas";
```

## Quando usar

- FAQs, grade do curso (módulos com progresso) e configurações longas.
- Por padrão um item aberto por vez (`type="single"`); em configurações pode permitir vários (`type="multiple"`).
- Na grade do curso, mostre progresso e deixe o módulo atual aberto (`defaultValue`).

## Não use

- Para esconder informação crítica (prazo, preço, erro) em item fechado.
- Para uma única região que abre e fecha (use Collapsible).
- Para alternar vistas do mesmo contexto (use Tabs).

## Uso

```tsx
<Accordion type="single" collapsible defaultValue="prazo">
  <AccordionItem value="prazo">
    <AccordionTrigger>Qual o prazo de acesso?</AccordionTrigger>
    <AccordionContent>O acesso dura 12 meses.</AccordionContent>
  </AccordionItem>
</Accordion>
```

## Anatomia

`Accordion` > `AccordionItem` > `AccordionTrigger` (ícone opcional, título, meta opcional em mono e chevron sempre à direita) + `AccordionContent`. Título em forma de pergunta ou nome claro da seção.

## Props

Baseado no [Accordion do Radix](https://www.radix-ui.com/primitives/docs/components/accordion). Todas as partes aceitam `className` (o seu vence) e `ref`.

### Accordion

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `type` | `"single" \| "multiple"` | | Obrigatório (Radix). `single` aceita `collapsible` |
| `variant` | `"faq" \| "cards" \| "filled" \| "glass" \| "module"` | `"faq"` | Aparência do Figma |
| `tone` | `"brand" \| "neutral"` | `"brand"` | Cor do chevron aberto: `selection-content` ou `content-primary` |
| `value` / `defaultValue` / `onValueChange` | | | Estado aberto (string ou array, conforme `type`) |

### AccordionTrigger

| Prop | Tipo | Descrição |
|---|---|---|
| `icon` | `ReactNode` | Ícone Tabler antes do título |
| `meta` | `ReactNode` | Texto curto em mono antes do chevron (ex.: "3 aulas") |
| `disabled` | `boolean` | Item desabilitado |

`AccordionItem` exige `value`. Também exportado: `accordionVariants`.

## Variantes

| Variante | Quando usar |
|---|---|
| `faq` | Perguntas frequentes: lista com divisores `border-subtle` |
| `cards` | Cada item num card (`surface-default`, `elevation-card`) |
| `filled` | Cada item com fundo `surface-muted` |
| `glass` | Sobre imagem ou aurora (vidro) |
| `module` | Lista de módulos do curso dentro de um contêiner único |

## Estados

Collapsed, Hover (`state-hover` nas variantes com contêiner), Expanded (chevron girado e colorido), Focus (borda 1px + halo 4px do `focus-ring`), Disabled (`content-disabled`).

## Exemplos

### Módulos do curso

```tsx
<Accordion type="single" collapsible variant="module" defaultValue="m2">
  <AccordionItem value="m2">
    <AccordionTrigger icon={<IconBook />} meta="8 aulas">Módulo 2 · Ética e regulação</AccordionTrigger>
    <AccordionContent>Lista de aulas do módulo.</AccordionContent>
  </AccordionItem>
</Accordion>
```

### Vários abertos

```tsx
<Accordion type="multiple" variant="cards" tone="neutral">...</Accordion>
```

## Acessibilidade

- O gatilho é um `button` dentro de um cabeçalho, com `aria-expanded` e `aria-controls` automáticos.
- Setas, `Home` e `End` navegam entre gatilhos; `Enter` e `Espaço` alternam.
- O chevron é decorativo (`aria-hidden`); a animação respeita `motion-reduce`.
- Variantes `glass` só sobre mídia, para manter contraste.

## Não faça

- Esconder informação crítica em item fechado.
- Aninhar Accordion dentro de Accordion.
- Cores soltas e `dark:`.
