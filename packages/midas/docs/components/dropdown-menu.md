---
title: "DropdownMenu"
description: "Menu de ações aberto por um botão. Itens com ícone e atalho, labels, separadores, submenus, itens de checkbox e radio, item destrutivo e itens desabilitados."
---

```tsx
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@t2-educacao/midas";
```

## Uso

```tsx
<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Abrir</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Minha conta</DropdownMenuLabel>
    <DropdownMenuGroup>
      <DropdownMenuItem>Perfil</DropdownMenuItem>
      <DropdownMenuItem>Assinatura</DropdownMenuItem>
      <DropdownMenuItem>Configurações</DropdownMenuItem>
    </DropdownMenuGroup>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Suporte</DropdownMenuItem>
    <DropdownMenuItem disabled>API</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

## Componentes

| Componente | O que é |
|---|---|
| `DropdownMenu` | Raiz |
| `DropdownMenuTrigger` | Botão que abre o menu (use `asChild`) |
| `DropdownMenuContent` | O menu (mínimo de 128px de largura) |
| `DropdownMenuItem` | Ação. `variant="destructive"` para ações perigosas, `inset` para alinhar com itens que têm ícone |
| `DropdownMenuLabel` | Título de uma seção (texto pequeno em cinza) |
| `DropdownMenuGroup` | Agrupa itens relacionados |
| `DropdownMenuSeparator` | Linha entre seções |
| `DropdownMenuShortcut` | Atalho de teclado alinhado à direita |
| `DropdownMenuCheckboxItem` | Item liga/desliga, com check à direita |
| `DropdownMenuRadioGroup` / `DropdownMenuRadioItem` | Escolha única dentro do menu |
| `DropdownMenuSub` / `DropdownMenuSubTrigger` / `DropdownMenuSubContent` | Submenu |

## Props principais

| Componente | Prop | Descrição |
|---|---|---|
| `DropdownMenuContent` | `align` (`"start"` padrão), `side`, `sideOffset` | Posição |
| `DropdownMenuItem` | `onSelect`, `disabled`, `variant`, `inset` | Ação e estado |
| `DropdownMenuCheckboxItem` | `checked`, `onCheckedChange` | Estado |
| `DropdownMenuRadioGroup` | `value`, `onValueChange` | Valor escolhido |

## Exemplos

### Com ícones e atalhos

```tsx
<DropdownMenuItem>
  <User /> Perfil <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
</DropdownMenuItem>
<DropdownMenuItem variant="destructive">
  <SignOut /> Sair <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
</DropdownMenuItem>
```

### Submenu

```tsx
<DropdownMenuSub>
  <DropdownMenuSubTrigger>Convidar</DropdownMenuSubTrigger>
  <DropdownMenuSubContent>
    <DropdownMenuItem>E-mail</DropdownMenuItem>
    <DropdownMenuItem>WhatsApp</DropdownMenuItem>
  </DropdownMenuSubContent>
</DropdownMenuSub>
```

### Checkbox

```tsx
const [barra, setBarra] = useState(true);

<DropdownMenuCheckboxItem checked={barra} onCheckedChange={setBarra}>
  Barra de status
</DropdownMenuCheckboxItem>
```

### Radio

```tsx
const [posicao, setPosicao] = useState("topo");

<DropdownMenuRadioGroup value={posicao} onValueChange={setPosicao}>
  <DropdownMenuRadioItem value="topo">Topo</DropdownMenuRadioItem>
  <DropdownMenuRadioItem value="base">Base</DropdownMenuRadioItem>
</DropdownMenuRadioGroup>
```

### Com avatar

```tsx
<DropdownMenuTrigger asChild>
  <Button variant="ghost" size="icon" rounded aria-label="Conta">
    <img src="/ana.jpg" alt="" className="size-8 rounded-full" />
  </Button>
</DropdownMenuTrigger>
```

## Acessibilidade

- Teclado completo: setas navegam, `Enter`/`Espaço` selecionam, `→` abre submenu, `Esc` fecha.
- Digitar uma letra pula para o item que começa com ela.
- Gatilho só com ícone precisa de `aria-label`.

## Não faça

- Usar DropdownMenu para escolher um valor de formulário: use [Combobox](./combobox.md).
- Esconder a única forma de fazer uma ação importante dentro de um menu.
