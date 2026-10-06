---
title: "Tabs"
description: "Abas para alternar painéis de conteúdo na mesma tela. Lista em variante default (pílula) ou line (sublinhado), horizontal ou vertical."
---

```tsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@t2-educacao/midas";
```

## Uso

```tsx
<Tabs defaultValue="conta">
  <TabsList>
    <TabsTrigger value="conta">Conta</TabsTrigger>
    <TabsTrigger value="senha">Senha</TabsTrigger>
  </TabsList>
  <TabsContent value="conta">Dados da conta.</TabsContent>
  <TabsContent value="senha">Troca de senha.</TabsContent>
</Tabs>
```

## Props

Baseado nas [Tabs do Radix](https://www.radix-ui.com/primitives/docs/components/tabs). Todas as partes aceitam `className`.

### Tabs

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `defaultValue` / `value` | `string` | | Aba inicial / controlada |
| `onValueChange` | `(value: string) => void` | | Chamado ao trocar |
| `orientation` | `"horizontal" \| "vertical"` | `"horizontal"` | Direção da lista |
| `dir` | `"ltr" \| "rtl"` | | Direção da navegação por setas |

### TabsList

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `variant` | `"default" \| "line"` | `"default"` | Aparência da lista |

### TabsTrigger e TabsContent

`TabsTrigger` e `TabsContent` exigem `value` (o mesmo nos dois). `TabsTrigger` aceita `disabled`.

## Variantes

| Variante | Quando usar |
|---|---|
| `default` | Alternar visões dentro de um card ou painel (fundo muted, aba ativa em destaque) |
| `line` | Navegação de seções de página; visual mais leve, com sublinhado na aba ativa |

## Exemplos

### Sublinhado

```tsx
<Tabs defaultValue="visao-geral">
  <TabsList variant="line">
    <TabsTrigger value="visao-geral">Visão geral</TabsTrigger>
    <TabsTrigger value="aulas">Aulas</TabsTrigger>
  </TabsList>
  <TabsContent value="visao-geral">Resumo do curso.</TabsContent>
  <TabsContent value="aulas">Lista de aulas.</TabsContent>
</Tabs>
```

### Vertical

```tsx
<Tabs defaultValue="perfil" orientation="vertical">
  <TabsList variant="line">
    <TabsTrigger value="perfil">Perfil</TabsTrigger>
    <TabsTrigger value="seguranca">Segurança</TabsTrigger>
  </TabsList>
  <TabsContent value="perfil">Dados do perfil.</TabsContent>
  <TabsContent value="seguranca">Opções de segurança.</TabsContent>
</Tabs>
```

## Acessibilidade

- Papéis `tablist`, `tab` e `tabpanel` com `aria-selected` e `aria-controls` automáticos.
- Setas movem entre abas (setas verticais quando `orientation="vertical"`), `Home` e `End` vão à primeira e à última.
- Dê um `aria-label` à `TabsList` quando houver mais de um grupo de abas na página.
- Em RTL as setas se invertem sozinhas.

## Não faça

- Usar Tabs para navegar entre páginas: use links.
- Colocar passos de um fluxo obrigatório em abas: use o [Questionnaire](./questionnaire.md) ou uma sequência de telas.
- Criar mais abas do que cabem na largura: reveja a organização do conteúdo.
