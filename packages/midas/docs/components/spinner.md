---
title: "Spinner"
description: "Indicador de carregamento animado. Anuncia \"Carregando\" para leitores de tela; usado sozinho ou dentro de botões (Button loading)."
---

```tsx
import { Spinner } from "@t2-educacao/midas";
```

## Uso

```tsx
<Spinner />
```

## Props

Aceita as props de `<svg>` mais:

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `label` | `string` | `"Carregando"` | Texto lido por leitores de tela. Com `""`, o spinner vira decorativo |
| `className` | `string` | | Tamanho e cor (ex.: `size-6 text-primary`) |

## Exemplos

### Tamanho e cor

```tsx
<Spinner className="size-6 text-primary" />
```

### Com texto

```tsx
<div className="flex items-center gap-2 text-sm text-muted-foreground">
  <Spinner label="" aria-hidden />
  Gerando relatório
</div>
```

### Em botão

Prefira a prop `loading` do [Button](./button.md):

```tsx
<Button loading>Salvando</Button>
```

## Acessibilidade

- Com `label`, recebe `role="status"` e é anunciado por leitores de tela.
- Quando já existe texto visível descrevendo o carregamento, use `label=""` e `aria-hidden` para não anunciar duas vezes.
- A animação para quando o usuário pede menos movimento (`prefers-reduced-motion`).

## Não faça

- Vários spinners na mesma tela para o mesmo carregamento.
