---
title: Banner
description: "Aviso persistente sobre a página ou a conta (offline, manutenção, renovação). Não some sozinho. Status info, success, warning, error e neutral; aparência subtle ou inverse; layout full (largura total) ou inline (arredondado); ação opcional e fechar opcional."
---

```tsx
import { Banner, BannerAction } from "@t2-educacao/midas";
```

Diferente do [Toast](./toast.md), o Banner fica até a situação ser resolvida ou a pessoa fechar. Para mensagens no meio do conteúdo use [Alert](./alert.md).

## Uso

```tsx
<Banner
  status="error"
  title="Você está offline."
  action={<BannerAction onClick={tentar}>Tentar agora</BannerAction>}
>
  Suas respostas serão sincronizadas quando a conexão voltar.
</Banner>

<Banner status="info" layout="inline" onClose={() => setAberto(false)}
  action={<BannerAction asChild><a href="/trilhas/cea">Ver trilha</a></BannerAction>}>
  Comece pelo módulo 1 quando quiser.
</Banner>
```

## Props

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `status` | `"info" \| "success" \| "warning" \| "error" \| "neutral"` | `"info"` | Cor e ícone padrão |
| `appearance` | `"subtle" \| "inverse"` | `"subtle"` | `inverse`: escuro, para chamar atenção em páginas claras ou sobre o Hero |
| `layout` | `"full" \| "inline"` | `"full"` | `full`: largura toda, acima do header ou logo abaixo; `inline`: arredondado dentro do conteúdo |
| `title` | `ReactNode` | | Texto curto em destaque (label-sm) |
| `children` | `ReactNode` | | Mensagem |
| `action` | `ReactNode` | | Normalmente um `BannerAction` |
| `onClose` | `() => void` | | Mostra o botão de fechar |
| `closeLabel` | `string` | `"Fechar aviso"` | Nome acessível do fechar |
| `icon` | `ReactNode` | | Troca o ícone do status (Tabler) |
| `role` | `string` | `alert` para error/warning; `status` nos demais | |

`BannerAction`: `asChild` para virar link; botão por padrão.

## Regras

- Um banner por vez no topo; se houver mais, priorize error > warning > info.
- Use para estados que duram: offline, manutenção, renovação, conta pendente.
- A ação é curta ("Tentar agora", "Revisar").
- Error e warning de conta não devem ter botão de fechar até serem resolvidos (não passe `onClose`).

## Acessibilidade

- `role="alert"` (error/warning) anuncia imediatamente; os demais usam `status`.
- O ícone é decorativo; o significado está no texto.

## Não faça

- Usar Banner para confirmações rápidas (use Toast).
- Empilhar vários banners.
