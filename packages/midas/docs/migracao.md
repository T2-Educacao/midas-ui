---
title: "Migração para o Midas"
description: "Comportamentos do Midas que surpreendem quem troca componentes locais (shadcn, <button> cru): Button, Input, Tooltip, Dialog, Card, Combobox, Tailwind v3 e o que fazer em cada caso."
---

Guia para quem está trocando componentes locais, `<button>`/`<input>` crus ou cópias do shadcn pelo Midas. Cada item é uma diferença que já pegou alguém desprevenido.

## Formulários

| O que muda | O que fazer |
|---|---|
| `Button` vem com `type="button"` (o `<button>` cru é `submit`) | Passe `type="submit"` nos botões que enviam formulário |
| `Button loading` desabilita o botão; em botão só de ícone mostra só o spinner | Não precisa esconder o ícone manualmente |
| `Input type="date"` e `datetime-local` já limitam o ano (1900 a 2100) | Passe `min`/`max` próprios se precisar de outro intervalo |
| `NativeSelect` tem a largura do conteúdo | Use `fullWidth` para ocupar a linha toda |
| `Combobox` ignora acentos na busca | Nada; remova filtros próprios de normalização |
| `Combobox` mostra a descrição do selecionado só com `showSelectedDescription` (modo `trigger="button"`) | Ligue a prop quando o rótulo sozinho for ambíguo |

## Sobreposição e layout

| O que muda | O que fazer |
|---|---|
| `DialogContent` tem largura máxima de 448px | Passe `max-w-2xl` (ou outra) em `className`; funciona sem prefixo `sm:` |
| `Dialog` fundo escuro fixo | Use `overlayClassName` |
| `Card` tem `py-4` e `overflow-hidden` | Passe `overflow-visible py-0` quando o conteúdo precisa vazar |
| Overlays e popups em `z-50` | Sobrescreva `--midas-z-overlay` e `--midas-z-popup` |
| `Tooltip` em botão `disabled` | Nada: o `TooltipTrigger asChild` envolve sozinho o botão desabilitado |
| `Tooltip` do Midas e do recharts têm o mesmo nome | Importe `MidasTooltip` ou renomeie o do recharts |

## Projetos com Tailwind v3

Use o Caminho B da [instalação](./instalacao.md), incluindo o preset do Tailwind. O `styles.css` já vem sem `@layer` e com `transform` no formato do v3.

## Equivalentes que antes não existiam

| Precisava de | Use |
|---|---|
| Switch | `Switch` |
| Abas | `Tabs` |
| Seção que abre e fecha | `Collapsible` ou `Accordion` |
| Slider | `Slider` |
| Aviso em bloco | `Alert` |
| Tag removível | `Chip` |
| Escolha única sem desmarcar | `SegmentedControl` |
| Card de opção selecionável | `ChoiceCardGroup` e `ChoiceCard` |
| Badge ou botão de atenção/informação | `variant="warning"` e `variant="info"` |
| Cor por série no `Progress` | `variant` ou `indicatorClassName` |
| Avatar de tamanho livre | `size={56}` |
| Avatar com cor por nome | `<AvatarFallback colorFrom={nome}>` |
| Tabela com cabeçalho ordenável | `Table` e `TableHead sortable` |
| Linha ou card clicável | `ListItem` |
| Menu lateral | `Sidebar` e `NavItem` |
| Breadcrumb e passos | `Breadcrumb` e `Stepper` |
| Carregando e lista vazia | `Skeleton` e `EmptyState` |
| Upload de arquivo | `FileUpload` |
| Título editável sem borda | `Textarea bare autoGrow` |
| Cores de série para gráficos | `chart-1` a `chart-8` |
| Botão com texto de carregamento | `Button loadingText` |
| Badge pequeno, grande ou com ícone | `Badge size icon` |
