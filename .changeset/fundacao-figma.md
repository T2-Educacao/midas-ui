---
"@t2-educacao/midas": minor
---

Fundação do Midas alinhada ao novo Figma.

Tokens: 86 tokens semânticos (`surface`, `overlay`, `content`, `border`, `field`, `action`, `state`, `selection`, `focus`, `disabled`, `status`, `material`, `brand`, `chart`) em três temas: Light, Dark e Dark Blue (`data-theme="dark-blue"`). Os nomes antigos (`background`, `primary`, `muted`, `border`...) continuam como alias dos novos, então o código existente não quebra. Utilitários novos: `bg-surface-canvas`, `text-content-secondary`, `border-border-subtle` etc.

Tipografia: 15 text styles como utilitários (`text-heading-xl`, `text-body-md`, `text-label-sm`, `text-mono-sm`...). A fonte técnica passa a ser JetBrains Mono (variável `--font-jetbrains-mono`); quem usava `--font-geist-mono` precisa carregar a nova fonte.

Escalas: alturas de controle (`h-control-xs` a `h-control-4xl`) e de ícone, raios por papel (`rounded-control`, `rounded-container`, `rounded-overlay`, `rounded-pill`), elevação (`shadow-elevation-*`), foco (`focus-ring`), materiais de vidro e variáveis de grid por breakpoint.

Quebras de visual: `rounded-xl` passou de 14px para 12px e `rounded-2xl` de 18px para 14px, seguindo a escala do Figma. O preset do Tailwind v3 ganhou todos os novos nomes. Docs novas em `docs/fundamentos/*` (cores, tipografia, escalas, elevação e foco, grid).
