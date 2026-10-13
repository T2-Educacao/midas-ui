---
title: "InputGroup"
description: "Container de campo com ícones, texto e botões (addons) ao redor de um input ou textarea. Mesmas variantes do Input: size sm/md/lg, appearance outline/filled/glass, tone brand/neutral, shape rounded/pill, success. Use para ícone de busca, mostrar senha, prefixos (R$) e stepper numérico."
---

```tsx
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@t2-educacao/midas";
```

## Uso

```tsx
<InputGroup>
  <InputGroupAddon>
    <InputGroupText>https://</InputGroupText>
  </InputGroupAddon>
  <InputGroupInput placeholder="t2.com.br" aria-label="Site" />
  <InputGroupAddon align="end">
    <Info />
  </InputGroupAddon>
</InputGroup>
```

## Componentes

| Componente | O que é |
|---|---|
| `InputGroup` | A borda de 32px que envolve tudo. Mostra foco e erro do campo interno |
| `InputGroupAddon` | Área antes (`align="start"`) ou depois (`align="end"`) do campo. Clicar nela foca o campo |
| `InputGroupInput` | O campo de texto, sem borda própria |
| `InputGroupTextarea` | Campo de várias linhas, cresce com o conteúdo |
| `InputGroupText` | Texto fixo dentro do addon (ex.: "R$", "https://") |
| `InputGroupButton` | Botão pequeno (24px, `ghost`) para usar dentro do addon |

## Props

### InputGroupAddon

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `align` | `"start" \| "end"` | `"start"` | Lado do addon |

### InputGroupButton

Mesmas props do [Button](./button.md). Padrões: `variant="ghost"` e `size="xs"`.

## Exemplos

### Busca com ícone

```tsx
<InputGroup>
  <InputGroupAddon>
    <MagnifyingGlass />
  </InputGroupAddon>
  <InputGroupInput placeholder="Buscar cursos" aria-label="Buscar cursos" />
</InputGroup>
```

### Com botão

```tsx
<InputGroup>
  <InputGroupInput value="https://t2.com.br/convite/ana" readOnly aria-label="Link de convite" />
  <InputGroupAddon align="end">
    <InputGroupButton size="icon-xs" aria-label="Copiar link">
      <Copy />
    </InputGroupButton>
  </InputGroupAddon>
</InputGroup>
```

### Com atalho

```tsx
<InputGroup>
  <InputGroupInput placeholder="Buscar" aria-label="Buscar" />
  <InputGroupAddon align="end">
    <Kbd>⌘K</Kbd>
  </InputGroupAddon>
</InputGroup>
```

### Textarea

```tsx
<InputGroup>
  <InputGroupTextarea placeholder="Escreva sua dúvida" aria-label="Dúvida" />
</InputGroup>
```

### Inválido

Coloque `aria-invalid` no `InputGroupInput`: a borda do grupo inteiro fica vermelha.

```tsx
<InputGroup>
  <InputGroupInput aria-invalid aria-label="Cupom" />
</InputGroup>
```

## Acessibilidade

- O campo interno precisa de nome (`aria-label` ou `FieldLabel htmlFor`).
- Botão só com ícone dentro do addon precisa de `aria-label`.

## Não faça

- Usar `Input` dentro de `InputGroup`: use `InputGroupInput`, que não tem borda própria.
- Colocar mais de um campo no mesmo grupo.

## Variantes do Figma

O `InputGroup` aceita as mesmas props do [Input](./input.md): `size` (40/48/56), `appearance`, `tone`, `shape` e `success`. A altura, a borda e o foco ficam no container; o `InputGroupInput` herda o tamanho do texto. Exporta `inputGroupVariants`.

```tsx
import { IconEye, IconSearch } from "@t2-educacao/midas/icons";

<InputGroup size="lg" shape="pill">
  <InputGroupAddon><IconSearch /></InputGroupAddon>
  <InputGroupInput placeholder="Buscar" aria-label="Buscar" />
  <InputGroupAddon align="end">
    <InputGroupButton aria-label="Mostrar senha"><IconEye /></InputGroupButton>
  </InputGroupAddon>
</InputGroup>
```

Tipos do Figma montados com InputGroup: Password (botão de olho), Search (botão de limpar), Number (botões − e +). Para busca principal use [SearchBar](./search-bar.md).
