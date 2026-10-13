---
title: "ChoiceCard"
description: "Cartão de escolha única (radio) ou múltipla (checkbox) com título, descrição, ícone ou ilustração e indicador. Layout horizontal ou vertical, estilos outline/filled/glass, tom brand/neutral, grade em colunas."
---

```tsx
import { ChoiceCard, ChoiceCardCheckbox, ChoiceCardGroup } from "@t2-educacao/midas";
```

## Uso

O card inteiro é o controle clicável. `ChoiceCard` é um radio (escolha única) e vai dentro de `ChoiceCardGroup`; `ChoiceCardCheckbox` é um checkbox (múltipla escolha) e funciona sozinho. O título nomeia o controle e a descrição o descreve (`aria-labelledby` e `aria-describedby`).

```tsx
<ChoiceCardGroup defaultValue="anual" aria-label="Plano" className="sm:grid-cols-2">
  <ChoiceCard value="mensal" title="Mensal" description="Cobrança todo mês" />
  <ChoiceCard value="anual" title="Anual" description="Dois meses grátis" />
</ChoiceCardGroup>
```

## Props

### ChoiceCardGroup

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `value` / `defaultValue` | `string` | | Valor controlado / inicial |
| `onValueChange` | `(value: string) => void` | | Chamado ao mudar |
| `orientation` | `"vertical" \| "horizontal"` | | Direção das setas |
| `disabled` | `boolean` | `false` | Desabilita todos os cards |
| `aria-label` | `string` | | Nome do grupo |
| `className` | `string` | | O layout é `grid gap-3`; use `grid-cols-*` para colunas |

### ChoiceCard

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `value` | `string` | | Valor da opção (obrigatório) |
| `title` | `ReactNode` | | Título; é o nome acessível (obrigatório) |
| `description` | `ReactNode` | | Texto de apoio |
| `icon` | `ReactNode` | | Ícone decorativo à esquerda |
| `disabled` | `boolean` | `false` | Desabilita este card |
| `className` | `string` | | Mesclado com `cn`; o seu vence |

### ChoiceCardCheckbox

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `checked` / `defaultChecked` | `boolean` | | Estado controlado / inicial |
| `onCheckedChange` | `(checked: boolean) => void` | | Chamado ao alternar |
| `title`, `description`, `icon`, `disabled`, `className` | | | Iguais ao `ChoiceCard` |

Também exporta `choiceCardVariants` (cva do visual base).

## Variantes

| Componente | Quando usar |
|---|---|
| `ChoiceCard` em `ChoiceCardGroup` | Escolher exatamente uma opção rica (plano, formato, perfil) |
| `ChoiceCardCheckbox` | Escolher várias opções ricas (interesses, recursos extras) |

## Exemplos

```tsx
<ChoiceCardGroup value={formato} onValueChange={setFormato} aria-label="Formato" className="sm:grid-cols-3">
  <ChoiceCard value="video" title="Vídeo" description="Aulas gravadas" icon={<VideoCamera />} />
  <ChoiceCard value="texto" title="Texto" description="Material para ler" icon={<Article />} />
  <ChoiceCard value="ao-vivo" title="Ao vivo" description="Encontros semanais" icon={<Broadcast />} />
</ChoiceCardGroup>
```

```tsx
<div className="grid gap-3">
  <ChoiceCardCheckbox title="Certificado" description="Emitido ao concluir" defaultChecked />
  <ChoiceCardCheckbox title="Mentoria" description="Sessões individuais" />
</div>
```

## Acessibilidade

- `ChoiceCard` tem papel `radio` e `ChoiceCardCheckbox` tem papel `checkbox`; o indicador visual é decorativo (`aria-hidden`).
- Setas navegam no grupo; `Space` marca; `Tab` sai do grupo.
- Para múltipla escolha, envolva os cards em um `role="group"` com `aria-label` ou `fieldset`.
- O foco aparece como anel e a seleção como borda e fundo primários, sem depender só de cor graças ao indicador.

## Não faça

- Colocar botões, links ou campos dentro do card: o card inteiro já é um controle.
- Usar sem `title`: o controle ficaria sem nome acessível.
- Usar `ChoiceCard` fora de um `ChoiceCardGroup`.
- Usar para opções simples de uma linha: prefira [RadioGroup](./radio-group.md) ou [Checkbox](./checkbox.md).

## Variantes do Figma

| Prop | Em | Tipo | Padrão | Descrição |
|---|---|---|---|---|
| `layout` | Group ou Card | `"horizontal" \| "vertical"` | `"horizontal"` | Horizontal para listas; vertical para grade de 2 colunas |
| `appearance` | Group ou Card | `"outline" \| "filled" \| "glass"` | `"outline"` | Estilo |
| `tone` | Group ou Card | `"brand" \| "neutral"` | `"brand"` | Selecionado ciano ou neutro |
| `columns` | Group | `1 \| 2 \| 3` | `1` | Colunas da grade (empilha no mobile) |
| `icon` | Card | `ReactNode` | | Ícone Tabler em quadro de 40px |
| `illustration` | Card | `ReactNode` | | Ilustração em quadro de 72px |

O cartão inteiro é o alvo do clique. Selecionado: borda `selection-border`, fundo `selection-bg` e halo. Single usa `ChoiceCard` dentro de `ChoiceCardGroup`; Multiple usa `ChoiceCardCheckbox`.

```tsx
import { IconSchool } from "@t2-educacao/midas/icons";

<ChoiceCardGroup aria-label="Perfil" columns={2} layout="vertical" defaultValue="estudante">
  <ChoiceCard value="estudante" icon={<IconSchool />} title="Estudante" description="Quero aprender do zero." />
</ChoiceCardGroup>
```
