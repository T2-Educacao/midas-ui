---
title: "ButtonGroup"
description: "Agrupa botões encostados, na horizontal ou vertical, com separador e texto opcionais. Usado em barras de ações, botões divididos (split) e campos com botão."
---

```tsx
import { ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from "@t2-educacao/midas";
```

## Uso

```tsx
<ButtonGroup aria-label="Ações da mensagem">
  <Button variant="outline">Arquivar</Button>
  <Button variant="outline">Denunciar</Button>
  <Button variant="outline">Adiar</Button>
</ButtonGroup>
```

Os botões ficam encostados: o primeiro e o último mantêm os cantos arredondados, os do meio ficam retos e as bordas internas não duplicam.

## Componentes

| Componente | O que é |
|---|---|
| `ButtonGroup` | O grupo (`role="group"`) |
| `ButtonGroupSeparator` | Linha divisória entre itens, útil entre botões `secondary` ou `default` |
| `ButtonGroupText` | Texto ou ícone fixo dentro do grupo (ex.: prefixo "R$") |

## Props

### ButtonGroup

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `orientation` | `"horizontal" \| "vertical"` | `"horizontal"` | Direção do grupo |
| `aria-label` | `string` | | Nome do grupo para leitores de tela (recomendado) |
| `className` | `string` | | Classes extras |

### ButtonGroupSeparator

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `orientation` | `"vertical" \| "horizontal"` | `"vertical"` | Use `"horizontal"` em grupos verticais |

### ButtonGroupText

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `asChild` | `boolean` | `false` | Renderiza o filho (ex.: `<label>`) com o visual de texto do grupo |

## Exemplos

### Vertical

```tsx
<ButtonGroup orientation="vertical" aria-label="Zoom">
  <Button variant="outline" size="icon" aria-label="Aumentar"><Plus /></Button>
  <Button variant="outline" size="icon" aria-label="Diminuir"><Minus /></Button>
</ButtonGroup>
```

### Botão dividido (split)

```tsx
<ButtonGroup aria-label="Publicar">
  <Button variant="secondary">Publicar</Button>
  <ButtonGroupSeparator />
  <Button variant="secondary" size="icon" aria-label="Mais opções">
    <CaretDown />
  </Button>
</ButtonGroup>
```

### Grupos aninhados

Um `ButtonGroup` dentro de outro ganha espaço entre os grupos automaticamente.

```tsx
<ButtonGroup aria-label="Editor">
  <ButtonGroup aria-label="Histórico">
    <Button variant="outline" size="icon" aria-label="Desfazer"><ArrowCounterClockwise /></Button>
    <Button variant="outline" size="icon" aria-label="Refazer"><ArrowClockwise /></Button>
  </ButtonGroup>
  <ButtonGroup aria-label="Arquivo">
    <Button variant="outline">Salvar</Button>
  </ButtonGroup>
</ButtonGroup>
```

### Com campo, select, menu ou popover

O grupo aceita `Input`, `InputGroup`, `SelectTrigger`, e gatilhos de `DropdownMenu` e `Popover` (com `asChild`). Os cantos e bordas internos se ajustam sozinhos.

```tsx
<ButtonGroup className="w-full max-w-xs">
  <Input placeholder="Buscar cursos" aria-label="Buscar cursos" />
  <Button variant="outline" size="icon" aria-label="Buscar"><MagnifyingGlass /></Button>
</ButtonGroup>

<ButtonGroup aria-label="Mensagem">
  <Button variant="outline">Seguir</Button>
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="outline" size="icon" aria-label="Mais opções"><CaretDown /></Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">...</DropdownMenuContent>
  </DropdownMenu>
</ButtonGroup>
```

### RTL

Em direita para esquerda os cantos arredondados trocam de lado sozinhos. Veja [RTL](../rtl.md).

### Com texto

```tsx
<ButtonGroup aria-label="Valor">
  <ButtonGroupText>R$</ButtonGroupText>
  <Button variant="outline">Alterar moeda</Button>
</ButtonGroup>
```

## Acessibilidade

- O grupo tem `role="group"`; dê um `aria-label` que descreva o conjunto.
- Cada botão continua focável individualmente; o item focado fica por cima dos vizinhos para o anel de foco aparecer inteiro.

## Não faça

- Misturar variantes diferentes no mesmo grupo (ex.: `default` ao lado de `outline`).
- Usar `ButtonGroup` para alternar estado (ligado/desligado): use [ToggleGroup](./toggle-group.md).
