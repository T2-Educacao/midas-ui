---
title: "Cores"
description: "Os 86 tokens semânticos de cor do Midas em Light, Dark e Dark Blue: nome, classe Tailwind, valor por tema, quando usar e o que não fazer. Inclui o mapa dos nomes antigos (primary, card, muted...) para os novos."
---

A cor no Midas tem três camadas: **primitivos** (paletas Tailwind brutas, ocultas) → **tokens semânticos** (nomeados pela função, com um valor por tema) → componentes. Você só usa os semânticos. Nenhuma cor nova nasce fora das paletas do Figma.

Cada token é uma variável CSS `--midas-<grupo>-<nome>` e vira utilitário do Tailwind sem prefixo: `--midas-surface-canvas` vira `bg-surface-canvas`, `text-content-secondary` vem de `--midas-content-secondary`, `border-border-subtle` de `--midas-border-subtle`, e assim por diante (`bg-`, `text-`, `border-`, `ring-`, `fill-`, `from-`... qualquer prefixo de cor).

## Como escolher

1. Pergunte **onde** a cor entra: fundo de página (`surface-*`), algo que flutua (`overlay-*`), texto/ícone (`content-*`), linha (`border-*`), campo (`field-*`), botão (`action-*`), item selecionado (`selection-*`), mensagem de status (`status-*`).
2. Fundo colorido leva sempre o par de conteúdo: `bg-action-accent-bg text-action-accent-content`, `bg-status-danger-fill text-status-danger-on-fill`.
3. O tema troca o valor sozinho. Não escreva `dark:` para cores que já são tokens.
4. Nunca use hex, `rgb()`, `bg-[#...]` nem a paleta padrão do Tailwind (`bg-blue-500`).

```tsx
<div className="rounded-container border border-border-subtle bg-surface-default p-6 shadow-elevation-card">
  <p className="text-body-md text-content-primary">Trilha de investimentos</p>
  <p className="text-body-sm text-content-secondary">12 aulas</p>
  <span className="rounded-pill bg-status-success-subtle px-2 text-label-sm text-status-success-content">
    Concluída
  </span>
</div>
```

## Temas

| Tema | Como ativar | Característica |
|---|---|---|
| Light | padrão (`:root`) ou `data-theme="light"` | Fundo `slate/50`, texto `neutral/950` |
| Dark | classe `.dark` ou `data-theme="dark"` | Neutros (`neutral/950` de canvas) |
| Dark Blue | `data-theme="dark-blue"` | Mesmos tokens, base azul-ardósia (`slate/950` de canvas) |

A variante `dark:` do Tailwind vale nos **dois** escuros. A estrutura dos tokens é idêntica nos três temas; só os valores mudam. O tema é contexto, não variante de componente.

## Superfícies (surface)

Camadas de fundo da página. Do mais baixo (canvas) ao padrão de containers (default) e áreas discretas (muted).

| Token (variável) | Classes | Light | Dark | Dark Blue | Quando usar |
|---|---|---|---|---|---|
| `--midas-surface-canvas` | `bg-surface-canvas` `text-surface-canvas` `border-surface-canvas` | `#f8fafc` | `#0a0a0a` | `#020617` | Fundo da página/aplicação. Camada mais baixa. |
| `--midas-surface-default` | `bg-surface-default` `text-surface-default` `border-surface-default` | `#f8fafc` | `#171717` | `#0f172a` | Superfície padrão de containers (cards, painéis) sobre o canvas. |
| `--midas-surface-muted` | `bg-surface-muted` `text-surface-muted` `border-surface-muted` | `#f5f5f5` | `#262626` | `#1e293b` | Superfície discreta para áreas secundárias, trilhos, fundos de seção e itens desabilitados não interativos. |

**Não faça:** Não use `surface-*` para algo que flutua (menu, popover, tooltip): isso é `overlay-surface`. Não use `surface-muted` em botão ou campo.

## Sobreposições (overlay)

Tudo que flutua acima da página (dropdown, popover, combobox, date picker, tooltip, menus) fica um nível acima da superfície em que abriu: `overlay-surface` + `overlay-border` + `shadow-elevation-overlay`.

| Token (variável) | Classes | Light | Dark | Dark Blue | Quando usar |
|---|---|---|---|---|---|
| `--midas-overlay-border` | `bg-overlay-border` `text-overlay-border` `border-overlay-border` | `#d4d4d4` | `#404040` | `#334155` | Borda de elementos sobrepostos (overlay/surface). |
| `--midas-overlay-hover` | `bg-overlay-hover` `text-overlay-hover` `border-overlay-hover` | `#f5f5f5` | `#404040` | `#334155` | Hover de itens dentro de overlays (ex.: item de menu). |
| `--midas-overlay-surface` | `bg-overlay-surface` `text-overlay-surface` `border-overlay-surface` | `#fafafa` | `#262626` | `#1e293b` | Fundo de tudo que flutua acima da página: dropdown, popover, combobox, date picker, tooltip, menus. Sempre um nível acima de surface. |

**Não faça:** Não use `bg-surface-default` em menu/popover. Não use `overlay-*` em cards fixos na página.

## Conteúdo (content)

Texto e ícones. `content-primary` é o padrão; `content-secondary` apoia; `content-disabled` só em desabilitado.

| Token (variável) | Classes | Light | Dark | Dark Blue | Quando usar |
|---|---|---|---|---|---|
| `--midas-content-disabled` | `bg-content-disabled` `text-content-disabled` `border-content-disabled` | `#a1a1a1` | `#525252` | `#475569` | Texto e ícones de elementos desabilitados (isento de contraste WCAG, nunca como único sinal). |
| `--midas-content-inverse` | `bg-content-inverse` `text-content-inverse` `border-content-inverse` | `#fafafa` | `#171717` | `#171717` | Texto sobre superfícies de cor invertida (ex.: sobre action/primary/bg quando não usar action/primary/content). |
| `--midas-content-link` | `bg-content-link` `text-content-link` `border-content-link` | `#007595` | `#00d3f2` | `#00d3f2` | Links de texto. Família Cyan. |
| `--midas-content-primary` | `bg-content-primary` `text-content-primary` `border-content-primary` | `#0a0a0a` | `#fafafa` | `#fafafa` | Texto e ícones principais. Uso padrão para conteúdo. |
| `--midas-content-secondary` | `bg-content-secondary` `text-content-secondary` `border-content-secondary` | `#525252` | `#a1a1a1` | `#94a3b8` | Texto e ícones de apoio: descrições, metadados, placeholders. Contraste ≥ 4,5:1 em todas as superfícies. |

**Não faça:** Não use `content-disabled` como único sinal de desabilitado. Não use `content-secondary` em texto sobre cor sólida (use o `*-content`/`*-on-fill` da cor).

## Bordas (border)

`border-default` delimita controles interativos (contraste 3:1); `border-subtle` é decorativa (cards, divisores); `border-strong` dá ênfase e hover.

| Token (variável) | Classes | Light | Dark | Dark Blue | Quando usar |
|---|---|---|---|---|---|
| `--midas-border-default` | `bg-border-default` `text-border-default` `border-border-default` | `#e5e5e5` | `#262626` | `#1e293b` | Limite de controles interativos: inputs, selects, checkbox, radio, switch desligado. Contraste ≥ 3:1 (WCAG 1.4.11). |
| `--midas-border-strong` | `bg-border-strong` `text-border-strong` `border-border-strong` | `#525252` | `#a1a1a1` | `#94a3b8` | Borda em hover de controles e ênfase. |
| `--midas-border-subtle` | `bg-border-subtle` `text-border-subtle` `border-border-subtle` | `#e5e5e5` | `#262626` | `#1e293b` | Divisores e contornos decorativos (cards, separadores). Não usar como limite de controle. |

**Não faça:** Não use `border-subtle` como limite de input, select, checkbox ou radio (falha o contraste 3:1).

## Campos (field)

Fundo de input, select, textarea e date picker, em repouso e hover.

| Token (variável) | Classes | Light | Dark | Dark Blue | Quando usar |
|---|---|---|---|---|---|
| `--midas-field-bg` | `bg-field-bg` `text-field-bg` `border-field-bg` | `#f8fafc` | `#0a0a0a` | `#020617` | Fundo de campos (input, select, textarea, date picker). |
| `--midas-field-bg-hover` | `bg-field-bg-hover` `text-field-bg-hover` `border-field-bg-hover` | `#f5f5f5` | `#171717` | `#0f172a` | Fundo de campos em hover. |

**Não faça:** Não use `field-bg` em botões ou cards.

## Ação principal (action-primary)

Botão primário neutro (preto no Light, branco no Dark). Inclui degradê.

| Token (variável) | Classes | Light | Dark | Dark Blue | Quando usar |
|---|---|---|---|---|---|
| `--midas-action-primary-bg` | `bg-action-primary-bg` `text-action-primary-bg` `border-action-primary-bg` | `#171717` | `#fafafa` | `#fafafa` | Fundo da ação principal (botão primário). |
| `--midas-action-primary-bg-hover` | `bg-action-primary-bg-hover` `text-action-primary-bg-hover` `border-action-primary-bg-hover` | `#262626` | `#e5e5e5` | `#e5e5e5` | Hover da ação principal. |
| `--midas-action-primary-bg-pressed` | `bg-action-primary-bg-pressed` `text-action-primary-bg-pressed` `border-action-primary-bg-pressed` | `#404040` | `#d4d4d4` | `#d4d4d4` | Pressed da ação principal. |
| `--midas-action-primary-content` | `bg-action-primary-content` `text-action-primary-content` `border-action-primary-content` | `#fafafa` | `#171717` | `#171717` | Texto/ícone sobre action/primary/bg. |
| `--midas-action-primary-gradient-bottom` | `bg-action-primary-gradient-bottom` `text-action-primary-gradient-bottom` `border-action-primary-gradient-bottom` | `#171717` | `#e5e5e5` | `#e5e5e5` | Base do degradê neutro. |
| `--midas-action-primary-gradient-top` | `bg-action-primary-gradient-top` `text-action-primary-gradient-top` `border-action-primary-gradient-top` | `#404040` | `#fafafa` | `#fafafa` | Topo do degradê neutro (preto suave no claro, branco no escuro). |

**Não faça:** Não misture `action-primary-*` com `action-accent-*` no mesmo botão.

## Ação de destaque (action-accent)

Botão de destaque na cor de marca (Cyan). É o que `bg-primary` aponta. Contraste texto/fundo ≥ 5:1.

| Token (variável) | Classes | Light | Dark | Dark Blue | Quando usar |
|---|---|---|---|---|---|
| `--midas-action-accent-bg` | `bg-action-accent-bg` `text-action-accent-bg` `border-action-accent-bg` | `#007595` | `#00d3f2` | `#00d3f2` | Fundo da ação de destaque (Cyan). Contraste com action/accent/content ≥ 5:1. |
| `--midas-action-accent-bg-hover` | `bg-action-accent-bg-hover` `text-action-accent-bg-hover` `border-action-accent-bg-hover` | `#005f78` | `#53eafd` | `#53eafd` | Hover da ação de destaque. |
| `--midas-action-accent-bg-pressed` | `bg-action-accent-bg-pressed` `text-action-accent-bg-pressed` `border-action-accent-bg-pressed` | `#104e64` | `#a2f4fd` | `#a2f4fd` | Pressed da ação de destaque e fim do degradê accent. |
| `--midas-action-accent-content` | `bg-action-accent-content` `text-action-accent-content` `border-action-accent-content` | `#fafafa` | `#0a0a0a` | `#0a0a0a` | Texto/ícone sobre action/accent/bg. |
| `--midas-action-accent-gradient-bottom` | `bg-action-accent-gradient-bottom` `text-action-accent-gradient-bottom` `border-action-accent-gradient-bottom` | `#007595` | `#00d3f2` | `#00d3f2` | Base do degradê accent. |
| `--midas-action-accent-gradient-top` | `bg-action-accent-gradient-top` `text-action-accent-gradient-top` `border-action-accent-gradient-top` | `#0092b8` | `#53eafd` | `#53eafd` | Topo do degradê accent (transição curta, mesma cor). |

**Não faça:** Não use para texto corrido ou links (use `content-link`/`brand-content`).

## Ação secundária (action-secondary)

Botão claro e elevado, com `action-secondary-border` e `shadow-elevation-control`.

| Token (variável) | Classes | Light | Dark | Dark Blue | Quando usar |
|---|---|---|---|---|---|
| `--midas-action-secondary-bg` | `bg-action-secondary-bg` `text-action-secondary-bg` `border-action-secondary-bg` | `#fafafa` | `#262626` | `#1e293b` | Fundo da ação secundária: superfície clara e elevada (com action/secondary/border + elevation/control). Nunca #FFF puro. |
| `--midas-action-secondary-bg-hover` | `bg-action-secondary-bg-hover` `text-action-secondary-bg-hover` `border-action-secondary-bg-hover` | `#f5f5f5` | `#404040` | `#334155` | Hover da ação secundária. |
| `--midas-action-secondary-bg-pressed` | `bg-action-secondary-bg-pressed` `text-action-secondary-bg-pressed` `border-action-secondary-bg-pressed` | `#e5e5e5` | `#525252` | `#475569` | Pressed da ação secundária. |
| `--midas-action-secondary-border` | `bg-action-secondary-border` `text-action-secondary-border` `border-action-secondary-border` | `#e5e5e5` | `#404040` | `#334155` | Borda da ação secundária (botão claro/elevado). |
| `--midas-action-secondary-content` | `bg-action-secondary-content` `text-action-secondary-content` `border-action-secondary-content` | `#171717` | `#fafafa` | `#fafafa` | Texto/ícone sobre action/secondary/bg. |

**Não faça:** Nunca use branco puro no lugar de `action-secondary-bg`.

## Ação destrutiva (action-destructive)

Excluir, remover, encerrar. Mesmo valor nos 3 temas.

| Token (variável) | Classes | Light | Dark | Dark Blue | Quando usar |
|---|---|---|---|---|---|
| `--midas-action-destructive-bg` | `bg-action-destructive-bg` `text-action-destructive-bg` `border-action-destructive-bg` | `#e7000b` | `#e7000b` | `#e7000b` | Fundo de ações destrutivas (excluir, remover). |
| `--midas-action-destructive-bg-hover` | `bg-action-destructive-bg-hover` `text-action-destructive-bg-hover` `border-action-destructive-bg-hover` | `#c10007` | `#c10007` | `#c10007` | Hover de ação destrutiva. |
| `--midas-action-destructive-bg-pressed` | `bg-action-destructive-bg-pressed` `text-action-destructive-bg-pressed` `border-action-destructive-bg-pressed` | `#9f0712` | `#9f0712` | `#9f0712` | Pressed de ação destrutiva. |
| `--midas-action-destructive-content` | `bg-action-destructive-content` `text-action-destructive-content` `border-action-destructive-content` | `#fafafa` | `#fafafa` | `#fafafa` | Texto/ícone sobre action/destructive/bg. |

**Não faça:** Não use para erro de validação (use `status-danger-*`).

## Estados neutros (state)

Hover e pressed neutros globais: ghost buttons, itens de lista, tabs, sidebar.

| Token (variável) | Classes | Light | Dark | Dark Blue | Quando usar |
|---|---|---|---|---|---|
| `--midas-state-hover` | `bg-state-hover` `text-state-hover` `border-state-hover` | `#f5f5f5` | `#262626` | `#1e293b` | Hover neutro global: ghost buttons, itens de lista, tabs, sidebar. |
| `--midas-state-pressed` | `bg-state-pressed` `text-state-pressed` `border-state-pressed` | `#e5e5e5` | `#404040` | `#334155` | Pressed/active neutro global. |

**Não faça:** Não use em itens dentro de overlay (use `overlay-hover`). Disabled não tem hover.

## Seleção (selection)

Itens selecionados em Cyan: opções, chips, linhas, menu ativo, dia do calendário.

| Token (variável) | Classes | Light | Dark | Dark Blue | Quando usar |
|---|---|---|---|---|---|
| `--midas-selection-bg` | `bg-selection-bg` `text-selection-bg` `border-selection-bg` | `#ecfeff` | `#053345` | `#053345` | Fundo de itens selecionados (opções, chips, linhas, menu ativo). Família Cyan. |
| `--midas-selection-border` | `bg-selection-border` `text-selection-border` `border-selection-border` | `#0092b8` | `#00d3f2` | `#00d3f2` | Borda de itens selecionados. Contraste ≥ 3:1. |
| `--midas-selection-content` | `bg-selection-content` `text-selection-content` `border-selection-content` | `#007595` | `#53eafd` | `#53eafd` | Texto/ícone de itens selecionados sobre selection/bg. |
| `--midas-selection-fill` | `bg-selection-fill` `text-selection-fill` `border-selection-fill` | `#007595` | `#00d3f2` | `#00d3f2` | Preenchimento sólido de seleção (dia selecionado, chip selecionado com ênfase). |
| `--midas-selection-on-fill` | `bg-selection-on-fill` `text-selection-on-fill` `border-selection-on-fill` | `#fafafa` | `#0a0a0a` | `#0a0a0a` | Texto/ícone sobre selection/fill. |

**Não faça:** Não use `selection-*` para estado de foco (use `focus-ring`) nem para ação de destaque.

## Foco (focus)

`focus-ring` é a cor da borda de campo em foco; `focus-halo` é o halo translúcido de 4px ao redor. Veja [Elevação e foco](./elevacao-e-foco.md).

| Token (variável) | Classes | Light | Dark | Dark Blue | Quando usar |
|---|---|---|---|---|---|
| `--midas-focus-halo` | `bg-focus-halo` `text-focus-halo` `border-focus-halo` | `#06b6d447` | `#22d3ee4d` | `#22d3ee4d` | Halo de foco suave (3px, Cyan translúcido) usado pelo effect style focus/ring. |
| `--midas-focus-ring` | `bg-focus-ring` `text-focus-ring` `border-focus-ring` | `#0092b8` | `#00d3f2` | `#00d3f2` | Cor de foco (Cyan): borda de campos em foco e indicador. Contraste ≥ 3:1 nos 3 temas. |
| `--midas-focus-halo-danger` | `bg-focus-halo-danger` | `#e7000b29` | `#e7000b3d` | `#e7000b3d` | Halo do foco de erro (vermelho translúcido). Extensão do código. |
| `--midas-focus-halo-neutral` | `bg-focus-halo-neutral` | `#0a0a0a17` | `#fafafa29` | `#fafafa29` | Halo do foco neutro (preto no Light, branco nos escuros). Extensão do código. |

**Não faça:** Não remova o anel de foco. Não use `focus-ring` como cor de texto.

## Desabilitado (disabled)

Fundo e borda de controles desabilitados. Texto/ícone desabilitado usa `content-disabled`.

| Token (variável) | Classes | Light | Dark | Dark Blue | Quando usar |
|---|---|---|---|---|---|
| `--midas-disabled-bg` | `bg-disabled-bg` `text-disabled-bg` `border-disabled-bg` | `#f5f5f5` | `#262626` | `#1e293b` | Fundo de controles desabilitados. |
| `--midas-disabled-border` | `bg-disabled-border` `text-disabled-border` `border-disabled-border` | `#e5e5e5` | `#262626` | `#1e293b` | Borda de controles desabilitados. |

**Não faça:** Disabled nunca é o único sinal; combine com `aria-disabled`/`disabled` e `opacity-disabled` quando não houver token.

## Status (status)

Quatro famílias (danger, warning, success, info), cada uma com `fill`, `on-fill`, `subtle`, `border` e `content`. Alert/banner: `subtle` + `border` + `content`. Badge sólido: `fill` + `on-fill`.

| Token (variável) | Classes | Light | Dark | Dark Blue | Quando usar |
|---|---|---|---|---|---|
| `--midas-status-danger-border` | `bg-status-danger-border` `text-status-danger-border` `border-status-danger-border` | `#ffc9c9` | `#9f0712` | `#9f0712` | Borda de containers de erro/perigo. |
| `--midas-status-danger-content` | `bg-status-danger-content` `text-status-danger-content` `border-status-danger-content` | `#c10007` | `#ff6467` | `#ff6467` | Texto/ícone de erro/perigo sobre surfaces e sobre status/danger/subtle (≥ 4,5:1). |
| `--midas-status-danger-fill` | `bg-status-danger-fill` `text-status-danger-fill` `border-status-danger-fill` | `#e7000b` | `#e7000b` | `#e7000b` | Preenchimento sólido de erro/perigo (badge solid, indicador). Não é cor de texto. |
| `--midas-status-danger-on-fill` | `bg-status-danger-on-fill` `text-status-danger-on-fill` `border-status-danger-on-fill` | `#fafafa` | `#fafafa` | `#fafafa` | Texto/ícone sobre status/danger/fill. |
| `--midas-status-danger-subtle` | `bg-status-danger-subtle` `text-status-danger-subtle` `border-status-danger-subtle` | `#fef2f2` | `#460809` | `#460809` | Fundo suave de mensagens de erro/perigo (alerts, badges subtle). |
| `--midas-status-info-border` | `bg-status-info-border` `text-status-info-border` `border-status-info-border` | `#bedbff` | `#193cb8` | `#193cb8` | Borda de containers de informação. |
| `--midas-status-info-content` | `bg-status-info-content` `text-status-info-content` `border-status-info-content` | `#1447e6` | `#51a2ff` | `#51a2ff` | Texto/ícone de informação sobre surfaces e sobre status/info/subtle (≥ 4,5:1). |
| `--midas-status-info-fill` | `bg-status-info-fill` `text-status-info-fill` `border-status-info-fill` | `#155dfc` | `#51a2ff` | `#51a2ff` | Preenchimento sólido de informação (badge solid, indicador). Não é cor de texto. |
| `--midas-status-info-on-fill` | `bg-status-info-on-fill` `text-status-info-on-fill` `border-status-info-on-fill` | `#fafafa` | `#0a0a0a` | `#0a0a0a` | Texto/ícone sobre status/info/fill. |
| `--midas-status-info-subtle` | `bg-status-info-subtle` `text-status-info-subtle` `border-status-info-subtle` | `#eff6ff` | `#162456` | `#162456` | Fundo suave de mensagens de informação (alerts, badges subtle). |
| `--midas-status-success-border` | `bg-status-success-border` `text-status-success-border` `border-status-success-border` | `#b9f8cf` | `#016630` | `#016630` | Borda de containers de sucesso. |
| `--midas-status-success-content` | `bg-status-success-content` `text-status-success-content` `border-status-success-content` | `#008236` | `#05df72` | `#05df72` | Texto/ícone de sucesso sobre surfaces e sobre status/success/subtle (≥ 4,5:1). |
| `--midas-status-success-fill` | `bg-status-success-fill` `text-status-success-fill` `border-status-success-fill` | `#008236` | `#05df72` | `#05df72` | Preenchimento sólido de sucesso (badge solid, indicador). Não é cor de texto. |
| `--midas-status-success-on-fill` | `bg-status-success-on-fill` `text-status-success-on-fill` `border-status-success-on-fill` | `#fafafa` | `#0a0a0a` | `#0a0a0a` | Texto/ícone sobre status/success/fill. |
| `--midas-status-success-subtle` | `bg-status-success-subtle` `text-status-success-subtle` `border-status-success-subtle` | `#f0fdf4` | `#032e15` | `#032e15` | Fundo suave de mensagens de sucesso (alerts, badges subtle). |
| `--midas-status-warning-border` | `bg-status-warning-border` `text-status-warning-border` `border-status-warning-border` | `#fee685` | `#973c00` | `#973c00` | Borda de containers de atenção. |
| `--midas-status-warning-content` | `bg-status-warning-content` `text-status-warning-content` `border-status-warning-content` | `#bb4d00` | `#ffb900` | `#ffb900` | Texto/ícone de atenção sobre surfaces e sobre status/warning/subtle (≥ 4,5:1). |
| `--midas-status-warning-fill` | `bg-status-warning-fill` `text-status-warning-fill` `border-status-warning-fill` | `#e17100` | `#ffb900` | `#ffb900` | Preenchimento sólido de atenção (badge solid, indicador). Não é cor de texto. |
| `--midas-status-warning-on-fill` | `bg-status-warning-on-fill` `text-status-warning-on-fill` `border-status-warning-on-fill` | `#0a0a0a` | `#0a0a0a` | `#0a0a0a` | Texto/ícone sobre status/warning/fill. |
| `--midas-status-warning-subtle` | `bg-status-warning-subtle` `text-status-warning-subtle` `border-status-warning-subtle` | `#fffbeb` | `#461901` | `#461901` | Fundo suave de mensagens de atenção (alerts, badges subtle). |

**Não faça:** `fill` não é cor de texto: texto de status usa `*-content`. Não troque o significado (success para erro etc.).

## Materiais (material)

Vidro, scrim, tint, on-media e sheen. Só sobre imagem, vídeo ou gradiente. Use com as classes `material-*` de [Elevação e foco](./elevacao-e-foco.md).

| Token (variável) | Classes | Light | Dark | Dark Blue | Quando usar |
|---|---|---|---|---|---|
| `--midas-material-glass-bg` | `bg-material-glass-bg` `text-material-glass-bg` `border-material-glass-bg` | `#fafafa59` | `#fafafa14` | `#f8fafc14` | Vidro translúcido (neutral/slate 50 com transparência). Usar com material/glass, glass-strong ou liquid. Só sobre imagem, mídia ou gradiente. |
| `--midas-material-glass-border` | `bg-material-glass-border` `text-material-glass-border` `border-material-glass-border` | `#fafafae5` | `#fafafa47` | `#f8fafc47` | Brilho/borda do vidro (highlight). |
| `--midas-material-on-media-bg` | `bg-material-on-media-bg` `text-material-on-media-bg` `border-material-on-media-bg` | `#fafafa` | `#fafafa` | `#fafafa` | Botão sólido claro sobre mídia (ex.: CTA sobre foto). Fixo nos 3 temas. |
| `--midas-material-on-media-bg-content` | `bg-material-on-media-bg-content` `text-material-on-media-bg-content` `border-material-on-media-bg-content` | `#0a0a0a` | `#0a0a0a` | `#0a0a0a` | Texto/ícone sobre material/on-media/bg. |
| `--midas-material-on-media-content` | `bg-material-on-media-content` `text-material-on-media-content` `border-material-on-media-content` | `#fafafa` | `#fafafa` | `#fafafa` | Texto/ícone sobre material/scrim e mídia escura. Fixo nos 3 temas. |
| `--midas-material-scrim-bg` | `bg-material-scrim-bg` `text-material-scrim-bg` `border-material-scrim-bg` | `#0a0a0a73` | `#0a0a0a73` | `#02061773` | Superfície escura translúcida sobre mídia (frosted). Igual nos 3 temas porque depende da imagem, não do tema. |
| `--midas-material-scrim-border` | `bg-material-scrim-border` `text-material-scrim-border` `border-material-scrim-border` | `#fafafa29` | `#fafafa29` | `#f8fafc29` | Borda sutil de superfícies frosted. |
| `--midas-material-sheen` | `bg-material-sheen` `text-material-sheen` `border-material-sheen` | `#fafafa2e` | `#fafafa59` | `#fafafa59` | Brilho de 1px no topo de botões sólidos/degradê (acabamento flat). |
| `--midas-material-tint-bg` | `bg-material-tint-bg` `text-material-tint-bg` `border-material-tint-bg` | `#00b8db47` | `#00d3f238` | `#00d3f238` | Frosted colorido (Cyan translúcido) sobre mídia. Usar com material/frosted. |
| `--midas-material-tint-border` | `bg-material-tint-border` `text-material-tint-border` `border-material-tint-border` | `#a2f4fd73` | `#53eafd59` | `#53eafd59` | Borda/brilho do frosted colorido. |
| `--midas-material-glass-surface` | `bg-material-glass-surface` | `#fafafacc` | `#0a0a0ad6` | `#020617d6` | Extensão do código (Figma: neutral/50 a 80%, neutral/950 e slate/950 a 84%). Vidro com texto (Card Glass), contraste ≥ 4,5:1 sobre qualquer imagem. |

**Não faça:** Não use sobre fundo liso (perde o efeito e o contraste). Não troque o tema nestes tokens esperando mudança: scrim e on-media são fixos.

## Marca (brand)

Cyan da marca para destaques, ilustrações e acentos. Ações usam `action-accent`.

| Token (variável) | Classes | Light | Dark | Dark Blue | Quando usar |
|---|---|---|---|---|---|
| `--midas-brand-content` | `bg-brand-content` `text-brand-content` `border-brand-content` | `#007595` | `#00d3f2` | `#00d3f2` | Texto/ícone na cor de marca (Cyan) sobre superfícies neutras (≥ 4,5:1). |
| `--midas-brand-on-primary` | `bg-brand-on-primary` `text-brand-on-primary` `border-brand-on-primary` | `#0a0a0a` | `#0a0a0a` | `#0a0a0a` | Texto/ícone sobre brand/primary. |
| `--midas-brand-primary` | `bg-brand-primary` `text-brand-primary` `border-brand-primary` | `#00b8db` | `#00d3f2` | `#00d3f2` | Cor de marca principal (Cyan) para destaques de marca, ilustrações e acentos. Ações usam action/accent. |

**Não faça:** Não use `brand-primary` como cor de texto em fundo claro (use `brand-content`).

## Gráficos (chart)

Séries de gráficos: 1 Cyan, 2 Sky, 3 Violet, 4 Emerald, 5 Amber (Figma). `chart-6`, `chart-7` e `chart-8` (Rose, Teal, Orange) são extensões do código para quem precisa de mais de cinco séries.

| Token (variável) | Classes | Light | Dark | Dark Blue | Quando usar |
|---|---|---|---|---|---|
| `--midas-chart-1` | `bg-chart-1` `text-chart-1` `border-chart-1` | `#00b8db` | `#00d3f2` | `#00d3f2` | Série 1 de gráficos (Cyan, cor de marca). |
| `--midas-chart-2` | `bg-chart-2` `text-chart-2` `border-chart-2` | `#00a6f4` | `#00bcff` | `#00bcff` | Série 2 de gráficos (Sky, apoio). |
| `--midas-chart-3` | `bg-chart-3` `text-chart-3` `border-chart-3` | `#8e51ff` | `#a684ff` | `#a684ff` | Série 3 de gráficos. |
| `--midas-chart-4` | `bg-chart-4` `text-chart-4` `border-chart-4` | `#00bc7d` | `#00d492` | `#00d492` | Série 4 de gráficos. |
| `--midas-chart-5` | `bg-chart-5` `text-chart-5` `border-chart-5` | `#fe9a00` | `#ffb900` | `#ffb900` | Série 5 de gráficos. |
| `--midas-chart-6` | `bg-chart-6` | `#ff2056` | `#ff637e` | `#ff637e` | Extensão do código (Rose). Não existe no Figma. |
| `--midas-chart-7` | `bg-chart-7` | `#00bba7` | `#00d5be` | `#00d5be` | Extensão do código (Teal). Não existe no Figma. |
| `--midas-chart-8` | `bg-chart-8` | `#ff6900` | `#ff8904` | `#ff8904` | Extensão do código (Orange). Não existe no Figma. |

**Não faça:** Não use as cores de série para significado de status (verde = sucesso, vermelho = erro).

## Nomes antigos (aliases)

Os nomes herdados do shadcn continuam existindo como **alias** dos tokens novos, para o código existente não quebrar. Em código novo, prefira os tokens semânticos.

| Nome antigo (classe) | Aponta para | Observação |
|---|---|---|
| `background` | `surface-canvas` | |
| `foreground` | `content-primary` | |
| `card` / `card-foreground` | `surface-default` / `content-primary` | |
| `popover` / `popover-foreground` | `overlay-surface` / `content-primary` | |
| `primary` / `primary-foreground` | `action-accent-bg` / `action-accent-content` | Cyan, como antes. O "primary" do Figma (`action-primary-*`) é o botão neutro preto/branco |
| `secondary` / `secondary-foreground` | `action-secondary-bg` / `action-secondary-content` | |
| `muted` / `muted-foreground` | `surface-muted` / `content-secondary` | |
| `accent` / `accent-foreground` | `state-hover` / `content-primary` | Hover de itens de menu |
| `destructive` / `destructive-foreground` | `action-destructive-bg` / `action-destructive-content` | |
| `success` / `success-foreground` | `status-success-fill` / `status-success-on-fill` | |
| `warning` / `warning-foreground` | `status-warning-fill` / `status-warning-on-fill` | |
| `info` / `info-foreground` | `status-info-fill` / `status-info-on-fill` | |
| `border` | `border-default` | |
| `input` | `border-default` | |
| `ring` | `focus-ring` | |
| `chart-1` a `chart-5` | `chart-1` a `chart-5` do Figma | Mesmo nome, novos valores |
| `chart-6` a `chart-8` | extensões do código | Não existem no Figma |

Os aliases são redeclarados em cada tema, então funcionam também em áreas aninhadas (`<section data-theme="dark-blue">` dentro de uma página Light).

## Sobrescrever um token

Redefina a variável **depois** do import, no tema que quiser alterar:

```css
@import "tailwindcss";
@import "@t2-educacao/midas/theme.css";

[data-theme="dark-blue"] {
  --midas-surface-canvas: #0b1020;
}
```

Se todo projeto precisa sobrescrever o mesmo token, o valor deve mudar no Midas (e no Figma).
