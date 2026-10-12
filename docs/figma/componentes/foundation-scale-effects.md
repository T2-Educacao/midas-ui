# Foundation / Scale & Effects

(Figma page 11:521)

## Foundation · Escalas e efeitos

MIDAS · FOUNDATIONS · ESCALAS E EFEITOS
Escalas e efeitos
Collection Scale (espaçamento, tamanhos, raio, borda, opacidade, blur) e effect styles (elevação, foco, blur, glass e materiais). Não existem valores fora destas escalas: se algo não cabe, a escala é revista aqui, não no componente.
Espaçamento
space/* – padding e gap. Base 4px; 2, 6 e 10 são meios-passos para controles compactos.
space/0
0
space/2
2
space/4
4
space/6
6
space/8
8
space/10
10
space/12
12
space/16
16
space/20
20
space/24
24
space/32
32
space/40
40
space/48
48
space/56
56
space/64
64
space/80
80
Tamanhos
size/control/* define a altura de todos os controles. Componentes equivalentes no mesmo tamanho têm a mesma altura. size/icon/* segue o grid 24 do Tabler.
size/control/xs
24
Densidade máxima: tabelas, toolbars. Só desktop.
size/control/sm
28
Compacto: filtros, chips, ações densas.
size/control/md
32
Padrão da interface.
size/control/lg
40
Formulários e ações principais; mínimo em mobile.
size/control/xl
48
Destaque, mobile e touch confortável.
size/control/2xl
56
CTA de landing/onboarding.
size/control/3xl
64
Hero e telas de aprendizagem.
size/control/4xl
72
Excepcional: totens, apresentações.
size/icon/xs
12
size/icon/sm
16
size/icon/md
20
size/icon/lg
24
size/icon/xl
32
Raio
radius/* é a escala; radius/role/* define o uso. Controles usam cantos discretos (role/control = 6; XS/SM 4, XL 8).
radius/none
0
Escala de raio – 0px.
radius/xs
4
Escala de raio – 4px.
radius/sm
6
Escala de raio – 6px.
radius/md
8
Escala de raio – 8px.
radius/lg
10
Escala de raio – 10px.
radius/xl
12
Escala de raio – 12px.
radius/2xl
14
Escala de raio – 14px.
radius/3xl
18
Escala de raio – 18px.
radius/full
9999
Escala de raio – pílula/círculo.
radius/role/control
→ radius/sm
Controles: button, input, select, toggle, chip (6px; XS/SM 4px, XL 8px).
radius/role/container
→ radius/2xl
Containers: card, painel, alert, dialog.
radius/role/overlay
→ radius/lg
Overlays: dropdown, popover, combobox, date picker, tooltip.
radius/role/pill
→ radius/full
Badges, tags, switches e avatares.
Borda e opacidade
border-width/sm
1
Padrão Midas: 1px em border/default (cinza claro), sempre com sombra suave elevation/control. Nunca usar strokes pretos ou grossos.
border-width/md
1.5
Uso raro (indicadores pequenos). Seleção e foco usam 1px + halo de 4px.
opacity/disabled
50
Opacidade de elementos desabilitados quando não houver token de cor específico.
Elevação
Todo componente sobreposto aparece um nível acima da superfície em que foi aberto (overlay/surface + overlay/border + elevation/overlay).
elevation/control
Controles com leve relevo (inputs, botões outline). Nível 1.
elevation/card
Cards e superfícies elevadas em repouso. Nível 2.
elevation/raised
Cards em hover/drag, elementos sticky. Nível 3.
elevation/overlay
Dropdown, popover, combobox, date picker, tooltip, menus. Sempre com overlay/surface + overlay/border. Nível 4.
elevation/modal
Dialogs, sheets e drawers. Nível 5.
Foco
Focus ring Midas = borda 1px + halo suave de 4px ao redor (como a referência: borda fina + anel claro). Brand: borda selection/border + effect focus/ring (focus/halo). Neutral: borda border/hover + focus/ring-neutral (focus/halo-neutral, preto no Light, branco no Dark). Erro: borda status/danger/edge + focus/ring-danger. Os halos mudam sozinhos por tema.
focus/ring
focus/ring-danger
focus/ring-neutral
Materiais, blur e glass
Superfícies translúcidas para uso sobre mídia. Mais blur = mais legibilidade e menos fundo. Liquid usa o efeito GLASS (refração/distorção real). A diferença aparece sobre imagens reais com detalhe.
material/glass
material/glass-strong
material/liquid
material/frosted
material/frosted-strong
material/sheen
blur/sm
blur/md
blur/lg
glass/light
glass/medium
glass/strong
material/glass — Vidro padrão: blur 24 + brilho superior + sombra mínima.
material/glass-strong — Vidro intenso: blur 40 para fundos muito detalhados.
material/liquid — Liquid glass: refração e distorção do fundo (efeito GLASS do Figma) + sombra mínima. O efeito mais &quot;vidro&quot; do sistema.
material/frosted — Frosted padrão: blur 28 + brilho sutil.
material/frosted-strong — Frosted intenso: blur 48, quase opaco, para leitura sobre vídeo/imagem movimentada.
material/sheen — Acabamento flat moderno para botões degradê/sólidos: brilho de 1px no topo + sombra mínima.
material/raised-button — Botões sólidos com leve relevo (Secondary, On media, Gradient): brilho superior + elevation/card.

