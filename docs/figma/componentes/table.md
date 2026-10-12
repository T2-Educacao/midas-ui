# Table

(Figma page 6258:9)

### Variantes: Table Cell
- Text#6258:44 (TEXT) padrão: Renda fixa
- Show subtext#6258:46 (BOOLEAN) padrão: true
- Value#6258:47 (TEXT) padrão: 72%
- Name#6259:37 (TEXT) padrão: Ana Souza
- Email#6259:78 (TEXT) padrão: ana@t2.com.br
- Title#6259:119 (TEXT) padrão: Plano Pro
- Detail#6259:160 (TEXT) padrão: Anual · desde 2024
- Amount#6259:201 (TEXT) padrão: R$ 12.480,00
- Change#6259:242 (TEXT) padrão: +4,2%
- Date#6259:283 (TEXT) padrão: 12 set 2026
- Chevron#6309:0 (INSTANCE_SWAP) padrão: 1:144461
- Type (VARIANT: Text | Subtext | Avatar | Status | Progress | Number | Trend | Date | Actions | Checkbox | Expand) padrão: Text
- Density (VARIANT: Default | Compact) padrão: Default
- Tone (VARIANT: Brand | Neutral) padrão: Brand

### Variantes: Table Header Cell
- Label#6259:32 (TEXT) padrão: Coluna
- Type (VARIANT: Text | Checkbox) padrão: Text
- Sort (VARIANT: None | Sortable | Ascending | Descending) padrão: None
- Align (VARIANT: Left | Right) padrão: Left
- Density (VARIANT: Default | Compact) padrão: Default
- Tone (VARIANT: Brand | Neutral) padrão: Brand

### Variantes: Table Header
- Density (VARIANT: Default | Compact) padrão: Default
- Tone (VARIANT: Brand | Neutral) padrão: Brand

### Variantes: Table Row
- State (VARIANT: Default | Hover | Selected) padrão: Default
- Density (VARIANT: Default | Compact) padrão: Default
- Tone (VARIANT: Brand | Neutral) padrão: Brand

### Variantes: Table Toolbar
- Title#6260:12 (TEXT) padrão: Alunos
- Count#6260:13 (TEXT) padrão: 128
- Selection#6260:14 (TEXT) padrão: 3 selecionados
- Type (VARIANT: Default | Selection) padrão: Default
- Style (VARIANT: Solid | Glass) padrão: Solid
- Tone (VARIANT: Brand | Neutral) padrão: Brand

### Variantes: Table Pagination
- Range#6260:31 (TEXT) padrão: 1–10 de 128
- Type (VARIANT: Numbers | Simple) padrão: Numbers
- Tone (VARIANT: Brand | Neutral) padrão: Brand

### Variantes: Table
- Variant (VARIANT: Default | Compact | Striped | Grouped | Selection | Mobile | Cards | Expandable) padrão: Default
- Style (VARIANT: Solid | Glass | Plain) padrão: Solid
- Tone (VARIANT: Brand | Neutral) padrão: Brand

## Table · Documentação

DADOS
Table
Tabela de dados do Midas montada com componentes: Table Toolbar, Table Header (Header Cell), Table Row (Table Cell) e Table Pagination. Variantes Default, Compact, Striped, Grouped, Selection e Mobile; estilos Solid, Glass e Plain (sem fundo); Tone Brand e Neutral; Light, Dark e Dark Blue pelo modo Theme.
Anatomia
Cada parte é um componente próprio em Assets. A célula expõe Avatar, Status (Tag) e Checkbox para trocar foto, tom e estado direto na instância.
Alunos
128
Buscar aluno
Filtros
Exportar
Adicionar
Aluno
Plano
Status
Progresso
Saldo
Último acesso

Ana Souza
ana@t2.com.br
Plano Pro
Anual · desde 2024
🔥
Ativo
72%
R$ 12.480,00
12 set 2026
Rafael Lima
rafael@t2.com.br
Plano Essencial
Mensal
🔥
Pendente
38%
R$ 1.920,00
10 set 2026
Mei Tanaka
mei@t2.com.br
Plano Pro
Anual · desde 2023
🔥
Ativo
91%
R$ 24.300,00
09 set 2026
Lucas Martins
lucas@t2.com.br
Business
5 licenças
🔥
Em análise
55%
R$ 8.750,00
05 set 2026
Carlos Mendes
carlos@t2.com.br
Plano Essencial
Mensal
🔥
Inativo
12%
R$ 0,00
28 ago 2026
Priya Rao
priya@t2.com.br
Plano Pro
Anual
🔥
Atrasado
64%
R$ 3.210,00
21 ago 2026
1–10 de 128
Linhas por página
10
1
2
3
4
5
…
13
1
Table Toolbar
Título + contador mono, busca, filtros, exportar e ação primária. Type Selection vira barra de ações em massa.
2
Table Header
Header Cell em JetBrains Mono (overline) com ordenação Sortable / Ascending / Descending e selecionar tudo.
3
Table Row
Default, Hover e Selected. Divisor 1px border/subtle, sem bordas verticais.
4
Table Cell
Text, Subtext, Avatar (foto), Status, Progress, Number, Trend, Date, Actions e Checkbox. Números sempre em mono e alinhados à direita.
5
Table Pagination
Intervalo em mono, linhas por página e páginas numeradas, ou Anterior/Próxima.
Cards e Expansível
Visual mais moderno: cabeçalho leve e arredondado, sem caixa alta; só o ⋯ nas ações. Cards: cada linha vira um card com gap de 8px, chips de filtro removíveis e "Ordenar: …". Expansível: chevron na primeira coluna abre uma subtabela (ex.: módulos do aluno).
Alunos
128
Buscar aluno
Filtros
Exportar
Adicionar
🔥
Plano Pro
🔥
Ativo
Ordenar: Último acesso
Colunas
Aluno
Plano
Status
Progresso
Saldo
Último acesso

Ana Souza
ana@t2.com.br
Plano Pro
Anual · desde 2024
🔥
Ativo
72%
R$ 12.480,00
12 set 2026
Rafael Lima
rafael@t2.com.br
Plano Essencial
Mensal
🔥
Pendente
38%
R$ 1.920,00
10 set 2026
Mei Tanaka
mei@t2.com.br
Plano Pro
Anual · desde 2023
🔥
Ativo
91%
R$ 24.300,00
09 set 2026
Lucas Martins
lucas@t2.com.br
Business
5 licenças
🔥
Em análise
55%
R$ 8.750,00
05 set 2026
Carlos Mendes
carlos@t2.com.br
Plano Essencial
Mensal
🔥
Inativo
12%
R$ 0,00
28 ago 2026
1–10 de 128
Linhas por página
10
1
2
3
4
5
…
13
Alunos
128
Buscar aluno
Filtros
Exportar
Adicionar
Aluno
Plano
Status
Progresso
Saldo
Último acesso

Ana Souza
ana@t2.com.br
Plano Pro
Anual · desde 2024
🔥
Ativo
72%
R$ 12.480,00
12 set 2026
Módulo
Aulas
Progresso
Nota
Concluído em
Renda fixa do zero
12/12
100%
9,2
02 set 2026
Tesouro Direto na prática
8/10
80%
8,5
—
CDB, LCI e LCA
3/9
33%
—
—
Rafael Lima
rafael@t2.com.br
Plano Essencial
Mensal
🔥
Pendente
38%
R$ 1.920,00
10 set 2026
Mei Tanaka
mei@t2.com.br
Plano Pro
Anual · desde 2023
🔥
Ativo
91%
R$ 24.300,00
09 set 2026
Lucas Martins
lucas@t2.com.br
Business
5 licenças
🔥
Em análise
55%
R$ 8.750,00
05 set 2026
Carlos Mendes
carlos@t2.com.br
Plano Essencial
Mensal
🔥
Inativo
12%
R$ 0,00
28 ago 2026
1–10 de 128
Linhas por página
10
1
2
3
4
5
…
13
Alunos
128
Buscar aluno
Filtros
Exportar
Adicionar
🔥
Plano Pro
🔥
Ativo
Ordenar: Último acesso
Colunas
Aluno
Plano
Status
Progresso
Saldo
Último acesso

Ana Souza
ana@t2.com.br
Plano Pro
Anual · desde 2024
🔥
Ativo
72%
R$ 12.480,00
12 set 2026
Rafael Lima
rafael@t2.com.br
Plano Essencial
Mensal
🔥
Pendente
38%
R$ 1.920,00
10 set 2026
Mei Tanaka
mei@t2.com.br
Plano Pro
Anual · desde 2023
🔥
Ativo
91%
R$ 24.300,00
09 set 2026
Lucas Martins
lucas@t2.com.br
Business
5 licenças
🔥
Em análise
55%
R$ 8.750,00
05 set 2026
Carlos Mendes
carlos@t2.com.br
Plano Essencial
Mensal
🔥
Inativo
12%
R$ 0,00
28 ago 2026
1–10 de 128
Linhas por página
10
1
2
3
4
5
…
13
Variantes
Compact (40px) para listas densas; Striped (zebrada) para leitura horizontal longa; Grouped agrupa por categoria com cabeçalho em mono; Selection mostra a barra de ações em massa no lugar da toolbar.
COMPACT · NEUTRAL
Alunos
128
Buscar aluno
Filtros
Exportar
Adicionar
Aluno
Plano
Status
Progresso
Saldo
Último acesso

Ana Souza
ana@t2.com.br
Plano Pro
Anual · desde 2024
🔥
Ativo
72%
R$ 12.480,00
12 set 2026
Rafael Lima
rafael@t2.com.br
Plano Essencial
Mensal
🔥
Pendente
38%
R$ 1.920,00
10 set 2026
Mei Tanaka
mei@t2.com.br
Plano Pro
Anual · desde 2023
🔥
Ativo
91%
R$ 24.300,00
09 set 2026
Lucas Martins
lucas@t2.com.br
Business
5 licenças
🔥
Em análise
55%
R$ 8.750,00
05 set 2026
Carlos Mendes
carlos@t2.com.br
Plano Essencial
Mensal
🔥
Inativo
12%
R$ 0,00
28 ago 2026
Priya Rao
priya@t2.com.br
Plano Pro
Anual
🔥
Atrasado
64%
R$ 3.210,00
21 ago 2026
Júlia Rocha
julia@t2.com.br
Business
12 licenças
🔥
Ativo
83%
R$ 41.900,00
20 ago 2026
Pedro Alves
pedro@t2.com.br
Plano Pro
Mensal
🔥
Ativo
47%
R$ 5.600,00
18 ago 2026
1–10 de 128
Linhas por página
10
1
2
3
4
5
…
13
STRIPED · BRAND
Alunos
128
Buscar aluno
Filtros
Exportar
Adicionar
Aluno
Plano
Status
Progresso
Saldo
Último acesso

Ana Souza
ana@t2.com.br
Plano Pro
Anual · desde 2024
🔥
Ativo
72%
R$ 12.480,00
12 set 2026
Rafael Lima
rafael@t2.com.br
Plano Essencial
Mensal
🔥
Pendente
38%
R$ 1.920,00
10 set 2026
Mei Tanaka
mei@t2.com.br
Plano Pro
Anual · desde 2023
🔥
Ativo
91%
R$ 24.300,00
09 set 2026
Lucas Martins
lucas@t2.com.br
Business
5 licenças
🔥
Em análise
55%
R$ 8.750,00
05 set 2026
Carlos Mendes
carlos@t2.com.br
Plano Essencial
Mensal
🔥
Inativo
12%
R$ 0,00
28 ago 2026
Priya Rao
priya@t2.com.br
Plano Pro
Anual
🔥
Atrasado
64%
R$ 3.210,00
21 ago 2026
1–10 de 128
Linhas por página
10
1
2
3
4
5
…
13
GROUPED · NEUTRAL
Alunos
128
Buscar aluno
Filtros
Exportar
Adicionar
Aluno
Plano
Status
Progresso
Saldo
Último acesso

Plano Pro
3
Ana Souza
ana@t2.com.br
Plano Pro
Anual · desde 2024
🔥
Ativo
72%
R$ 12.480,00
12 set 2026
Mei Tanaka
mei@t2.com.br
Plano Pro
Anual · desde 2023
🔥
Ativo
91%
R$ 24.300,00
09 set 2026
Priya Rao
priya@t2.com.br
Plano Pro
Anual
🔥
Atrasado
64%
R$ 3.210,00
21 ago 2026
Plano Essencial
2
Rafael Lima
rafael@t2.com.br
Plano Essencial
Mensal
🔥
Pendente
38%
R$ 1.920,00
10 set 2026
Carlos Mendes
carlos@t2.com.br
Plano Essencial
Mensal
🔥
Inativo
12%
R$ 0,00
28 ago 2026
Business
1
Lucas Martins
lucas@t2.com.br
Business
5 licenças
🔥
Em análise
55%
R$ 8.750,00
05 set 2026
1–10 de 128
Linhas por página
10
1
2
3
4
5
…
13
SELECTION · BRAND
3 selecionados
Exportar
Arquivar
Excluir
Aluno
Plano
Status
Progresso
Saldo
Último acesso

Ana Souza
ana@t2.com.br
Plano Pro
Anual · desde 2024
🔥
Ativo
72%
R$ 12.480,00
12 set 2026
Rafael Lima
rafael@t2.com.br
Plano Essencial
Mensal
🔥
Pendente
38%
R$ 1.920,00
10 set 2026
Mei Tanaka
mei@t2.com.br
Plano Pro
Anual · desde 2023
🔥
Ativo
91%
R$ 24.300,00
09 set 2026
Lucas Martins
lucas@t2.com.br
Business
5 licenças
🔥
Em análise
55%
R$ 8.750,00
05 set 2026
Carlos Mendes
carlos@t2.com.br
Plano Essencial
Mensal
🔥
Inativo
12%
R$ 0,00
28 ago 2026
Priya Rao
priya@t2.com.br
Plano Pro
Anual
🔥
Atrasado
64%
R$ 3.210,00
21 ago 2026
1–10 de 128
Linhas por página
10
1
2
3
4
5
…
13
Glass
Style Glass: superfície material/glass com borda clara e desfoque de fundo. Use sobre imagem, aurora ou gradiente — nunca sobre fundo liso, onde vira só um cinza.
Alunos
128
Buscar aluno
Filtros
Exportar
Adicionar
Aluno
Plano
Status
Progresso
Saldo
Último acesso

Ana Souza
ana@t2.com.br
Plano Pro
Anual · desde 2024
🔥
Ativo
72%
R$ 12.480,00
12 set 2026
Rafael Lima
rafael@t2.com.br
Plano Essencial
Mensal
🔥
Pendente
38%
R$ 1.920,00
10 set 2026
Mei Tanaka
mei@t2.com.br
Plano Pro
Anual · desde 2023
🔥
Ativo
91%
R$ 24.300,00
09 set 2026
Lucas Martins
lucas@t2.com.br
Business
5 licenças
🔥
Em análise
55%
R$ 8.750,00
05 set 2026
Carlos Mendes
carlos@t2.com.br
Plano Essencial
Mensal
🔥
Inativo
12%
R$ 0,00
28 ago 2026
Priya Rao
priya@t2.com.br
Plano Pro
Anual
🔥
Atrasado
64%
R$ 3.210,00
21 ago 2026
1–10 de 128
Linhas por página
10
1
2
3
4
5
…
13
3 selecionados
Exportar
Arquivar
Excluir
Aluno
Plano
Status
Progresso
Saldo
Último acesso

Ana Souza
ana@t2.com.br
Plano Pro
Anual · desde 2024
🔥
Ativo
72%
R$ 12.480,00
12 set 2026
Rafael Lima
rafael@t2.com.br
Plano Essencial
Mensal
🔥
Pendente
38%
R$ 1.920,00
10 set 2026
Mei Tanaka
mei@t2.com.br
Plano Pro
Anual · desde 2023
🔥
Ativo
91%
R$ 24.300,00
09 set 2026
Lucas Martins
lucas@t2.com.br
Business
5 licenças
🔥
Em análise
55%
R$ 8.750,00
05 set 2026
Carlos Mendes
carlos@t2.com.br
Plano Essencial
Mensal
🔥
Inativo
12%
R$ 0,00
28 ago 2026
Priya Rao
priya@t2.com.br
Plano Pro
Anual
🔥
Atrasado
64%
R$ 3.210,00
21 ago 2026
1–10 de 128
Linhas por página
10
1
2
3
4
5
…
13
Sem fundo (Plain)
Style Plain: sem card, sem sombra e sem borda externa — só divisores entre linhas. Para tabelas dentro de um card ou página que já tem superfície própria.
Alunos
128
Buscar aluno
Filtros
Exportar
Adicionar
Aluno
Plano
Status
Progresso
Saldo
Último acesso

Ana Souza
ana@t2.com.br
Plano Pro
Anual · desde 2024
🔥
Ativo
72%
R$ 12.480,00
12 set 2026
Rafael Lima
rafael@t2.com.br
Plano Essencial
Mensal
🔥
Pendente
38%
R$ 1.920,00
10 set 2026
Mei Tanaka
mei@t2.com.br
Plano Pro
Anual · desde 2023
🔥
Ativo
91%
R$ 24.300,00
09 set 2026
Lucas Martins
lucas@t2.com.br
Business
5 licenças
🔥
Em análise
55%
R$ 8.750,00
05 set 2026
Carlos Mendes
carlos@t2.com.br
Plano Essencial
Mensal
🔥
Inativo
12%
R$ 0,00
28 ago 2026
Priya Rao
priya@t2.com.br
Plano Pro
Anual
🔥
Atrasado
64%
R$ 3.210,00
21 ago 2026
1–10 de 128
Linhas por página
10
1
2
3
4
5
…
13
Temas
Dark e Dark Blue pelo modo Theme no frame pai — os mesmos componentes, sem variantes de cor.
DARK
Alunos
128
Buscar aluno
Filtros
Exportar
Adicionar
Aluno
Plano
Status
Progresso
Saldo
Último acesso

Ana Souza
ana@t2.com.br
Plano Pro
Anual · desde 2024
🔥
Ativo
72%
R$ 12.480,00
12 set 2026
Rafael Lima
rafael@t2.com.br
Plano Essencial
Mensal
🔥
Pendente
38%
R$ 1.920,00
10 set 2026
Mei Tanaka
mei@t2.com.br
Plano Pro
Anual · desde 2023
🔥
Ativo
91%
R$ 24.300,00
09 set 2026
Lucas Martins
lucas@t2.com.br
Business
5 licenças
🔥
Em análise
55%
R$ 8.750,00
05 set 2026
Carlos Mendes
carlos@t2.com.br
Plano Essencial
Mensal
🔥
Inativo
12%
R$ 0,00
28 ago 2026
Priya Rao
priya@t2.com.br
Plano Pro
Anual
🔥
Atrasado
64%
R$ 3.210,00
21 ago 2026
1–10 de 128
Linhas por página
10
1
2
3
4
5
…
13
DARK BLUE
Alunos
128
Buscar aluno
Filtros
Exportar
Adicionar
Aluno
Plano
Status
Progresso
Saldo
Último acesso

Plano Pro
3
Ana Souza
ana@t2.com.br
Plano Pro
Anual · desde 2024
🔥
Ativo
72%
R$ 12.480,00
12 set 2026
Mei Tanaka
mei@t2.com.br
Plano Pro
Anual · desde 2023
🔥
Ativo
91%
R$ 24.300,00
09 set 2026
Priya Rao
priya@t2.com.br
Plano Pro
Anual
🔥
Atrasado
64%
R$ 3.210,00
21 ago 2026
Plano Essencial
2
Rafael Lima
rafael@t2.com.br
Plano Essencial
Mensal
🔥
Pendente
38%
R$ 1.920,00
10 set 2026
Carlos Mendes
carlos@t2.com.br
Plano Essencial
Mensal
🔥
Inativo
12%
R$ 0,00
28 ago 2026
Business
1
Lucas Martins
lucas@t2.com.br
Business
5 licenças
🔥
Em análise
55%
R$ 8.750,00
05 set 2026
1–10 de 128
Linhas por página
10
1
2
3
4
5
…
13
Mobile
Abaixo de 768px a tabela vira lista: avatar + status na primeira linha, progresso + saldo na segunda, busca e filtro como ícones e "Carregar mais" no lugar da paginação.
Alunos
128
Ana Souza
ana@t2.com.br
🔥
Ativo
72%
R$ 12.480,00
Rafael Lima
rafael@t2.com.br
🔥
Pendente
38%
R$ 1.920,00
Mei Tanaka
mei@t2.com.br
🔥
Ativo
91%
R$ 24.300,00
Lucas Martins
lucas@t2.com.br
🔥
Em análise
55%
R$ 8.750,00
Priya Rao
priya@t2.com.br
🔥
Atrasado
64%
R$ 3.210,00
Carregar mais
Alunos
128
Ana Souza
ana@t2.com.br
🔥
Ativo
72%
R$ 12.480,00
Rafael Lima
rafael@t2.com.br
🔥
Pendente
38%
R$ 1.920,00
Mei Tanaka
mei@t2.com.br
🔥
Ativo
91%
R$ 24.300,00
Lucas Martins
lucas@t2.com.br
🔥
Em análise
55%
R$ 8.750,00
Priya Rao
priya@t2.com.br
🔥
Atrasado
64%
R$ 3.210,00
Carregar mais
Alunos
128
Ana Souza
ana@t2.com.br
🔥
Ativo
72%
R$ 12.480,00
Rafael Lima
rafael@t2.com.br
🔥
Pendente
38%
R$ 1.920,00
Mei Tanaka
mei@t2.com.br
🔥
Ativo
91%
R$ 24.300,00
Lucas Martins
lucas@t2.com.br
🔥
Em análise
55%
R$ 8.750,00
Priya Rao
priya@t2.com.br
🔥
Atrasado
64%
R$ 3.210,00
Carregar mais
Regras de uso
—
Números, datas, valores e cabeçalhos em JetBrains Mono; texto corrido em Geist.
—
Valores monetários e percentuais alinhados à direita; texto à esquerda.
—
Status sempre com Tag Subtle + ponto (nunca só cor) e tons suaves.
—
Linhas sem bordas verticais: só divisor 1px border/subtle. Card com borda clara + sombra suave.
—
Hover em state/hover; Selected em selection/bg (Brand) ou surface/muted (Neutral), com checkbox marcado.
—
Fotos de pessoas vêm de Image Gallery › Avatar photos.
—
Ações destrutivas na barra de seleção em texto vermelho suave (status/danger/content-strong), não em botão saturado.
—
Tokens: surface/default, surface/muted, surface/canvas, border/subtle, border/default (trilho do progresso), state/hover, selection/*, material/glass/*.

