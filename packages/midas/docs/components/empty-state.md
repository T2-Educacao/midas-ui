---
title: Empty State
description: "Mostra que uma página ou lista não tem conteúdo e diz o que fazer a seguir: ilustração com ícone da página em tile com anéis, título, descrição e ações. Containers card, plain e glass; tons brand e neutral."
---

```tsx
import {
  EmptyState,
  EmptyStateActions,
  EmptyStateDescription,
  EmptyStateIcon,
  EmptyStateTitle,
} from "@t2-educacao/midas";
```

## Uso

```tsx
import { IconClipboardList } from "@t2-educacao/midas/icons";

<EmptyState container="card">
  <EmptyStateIcon>
    <IconClipboardList />
  </EmptyStateIcon>
  <div className="flex flex-col gap-2">
    <EmptyStateTitle>Nenhum simulado ainda</EmptyStateTitle>
    <EmptyStateDescription>
      Quando você fizer um simulado, suas notas e o resultado por módulo aparecem aqui.
    </EmptyStateDescription>
  </div>
  <EmptyStateActions>
    <Button variant="outline">Ver trilha</Button>
    <Button>Fazer primeiro simulado</Button>
  </EmptyStateActions>
</EmptyState>
```

## Props

| Componente | Prop | Tipo | Padrão | Descrição |
|---|---|---|---|---|
| `EmptyState` | `container` | `"card" \| "plain" \| "glass"` | `"plain"` | Superfície |
| `EmptyState` | `tone` | `"brand" \| "neutral"` | `"brand"` | Cor do ícone e dos detalhes |
| `EmptyStateIcon` | `children` | `ReactNode` | | Ícone Tabler da página (26px), dentro do tile |
| `EmptyStateTitle` / `EmptyStateDescription` / `EmptyStateActions` | | | | Texto e ações |

Todos aceitam `className` (mesclada) e `ref`.

## Variantes: quando usar

| Container | Quando usar |
|---|---|
| `card` | Áreas soltas na página |
| `plain` | Dentro de tabelas, listas e cards que já têm superfície |
| `glass` | Sobre imagens/mídia |

## Conteúdo por página (Figma)

O ícone é sempre o da página (Simulados: prancheta, Carteira: carteira, Busca: lupa, Notificações: sino...). Exemplos de texto: "Nenhum simulado ainda", "Você ainda não está em nenhum curso", "Sua carteira está vazia", "Nenhuma meta criada", "Nenhum resultado para “cripto”", "Nenhum item com esses filtros", "Tudo em dia", "Nenhum aluno nesta turma", "Nenhuma conquista ainda".

## Regras

- Título diz o que está vazio; descrição diz por quê ou o que acontece depois; botão leva à ação que resolve.
- Uma ação principal; secundária opcional em Outline.
- Busca e Filtros sem resultado: ofereça limpar.
- Ícone sempre da página, nunca ilustração genérica.

## Acessibilidade

- O ícone é decorativo (`aria-hidden`). O título é um `h3`: ajuste a hierarquia da página se necessário (`EmptyStateTitle` aceita outras props, mas o elemento é fixo; use `asChild`-like wrapper se precisar de outro nível).

## Não faça

- Usar sem ação quando existe uma ação óbvia.
- Usar `card` dentro de outro card.
