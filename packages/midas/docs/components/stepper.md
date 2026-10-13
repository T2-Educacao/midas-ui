---
title: "Stepper"
description: "Mostra em qual etapa a pessoa está num fluxo com etapas nomeadas. Estados completed, current, pending (upcoming) e error; indicador number, icon ou dot; tipos default, segmented e compact (mobile); horizontal ou vertical."
---

```tsx
import {
  Stepper,
  StepperCompact,
  StepperDescription,
  StepperItem,
  StepperTitle,
} from "@t2-educacao/midas";
```

## Quando usar

- Fluxos com etapas nomeadas (checkout, matrícula, onboarding). 3 a 7 etapas, nomes curtos.
- Horizontal para fluxos curtos (3 a 5) no desktop; vertical para fluxos longos, trilhas e checklists (aceita descrição).
- `segmented`: uma barra por etapa, bom para checkout e formulários longos.
- `StepperCompact` no mobile ("Etapa 3 de 5", etapa atual e próxima).

## Não use

- Para progresso contínuo (use Progress).
- Com mais de 7 etapas na horizontal.
- Misturando indicadores `number` e `icon` no mesmo Stepper.
- Com vários brilhos: só a etapa atual se destaca.

## Uso

```tsx
<Stepper value={1} aria-label="Matrícula">
  <StepperItem>
    <StepperTitle>Conta</StepperTitle>
    <StepperDescription>Dados básicos</StepperDescription>
  </StepperItem>
  <StepperItem>
    <StepperTitle>Pagamento</StepperTitle>
    <StepperDescription>Cartão ou Pix</StepperDescription>
  </StepperItem>
  <StepperItem>
    <StepperTitle>Confirmação</StepperTitle>
  </StepperItem>
</Stepper>
```

## Anatomia

`Stepper` (`<ol>`) > `StepperItem` (`<li>`: indicador, linha de ligação e corpo) > `StepperTitle` + `StepperDescription`. O indicador é gerado pelo item. O estado vem da posição do item em relação a `value`, ou da prop `state`.

## Props

Todas as partes aceitam `className` (o seu vence), `ref` e repassam as demais props ao elemento.

### Stepper

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `value` | `number` | `0` | Índice (base 0) da etapa atual |
| `onValueChange` | `(value: number) => void` | | Torna as etapas botões clicáveis |
| `orientation` | `"horizontal" \| "vertical"` | `"horizontal"` | Direção |
| `type` | `"default" \| "segmented"` | `"default"` | Círculos ligados por linhas, ou uma barra por etapa |

### StepperItem

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `step` | `number` | posição | Índice da etapa (normalmente automático) |
| `state` | `"completed" \| "current" \| "pending" \| "error"` | derivado de `value` | Force `error` na etapa que falhou. `pending` é o Upcoming do Figma |
| `indicator` | `"number" \| "icon" \| "dot"` | `"number"` | Tipo de indicador |
| `icon` | `ReactNode` | | Ícone Tabler para `indicator="icon"` |

### StepperCompact

| Prop | Tipo | Descrição |
|---|---|---|
| `value` | `number` | Índice (base 0) da etapa atual |
| `total` | `number` | Total de etapas |
| `title` | `ReactNode` | Nome da etapa atual |
| `nextTitle` | `ReactNode` | Nome da próxima (opcional) |

## Estados

| Estado | Visual |
|---|---|
| completed | `action-accent-bg` com check; linha em `action-accent-bg` |
| current | `selection-bg` + `selection-border` + halo; é o único destaque do fluxo |
| pending | contorno `border-strong` (3:1), texto `content-secondary`; linha em `border-default` |
| error | `status-danger-*` com ícone de alerta e texto (nunca só cor) |

## Exemplos

### Erro e ícone

```tsx
import { IconCreditCard } from "@t2-educacao/midas/icons";

<Stepper value={1}>
  <StepperItem indicator="icon" icon={<IconCreditCard />}>
    <StepperTitle>Pagamento</StepperTitle>
  </StepperItem>
  <StepperItem state="error" indicator="icon">
    <StepperTitle>Pagamento recusado</StepperTitle>
    <StepperDescription>Revise o cartão</StepperDescription>
  </StepperItem>
</Stepper>
```

### Vertical clicável

```tsx
<Stepper orientation="vertical" value={step} onValueChange={setStep}>
  ...
</Stepper>
```

### Segmented e compact

```tsx
<Stepper type="segmented" value={1}>...</Stepper>

<StepperCompact value={2} total={5} title="Pagamento" nextTitle="Confirmação" />
```

## Acessibilidade

- `<ol>` com cada etapa em `<li>`; a atual com `aria-current="step"`.
- Etapas concluídas podem ser links/botões (`onValueChange`) para voltar; etapas futuras não deveriam ser clicáveis.
- O estado nunca depende só de cor: check, número com anel, contorno e ícone de alerta.
- Não esconda o rótulo da etapa atual no mobile (o Compact mantém o nome).
- Dê `aria-label` ao Stepper.

## Não faça

- Usar Stepper para progresso contínuo.
- Cores soltas ou `dark:`: tudo vem de tokens.
- Esconder o erro: marque `state="error"` na etapa que falhou.
