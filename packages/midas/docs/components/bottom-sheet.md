---
title: "BottomSheet"
description: "Folha que sobe do rodapé no mobile para conteúdo complementar, listas, ações e formulários curtos. Sempre com alça, cantos superiores arredondados, scrim atrás e ação principal em largura total. height auto|half|full, appearance solid|glass|liquid."
---

```tsx
import {
  BottomSheet,
  BottomSheetBody,
  BottomSheetClose,
  BottomSheetContent,
  BottomSheetDescription,
  BottomSheetFooter,
  BottomSheetHeader,
  BottomSheetTitle,
  BottomSheetTrigger,
} from "@t2-educacao/midas";
```

## Quando usar

Mobile: conteúdo complementar (Content), escolha em lista (List), menu de ações (Actions) e formulário curto (Form).

## Quando não usar

Desktop (use [Popover](./popover.md), [DropdownMenu](./dropdown-menu.md) ou [Drawer](./drawer.md)); decisão crítica ([Modal](./modal.md)).

## Props (`BottomSheetContent`)

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `height` | `"auto" \| "half" \| "full"` | `"auto"` | Altura: conteúdo, 50dvh ou tela cheia |
| `appearance` | `"solid" \| "glass" \| "liquid"` | `"solid"` | Glass/Liquid só sobre imagem. Liquid é aproximação do liquid glass (sem refração real) |
| `overlayClassName` | `string` | | Scrim |

Partes: `BottomSheetHeader` (título + botão X redondo; `showCloseButton`), `BottomSheetTitle`, `BottomSheetDescription`, `BottomSheetBody` (rolável), `BottomSheetFooter` (botões em largura total, altura 48). `bottomSheetContentVariants` é exportado.

## Exemplos

```tsx
<BottomSheet>
  <BottomSheetTrigger asChild>
    <Button>Editar meta</Button>
  </BottomSheetTrigger>
  <BottomSheetContent aria-describedby={undefined}>
    <BottomSheetHeader>
      <BottomSheetTitle>Editar meta</BottomSheetTitle>
    </BottomSheetHeader>
    <BottomSheetBody>
      <Field>
        <FieldLabel htmlFor="meta">Nome da meta</FieldLabel>
        <Input id="meta" defaultValue="Reserva de emergência" />
      </Field>
    </BottomSheetBody>
    <BottomSheetFooter>
      <BottomSheetClose asChild>
        <Button variant="accent">Salvar</Button>
      </BottomSheetClose>
    </BottomSheetFooter>
  </BottomSheetContent>
</BottomSheet>
```

Lista de ações (Actions): itens como `Button variant="ghost"` dentro do `BottomSheetBody`, o destrutivo por último com `variant="destructive"` e "Cancelar" no footer.

## Acessibilidade

Foco preso, `Esc`/clique fora/X fecham; título nomeia a folha. Ação destrutiva com texto explícito. Alvos de 48px.

## Não faça

- Usar no desktop como substituto de modal.
- Esconder o X.

## Limitações

Arrastar para baixo para fechar não está implementado (use X, toque fora ou `Esc`).
