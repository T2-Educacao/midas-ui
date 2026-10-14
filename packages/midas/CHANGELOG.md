# @t2-educacao/midas

## 0.5.1

### Patch Changes

- c88fa62: Corrige o contraste do degradê accent no tema claro: `--midas-action-accent-gradient-top` passa de `cyan/600` (`#0092b8`, 3,47:1 com o texto) para `cyan/700` (`#007595`, 5,1:1), seguindo a regra do Figma de trocar o passo da paleta para resolver contraste.

## 0.5.0

### Minor Changes

- bbccf9e: Pacote mais legível por IA e docs completas.
  
  Novos arquivos no pacote: `llms-full.txt` (todas as docs em um arquivo só) e `components.json` (manifesto com nome, descrição, imports e caminho da doc de cada componente), além das regras de uso no topo do `llms.txt`. Exportados como `@t2-educacao/midas/llms-full.txt` e `@t2-educacao/midas/components.json`.
  
  Docs: toda página de componente agora tem uso, props, exemplo, acessibilidade e "não faça" (verificado por teste). Completadas as de DatePicker, Select, NativeSelect, Questionnaire e Card (conteúdo que precisa vazar com `overflow-visible py-0`).

## 0.4.0

### Minor Changes

- f32b288: Campos, escolhas e avaliação alinhados ao Figma novo, só com tokens semânticos.
  
  Novos componentes: `SearchBar`, `TagInput`, `CodeInput`, `ChoiceChip`/`ChoiceChipGroup`, `AnswerOption`/`AnswerOptionGroup`, `Rating`/`RatingIcon`/`RatingSummary`, `FormLayout`/`FormLayoutItem`/`FormSection`/`FormActions`, `FileItem`, `FieldSuccess` e `FieldCounter`.
  
  Atualizados (variantes `size`, `appearance` outline/filled/glass, `tone` brand/neutral, `shape` rounded/pill): `Input`, `Textarea`, `InputGroup`, `Select`, `NativeSelect`, `Combobox`, `FileUpload`, `ChoiceCard` (layout, media, columns), `SegmentedControl`, `Slider` (`tone`), `Chip`.
  
  Quebras visuais (0.x, minor): a altura padrão de `Input`, `Select`, `NativeSelect` e `Combobox` passou de 32px para 48px (MD); SM = 40px, LG = 56px. `SegmentedControl` passou a ter trilho `surface-muted` com segmento elevado (padrão `md` = 36px, antes 32px) e o `size` aceita `sm | md` (`default` continua aceito). `inputClasses` deixou de ser exportado de `input.tsx` (use `inputVariants`). `FieldError` agora mostra um ícone antes do texto.
- f32b288: Componentes redesenhados conforme o novo Figma do Midas, com tokens semânticos (funcionam nos temas Light, Dark e Dark Blue sem `dark:`).
  
  Atualizados: Button (variantes `primary`, `accent` e expressivas `glass`, `frosted`, `on-media`, `gradient-*`; tamanhos `xs` a `2xl`), ButtonGroup (`layout`), Toggle, Switch, Checkbox e Radio (`size`, `tone`), Input, Textarea, InputGroup, Select, NativeSelect, Combobox, Slider, FileUpload, ChoiceCard, SegmentedControl, Dialog (`appearance`, `size`, bottom sheet no mobile), Popover (seta), Tooltip (variantes e `ChartTooltip`), DropdownMenu, Calendar, DatePicker, Spinner, Progress, Skeleton (padrões prontos), Separator, Kbd, Badge (`type` label, count, dot), Avatar (tamanhos `xs` a `2xl`, `AvatarAdd`, `AvatarOption`), EmptyState, Toast, Alert, Tabs, Breadcrumb, Pagination, Stepper, Sidebar, Table, ListItem, Card, Accordion e Carousel.
  
  Novos: IconButton, Link, SocialButton, SelectionField, ButtonFeedback, SearchBar, TagInput, CodeInput, ChoiceChip, AnswerOption, Rating, FormLayout, Modal (success, error, status, share, permission), Drawer, BottomSheet, WheelPicker, DateSheet, EventCalendar, Tag, Banner, Notification, LoadingState, BottomNavigation, Header, TableToolbar, TablePagination, ListCard, AgendaItem, Chart (container, legenda, tooltip e bolhas de nota, sem dependência do recharts), Widget (stat, chart, message, filter, asset, image, alert), Hero, Quote, VideoPlayer, MiniPlayer e CourseCover.
  
  Quebras de visual e de API a conferir ao atualizar: altura padrão de Input, Select, NativeSelect e Combobox passou de 32 para 48px; `inputClasses` deixou de ser exportado (use `inputVariants`); `Spinner` agora é um `<span>` e não aceita props de SVG; `Button` `lg` e `icon-lg` passaram de 36 para 40px; `Checkbox` e `Radio` passam a 20px; Dialog tem largura padrão de 520px e vira bottom sheet no mobile; Tooltip abre após 400ms; Popover tem seta por padrão; tamanhos do Avatar (`sm` agora 32px, `lg` 48px); Table vem como card por padrão (`surface="plain"` para o visual antigo); Carousel com espaçamento de 24px.
- 3b57703: Fundação do Midas alinhada ao novo Figma.
  
  Tokens: 86 tokens semânticos (`surface`, `overlay`, `content`, `border`, `field`, `action`, `state`, `selection`, `focus`, `disabled`, `status`, `material`, `brand`, `chart`) em três temas: Light, Dark e Dark Blue (`data-theme="dark-blue"`). Os nomes antigos (`background`, `primary`, `muted`, `border`...) continuam como alias dos novos, então o código existente não quebra. Utilitários novos: `bg-surface-canvas`, `text-content-secondary`, `border-border-subtle` etc.
  
  Tipografia: 15 text styles como utilitários (`text-heading-xl`, `text-body-md`, `text-label-sm`, `text-mono-sm`...). A fonte técnica passa a ser JetBrains Mono (variável `--font-jetbrains-mono`); quem usava `--font-geist-mono` precisa carregar a nova fonte.
  
  Escalas: alturas de controle (`h-control-xs` a `h-control-4xl`) e de ícone, raios por papel (`rounded-control`, `rounded-container`, `rounded-overlay`, `rounded-pill`), elevação (`shadow-elevation-*`), foco (`focus-ring`), materiais de vidro e variáveis de grid por breakpoint.
  
  Quebras de visual: `rounded-xl` passou de 14px para 12px e `rounded-2xl` de 18px para 14px, seguindo a escala do Figma. O preset do Tailwind v3 ganhou todos os novos nomes. Docs novas em `docs/fundamentos/*` (cores, tipografia, escalas, elevação e foco, grid).
- 3b57703: Ícones: o Midas passa a usar só o Tabler Icons, igual à página Icons do Figma. Quebra de API (0.x, por isso minor).
  
  - `@t2-educacao/midas/icons` agora exporta os ícones do Tabler com os nomes originais (`IconArrowRight`, `IconSearch`...). Antes exportava o Phosphor (`ArrowRight`, `MagnifyingGlass`...): troque os nomes pelos equivalentes do Tabler (https://tabler.io/icons).
  - `@t2-educacao/midas/icons/tabler` continua existindo como alias com o mesmo conteúdo.
  - A dependência `@phosphor-icons/react` foi removida; os componentes internos usam o Tabler.
  - Os tipos `IconWeight` e a prop `weight` deixam de existir: use `stroke` (traço) ou as variantes `Filled`.

## 0.3.0

### Minor Changes

- a7fc339: Segunda rodada de melhorias a partir da migração da hub.
  
  Novos componentes: `Table` (cabeçalho ordenável com `aria-sort`, densidade `sm`), `ListItem` (linha ou card clicável), `Sidebar` e `NavItem`, `Breadcrumb`, `Stepper`, `Skeleton`, `EmptyState` e `FileUpload` (dropzone com `accept`, `maxSize` e arrastar e soltar).
  
  Correções de comportamento:
  - `Input type="date"` e `datetime-local` agora limitam o ano por padrão (1900 a 2100), sem `min`/`max` do chamador. Quem precisava de datas fora desse intervalo deve passar `min`/`max`.
  - `TooltipTrigger asChild` envolve sozinho um filho `disabled` num `<span tabIndex={0}>`, então o tooltip abre em botão desabilitado ou carregando.
  - `MidasTooltip` exportado como alias de `Tooltip`, para arquivos que também usam o `Tooltip` do recharts.
  
  Props novas: `Button loadingText`; `Badge size` (`sm`, `default`, `lg`) e `icon`; `AvatarFallback colorFrom` (cor por nome, entre 8 cores de série); `SelectTrigger fullWidth`; `Textarea autoGrow` e `bare` (título inline sem borda).
  
  Tokens: `chart-1` a `chart-8` (claro e escuro) para séries de gráficos, disponíveis como `bg-chart-1` e `var(--midas-chart-1)`.
  
  Tailwind v3: novo preset `@t2-educacao/midas/tailwind-preset`, que alinha cores, raios e fonte do projeto às variáveis do Midas, com suporte a opacidade (`bg-primary/10`).
  
  Docs: guia de migração e instalação atualizados.

## 0.2.0

### Minor Changes

- 7606e10: Melhorias a partir do feedback da migração da hub (Tailwind v3).
  
  Novos componentes: `Switch`, `Tabs`, `Accordion`, `Collapsible`, `Slider`, `Alert`, `Chip` (removível), `SegmentedControl` (escolha única sem desmarcar) e `ChoiceCardGroup`/`ChoiceCard`/`ChoiceCardCheckbox` (card de opção selecionável).
  
  Tokens e camadas: novos tokens `warning` e `info` (claro e escuro) e variáveis `--midas-z-overlay` e `--midas-z-popup` para ajustar o z-index de Dialog, Select, Dropdown, Popover, Combobox, DatePicker e Tooltip.
  
  Tailwind v3: `styles.css` agora sai sem `@layer` (compila sem plugin PostCSS e não perde para resets sem camada) e com `translate`/`rotate`/`scale` convertidos para `transform`, no formato do v3, para o efeito não dobrar quando a mesma classe existe nos dois CSS. Quem importava `styles.css` ganha precedência normal de especificidade em vez de camada.
  
  Variantes e props: `filled` em `Button`, `Badge` e `Alert` (cor cheia nas variantes `destructive`, `success`, `warning` e `info`); `warning` e `info` em `Badge` e `Button` (e `success` em `Button`); `variant` e `indicatorClassName` em `Progress`; `size` numérico em `Avatar`; `fullWidth` e `wrapperClassName` em `NativeSelect`; `overlayClassName` em `Dialog`; `showSelectedDescription` em `Combobox`.
  
  Comportamentos: `Button loading` em botão só de ícone mostra apenas o spinner; `DialogContent` aceita `max-w-*` sem prefixo (a largura padrão passou de `sm:max-w-md` para `max-w-md`); a busca do `Combobox` ignora acentos; o rodapé do `Card` ganhou cantos arredondados para funcionar com `overflow-visible`.
  
  Docs: novo guia de migração, instalação para Tailwind v3 reescrita, e avisos sobre `Tooltip` em botão desabilitado e conflito de nome com o recharts.

## 0.1.1

### Patch Changes

- README e docs sem o aviso de pré-lançamento, com o link do site de documentação (https://midas.t2.com.br), que também passa a ser a homepage do pacote. Corrige o exemplo de espaçamento do Carousel para classes lógicas.

## 0.1.0

### Minor Changes

- Primeira versão pública do Midas: 31 componentes (Button, ButtonGroup, Spinner, Kbd, Toggle, ToggleGroup, Tooltip, Input, InputGroup, Field, Badge, Combobox, DropdownMenu, Popover, Toast, Avatar, Pagination, Carousel, Calendar, DatePicker, Questionnaire, Card, Dialog, Progress, Select, NativeSelect, Checkbox, RadioGroup, Textarea, Separator e DirectionProvider), tokens com tema claro e escuro, suporte a RTL, ícones Phosphor e Tabler, e documentação para agentes de IA em `docs/` e `llms.txt`.
