---
title: "Skeleton"
description: "Bloco cinza pulsante que representa conteúdo ainda carregando. Escondido de leitores de tela; o tamanho e o formato vêm de className."
---

```tsx
import { Skeleton } from "@t2-educacao/midas";
```

## Uso

```tsx
<Skeleton className="h-4 w-48" />
```

Dê largura e altura com classes de tamanho. Para círculos use `rounded-full`.

## Props

Aceita todas as props de `<div>`.

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `className` | `string` | | Tamanho e formato; mesclado, a sua vence |

## Variantes

| Variante | Quando usar |
|---|---|
| Linha (`h-4 w-*`) | Placeholder de texto |
| Círculo (`size-10 rounded-full`) | Placeholder de avatar |
| Retângulo (`h-32 w-full`) | Placeholder de imagem ou card |

## Exemplos

### Linhas de texto

```tsx
<div className="flex w-72 flex-col gap-2">
  <Skeleton className="h-4 w-full" />
  <Skeleton className="h-4 w-5/6" />
  <Skeleton className="h-4 w-2/3" />
</div>
```

### Card

```tsx
<div className="flex w-72 flex-col gap-3 rounded-xl border p-4">
  <div className="flex items-center gap-3">
    <Skeleton className="size-10 rounded-full" />
    <div className="flex flex-1 flex-col gap-2">
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-3 w-1/2" />
    </div>
  </div>
  <Skeleton className="h-24 w-full" />
</div>
```

## Acessibilidade

- Tem `aria-hidden`: não é lido por leitores de tela.
- Avise o estado de carregamento no contêiner com `aria-busy="true"` ou uma região `role="status"` com texto oculto.
- A animação é desligada com `prefers-reduced-motion`.

## Não faça

- Não use para carregamentos curtos (menos de 300ms); prefira nada ou um `Spinner`.
- Não deixe o esqueleto com formato muito diferente do conteúdo final.
