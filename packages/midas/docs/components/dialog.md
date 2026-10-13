---
title: "Dialog"
description: "Janela modal sobre a página (base de Modal, Modal Form e Modal Overlay do Figma). DialogContent com Style (solid | glass), tamanhos sm/md/lg/xl (400, 520, 720, 960) e Device (responsive, desktop, mobile: no mobile vira bottom sheet com alça). Scrim com blur opcional. Para modais prontos (confirmar, sucesso, erro, status, permissão, compartilhar) veja Modal."
---

```tsx
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@t2-educacao/midas";
```

## Quando usar

- Decisão ou aviso que interrompe o fluxo (confirmar, salvar, formulário curto).
- Modal Form: formulário em janela (`size` sm 400, md 520, lg 720, xl 960).

## Quando não usar

- Mensagem que não exige ação: use [Toast](./toast.md).
- Tarefa de apoio em que a pessoa precisa ver a página: use [Drawer](./drawer.md).
- Conteúdo curto com ação perto do gatilho: use [Popover](./popover.md).
- Mobile com conteúdo complementar: use [BottomSheet](./bottom-sheet.md).

## Anatomia

Scrim (`bg-material-scrim-bg`, mais forte no Dark, com blur 8) + superfície (`overlay-surface`, borda `border-subtle`, `elevation-modal`, raio grande) com `DialogHeader` (título `heading-md` + descrição `body-md`), conteúdo, `DialogFooter` (ações; no mobile em coluna, principal em cima) e botão fechar.

## Props

### DialogContent

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `appearance` | `"solid" \| "glass"` | `"solid"` | Style do Figma. Glass (blur 40) só sobre mídia/telas coloridas |
| `size` | `"sm" \| "md" \| "lg" \| "xl"` | `"md"` | Largura máxima 400 / 520 / 720 / 960 |
| `device` | `"responsive" \| "desktop" \| "mobile"` | `"responsive"` | `responsive` centraliza no desktop e vira bottom sheet abaixo de `sm`; `desktop` sempre centralizado; `mobile` sempre no rodapé |
| `blur` | `boolean` | `true` | Blur do scrim (Modal Scrim `Blur`) |
| `showCloseButton` | `boolean` | `true` | Botão X |
| `overlayClassName` | `string` | | Classes do scrim |
| `className` | `string` | | Mesclada (a sua vence) |

`dialogContentVariants` e `dialogOverlayVariants` são exportados. O scrim sozinho é o `DialogOverlay` (Modal Scrim).

## Componentes

| Componente | O que é |
|---|---|
| `Dialog` | Raiz (`open`, `defaultOpen`, `onOpenChange`) |
| `DialogTrigger` | Abre (use `asChild`) |
| `DialogContent` | A janela |
| `DialogHeader` / `DialogTitle` / `DialogDescription` | Cabeçalho; o título dá nome ao diálogo |
| `DialogFooter` | Linha de ações (direita no desktop, coluna no mobile) |
| `DialogClose` | Fecha |

## Exemplos

```tsx
<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">Editar perfil</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Editar perfil</DialogTitle>
      <DialogDescription>Altere seus dados e salve.</DialogDescription>
    </DialogHeader>
    <Field>
      <FieldLabel htmlFor="nome">Nome</FieldLabel>
      <Input id="nome" defaultValue="Ana Souza" />
    </Field>
    <DialogFooter>
      <DialogClose asChild>
        <Button variant="secondary" size="lg">Cancelar</Button>
      </DialogClose>
      <Button variant="accent" size="lg">Salvar</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

Modal Form grande com vidro:

```tsx
<DialogContent size="lg" appearance="glass">...</DialogContent>
```

## Acessibilidade

- Foco preso dentro do modal; `Esc` fecha; o foco volta ao gatilho.
- `DialogTitle` é obrigatório (pode ficar `sr-only`). Descrição ligada por `aria-describedby`.
- Ação destrutiva com texto claro ("Excluir"), nunca só cor. Mobile: alvo de 48px (botões `xl`).

## Não faça

- Abrir modal dentro de modal.
- Usar `glass` sobre fundo liso ou sem scrim.
- Esconder o fechar sem outra forma clara de sair.

## Mudanças desta versão

Fundo `bg-overlay-surface` + `elevation-modal` (antes `bg-popover`), rodapé sem faixa cinza, largura padrão 520 (antes 448) e, no mobile, o modal vira bottom sheet.
