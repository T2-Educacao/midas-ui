---
title: "SocialButton"
description: "Botão de login social com os logos oficiais de Google e LinkedIn (Figma Social Button). Estilos outline, filled, inverse e glass; tamanhos md e lg; layout full ou icon; forma rounded ou pill."
---

```tsx
import { SocialButton, SocialLogo } from "@t2-educacao/midas";
```

## Quando usar

Em telas de login e cadastro, para entrar com um provedor externo. É sempre neutro (nunca Cyan). Em mobile, empilhe em largura total com `size="lg"`.

## Uso

```tsx
<SocialButton provider="google" size="lg" className="w-full" onClick={entrarComGoogle} />
<SocialButton provider="linkedin" variant="filled">Entrar com LinkedIn</SocialButton>
<SocialButton provider="google" layout="icon" />
```

O texto padrão é "Continuar com Google" / "Continuar com LinkedIn". Passe `children` para mudar.

## Props

Aceita as props de `<button>` (`type="button"` por padrão) mais:

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `provider` | `"google" \| "linkedin"` | obrigatório | Logo e texto padrão |
| `variant` | `"outline" \| "filled" \| "inverse" \| "glass"` | `"outline"` | Estilo |
| `size` | `"md" \| "lg"` | `"md"` | 40px / 48px |
| `layout` | `"full" \| "icon"` | `"full"` | Com texto ou só o logo |
| `shape` | `"rounded" \| "pill"` | `"rounded"` | Cantos discretos ou pill |
| `children` | `ReactNode` | | Texto próprio |

## Variantes

| Variante | Quando usar |
|---|---|
| `outline` | Padrão: borda clara com sombra suave |
| `filled` | Fundo neutro, sem borda |
| `inverse` | Fundo escuro no claro e claro nos escuros |
| `glass` | Sobre imagem ou mídia |

`SocialLogo` exporta só o logo (`provider`), decorativo. As cores dos logos são as da marca (exceção ao uso só de tokens).

## Acessibilidade

- `layout="icon"` usa o texto padrão como `aria-label`; passe `aria-label` próprio se mudar o texto.
- O logo é `aria-hidden`. Disabled usa `disabled-bg` e `content-disabled`.

## Não faça

- Usar logos fora dos oficiais ou recolori-los.
- Mais de dois provedores sem hierarquia clara.
