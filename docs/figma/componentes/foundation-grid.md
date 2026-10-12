# Foundation / Grid

(Figma page 6478:24)

### Variantes: Grid Overlay
- Breakpoint (VARIANT: Mobile | Tablet | Laptop | Desktop | Wide) padrão: Mobile

### Variantes: Layout Template
- Template (VARIANT: Dashboard | Cards | Article | Split | Bento | Sidebar no grid | Full viewport | Full-bleed band | Sidebar colada) padrão: Full viewport
- Breakpoint (VARIANT: Desktop | Tablet | Mobile) padrão: Desktop

### Variantes: Viewport
- Device (VARIANT: iPhone 16 | Android | iPad Air 11 | iPad Air 11 deitado | Notebook 1366 | Desktop 1440 | MacBook Air 13 | MacBook Pro 14 | Notebook 1536 | MacBook Air 15 | MacBook Pro 16 | Full HD | iMac 24 | QHD 27) padrão: iPhone 16

## Grid · Documentação

FOUNDATION
Grid e layout
O grid é a régua invisível da página: divide a largura em colunas iguais para que tudo se alinhe, em qualquer tamanho de tela. Os componentes do Midas ocupam “X colunas” em vez de larguras soltas em pixels.
As 3 peças do grid
Colunas são as faixas onde o conteúdo vive. Gutter é o espaço fixo entre elas. Margem é o respiro nas laterais da tela. Um card de “4 colunas” ocupa 4 faixas + os 3 gutters entre elas.
Colunas
12 no desktop
Gutter
24px entre colunas
Margem
64px nas laterais
Breakpoints
Breakpoint é a largura em que o layout muda de regra. Usamos 5, alinhados às telas reais dos nossos alunos. Os valores estão nas variáveis grid/* (coleção Grid, um modo por breakpoint) e nos estilos de grid “Grid/…”.
Breakpoint
Largura da tela · Colunas · Gutter · Margem
Conteúdo máximo
Mobile
até 599px · 4 colunas · 16 · 16
Fluido (ocupa a tela)
Tablet
600–1023px · 8 colunas · 24 · 32
Fluido
Laptop
1024–1279px · 12 colunas · 24 · 40
Fluido
Desktop
1280–1599px · 12 colunas · 24 · 64
1312px
Wide
1600px ou mais · 12 colunas · 32 · 80
1440px, centralizado
Mobile
Tablet
Laptop
Desktop
Wide
Telas reais
Desenhamos em 1440×1024 (referência), mas testamos nas telas que existem de verdade. Os tamanhos são em “pontos” (o que o navegador enxerga), não a resolução física: um MacBook Air 13" tem 2560×1664 pixels, mas mostra 1470×956. A barra do navegador come ~110px de altura no desktop.
Tela
Tamanho (largura × altura) · área visível
Breakpoint
iPhone 16 / Android
393×852 · 412×915
Mobile
iPad Air 11"
820×1180 em pé · 1180×820 deitado
Tablet / Laptop
Notebook Windows
1366×768 (≈ 656 de altura útil) · 1536×864
Desktop
Desktop de referência
1440×1024 (≈ 912 útil)
Desktop
MacBook Air 13" / Pro 14"
1470×956 · 1512×982 (≈ 845–870 útil)
Desktop
MacBook Air 15" / Pro 16"
1710×1112 · 1728×1117
Wide
Monitor Full HD / iMac 24" / 27"
1920×1080 · 2240×1260 · 2560×1440
Wide (conteúdo trava em 1440)
iPhone 16
393 × 852 · visível ≈ 393 × 793
Celular · referência iOS
Breakpoint: Mobile
iPhone 16
iPad Air 11
820 × 1180 · visível ≈ 820 × 1106
Tablet em pé
Breakpoint: Tablet
iPad Air 11
Notebook 1366
1366 × 768 · visível ≈ 1366 × 656
Notebook Windows básico · menor tela de desktop que suportamos
Breakpoint: Desktop
Notebook 1366
Desktop 1440
1440 × 1024 · visível ≈ 1440 × 912
Referência principal de layout do Midas
Breakpoint: Desktop
Desktop 1440
MacBook Air 13
1470 × 956 · visível ≈ 1470 × 844
Padrão do MacBook Air 13" (M2/M3)
Breakpoint: Desktop
MacBook Air 13
MacBook Pro 14
1512 × 982 · visível ≈ 1512 × 870
Padrão do MacBook Pro 14"
Breakpoint: Desktop
MacBook Pro 14
MacBook Pro 16
1728 × 1117 · visível ≈ 1728 × 1005
Padrão do MacBook Pro 16"
Breakpoint: Wide
MacBook Pro 16
Full HD
1920 × 1080 · visível ≈ 1920 × 968
Monitor Full HD 1080p
Breakpoint: Wide
Full HD
QHD 27
2560 × 1440 · visível ≈ 2560 × 1328
Monitor 27" / Studio Display
Breakpoint: Wide
QHD 27
Contêineres: quanto da tela o conteúdo usa
Contido: o conteúdo respeita margem e largura máxima (padrão para texto, listas, formulários). Fluido: usa a largura toda menos a margem (dashboards, tabelas). Full-bleed: o fundo vai de ponta a ponta, mas o texto continua alinhado ao grid (Hero, faixas de destaque, vídeo). Full viewport: ocupa a tela inteira, 100% de largura e de altura (100dvh) — o Hero imersivo.
Conteúdo · 6 col
100vw × 100dvh · full-bleed
↓ role para continuar
Full viewport
Título · contido no grid
Faixa full-bleed · conteúdo alinhado ao grid
4 col
4 col
4 col
Full-bleed band
Conteúdo · 4 col
100vw × 100dvh · full-bleed
↓ role para continuar
Full viewport · Mobile
Modelos de página
Pontos de partida para as telas mais comuns. Cada bloco mostra quantas colunas ocupa e como se reorganiza no tablet e no celular.
Header · 12
Hero · 12
3 col
3 col
3 col
3 col
Conteúdo · 8
Lateral · 4
Dashboard
Título + filtros · 12
4 col
4 col
4 col
4 col
4 col
4 col
Cards
Mídia · 8
Título · 8
Texto · 8 (offset 2)
Article
Mídia · 6
Formulário · 6
Split
Destaque · 8
4
4 col
4 col
4 col
6 col
6 col
Bento
Sidebar · 3
Conteúdo · 9
Sidebar
Sidebar: colada ou no grid
Colada (padrão para a plataforma): a sidebar encosta na borda da tela, sem margem, com largura fixa de 264px (rail de 72px no tablet). Ela fica FORA do grid — o grid de 12 colunas começa depois dela, só na área de conteúdo, com margem de 40px. No mobile ela vira drawer, acionada pelo header, e a navegação principal vai para a Bottom Navigation colada embaixo. No grid: a sidebar ocupa 3 das 12 colunas e respeita a margem. Use em páginas de conteúdo, como configurações, artigo com índice ou central de ajuda, onde a lateral é parte da página e não a navegação do app. Regra: navegação do produto → colada. Navegação dentro de uma página → no grid.
Sidebar · 264px colada
Conteúdo · 12 colunas
Colada · padrão do app
Sidebar · 3
Conteúdo · 9
No grid · páginas de conteúdo
Ritmo de 8px
Todo espaçamento é múltiplo de 4 ou 8 (tokens space/4 … space/80). Isso deixa as distâncias previsíveis e as telas consistentes. Os estilos “Grid/Base · 8px” e “Grid/Base · 4px” ajudam a conferir.
4
8
12
16
24
32
40
48
64
80
Decisões e regras
Desenhe em 1440×1024 e confira em 1366×768 (notebook mais baixo) e 1920×1080 (monitor largo) antes de aprovar.
Larguras de conteúdo vêm de colunas (ex.: card = 4 col, texto = 8 col), nunca de pixels soltos.
Texto corrido nunca passa de 8 colunas no desktop (≈ 70 caracteres por linha) para ser confortável de ler.
Em telas largas o conteúdo trava em 1440px e centraliza; só fundos, imagens e vídeos vão de ponta a ponta.
Hero de tela inteira usa 100dvh (não 100vh) para não ficar cortado no celular, com altura mínima de 560px; o conteúdo fica ancorado embaixo e sempre cabe em 1366×768.
Sidebar fixa (Navigation) fica fora do grid; o grid de 12 colunas começa depois dela.
Espaçamentos só com tokens space/* (múltiplos de 4/8).

