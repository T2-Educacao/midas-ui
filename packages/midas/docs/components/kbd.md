---
title: "Kbd"
description: "Exibe teclas e atalhos de teclado (ex.: Ctrl + K). Kbd para uma tecla, KbdGroup para um atalho com várias teclas."
---

```tsx
import { Kbd, KbdGroup } from "@t2-educacao/midas";
```

## Uso

```tsx
<Kbd>Esc</Kbd>

<KbdGroup>
  <Kbd>Ctrl</Kbd>
  <Kbd>K</Kbd>
</KbdGroup>
```

## Props

`Kbd` e `KbdGroup` aceitam as props de `<kbd>` e `className`.

## Exemplos

### Dentro de um botão

```tsx
<Button variant="outline">
  Buscar <Kbd>⌘K</Kbd>
</Button>
```

### Dentro de um tooltip

```tsx
<TooltipContent>
  Salvar <Kbd>Ctrl</Kbd> <Kbd>S</Kbd>
</TooltipContent>
```

### Com ícone

```tsx
import { ArrowFatUp } from "@t2-educacao/midas/icons";

<Kbd><ArrowFatUp /></Kbd>
```

## Acessibilidade

- Usa o elemento semântico `<kbd>`.
- Para símbolos (⌘, ⇧), escreva o nome da tecla em texto próximo quando o atalho for importante.

## Não faça

- Usar `Kbd` para destacar texto que não é tecla: use `Badge` ou texto em negrito.
