---
title: "Customização"
description: "Como ajustar componentes do Midas com className, variantes, asChild e composição, sem quebrar o padrão."
---

Os componentes do Midas são padronizados, mas não engessados. Existem quatro formas de ajustar, **nesta ordem de preferência**:

## 1. Props de variante

Antes de customizar, veja se já existe uma variante:

```tsx
<Button variant="outline" size="sm">Cancelar</Button>
```

As variantes de cada componente estão no `.md` dele (ex.: [Button](./components/button.md)).

## 2. `className`

Todo componente aceita `className`. As classes são mescladas com [`tailwind-merge`](https://github.com/dcastil/tailwind-merge): em conflito, **a sua vence** e a do Midas é removida.

```tsx
<Button className="w-full">Largura total</Button>
<Button className="h-14 px-8">Mais alto</Button>
```

Use tokens nas classes (`bg-primary`, `rounded-lg`), nunca valores soltos (`bg-[#0097D9]`).

## 3. `asChild`

Faz o componente passar seu visual e comportamento para o **filho**, em vez de renderizar o próprio elemento. Ideal para links:

```tsx
import Link from "next/link";

<Button asChild>
  <Link href="/cursos">Ver cursos</Link>
</Button>
```

Resultado: um `<a>` com visual de botão (sem `<button>` dentro de `<a>`, que seria HTML inválido).

## 4. Variantes em outros elementos

Cada componente exporta sua função de variantes (ex.: `buttonVariants`) para aplicar o visual em elementos que você não controla:

```tsx
import { buttonVariants, cn } from "@t2-educacao/midas";

<label className={cn(buttonVariants({ variant: "secondary" }), "cursor-pointer")}>
  Enviar arquivo
  <input type="file" className="sr-only" />
</label>
```

## `cn()`

O utilitário `cn` (clsx + tailwind-merge) também é exportado para seus próprios componentes:

```tsx
import { cn } from "@t2-educacao/midas";

<div className={cn("rounded-lg p-6", isActive && "bg-accent text-accent-foreground")} />
```

## Quando NÃO customizar

- Se você está sobrescrevendo o mesmo estilo em vários lugares, isso é uma **variante que falta**: abra uma issue no repositório do Midas.
- Não recrie um componente do Midas do zero "porque é mais rápido". Correções de acessibilidade e de visual chegam de graça quando você usa o do Midas.
