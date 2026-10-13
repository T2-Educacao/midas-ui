---
title: "DropdownMenu"
description: "Menu aberto por um gatilho (Dropdown do Figma): itens com ícone, atalho e check, labels em mono, separadores, submenus, checkbox/radio, item destrutivo, rodapé Limpar/Aplicar. DropdownTrigger traz os gatilhos Prefix, Simple, Icon e Ghost. appearance solid|glass e tone brand|neutral."
---

```tsx
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuFooter,
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
  DropdownTrigger,
} from "@t2-educacao/midas";
```

## Quando usar

Até 7 opções conhecidas (ordenar, filtrar, ações de linha, menu de perfil). Mais que isso ou lista dinâmica: [Combobox](./combobox.md).

## Quando não usar

Navegação principal; escolha de valor em formulário ([Select](./select.md)); conteúdo rico ([Popover](./popover.md)).

## Anatomia

`DropdownMenuContent` (`overlay-surface`, borda `border-subtle`, `elevation-overlay`, padding 6, largura mín. 224), itens de 36px (`body-sm`, ícone à esquerda em `content-secondary`, hover `overlay-hover`), `DropdownMenuLabel` (`text-mono-overline`), `DropdownMenuSeparator`.

## Props

### DropdownMenuContent

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `appearance` | `"solid" \| "glass"` | `"solid"` | Style |
| `tone` | `"brand" \| "neutral"` | `"brand"` | Cor do check de seleção: cyan ou preto/branco |
| `align`, `sideOffset` | | `"start"`, `6` | Posição |

### DropdownMenuItem

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `variant` | `"default" \| "destructive"` | `"default"` | Kind do Figma. Destrutivo em vermelho suave, por último e separado |
| `inset` | `boolean` | `false` | Alinha com itens que têm ícone |
| `disabled` | `boolean` | | Texto `content-disabled` |

### DropdownTrigger

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `kind` | `"prefix" \| "simple" \| "icon" \| "ghost"` | `"prefix"` | Prefix mostra `prefix` ("Ordenar:") + valor |
| `size` | `"md" \| "sm"` | `"md"` | 40 / 32px |
| `tone` | `"brand" \| "neutral"` | `"brand"` | Anel de foco/aberto |
| `prefix`, `icon` | `ReactNode` | | Prefixo e ícone |

Estado aberto e foco usam borda 1px + halo de 4px. Funções exportadas: `dropdownMenuContentVariants`, `dropdownMenuItemVariants`, `dropdownTriggerVariants`.

## Exemplos

Single com check na opção ativa:

```tsx
<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <DropdownTrigger prefix="Ordenar:">Último acesso</DropdownTrigger>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuRadioGroup value={ordem} onValueChange={setOrdem}>
      <DropdownMenuRadioItem value="acesso">Último acesso</DropdownMenuRadioItem>
      <DropdownMenuRadioItem value="nome">Nome A–Z</DropdownMenuRadioItem>
    </DropdownMenuRadioGroup>
  </DropdownMenuContent>
</DropdownMenu>
```

Menu de ações (Action Menu / Profile Menu):

```tsx
<DropdownMenuContent>
  <DropdownMenuLabel>Conta</DropdownMenuLabel>
  <DropdownMenuItem><IconUser /> Meu perfil <DropdownMenuShortcut>⌘P</DropdownMenuShortcut></DropdownMenuItem>
  <DropdownMenuItem><IconSettings /> Configurações</DropdownMenuItem>
  <DropdownMenuSeparator />
  <DropdownMenuItem variant="destructive"><IconLogout /> Sair</DropdownMenuItem>
</DropdownMenuContent>
```

Multi com Limpar/Aplicar: `DropdownMenuCheckboxItem` (use `onSelect={(e) => e.preventDefault()}` para não fechar) e `DropdownMenuFooter` com dois `Button size="sm"`.

## Acessibilidade

Radix: setas, Home/End, type-ahead, `Esc`, foco volta ao gatilho. Opção ativa com check à direita, nunca só cor. Atalhos de teclado são só visuais (implemente o atalho).

## Não faça

- Ação destrutiva sem separador ou sem texto claro.
- Aninhar mais de um nível de submenu.
- Usar para navegar entre páginas principais.
