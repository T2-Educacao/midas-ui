---
title: "Button"
description: "Botão de ação. Variantes default, outline, secondary, ghost, destructive e link; tamanhos xs, sm, default e lg; tamanhos de ícone; formato arredondado; estado loading; asChild para links."
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
| `variant` | `"default" \| "outline" \| "secondary" \| "ghost" \| "destructive" \| "success" \| "warning" \| "info" \| "link"` | `"default"` | Estilo visual |
| `size` | `"xs" \| "sm" \| "default" \| "lg" \| "icon-xs" \| "icon-sm" \| "icon" \| "icon-lg"` | `"default"` | Altura, padding e tamanho do ícone |
| `rounded` | `boolean` | `false` | Formato pill (totalmente arredondado) |
| `loading` | `boolean` | `false` | Mostra o `Spinner`, desabilita o botão e marca `aria-busy` |
| `asChild` | `boolean` | `false` | Renderiza o filho com o visual de botão |
| `className` | `string` | | Classes extras, mescladas (as suas vencem) |
| `ref` | `Ref<HTMLButtonElement>` | | Encaminhada ao elemento |

`type` é `"button"` por padrão (não envia formulários sem querer). Use `type="submit"` em formulários. `loading` não tem efeito com `asChild`.

## Variantes

| Variante | Quando usar |
|---|---|
| `default` | A ação principal da tela, na cor primária da T2. Idealmente **uma** por tela ou seção |
| `outline` | Ações neutras, "Cancelar", filtros |
| `secondary` | Ações de apoio ao lado da principal |
| `ghost` | Ações de baixa ênfase, barras de ferramentas, menus |
| `destructive` | Ações destrutivas ("Excluir", "Cancelar assinatura") |
| `success` | Confirmação positiva, ações que concluem algo ("Aprovar") |
| `warning` | Ação que pede atenção, mas não destrói nada ("Revisar pendências") |
| `info` | Ação informativa ou de apoio contextual ("Saiba mais") |
| `link` | Ação com aparência de link |

## Tamanhos

| Tamanho | Medida | Uso |
|---|---|---|
| `xs` | 24px de altura | Áreas muito densas, chips de ação |
| `sm` | 28px | Tabelas, barras de ferramentas |
| `default` | 32px | Padrão |
| `lg` | 36px | CTAs de destaque |
| `icon-xs` / `icon-sm` / `icon` / `icon-lg` | 24 / 28 / 32 / 36px quadrado | Botão só com ícone (exige `aria-label`) |

## Comportamentos que você precisa saber

- O `Button` já vem com `type="button"`. Para enviar um formulário, passe `type="submit"` explicitamente. Isso evita envios acidentais, mas quem migra de `<button>` cru (que é `submit` por padrão) precisa revisar os botões de formulário.
- `loading` desabilita o botão. Em botões só de ícone (`size="icon*"`), o spinner **substitui** o ícone; nos demais, o spinner aparece ao lado do texto.
- Botão `disabled` não dispara eventos do mouse, então um `Tooltip` direto nele não abre. Veja a solução em [Tooltip](./tooltip.md).

## Exemplos

### Com ícone

O ícone é dimensionado pelo `size` do botão. Não passe `size` para o ícone.

```tsx
import { ArrowRight, Plus } from "@t2-educacao/midas/icons";

<Button><Plus /> Novo curso</Button>
<Button size="lg">Começar <ArrowRight /></Button>
```

### Só ícone

```tsx
import { Trash } from "@t2-educacao/midas/icons";

<Button size="icon" variant="ghost" aria-label="Excluir">
  <Trash />
</Button>
```

### Arredondado

```tsx
<Button rounded>Inscrever</Button>
<Button size="icon" rounded aria-label="Adicionar"><Plus /></Button>
```

### Carregando

```tsx
<Button loading={isPending} type="submit">
  {isPending ? "Salvando" : "Salvar"}
</Button>
```

### Com atalho de teclado

```tsx
import { Button, Kbd } from "@t2-educacao/midas";

<Button variant="outline">
  Buscar <Kbd>⌘K</Kbd>
</Button>
```

### Como link (Next.js)

```tsx
import Link from "next/link";

<Button asChild>
  <Link href="/cursos">Ver cursos</Link>
</Button>
```

### Largura total

```tsx
<Button className="w-full">Continuar</Button>
```

Para agrupar botões, veja [ButtonGroup](./button-group.md).

## Acessibilidade

- Usa `<button>` nativo: foco, `Enter` e `Espaço` funcionam sem configuração.
- Anel de foco visível (`focus-visible`) de 3px com o token `ring`.
- `loading` marca `aria-busy="true"` e desabilita o botão; mantenha um texto que descreva a ação.
- `disabled` remove o botão da navegação por teclado. Se o usuário precisa saber *por que* está desabilitado, mostre o motivo em texto próximo.
- Tamanhos `icon*` exigem `aria-label`.

## Não faça

- `<Link><Button /></Link>`: gera `<button>` dentro de `<a>` (HTML inválido). Use `asChild`.
- Vários `default` lado a lado: só um é o principal.
- `className="bg-[#009adb]"`: use a variante ou tokens.
