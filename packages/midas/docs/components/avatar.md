---
title: Avatar
description: "Representa uma pessoa: foto (AvatarImage), iniciais ou ícone (AvatarFallback) e botão de adicionar (AvatarAdd). Tamanhos xs a 2xl (24 a 96px), forma circle ou rounded, anel, AvatarBadge de status (online, away, busy, offline, verified, count), AvatarGroup com +N e AvatarOption para escolher avatar."
---

```tsx
import {
  Avatar,
  AvatarAdd,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
  AvatarOption,
} from "@t2-educacao/midas";
```

Ordem de prioridade: foto do usuário, iniciais, ícone. `AvatarAdd` é um espaço vazio para convidar alguém.

## Uso

```tsx
<Avatar size="md">
  <AvatarImage src="/ana.jpg" alt="Ana Souza" />
  <AvatarFallback>AS</AvatarFallback>
  <AvatarBadge status="online" />
</Avatar>

<Avatar shape="rounded" size="lg"><AvatarFallback><IconBuilding /></AvatarFallback></Avatar>

<AvatarGroup size="md">
  <Avatar><AvatarFallback>RM</AvatarFallback></Avatar>
  <Avatar><AvatarFallback>CR</AvatarFallback></Avatar>
  <AvatarGroupCount asChild>
    <button type="button" aria-label="Ver mais 5 pessoas">+5</button>
  </AvatarGroupCount>
</AvatarGroup>

<AvatarAdd aria-label="Convidar pessoa" />
```

## Props

Avatar:

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `size` | `"xs" \| "sm" \| "md" \| "lg" \| "xl" \| "2xl" \| "default" \| number` | `"default"` | 24, 32, 40, 48, 64, 96px. `default` = 32px (igual a `sm`, nome legado). Número em px |
| `shape` | `"circle" \| "rounded"` | `"circle"` | `rounded` com raio proporcional, para marcas, empresas e contas. Pessoas usam circle |
| `ring` | `boolean` | `false` | Anel de 2px na cor do fundo (para sobreposição) |

Outros:

| Componente | Prop | Descrição |
|---|---|---|
| `AvatarFallback` | `colorFrom?: string` | Cor estável derivada do texto (paleta de gráficos) em vez de `surface-muted` |
| `AvatarBadge` | `status?: "online" \| "away" \| "busy" \| "offline" \| "verified" \| "count"` | Padrão `online`. `variant="icon"` (legado) vira `verified`. Com `count`, o número vai em `children` |
| `AvatarAdd` | `size`, `shape` | Botão tracejado com ícone de mais; passe `aria-label` |
| `AvatarGroup` | `size?: "sm" \| "md" \| "lg"` | Sobreposição de ¼ do tamanho; o primeiro fica por cima |
| `AvatarGroupCount` | `size`, `asChild` | O "+N". Use `asChild` com um botão para torná-lo interativo |
| `AvatarOption` | `selected?: boolean` | Tile 104px de escolha (Avatar Builder), com estados padrão, hover e selecionado |

## Variantes: quando usar

| Item | Quando usar |
|---|---|
| `xs` 24 | Tabelas densas |
| `sm` 32 | Listas e comentários |
| `md` 40 | Padrão do Figma |
| `lg` 48 | Cards |
| `xl` 64 / `2xl` 96 | Perfil |
| Badge `online`/`away`/`busy` | Presença (verde, âmbar, vermelho com barra) |
| Badge `offline` | Contorno vazado |
| Badge `verified` | Conta verificada (ciano com check) |
| Badge `count` | Notificações |

## Acessibilidade

- Foto: `alt` com o nome ("Ana Souza"); se o nome já está ao lado, `alt=""`.
- `AvatarBadge` tem `role="img"` e nome acessível do status ("Online", "Ausente"...). Para contador, passe `aria-label="3 notificações"`.
- O "+N" deve ser um botão com `aria-label="Ver mais 5 pessoas"` (`asChild`). Para mostrar o nome no hover, envolva com [Tooltip](./tooltip.md).
- Alvos de toque ≥ 44px quando clicável (xs/sm precisam de área estendida).

## Limitações

O Avatar Builder do Figma (personagem doodle com Face, Hair, Body, Glasses e Item e o modal de montagem) não foi portado. `AvatarOption` entrega só o tile de escolha; o desenho das peças fica a cargo do projeto.

## Não faça

- Misturar `circle` e `rounded` para pessoas.
- Badge em `xs` (fica ilegível).
- Usar ícone genérico quando há iniciais disponíveis.
