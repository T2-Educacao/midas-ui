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

No Midas todos os tipos usam o mesmo visual, como no Figma. A mensagem é que diz o que aconteceu.

### Promise

Mostra o carregamento e troca a mensagem quando a promise termina:

```tsx
toast.promise(salvarCurso(), {
  loading: "Criando curso...",
  success: "Curso criado",
  error: "Não foi possível criar o curso",
});
```

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
