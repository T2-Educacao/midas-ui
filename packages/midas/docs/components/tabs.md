---
title: "Tabs"
description: "Abas para alternar vistas do mesmo contexto. Tipos underline, pill, segmented e plain (sem fundo), tamanhos md/sm, tom brand/neutral, superfície solid/glass, ícone e contador mono opcionais, horizontal ou vertical."
---

```tsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@t2-educacao/midas";
import { IconBook } from "@t2-educacao/midas/icons";
```

## Quando usar

- Alternar visões do mesmo contexto na mesma tela (visão geral, aulas, certificados).
- Plain (sem fundo) dentro de cards e tabelas.
- No máximo 6 abas. Mais que isso: Dropdown ou navegação lateral.

## Não use

- Para navegar entre páginas: use links ou Nav Item.
- Para passos de fluxo obrigatório: use Stepper ou Questionnaire.
- Para alternar um filtro de lista: use SegmentedControl ou ToggleGroup.

## Uso

```tsx
<Tabs defaultValue="visao-geral">
  <TabsList variant="underline" aria-label="Seções do curso">
    <TabsTrigger value="visao-geral">Visão geral</TabsTrigger>
    <TabsTrigger value="aulas" icon={<IconBook />} count={24}>Aulas</TabsTrigger>
  </TabsList>
  <TabsContent value="visao-geral">Resumo do curso.</TabsContent>
  <TabsContent value="aulas">Lista de aulas.</TabsContent>
</Tabs>
```

## Anatomia

`Tabs` (raiz) > `TabsList` (trilho; define tipo, tamanho, tom e superfície das abas) > `TabsTrigger` (rótulo, ícone opcional antes, contador mono opcional depois) + `TabsContent` (painel).

## Props

Baseado nas [Tabs do Radix](https://www.radix-ui.com/primitives/docs/components/tabs). Todas as partes aceitam `className` (o seu vence) e `ref`.

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
| `variant` | `"underline" \| "pill" \| "segmented" \| "plain" \| "default" \| "line"` | `"default"` | Tipo do Figma. `default` equivale a `segmented` e `line` a `underline` (nomes antigos, continuam valendo) |
| `size` | `"md" \| "sm"` | `"md"` | MD: 40px de altura, padding 16px, `label/md`. SM: 32px, padding 12px, `label/sm` |
| `tone` | `"brand" \| "neutral"` | `"brand"` | Brand: aba ativa em Cyan (`selection-*`). Neutral: preto/branco |
| `surface` | `"solid" \| "glass"` | `"solid"` | Glass vale para `pill` e `segmented`, só sobre imagem ou aurora |

### TabsTrigger

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `value` | `string` | | Obrigatório, o mesmo do `TabsContent` |
| `icon` | `ReactNode` | | Ícone Tabler antes do rótulo |
| `count` | `ReactNode` | | Contador em fonte mono depois do rótulo |
| `disabled` | `boolean` | `false` | Aba desabilitada |

Também exportados: `tabsListVariants` e `tabsTriggerVariants`.

## Variantes

| Tipo | Quando usar |
|---|---|
| `underline` | Navegação de seções de página; indicador de 2px na aba ativa |
| `pill` | Abas de destaque, aba ativa em cápsula |
| `segmented` | Alternar visões dentro de um card ou painel (trilho `surface-muted`, aba ativa elevada) |
| `plain` | Dentro de cards e tabelas (Preços, Comodidades, Detalhes): só texto, sem fundo |

## Estados

Default (`content-secondary`), Hover (`state-hover`), Active (indicador ou fundo, nunca só cor), Focus (borda 1px + halo 4px do `focus-ring`) e Disabled (`content-disabled`). O texto usa o mesmo peso em todos os estados, então a aba não muda de largura ao ser selecionada. Espaço ícone, texto e contador: 8px no MD e 6px no SM.

## Exemplos

### Pequeno e neutro

```tsx
<TabsList variant="segmented" size="sm" tone="neutral" aria-label="Período">
  <TabsTrigger value="semana">Semana</TabsTrigger>
  <TabsTrigger value="mes">Mês</TabsTrigger>
</TabsList>
```

### Vidro sobre imagem

```tsx
<TabsList variant="pill" surface="glass" aria-label="Seções">
  <TabsTrigger value="a">Aulas</TabsTrigger>
  <TabsTrigger value="b">Materiais</TabsTrigger>
</TabsList>
```

### Vertical

```tsx
<Tabs defaultValue="perfil" orientation="vertical">
  <TabsList variant="underline" aria-label="Configurações">
    <TabsTrigger value="perfil">Perfil</TabsTrigger>
    <TabsTrigger value="seguranca">Segurança</TabsTrigger>
  </TabsList>
  <TabsContent value="perfil">Dados do perfil.</TabsContent>
  <TabsContent value="seguranca">Opções de segurança.</TabsContent>
</Tabs>
```

## Acessibilidade

- Papéis `tablist`, `tab` e `tabpanel` com `aria-selected` e `aria-controls` automáticos.
- Setas movem entre abas (verticais quando `orientation="vertical"`), `Home` e `End` vão à primeira e à última. Em RTL as setas se invertem sozinhas.
- Dê um `aria-label` à `TabsList` quando houver mais de um grupo de abas na página.
- A aba ativa nunca depende só de cor: há indicador ou fundo além da cor.
- Foco visível com o anel do Midas.

## Não faça

- Usar Tabs para navegar entre páginas: use links.
- Passar de 6 abas.
- Usar `dark:` ou cores soltas: o tema troca pelos tokens.
- `surface="glass"` sobre fundo liso: vira só um cinza.
