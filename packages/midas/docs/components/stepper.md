---
title: "Stepper"
description: "Indicador de progresso em etapas, horizontal ou vertical, com passos concluídos (ícone de check), atual e pendentes, título e descrição por passo."
---

```tsx
import { Stepper, StepperDescription, StepperItem, StepperTitle } from "@t2-educacao/midas";
```

## Uso

```tsx
<Stepper value={1}>
  <StepperItem>
    <StepperTitle>Conta</StepperTitle>
    <StepperDescription>Dados básicos</StepperDescription>
  </StepperItem>
  <StepperItem>
    <StepperTitle>Pagamento</StepperTitle>
  </StepperItem>
  <StepperItem>
    <StepperTitle>Confirmação</StepperTitle>
  </StepperItem>
</Stepper>
```

O índice de cada `StepperItem` vem da ordem entre os filhos diretos do `Stepper`. Se envolver os itens em outro componente, passe `step` explicitamente.

## Props

### Stepper

Renderiza um `<ol>`. Aceita `className` e as props de `ol`.

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `value` | `number` | `0` | Passo atual, começando em 0 |
| `onValueChange` | `(value: number) => void` | | Se informado, clicar num passo chama a função com o índice dele |
| `orientation` | `"horizontal" \| "vertical"` | `"horizontal"` | Direção da lista |

### StepperItem

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `step` | `number` | ordem | Índice do passo. Só necessário se os itens não forem filhos diretos do `Stepper` |

`StepperTitle` e `StepperDescription` aceitam `className` e as props do elemento.

## Variantes

O estado vem de `value` e fica em `data-state` no item.

| Estado | Quando |
|---|---|
| `completed` | Índice menor que `value`: mostra o ícone de check |
| `current` | Índice igual a `value`: recebe `aria-current="step"` |
| `pending` | Índice maior que `value`: mostra o número, com texto atenuado |

## Exemplos

### Vertical

```tsx
<Stepper value={2} orientation="vertical" className="max-w-xs">
  <StepperItem>
    <StepperTitle>Matrícula</StepperTitle>
  </StepperItem>
  <StepperItem>
    <StepperTitle>Pagamento</StepperTitle>
  </StepperItem>
  <StepperItem>
    <StepperTitle>Acesso liberado</StepperTitle>
  </StepperItem>
</Stepper>
```

### Controlado

```tsx
"use client";

import { useState } from "react";

export default function Fluxo() {
  const [passo, setPasso] = useState(0);
  return (
    <Stepper value={passo} onValueChange={setPasso}>
      <StepperItem>
        <StepperTitle>Dados</StepperTitle>
      </StepperItem>
      <StepperItem>
        <StepperTitle>Revisão</StepperTitle>
      </StepperItem>
    </Stepper>
  );
}
```

## Acessibilidade

- Lista ordenada (`<ol>`), então leitores de tela anunciam a posição de cada passo.
- O passo atual tem `aria-current="step"`.
- O indicador (número ou check) é `aria-hidden`: o estado é comunicado pela ordem e por `aria-current`. Se o estado concluído precisa ser falado, inclua texto no título (por exemplo, "Conta (concluído)") ou na descrição.
- Dê um `aria-label` ao `Stepper` quando houver mais de um na página.
- Com `onValueChange`, o clique é só um atalho de mouse. Se o fluxo for navegável por teclado, ofereça botões "Voltar" e "Continuar" ao lado.

## Não faça

- Usar Stepper como navegação por abas ou seções livres: use [Tabs](./tabs.md).
- Usar para mostrar o caminho do usuário no site: use o [Breadcrumb](./breadcrumb.md).
- Passar `value` fora do intervalo dos passos sem intenção: acima do total, todos aparecem como concluídos.
- Escrever títulos longos: use `StepperDescription` para o detalhe.
