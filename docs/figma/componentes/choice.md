# Choice

(Figma page 6160:4060)

### Variantes: Choice Chip
- Label#6160:0 (TEXT) padrão: Renda fixa
- Show icon#6160:17 (BOOLEAN) padrão: false
- Icon#6160:34 (INSTANCE_SWAP) padrão: 1:146523
- Selection (VARIANT: Single | Multiple) padrão: Single
- Size (VARIANT: MD | LG) padrão: MD
- State (VARIANT: Default | Hover | Selected | Disabled) padrão: Default
- Style (VARIANT: Filled | Outline | Glass) padrão: Outline
- Tone (VARIANT: Neutral | Brand) padrão: Brand

### Variantes: Choice Card
- Title#6160:51 (TEXT) padrão: Estudante
- Description#6160:100 (TEXT) padrão: Quero aprender do zero, no meu ritmo.
- Show description#6160:149 (BOOLEAN) padrão: true
- Show indicator#6160:198 (BOOLEAN) padrão: true
- Icon#6160:247 (INSTANCE_SWAP) padrão: 1:142293
- Layout (VARIANT: Horizontal | Vertical) padrão: Horizontal
- Media (VARIANT: Icon | Illustration | None) padrão: Icon
- Selection (VARIANT: Single | Multiple) padrão: Single
- State (VARIANT: Default | Hover | Selected | Disabled) padrão: Default
- Style (VARIANT: Filled | Outline | Glass) padrão: Outline
- Tone (VARIANT: Neutral | Brand) padrão: Brand

### Variantes: Segment
- Label#6161:0 (TEXT) padrão: Opção
- Size (VARIANT: SM | MD) padrão: SM
- State (VARIANT: Default | Hover | Selected) padrão: Default

### Variantes: Segmented Control
- Items (VARIANT: 2 | 3 | 4) padrão: 2
- Size (VARIANT: SM | MD) padrão: SM

### Variantes: Answer Option
- Letter#6161:7 (TEXT) padrão: B
- Answer#6161:15 (TEXT) padrão: O Tesouro Selic é indicado para a reserva de emergência por ter liquidez diária e baixo risco.
- State (VARIANT: Default | Hover | Selected | Correct | Incorrect | Missed | Disabled) padrão: Default
- Style (VARIANT: Filled | Outline | Glass) padrão: Outline
- Tone (VARIANT: Neutral | Brand) padrão: Brand

## Choice · Documentação

MIDAS · COMPONENTES · FORMULÁRIO · v1.0
Choice
Família de escolha visual: Choice Chip (pílulas), Choice Card (cartões com ícone ou ilustração), Segmented Control (alternância) e Answer Option (alternativas de simulado A–E com correção). Por dentro funcionam como Radio (Single) ou Checkbox (Multiple). Três estilos: Outline, Filled (sem borda) e Glass (vidro + blur).
Choice Chip
Respostas curtas e filtros. Single = uma escolha (radio); Multiple = várias (checkbox, com check). Use LG no mobile.
Renda fixa
Ações
Fundos imobiliários
Cripto
Previdência
Tesouro
Renda fixa
Ações
Fundos imobiliários
Cripto
Previdência
Tesouro
2 dias
3 dias
4 dias
5 dias
Choice Card
Opções com título e descrição — onboarding, perfil, planos. Media: ícone, ilustração (doodle Midas) ou nada. Horizontal para listas; Vertical para grade 2 colunas (ótimo no mobile).
Estudante
Quero aprender do zero, no meu ritmo.
Investidor iniciante
Já invisto pouco e quero ir além.
Profissional
Trabalho com finanças.
Carreira
Crescer no trabalho.
Finanças
Organizar o dinheiro.
Mensal
R$ 39,90 por mês
Anual
R$ 29,90 por mês · economize 25%
Segmented Control
2–4 opções mutuamente exclusivas que trocam a visão (Dia · Semana · Mês) ou um atributo (Sem barba · Com barba).
Dia
Semana
Dia
Semana
Mês
Dia
Semana
Mês
Ano
Simulado · Answer Option
Alternativas A–E. Antes de responder: Default/Hover/Selected. Depois de confirmar: Correct (acertou), Incorrect (marcou errada) + Missed (mostra qual era a certa); as demais ficam Disabled. Feedback suave (fundos subtle) para não "gritar" na tela, sempre com ícone + texto.
QUESTÃO 3 DE 20 · ANTES DE CONFIRMAR
Qual investimento é mais indicado para a reserva de emergência?
A
A poupança, por render mais que a inflação em qualquer cenário.
B
O Tesouro Selic, pela liquidez diária e baixo risco.
C
Ações de empresas pequenas, pelo potencial de valorização.
D
Fundos imobiliários, por pagarem dividendos mensais.
E
Criptomoedas, por estarem fora do sistema bancário.
QUESTÃO 3 DE 20 · ERROU (MARCOU C)
Qual investimento é mais indicado para a reserva de emergência?
A
A poupança, por render mais que a inflação em qualquer cenário.
B
O Tesouro Selic, pela liquidez diária e baixo risco.
Resposta certa
C
Ações de empresas pequenas, pelo potencial de valorização.
Sua resposta
D
Fundos imobiliários, por pagarem dividendos mensais.
E
Criptomoedas, por estarem fora do sistema bancário.
QUESTÃO 3 DE 20 · ACERTOU · GLASS
Qual investimento é mais indicado para a reserva de emergência?
A
A poupança, por render mais que a inflação em qualquer cenário.
B
O Tesouro Selic, pela liquidez diária e baixo risco.
Correta
C
Ações de empresas pequenas, pelo potencial de valorização.
D
Fundos imobiliários, por pagarem dividendos mensais.
E
Criptomoedas, por estarem fora do sistema bancário.
Tom: Brand ou Neutral
Tone=Neutral troca o Cyan por preto no tema claro e branco nos escuros (action/primary/*) — para telas sóbrias, simulados e onboarding minimalista. Disponível em Toggle, Checkbox, Radio, Choice Chip, Choice Card e Answer Option.
Renda fixa
Ações
FIIs
Estudante
Quero aprender do zero, no meu ritmo.
B
O Tesouro Selic é indicado para a reserva de emergência por ter liquidez diária e baixo risco.
Renda fixa
Ações
FIIs
Estudante
Quero aprender do zero, no meu ritmo.
B
O Tesouro Selic é indicado para a reserva de emergência por ter liquidez diária e baixo risco.
Mobile
No mobile: chips LG (44px), cards em grade de 2 colunas (Vertical) ou lista (Horizontal) em largura total, alternativas de simulado em largura total com alvo ≥ 48px e o botão de confirmar fixo no rodapé.
O que você quer aprender?
Renda fixa
Ações
FIIs
Cripto
Previdência
Impostos
Carreira
Quero aprender do zero, no meu ritmo.
Finanças
Quero aprender do zero, no meu ritmo.
Qual investimento é mais indicado para a reserva de emergência?
A
Poupança
B
Tesouro Selic
Correta
C
Ações small caps
D
Criptomoedas
Acessibilidade
• Chips/cards Single: role="radiogroup"; Multiple: grupo de checkboxes. O cartão inteiro é o alvo do clique (≥ 44px).
• Simulado: após confirmar, anuncie o resultado (aria-live="polite": "Resposta incorreta. A correta é a B").
• Correta/Incorreta nunca só por cor: ícone + rótulo ("Correta", "Sua resposta", "Resposta certa").
• Glass só sobre imagem/gradiente; o vidro denso (glass/surface) mantém o texto ≥ 4,5:1.
Tokens
Selecionado: selection/bg · selection/border · selection/content · selection/fill. Feedback: status/success|danger/subtle · /border · /content. Filled: surface/muted · state/pressed. Glass: material/glass/surface · material/glass/border · material/glass · material/tint/bg · progress/glow.

## Seção · Temas (Light · Dark · Dark Blue)

Temas · Light, Dark e Dark Blue
Dark e Dark Blue não são variantes: são modos da coleção Theme. Todos os componentes Choice (inclusive Correct, Incorrect e Missed) já se adaptam sozinhos. Para usar: selecione o frame/instância › painel Appearance › ícone de variáveis › Theme › Dark ou Dark Blue. Abaixo, todos os estados renderizados em cada tema.
DARK
Outline · Brand
Renda fixa
Renda fixa
Renda fixa
Renda fixa
Outline · Neutral
Renda fixa
Renda fixa
Renda fixa
Renda fixa
Filled · Brand
Renda fixa
Renda fixa
Renda fixa
Renda fixa
Filled · Neutral
Renda fixa
Renda fixa
Renda fixa
Renda fixa
Glass · Brand
Renda fixa
Renda fixa
Renda fixa
Renda fixa
Glass · Neutral
Renda fixa
Renda fixa
Renda fixa
Renda fixa
Dia
Semana
Answer · Outline
B
O Tesouro Selic é indicado para a reserva de emergência por ter liquidez diária e baixo risco.
B
O Tesouro Selic é indicado para a reserva de emergência por ter liquidez diária e baixo risco.
B
O Tesouro Selic é indicado para a reserva de emergência por ter liquidez diária e baixo risco.
B
O Tesouro Selic é indicado para a reserva de emergência por ter liquidez diária e baixo risco.
Correta
B
O Tesouro Selic é indicado para a reserva de emergência por ter liquidez diária e baixo risco.
Sua resposta
B
O Tesouro Selic é indicado para a reserva de emergência por ter liquidez diária e baixo risco.
Resposta certa
B
O Tesouro Selic é indicado para a reserva de emergência por ter liquidez diária e baixo risco.
Answer · Filled
B
O Tesouro Selic é indicado para a reserva de emergência por ter liquidez diária e baixo risco.
B
O Tesouro Selic é indicado para a reserva de emergência por ter liquidez diária e baixo risco.
B
O Tesouro Selic é indicado para a reserva de emergência por ter liquidez diária e baixo risco.
B
O Tesouro Selic é indicado para a reserva de emergência por ter liquidez diária e baixo risco.
Correta
B
O Tesouro Selic é indicado para a reserva de emergência por ter liquidez diária e baixo risco.
Sua resposta
B
O Tesouro Selic é indicado para a reserva de emergência por ter liquidez diária e baixo risco.
Resposta certa
B
O Tesouro Selic é indicado para a reserva de emergência por ter liquidez diária e baixo risco.
Answer · Glass
B
O Tesouro Selic é indicado para a reserva de emergência por ter liquidez diária e baixo risco.
B
O Tesouro Selic é indicado para a reserva de emergência por ter liquidez diária e baixo risco.
B
O Tesouro Selic é indicado para a reserva de emergência por ter liquidez diária e baixo risco.
B
O Tesouro Selic é indicado para a reserva de emergência por ter liquidez diária e baixo risco.
Correta
B
O Tesouro Selic é indicado para a reserva de emergência por ter liquidez diária e baixo risco.
Sua resposta
B
O Tesouro Selic é indicado para a reserva de emergência por ter liquidez diária e baixo risco.
Resposta certa
B
O Tesouro Selic é indicado para a reserva de emergência por ter liquidez diária e baixo risco.
Estudante
Quero aprender do zero, no meu ritmo.
Estudante
Quero aprender do zero, no meu ritmo.
Estudante
Quero aprender do zero, no meu ritmo.
Estudante
Quero aprender do zero, no meu ritmo.
Estudante
Quero aprender do zero, no meu ritmo.
Estudante
Quero aprender do zero, no meu ritmo.
DARK BLUE
Outline · Brand
Renda fixa
Renda fixa
Renda fixa
Renda fixa
Outline · Neutral
Renda fixa
Renda fixa
Renda fixa
Renda fixa
Filled · Brand
Renda fixa
Renda fixa
Renda fixa
Renda fixa
Filled · Neutral
Renda fixa
Renda fixa
Renda fixa
Renda fixa
Glass · Brand
Renda fixa
Renda fixa
Renda fixa
Renda fixa
Glass · Neutral
Renda fixa
Renda fixa
Renda fixa
Renda fixa
Dia
Semana
Answer · Outline
B
O Tesouro Selic é indicado para a reserva de emergência por ter liquidez diária e baixo risco.
B
O Tesouro Selic é indicado para a reserva de emergência por ter liquidez diária e baixo risco.
B
O Tesouro Selic é indicado para a reserva de emergência por ter liquidez diária e baixo risco.
B
O Tesouro Selic é indicado para a reserva de emergência por ter liquidez diária e baixo risco.
Correta
B
O Tesouro Selic é indicado para a reserva de emergência por ter liquidez diária e baixo risco.
Sua resposta
B
O Tesouro Selic é indicado para a reserva de emergência por ter liquidez diária e baixo risco.
Resposta certa
B
O Tesouro Selic é indicado para a reserva de emergência por ter liquidez diária e baixo risco.
Answer · Filled
B
O Tesouro Selic é indicado para a reserva de emergência por ter liquidez diária e baixo risco.
B
O Tesouro Selic é indicado para a reserva de emergência por ter liquidez diária e baixo risco.
B
O Tesouro Selic é indicado para a reserva de emergência por ter liquidez diária e baixo risco.
B
O Tesouro Selic é indicado para a reserva de emergência por ter liquidez diária e baixo risco.
Correta
B
O Tesouro Selic é indicado para a reserva de emergência por ter liquidez diária e baixo risco.
Sua resposta
B
O Tesouro Selic é indicado para a reserva de emergência por ter liquidez diária e baixo risco.
Resposta certa
B
O Tesouro Selic é indicado para a reserva de emergência por ter liquidez diária e baixo risco.
Answer · Glass
B
O Tesouro Selic é indicado para a reserva de emergência por ter liquidez diária e baixo risco.
B
O Tesouro Selic é indicado para a reserva de emergência por ter liquidez diária e baixo risco.
B
O Tesouro Selic é indicado para a reserva de emergência por ter liquidez diária e baixo risco.
B
O Tesouro Selic é indicado para a reserva de emergência por ter liquidez diária e baixo risco.
Correta
B
O Tesouro Selic é indicado para a reserva de emergência por ter liquidez diária e baixo risco.
Sua resposta
B
O Tesouro Selic é indicado para a reserva de emergência por ter liquidez diária e baixo risco.
Resposta certa
B
O Tesouro Selic é indicado para a reserva de emergência por ter liquidez diária e baixo risco.
Estudante
Quero aprender do zero, no meu ritmo.
Estudante
Quero aprender do zero, no meu ritmo.
Estudante
Quero aprender do zero, no meu ritmo.
Estudante
Quero aprender do zero, no meu ritmo.
Estudante
Quero aprender do zero, no meu ritmo.
Estudante
Quero aprender do zero, no meu ritmo.
LIGHT
Outline · Brand
Renda fixa
Renda fixa
Renda fixa
Renda fixa
Outline · Neutral
Renda fixa
Renda fixa
Renda fixa
Renda fixa
Filled · Brand
Renda fixa
Renda fixa
Renda fixa
Renda fixa
Filled · Neutral
Renda fixa
Renda fixa
Renda fixa
Renda fixa
Glass · Brand
Renda fixa
Renda fixa
Renda fixa
Renda fixa
Glass · Neutral
Renda fixa
Renda fixa
Renda fixa
Renda fixa
Dia
Semana
Answer · Outline
B
O Tesouro Selic é indicado para a reserva de emergência por ter liquidez diária e baixo risco.
B
O Tesouro Selic é indicado para a reserva de emergência por ter liquidez diária e baixo risco.
B
O Tesouro Selic é indicado para a reserva de emergência por ter liquidez diária e baixo risco.
B
O Tesouro Selic é indicado para a reserva de emergência por ter liquidez diária e baixo risco.
Correta
B
O Tesouro Selic é indicado para a reserva de emergência por ter liquidez diária e baixo risco.
Sua resposta
B
O Tesouro Selic é indicado para a reserva de emergência por ter liquidez diária e baixo risco.
Resposta certa
B
O Tesouro Selic é indicado para a reserva de emergência por ter liquidez diária e baixo risco.
Answer · Filled
B
O Tesouro Selic é indicado para a reserva de emergência por ter liquidez diária e baixo risco.
B
O Tesouro Selic é indicado para a reserva de emergência por ter liquidez diária e baixo risco.
B
O Tesouro Selic é indicado para a reserva de emergência por ter liquidez diária e baixo risco.
B
O Tesouro Selic é indicado para a reserva de emergência por ter liquidez diária e baixo risco.
Correta
B
O Tesouro Selic é indicado para a reserva de emergência por ter liquidez diária e baixo risco.
Sua resposta
B
O Tesouro Selic é indicado para a reserva de emergência por ter liquidez diária e baixo risco.
Resposta certa
B
O Tesouro Selic é indicado para a reserva de emergência por ter liquidez diária e baixo risco.
Answer · Glass
B
O Tesouro Selic é indicado para a reserva de emergência por ter liquidez diária e baixo risco.
B
O Tesouro Selic é indicado para a reserva de emergência por ter liquidez diária e baixo risco.
B
O Tesouro Selic é indicado para a reserva de emergência por ter liquidez diária e baixo risco.
B
O Tesouro Selic é indicado para a reserva de emergência por ter liquidez diária e baixo risco.
Correta
B
O Tesouro Selic é indicado para a reserva de emergência por ter liquidez diária e baixo risco.
Sua resposta
B
O Tesouro Selic é indicado para a reserva de emergência por ter liquidez diária e baixo risco.
Resposta certa
B
O Tesouro Selic é indicado para a reserva de emergência por ter liquidez diária e baixo risco.
Estudante
Quero aprender do zero, no meu ritmo.
Estudante
Quero aprender do zero, no meu ritmo.
Estudante
Quero aprender do zero, no meu ritmo.
Estudante
Quero aprender do zero, no meu ritmo.
Estudante
Quero aprender do zero, no meu ritmo.
Estudante
Quero aprender do zero, no meu ritmo.

