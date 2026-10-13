---
title: "Modal"
description: "Modais prontos do Figma, montados sobre o Dialog: Modal (basic, confirm, success, error, info, promo), ModalSuccess (check, confetti, receipt, unlock, sent), ModalError (error, payment, warning, offline, expired), ModalStatus (progress, success, error, warning), PermissionRequest (camera, notifications, gallery, location) e ModalShare (stories, feed, linkedin). Todos com appearance solid|glass e tone brand|neutral."
---

```tsx
import {
  Modal,
  ModalError,
  ModalShare,
  ModalStatus,
  ModalSuccess,
  PermissionRequest,
} from "@t2-educacao/midas";
```

## Quando usar

Interromper o fluxo para uma decisão ou aviso importante. Sempre separado do fundo (scrim + `elevation-modal` + `overlay-surface`).

## Quando não usar

- Aviso sem ação: [Toast](./toast.md). Apoio com contexto visível: [Drawer](./drawer.md). Menu de ações: [DropdownMenu](./dropdown-menu.md).
- Formulário longo: use [Dialog](./dialog.md) com `size="lg"` (Modal Form).

## Props comuns (`ModalBaseProps`)

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `open` / `defaultOpen` / `onOpenChange` | | | Estado |
| `trigger` | `ReactNode` | | Elemento que abre (vira `DialogTrigger asChild`) |
| `title` | `ReactNode` | | Obrigatório; dá nome ao diálogo |
| `description` | `ReactNode` | | Texto de apoio |
| `primaryAction` / `secondaryAction` | `ModalAction` | | `{ label, onClick, icon, disabled, keepOpen }`. Por padrão a ação fecha o modal |
| `appearance` | `"solid" \| "glass"` | `"solid"` | Style |
| `tone` | `"brand" \| "neutral"` | `"brand"` | Brand: botão principal `accent`. Neutral: `default` (preto/branco) |
| `children` | | | Conteúdo extra entre texto e ações |
| `size`, `device` | | | Repassados ao [Dialog](./dialog.md) |

## Variantes

| Componente | `type` / `status` | Quando usar |
|---|---|---|
| `Modal` | `basic` | Pergunta simples com 2 ações |
| | `confirm` | Ação destrutiva com aviso (principal `destructive`) |
| | `success`, `error`, `info` | Resultado ou informação, com selo de ícone em tint suave |
| | `promo` | Oferta com imagem (`image`) e "Agora não" |
| `ModalSuccess` | `check`, `confetti`, `receipt`, `unlock`, `sent` | Conclusão. `receipt` aceita `details={[{label, value}]}` |
| `ModalError` | `error`, `payment`, `warning`, `offline`, `expired` | Falhas. `errorDetails` mostra o bloco "Detalhes do erro" em mono |
| `ModalStatus` | `progress` (com `progress={0-100}`), `success`, `error`, `warning` | Estado de processo, layout horizontal com degradê lateral |
| `PermissionRequest` | `camera`, `notifications`, `gallery`, `location` | Pré-pergunta antes do aviso do sistema; `items` lista usos, `footnote` o aviso final |
| `ModalShare` | `format`: `stories` (9:16), `feed` (4:5), `linkedin` (1,91:1) | Compartilhar conquista; `art` recebe a arte, `caption` a legenda sugerida |

Modal Form, Action Menu e Profile Menu são composições: Modal Form = `Dialog` com `size` sm/md/lg/xl; Action Menu e Profile Menu = [DropdownMenu](./dropdown-menu.md) (no mobile, [BottomSheet](./bottom-sheet.md)).

## Exemplos

```tsx
import { IconTrash } from "@tabler/icons-react";

<Modal
  type="confirm"
  trigger={<Button variant="outline">Excluir meta</Button>}
  title="Excluir meta de investimento?"
  description="A meta e o histórico serão removidos. Essa ação não pode ser desfeita."
  secondaryAction={{ label: "Cancelar" }}
  primaryAction={{ label: "Excluir", icon: <IconTrash />, onClick: excluir }}
/>
```

```tsx
<ModalSuccess
  type="receipt"
  defaultOpen
  title="Pagamento confirmado"
  description="Obrigado! Seu plano já está ativo."
  details={[
    { label: "Nº do pedido", value: "T2-0121478" },
    { label: "Valor", value: "R$ 1.200,00" },
  ]}
  primaryAction={{ label: "Concluir" }}
/>
```

```tsx
<PermissionRequest
  type="notifications"
  title="Ativar notificações"
  description="Avisamos quando seus investimentos renderem."
  items={["Rendimentos e metas", "Novas aulas e simulados"]}
  footnote="Você pode mudar isso depois em Ajustes."
  primaryAction={{ label: "Permitir", onClick: pedirPermissao }}
  secondaryAction={{ label: "Agora não" }}
/>
```

## Acessibilidade

Herda do Dialog: foco preso, `Esc` fecha, título como nome. Status nunca só por cor (ícone + texto). Em `confirm`, prefira não fechar com clique fora (`onInteractOutside={(e) => e.preventDefault()}`). Mobile: botões de 48px em largura total.

## Não faça

- Usar `promo` sem `image` (a faixa fica vazia).
- Colocar mais de duas ações.
- Usar `glass` sem mídia atrás.

## Limitações

O raio do Figma (24) usa `rounded-3xl` (18) e o padding (28) usa 24, por não haver esses valores nas escalas do Midas.
