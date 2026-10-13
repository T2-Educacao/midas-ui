---
title: "Button"
description: "Botão de ação do Midas (Figma Buttons v1.1). Variantes primary, accent (Cyan), secondary, outline, ghost, destructive e as expressivas sobre mídia (glass, frosted, on-media, gradient); tamanhos xs a 2xl; forma rounded ou pill; estados hover, pressed, focus, disabled e loading; asChild para links."
---

```tsx
import { Button } from "@t2-educacao/midas";
```

## Quando usar

Para **ações**: enviar, salvar, avançar, abrir um fluxo, confirmar. O rótulo é um verbo no infinitivo ou imperativo curto ("Salvar", "Começar curso").

Não use para navegar entre páginas (use [Link](./link.md)), para alternar estado (use [Switch](./switch.md) ou [Toggle](./toggle.md)) nem para escolher entre opções (use Chip, [RadioGroup](./radio-group.md) ou Select). Não use mais de um `primary` por área.

## Anatomia

1. Container (fundo, borda opcional, raio, sombra); 2. ícone à esquerda (opcional, Tabler); 3. rótulo (`text-label-*`); 4. ícone à direita (opcional). Altura = `size/control/*`; o ícone herda a cor do texto (`currentColor`) e é dimensionado pelo `size`.

## Uso

```tsx
import { IconArrowRight, IconPlus } from "@t2-educacao/midas/icons";

<Button>Salvar</Button>
<Button variant="accent">Assinar agora</Button>
<Button variant="secondary">Cancelar</Button>
<Button><IconPlus /> Novo curso</Button>
<Button size="lg">Começar <IconArrowRight className="rtl:rotate-180" /></Button>
```

## Props

Aceita todas as props de `<button>` (`onClick`, `disabled`, `type`...) mais:

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `variant` | `"default" \| "primary" \| "accent" \| "secondary" \| "outline" \| "ghost" \| "destructive" \| "success" \| "warning" \| "info" \| "link" \| "glass" \| "liquid-glass" \| "frosted" \| "frosted-accent" \| "on-media" \| "gradient-accent" \| "gradient-neutral"` | `"default"` | Estilo visual (`default` = `primary`) |
| `size` | `"xs" \| "sm" \| "default" \| "md" \| "lg" \| "xl" \| "2xl" \| "icon-xs" \| "icon-sm" \| "icon" \| "icon-md" \| "icon-lg" \| "icon-xl" \| "icon-2xl"` | `"default"` | Altura, padding, gap, texto e ícone (`default` = `md`) |
| `rounded` | `boolean` | `false` | Forma pill (Figma `Shape=Pill`) |
| `filled` | `boolean` | `false` | Preenche `success`, `warning` e `info` com a cor cheia |
| `loading` | `boolean` | `false` | Mostra o `Spinner`, desabilita e marca `aria-busy` |
| `loadingText` | `ReactNode` | | Texto no lugar do conteúdo enquanto `loading` |
| `asChild` | `boolean` | `false` | Renderiza o filho com o visual de botão |
| `className` | `string` | | Classes extras, mescladas (as suas vencem) |
| `ref` | `Ref<HTMLButtonElement>` | | Encaminhada ao elemento |

`type` é `"button"` por padrão. Use `type="submit"` em formulários. `loading` não tem efeito com `asChild`. Para botão só com ícone prefira [IconButton](./icon-button.md).

## Variantes

| Variante | Quando usar |
|---|---|
| `primary` (`default`) | A ação mais importante da área. Máximo 1 por contexto |
| `accent` | Destaque de marca/oportunidade em Cyan ("Assinar", "Novo"). Com moderação, sem competir com o primary |
| `secondary` | Alternativa à principal ("Cancelar", "Voltar"): superfície clara elevada |
| `outline` | Ação neutra com limite visível: filtros, ações em cards |
| `ghost` | Ações terciárias, toolbars, ações repetidas em listas |
| `destructive` | Ações irreversíveis. Sempre com confirmação |
| `success` / `warning` / `info` | Extensões do Midas (fora do Figma) para ações com semântica de status |
| `link` | Ação com aparência de link (para navegar use [Link](./link.md)) |

### Expressivas (Button Expressive, sobre mídia)

Use sobre imagens, vídeos e áreas de destaque; valide o contraste com a imagem real. Nunca em formulários nem sobre fundo liso. Combine com `rounded` e `size` de `md` a `2xl`.

| Variante | Quando usar |
|---|---|
| `glass` | Vidro claro (blur 24) |
| `liquid-glass` | Aproximação do liquid glass (a refração real do Figma não existe em CSS) |
| `frosted` | Escuro translúcido (blur 28), texto claro |
| `frosted-accent` | Cyan translúcido |
| `on-media` | Sólido claro fixo, o mais legível sobre fotos |
| `gradient-accent` / `gradient-neutral` | Degradê curto e flat com brilho de 1px no topo |

## Tamanhos

Botões, inputs, selects e toggles do mesmo tamanho têm a mesma altura.

| `size` | Altura | Padding X | Gap | Ícone | Texto | Raio |
|---|---|---|---|---|---|---|
| `xs` | 24px (`h-control-xs`) | 8 | 4 | 16 | `label-sm` | `rounded-xs` (4) |
| `sm` | 28px | 10 | 6 | 16 | `label-sm` | 4 |
| `md` / `default` | 32px | 12 | 6 | 16 | `label-md` | `rounded-control` (6) |
| `lg` | 40px | 16 | 8 | 20 | `label-md` | 6 |
| `xl` | 48px | 20 | 8 | 20 | `label-lg` | `rounded-md` (8) |
| `2xl` | 56px | 32 | 10 | 24 | `label-lg` | `rounded-lg` (10), pensado para expressivas |
| `icon-*` | quadrado do mesmo tamanho | | | | | |

XS e SM só em desktop denso (alvo de toque menor que 44px). Em mobile use `lg` ou maior.

## Estados

Hover e pressed usam tokens (`bg-action-*-bg-hover`, `-pressed`, `state-hover`, `state-pressed`), nunca opacidade. Focus mostra borda de 1px + halo de 4px (`focus-ring`; `destructive` e `aria-invalid` usam `focus-ring-danger`) e tem prioridade sobre hover. Disabled aplica `opacity-disabled` sem hover. Loading mantém o botão, troca o ícone por spinner e bloqueia cliques. As variantes expressivas usam `brightness` no hover/pressed, pois dependem do fundo.

## Exemplos

### Com ícone

```tsx
import { IconArrowRight, IconPlus } from "@t2-educacao/midas/icons";

<Button><IconPlus /> Novo curso</Button>
<Button size="lg">Começar <IconArrowRight className="rtl:rotate-180" /></Button>
```

### Forma pill e largura total

```tsx
<Button rounded>Inscrever</Button>
<Button className="w-full">Continuar</Button>
```

### Carregando

```tsx
<Button loading={isPending} type="submit">
  {isPending ? "Salvando" : "Salvar"}
</Button>
```

### Sobre mídia

```tsx
<div className="relative">
  <img src={capa} alt="" className="absolute inset-0 size-full object-cover" />
  <Button variant="glass" size="xl" rounded className="relative">Explorar</Button>
</div>
```

### Como link (Next.js)

```tsx
import Link from "next/link";

<Button asChild>
  <Link href="/cursos">Ver cursos</Link>
</Button>
```

## Comportamentos que você precisa saber

- `type="button"` por padrão: em formulário, passe `type="submit"`.
- `loading` desabilita o botão. Em `icon*`, o spinner substitui o ícone.
- Botão `disabled` não dispara eventos do mouse, então um `Tooltip` direto nele não abre (veja [Tooltip](./tooltip.md)). Prefira manter habilitado e explicar o erro; se usar disabled, mostre o motivo em texto próximo.
- `size="lg"` agora tem 40px (antes 36px) e `icon-lg` 40px, conforme o Figma.

## Acessibilidade

- Usa `<button>` nativo: `Enter` e `Espaço` acionam.
- Foco visível por teclado sempre presente (`focus-ring`, contraste da borda de 3:1 ou mais).
- Contraste conteúdo/fundo de 4,5:1 ou mais nas variantes sólidas nos três temas. As translúcidas dependem do fundo.
- `loading` marca `aria-busy="true"`; mantenha um texto que descreva a ação.
- Botão só com ícone exige `aria-label` (e Tooltip).
- Alvo de toque mínimo de 24px (WCAG 2.5.8); em mobile use `lg`+.

## Não faça

- `<Link><Button /></Link>`: gera `<button>` dentro de `<a>`. Use `asChild`.
- Dois `primary` lado a lado.
- `className="bg-[#009adb]"` ou mudar cores no componente: use a variante.
- Criar uma variante "dark": o tema vem do contexto (`data-theme`).
- Misturar formas (`rounded` e retos) no mesmo grupo de ações.
- Glass/frosted em formulários ou sobre fundo liso.
