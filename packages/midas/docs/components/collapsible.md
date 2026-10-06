---
title: "Collapsible"
description: "Região única que abre e fecha sob demanda (ver mais, filtros avançados). Wrapper sem estilo do Collapsible do Radix; você define a aparência do gatilho."
---

```tsx
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@t2-educacao/midas";
```

## Uso

```tsx
<Collapsible>
  <CollapsibleTrigger asChild>
    <Button variant="outline">Mostrar detalhes</Button>
  </CollapsibleTrigger>
  <CollapsibleContent className="pt-2 text-sm">
    Carga horária de 40 horas, com certificado.
  </CollapsibleContent>
</Collapsible>
```

## Props

Baseado no [Collapsible do Radix](https://www.radix-ui.com/primitives/docs/components/collapsible). Todas as partes aceitam `className` e repassam as demais props.

### Collapsible

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `defaultOpen` / `open` | `boolean` | `false` | Estado inicial / controlado |
| `onOpenChange` | `(open: boolean) => void` | | Chamado ao abrir ou fechar |
| `disabled` | `boolean` | `false` | Desabilita o gatilho |

### CollapsibleTrigger

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `asChild` | `boolean` | `false` | Usa o filho como gatilho (ex.: um `Button`) |

## Variantes

Não há variantes: os componentes só trazem `data-slot` e o comportamento. Estilize com `className` usando tokens.

## Exemplos

### Controlado

```tsx
const [aberto, setAberto] = React.useState(false);

<Collapsible open={aberto} onOpenChange={setAberto}>
  <CollapsibleTrigger asChild>
    <Button variant="ghost">{aberto ? "Ver menos" : "Ver mais"}</Button>
  </CollapsibleTrigger>
  <CollapsibleContent>Conteúdo extra.</CollapsibleContent>
</Collapsible>
```

## Acessibilidade

- O gatilho é um `button` com `aria-expanded` e `aria-controls`.
- `Enter` e `Espaço` abrem e fecham.
- Se usar `asChild`, o filho precisa ser um elemento interativo (botão ou link).

## Não faça

- Usar vários Collapsibles para montar uma lista de perguntas: use [Accordion](./accordion.md).
- Esconder ações obrigatórias ou erros de formulário dentro do conteúdo recolhido.
