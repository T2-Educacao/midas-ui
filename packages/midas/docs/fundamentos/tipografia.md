---
title: "Tipografia"
description: "Famílias Geist e JetBrains Mono, escala de tamanho, altura de linha, peso e tracking, e os 16 text styles do Midas (display, heading, body, label, caption, mono) como classes Tailwind."
---

Escolha estilos pela **função** (display, heading, body, label, caption, mono), não pelo tamanho. Cada text style é uma classe utilitária que define tamanho, altura de linha, peso e tracking de uma vez.

## Famílias

| Variável | Classe | Fonte | Quando usar | Não usar |
|---|---|---|---|---|
| `--midas-font-sans` | `font-sans` | **Geist** (`var(--font-geist-sans)`, depois `"Geist"`) | Toda a interface: títulos, texto corrido, labels, navegação | |
| `--midas-font-mono` | `font-mono` | **JetBrains Mono** (`var(--font-jetbrains-mono)`, depois `"JetBrains Mono"`) | Complementar e técnica: código, IDs, valores, datas, números tabulares, metadados, overlines | Títulos, body, UI regular e textos corridos. Não converta textos Geist para mono |

Para o Midas usar as fontes automaticamente, carregue-as com `next/font` nas variáveis acima (veja [Instalação](../instalacao.md)):

```tsx
import { Geist, JetBrains_Mono } from "next/font/google";

const sans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" });
```

## Text styles

Uso: `<h1 className="text-heading-xl">`. Todos incluem peso e tracking; não some `font-semibold` etc.

| Classe | Fonte | Tamanho / altura | Peso | Tracking | Quando usar |
|---|---|---|---|---|---|
| `text-display-lg` | Geist | 64 / 72 | semibold 600 | -1px | Hero e números de destaque em landing/onboarding. No máximo 1 por tela |
| `text-display-md` | Geist | 48 / 56 | semibold 600 | -1px | Títulos de destaque em páginas de marketing ou vazias |
| `text-heading-xl` | Geist | 30 / 36 | semibold 600 | 0 | Título de página |
| `text-heading-lg` | Geist | 24 / 32 | semibold 600 | 0 | Título de seção principal |
| `text-heading-md` | Geist | 20 / 28 | semibold 600 | 0 | Título de card, dialog e subseção |
| `text-heading-sm` | Geist | 18 / 28 | semibold 600 | 0 | Título de grupo e cabeçalho de lista |
| `text-body-lg` | Geist | 18 / 28 | regular 400 | 0 | Texto corrido de leitura longa e introduções |
| `text-body-md` | Geist | 16 / 24 | regular 400 | 0 | Texto corrido padrão |
| `text-body-sm` | Geist | 14 / 20 | regular 400 | 0 | Texto de apoio, descrições, células de tabela |
| `text-label-lg` | Geist | 16 / 24 | medium 500 | 0 | Labels de controles L/XL e navegação principal |
| `text-label-md` | Geist | 14 / 20 | medium 500 | 0 | Labels padrão de botões, campos, tabs e menus |
| `text-label-sm` | Geist | 12 / 16 | medium 500 | 0 | Labels compactos: badges, chips XS/S, legendas de gráfico |
| `text-caption` | Geist | 12 / 16 | regular 400 | 0 | Texto auxiliar: helper text, timestamps em texto, notas |
| `text-mono-overline` | JetBrains Mono | 12 / 16 | medium 500 | +1px, caixa alta | Eyebrow/overline técnico (`Módulo 03 · Atualizado`) |
| `text-mono-sm` | JetBrains Mono | 12 / 16 | regular 400 | 0 | Metadados compactos: IDs, datas, códigos curtos |
| `text-mono-md` | JetBrains Mono | 14 / 20 | regular 400 | 0 | Números, valores técnicos e trechos de código |

```tsx
<p className="text-mono-overline text-content-secondary">Módulo 03 · Atualizado</p>
<h1 className="text-heading-xl text-content-primary">Trilha de investimentos</h1>
<p className="text-body-md text-content-secondary">Avance no seu ritmo com conteúdos práticos.</p>
<span className="text-mono-md">R$ 1.249,90 · 87,5%</span>
```

`cn()` do Midas conhece os text styles: `cn("text-body-sm", "text-heading-md")` mantém só o último, e a cor (`text-content-secondary`) nunca é confundida com tamanho.

## Tokens da escala

Variáveis para uso direto em CSS próprio (`font-size: var(--midas-font-size-lg)`). Em JSX, prefira os text styles.

| Tamanho | Valor | Altura de linha | Valor |
|---|---|---|---|
| `--midas-font-size-xs` | 12px | `--midas-line-height-xs` | 16px |
| `--midas-font-size-sm` | 14px | `--midas-line-height-sm` | 20px |
| `--midas-font-size-md` | 16px | `--midas-line-height-md` | 24px |
| `--midas-font-size-lg` | 18px | `--midas-line-height-lg` | 28px |
| `--midas-font-size-xl` | 20px | `--midas-line-height-xl` | 32px |
| `--midas-font-size-2xl` | 24px | `--midas-line-height-2xl` | 36px |
| `--midas-font-size-3xl` | 30px | `--midas-line-height-3xl` | 40px |
| `--midas-font-size-4xl` | 36px | `--midas-line-height-4xl` | 56px |
| `--midas-font-size-5xl` | 48px | `--midas-line-height-5xl` | 72px |
| `--midas-font-size-6xl` | 64px | | |

| Peso | Valor | Tracking | Valor |
|---|---|---|---|
| `--midas-font-weight-regular` | 400 | `--midas-tracking-tight` | -1px |
| `--midas-font-weight-medium` | 500 | `--midas-tracking-normal` | 0px |
| `--midas-font-weight-semibold` | 600 | `--midas-tracking-wide` | 1px |

As classes padrão do Tailwind (`text-sm`, `text-lg`, `font-medium`) continuam funcionando, mas em UI nova use os text styles.

## Não faça

- Não use mono em títulos, body ou labels de UI. Mono é para dado técnico.
- Não escolha o estilo pelo tamanho ("preciso de 18px"): escolha pela função e deixe o estilo decidir.
- Não use mais de um `text-display-lg` por tela.
- Não combine um text style com `font-semibold`, `leading-*` ou `tracking-*` para "corrigi-lo". Se falta um estilo, é um pedido para o Figma.
- Não carregue outras famílias (Inter, Roboto...).
