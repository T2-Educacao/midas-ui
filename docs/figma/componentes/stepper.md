# Stepper

(Figma page 6102:9)

### Variantes: Stepper Step
- Label#6102:0 (TEXT) padrão: Pagamento
- Description#6102:25 (TEXT) padrão: Cartão ou Pix
- Number#6102:50 (TEXT) padrão: 3
- Show description#6102:75 (BOOLEAN) padrão: true
- Show leading line#6102:100 (BOOLEAN) padrão: true
- Show trailing line#6102:125 (BOOLEAN) padrão: true
- Icon#6102:150 (INSTANCE_SWAP) padrão: 1:144386
- Orientation (VARIANT: Horizontal | Vertical) padrão: Horizontal
- State (VARIANT: Completed | Current | Upcoming | Error) padrão: Completed
- Indicator (VARIANT: Number | Icon | Dot) padrão: Number

### Variantes: Stepper
- Type (VARIANT: Default | Segmented | Compact) padrão: Default
- Orientation (VARIANT: Horizontal | Vertical) padrão: Horizontal

## Stepper · Documentação

MIDAS · COMPONENTES · NAVEGAÇÃO · v1.0
Stepper
Stepper mostra EM QUAL ETAPA o usuário está num fluxo com etapas nomeadas. Dois componentes: Stepper Step (uma etapa: Completed, Current, Upcoming, Error; indicador Number, Icon ou Dot) e Stepper (o conjunto: Default, Segmented e Compact para mobile; horizontal e vertical). Usa os mesmos tokens do Progress — os dois conversam visualmente.
Etapa · estados e indicadores
Completed: accent + check. Current: seleção Cyan + brilho (progress/glow) — é o único ponto luminoso do fluxo. Upcoming: contorno border/strong (≥ 3:1). Error: status/danger + ícone e texto (nunca só cor). Linhas: progress/fill (feito) e progress/track (pendente).
Completed · Number
Pagamento
Cartão ou Pix
Current · Number
3
Pagamento
Cartão ou Pix
Upcoming · Number
4
Pagamento
Cartão ou Pix
Error · Number
Pagamento recusado
Revise o cartão
Completed · Icon
Pagamento
Cartão ou Pix
Current · Icon
Pagamento
Cartão ou Pix
Upcoming · Icon
Pagamento
Cartão ou Pix
Error · Icon
Pagamento recusado
Revise o cartão
Completed · Dot
Pagamento
Cartão ou Pix
Current · Dot
Pagamento
Cartão ou Pix
Upcoming · Dot
Pagamento
Cartão ou Pix
Error · Dot
Pagamento recusado
Revise o cartão
Completed · Number
Pagamento
Cartão ou Pix
Current · Number
3
Pagamento
Cartão ou Pix
Upcoming · Number
4
Pagamento
Cartão ou Pix
Error · Number
Pagamento recusado
Revise o cartão
Completed · Icon
Pagamento
Cartão ou Pix
Current · Icon
Pagamento
Cartão ou Pix
Upcoming · Icon
Pagamento
Cartão ou Pix
Error · Icon
Pagamento recusado
Revise o cartão
Completed · Dot
Pagamento
Cartão ou Pix
Current · Dot
Pagamento
Cartão ou Pix
Upcoming · Dot
Pagamento
Cartão ou Pix
Error · Dot
Pagamento recusado
Revise o cartão
Default
Círculos numerados ligados por linhas. Horizontal para fluxos curtos (3–5 etapas) em desktop; Vertical para fluxos longos, trilhas e checklists — aceita descrição em cada etapa.
Conta
Cartão ou Pix
Perfil
Cartão ou Pix
3
Pagamento
Cartão ou Pix
4
Revisão
Cartão ou Pix
4
Pronto
Cartão ou Pix
Perfil do investidor
Concluído em 12/03
Fundamentos
4 de 4 aulas
3
Renda fixa
2 de 6 aulas · em andamento
4
Certificado
Libera ao concluir a trilha
Segmented
Uma barra por etapa, com o nome em cima. A etapa atual mostra avanço parcial (Glow) — ponte entre Stepper e Progress. Bom para checkout e formulários longos.
Dados
Seu progresso
50%
30 seg restantes
Plano
Seu progresso
50%
30 seg restantes
Pagamento
Seu progresso
50%
30 seg restantes
Confirmação
Seu progresso
50%
30 seg restantes
Dados
Concluído
Plano
Concluído
Pagamento
Em andamento
Confirmação
Pendente
Mobile · Compact
Em telas pequenas o Default não cabe com rótulos. Use Compact: "Etapa 3 de 5", o nome da etapa atual, a próxima e mini-barras. Para fluxos longos no mobile, combine com a Progress Line na header.
ETAPA 3 DE 5
Pagamento
Próximo: Revisão
Perfil do investidor
Concluído em 12/03
Fundamentos
4 de 4 aulas
3
Renda fixa
2 de 6 aulas · em andamento
4
Certificado
Libera ao concluir a trilha
ETAPA 3 DE 5
Pagamento
Próximo: Revisão
Perfil do investidor
Concluído em 12/03
Fundamentos
4 de 4 aulas
3
Renda fixa
2 de 6 aulas · em andamento
4
Certificado
Libera ao concluir a trilha
Temas
Mesmo Stepper nos três temas.
Dark
Conta
Cartão ou Pix
Perfil
Cartão ou Pix
3
Pagamento
Cartão ou Pix
4
Revisão
Cartão ou Pix
4
Pronto
Cartão ou Pix
Dados
Seu progresso
50%
30 seg restantes
Plano
Seu progresso
50%
30 seg restantes
Pagamento
Seu progresso
50%
30 seg restantes
Confirmação
Seu progresso
50%
30 seg restantes
Dark Blue
Conta
Cartão ou Pix
Perfil
Cartão ou Pix
3
Pagamento
Cartão ou Pix
4
Revisão
Cartão ou Pix
4
Pronto
Cartão ou Pix
Dados
Seu progresso
50%
30 seg restantes
Plano
Seu progresso
50%
30 seg restantes
Pagamento
Seu progresso
50%
30 seg restantes
Confirmação
Seu progresso
50%
30 seg restantes
Tokens
Etapa: action/accent/bg + content/current (Completed) · selection/bg, selection/border, selection/content, progress/glow (Current) · surface/default, border/strong, content/secondary (Upcoming) · status/danger/fill e status/danger/content (Error). Linhas e barras: progress/fill, progress/track. Texto: label/md, body/sm, mono/overline (Compact).
Comportamento e acessibilidade
• Estrutura: <ol> com cada etapa em <li>; a atual com aria-current="step". Etapas concluídas podem ser links para voltar.
• Não esconda o rótulo da etapa atual no mobile (Compact mantém o nome).
• Estado não depende só de cor: check (concluída), número com anel (atual), contorno (pendente), ícone + texto (erro).
• Contraste: indicadores e linhas ≥ 3:1; textos ≥ 4,5:1 nos 3 temas.
• Etapas futuras não clicáveis por padrão; se forem, deixe claro com hover/foco.
Faça e não faça
Faça
• 3 a 7 etapas, nomes curtos (1–2 palavras). • Vertical quando houver descrição. • Compact no mobile. • Mostrar erro na etapa que falhou.
Não faça
• Mais de 7 etapas na horizontal. • Misturar Number e Icon no mesmo Stepper. • Usar Stepper para progresso contínuo (use Progress). • Vários brilhos: só a etapa atual brilha.
Changelog
v1.0 · Stepper Step criado: 24 variantes (Orientation × State × Indicator), 7 propriedades (Label, Description, Number, Icon, Show description, Show leading line, Show trailing line).
v1.0 · Stepper criado: Default (H/V), Segmented (H/V), Compact (mobile). Segmented reutiliza o componente Progress.

