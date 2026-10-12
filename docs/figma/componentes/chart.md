# Chart

(Figma page 6250:9)

### Variantes: Chart
- Type (VARIANT: Bar | Bar Highlight | Bar Horizontal | Line | Line Smooth | Area | Bar Grouped | Bar Stacked | Multi-line | Donut | Pie | Radial Segments | Gauge | Rings | Heatmap | Waffle | Funnel | Scatter | Allocation | Waterfall | Candlestick | Bar Gradient | Line Gradient | Curve Glow | Ring Gradient | Bar Stacked Soft | Radar) padrão: Bar
- Color (VARIANT: Brand | Neutral | Multi) padrão: Brand
- Size (VARIANT: Default | Wide) padrão: Default

## Chart · Documentação

DADOS
Chart
21 tipos de gráfico em Brand, Neutral e Multi, nos tamanhos Default (400) e Wide (800, para cards horizontais). Paleta categórica chart/series-1…6 em ordem fixa, validada para daltonismo no Light, Dark e Dark Blue.
Gráficos modernos com degradê
Bar Gradient, Line Gradient (glow + área colorida suave), Curve Glow, Ring Gradient e Bar Stacked Soft. Use 1 gráfico com degradê por tela como destaque; o restante em Brand ou Neutral.
632
Jan
Fev
Mar
Abr
Mai
Jun
Jul
Ago
Set
Out
Nov
Dez
72%
da meta
Média da semana
Jan
Fev
Mar
Abr
Mai
Jun
Jul
+360%
ROI vs semana anterior
192k
216k
192k
173k
178k
202k
JAN
FEV
MAR
ABR
MAI
JUN
Radar (aranha)
Compara várias dimensões numa teia — ex.: distribuição da carteira x perfil recomendado, ou desempenho por módulo. Até 8 eixos e 2 séries; a versão Wide traz a tabela de valores ao lado.
Renda fixa
Ações
FIIs
Previdência
Cripto
Tesouro
Renda fixa
Ações
FIIs
Previdência
Cripto
Tesouro
Renda fixa
85% · 60%
Ações
55% · 80%
FIIs
40% · 65%
Previdência
70% · 35%
Cripto
20% · 50%
Tesouro
90% · 55%
Sua carteira
Perfil moderado
Dashboard · Light
Gráficos dentro de cards (borda clara + sombra suave). Wide ocupa cards horizontais.
Patrimônio
R$ 48.620
Mensal ▾
20k
15k
10k
5k
0
R$ 16,1k
Jan
Fev
Mar
Abr
Mai
Jun
Jul
Ago
Set
Out
Nov
Dez
Alocação
4 classes
Mensal ▾
R$ 48,6k
patrimônio
Renda fixa 42%
Ações 26%
FIIs 18%
Internacional 14%
Aportes por mês
R$ 1.850
Mensal ▾
20k
15k
10k
5k
0
Média 12,4k
R$ 17,2k
Jan
Fev
Mar
Abr
Mai
Jun
Jul
Ago
Carteira vs CDI
+12,4%
Mensal ▾
20%
15%
10%
5%
0
Jan
Fev
Mar
Abr
Mai
Jun
Jul
Ago
Carteira
CDI
IPCA
Score
742
Mensal ▾
742
0
1000
Dashboard · Dark
Modo Theme aplicado no frame.
Patrimônio
R$ 48.620
Mensal ▾
20k
15k
10k
5k
0
R$ 16,1k
Jan
Fev
Mar
Abr
Mai
Jun
Jul
Ago
Set
Out
Nov
Dez
Alocação
4 classes
Mensal ▾
R$ 48,6k
patrimônio
Renda fixa 42%
Ações 26%
FIIs 18%
Internacional 14%
Aportes por mês
R$ 1.850
Mensal ▾
20k
15k
10k
5k
0
Média 12,4k
R$ 17,2k
Jan
Fev
Mar
Abr
Mai
Jun
Jul
Ago
Carteira vs CDI
+12,4%
Mensal ▾
20%
15%
10%
5%
0
Jan
Fev
Mar
Abr
Mai
Jun
Jul
Ago
Carteira
CDI
IPCA
Score
742
Mensal ▾
742
0
1000
Dashboard · Dark Blue
Modo Theme aplicado no frame.
Patrimônio
R$ 48.620
Mensal ▾
20k
15k
10k
5k
0
R$ 16,1k
Jan
Fev
Mar
Abr
Mai
Jun
Jul
Ago
Set
Out
Nov
Dez
Alocação
4 classes
Mensal ▾
R$ 48,6k
patrimônio
Renda fixa 42%
Ações 26%
FIIs 18%
Internacional 14%
Aportes por mês
R$ 1.850
Mensal ▾
20k
15k
10k
5k
0
Média 12,4k
R$ 17,2k
Jan
Fev
Mar
Abr
Mai
Jun
Jul
Ago
Carteira vs CDI
+12,4%
Mensal ▾
20%
15%
10%
5%
0
Jan
Fev
Mar
Abr
Mai
Jun
Jul
Ago
Carteira
CDI
IPCA
Score
742
Mensal ▾
742
0
1000
Regras de dados (dataviz)
• Escolha a forma pela função: comparação → barras; tendência → linha/área; parte do todo → donut/alocação (até 5 partes); distribuição → dispersão/heatmap; preço → candlestick; variação acumulada → waterfall. • Cores categóricas em ordem fixa (series-1 → 6); nunca recicle cor — 7ª categoria vira "Outros". • Nunca eixo Y duplo. Duas medidas de escala diferente = dois gráficos. • Marcas finas: linhas 2–2,5px, barras com cantos 6–8 apenas no topo, gap de 2px entre segmentos. • Grade recessiva (chart/grid tracejada) e rótulos em chart/axis; textos nunca na cor da série. • ≥ 2 séries sempre com legenda; destaque só o ponto importante (tooltip pill, crosshair). • Verde/vermelho de status só para alta/baixa (candlestick, waterfall), sempre com rótulo. • Ofereça a tabela de dados como alternativa acessível.
Tokens e changelog
chart/series-1…6 (Light: cyan 600, violet 600, emerald 600, amber 600, blue 600, rose 600 · Dark/Dark Blue: cyan 600, violet 500, emerald 600, amber 600, blue 500, rose 500) · chart/series-*-soft · chart/mono-1…3 · chart/grid · chart/axis · widget/*/area-top/bottom. v1.0 · Chart (21 tipos × Brand/Neutral/Multi × Default/Wide).

### Variantes: Score Bubbles
- Modules (VARIANT: 4 | 6 | 8) padrão: 4
- Color (VARIANT: Status | Multi | Brand | Neutral) padrão: Status
- Size (VARIANT: Default | Compact) padrão: Default

