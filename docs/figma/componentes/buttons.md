# Buttons

(Figma page 6048:9)

### Variantes: Button
- Label#6059:0 (TEXT) padrão: Button
- Icon left#6059:361 (BOOLEAN) padrão: false
- Icon right#6059:722 (BOOLEAN) padrão: false
- Left icon#6059:1083 (INSTANCE_SWAP) padrão: 1:143294
- Right icon#6059:1444 (INSTANCE_SWAP) padrão: 1:145321
- Variant (VARIANT: Primary | Accent | Secondary | Outline | Ghost | Destructive) padrão: Primary
- Size (VARIANT: XS | SM | MD | LG | XL) padrão: XS
- State (VARIANT: Default | Hover | Pressed | Focus | Disabled | Loading) padrão: Default
- Shape (VARIANT: Rounded | Pill) padrão: Rounded

### Variantes: Icon Button
- Icon#6059:1805 (INSTANCE_SWAP) padrão: 1:143294
- Variant (VARIANT: Primary | Accent | Secondary | Outline | Ghost | Destructive) padrão: Primary
- Size (VARIANT: XS | SM | MD | LG | XL) padrão: XS
- State (VARIANT: Default | Hover | Pressed | Focus | Disabled | Loading) padrão: Default
- Shape (VARIANT: Rounded | Circle) padrão: Rounded

### Variantes: Button Expressive
- Icon#6059:2166 (INSTANCE_SWAP) padrão: 1:145230
- Label#6059:2487 (TEXT) padrão: Button
- Icon left#6059:2808 (BOOLEAN) padrão: false
- Icon right#6059:3129 (BOOLEAN) padrão: false
- Left icon#6059:3450 (INSTANCE_SWAP) padrão: 1:143294
- Right icon#6059:3771 (INSTANCE_SWAP) padrão: 1:145321
- Variant (VARIANT: Glass | Frosted | On media | Gradient Accent | Frosted Accent | Gradient Neutral | Liquid Glass) padrão: Glass
- Content (VARIANT: Label | Icon) padrão: Label
- Size (VARIANT: MD | LG | XL | 2XL) padrão: MD
- State (VARIANT: Default | Hover | Pressed | Focus | Disabled) padrão: Default
- Shape (VARIANT: Pill | Rounded) padrão: Pill

## Buttons · Documentação

MIDAS · COMPONENTES · AÇÕES · v1.1
Buttons
Botões disparam ações. São três componentes: Button (ações do dia a dia), Icon Button (ação representada só por ícone) e Button Expressive (ações sobre imagem, mídia ou áreas de destaque). Todos consomem apenas tokens das foundations; o tema vem do mode do frame. Accent e marca usam Cyan.
Quando usar
Para ações: enviar, salvar, avançar, abrir um fluxo, confirmar. Rótulo é verbo no infinitivo ou imperativo curto ("Salvar", "Começar curso").
Quando não usar
Para navegar entre páginas use Link. Para alternar estado use Toggle/Switch. Para escolher entre opções use Choice Chips, Radio ou Select. Não use mais de um Primary por área.
Anatomia
1 Container (fill, borda opcional, raio, sombra) · 2 Ícone à esquerda (opcional, Tabler, instance swap) · 3 Label (text style label/*) · 4 Ícone à direita (opcional). Altura = size/control/*, padding horizontal = space/*, gap = space/*. Ícones herdam a cor via content/current (collection Context): ao trocar o ícone, a cor continua correta em qualquer variante e tema.
Começar curso
Assinar agora
Baixar material
Variantes × temas
Mesmo componente, três temas. Nada muda na instância: o mode do frame troca os valores dos tokens.
Light
Primary
Accent
Secondary
Outline
Ghost
Destructive
Primary
Accent
Secondary
Outline
Ghost
Destructive
Dark
Primary
Accent
Secondary
Outline
Ghost
Destructive
Primary
Accent
Secondary
Outline
Ghost
Destructive
Dark Blue
Primary
Accent
Secondary
Outline
Ghost
Destructive
Primary
Accent
Secondary
Outline
Ghost
Destructive
Primary — a ação mais importante da área. Máx. 1 por contexto.
Accent — destaque de marca/oportunidade em Cyan (ex.: "Assinar", "Novo"). Use com moderação; não compete com Primary na mesma área.
Secondary — alternativa à principal ("Cancelar", "Voltar"), superfície clara elevada (sem #FFF puro).
Outline — ação neutra que precisa de limite visível (filtros, ações em cards).
Ghost — ações terciárias, toolbars, ações repetidas em listas.
Destructive — ações irreversíveis. Sempre com confirmação.
Conteúdo
Só texto · ícone + texto · texto + ícone · só ícone. Ícones sempre Tabler, trocados via propriedade (Left icon / Right icon / Icon). Ícone sozinho exige aria-label e tooltip.
Só texto
Ícone + texto
Texto + ícone
Tamanhos
XS 24 · SM 28 · MD 32 · LG 40 · XL 48 (size/control). Expressive vai de MD a 2XL (56). Botões, inputs, selects e toggles do mesmo tamanho têm a mesma altura. XS/SM só em desktop denso (alvo de toque < 44px).
Botão XS
Botão SM
Botão MD
Botão LG
Botão XL
Botão XS
Botão SM
Botão MD
Botão LG
Botão XL
Tamanho · altura · padding X · gap · ícone · texto · raio (Rounded)
XS · 24 · space/8 · space/4 · size/icon/sm 16 · label/sm · radius/xs 4
SM · 28 · space/10 · space/6 · 16 · label/sm · radius/xs 4
MD · 32 · space/12 · space/6 · 16 · label/md · radius/sm 6
LG · 40 · space/16 · space/8 · size/icon/md 20 · label/md · radius/sm 6
XL · 48 · space/20 · space/8 · 20 · label/lg · radius/md 8
2XL · 56 · space/32 · space/10 · size/icon/lg 24 · label/lg · radius/lg 10 (Expressive)
Estados
Default · Hover · Pressed · Focus · Disabled · Loading. Hover e Pressed usam tokens (bg-hover/bg-pressed, state/*), nunca opacidade. Focus = borda 1px + halo suave de 4px em Cyan translúcido (focus/halo); Outline também troca a borda para focus/ring. Focus tem prioridade sobre hover. Disabled = opacity/disabled, sem hover. Loading mantém a largura, troca o ícone por spinner e bloqueia cliques.
Primary
Default
Hover
Pressed
Focus
Disabled
Loading
Accent
Default
Hover
Pressed
Focus
Disabled
Loading
Secondary
Default
Hover
Pressed
Focus
Disabled
Loading
Outline
Default
Hover
Pressed
Focus
Disabled
Loading
Ghost
Default
Hover
Pressed
Focus
Disabled
Loading
Destructive
Default
Hover
Pressed
Focus
Disabled
Loading
Forma
Rounded (padrão de interface) usa cantos discretos que acompanham o tamanho: 4 → 8px. Pill para CTAs isolados, mobile e marketing. Circle para Icon Button. Não misture formas no mesmo grupo de ações.
Rounded
Pill
Largura total
Em mobile e formulários estreitos, aplique Fill container na instância. O conteúdo fica centralizado.
Pagar R$ 1.700
Agendar depois
Button Expressive · sobre mídia
Glass (vidro claro, blur 24) · Liquid Glass (refração e distorção real do fundo) · Frosted (escuro translúcido, blur 28) · Frosted Accent (Cyan translúcido) · On media (sólido claro fixo) · Gradient Accent e Gradient Neutral (degradê curto e flat, brilho de 1px no topo). Use sobre imagens, vídeos e áreas de destaque; valide o contraste com a imagem real.
LIGHT · SOBRE MÍDIA
Upload
Explorar
Learn more
Take a break
Let's go
Assinar
Continuar
Glass
Frosted Accent
Gradient Accent
Gradient Neutral
DARK · SOBRE MÍDIA
Upload
Explorar
Learn more
Take a break
Let's go
Assinar
Continuar
Glass
Frosted Accent
Gradient Accent
Gradient Neutral
DARK BLUE · SOBRE MÍDIA
Upload
Explorar
Learn more
Take a break
Let's go
Assinar
Continuar
Glass
Frosted Accent
Gradient Accent
Gradient Neutral
OPÇÕES DE MATERIAL · troque o effect style da instância
glass · blur 24
glass-strong · blur 40
liquid · refração
frosted · blur 28
frosted-strong · blur 48
frosted accent
Default
Hover
Pressed
Focus
Disabled
Default
Hover
Pressed
Focus
Disabled
Tokens
Cada variante consome apenas tokens do Theme. Ícones usam content/current (collection Context), definido pelo mode do componente.
Variante
Fundo (default / hover / pressed)
Conteúdo
Borda
Efeito
Context
Primary
action/primary/bg · bg-hover · bg-pressed
action/primary/content
—
—
On primary
Accent
action/accent/bg · bg-hover · bg-pressed (Cyan)
action/accent/content
—
—
On accent
Secondary
action/secondary/bg · bg-hover · bg-pressed
action/secondary/content
action/secondary/border
material/raised-button
On secondary
Outline
— · state/hover · state/pressed
content/primary
border/default → border/hover (bordas claras + sombra suave) · foco: focus/ring
—
Default
Ghost
— · state/hover · state/pressed
content/primary
—
—
Default
Destructive
action/destructive/bg · bg-hover · bg-pressed
action/destructive/content
—
foco: focus/ring-danger
On destructive
Glass
material/glass/bg (×1/×2/×3)
content/primary
material/glass/border
material/glass (ou glass-strong)
Default
Liquid Glass
material/glass/bg 50% (×1/×2/×3)
content/primary
material/glass/border
material/liquid
Default
Frosted
material/scrim/bg (×1/×2/×3)
material/on-media/content
material/scrim/border
material/frosted (ou frosted-strong)
On media
Frosted Accent
material/tint/bg (×1/×2/×3)
material/on-media/content
material/tint/border
material/frosted
On media
On media
material/on-media/bg (+ scrim 20%/40%)
material/on-media/bg-content
—
material/raised-button
On media solid
Gradient Accent
accent/gradient-top → gradient-bottom (+ bg-hover 35%) · bg-pressed
action/accent/content
—
material/sheen
On accent
Gradient Neutral
primary/gradient-top → gradient-bottom (+ bg-hover 35%) · bg-pressed
action/primary/content
—
material/sheen
On primary
Todos
Focus: focus/ring (halo focus/halo) · Disabled: opacity/disabled
—
border-width/sm
—
—
Comportamento e acessibilidade
• Contraste: conteúdo/fundo ≥ 4,5:1 em todas as variantes sólidas nos 3 temas (Accent Cyan: 5,06:1 no claro, 10,9:1 no escuro).
• Foco visível por teclado (Tab) sempre presente: halo focus/halo; em campos e Outline a borda também vira focus/ring (≥ 3:1). Nunca remova o foco.
• Enter e Espaço acionam. Use <button>; para navegação use <a> (Link).
• Icon Button e Expressive com Content=Icon exigem aria-label e tooltip.
• Disabled: prefira manter habilitado e explicar o erro. Se usar, aria-disabled + motivo próximo.
• Loading: aria-busy="true", mantém a largura, bloqueia cliques repetidos.
• Alvo de toque: mínimo 24px (WCAG 2.5.8); em mobile use LG+ (≥ 40px).
• Materiais translúcidos dependem do fundo: valide o contraste com a imagem real; se o fundo for claro e movimentado, use frosted-strong ou On media.
Faça e não faça
Faça
• Um Primary por área, acompanhado de Secondary/Ghost.
• Rótulos curtos com verbo ("Salvar", "Começar curso").
• Mesmo Size e Shape em grupos de botões.
• Use Accent (Cyan) para destaque pontual de marca.
• Troque ícones pela propriedade, sempre Tabler.
Não faça
• Dois Primary lado a lado.
• Mudar cores no componente (detach) ou usar hex solto.
• Criar variante Dark — use o mode do frame.
• Usar Glass/Frosted em formulários ou sobre fundo liso.
• Ícone sem rótulo acessível.
Button Group
Attached (opções unidas), Spaced (2 ou 3 ações), Stacked (vertical no mobile, 2 ou 3), Split (ação + menu) e Icons. Tone Brand ou Neutral.
Dia
Semana
Mês
Cancelar
Salvar rascunho
Publicar
Novo aporte
Continuar
Salvar para depois
Agora não
Login social
Social Button usa os logos oficiais (Google e LinkedIn, cores da marca) e é sempre neutro: Outline (padrão), Filled, Inverse e Glass. Full com texto "Continuar com …" ou Icon só com logo. Em telas de login, empilhe em largura total no mobile (Size LG).
LIGHT
Continuar com Google
Continuar com LinkedIn
Continuar com Google
DARK
Continuar com Google
Continuar com LinkedIn
Continuar com Google
DARK BLUE
Continuar com Google
Continuar com LinkedIn
Continuar com Google
Changelog
v1.1 · Accent, seleção, foco, link e marca migrados para Cyan (Sky fica só como cor de apoio em gráficos).
v1.1 · Rounded menos arredondado: XS/SM 4 · MD/LG 6 · XL 8 (2XL 10 no Expressive); radius/role/control = 6.
v1.1 · Focus ring suave: halo de 4px em Cyan translúcido (focus/halo) no lugar do anel duplo.
v1.1 · Degradês modernos e flat: Gradient Accent e Gradient Neutral (transição curta + brilho de 1px), material/sheen.
v1.1 · Novos: Liquid Glass (refração), Frosted Accent (Cyan), material/glass-strong e material/frosted-strong; Glass e Frosted com mais blur.
v1.0 · Button, Icon Button e Button Expressive criados sobre as foundations; ícones com content/current (Context).
Button Feedback
Depois do clique, a confirmação aparece ao lado do botão — sem toast, sem tirar o foco do formulário. Loading usa o estado Loading do botão; Success mostra "Alterações salvas · agora" e some após ~4s; Error e Warning ficam até a próxima ação. Message Text para formulários; Pill para barras de ação e cards. Ícone sempre junto do texto (nunca só cor).
LIGHT
Preferências de estudo
Rodapé de formulário: feedback à esquerda, ações à direita.
Alterações salvas
· agora
Salvar alterações
Salvar alterações
Salvando alterações…
Salvar alterações
Alterações salvas
· agora
Salvar alterações
2 campos não foram salvos
Salvar alterações
Não foi possível salvar. Tente de novo.
Salvar alterações
Avisaremos quando o relatório ficar pronto
DARK
Preferências de estudo
Rodapé de formulário: feedback à esquerda, ações à direita.
Alterações salvas
· agora
Salvar alterações
Salvar alterações
Salvando alterações…
Salvar alterações
Alterações salvas
· agora
Salvar alterações
2 campos não foram salvos
Salvar alterações
Não foi possível salvar. Tente de novo.
Salvar alterações
Avisaremos quando o relatório ficar pronto

### Variantes: Social Logo
- Provider (VARIANT: Google | LinkedIn) padrão: Google

### Variantes: Social Button
- Label#6223:0 (TEXT) padrão: Continuar com Google
- Provider (VARIANT: Google | LinkedIn) padrão: Google
- Layout (VARIANT: Full | Icon) padrão: Full
- Style (VARIANT: Outline | Filled | Inverse | Glass) padrão: Outline
- Size (VARIANT: MD | LG) padrão: MD
- State (VARIANT: Default | Hover | Focus | Disabled) padrão: Default
- Shape (VARIANT: Rounded | Pill) padrão: Rounded

### Variantes: Button Group
- Type (VARIANT: Attached | Spaced | Stacked | Split | Icons) padrão: Attached
- Size (VARIANT: MD | LG) padrão: LG
- Tone (VARIANT: Brand | Neutral) padrão: Brand
- Items (VARIANT: 3 | 2) padrão: 3

### Variantes: Button Feedback
- Show time#6281:49 (BOOLEAN) padrão: true
- Status (VARIANT: Success | Warning | Error | Info | Loading) padrão: Success
- Message (VARIANT: Text | Pill) padrão: Text
- Placement (VARIANT: Right | Left) padrão: Left
- Tone (VARIANT: Brand | Neutral) padrão: Neutral

