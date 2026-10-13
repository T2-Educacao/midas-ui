---
title: FormLayout
description: "Primitivos de layout de formulário (Figma Form Layout): FormLayout com 1, 2 ou 3 colunas (empilha abaixo de 768px), FormLayoutItem para ocupar a linha toda, FormSection (fieldset com título, empilhado ou lado a lado) e FormActions."
---

```tsx
import { FormActions, FormLayout, FormLayoutItem, FormSection } from "@t2-educacao/midas";
```

## Quando usar

Agrupar campos relacionados lado a lado (nome + sobrenome, cidade + estado + CEP) e dividir formulários longos em seções. Regras do Figma: uma coluna por padrão, rótulo sempre acima do campo, gap de 16px entre colunas e linhas, no máximo 3 colunas, campos longos ocupam a linha toda, validar ao sair do campo.

## Props

| Componente | Prop | Tipo | Padrão | Descrição |
|---|---|---|---|---|
| `FormLayout` | `columns` | `1 \| 2 \| 3` | `1` | Colunas a partir de `md` (768px) |
| `FormLayoutItem` | `span` | `"auto" \| "full"` | `"auto"` | `full` ocupa todas as colunas |
| `FormSection` | `title` | `ReactNode` | | Título da seção (nome do grupo) |
| `FormSection` | `description` | `ReactNode` | | Texto de apoio |
| `FormSection` | `layout` | `"stacked" \| "side-by-side"` | `"stacked"` | Side by side: título à esquerda (220px) e campos à direita |
| `FormActions` | | | | Botões do fim do formulário (invertidos no mobile) |

Exporta `formLayoutVariants`. A forma (Rounded/Pill) e o tom dos campos vêm de cada campo: passe o mesmo `shape` em todos.

## Exemplo

```tsx
<form className="flex flex-col gap-8">
  <FormSection title="Dados pessoais" description="Usamos para personalizar sua trilha.">
    <FormLayout columns={2}>
      <Field><FieldLabel htmlFor="nome">Nome</FieldLabel><Input id="nome" /></Field>
      <Field><FieldLabel htmlFor="sobrenome">Sobrenome</FieldLabel><Input id="sobrenome" /></Field>
      <FormLayoutItem span="full">
        <Field><FieldLabel htmlFor="end">Endereço</FieldLabel><Input id="end" /></Field>
      </FormLayoutItem>
    </FormLayout>
  </FormSection>
  <FormActions>
    <Button variant="ghost">Cancelar</Button>
    <Button type="submit">Salvar alterações</Button>
  </FormActions>
</form>
```

## Acessibilidade

`FormSection` é um `<fieldset>` nomeado pelo título. Mantenha a ordem do DOM igual à ordem visual.

## Não faça

- Não use mais de 3 colunas.
- Não misture formas (`rounded`/`pill`) no mesmo formulário.
- Os templates prontos (Login, Cadastro, Perfil, Aporte) não existem como componentes: monte-os com Field, Input e Button.
