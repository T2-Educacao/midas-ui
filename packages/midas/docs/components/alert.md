---
title: "Alert"
description: "Mensagem destacada em bloco para informar, confirmar, avisar ou reportar erro. Variantes default, info, success, warning e destructive, com ícone, título, descrição e ação opcionais."
---

```tsx
import { Alert, AlertAction, AlertDescription, AlertTitle } from "@t2-educacao/midas";
```

## Uso

```tsx
<Alert variant="info">
  <Info />
  <AlertTitle>Matrículas abertas</AlertTitle>
  <AlertDescription>As turmas de março já estão disponíveis.</AlertDescription>
</Alert>
```

O ícone SVG como primeiro filho ocupa a coluna da esquerda automaticamente.

## Props

`Alert`:

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `variant` | `"default" \| "info" \| "success" \| "warning" \| "destructive"` | `"default"` | Estilo visual |
| `role` | `string` | `"alert"` em `destructive` e `warning`; `"status"` nas demais | Sobrescreve o papel ARIA |

`AlertTitle`, `AlertDescription` e `AlertAction` aceitam `className` e as props do `div`. `AlertAction` fica no canto superior final do alerta.

## Variantes

| Variante | Quando usar |
|---|---|
| `default` | Avisos neutros |
| `info` | Novidades e informações úteis |
| `success` | Operação concluída |
| `warning` | Atenção: algo pode dar errado (anunciado de forma assertiva) |
| `destructive` | Erro que bloqueia o usuário (anunciado de forma assertiva) |

## Exemplos

```tsx
<Alert variant="destructive">
  <WarningCircle />
  <AlertTitle>Pagamento recusado</AlertTitle>
  <AlertDescription>Confira os dados do cartão e tente de novo.</AlertDescription>
</Alert>

<Alert variant="success">
  <CheckCircle />
  <AlertTitle>Matrícula confirmada</AlertTitle>
  <AlertAction>
    <Button size="sm" variant="outline">Desfazer</Button>
  </AlertAction>
</Alert>
```

## Acessibilidade

- `destructive` e `warning` usam `role="alert"` (leitores de tela interrompem e leem). As outras usam `role="status"` (leitura educada).
- Não dependa só da cor: o título ou a descrição precisam dizer o que aconteceu.
- Marque o ícone decorativo com `aria-hidden="true"`.
- Se o alerta aparece depois do carregamento da página, o papel faz o anúncio acontecer.

## Não faça

- Usar `destructive` ou `warning` para mensagens que não são urgentes: o anúncio assertivo atrapalha.
- Empilhar vários alertas na mesma tela. Resuma em um.
- Colocar mais de uma ação em `AlertAction`. Para fluxos complexos, use um [Dialog](./dialog.md).
