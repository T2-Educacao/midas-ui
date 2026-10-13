---
title: "Toast"
description: "Mensagem curta e temporária no canto da tela. Coloque <Toaster /> uma vez no layout e chame toast() de qualquer lugar. Tipos default, success, info, warning, error e promise; título, descrição, ação e botão de fechar."
---

```tsx
import { Toaster, toast } from "@t2-educacao/midas";
```

## Instalação

Coloque o `Toaster` **uma vez**, no layout raiz:

```tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
```

## Uso

Depois, chame `toast()` em qualquer Client Component:

```tsx
"use client";

import { Button, toast } from "@t2-educacao/midas";

export function SalvarRascunho() {
  return <Button onClick={() => toast("Rascunho salvo")}>Salvar</Button>;
}
```

## Tipos

```tsx
toast("Evento criado");
toast.success("Matrícula confirmada");
toast.info("Chegue 10 minutos antes da prova.");
toast.warning("A prova não pode começar antes das 8h.");
toast.error("Não foi possível salvar.");
```

Cada tipo (success, info, warning, error e loading) mostra o ícone Tabler do status num tile colorido, com cor de status suave; o ícone carrega o significado junto com a cor. O toast sem tipo (`toast("...")`) não tem ícone.

### Promise

Mostra o carregamento e troca a mensagem quando a promise termina:

```tsx
toast.promise(salvarCurso(), {
  loading: "Criando curso...",
  success: "Curso criado",
  error: "Não foi possível criar o curso",
});
```

## Estilos, posição e pilha

```tsx
<Toaster toastStyle="inverse" position="bottom-right" />
```

| Prop do `Toaster` | Tipo | Padrão | Descrição |
|---|---|---|---|
| `toastStyle` | `"subtle" | "surface" | "inverse" | "glass"` | `"surface"` | Subtle (fundo muted), Surface (padrão, sombra de overlay), Inverse (escuro, contrasta com páginas claras) e Glass (sobre Hero e mídia) |
| `position` | `"top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right"` | `"bottom-right"` | Desktop: a 24px das bordas (`offset`). No mobile a margem é 16px (`mobileOffset`) e a largura é total |
| `expand` | `boolean` | `false` | Pilha aberta. Recolhida: o mais recente na frente; no hover a pilha se abre |
| `visibleToasts` | `number` | `3` | No máximo 3 visíveis |

Largura de 400px, raio de container, ícone em tile de 32px, título em label-md e descrição em body-sm.

### Recomendações

- Desktop: bottom-right para confirmações; top-center para erros que bloqueiam. Mobile: base, acima da Bottom Navigation.
- Uma ação no máximo. Para mais de uma decisão, use Dialog.
- Erros ficam até a pessoa fechar (`duration: Infinity`); sucesso e info somem em 4 a 6 s.
- Não use toast para conteúdo que a pessoa precisa encontrar depois: use o [Notification Center](./notification.md). Aviso persistente: [Banner](./banner.md).

### Limitação

O conteúdo "Progress" do Figma (barra do tempo até sumir com pausa no hover) não existe no Sonner; para upload use `toast.loading` ou `toast.custom` com [Progress](./progress.md).

## Opções

| Opção | Tipo | Descrição |
|---|---|---|
| `description` | `ReactNode` | Segunda linha |
| `action` | `{ label: string; onClick: () => void }` | Botão de ação |
| `cancel` | `{ label: string; onClick: () => void }` | Botão secundário |
| `duration` | `number` | Tempo na tela em ms (padrão 4000) |
| `id` | `string` | Para atualizar ou fechar um toast específico |

```tsx
toast("Aula removida", {
  description: "Módulo 3, aula 2",
  action: { label: "Desfazer", onClick: () => restaurarAula() },
});
```

## Props do Toaster

Aceita as props do [Sonner](https://sonner.emilkowal.ski): `position` (`"bottom-right"` padrão), `expand`, `duration`, `visibleToasts` etc.

```tsx
<Toaster position="top-center" />
```

## Acessibilidade

- Os toasts são anunciados por leitores de tela (região `aria-live`).
- Todo toast tem botão de fechar.
- Não coloque no toast a única forma de concluir uma tarefa: ele some sozinho.

## Não faça

- Usar toast para erros de formulário: mostre o erro no campo com `FieldError`.
- Disparar vários toasts para uma mesma ação.
