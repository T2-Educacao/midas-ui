---
title: "Breadcrumb"
description: "Trilha de navegação hierárquica: lista de links até a página atual, com separador (que inverte em RTL) e reticências para trechos omitidos."
---

```tsx
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@t2-educacao/midas";
```

## Uso

```tsx
<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Início</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/cursos">Cursos</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>React</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```

## Props

Todas as partes aceitam `className` e as props do elemento HTML correspondente.

| Parte | Elemento | Observação |
|---|---|---|
| `Breadcrumb` | `<nav>` | `aria-label` padrão "Trilha de navegação"; sobrescreva se precisar |
| `BreadcrumbList` | `<ol>` | Lista ordenada dos itens |
| `BreadcrumbItem` | `<li>` | Um nível da trilha |
| `BreadcrumbLink` | `<a>` | Prop `asChild` (boolean, padrão `false`) para usar o `Link` do framework |
| `BreadcrumbPage` | `<span>` | Página atual, com `aria-current="page"` |
| `BreadcrumbSeparator` | `<li>` | Ícone `CaretRight` com `rtl:rotate-180`; aceita `children` para trocar o ícone |
| `BreadcrumbEllipsis` | `<span>` | Indica níveis omitidos |

## Variantes

Não há variantes. Use `BreadcrumbEllipsis` quando a trilha for longa, no lugar dos níveis do meio.

## Exemplos

### Com Link do framework

```tsx
<BreadcrumbItem>
  <BreadcrumbLink asChild>
    <Link href="/cursos">Cursos</Link>
  </BreadcrumbLink>
</BreadcrumbItem>
```

### Trilha longa

```tsx
<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Início</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbEllipsis />
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Aula 4</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```

## Acessibilidade

- `<nav>` com `aria-label` e lista ordenada, o padrão do WAI-ARIA para breadcrumb.
- A página atual usa `aria-current="page"` e não é link.
- Separador e reticências são `aria-hidden`: leitores de tela não os anunciam.
- Em RTL o separador gira 180 graus sozinho.

## Não faça

- Tornar a página atual um link.
- Usar breadcrumb como menu principal: ele mostra onde o usuário está, não a navegação do site.
- Colocar o separador dentro de `BreadcrumbItem`: ele fica entre os itens, dentro da `BreadcrumbList`.
- Usar para fluxos em etapas: use o [Stepper](./stepper.md).
