# Carousel

(Figma page 6089:3094)

### Variantes: Carousel Dot
- State (VARIANT: Active | Inactive) padrão: Active

### Variantes: Carousel
- Show header#6089:0 (BOOLEAN) padrão: true
- Show controls#6089:5 (BOOLEAN) padrão: true
- Show dots#6089:10 (BOOLEAN) padrão: true
- Title#6089:15 (TEXT) padrão: Continue aprendendo
- Eyebrow#6089:20 (TEXT) padrão: EM ALTA
- Type (VARIANT: Uniform | Spotlight) padrão: Uniform
- Device (VARIANT: Desktop | Mobile) padrão: Desktop

## Carousel · Documentação

MIDAS · COMPONENTES · CONTEÚDO · v1.0
Carousel
Carousel mostra uma coleção de Cards na horizontal, com navegação por setas, dots e gesto (swipe). Dois tipos: Uniform (todos do mesmo tamanho, alinhados à esquerda, com "peek" do próximo) e Spotlight (o slide central é maior e elevado, os laterais diminuem — efeito coverflow). Desktop e Mobile são variantes de Device. Os slides são instâncias do Card: dá para trocar layout, tamanho, superfície (Solid/Glass) e estado de cada slide.
Quando usar
• Vitrines de conteúdo relacionado (trilhas, cursos, destaques). • Uniform: navegação/descoberta, quando todos os itens têm o mesmo peso. • Spotlight: destaque editorial, onboarding, hero de página.
Quando não usar
• Conteúdo essencial que todos precisam ver (itens escondidos têm pouca visualização). • Mais de ~10 itens: prefira grade + "Ver tudo". • Autoplay sem botão de pausa.
Anatomia
1 Header: Eyebrow (mono/overline) + Title (heading/lg; heading/md no mobile) · 2 Controles: Icon Button Secondary Circle (anterior desabilitado no início) ou "Ver tudo" (Button Ghost) no mobile · 3 Viewport: corta os slides nas bordas · 4 Track: gap space/24 (desktop) / space/12 (mobile) · 5 Slides: instâncias de Card · 6 Footer: Carousel Dot (Active = pílula Cyan 20×6; Inactive = 6×6 border/default). Propriedades: Title, Eyebrow, Show header, Show controls, Show dots.
Uniform
Todos os slides do mesmo tamanho, alinhados à esquerda, com peek do próximo para indicar que há mais conteúdo. Hover no card (elevation/raised) e setas para paginar.
EM ALTA
Continue aprendendo
23 aulas
Trilha · Investimentos
Renda fixa do zero
Entenda CDB, Tesouro e LCI com exemplos práticos e no seu ritmo.
25 min
4,8
Seu progresso
75%
30 seg restantes
Expira em 30 nov 2026
Começar
23 aulas
Trilha · Investimentos
Ações para iniciantes
Entenda CDB, Tesouro e LCI com exemplos práticos e no seu ritmo.
25 min
4,8
Seu progresso
75%
30 seg restantes
Expira em 30 nov 2026
Começar
23 aulas
Trilha · Investimentos
Planejamento financeiro
Entenda CDB, Tesouro e LCI com exemplos práticos e no seu ritmo.
25 min
4,8
Seu progresso
75%
30 seg restantes
Expira em 30 nov 2026
Começar
23 aulas
Trilha · Investimentos
Fundos imobiliários
Entenda CDB, Tesouro e LCI com exemplos práticos e no seu ritmo.
25 min
4,8
Seu progresso
75%
30 seg restantes
Expira em 30 nov 2026
Começar
23 aulas
Trilha · Investimentos
Reserva de emergência
Entenda CDB, Tesouro e LCI com exemplos práticos e no seu ritmo.
25 min
4,8
Seu progresso
75%
30 seg restantes
Expira em 30 nov 2026
Começar
Spotlight
Slide central maior (Overlay L, Glass) e elevado; os vizinhos diminuem (M, depois S) e são cortados pelas bordas. Ao navegar, o próximo slide cresce até o centro (em código: scale + opacity, 300ms ease-out). O frosted do centro reforça o foco.
EM ALTA
Continue aprendendo
23 aulas
Trilha · Investimentos
Renda fixa do zero
Entenda CDB, Tesouro e LCI com exemplos práticos e no seu ritmo.
25 min
4,8
Seu progresso
75%
30 seg restantes
Expira em 30 nov 2026
Começar
23 aulas
Trilha · Investimentos
Ações para iniciantes
Entenda CDB, Tesouro e LCI com exemplos práticos e no seu ritmo.
25 min
4,8
Seu progresso
75%
30 seg restantes
Expira em 30 nov 2026
Começar
23 aulas
Trilha · Investimentos
Planejamento financeiro
Entenda CDB, Tesouro e LCI com exemplos práticos e no seu ritmo.
25 min
4,8
Seu progresso
75%
30 seg restantes
Expira em 30 nov 2026
Começar
23 aulas
Trilha · Investimentos
Fundos imobiliários
Entenda CDB, Tesouro e LCI com exemplos práticos e no seu ritmo.
25 min
4,8
Seu progresso
75%
30 seg restantes
Expira em 30 nov 2026
Começar
23 aulas
Trilha · Investimentos
Reserva de emergência
Entenda CDB, Tesouro e LCI com exemplos práticos e no seu ritmo.
25 min
4,8
Seu progresso
75%
30 seg restantes
Expira em 30 nov 2026
Começar
Hover nos slides
Os slides usam os estados de hover do Card. Uniform: Hover (anel Cyan + zoom da imagem) ou Hover tint. Spotlight: Hover lift no slide central (cresce 1.03) e Hover nos laterais. As setas aparecem com mais contraste no hover do carrossel (desktop). Troque o State de cada slide na instância.
Default
23 aulas
Trilha · Investimentos
Renda fixa do zero
Entenda CDB, Tesouro e LCI com exemplos práticos e no seu ritmo.
25 min
4,8
Seu progresso
75%
30 seg restantes
Expira em 30 nov 2026
Começar
Hover
23 aulas
Trilha · Investimentos
Renda fixa do zero
Entenda CDB, Tesouro e LCI com exemplos práticos e no seu ritmo.
25 min
4,8
Seu progresso
75%
30 seg restantes
Expira em 30 nov 2026
Começar
Hover lift
23 aulas
Trilha · Investimentos
Renda fixa do zero
Entenda CDB, Tesouro e LCI com exemplos práticos e no seu ritmo.
25 min
4,8
Seu progresso
75%
30 seg restantes
Expira em 30 nov 2026
Começar
Hover tint
23 aulas
Trilha · Investimentos
Renda fixa do zero
Entenda CDB, Tesouro e LCI com exemplos práticos e no seu ritmo.
25 min
4,8
Seu progresso
75%
30 seg restantes
Expira em 30 nov 2026
Começar
Versão blur / glass
Mesmo Carousel sobre mídia (imagem, vídeo, gradiente da marca): troque a superfície dos slides para Glass (material/glass/surface + blur). Escureça o fundo com material/scrim/bg para o header e os dots manterem contraste. Só use sobre fundos com imagem.
EM ALTA
Continue aprendendo
23 aulas
Trilha · Investimentos
Renda fixa do zero
Entenda CDB, Tesouro e LCI com exemplos práticos e no seu ritmo.
25 min
4,8
Seu progresso
75%
30 seg restantes
Expira em 30 nov 2026
Começar
23 aulas
Trilha · Investimentos
Ações para iniciantes
Entenda CDB, Tesouro e LCI com exemplos práticos e no seu ritmo.
25 min
4,8
Seu progresso
75%
30 seg restantes
Expira em 30 nov 2026
Começar
23 aulas
Trilha · Investimentos
Planejamento financeiro
Entenda CDB, Tesouro e LCI com exemplos práticos e no seu ritmo.
25 min
4,8
Seu progresso
75%
30 seg restantes
Expira em 30 nov 2026
Começar
23 aulas
Trilha · Investimentos
Fundos imobiliários
Entenda CDB, Tesouro e LCI com exemplos práticos e no seu ritmo.
25 min
4,8
Seu progresso
75%
30 seg restantes
Expira em 30 nov 2026
Começar
23 aulas
Trilha · Investimentos
Reserva de emergência
Entenda CDB, Tesouro e LCI com exemplos práticos e no seu ritmo.
25 min
4,8
Seu progresso
75%
30 seg restantes
Expira em 30 nov 2026
Começar
Mobile
390 de largura, margem de 16, peek do próximo slide e gesto de swipe com snap. As setas saem; entra "Ver tudo". Dots continuam como indicador de posição (não precisam ser clicáveis).
Uniform · Light
EM ALTA
Continue aprendendo
Ver tudo
23 aulas
Trilha · Investimentos
Renda fixa do zero
Entenda CDB, Tesouro e LCI com exemplos práticos e no seu ritmo.
25 min
4,8
Seu progresso
75%
30 seg restantes
Expira em 30 nov 2026
Começar
23 aulas
Trilha · Investimentos
Ações para iniciantes
Entenda CDB, Tesouro e LCI com exemplos práticos e no seu ritmo.
25 min
4,8
Seu progresso
75%
30 seg restantes
Expira em 30 nov 2026
Começar
23 aulas
Trilha · Investimentos
Planejamento financeiro
Entenda CDB, Tesouro e LCI com exemplos práticos e no seu ritmo.
25 min
4,8
Seu progresso
75%
30 seg restantes
Expira em 30 nov 2026
Começar
Spotlight · Light
EM ALTA
Continue aprendendo
Ver tudo
23 aulas
Trilha · Investimentos
Renda fixa do zero
Entenda CDB, Tesouro e LCI com exemplos práticos e no seu ritmo.
25 min
4,8
Seu progresso
75%
30 seg restantes
Expira em 30 nov 2026
Começar
23 aulas
Trilha · Investimentos
Ações para iniciantes
Entenda CDB, Tesouro e LCI com exemplos práticos e no seu ritmo.
25 min
4,8
Seu progresso
75%
30 seg restantes
Expira em 30 nov 2026
Começar
23 aulas
Trilha · Investimentos
Planejamento financeiro
Entenda CDB, Tesouro e LCI com exemplos práticos e no seu ritmo.
25 min
4,8
Seu progresso
75%
30 seg restantes
Expira em 30 nov 2026
Começar
Uniform · Dark
EM ALTA
Continue aprendendo
Ver tudo
23 aulas
Trilha · Investimentos
Renda fixa do zero
Entenda CDB, Tesouro e LCI com exemplos práticos e no seu ritmo.
25 min
4,8
Seu progresso
75%
30 seg restantes
Expira em 30 nov 2026
Começar
23 aulas
Trilha · Investimentos
Ações para iniciantes
Entenda CDB, Tesouro e LCI com exemplos práticos e no seu ritmo.
25 min
4,8
Seu progresso
75%
30 seg restantes
Expira em 30 nov 2026
Começar
23 aulas
Trilha · Investimentos
Planejamento financeiro
Entenda CDB, Tesouro e LCI com exemplos práticos e no seu ritmo.
25 min
4,8
Seu progresso
75%
30 seg restantes
Expira em 30 nov 2026
Começar
Spotlight · Dark Blue
EM ALTA
Continue aprendendo
Ver tudo
23 aulas
Trilha · Investimentos
Renda fixa do zero
Entenda CDB, Tesouro e LCI com exemplos práticos e no seu ritmo.
25 min
4,8
Seu progresso
75%
30 seg restantes
Expira em 30 nov 2026
Começar
23 aulas
Trilha · Investimentos
Ações para iniciantes
Entenda CDB, Tesouro e LCI com exemplos práticos e no seu ritmo.
25 min
4,8
Seu progresso
75%
30 seg restantes
Expira em 30 nov 2026
Começar
23 aulas
Trilha · Investimentos
Planejamento financeiro
Entenda CDB, Tesouro e LCI com exemplos práticos e no seu ritmo.
25 min
4,8
Seu progresso
75%
30 seg restantes
Expira em 30 nov 2026
Começar
Temas
Mesmo componente nos três temas — só o mode do frame muda.
Dark
EM ALTA
Continue aprendendo
23 aulas
Trilha · Investimentos
Renda fixa do zero
Entenda CDB, Tesouro e LCI com exemplos práticos e no seu ritmo.
25 min
4,8
Seu progresso
75%
30 seg restantes
Expira em 30 nov 2026
Começar
23 aulas
Trilha · Investimentos
Ações para iniciantes
Entenda CDB, Tesouro e LCI com exemplos práticos e no seu ritmo.
25 min
4,8
Seu progresso
75%
30 seg restantes
Expira em 30 nov 2026
Começar
23 aulas
Trilha · Investimentos
Planejamento financeiro
Entenda CDB, Tesouro e LCI com exemplos práticos e no seu ritmo.
25 min
4,8
Seu progresso
75%
30 seg restantes
Expira em 30 nov 2026
Começar
23 aulas
Trilha · Investimentos
Fundos imobiliários
Entenda CDB, Tesouro e LCI com exemplos práticos e no seu ritmo.
25 min
4,8
Seu progresso
75%
30 seg restantes
Expira em 30 nov 2026
Começar
23 aulas
Trilha · Investimentos
Reserva de emergência
Entenda CDB, Tesouro e LCI com exemplos práticos e no seu ritmo.
25 min
4,8
Seu progresso
75%
30 seg restantes
Expira em 30 nov 2026
Começar
Dark Blue
EM ALTA
Continue aprendendo
23 aulas
Trilha · Investimentos
Renda fixa do zero
Entenda CDB, Tesouro e LCI com exemplos práticos e no seu ritmo.
25 min
4,8
Seu progresso
75%
30 seg restantes
Expira em 30 nov 2026
Começar
23 aulas
Trilha · Investimentos
Ações para iniciantes
Entenda CDB, Tesouro e LCI com exemplos práticos e no seu ritmo.
25 min
4,8
Seu progresso
75%
30 seg restantes
Expira em 30 nov 2026
Começar
23 aulas
Trilha · Investimentos
Planejamento financeiro
Entenda CDB, Tesouro e LCI com exemplos práticos e no seu ritmo.
25 min
4,8
Seu progresso
75%
30 seg restantes
Expira em 30 nov 2026
Começar
23 aulas
Trilha · Investimentos
Fundos imobiliários
Entenda CDB, Tesouro e LCI com exemplos práticos e no seu ritmo.
25 min
4,8
Seu progresso
75%
30 seg restantes
Expira em 30 nov 2026
Começar
23 aulas
Trilha · Investimentos
Reserva de emergência
Entenda CDB, Tesouro e LCI com exemplos práticos e no seu ritmo.
25 min
4,8
Seu progresso
75%
30 seg restantes
Expira em 30 nov 2026
Começar
Tokens
Gap: space/24 (desktop) · space/12 (mobile) · margem mobile 16. Header: mono/overline + heading/lg|md, content/secondary e content/primary. Controles: Icon Button Secondary Circle MD / Button Ghost SM. Dots: action/accent/bg (ativo) · border/default (inativo) · radius/full. Slides: tokens do Card.
Comportamento e acessibilidade
• Estrutura: role="region" + aria-roledescription="carousel" + aria-label (o Title). Cada slide: role="group", aria-label="2 de 5".
• Setas são <button> com aria-label ("Anterior" / "Próximo"); a anterior fica desabilitada no primeiro slide (ou faz loop, se for o caso).
• Teclado: Tab percorre os cards visíveis; ← → navegam quando o carousel tem foco. Slides fora da área ficam inert/aria-hidden.
• Mobile: swipe com scroll-snap; nunca bloqueie o scroll vertical da página.
• Sem autoplay por padrão. Se tiver, pausa no hover/foco e botão de pausa visível (WCAG 2.2.2).
• prefers-reduced-motion: troca o scale/slide por fade instantâneo.
Faça e não faça
Faça
• Mostrar o peek do próximo item. • Manter o mesmo layout de Card em todos os slides do Uniform. • Usar Spotlight com poucos itens (3–7) e imagens fortes. • Oferecer "Ver tudo" quando houver muitos itens.
Não faça
• Esconder conteúdo crítico em slides. • Misturar Vertical e Horizontal no mesmo trilho. • Autoplay rápido ou sem pausa. • Dots como única forma de navegar.
Changelog
v1.1 · Dots inativos em border/strong (≥ 3:1). Slides Glass herdam a revisão de contraste do Card (material/glass/surface, material/scrim/strong).
v1.0 · Carousel criado: Type Uniform | Spotlight × Device Desktop | Mobile; 5 propriedades. Carousel Dot (Active/Inactive) criado.
v1.0 · Slides = instâncias de Card (Vertical M/S no Uniform; Overlay S/M/L no Spotlight).

