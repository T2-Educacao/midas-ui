---
"@t2-educacao/midas": minor
---

Segunda rodada de melhorias a partir da migração da hub.

Novos componentes: `Table` (cabeçalho ordenável com `aria-sort`, densidade `sm`), `ListItem` (linha ou card clicável), `Sidebar` e `NavItem`, `Breadcrumb`, `Stepper`, `Skeleton`, `EmptyState` e `FileUpload` (dropzone com `accept`, `maxSize` e arrastar e soltar).

Correções de comportamento:
- `Input type="date"` e `datetime-local` agora limitam o ano por padrão (1900 a 2100), sem `min`/`max` do chamador. Quem precisava de datas fora desse intervalo deve passar `min`/`max`.
- `TooltipTrigger asChild` envolve sozinho um filho `disabled` num `<span tabIndex={0}>`, então o tooltip abre em botão desabilitado ou carregando.
- `MidasTooltip` exportado como alias de `Tooltip`, para arquivos que também usam o `Tooltip` do recharts.

Props novas: `Button loadingText`; `Badge size` (`sm`, `default`, `lg`) e `icon`; `AvatarFallback colorFrom` (cor por nome, entre 8 cores de série); `SelectTrigger fullWidth`; `Textarea autoGrow` e `bare` (título inline sem borda).

Tokens: `chart-1` a `chart-8` (claro e escuro) para séries de gráficos, disponíveis como `bg-chart-1` e `var(--midas-chart-1)`.

Tailwind v3: novo preset `@t2-educacao/midas/tailwind-preset`, que alinha cores, raios e fonte do projeto às variáveis do Midas, com suporte a opacidade (`bg-primary/10`).

Docs: guia de migração e instalação atualizados.
