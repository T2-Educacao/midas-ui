---
title: "Chip"
description: "Tag compacta em formato pill, opcionalmente removível com botão X. Variantes default, outline e primary; tamanhos sm e default; suporta desabilitado."
---

```tsx
import { Chip } from "@t2-educacao/midas";
```

## Uso

```tsx
<Chip onRemove={() => removerFiltro("cpa")}>CPA</Chip>
```

Sem `onRemove`, o Chip é só uma etiqueta e não renderiza o botão.

## Props

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `variant` | `"default" \| "outline" \| "primary"` | `"default"` | Estilo visual |
| `size` | `"sm" \| "default"` | `"default"` | Tamanho |
| `onRemove` | `() => void` | n/a | Quando definida, mostra o botão X e a chama ao clicar |
| `removeLabel` | `string` | `"Remover"` | Prefixo do `aria-label` do botão. Vira `"Remover <texto>"` quando `children` é string |
| `disabled` | `boolean` | `false` | Desabilita o botão de remover e reduz a opacidade |
| `className` | `string` | n/a | Mesclada ao elemento raiz |

## Variantes

| Variante | Quando usar |
|---|---|
| `default` | Tags e filtros aplicados em geral |
| `outline` | Em superfícies já coloridas, ou para menos peso visual |
| `primary` | Seleção em destaque |

## Exemplos

```tsx
const [tags, setTags] = React.useState(["CPA", "CEA", "CFP"]);

<div className="flex flex-wrap gap-2">
  {tags.map((tag) => (
    <Chip key={tag} onRemove={() => setTags((atual) => atual.filter((t) => t !== tag))}>
      {tag}
    </Chip>
  ))}
</div>

<Chip variant="outline" size="sm" removeLabel="Excluir" onRemove={excluir}>
  Em andamento
</Chip>
```

## Acessibilidade

- O botão tem `aria-label` com a ação e o texto (`Remover CPA`). Se `children` não for texto puro, ele fica só com `removeLabel`: passe um `removeLabel` completo (ex.: `"Remover filtro CPA"`).
- O botão é focável por Tab e acionado com Enter ou Espaço, com foco visível.
- Traduza `removeLabel` para o idioma da interface.
- Depois de remover, mova o foco para um lugar previsível (ex.: o próximo chip ou o campo).

## Não faça

- Usar Chip como botão de ação geral. Use [Button](./button.md).
- Usar Chip só para status estático. Para isso, use [Badge](./badge.md).
- Aninhar elementos interativos dentro do `children` do Chip removível.
