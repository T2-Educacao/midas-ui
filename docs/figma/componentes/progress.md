# Progress

(Figma page 6097:9)

### Variantes: Progress
- Label#6098:0 (TEXT) padrão: Seu progresso
- Value#6098:151 (TEXT) padrão: 50%
- Helper#6098:302 (TEXT) padrão: 30 seg restantes
- Show label#6098:453 (BOOLEAN) padrão: true
- Show value#6098:604 (BOOLEAN) padrão: true
- Show helper#6098:755 (BOOLEAN) padrão: false
- Orientation (VARIANT: Horizontal | Vertical) padrão: Horizontal
- Style (VARIANT: Accent | Neutral | Gradient | Glow | Shimmer) padrão: Accent
- Size (VARIANT: SM | MD | LG) padrão: SM
- Value (VARIANT: 0 | 25 | 50 | 75 | 100) padrão: 0

### Variantes: Progress Line
- Show track#6100:0 (BOOLEAN) padrão: false
- Style (VARIANT: Accent | Gradient | Glow) padrão: Accent
- Value (VARIANT: 0 | 25 | 50 | 75 | 100) padrão: 0

## Progress · Documentação

MIDAS · COMPONENTES · FEEDBACK · v1.0
Progress
Progress mostra QUANTO de uma tarefa já foi feito. Dois componentes: Progress (barra com rótulo, valor e ajuda; horizontal ou vertical) e Progress Line (linha fina presa à header, sem número — só avança). Cinco estilos: Accent, Neutral, Gradient, Glow e Shimmer. Tudo em tokens progress/*, nos três temas.
Progress
Quanto falta numa tarefa ou meta: upload, trilha de curso, meta de investimento, perfil completo. Mostra % e, se útil, tempo restante.
Progress Line
Avanço de um fluxo de várias telas ou carregamento de página, sem roubar o foco: fica grudada na base da header e só cresce.
Stepper
Quando as etapas têm nome e o usuário precisa saber em qual está (checkout, cadastro). Veja a página Stepper.
Estilos
Accent: padrão (Cyan sólido). Neutral: interfaces sóbrias e dados. Gradient: degradê curto na própria cor da marca. Glow: degradê + brilho + ponta luminosa — para momentos de conquista e progresso "vivo". Shimmer: faixa de brilho correndo sobre a barra — carregamento ativo ou indeterminado.
Accent
Seu progresso
75%
30 seg restantes
Neutral
Seu progresso
75%
30 seg restantes
Gradient
Seu progresso
75%
30 seg restantes
Glow
Seu progresso
75%
30 seg restantes
Shimmer
Seu progresso
75%
30 seg restantes
Tamanhos
SM 4px (densidade, listas, cards) · MD 8px (padrão) · LG 12px (destaque, metas). Raio sempre radius/full.
Size SM
Seu progresso
50%
30 seg restantes
Size MD
Seu progresso
50%
30 seg restantes
Size LG
Seu progresso
50%
30 seg restantes
Conteúdo
Só barra · rótulo + valor · rótulo + valor + ajuda (tempo restante, "3 de 4"). Tudo por propriedade: Show label, Show value, Show helper; textos Label, Value e Helper.
Só barra
Seu progresso
50%
30 seg restantes
Rótulo + valor
Seu progresso
50%
30 seg restantes
Com ajuda
Atualizando…
50%
30 seg restantes
Vertical
Para metas em painéis, colunas de dashboard e gamificação (ex.: nível de uma trilha). O preenchimento cresce de baixo para cima; valor e rótulo ficam embaixo.
75%
Accent
75%
Neutral
75%
Gradient
75%
Glow
75%
Shimmer
Progress Line · presa à header
A linha fica na borda inferior da header, ocupando toda a largura. Sem número, sem rótulo: quanto mais o usuário avança, mais a linha cresce. Use Glow para fluxos de conquista (onboarding, quiz) e Accent para carregamento. Trilho desligado por padrão (Show track).
Midas
Pergunta 3 de 6
Light · Glow · 50%
Qual é o seu objetivo com investimentos?
Midas
Pergunta 3 de 6
Dark · Glow · 75%
Qual é o seu objetivo com investimentos?
Midas
Pergunta 3 de 6
Dark Blue · Gradient · 25%
Qual é o seu objetivo com investimentos?
Temas
Mesmo componente nos três temas: no escuro o degradê fica mais luminoso na ponta e o brilho mais intenso.
Light
Accent
75%
30 seg restantes
Gradient
75%
30 seg restantes
Glow
75%
30 seg restantes
Shimmer
75%
30 seg restantes
Dark
Accent
75%
30 seg restantes
Gradient
75%
30 seg restantes
Glow
75%
30 seg restantes
Shimmer
75%
30 seg restantes
Dark Blue
Accent
75%
30 seg restantes
Gradient
75%
30 seg restantes
Glow
75%
30 seg restantes
Shimmer
75%
30 seg restantes
Movimento
Preenchimento: anima a largura em 300ms ease-out a cada mudança (nunca "pula"). Glow: a ponta pulsa suavemente (opacidade do brilho 60→100%, 1,6s). Shimmer: a faixa progress/shine atravessa a barra da esquerda para a direita em 1,4s, linear, em loop — use para indeterminado. Progress Line: 400ms ease-out entre telas. prefers-reduced-motion: sem pulso nem shimmer; só a mudança de largura, instantânea.
Tokens
progress/track · progress/fill · progress/gradient-start → progress/gradient-end · progress/glow (efeito) · progress/shine · progress/tip · content/primary (Neutral). Texto: body/sm (rótulo), label/sm|md|lg (valor), content/secondary (ajuda). Ícone de ajuda: content/current (Context Muted).
Comportamento e acessibilidade
• role="progressbar" com aria-valuenow, aria-valuemin="0", aria-valuemax="100" e aria-label (ou aria-labelledby no rótulo).
• Indeterminado (Shimmer sem valor): omita aria-valuenow e use aria-busy="true" na região que carrega.
• Contraste: preenchimento × trilho ≥ 3:1 nos 3 temas (Light 4,1:1 · Dark 8,4:1). O valor em texto (%) é a informação principal — a barra é reforço visual.
• Progress Line: decorativa quando a página já diz "Pergunta 3 de 6"; senão, exponha como progressbar.
• Não use cor sozinha para estados: erro em upload mostra mensagem e ícone, não só barra vermelha.
Faça e não faça
Faça
• Mostrar % ou "x de y" junto da barra. • Usar Glow com moderação (1 por tela). • Progress Line em fluxos de várias telas. • Animar a mudança de valor.
Não faça
• Barra parada em 99% sem explicação. • Vários Glow/Shimmer competindo na mesma tela. • Usar Progress para etapas com nome (use Stepper). • Shimmer em barra que já está completa.
Changelog
v1.0 · Progress criado: 150 variantes (Orientation × Style × Size × Value), 6 propriedades.
v1.0 · Progress Line criado: 15 variantes (Style × Value), propriedade Show track.
v1.0 · Novos tokens no Theme: progress/track, progress/fill, progress/gradient-start, progress/gradient-end, progress/glow, progress/shine, progress/tip (só cores da paleta; alpha em glow/shine).

