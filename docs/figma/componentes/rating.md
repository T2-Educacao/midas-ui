# Rating

(Figma page 6129:12)

### Variantes: Rating Icon
- Type (VARIANT: Star | Coin | Piggy) padrão: Star
- State (VARIANT: Empty | Half | Filled) padrão: Empty
- Size (VARIANT: SM | MD | LG) padrão: SM

### Variantes: Rating Emoji
- Mood (VARIANT: 1 | 2 | 3 | 4 | 5) padrão: 1
- State (VARIANT: Default | Hover | Selected) padrão: Default
- Size (VARIANT: MD | LG) padrão: MD

### Variantes: Rating Number
- Number#6130:0 (TEXT) padrão: 4
- State (VARIANT: Default | Hover | Selected) padrão: Default
- Size (VARIANT: MD | LG) padrão: MD

### Variantes: Rating
- Show value label#6132:21 (BOOLEAN) padrão: true
- Show scale labels#6132:42 (BOOLEAN) padrão: true
- Type (VARIANT: Star | Coin | Piggy | Emoji | Number | NPS) padrão: Star
- Size (VARIANT: SM | MD | LG) padrão: SM
- Style (VARIANT: Plain | Boxed) padrão: Plain
- Value (VARIANT: 1 | 2 | 3 | 4 | 5) padrão: 1

### Variantes: Rating Summary
- Score#6132:63 (TEXT) padrão: 4,8
- Count#6132:68 (TEXT) padrão: (1.284 avaliações)
- Show count#6132:73 (BOOLEAN) padrão: true
- Type (VARIANT: Star | Coin) padrão: Star
- Size (VARIANT: SM | MD) padrão: SM

## Rating · Documentação

MIDAS · COMPONENTES · FORMULÁRIO · v1.0
Rating
Rating coleta ou mostra uma avaliação. Seis tipos: estrelas, moedas, cofrinho, humor (emoji), escala 1–5 e NPS 0–10. As moedas são o conceito da marca — o "toque de Midas": valor e ouro, em traço fino e cor da paleta (amber), divertido sem ser infantil. Componentes: Rating (entrada), Rating Summary (leitura), Rating Icon, Rating Emoji e Rating Number.
Estrelas
Avaliar conteúdo, aulas, produtos. Universal e rápido.
Moedas · Cofrinho
Momentos da marca: avaliar uma trilha de investimentos, "quanto valeu" uma aula, gamificação de metas. Use um por produto — não misture.
Humor (emoji)
Pesquisa de sentimento rápida ("Como foi a aula?"). Sempre com rótulo do valor.
Escala · NPS
Pesquisas formais e comparáveis: 1–5 com rótulos nas pontas; NPS 0–10.
Estrelas, moedas e cofrinho
Plain para formulários e listas; Boxed (itens em caixas de 48/56) para telas de avaliação com mais destaque e toque fácil no mobile. Preenchido = rating/fill + rating/stroke; vazio = rating/empty. Cofrinho usa o accent Cyan.
Star · Plain MD
Muito bom
Star · Boxed MD
Muito bom
Coin · Plain MD
Muito bom
Coin · Boxed MD
Muito bom
Piggy · Plain MD
Muito bom
Piggy · Boxed MD
Muito bom
Valores e rótulos
Variante Value (1–5): os itens preenchidos e o rótulo mudam juntos. 1 Péssimo · 2 Ruim · 3 Regular · 4 Muito bom · 5 Excelente. Use os mesmos rótulos em estrelas, moedas, cofrinho, humor e escala — o usuário aprende uma vez.
Péssimo
Ruim
Regular
Muito bom
Excelente
Péssimo
Ruim
Regular
Muito bom
Excelente
Péssimo
Ruim
Regular
Muito bom
Excelente
Tamanhos
SM 16 (leitura em cards, listas) · MD 24 (padrão) · LG 32 (tela de avaliação). Alvo de toque mínimo 44px no mobile — prefira Boxed ou LG.
Star · SM
Muito bom
Star · MD
Muito bom
Star · LG
Muito bom
Humor, escala e NPS
Humor: ícones Tabler "mood" em traço fino; o selecionado cresce, ganha anel Cyan e um brilho suave; o rótulo do valor aparece embaixo. Escala 1–5 e NPS 0–10 com rótulos nas extremidades.
Emoji · LG
Muito bom
Number · MD
1
2
3
4
5
Nada satisfeito
Muito satisfeito
NPS · MD
0
1
2
3
4
5
6
7
8
9
10
Nada provável
Muito provável
Estados
Ícones: Empty · Half (só leitura, ex.: 4,5) · Filled. Emoji e número: Default · Hover · Selected. No hover de estrelas/moedas, todos os itens até o cursor ficam preenchidos (pré-visualização) e crescem 1.1× (120ms).
Resumo (leitura)
Rating Summary para cards, listas e resultados de busca: ícone + nota + quantidade. Mostre sempre a quantidade quando ela for baixa (uma nota 5,0 com 2 avaliações não é igual a 4,8 com 1.284).
4,8
(1.284 avaliações)
4,8
(1.284 avaliações)
4,8
(1.284 avaliações)
4,8
(1.284 avaliações)
Temas
Mesmos componentes nos três temas.
Light
Muito bom
Muito bom
Muito bom
Dark
Muito bom
Muito bom
Muito bom
Dark Blue
Muito bom
Muito bom
Muito bom
Tokens
rating/fill (amber/400) · rating/stroke (amber/600 | amber/400) · rating/empty (neutral/300 | neutral/600 | slate/600). Cofrinho: action/accent/bg + selection/bg. Humor selecionado: selection/bg, selection/border, selection/content, progress/glow. Número selecionado: action/accent/bg + action/accent/content. Caixas: surface/default + border/default.
Acessibilidade
• Entrada = grupo de radio buttons (role="radiogroup"), cada item com aria-label ("4 de 5 estrelas — Muito bom"). Setas ← → mudam o valor.
• Leitura: texto equivalente ("Avaliação 4,8 de 5, 1.284 avaliações"); os ícones são decorativos.
• Contraste: contorno preenchido (rating/stroke) ≥ 3:1 nos 3 temas; o valor também aparece em texto (Value label).
• Emoji nunca sozinho: sempre com rótulo ("Muito bom").
• Alvo de toque ≥ 44px: use Boxed ou LG no mobile.
Faça e não faça
Faça
• Um tipo de rating por produto/fluxo. • Mostrar o rótulo do valor. • Moedas em momentos de marca e valor. • Escala com rótulos nas pontas.
Não faça
• Misturar estrelas e moedas na mesma tela. • Emojis coloridos de sistema (quebram a linguagem). • Meia-estrela em entrada (só em leitura). • Colorir o cofrinho de amarelo (é Cyan).
Changelog
v1.1 · Nova variante Value (1–5) com rótulos: Péssimo, Ruim, Regular, Muito bom, Excelente. Novo token rating/detail (o $ da moeda fica visível no escuro).
v1.0 · Rating Icon (27), Rating Emoji (30), Rating Number (6), Rating (20: Star/Coin/Piggy × SM/MD/LG × Plain/Boxed, Emoji, Number, NPS) e Rating Summary (4).
v1.0 · Novos tokens: rating/fill, rating/stroke, rating/empty.

