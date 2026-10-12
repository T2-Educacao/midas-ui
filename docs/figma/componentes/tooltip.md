# Tooltip

(Figma page 6109:13)

### Variantes: Tooltip
- Label#6109:0 (TEXT) padrão: Copiar link
- Shortcut#6109:46 (TEXT) padrão: ⌘ K
- Title#6109:92 (TEXT) padrão: Rentabilidade líquida
- Description#6109:138 (TEXT) padrão: Quanto o investimento rendeu no período, já descontados taxas e impostos.
- Style (VARIANT: Inverse | Light | Glass) padrão: Inverse
- Placement (VARIANT: Top | Bottom | Left | Right | None) padrão: Top
- Content (VARIANT: Label | Shortcut | Rich) padrão: Label

### Variantes: Chart Tooltip
- Title#6110:0 (TEXT) padrão: 12 mar 2026
- Style (VARIANT: Inverse | Light | Glass) padrão: Inverse
- Content (VARIANT: Single | Multi | Delta) padrão: Single

## Tooltip · Documentação

MIDAS · COMPONENTES · OVERLAY · v1.0
Tooltip
Tooltip é um rótulo curto que aparece no hover ou foco de um elemento: nomeia ícones, mostra atalhos, o nome de uma pessoa num grupo de avatares e explica termos. Dois componentes: Tooltip (Label, Shortcut, Rich) e Chart Tooltip (valores de gráfico). Três estilos: Inverse (padrão), Light e Glass.
Quando usar
• Nomear botões só de ícone. • Mostrar o nome completo (avatar, texto truncado). • Atalhos de teclado. • Explicar um termo (Rich), como "rentabilidade líquida". • Valores em gráficos (Chart Tooltip).
Quando não usar
• Informação essencial para concluir a tarefa (coloque na tela). • Conteúdo com links, botões ou formulários (use Popover). • Mensagens de erro (use texto de ajuda do campo). • Em mobile como única forma de ver a informação.
Posicionamento
Placement é o lado em que o tooltip aparece em relação ao alvo; a seta aponta para o alvo. Top é o padrão. Se não couber, o código vira para o lado oposto (flip) e desliza na borda (shift). Distância do alvo: 6px.
Inverse
Placement Top
Placement Bottom
Placement Left
Placement Right
Sem seta
Light
Placement Top
Placement Bottom
Placement Left
Placement Right
Sem seta
Glass
Placement Top
Placement Bottom
Placement Left
Placement Right
Sem seta
Conteúdo
Label: 1–4 palavras. Shortcut: rótulo + atalho (mono/sm). Rich: título + descrição de até 2–3 linhas, largura máxima 240.
Label
Copiar link
Shortcut
Buscar
⌘ K
Rich
Rentabilidade líquida
Quanto o investimento rendeu no período, já descontados taxas e impostos.
Rich · Light
Rentabilidade líquida
Quanto o investimento rendeu no período, já descontados taxas e impostos.
Em contexto
Botões só de ícone sempre têm tooltip com o nome da ação (e o atalho, se existir). Em grupos de avatares, o tooltip mostra o nome da pessoa — veja a página Avatar.
Salvar
⌘ S
Chart Tooltip
Single: uma série. Multi: várias séries + total, na mesma ordem e cor do gráfico (chart/1…5). Delta: valor + variação vs. período anterior (status/success ou status/danger, sempre com ▲/▼ além da cor). Sem seta: fica ao lado do cursor, sem cobrir o ponto; uma linha vertical (crosshair) marca a data.
Single
12 mar 2026
Patrimônio
R$ 48.320
Multi
12 mar 2026
Renda fixa
R$ 30.100
Ações
R$ 12.400
FIIs
R$ 5.820
Total
R$ 48.320
Delta
12 mar 2026
R$ 48.320
▲ 12,4%
vs. 12 fev 2026
Evolução do patrimônio · Light
12 mar 2026
R$ 48.320
▲ 12,4%
vs. 12 fev 2026
Evolução do patrimônio · Dark
12 mar 2026
R$ 48.320
▲ 12,4%
vs. 12 fev 2026
Temas
Inverse continua escuro em todos os temas; no escuro ganha uma borda (tooltip/border) para se separar do fundo. Light usa overlay/surface e sombra.
Light
Copiar link
Buscar
⌘ K
12 mar 2026
Renda fixa
R$ 30.100
Ações
R$ 12.400
FIIs
R$ 5.820
Total
R$ 48.320
Dark
Copiar link
Buscar
⌘ K
12 mar 2026
Renda fixa
R$ 30.100
Ações
R$ 12.400
FIIs
R$ 5.820
Total
R$ 48.320
Dark Blue
Copiar link
Buscar
⌘ K
12 mar 2026
Renda fixa
R$ 30.100
Ações
R$ 12.400
FIIs
R$ 5.820
Total
R$ 48.320
Comportamento
Abre no hover após 400ms (o próximo tooltip vizinho abre na hora, sem atraso) e no foco por teclado imediatamente. Fecha ao sair, no blur e com Esc. Animação: fade + 4px de deslocamento a partir do alvo, 120ms. Toque (mobile): Label não aparece — o rótulo precisa estar visível ou no aria-label; Rich abre com toque em um ícone "i" e fecha ao tocar fora. Chart Tooltip segue o cursor/dedo e trava no ponto mais próximo.
Tokens
Inverse: tooltip/bg · tooltip/border · tooltip/content · tooltip/content-secondary · elevation/raised. Light: overlay/surface · border/subtle · content/primary · content/secondary · elevation/overlay. Glass: material/glass/surface · material/glass/border · material/glass. Raio 8 (Tooltip) e 10 (Chart). Texto: label/sm, label/md, body/sm, mono/sm (atalho). Séries: chart/1…5.
Acessibilidade
• role="tooltip" + aria-describedby no alvo. Em botões só de ícone, o nome também vai no aria-label (o tooltip não substitui).
• O tooltip não pode ser a única forma de acessar informação; não coloque elementos interativos dentro.
• Contraste: tooltip/content sobre tooltip/bg ≥ 14:1 nos 3 temas (17,2 claro · 14,6 escuro); secundário ≥ 4,5:1.
• Hover: o usuário pode mover o mouse até o tooltip sem ele fechar (WCAG 1.4.13); Esc fecha.
• Chart: ofereça também a tabela de dados ou valores acessíveis por teclado (setas percorrem os pontos).
Faça e não faça
Faça
• Textos curtos, sem ponto final no Label. • Mesmo estilo em toda a interface (Inverse). • Glass só sobre mídia. • Cores do Chart Tooltip iguais às do gráfico.
Não faça
• Repetir no tooltip o texto que já está visível. • Tooltip em elementos desabilitados sem foco. • Parágrafos longos. • Links ou botões dentro do tooltip.
Changelog
v1.0 · Tooltip criado: 45 variantes (Style × Placement × Content), 4 propriedades.
v1.0 · Chart Tooltip criado: 9 variantes (Style × Content).
v1.0 · Novos tokens: tooltip/bg, tooltip/border, tooltip/content, tooltip/content-secondary.

