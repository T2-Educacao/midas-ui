---
"@t2-educacao/midas": minor
---

Componentes redesenhados conforme o novo Figma do Midas, com tokens semânticos (funcionam nos temas Light, Dark e Dark Blue sem `dark:`).

Atualizados: Button (variantes `primary`, `accent` e expressivas `glass`, `frosted`, `on-media`, `gradient-*`; tamanhos `xs` a `2xl`), ButtonGroup (`layout`), Toggle, Switch, Checkbox e Radio (`size`, `tone`), Input, Textarea, InputGroup, Select, NativeSelect, Combobox, Slider, FileUpload, ChoiceCard, SegmentedControl, Dialog (`appearance`, `size`, bottom sheet no mobile), Popover (seta), Tooltip (variantes e `ChartTooltip`), DropdownMenu, Calendar, DatePicker, Spinner, Progress, Skeleton (padrões prontos), Separator, Kbd, Badge (`type` label, count, dot), Avatar (tamanhos `xs` a `2xl`, `AvatarAdd`, `AvatarOption`), EmptyState, Toast, Alert, Tabs, Breadcrumb, Pagination, Stepper, Sidebar, Table, ListItem, Card, Accordion e Carousel.

Novos: IconButton, Link, SocialButton, SelectionField, ButtonFeedback, SearchBar, TagInput, CodeInput, ChoiceChip, AnswerOption, Rating, FormLayout, Modal (success, error, status, share, permission), Drawer, BottomSheet, WheelPicker, DateSheet, EventCalendar, Tag, Banner, Notification, LoadingState, BottomNavigation, Header, TableToolbar, TablePagination, ListCard, AgendaItem, Chart (container, legenda, tooltip e bolhas de nota, sem dependência do recharts), Widget (stat, chart, message, filter, asset, image, alert), Hero, Quote, VideoPlayer, MiniPlayer e CourseCover.

Quebras de visual e de API a conferir ao atualizar: altura padrão de Input, Select, NativeSelect e Combobox passou de 32 para 48px; `inputClasses` deixou de ser exportado (use `inputVariants`); `Spinner` agora é um `<span>` e não aceita props de SVG; `Button` `lg` e `icon-lg` passaram de 36 para 40px; `Checkbox` e `Radio` passam a 20px; Dialog tem largura padrão de 520px e vira bottom sheet no mobile; Tooltip abre após 400ms; Popover tem seta por padrão; tamanhos do Avatar (`sm` agora 32px, `lg` 48px); Table vem como card por padrão (`surface="plain"` para o visual antigo); Carousel com espaçamento de 24px.
