---
title: "Escalas"
description: "Escalas do Midas: espaçamento (space/0 a 80), altura de controles (size/control), tamanho de ícones (size/icon), raios (escala e papéis), largura de borda e opacidade de desabilitado, com as classes Tailwind de cada uma."
---

Não existem valores fora destas escalas. Se algo não cabe, a escala é revista no Figma, não no componente.

## Espaçamento (`space/*`)

Base de 4px; 2, 6 e 10 são meios-passos para controles compactos. Cada passo tem a variável `--midas-space-<n>` (para CSS próprio) e já existe na escala padrão do Tailwind, então use as classes normais (`p-4`, `gap-1.5`...).

| Token | Valor | Variável | Classe Tailwind (padding/gap/margem) |
|---|---|---|---|
| `space/0` | 0 | `--midas-space-0` | `p-0` |
| `space/2` | 2px | `--midas-space-2` | `p-0.5` |
| `space/4` | 4px | `--midas-space-4` | `p-1` |
| `space/6` | 6px | `--midas-space-6` | `p-1.5` |
| `space/8` | 8px | `--midas-space-8` | `p-2` |
| `space/10` | 10px | `--midas-space-10` | `p-2.5` |
| `space/12` | 12px | `--midas-space-12` | `p-3` |
| `space/16` | 16px | `--midas-space-16` | `p-4` |
| `space/20` | 20px | `--midas-space-20` | `p-5` |
| `space/24` | 24px | `--midas-space-24` | `p-6` |
| `space/32` | 32px | `--midas-space-32` | `p-8` |
| `space/40` | 40px | `--midas-space-40` | `p-10` |
| `space/48` | 48px | `--midas-space-48` | `p-12` |
| `space/56` | 56px | `--midas-space-56` | `p-14` |
| `space/64` | 64px | `--midas-space-64` | `p-16` |
| `space/80` | 80px | `--midas-space-80` | `p-20` |

Não use valores fora da escala (`p-[13px]`, `gap-7`, `mt-9`).

## Altura de controles (`size/control/*`)

Define a altura de **todos** os controles: componentes equivalentes no mesmo tamanho têm a mesma altura. Classes: `h-control-md`, `min-h-control-lg`, `size-control-xl` (largura e altura, para botões só com ícone).

| Token | Valor | Variável | Classe | Quando usar |
|---|---|---|---|---|
| `size/control/xs` | 24px | `--midas-size-control-xs` | `h-control-xs` | Densidade máxima: tabelas, toolbars. Só desktop |
| `size/control/sm` | 28px | `--midas-size-control-sm` | `h-control-sm` | Compacto: filtros, chips, ações densas |
| `size/control/md` | 32px | `--midas-size-control-md` | `h-control-md` | Padrão da interface |
| `size/control/lg` | 40px | `--midas-size-control-lg` | `h-control-lg` | Formulários e ações principais; mínimo em mobile |
| `size/control/xl` | 48px | `--midas-size-control-xl` | `h-control-xl` | Destaque, mobile e touch confortável |
| `size/control/2xl` | 56px | `--midas-size-control-2xl` | `h-control-2xl` | CTA de landing/onboarding |
| `size/control/3xl` | 64px | `--midas-size-control-3xl` | `h-control-3xl` | Hero e telas de aprendizagem |
| `size/control/4xl` | 72px | `--midas-size-control-4xl` | `h-control-4xl` | Excepcional: totens, apresentações |

## Tamanho de ícones (`size/icon/*`)

Segue o grid 24 do Tabler. Classes: `size-icon-sm`, `w-icon-md h-icon-md`.

| Token | Valor | Variável | Classe |
|---|---|---|---|
| `size/icon/xs` | 12px | `--midas-size-icon-xs` | `size-icon-xs` |
| `size/icon/sm` | 16px | `--midas-size-icon-sm` | `size-icon-sm` |
| `size/icon/md` | 20px | `--midas-size-icon-md` | `size-icon-md` |
| `size/icon/lg` | 24px | `--midas-size-icon-lg` | `size-icon-lg` |
| `size/icon/xl` | 32px | `--midas-size-icon-xl` | `size-icon-xl` |

## Raios

`radius/*` é a escala; os **papéis** (`control`, `container`, `overlay`, `pill`) definem o uso e apontam para a escala. Prefira o papel à escala: se o Figma mudar o raio dos controles, tudo muda junto.

| Token | Valor | Variável | Classe |
|---|---|---|---|
| `radius/none` | 0 | `--midas-radius-none` | `rounded-none` |
| `radius/xs` | 4px | `--midas-radius-xs` | `rounded-xs` |
| `radius/sm` | 6px | `--midas-radius-sm` | `rounded-sm` |
| `radius/md` | 8px | `--midas-radius-md` | `rounded-md` |
| `radius/lg` | 10px | `--midas-radius-lg` | `rounded-lg` |
| `radius/xl` | 12px | `--midas-radius-xl` | `rounded-xl` |
| `radius/2xl` | 14px | `--midas-radius-2xl` | `rounded-2xl` |
| `radius/3xl` | 18px | `--midas-radius-3xl` | `rounded-3xl` |
| `radius/full` | 9999px | `--midas-radius-full` | `rounded-full` |

| Papel | Aponta para | Variável | Classe | Quando usar |
|---|---|---|---|---|
| `radius/role/control` | `radius/sm` (6px; XS/SM 4px, XL 8px) | `--midas-radius-control` | `rounded-control` | Button, input, select, toggle, chip |
| `radius/role/container` | `radius/2xl` (14px) | `--midas-radius-container` | `rounded-container` | Card, painel, alert, dialog |
| `radius/role/overlay` | `radius/lg` (10px) | `--midas-radius-overlay` | `rounded-overlay` | Dropdown, popover, combobox, date picker, tooltip |
| `radius/role/pill` | `radius/full` | `--midas-radius-pill` | `rounded-pill` | Badge, tag, switch, avatar |

Atenção: nesta versão `rounded-xl` passou de 14px para 12px, `rounded-2xl` de 18px para 14px e `rounded-3xl` (18px) é novo, para alinhar ao Figma.

## Borda e opacidade

| Token | Valor | Variável / classe | Regra |
|---|---|---|---|
| `border-width/sm` | 1px | `--midas-border-width-sm` / `border` | Padrão Midas: 1px em `border-border-default` (cinza claro) com `shadow-elevation-control`. Nunca strokes pretos ou grossos |
| `border-width/md` | 1.5px | `--midas-border-width-md` / `border-[1.5px]` | Uso raro (indicadores pequenos). Seleção e foco usam 1px + halo de 4px |
| `opacity/disabled` | 50% | `--midas-opacity-disabled` / `opacity-disabled` | Desabilitado quando não houver token de cor específico (`disabled-bg`, `content-disabled`) |

## Não faça

- Não use `h-[34px]`, `p-[13px]` ou `rounded-[7px]`. Use a escala.
- Não dê alturas diferentes a controles lado a lado: Button `md` e Input `md` têm ambos `h-control-md`.
- Não use `rounded-xl` num botão só porque "ficou bonito": botão é `rounded-control`.
