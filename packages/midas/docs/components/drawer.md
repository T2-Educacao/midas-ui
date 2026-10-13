---
title: "Drawer"
description: "Painel lateral sobre um scrim para tarefas de apoio (filtrar, ver detalhes, editar, navegação) mantendo o contexto da página. Side right|left, largura 440 (320 em navegação), appearance solid|glass. No mobile prefira BottomSheet."
---

```tsx
import {
  Drawer,
  DrawerBody,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@t2-educacao/midas";
```

## Quando usar

Filtros, detalhes, edição rápida e navegação lateral em que a pessoa ainda precisa ver a página atrás.

## Quando não usar

Tarefa que exige atenção total ([Dialog](./dialog.md)); mobile ([BottomSheet](./bottom-sheet.md)).

## Anatomia

`DrawerHeader` (título `heading-sm`, subtítulo `caption`, fechar, borda inferior), `DrawerBody` (rolável, padding 24, gap 24), `DrawerFooter` (ação principal à direita, borda superior). Entra pela direita; a esquerda é para navegação.

## Props

### DrawerContent

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `side` | `"right" \| "left"` | `"right"` | Lado de entrada (RTL espelha automaticamente) |
| `width` | `"default" \| "navigation"` | `"default"` | 440px ou 320px |
| `appearance` | `"solid" \| "glass"` | `"solid"` | Glass só sobre mídia |
| `overlayClassName` | `string` | | Classes do scrim |

`DrawerHeader` aceita `showCloseButton` (padrão `true`). `drawerContentVariants` é exportado.

## Tipos do Figma (composições)

| Type | Montagem |
|---|---|
| Filters | `DrawerBody` com grupos de checkbox/chips/slider; footer "Limpar" + "Ver 12 cursos" (mostre o resultado no botão) |
| Details | Conteúdo rico + footer "Ver grade" / "Começar curso" |
| Form | `Field`s no body; footer Cancelar + Salvar |
| Navigation | `width="navigation"` `side="left"` com itens de menu |

## Exemplo

```tsx
<Drawer>
  <DrawerTrigger asChild>
    <Button variant="outline">Filtros</Button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Filtrar cursos</DrawerTitle>
      <DrawerDescription>12 resultados</DrawerDescription>
    </DrawerHeader>
    <DrawerBody>
      <Checkbox /> ...
    </DrawerBody>
    <DrawerFooter>
      <Button variant="ghost" className="me-auto">Limpar</Button>
      <Button variant="accent">Ver 12 cursos</Button>
    </DrawerFooter>
  </DrawerContent>
</Drawer>
```

## Acessibilidade

Foco preso, `Esc` e clique fora fecham, foco volta ao gatilho; `DrawerTitle` nomeia o painel.

## Não faça

- Empilhar drawers.
- Usar no mobile em vez do BottomSheet.
- Colocar duas ações principais no rodapé.

## Limitações

O raio de 20px do Figma usa `rounded-3xl` (18). Animação de entrada é fade/slide curto; respeita `motion-reduce`.
