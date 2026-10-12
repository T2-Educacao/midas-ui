---
title: "Ícones"
description: "Ícones Tabler pelo Midas: import, tamanho, traço, cor por currentColor, como achar o nome de um ícone e uso em Server Components."
---

O Midas usa **só** a biblioteca [Tabler Icons](https://tabler.io/icons) (mais de 4.900 ícones, grade de 24px, traço de 2px), a mesma da página Icons do Figma. Você **não** precisa instalá-la separadamente: ela vem com o `@t2-educacao/midas`.

## Como importar

```tsx
import { IconArrowRight, IconCircleCheck, IconSearch } from "@t2-educacao/midas/icons";
```

- Os nomes são os originais do Tabler: prefixo `Icon` + nome em PascalCase.
- Só os ícones importados vão para o bundle do projeto.
- `@t2-educacao/midas/icons/tabler` continua funcionando e exporta exatamente o mesmo conteúdo (alias de compatibilidade). Prefira `@t2-educacao/midas/icons`.

## Como achar o nome de um ícone

1. Busque em [tabler.io/icons](https://tabler.io/icons) (em inglês: `search`, `arrow right`, `trash`).
2. O nome mostrado em kebab-case vira PascalCase com prefixo `Icon`: `arrow-right` vira `IconArrowRight`, `brand-whatsapp` vira `IconBrandWhatsapp`, `circle-check` vira `IconCircleCheck`.
3. Existem variantes preenchidas com sufixo `Filled` (`IconStarFilled`, `IconHeartFilled`).

## Tamanho e traço

```tsx
<IconCircleCheck size={20} stroke={1.5} className="text-success" />
```

| Prop | Padrão | Valores |
|---|---|---|
| `size` | `24` | número (px) |
| `stroke` | `2` | espessura do traço (o Midas e o Figma usam `2`) |
| `color` | `currentColor` | prefira `className="text-..."` com tokens |

Também dá para dimensionar por classe: `className="size-4"`. Dentro de `Button`, `Toggle`, `Badge` e outros componentes o tamanho é ajustado automaticamente.

## Cor e modos

O traço usa `currentColor`: o ícone herda a cor do texto do elemento pai. Os modos de cor do Figma são só tokens de texto:

| Modo no Figma | Classe |
|---|---|
| Default | `text-foreground` (ou nada: herda) |
| Muted | `text-muted-foreground` |
| On primary | `text-primary-foreground` |
| Selected | `text-primary` |

```tsx
<IconSearch className="text-muted-foreground" />
```

## Server e Client Components

Os ícones funcionam em Server Components e em Client Components, sem `"use client"` e sem configuração.

## Acessibilidade

- Ícone **decorativo** (ao lado de texto): não precisa de nada.
- Ícone **sozinho** com significado: dê um nome acessível ao elemento pai.

```tsx
<Button size="icon" aria-label="Buscar">
  <IconSearch />
</Button>
```

- Ícones que indicam direção (setas, chevrons) devem espelhar em RTL: `className="rtl:rotate-180"`.

## Exemplos

```tsx
import { Button, Alert, AlertTitle } from "@t2-educacao/midas";
import { IconAlertTriangle, IconArrowRight, IconPlus } from "@t2-educacao/midas/icons";

<Button>
  <IconPlus /> Nova turma
</Button>

<Button variant="outline">
  Continuar <IconArrowRight className="rtl:rotate-180" />
</Button>

<Alert variant="warning">
  <IconAlertTriangle />
  <AlertTitle>Acesso expira em breve</AlertTitle>
</Alert>
```

Ícone preenchido por estado:

```tsx
import { IconStar, IconStarFilled } from "@t2-educacao/midas/icons";

{favorito ? <IconStarFilled /> : <IconStar />}
```

## Tipos

```tsx
import type { Icon, IconProps } from "@t2-educacao/midas/icons";

type Item = { label: string; icon: Icon };
```

## Não faça

- Usar outras bibliotecas de ícones (`lucide-react`, `react-icons`, Phosphor, heroicons...).
- Importar de `@tabler/icons-react` direto: importe pelo Midas, assim a versão fica sincronizada com o design system.
- Colorir com hex ou cor da paleta padrão do Tailwind (`text-blue-500`): use tokens.
- Mudar o `stroke` de um ícone isolado: a espessura 2 é o padrão do design system.
- Esquecer o `aria-label` em botão que só tem ícone.
