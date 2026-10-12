# Pagination

(Figma page 6270:9)

### Variantes: Pagination Item
- Page#6270:20 (TEXT) padrão: 2
- Type (VARIANT: Number | Prev | Next | Ellipsis) padrão: Number
- State (VARIANT: Default | Hover | Active | Focus | Disabled) padrão: Default
- Size (VARIANT: MD | SM) padrão: MD
- Tone (VARIANT: Brand | Neutral) padrão: Brand

### Variantes: Pagination
- Type (VARIANT: Numbers | Simple | Compact | Jumper | Load more | Dots | Show more | Show more Glass) padrão: Numbers
- Size (VARIANT: MD | SM) padrão: MD
- Tone (VARIANT: Brand | Neutral) padrão: Brand

## Pagination · Documentação

NAVEGAÇÃO
Pagination
Navegação entre páginas de listas, tabelas e carrosséis. Construída com Pagination Item (número, anterior, próxima, reticências). Números em JetBrains Mono, página atual em selection (Brand) ou preto/branco (Neutral).
Tipos
Quando usar cada um.
NUMBERS
Padrão para tabelas e listas com total conhecido.
1
2
3
4
5
…
13
JUMPER
Muitas páginas: intervalo + ir para página.
11–20 de 128
1
2
3
4
5
…
13
Ir para
2
SIMPLE
Fluxos lineares ou quando o total importa pouco.
Anterior
Página 2 de 13
Próxima
COMPACT
Mobile e cards estreitos.
2
/ 13
LOAD MORE
Feeds e listas mobile: carregar mais com progresso.
Mostrando 32 de 128
Carregar mais
DOTS
Carrossel, onboarding e stories.
Estados do item
Hover em state/hover; Active em selection/bg + borda 1px (Brand) ou preto/branco (Neutral); Focus com borda 1px + halo 4px suave.
2
Default
2
Hover
2
Active
2
Focus
2
Disabled
2
Default
2
Hover
2
Active
2
Focus
2
Disabled
Temas
Dark e Dark Blue pelo modo Theme.
DARK
1
2
3
4
5
…
13
2
/ 13
DARK BLUE
1
2
3
4
5
…
13
2
/ 13
Ver mais com fog
Type Show more: botão pill + fog no degradê da cor do fundo (token surface/canvas-fade → surface/canvas) que esconde o conteúdo de baixo até sumir. Sobreponha o componente às últimas linhas da lista. Versão Glass para fundos com imagem ou aurora.
Renda fixa do zero
3 de 22 aulas
Expira em 26 nov 2026
Investindo em ações
8 de 36 aulas
Expira em 05 jun 2027
Planejamento financeiro
15 de 23 aulas
Expira em 20 out 2026
Investindo em ações
8 de 36 aulas
Expira em 05 jun 2027
Planejamento financeiro
15 de 23 aulas
Expira em 20 out 2026
Renda fixa do zero
3 de 22 aulas
Expira em 26 nov 2026
Ver mais 8 cursos
Renda fixa do zero
3 de 22 aulas
Expira em 26 nov 2026
Investindo em ações
8 de 36 aulas
Expira em 05 jun 2027
Planejamento financeiro
15 de 23 aulas
Expira em 20 out 2026
Investindo em ações
8 de 36 aulas
Expira em 05 jun 2027
Planejamento financeiro
15 de 23 aulas
Expira em 20 out 2026
Renda fixa do zero
3 de 22 aulas
Expira em 26 nov 2026
Ver mais 8 cursos
Regras
— Mostre no máximo 7 itens: primeira, atual ±1/±2, reticências e última.
— Em tabelas, a paginação fica no rodapé com o intervalo em mono à esquerda (Table Pagination usa este componente).
— Em mobile, prefira Compact ou Load more; Dots só para carrossel.
— Setas desabilitadas na primeira/última página (State Disabled), nunca escondidas.

