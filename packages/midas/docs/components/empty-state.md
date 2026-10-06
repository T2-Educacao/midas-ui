---
title: "Empty State"
description: "Estado vazio centralizado: EmptyState, EmptyStateIcon (círculo muted), EmptyStateTitle, EmptyStateDescription e EmptyStateActions. Use quando uma lista, busca ou página não tem conteúdo."
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
<EmptyState>
  <EmptyStateIcon>
    <Tray />
  </EmptyStateIcon>
  <EmptyStateTitle>Nenhum curso ainda</EmptyStateTitle>
  <EmptyStateDescription>Quando você se matricular, seus cursos aparecem aqui.</EmptyStateDescription>
  <EmptyStateActions>
    <Button>Explorar cursos</Button>
  </EmptyStateActions>
</EmptyState>
```

## Props

Todas as partes aceitam as props do elemento HTML correspondente, `className` (mesclado, a sua vence) e `ref`.

| Parte | Elemento | Descrição |
|---|---|---|
| `EmptyState` | `div` | Contêiner centralizado |
| `EmptyStateIcon` | `div` | Círculo muted de 48px; o `svg` filho recebe 24px. Decorativo (`aria-hidden`) |
| `EmptyStateTitle` | `h3` | Título |
| `EmptyStateDescription` | `p` | Texto de apoio com largura máxima |
| `EmptyStateActions` | `div` | Linha de botões |

## Variantes

| Composição | Quando usar |
|---|---|
| Ícone + título + descrição + ação | Lista vazia com próximo passo claro |
| Só título + descrição | Busca sem resultados |
| Sem ícone | Áreas pequenas, como dentro de um popover |

## Exemplos

### Busca sem resultados

```tsx
<EmptyState>
  <EmptyStateTitle>Nada encontrado</EmptyStateTitle>
  <EmptyStateDescription>Tente outros termos ou remova os filtros.</EmptyStateDescription>
</EmptyState>
```

## Acessibilidade

- O ícone é decorativo e escondido de leitores de tela; a mensagem deve estar no título e na descrição.
- O título é um `h3`: confira se o nível combina com a hierarquia de títulos da página.

## Não faça

- Não use para erros de carregamento; use `Alert`.
- Não coloque mais de uma ação primária.
- Não use só o ícone para comunicar a mensagem.
