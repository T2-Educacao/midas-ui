# Sidebar

(Figma page 6144:5885)

### Variantes: Sidebar
- Type (VARIANT: Full | Basic | Minimal) padrão: Full
- State (VARIANT: Expanded | Collapsed) padrão: Expanded
- Surface (VARIANT: Solid | Glass | Inverse) padrão: Solid

## Sidebar · Documentação

MIDAS · COMPONENTES · NAVEGAÇÃO · v1.0
Sidebar
Navegação lateral do produto. Três tipos — Full (busca, seções, submenu, badges, card Pro, perfil), Basic (logo + itens + perfil) e Minimal (bem simples, sem cor) — cada um Expanded (232–272) ou Collapsed (64–72, só ícones). Superfícies: Solid, Glass e Inverse (escura em app claro). Logo T2 oficial.
Tipos e estados
Item ativo: luz Cyan sutil (gradiente leve + traço com brilho fraco). No submenu, o ponto Cyan e o texto em destaque já indicam o item atual — sem linha extra. Hover: fundo state/hover + borda sutil (visível nos componentes em "Comunidade").
Full · Expanded · Solid
Buscar
⌘K
MENU
Início
3
Trilhas
3
Renda fixa
3
Ações
3
Fundos imobiliários
3
Minha carteira
3
Comunidade
3
Certificados
3
CONTA
Configurações
3
Ajuda
3
T2 Pro
Aulas ao vivo, trilhas exclusivas e certificados.
Conhecer o Pro
Laura Costa
laura@t2.com.br
Full · Collapsed · Solid
Basic · Expanded · Solid
MENU
Início
3
Trilhas
3
Investimentos
3
Comunidade
3
Certificados
3
Notificações
3
Laura Costa
laura@t2.com.br
Basic · Collapsed · Solid
Minimal · Expanded · Solid
Início
3
Trilhas
3
Investimentos
3
Comunidade
3
Certificados
3
Configurações
3
LC
Laura Costa
Minimal · Collapsed · Solid
LC
Minimal · Expanded · Inverse
Início
3
Trilhas
3
Investimentos
3
Comunidade
3
Certificados
3
Configurações
3
LC
Laura Costa
Minimal · Collapsed · Inverse
LC
Glass
Sobre imagem, vídeo ou gradiente: vidro denso (material/glass/surface) + blur 40 + borda clara. O texto mantém contraste em qualquer fundo.
Buscar
⌘K
MENU
Início
3
Trilhas
3
Renda fixa
3
Ações
3
Fundos imobiliários
3
Minha carteira
3
Comunidade
3
Certificados
3
CONTA
Configurações
3
Ajuda
3
T2 Pro
Aulas ao vivo, trilhas exclusivas e certificados.
Conhecer o Pro
Laura Costa
laura@t2.com.br
MENU
Início
3
Trilhas
3
Investimentos
3
Comunidade
3
Certificados
3
Notificações
3
Laura Costa
laura@t2.com.br
Temas
MENU
Início
3
Trilhas
3
Investimentos
3
Comunidade
3
Certificados
3
Notificações
3
Laura Costa
laura@t2.com.br
MENU
Início
3
Trilhas
3
Investimentos
3
Comunidade
3
Certificados
3
Notificações
3
Laura Costa
laura@t2.com.br
MENU
Início
3
Trilhas
3
Investimentos
3
Comunidade
3
Certificados
3
Notificações
3
Laura Costa
laura@t2.com.br
Comportamento e acessibilidade
• <nav aria-label="Principal">; item atual com aria-current="page"; submenu em botão com aria-expanded.
• Recolher/expandir pelo botão no topo (e atalho [ ); estado salvo por usuário. Collapsed mostra Tooltip com o nome no hover/foco de cada ícone.
• Mobile: a Sidebar vira drawer (sobreposta, com scrim) aberta pelo menu do Header.
• Logo: Tone=Color em fundos claros, Negative em Dark/Dark Blue/Inverse.
• Use no máximo 2 níveis (item → subitem). Mais que isso, leve para a página.
Tokens
Solid: surface/default · border/subtle. Glass: material/glass/surface · material/glass/border · material/glass-strong. Inverse: tema Dark forçado. Itens: Nav Item (state/hover, state/pressed, material/tint/bg, action/accent/bg, progress/glow).

