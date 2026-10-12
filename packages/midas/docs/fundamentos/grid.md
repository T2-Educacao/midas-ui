---
title: "Grid e breakpoints"
description: "Os 5 breakpoints do Midas (Mobile, Tablet, Laptop, Desktop, Wide) com colunas, gutter, margem e largura máxima, variáveis CSS do grid, classe grid-midas e regras de layout."
---

O grid divide a largura em colunas iguais para que tudo se alinhe em qualquer tela. Os componentes ocupam "X colunas", não larguras soltas em pixels. **Colunas** são as faixas; **gutter** é o espaço entre elas; **margem** é o respiro lateral da tela.

## Breakpoints

| Breakpoint | Largura da tela | Colunas | Gutter | Margem | Conteúdo máximo |
|---|---|---|---|---|---|
| Mobile | até 599px | 4 | 16px | 16px | fluido |
| Tablet | 600 a 1023px | 8 | 24px | 32px | fluido |
| Laptop | 1024 a 1279px | 12 | 24px | 40px | fluido |
| Desktop | 1280 a 1599px | 12 | 24px | 64px | 1312px |
| Wide | 1600px ou mais | 12 | 32px | 80px | 1440px, centralizado |

## Variáveis

As variáveis mudam sozinhas com a largura da tela (mobile first, com `@media (min-width)`):

| Variável | Significado |
|---|---|
| `--midas-grid-columns` | Número de colunas (4, 8 ou 12) |
| `--midas-grid-gutter` | Espaço entre colunas |
| `--midas-grid-margin` | Margem lateral |
| `--midas-grid-max-width` | Largura máxima do conteúdo (`none` no mobile/tablet/laptop) |

A classe `grid-midas` já aplica tudo (colunas, gutter, margem, máximo e centralização):

```tsx
<div className="grid-midas">
  <header className="col-span-full">Título + filtros</header>
  <article className="col-span-4 md:col-span-8 lg:col-span-8">Conteúdo</article>
  <aside className="col-span-4 md:col-span-8 lg:col-span-4">Lateral</aside>
</div>
```

Os breakpoints do Tailwind (`sm` 640, `md` 768, `lg` 1024, `xl` 1280, `2xl` 1536) não são idênticos aos do Midas. Para seguir o Figma exatamente, use variantes arbitrárias (`min-[600px]:`, `min-[1600px]:`) ou as variáveis acima.

## Regras

- Larguras de conteúdo vêm de colunas (card = 4 col, texto = 8 col), nunca de pixels soltos.
- Texto corrido nunca passa de 8 colunas no desktop (cerca de 70 caracteres por linha).
- Em telas largas o conteúdo trava em 1440px e centraliza; só fundos, imagens e vídeos vão de ponta a ponta.
- Espaçamentos só com a escala `space/*` (múltiplos de 4 e 8). Veja [Escalas](./escalas.md).
- Desenhe em 1440x1024 e confira em 1366x768 (notebook mais baixo) e 1920x1080.
- Hero de tela inteira usa `100dvh` (não `100vh`), com altura mínima de 560px.
- Sidebar fixa de navegação do produto fica **fora** do grid (colada na borda, 264px; rail de 72px no tablet); o grid de 12 colunas começa depois dela. Sidebar de uma página de conteúdo fica **dentro** do grid (3 de 12 colunas).

## Telas de referência

| Tela | Tamanho | Breakpoint |
|---|---|---|
| iPhone 16 / Android | 393x852 / 412x915 | Mobile |
| iPad Air 11" | 820x1180 (em pé) / 1180x820 (deitado) | Tablet / Laptop |
| Notebook Windows | 1366x768 / 1536x864 | Desktop |
| Desktop de referência | 1440x1024 | Desktop |
| MacBook Air 13" / Pro 14" | 1470x956 / 1512x982 | Desktop |
| MacBook Air 15" / Pro 16" | 1710x1112 / 1728x1117 | Wide |
| Full HD / iMac 24" / QHD 27" | 1920x1080 / 2240x1260 / 2560x1440 | Wide (conteúdo trava em 1440) |

## Não faça

- Não use `w-[420px]` ou `max-w-[1200px]` para largura de layout.
- Não deixe texto corrido ocupar as 12 colunas.
- Não ponha a sidebar do app dentro do grid.
