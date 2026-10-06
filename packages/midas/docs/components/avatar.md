---
title: "Avatar"
description: "Foto de perfil redonda com fallback (iniciais). Tamanhos sm (24px), default (32px) e lg (40px); AvatarBadge de status ou ícone; AvatarGroup sobreposto com AvatarGroupCount (+3)."
---

```tsx
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@t2-educacao/midas";
```

## Uso

```tsx
<Avatar>
  <AvatarImage src="/alunos/ana.jpg" alt="Ana Souza" />
  <AvatarFallback>AS</AvatarFallback>
</Avatar>
```

Se a imagem não carregar (ou não existir), aparece o `AvatarFallback`.

## Componentes

| Componente | O que é |
|---|---|
| `Avatar` | O círculo. `size`: `"sm"`, `"default"`, `"lg"` ou um número em px (ex.: `size={56}`) |
| `AvatarImage` | A foto (`src`, `alt`) |
| `AvatarFallback` | Texto ou ícone quando não há foto |
| `AvatarBadge` | Indicador no canto inferior direito. `variant`: `"status"` (verde) ou `"icon"` (azul T2, com ícone) |
| `AvatarGroup` | Avatares sobrepostos |
| `AvatarGroupCount` | Círculo "+N" ou ícone no fim do grupo. `size` igual ao dos avatares |

## Exemplos

### Badge de status

```tsx
<Avatar>
  <AvatarImage src="/alunos/ana.jpg" alt="Ana Souza" />
  <AvatarFallback>AS</AvatarFallback>
  <AvatarBadge aria-label="Online" />
</Avatar>
```

### Badge com ícone

```tsx
<Avatar size="lg">
  <AvatarFallback>AS</AvatarFallback>
  <AvatarBadge variant="icon">
    <Plus />
  </AvatarBadge>
</Avatar>
```

### Grupo com contador

```tsx
<AvatarGroup>
  <Avatar><AvatarFallback>AS</AvatarFallback></Avatar>
  <Avatar><AvatarFallback>BR</AvatarFallback></Avatar>
  <AvatarGroupCount>+3</AvatarGroupCount>
</AvatarGroup>
```

### Grupo com ícone

```tsx
<AvatarGroup>
  <Avatar><AvatarFallback>AS</AvatarFallback></Avatar>
  <AvatarGroupCount><Plus /></AvatarGroupCount>
</AvatarGroup>
```

### Com menu

```tsx
<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="ghost" size="icon" rounded aria-label="Minha conta">
      <Avatar><AvatarImage src="/alunos/ana.jpg" alt="" /><AvatarFallback>AS</AvatarFallback></Avatar>
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Perfil</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem variant="destructive">Sair</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

## Acessibilidade

- `AvatarImage` precisa de `alt` (o nome da pessoa). Dentro de um botão com `aria-label`, use `alt=""`.
- `AvatarBadge` de status precisa de `aria-label` ("Online") para não depender só da cor.
