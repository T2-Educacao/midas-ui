---
title: "Field"
description: "Estrutura de campo de formulário: Field, FieldLabel (com required e badge), FieldDescription, FieldError e FieldGroup. Orientação vertical ou horizontal, estados inválido e desabilitado."
---

```tsx
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  Label,
} from "@t2-educacao/midas";
```

## Uso

```tsx
<Field>
  <FieldLabel htmlFor="usuario">Usuário</FieldLabel>
  <Input id="usuario" placeholder="seu.usuario" />
  <FieldDescription>Escolha um nome de usuário único.</FieldDescription>
</Field>
```

## Componentes

| Componente | O que é |
|---|---|
| `Field` | Agrupa label, controle, descrição e erro (8px entre eles) |
| `FieldLabel` | Label do campo. `required` mostra o asterisco |
| `FieldDescription` | Texto de apoio em cinza |
| `FieldError` | Mensagem de erro em vermelho, anunciada como alerta. Não renderiza nada sem conteúdo |
| `FieldGroup` | Empilha vários `Field` com 24px entre eles |
| `Label` | Label simples, para usar fora de um `Field` |

## Props

### Field

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `orientation` | `"vertical" \| "horizontal"` | `"vertical"` | Label acima do campo ou ao lado |
| `invalid` | `boolean` | `false` | Deixa o label vermelho |
| `disabled` | `boolean` | `false` | Deixa label e descrição esmaecidos |

### FieldLabel

| Prop | Tipo | Descrição |
|---|---|---|
| `htmlFor` | `string` | `id` do campo (obrigatório para acessibilidade) |
| `required` | `boolean` | Mostra `*` em vermelho |

## Exemplos

### Grupo de campos

```tsx
<FieldGroup>
  <Field>
    <FieldLabel htmlFor="nome">Nome</FieldLabel>
    <Input id="nome" />
  </Field>
  <Field>
    <FieldLabel htmlFor="email">E-mail</FieldLabel>
    <Input id="email" type="email" />
    <FieldDescription>Vamos mandar novidades para este endereço.</FieldDescription>
  </Field>
</FieldGroup>
```

### Inválido

```tsx
<Field invalid>
  <FieldLabel htmlFor="cpf">CPF</FieldLabel>
  <Input id="cpf" aria-invalid aria-describedby="cpf-erro" />
  <FieldError id="cpf-erro">Este CPF é inválido.</FieldError>
</Field>
```

### Obrigatório

```tsx
<Field>
  <FieldLabel htmlFor="telefone" required>Telefone</FieldLabel>
  <Input id="telefone" required />
</Field>
```

### Desabilitado

```tsx
<Field disabled>
  <FieldLabel htmlFor="plano">Plano</FieldLabel>
  <Input id="plano" disabled value="Assinatura anual" />
</Field>
```

### Com badge no label

```tsx
<Field>
  <FieldLabel htmlFor="webhook">
    Webhook <Badge>Beta</Badge>
  </FieldLabel>
  <Input id="webhook" placeholder="https://api.exemplo.com/webhook" />
</Field>
```

### Em grade

```tsx
<div className="grid grid-cols-2 gap-4">
  <Field>
    <FieldLabel htmlFor="nome">Nome</FieldLabel>
    <Input id="nome" />
  </Field>
  <Field>
    <FieldLabel htmlFor="sobrenome">Sobrenome</FieldLabel>
    <Input id="sobrenome" />
  </Field>
</div>
```

## Acessibilidade

- Ligue sempre `FieldLabel htmlFor` ao `id` do campo.
- Ligue descrição e erro com `aria-describedby`.
- `required` no label é só visual: coloque `required` também no campo.
- `FieldError` tem `role="alert"`: o erro é anunciado assim que aparece.

## Não faça

- Mostrar erro só com cor: sempre escreva a mensagem em `FieldError`.
- Esconder o label e deixar só o placeholder.
