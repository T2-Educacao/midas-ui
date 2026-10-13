---
title: Input
description: "Campo de texto do Midas (Figma Input). Tamanhos SM 40, MD 48 (padrão) e LG 56; estilos outline, filled e glass; tom brand ou neutral; forma rounded ou pill; estados hover, focus, error (aria-invalid) e success. Aceita qualquer type de <input>. Use dentro de Field para rótulo, apoio e erro; use InputGroup para ícones e botões."
---

```tsx
import { Input } from "@t2-educacao/midas";
```

## Quando usar

- Texto curto de uma linha: nome, e-mail, senha, número, busca simples, data.
- Sempre com rótulo visível (via [Field](./field.md)), nunca só placeholder.

## Não usar

- Texto longo: use [Textarea](./textarea.md).
- Escolher entre opções: [Select](./select.md), [NativeSelect](./native-select.md) ou [Combobox](./combobox.md).
- Busca principal da página: [SearchBar](./search-bar.md). Código de verificação: [CodeInput](./code-input.md). Vários valores: [TagInput](./tag-input.md).

## Anatomia

Rótulo (Field) + controle (borda fina `border-subtle`, sombra `elevation-control`, raio de controle) + ícone opcional (InputGroup) + texto de apoio ou mensagem de erro/sucesso (Field).

## Uso

```tsx
import { Field, FieldDescription, FieldLabel, Input } from "@t2-educacao/midas";

<Field>
  <FieldLabel htmlFor="email">E-mail</FieldLabel>
  <Input id="email" type="email" placeholder="voce@email.com" />
  <FieldDescription>Usamos para enviar seu certificado.</FieldDescription>
</Field>
```

## Props

Aceita todas as props de `<input>` (menos `size`, que virou variante). `type` é `"text"` por padrão. Exporta `inputVariants`.

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Altura 40 / 48 / 56 (`h-control-lg` / `xl` / `2xl`). Texto 16 / 18 / 18 |
| `appearance` | `"outline" \| "filled" \| "glass"` | `"outline"` | Outline (padrão), Filled (fundo muted, sem borda) e Glass (só sobre imagem/gradiente) |
| `tone` | `"brand" \| "neutral"` | `"brand"` | Cor do foco: ciano (brand) ou cinza com halo preto/branco (neutral) |
| `shape` | `"rounded" \| "pill"` | `"rounded"` | Raio de controle ou cápsula. Não misture formas na mesma tela |
| `success` | `boolean` | `false` | Borda de sucesso (`data-success`). Mostre também um texto com `FieldSuccess` |
| `aria-invalid` | `boolean` | | Estado de erro: borda `status-danger-border` e foco vermelho |
| `min` / `max` | `string` | | Em `type="date"` o padrão é `1900-01-01` a `2100-12-31` (e o equivalente em `datetime-local`) |
| `className` | `string` | | Classes extras (as suas vencem) |
| `ref` | `Ref<HTMLInputElement>` | | Encaminhada ao `<input>` |

Observação: SM = 40px, MD = 48px e LG = 56px mudaram em relação à versão anterior (32px). Para uma densidade menor em tabelas e toolbars use `className="h-control-md"`.

## Estados

| Estado | Como ativar |
|---|---|
| Default | Borda `border-subtle`, sombra suave |
| Hover | Automático: borda `border-default` e fundo `field-bg-hover` |
| Focus | Automático: borda 1px + halo de 4px (ciano; cinza em `tone="neutral"`) |
| Filled | O campo com valor mantém o visual padrão |
| Error | `aria-invalid` (e `invalid` no `Field` para o rótulo ficar vermelho) + `FieldError` |
| Success | `success` + `FieldSuccess` |
| Disabled | `disabled`: fundo `disabled-bg`, texto `content-disabled`, sem sombra |

## Tipos (Figma: Text, Password, Search, Number, Select)

O tipo é o `type` do `<input>`. Ícones, "mostrar senha", limpar e stepper se montam com [InputGroup](./input-group.md):

```tsx
import { IconEye, IconMail } from "@t2-educacao/midas/icons";
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "@t2-educacao/midas";

<InputGroup>
  <InputGroupAddon><IconMail /></InputGroupAddon>
  <InputGroupInput type="email" placeholder="voce@email.com" aria-label="E-mail" />
</InputGroup>
```

Para o tipo Select use [Select](./select.md) com o mesmo `size`, `appearance`, `tone` e `shape`.

## Exemplos

### Tamanhos, estilos e forma

```tsx
<Input size="sm" placeholder="SM 40" aria-label="SM" />
<Input appearance="filled" placeholder="Filled" aria-label="Filled" />
<Input tone="neutral" shape="pill" placeholder="Neutral pill" aria-label="Neutral" />
```

### Erro com mensagem

```tsx
<Field invalid>
  <FieldLabel htmlFor="cpf">CPF</FieldLabel>
  <Input id="cpf" aria-invalid aria-describedby="cpf-erro" />
  <FieldError id="cpf-erro">CPF inválido.</FieldError>
</Field>
```

### Arquivo

```tsx
<Input id="foto" type="file" />
```

## Acessibilidade

- Rótulo sempre visível; o erro tem ícone e texto, nunca só cor.
- Foco visível (borda 1px + halo 4px) em todos os temas.
- Alvo de toque de 48px no mobile (use `md` ou `lg`).
- Ligue o texto de apoio/erro com `aria-describedby`.

## Não faça

- Não use só o placeholder como rótulo.
- Não misture `shape="pill"` e `"rounded"` na mesma tela.
- Não use `appearance="glass"` fora de imagem ou gradiente.
- Não troque a cor do foco com classes: use `tone`.
