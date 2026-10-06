---
title: "Accordion"
description: "Lista de seções que abrem e fecham (perguntas frequentes, detalhes). Modo single (um aberto por vez) ou multiple, com ícone CaretDown que gira."
---

```tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@t2-educacao/midas";
```

## Uso

```tsx
<Accordion type="single" collapsible>
  <AccordionItem value="prazo">
    <AccordionTrigger>Qual o prazo de acesso?</AccordionTrigger>
    <AccordionContent>O acesso dura 12 meses.</AccordionContent>
  </AccordionItem>
  <AccordionItem value="certificado">
    <AccordionTrigger>Recebo certificado?</AccordionTrigger>
    <AccordionContent>Sim, ao concluir o curso.</AccordionContent>
  </AccordionItem>
</Accordion>
```

## Props

Baseado no [Accordion do Radix](https://www.radix-ui.com/primitives/docs/components/accordion). Todas as partes aceitam `className`.

### Accordion

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `type` | `"single" \| "multiple"` | obrigatória | Um item aberto por vez ou vários |
| `collapsible` | `boolean` | `false` | Só em `single`: permite fechar o item aberto |
| `defaultValue` / `value` | `string` ou `string[]` | | Item(ns) abertos inicial / controlado |
| `onValueChange` | `(value) => void` | | Chamado ao mudar |
| `disabled` | `boolean` | `false` | Desabilita todos os itens |

### AccordionItem

| Prop | Tipo | Descrição |
|---|---|---|
| `value` | `string` | Identificador do item (obrigatório) |
| `disabled` | `boolean` | Desabilita este item |

`AccordionTrigger` é o botão com o título e o ícone; `AccordionContent` é o painel (o `className` vai no conteúdo interno).

## Variantes

| Modo | Quando usar |
|---|---|
| `type="single" collapsible` | Perguntas frequentes e seções independentes |
| `type="single"` | Quando sempre deve haver um item aberto |
| `type="multiple"` | Quando o usuário compara seções ao mesmo tempo |

## Exemplos

### Vários abertos

```tsx
<Accordion type="multiple" defaultValue={["modulo-1"]}>
  <AccordionItem value="modulo-1">
    <AccordionTrigger>Módulo 1</AccordionTrigger>
    <AccordionContent>Introdução e conceitos.</AccordionContent>
  </AccordionItem>
  <AccordionItem value="modulo-2">
    <AccordionTrigger>Módulo 2</AccordionTrigger>
    <AccordionContent>Prática guiada.</AccordionContent>
  </AccordionItem>
</Accordion>
```

## Acessibilidade

- Cada título é um `button` dentro de um heading, com `aria-expanded` e `aria-controls`.
- `Enter` e `Espaço` abrem e fecham; `Tab` percorre os títulos; setas, `Home` e `End` movem entre eles.
- O ícone é decorativo (`aria-hidden`). O componente não anima a altura; a rotação do ícone respeita `prefers-reduced-motion`.

## Não faça

- Esconder no Accordion informação essencial que todo mundo precisa ler.
- Usar Accordion para um único bloco: use [Collapsible](./collapsible.md).
- Aninhar Accordions em vários níveis.
