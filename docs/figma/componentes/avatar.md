# Avatar

(Figma page 6113:9)

### Variantes: Avatar Face
- Expression (VARIANT: Smile | Neutral | Grin | Surprised | Lips | Joy) padrão: Smile
- Facial hair (VARIANT: None | Beard) padrão: None

### Variantes: Avatar Hair
- Style (VARIANT: Crop | Curly | Curly long | Bob | Bun | Quiff | Long | Buzz | Curly updo) padrão: Crop
- Fill (VARIANT: Solid | Outline) padrão: Solid

### Variantes: Avatar Body
- Style (VARIANT: Tee | Hoodie | Collar | Turtleneck | Blazer | Dots) padrão: Tee
- Fill (VARIANT: Outline | Solid) padrão: Outline

### Variantes: Avatar Glasses
- Style (VARIANT: None | Round | Square | Sun) padrão: None

### Variantes: Avatar Item
- Style (VARIANT: Headphones | Beanie | Earring | Cap | Pencil | None) padrão: None

### Variantes: Avatar Character
- Background (VARIANT: Paper | None) padrão: Paper

### Variantes: Avatar Badge
- Count#6118:0 (TEXT) padrão: 3
- Type (VARIANT: Online | Away | Busy | Offline | Verified | Count) padrão: Online
- Size (VARIANT: SM | MD | LG | XL) padrão: SM

### Variantes: Avatar
- Initials#6118:25 (TEXT) padrão: LC
- Show badge#6118:86 (BOOLEAN) padrão: false
- Show ring#6118:147 (BOOLEAN) padrão: false
- Type (VARIANT: Image | Initials | Icon | Illustration | Add) padrão: Image
- Size (VARIANT: XS | SM | MD | LG | XL | 2XL) padrão: XS
- Shape (VARIANT: Circle | Rounded) padrão: Circle

### Variantes: Avatar Group
- More#6120:0 (TEXT) padrão: +5
- Show more#6120:7 (BOOLEAN) padrão: true
- Size (VARIANT: SM | MD | LG) padrão: SM
- State (VARIANT: Default | Hover) padrão: Default

### Variantes: Avatar Option
- State (VARIANT: Default | Hover | Selected) padrão: Default

## Avatar · Documentação

MIDAS · COMPONENTES · IDENTIDADE · v1.0
Avatar
Avatar representa uma pessoa. Cinco tipos: foto, iniciais, ícone, ilustração (personagem doodle que o próprio usuário monta) e "adicionar" (convite). Seis tamanhos, círculo ou quadrado arredondado, badges de status, grupo com "+N" e tooltip com o nome no hover. Componentes: Avatar, Avatar Badge, Avatar Group, Avatar Character (+ peças), Avatar Option e o padrão Avatar Builder.
Tipos
Ordem de prioridade: foto do usuário → ilustração escolhida por ele → iniciais → ícone. "Add" é um espaço vazio para convidar alguém.
Image
Illustration
LC
Initials
Icon
Add
Tamanhos e formas
XS 24 (tabelas densas) · SM 32 (listas, comentários) · MD 40 (padrão) · LG 48 (cards) · XL 64 (perfil compacto) · 2XL 96 (perfil). Rounded usa raio proporcional (radius/sm → radius/4xl) — para marcas, empresas e contas; Circle para pessoas.
XS
SM
MD
LG
XL
2XL
XS
SM
MD
LG
XL
2XL
XS
SM
MD
LG
XL
2XL
XS
SM
MD
LG
XL
2XL
Badges
Online (status/success) · Away (status/warning) · Busy (status/danger + barra) · Offline (contorno) · Verified (accent Cyan + check) · Count (notificações). Ficam no canto inferior direito, com anel de 2px na cor do fundo. Cor nunca sozinha: o status também vai no texto/aria-label ("Online").
Online
Away
Busy
Offline
Verified
3
Count
LC
SM · Online
LC
MD · Online
LC
LG · Online
LC
XL · Online
LC
2XL · Online
Grupo e tooltip
Avatares sobrepostos em ¼ do tamanho, com anel na cor do fundo; o primeiro fica por cima. Máximo de 4–5 visíveis + "+N". No hover (ou foco) de um avatar aparece o Tooltip Inverse com o nome da pessoa.
RM
+5
RM
+5
Camila Ribeiro
Personagem (ilustração)
Doodle original do Midas: traço preto (avatar/ink) no papel branco (avatar/paper) — sem outras cores. O usuário escolhe Rosto (6 expressões, com ou sem barba), Cabelo (9 cortes, sólido ou contorno), Roupa (6, sólida ou contorno), Óculos (3) e Item (5). Traços convertidos em forma: o desenho escala sem engrossar em qualquer tamanho.
Avatar Builder
Padrão "Monte seu avatar" em duas versões: Mobile (tela cheia) e Modal (desktop, 648px — preview e Aleatório à esquerda; abas Rosto · Cabelo · Roupa · Óculos · Item, alternância Sem/Com barba e grade de opções à direita; rodapé com Usar uma foto, Cancelar e Usar avatar).
Seu avatar
Usar uma foto
Rosto
Cabelo
Roupa
Óculos
Item
Preenchimento
Sólido
Contorno
Salvar avatar
Monte seu avatar
Aleatório
Rosto
Cabelo
Roupa
Óculos
Item
Sem barba
Com barba
Usar uma foto
Cancelar
Usar avatar
• A ilustração é sempre preto no branco, nos três temas — é a "assinatura" do Midas e combina com qualquer foto ou cor ao redor.
• Foto: recorte quadrado, centralizado no rosto; mínimo 2× o tamanho exibido (192px para 2XL).
• Ao trocar uma peça, anime só a peça (fade 150ms).
• Salve a combinação como dados (ids das peças), não como imagem — assim a ilustração escala e pode evoluir.
• Ofereça "Aleatório" para quem não quer montar do zero.
Temas
Initials, Icon, Add e badges seguem o tema. Foto e ilustração não mudam (a ilustração continua no papel branco, com borda sutil para separar do fundo).
Light
LC
RM
+5
Dark
LC
RM
+5
Dark Blue
LC
RM
+5
Tokens
Iniciais/ícone: surface/muted · content/primary · content/secondary. Add: border/hover (tracejado) · content/secondary. Anel: surface/canvas. Badges: status/success|warning|danger/fill · border/strong · action/accent/bg · status/danger/on-fill. Ilustração: avatar/ink (neutral/950) · avatar/paper (neutral/50) · border/subtle. Raios: radius/full (Circle), radius/sm → radius/4xl (Rounded).
Acessibilidade
• Foto/ilustração: alt com o nome da pessoa ("Camila Ribeiro"); se o nome já está ao lado, alt="".
• Badge: inclua o status no texto acessível ("Camila Ribeiro, online"). Contador: "3 notificações".
• Grupo: o "+5" é um botão com aria-label "Ver mais 5 pessoas"; o tooltip abre também no foco por teclado.
• Iniciais: content/primary sobre surface/muted ≥ 4,5:1 nos 3 temas.
• Alvos de toque ≥ 44px quando o avatar é clicável (XS/SM precisam de área estendida).
Faça e não faça
Faça
• Mesmo tamanho e forma numa lista. • Ilustração preto no branco, sem colorir peças. • "+N" quando passar de 5. • Tooltip com o nome em grupos.
Não faça
• Misturar Circle e Rounded para pessoas. • Badge em XS (fica ilegível). • Colorir o personagem ou o fundo dele. • Usar ícone genérico quando há iniciais disponíveis.
Changelog
v1.0 · Avatar (60 variantes: Type × Size × Shape), Avatar Badge (24), Avatar Group (6, com tooltip no hover), Avatar Option (3) e padrão Avatar Builder.
v1.0 · Avatar Character com peças: Face (Smile, Joy, Lips, Neutral, Grin, Surprised × sem/com barba), Hair (9 cortes, incl. Curly long e Curly updo com franja × Solid/Outline), Body (6 × Outline/Solid), Glasses (4), Item (6).
v1.0 · Ilustração só em preto e branco (avatar/ink, avatar/paper). Bigode removido. Traços convertidos em forma para escalar sem engrossar.

### Variantes: Avatar Builder
- Device (VARIANT: Mobile | Modal) padrão: Mobile

