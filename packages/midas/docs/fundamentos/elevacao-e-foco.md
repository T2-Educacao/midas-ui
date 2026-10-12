---
title: "Elevação, foco e materiais"
description: "Sombras de elevação (control a modal), anel de foco (brand, danger, neutral), blur e materiais translúcidos (glass, frosted, liquid, sheen) do Midas, com classes e quando usar."
---

## Elevação

Todo componente sobreposto aparece **um nível acima** da superfície em que foi aberto. Cinco níveis, com os valores reais do Figma:

| Nível | Classe | Variável | Valor | Quando usar |
|---|---|---|---|---|
| 1 | `shadow-elevation-control` | `--midas-elevation-control` | `0 1px 2px rgb(15 23 41 / .04), 0 2px 8px rgb(15 23 41 / .05)` | Controles com leve relevo: inputs, botões outline |
| 2 | `shadow-elevation-card` | `--midas-elevation-card` | `0 1px 3px rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1)` | Cards e superfícies elevadas em repouso |
| 3 | `shadow-elevation-raised` | `--midas-elevation-raised` | `0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1)` | Cards em hover/drag, elementos sticky |
| 4 | `shadow-elevation-overlay` | `--midas-elevation-overlay` | `0 20px 25px -5px rgb(0 0 0 / .1), 0 8px 10px -6px rgb(0 0 0 / .1)` | Dropdown, popover, combobox, date picker, tooltip, menus |
| 5 | `shadow-elevation-modal` | `--midas-elevation-modal` | `0 25px 50px -12px rgb(0 0 0 / .25)` | Dialogs, sheets e drawers |

Receita de overlay: `bg-overlay-surface border border-overlay-border shadow-elevation-overlay rounded-overlay`.
Receita de card: `bg-surface-default border border-border-subtle shadow-elevation-card rounded-container`.

Não use `shadow-md`/`shadow-lg` do Tailwind em componente novo, nem sombra preta forte em controles.

## Foco

O anel de foco do Midas é **borda de 1px + halo suave de 4px** ao redor. Os halos mudam sozinhos por tema.

| Variante | Classe utilitária | Borda | Halo | Quando usar |
|---|---|---|---|---|
| Brand | `focus-ring` | `focus-ring` (Cyan) | `focus-halo` (Cyan translúcido) | Padrão de campos e controles |
| Danger | `focus-ring-danger` | `status-danger-fill` | `focus-halo-danger` | Campo em erro |
| Neutral | `focus-ring-neutral` | `border-strong` (borda neutra) | `focus-halo-neutral` (preto no Light, branco nos escuros) | Itens sobre mídia ou controles neutros |

Cada uma tem também a sombra isolada: `shadow-focus-ring`, `shadow-focus-ring-danger`, `shadow-focus-ring-neutral` (só o halo, sem trocar a borda).

```tsx
<input className="border border-border-default outline-none focus-visible:focus-ring aria-invalid:focus-visible:focus-ring-danger" />
```

Foco tem prioridade sobre hover. O contraste da borda de foco é ≥ 3:1 nos três temas. Nunca remova o anel de foco sem substituí-lo.

## Blur

| Variável | Valor | Classe |
|---|---|---|
| `--midas-blur-sm` | 8px | `backdrop-blur-midas-sm` |
| `--midas-blur-md` | 16px | `backdrop-blur-midas-md` |
| `--midas-blur-lg` | 32px | `backdrop-blur-midas-lg` |

## Materiais (vidro)

Superfícies translúcidas **só sobre mídia** (imagem, vídeo, gradiente). Mais blur = mais legibilidade e menos fundo. As classes `material-*` trazem fundo, blur e brilho do topo; use com `rounded-*` e conteúdo por cima.

| Classe | Equivale a | O que faz |
|---|---|---|
| `material-glass` | `material/glass` | Vidro padrão: blur 24 + brilho superior + sombra mínima |
| `material-glass-strong` | `material/glass-strong` | Vidro intenso: blur 40, para fundos muito detalhados |
| `material-liquid` | `material/liquid` | Aproximação do liquid glass (blur + saturação + brilho). A refração/distorção real do Figma (efeito GLASS) não existe em CSS |
| `material-frosted` | `material/frosted` | Frosted padrão: blur 28 + brilho sutil |
| `material-frosted-strong` | `material/frosted-strong` | Frosted intenso: blur 48, quase opaco, para leitura sobre vídeo/imagem movimentada |
| `material-sheen` | `material/sheen` | Acabamento flat para botões sólidos/degradê: brilho de 1px no topo + sombra mínima |
| `material-raised-button` | `material/raised-button` | Botões sólidos com leve relevo (Secondary, On media, Gradient): brilho superior + `elevation-card` |

Cores dos materiais (tokens, veja [Cores](./cores.md)): `bg-material-scrim-bg` (frosted escuro), `bg-material-tint-bg` (frosted Cyan, usar com `material-frosted`), `bg-material-on-media-bg` + `text-material-on-media-bg-content` (botão sólido claro sobre foto), `text-material-on-media-content` (texto sobre mídia escura), `bg-material-glass-surface` (vidro com texto, contraste ≥ 4,5:1).

```tsx
<div className="relative">
  <img src={capa} alt="" className="absolute inset-0 size-full object-cover" />
  <div className="material-glass relative rounded-container p-6 text-material-on-media-content">
    Conteúdo sobre a imagem
  </div>
</div>
```

Não use materiais sobre fundo liso nem como substituto de `surface-*`. `material-liquid` e `glass/light|medium|strong` do Figma (efeito GLASS) não têm equivalente exato em CSS; a aproximação depende do navegador suportar `backdrop-filter`.
