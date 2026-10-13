---
title: "Breadcrumb"
description: "Trilha de navegação (curso, módulo, aula) com último item como página atual. Separador chevron ou slash, tom neutral/brand/media, tipos default, home, collapsed (com menu), contained (pílula) e back (mobile)."
---

```tsx
import {
  Breadcrumb,
  BreadcrumbBack,
  BreadcrumbEllipsis,
  BreadcrumbHome,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@t2-educacao/midas";
```

## Quando usar

- Mostrar onde a pessoa está na hierarquia (curso, módulo, aula) e permitir voltar a qualquer nível com um clique.
- Sobre Heroes e imagens: `contained` com `tone="media"`.
- Mobile: `BreadcrumbBack` (volta um nível) no lugar da trilha completa.

## Não use

- Para substituir a navegação principal: Breadcrumb a complementa.
- Com mais de 4 níveis visíveis: recolha os do meio em `…` (Collapsed).
- Para passos de um fluxo: use Stepper.

## Uso

```tsx
<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/cursos">Cursos</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/cursos/cpa-20">Preparatório CPA-20</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Módulo 3</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```

## Anatomia

`Breadcrumb` (nav) > `BreadcrumbList` (ol) > `BreadcrumbItem` (li) com `BreadcrumbLink` / `BreadcrumbHome` (início como ícone) / `BreadcrumbPage` (atual, não clicável, peso médio) / `BreadcrumbEllipsis` (níveis recolhidos), e `BreadcrumbSeparator` entre os itens. `BreadcrumbBack` é a versão mobile.

## Props

Todas as partes aceitam `className` (o seu vence) e `ref`. `BreadcrumbLink`, `BreadcrumbHome` e `BreadcrumbBack` aceitam `asChild` (use com `next/link`).

### Breadcrumb

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `tone` | `"neutral" \| "brand" \| "media"` | `"neutral"` | Brand destaca o hover em Cyan. Media funciona sobre imagens e Heroes |
| `separator` | `"chevron" \| "slash"` | `"chevron"` | Slash para contextos técnicos ou densos |
| `contained` | `boolean` | `false` | Trilha numa pílula com fundo (Figma: Type Contained) |
| `aria-label` | `string` | `"Trilha de navegação"` | Nome acessível do nav |

Também exportado: `breadcrumbVariants`.

### Partes

| Parte | Observação |
|---|---|
| `BreadcrumbHome` | Link com ícone de casa e `aria-label="Início"` (troque pela prop) |
| `BreadcrumbBack` | Link com seta (inverte em RTL) e o texto do nível anterior como filho |
| `BreadcrumbEllipsis` | Decorativo (`aria-hidden`). Para o tipo Collapsed open, coloque dentro de um botão com `aria-label` que abre um menu |
| `BreadcrumbSeparator` | Chevron (inverte em RTL) ou `/`, conforme o `separator` do Breadcrumb; aceita filho próprio |

## Variantes

| Tipo do Figma | Como montar |
|---|---|
| Default | Lista completa |
| Home | Primeiro item com `BreadcrumbHome` |
| Collapsed | `BreadcrumbEllipsis` no lugar dos níveis do meio |
| Collapsed open | Reticências dentro de `DropdownMenuTrigger` com os níveis ocultos |
| Contained | `<Breadcrumb contained>` |
| Back | `BreadcrumbBack` no mobile |

## Estados

Default em `content-secondary`, Hover em `content-primary` (ou `content-link` no tom brand), Focus com o `focus-ring` do Midas. O item atual fica em `content-primary` com peso médio.

## Exemplos

### Slash e tom brand

```tsx
<Breadcrumb separator="slash" tone="brand">
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/cursos">Cursos</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Módulo 3</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```

### Sobre Hero (media + contained)

```tsx
<Breadcrumb tone="media" contained>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbHome href="/" />
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Módulo 3</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```

### Mobile (voltar um nível)

```tsx
<Breadcrumb>
  <BreadcrumbBack href="/cursos/cpa-20/modulo-3">Módulo 3</BreadcrumbBack>
</Breadcrumb>
```

### Níveis recolhidos com menu

```tsx
<BreadcrumbItem>
  <DropdownMenu>
    <DropdownMenuTrigger aria-label="Mostrar níveis ocultos" className="rounded-xs focus-visible:focus-ring">
      <BreadcrumbEllipsis />
    </DropdownMenuTrigger>
    <DropdownMenuContent align="start">
      <DropdownMenuItem>Cursos</DropdownMenuItem>
      <DropdownMenuItem>Preparatório CPA-20</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</BreadcrumbItem>
```

## Acessibilidade

- `<nav aria-label="Trilha de navegação">` com lista ordenada.
- O último item usa `aria-current="page"` e não é link.
- Separadores e reticências são `aria-hidden`; o botão que abre os níveis ocultos precisa de `aria-label`.
- No mobile o `BreadcrumbBack` precisa de texto visível com o nome do nível anterior.

## Não faça

- Tornar a página atual clicável.
- Mostrar mais de 4 níveis sem recolher.
- Usar `tone="media"` fora de fundos escuros ou com imagem.
- Usar cores soltas ou `dark:`: o tema troca pelos tokens.
