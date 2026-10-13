---
title: "Popover"
description: "Conteúdo curto e interativo que abre ao clicar num gatilho, sem sair da página (Info, Actions, Form, Profile, Tour). Seta apontando ao gatilho, appearance solid|glass, largura 300. Tooltip só explica no hover; Modal pede decisão que bloqueia."
---

```tsx
import {
  Popover,
  PopoverAnchor,
  PopoverClose,
  PopoverContent,
  PopoverDescription,
  PopoverFooter,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@t2-educacao/midas";
```

## Quando usar

Explicação com link, confirmação leve, formulário mínimo, cartão de perfil, passo de tour.

## Quando não usar

Só texto no hover ([Tooltip](./tooltip.md)); decisão importante ([Modal](./modal.md)); lista de ações ([DropdownMenu](./dropdown-menu.md)); conteúdo longo com rolagem.

## Props (`PopoverContent`)

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `side` | `"top" \| "bottom" \| "left" \| "right"` | `"bottom"` | Placement. Vira de lado sozinho se não houver espaço |
| `align` | `"start" \| "center" \| "end"` | `"center"` | Alinhamento |
| `sideOffset` | `number` | `8` | Distância do gatilho |
| `appearance` | `"solid" \| "glass"` | `"solid"` | Glass só sobre mídia |
| `arrow` | `boolean` | `true` | Seta |

Partes: `PopoverHeader`, `PopoverTitle` (`label-md`), `PopoverDescription` (`body-sm`), `PopoverFooter` (ações à direita, no máximo duas), `PopoverClose`, `PopoverAnchor`. `popoverContentVariants` é exportado.

## Exemplos

Info:

```tsx
<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline" size="icon" aria-label="O que é suitability?">
      <IconInfoCircle />
    </Button>
  </PopoverTrigger>
  <PopoverContent aria-labelledby="sui">
    <PopoverHeader>
      <PopoverTitle id="sui">O que é suitability?</PopoverTitle>
      <PopoverDescription>Análise do seu perfil de investidor.</PopoverDescription>
    </PopoverHeader>
    <a className="text-label-sm text-content-link" href="/aula">Ver aula sobre o tema</a>
  </PopoverContent>
</Popover>
```

Actions:

```tsx
<PopoverFooter>
  <PopoverClose asChild><Button variant="ghost" size="sm">Cancelar</Button></PopoverClose>
  <Button variant="destructive" size="sm">Excluir</Button>
</PopoverFooter>
```

## Acessibilidade

Abre com clique ou Enter/Espaço; `Esc` e clique fora fecham; foco vai para dentro e volta ao gatilho. Dê nome ao conteúdo (`aria-label` ou `aria-labelledby`).

## Não faça

- Mais de duas ações.
- Conteúdo longo com rolagem.
- Abrir por hover.
