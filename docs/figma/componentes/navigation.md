# Navigation

(Figma page 6140:9)

### Variantes: Nav Item
- Label#6140:0 (TEXT) padrão: Início
- Icon#6140:25 (INSTANCE_SWAP) padrão: 1:143553
- Show icon#6140:50 (BOOLEAN) padrão: true
- Show badge#6140:75 (BOOLEAN) padrão: false
- Badge#6140:100 (TEXT) padrão: 3
- Show chevron#6140:125 (BOOLEAN) padrão: false
- Type (VARIANT: Sidebar | Sub | Rail | Header | Bottom | Bottom icon) padrão: Sidebar
- State (VARIANT: Default | Hover | Selected | Focus | Active) padrão: Default

## Navigation · Documentação

MIDAS · COMPONENTES · NAVEGAÇÃO · v1.0
Nav Item
Peça única usada por Header, Sidebar e Bottom Navigation. Types: Sidebar, Sub, Rail, Header, Bottom e Bottom icon. Estados: Default, Hover, Selected (luz Cyan sutil), Active (neutro) e Focus. Com ou sem ícone, badge e chevron de dropdown.
Estados
Default: content/secondary. Hover: state/hover + borda sutil, texto content/primary. Selected: gradiente Cyan leve + traço com brilho fraco (realce no Rail/Bottom). Active: neutro (state/pressed) para navegação minimalista. Focus: halo focus/ring, sempre visível no teclado.
Sidebar
Início
3
Início
3
Início
3
Início
3
Início
3
Sub
Início
3
Início
3
Início
3
Início
3
Rail
Header
Início
Início
Início
Início
Bottom
Início
Início
Início
Início
Início
Bottom icon
Com e sem ícone, badge e dropdown
Propriedades: Show icon, Icon (Tabler), Show badge + Badge, Show chevron.
Visão geral
3
Notificações
3
Trilhas
3
Acessibilidade
• Item atual: aria-current="page". Dropdown: aria-expanded + aria-controls.
• Badge no nome acessível ("Notificações, 3 novas").
• Só ícone (Rail, Bottom icon): aria-label + Tooltip.
• Estado ativo nunca só por cor: traço, peso do texto ou cápsula.

