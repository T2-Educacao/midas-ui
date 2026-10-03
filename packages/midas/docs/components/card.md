---
title: "Card"
description: "Container com borda e cantos de 14px para agrupar conteúdo: Card, CardHeader, CardTitle, CardDescription, CardAction, CardContent e CardFooter (rodapé em cinza). Tamanhos default e sm."
---

```tsx
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@t2-educacao/midas";
```

## Uso

```tsx
<Card className="w-80">
  <CardHeader>
    <CardTitle>Assinatura anual</CardTitle>
    <CardDescription>Acesso a todos os cursos da T2.</CardDescription>
  </CardHeader>
  <CardContent>12x de R$ 49,90</CardContent>
  <CardFooter>
    <Button size="sm">Assinar</Button>
  </CardFooter>
</Card>
```

## Componentes

| Componente | O que é |
|---|---|
| `Card` | O container (borda, raio de 14px, padding vertical de 16px) |
| `CardHeader` | Cabeçalho. Ganha uma segunda coluna quando tem `CardAction` |
| `CardTitle` | Título (16px, peso 500) |
| `CardDescription` | Texto de apoio em cinza |
| `CardAction` | Ação ou informação no canto superior direito (botão, badge, contador) |
| `CardContent` | Conteúdo principal |
| `CardFooter` | Rodapé com fundo cinza e borda superior |

## Props

### Card

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `size` | `"default" \| "sm"` | `"default"` | `sm` reduz espaçamentos (12px) |

## Exemplos

### Com ação no cabeçalho

```tsx
<Card>
  <CardHeader>
    <CardTitle>Simulado CPA</CardTitle>
    <CardDescription>40 questões</CardDescription>
    <CardAction>
      <Badge variant="success">Concluído</Badge>
    </CardAction>
  </CardHeader>
  <CardContent>Você acertou 34 de 40.</CardContent>
</Card>
```

### Card numérico (como no Carousel)

```tsx
<Card>
  <CardContent className="flex aspect-square items-center justify-center p-6">
    <span className="text-3xl font-semibold">1</span>
  </CardContent>
</Card>
```

## Acessibilidade

- O Card é só visual. Se o card inteiro for clicável, use um link dentro do título e não aninhe outros elementos interativos.

## Não faça

- Card dentro de card.
- Vários botões principais no mesmo card.
