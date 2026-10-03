---
title: "Pagination"
description: "Navegação entre páginas: Pagination, PaginationContent, PaginationItem, PaginationLink (página atual em outline), PaginationPrevious, PaginationNext e PaginationEllipsis, mais o helper getPageRange para calcular as páginas com reticências."
---

```tsx
import {
  getPageRange,
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@t2-educacao/midas";
```

## Uso

```tsx
<Pagination>
  <PaginationContent>
    <PaginationItem><PaginationPrevious href="?pagina=1" /></PaginationItem>
    <PaginationItem><PaginationLink href="?pagina=1">1</PaginationLink></PaginationItem>
    <PaginationItem><PaginationLink href="?pagina=2" isActive>2</PaginationLink></PaginationItem>
    <PaginationItem><PaginationLink href="?pagina=3">3</PaginationLink></PaginationItem>
    <PaginationItem><PaginationEllipsis /></PaginationItem>
    <PaginationItem><PaginationNext href="?pagina=3" /></PaginationItem>
  </PaginationContent>
</Pagination>
```

## Componentes

| Componente | O que é |
|---|---|
| `Pagination` | `<nav aria-label="Paginação">` |
| `PaginationContent` / `PaginationItem` | Lista e itens |
| `PaginationLink` | Link de página (32px). `isActive` marca a atual (`aria-current="page"`) |
| `PaginationPrevious` / `PaginationNext` | Anterior e próxima (pill). `label` muda o texto |
| `PaginationEllipsis` | "…" para páginas ocultas |

`PaginationLink` é um `<a>` com o visual de botão. Para navegação client-side no Next.js, monte o link com `Link` e `buttonVariants`: `<Link href="?pagina=2" className={buttonVariants({ variant: "ghost", size: "icon" })}>2</Link>`.

## getPageRange

Calcula quais páginas mostrar, sempre com o mesmo número de itens:

```tsx
getPageRange(1, 20);  // [1, 2, 3, 4, 5, "ellipsis-end", 20]
getPageRange(10, 20); // [1, "ellipsis-start", 9, 10, 11, "ellipsis-end", 20]
getPageRange(20, 20); // [1, "ellipsis-start", 16, 17, 18, 19, 20]
```

As reticências vêm como `"ellipsis-start"` e `"ellipsis-end"`, que também servem de `key` no React. O terceiro argumento (`siblings`, padrão 1) define quantas páginas aparecem ao lado da atual.

```tsx
function Paginacao({ atual, total }: { atual: number; total: number }) {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href={`?pagina=${atual - 1}`} aria-disabled={atual === 1} />
        </PaginationItem>
        {getPageRange(atual, total).map((item) =>
          typeof item === "string" ? (
            <PaginationItem key={item}><PaginationEllipsis /></PaginationItem>
          ) : (
            <PaginationItem key={item}>
              <PaginationLink href={`?pagina=${item}`} isActive={item === atual}>{item}</PaginationLink>
            </PaginationItem>
          ),
        )}
        <PaginationItem>
          <PaginationNext href={`?pagina=${atual + 1}`} aria-disabled={atual === total} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
```

## Exemplos

### Só ícones, com linhas por página

```tsx
<div className="flex items-center gap-4">
  <Field orientation="horizontal" className="w-fit">
    <FieldLabel htmlFor="linhas">Linhas por página</FieldLabel>
    <Select defaultValue="25">
      <SelectTrigger id="linhas" className="w-20"><SelectValue /></SelectTrigger>
      <SelectContent>
        <SelectItem value="10">10</SelectItem>
        <SelectItem value="25">25</SelectItem>
        <SelectItem value="50">50</SelectItem>
      </SelectContent>
    </Select>
  </Field>
  <Pagination className="mx-0 w-auto">
    <PaginationContent>
      <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
      <PaginationItem><PaginationNext href="#" /></PaginationItem>
    </PaginationContent>
  </Pagination>
</div>
```

## Acessibilidade

- Use `aria-disabled` em anterior/próxima nas pontas (o link fica esmaecido e sem clique).
- Os links de anterior e próxima já têm nomes descritivos para leitores de tela.
