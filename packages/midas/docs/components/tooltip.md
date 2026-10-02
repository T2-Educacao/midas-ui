---
title: "Tooltip"
description: "Balão de informação que aparece ao passar o mouse ou focar um elemento. Aceita texto simples ou conteúdo de dados com título, itens (rótulo, valor e indicador em ponto ou linha) e rodapé de total."
---

```tsx
import {
  Tooltip,
  TooltipContent,
  TooltipFooter,
  TooltipItem,
  TooltipTitle,
  TooltipTrigger,
} from "@t2-educacao/midas";
```

## Uso

```tsx
<Tooltip>
  <TooltipTrigger asChild>
    <Button variant="outline" size="icon" aria-label="Ajuda"><Question /></Button>
  </TooltipTrigger>
  <TooltipContent>Tire dúvidas sobre a plataforma</TooltipContent>
</Tooltip>
```

## Componentes

| Componente | O que é |
|---|---|
| `Tooltip` | Raiz. Já inclui o `TooltipProvider` |
| `TooltipTrigger` | O elemento que abre o tooltip. Use `asChild` para usar seu próprio botão |
| `TooltipContent` | O balão (card com borda e sombra) |
| `TooltipTitle` | Título em destaque (ex.: a data de um ponto do gráfico) |
| `TooltipItem` | Linha com indicador, rótulo e valor |
| `TooltipFooter` | Linha de total, separada por uma borda |
| `TooltipProvider` | Opcional: envolve a aplicação para compartilhar o atraso entre tooltips |

## Props

### Tooltip

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `delayDuration` | `number` | `0` | Atraso em ms para abrir |
| `open` / `defaultOpen` / `onOpenChange` | | | Controle do estado aberto |

### TooltipContent

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `side` | `"top" \| "right" \| "bottom" \| "left"` | `"top"` | Lado em relação ao gatilho |
| `sideOffset` | `number` | `6` | Distância do gatilho em px |
| `align` | `"start" \| "center" \| "end"` | `"center"` | Alinhamento |

### TooltipItem

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `label` | `ReactNode` | obrigatório | Nome da série ou item |
| `value` | `ReactNode` | | Valor alinhado à direita |
| `indicator` | `"dot" \| "line" \| "none"` | `"dot"` | Formato do indicador de cor |
| `color` | `string` | cor primária | Cor do indicador (ex.: a cor da série no gráfico) |
| `icon` | `ReactNode` | | Ícone no lugar do indicador |

## Exemplos

### Tooltip de dados (gráficos)

```tsx
<TooltipContent>
  <TooltipTitle>16 jul 2026</TooltipTitle>
  <TooltipItem label="Gestão de risco" value="50" color="var(--color-primary)" />
  <TooltipItem label="Análise de investimentos" value="30" color="var(--color-accent)" />
</TooltipContent>
```

### Indicador em linha ou sem indicador

```tsx
<TooltipItem label="Gestão de risco" value="100%" indicator="line" />
<TooltipItem label="Gestão de risco" value="15%" indicator="none" />
```

### Com ícones

```tsx
import { Calendar, ListBullets } from "@t2-educacao/midas/icons";

<TooltipItem icon={<Calendar />} label="Gestão de risco" value="380" />
<TooltipItem icon={<ListBullets />} label="Análise de investimentos" value="420" />
```

### Com total

```tsx
<TooltipContent>
  <TooltipItem label="Gestão de risco" value="1h" />
  <TooltipItem label="Análise de investimentos" value="50 min" />
  <TooltipFooter>
    <span>Total</span>
    <span>1h 50 min</span>
  </TooltipFooter>
</TooltipContent>
```

### Só texto, sem números

```tsx
<TooltipContent>
  <TooltipTitle>Matérias</TooltipTitle>
  <p className="text-muted-foreground">Ética, Sistema Financeiro, Investimentos</p>
</TooltipContent>
```

## Acessibilidade

- Abre com mouse **e** com foco do teclado; fecha com `Esc`.
- O conteúdo é ligado ao gatilho por `aria-describedby`.
- Tooltip é complementar: a informação essencial precisa estar acessível sem ele (em telas de toque, ele não abre ao passar o dedo).

## Não faça

- Colocar botões ou links dentro do tooltip: ele some quando o mouse sai. Use um Popover.
- Usar tooltip em elemento desabilitado: ele não recebe foco. Envolva-o num `<span tabIndex={0}>` ou mostre o motivo em texto.
