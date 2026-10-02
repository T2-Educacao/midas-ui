---
title: "Popover"
description: "Painel flutuante aberto por clique, para conteúdo rico e interativo (formulários curtos, detalhes, filtros). Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverTitle, PopoverDescription, PopoverClose e PopoverAnchor."
---

```tsx
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@t2-educacao/midas";
```

## Uso

```tsx
<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Abrir</Button>
  </PopoverTrigger>
  <PopoverContent aria-labelledby="titulo-dimensoes">
    <PopoverHeader>
      <PopoverTitle id="titulo-dimensoes">Dimensões</PopoverTitle>
      <PopoverDescription>Defina o tamanho da camada.</PopoverDescription>
    </PopoverHeader>
  </PopoverContent>
</Popover>
```

## Componentes

| Componente | O que é |
|---|---|
| `Popover` | Raiz (controla aberto/fechado) |
| `PopoverTrigger` | Abre e fecha ao clicar. Use `asChild` com seu botão |
| `PopoverContent` | O painel (288px de largura, padding de 16px) |
| `PopoverHeader` / `PopoverTitle` / `PopoverDescription` | Cabeçalho opcional |
| `PopoverClose` | Fecha o popover (use `asChild` com um botão) |
| `PopoverAnchor` | Posiciona o painel em relação a outro elemento |

## Props

### Popover

| Prop | Tipo | Descrição |
|---|---|---|
| `open` / `defaultOpen` / `onOpenChange` | | Controle do estado |
| `modal` | `boolean` | Bloqueia a interação fora enquanto aberto |

### PopoverContent

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `side` | `"top" \| "right" \| "bottom" \| "left"` | `"bottom"` | Lado |
| `align` | `"start" \| "center" \| "end"` | `"center"` | Alinhamento |
| `sideOffset` | `number` | `4` | Distância do gatilho |
| `aria-label` / `aria-labelledby` | `string` | | Nome do painel (obrigatório para acessibilidade) |

## Exemplos

### Formulário curto

```tsx
<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Definir meta</Button>
  </PopoverTrigger>
  <PopoverContent aria-label="Meta de estudo" align="start">
    <Field>
      <FieldLabel htmlFor="horas">Horas por semana</FieldLabel>
      <Input id="horas" type="number" defaultValue={5} />
    </Field>
    <PopoverClose asChild>
      <Button size="sm">Salvar</Button>
    </PopoverClose>
  </PopoverContent>
</Popover>
```

## Acessibilidade

- O painel tem `role="dialog"`: dê um nome com `aria-labelledby` (apontando para o `PopoverTitle`) ou `aria-label`.
- `Esc` fecha e o foco volta ao gatilho.

## Não faça

- Usar Popover para dicas de texto ao passar o mouse: use [Tooltip](./tooltip.md).
- Usar Popover para listas de ações: use [DropdownMenu](./dropdown-menu.md).
