# Header

(Figma page 6145:2395)

### Variantes: Header
- Show light#6147:6 (BOOLEAN) padrão: false
- Style (VARIANT: Transparent | Glass | Solid | Floating) padrão: Transparent
- Device (VARIANT: Desktop | Mobile) padrão: Desktop

## Header · Documentação

MIDAS · COMPONENTES · NAVEGAÇÃO · v1.0
Header
Barra superior do produto e do site. Quatro estilos — Transparent (só os textos, sem fundo), Glass (vidro com blur), Solid e Floating (pílula de vidro flutuante) — em Desktop e Mobile. Logo oficial T2 (componente Logo). Links são Nav Item (Header): o item ativo ganha um traço Cyan centralizado sob o texto; dropdowns usam chevron. Luz Cyan opcional (Show light, desligada por padrão).
Estilos sobre conteúdo
Transparent para heros e páginas de marketing sobre imagem (o texto precisa de contraste com a imagem — use scrim no topo). Glass para headers fixos (sticky) que passam sobre o conteúdo. Solid para produto/app. Floating para landing pages e experiências mais leves.
Início
Trilhas
Investimentos
Comunidade
Planos
Entrar
Começar grátis
Início
Trilhas
Investimentos
Comunidade
Planos
Entrar
Começar grátis
Início
Trilhas
Investimentos
Comunidade
Planos
Entrar
Começar grátis
Início
Trilhas
Investimentos
Comunidade
Planos
Entrar
Começar grátis
Com e sem luz
Show light liga um spot de luz Cyan bem suave sob o item ativo — use com moderação (landing, momentos de marca). Padrão: desligado.
Início
Trilhas
Investimentos
Comunidade
Planos
Entrar
Começar grátis
Início
Trilhas
Investimentos
Comunidade
Planos
Entrar
Começar grátis
Início
Trilhas
Investimentos
Comunidade
Planos
Entrar
Começar grátis
Mobile
56px de altura, logo + ações essenciais + menu (abre a Sidebar como drawer ou um menu de tela cheia).
Temas
Início
Trilhas
Investimentos
Comunidade
Planos
Entrar
Começar grátis
Início
Trilhas
Investimentos
Comunidade
Planos
Entrar
Começar grátis
Início
Trilhas
Investimentos
Comunidade
Planos
Entrar
Começar grátis
Início
Trilhas
Investimentos
Comunidade
Planos
Entrar
Começar grátis
Comportamento e acessibilidade
• <header> + <nav aria-label="Principal">; item ativo com aria-current="page".
• Dropdown: botão com aria-expanded; abre no clique (não só no hover) e fecha com Esc.
• Sticky: ao rolar, Transparent vira Glass (transição de 200ms).
• Contraste: em Transparent sobre imagem, garanta ≥ 4,5:1 com scrim (material/scrim/bg) no topo.
• Tema escuro: troque o Logo para Tone=Negative.
• Combine com Progress Line na borda inferior em fluxos de várias telas.
Tokens
Glass: material/glass/surface · material/glass/border · material/glass. Solid: surface/default · border/subtle. Floating: + elevation/overlay. Links: content/secondary → content/primary; indicador action/accent/bg + progress/glow (leve). Luz: progress/glow com layer blur.

