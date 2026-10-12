# Selection Controls

(Figma page 6154:9)

### Variantes: Toggle
- Checked (VARIANT: Off | On) padrão: Off
- State (VARIANT: Default | Hover | Focus | Disabled) padrão: Default
- Size (VARIANT: SM | MD | LG) padrão: SM
- Tone (VARIANT: Neutral | Brand) padrão: Brand

### Variantes: Checkbox
- Value (VARIANT: Unchecked | Checked | Indeterminate) padrão: Unchecked
- State (VARIANT: Default | Hover | Focus | Disabled | Error) padrão: Default
- Size (VARIANT: SM | MD | LG) padrão: SM
- Tone (VARIANT: Neutral | Brand) padrão: Brand

### Variantes: Radio
- Checked (VARIANT: Off | On) padrão: Off
- State (VARIANT: Default | Hover | Focus | Disabled | Error) padrão: Default
- Size (VARIANT: SM | MD | LG) padrão: SM
- Tone (VARIANT: Neutral | Brand) padrão: Brand

### Variantes: Selection Field
- Label#6156:0 (TEXT) padrão: Aceito receber novidades
- Description#6156:19 (TEXT) padrão: Avisos sobre aulas, trilhas e certificados.
- Show description#6156:38 (BOOLEAN) padrão: true
- Icon#6156:57 (INSTANCE_SWAP) padrão: 1:146091
- Control (VARIANT: Checkbox | Radio | Toggle) padrão: Checkbox
- Style (VARIANT: Plain | Card) padrão: Card
- State (VARIANT: Default | Disabled | Error) padrão: Default
- Tone (VARIANT: Neutral | Brand) padrão: Brand

## Selection Controls · Documentação

MIDAS · COMPONENTES · FORMULÁRIO · v1.0
Toggle, Checkbox e Radio
Controles básicos de seleção — a base de Choice, Inputs e Formulários. Toggle liga/desliga com efeito imediato; Checkbox escolhe vários (ou aceita um termo); Radio escolhe um entre vários. Selection Field junta controle + rótulo + descrição, em linha simples ou em cartão de configurações.
Toggle
Ativar/desativar algo que vale na hora (notificações, modo escuro). Sem botão "Salvar".
Checkbox
Várias escolhas independentes, ou um aceite ("Li e aceito os termos"). Indeterminate para "selecionar todos" parcial.
Radio
Uma única escolha entre 2–5 opções sempre visíveis. Para muitas opções, use Select.
Toggle
Off · On × Default · Hover · Focus · Disabled. SM 28×16 (tabelas) · MD 36×20 (padrão) · LG 44×24 (mobile). Trilho desligado em border/strong (≥ 3:1), ligado em selection/fill (Cyan).
SM
MD
LG
Checkbox
Unchecked · Checked · Indeterminate × Default · Hover · Focus · Disabled · Error.
SM
MD
LG
Radio
Off · On × Default · Hover · Focus · Disabled · Error.
SM
MD
LG
Selection Field
Controle + rótulo + descrição. Plain para formulários; Card para telas de configuração (ícone à esquerda, Toggle à direita). O rótulo inteiro é clicável; erro mostra mensagem em status/danger/content.
Aceito receber novidades
Avisos sobre aulas, trilhas e certificados.
Aceito receber novidades
Avisos sobre aulas, trilhas e certificados.
Aceito receber novidades
Avisos sobre aulas, trilhas e certificados.
Aceito receber novidades
Avisos sobre aulas, trilhas e certificados.
Aceito receber novidades
Avisos sobre aulas, trilhas e certificados.
Aceito receber novidades
Avisos sobre aulas, trilhas e certificados.
Tom: Brand ou Neutral
Tone=Neutral: marcado em preto no tema claro e branco nos escuros (action/primary/bg + action/primary/content). Use em telas sóbrias ou quando o Cyan já está em outro destaque da tela.
Temas
Light
Aceito receber novidades
Avisos sobre aulas, trilhas e certificados.
Dark
Aceito receber novidades
Avisos sobre aulas, trilhas e certificados.
Dark Blue
Aceito receber novidades
Avisos sobre aulas, trilhas e certificados.
Acessibilidade
• Toggle: role="switch" + aria-checked. Checkbox/Radio nativos (<input>), agrupados em <fieldset> com <legend>.
• Área de clique ≥ 44px: o rótulo faz parte do alvo.
• Teclado: Espaço alterna; setas navegam entre radios do grupo.
• Erro: aria-invalid + mensagem ligada por aria-describedby; nunca só a cor da borda.
• Contraste: bordas e trilhos ≥ 3:1; marcado em selection/fill nos 3 temas.
Tokens
selection/fill · selection/on-fill · selection/border (hover) · action/accent/bg-hover · field/bg · border/strong · status/danger/fill · status/danger/content · surface/default (pino) · elevation/control · focus/ring · opacity/disabled.

