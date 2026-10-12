# Bottom Navigation

(Figma page 6146:69)

### Variantes: Bottom Navigation
- Show light#6147:15 (BOOLEAN) padrão: false
- Style (VARIANT: Bar | Floating | Icon pill | Center action | Minimal | Glass bar) padrão: Bar

## Bottom Navigation · Documentação

MIDAS · COMPONENTES · NAVEGAÇÃO · v1.0
Bottom Navigation
Navegação principal no mobile, com 3 a 5 destinos. Seis estilos: Bar (sólida), Minimal (sem cor nem brilho), Glass bar (vidro), Floating (pílula de vidro), Icon pill (só ícones) e Center action (ação central). Item ativo em Cyan com brilho leve — ou neutro no Minimal.
Estilos
Início
Trilhas
Carteira
Comunidade
Perfil
Bar
Início
Trilhas
Carteira
Comunidade
Perfil
Minimal
Início
Trilhas
Carteira
Comunidade
Perfil
Glass bar
Início
Trilhas
Carteira
Comunidade
Perfil
Floating
Icon pill
Início
Trilhas
Carteira
Perfil
Center action
Luz (opcional)
Show light adiciona um spot Cyan suave sob o item ativo no Floating. Desligado por padrão — o item ativo já tem um brilho leve no ícone.
Início
Trilhas
Carteira
Comunidade
Perfil
Início
Trilhas
Carteira
Comunidade
Perfil
Temas
Início
Trilhas
Carteira
Comunidade
Perfil
Início
Trilhas
Carteira
Perfil
Início
Trilhas
Carteira
Comunidade
Perfil
Início
Trilhas
Carteira
Perfil
Início
Trilhas
Carteira
Comunidade
Perfil
Início
Trilhas
Carteira
Perfil
Comportamento e acessibilidade
• 3 a 5 destinos de mesmo nível; ações vão no Center action ou em botões da tela.
• Rótulos sempre visíveis (exceto Icon pill, que exige aria-label e tooltip no long-press).
• Alvo de toque ≥ 48px; respeite a safe area (home indicator).
• Item ativo com aria-current="page"; troca de aba sem animação de página inteira.
• Esconda ao rolar para baixo e mostre ao rolar para cima em telas longas (opcional).
Tokens
Bar/Minimal: surface/default · border/subtle. Glass/Floating/Icon pill: material/glass/surface · material/glass/border · material/glass-strong · elevation/overlay. Ativo: selection/content + progress/glow (leve) ou content/primary + ponto (Minimal). Ação central: action/accent/bg.

