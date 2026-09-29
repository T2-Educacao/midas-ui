---
title: Button
description: Botão de ação. Variantes primary, secondary, outline, ghost, danger e link; tamanhos sm, md, lg e icon; suporta asChild para links.
---

```tsx
import { Button } from "@t2-educacao/midas";
```

## Uso

```tsx
<Button>Salvar</Button>
<Button variant="outline">Cancelar</Button>
```

## Props

Aceita todas as props de `<button>` (`onClick`, `disabled`, `type`...) mais:

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `variant` | `"primary" \| "secondary" \| "outline" \| "ghost" \| "danger" \| "link"` | `"primary"` | Estilo visual |
| `size` | `"sm" \| "md" \| "lg" \| "icon"` | `"md"` | Altura, padding e tamanho do ícone |
| `asChild` | `boolean` | `false` | Renderiza o filho com o visual de botão |
| `className` | `string` | | Classes extras, mescladas (as suas vencem) |
| `ref` | `Ref<HTMLButtonElement>` | | Encaminhada ao elemento |

`type` é `"button"` por padrão (não envia formulários sem querer). Use `type="submit"` em formulários.

## Variantes

| Variante | Quando usar |
|---|---|
| `primary` | A ação principal da tela. Idealmente **uma** por tela/seção |
| `secondary` | Ações de apoio ao lado da principal |
| `outline` | Ações neutras, "Cancelar", filtros |
| `ghost` | Ações de baixa ênfase, barras de ferramentas, menus |
| `danger` | Ações destrutivas ("Excluir", "Cancelar assinatura") |
| `link` | Ação com aparência de link dentro de texto |

## Tamanhos

| Tamanho | Altura | Uso |
|---|---|---|
| `sm` | 32px | Tabelas, áreas densas |
| `md` | 40px | Padrão |
| `lg` | 48px | CTAs de destaque, heros |
| `icon` | 40×40 | Botão só com ícone (exige `aria-label`) |

## Exemplos

### Com ícone

```tsx
import { ArrowRight, Plus } from "@t2-educacao/midas/icons";

<Button><Plus /> Novo curso</Button>
<Button size="lg">Começar <ArrowRight /></Button>
```

O ícone é dimensionado pelo `size` do botão. Não passe `size` para o ícone.

### Só ícone

```tsx
import { Trash } from "@t2-educacao/midas/icons";

<Button size="icon" variant="ghost" aria-label="Excluir">
  <Trash />
</Button>
```

### Como link (Next.js)

```tsx
import Link from "next/link";

<Button asChild>
  <Link href="/cursos">Ver cursos</Link>
</Button>
```

### Em formulário

```tsx
<Button type="submit" disabled={isPending}>
  {isPending ? "Salvando..." : "Salvar"}
</Button>
```

### Largura total

```tsx
<Button className="w-full">Continuar</Button>
```

## Acessibilidade

- Usa `<button>` nativo: foco, `Enter` e `Espaço` funcionam sem configuração.
- Anel de foco visível (`focus-visible`) com o token `ring`.
- `disabled` remove o botão da navegação por teclado. Se o usuário precisa saber *por que* está desabilitado, mostre o motivo em texto próximo.
- `size="icon"` exige `aria-label`.

## Não faça

- `<Link><Button /></Link>`: gera `<button>` dentro de `<a>` (HTML inválido). Use `asChild`.
- Vários `primary` lado a lado: só um é o principal.
- `className="bg-[#0097D9]"`: use a variante ou tokens.
