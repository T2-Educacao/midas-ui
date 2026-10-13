---
title: AnswerOption
description: "Alternativa de questão de simulado (Figma Answer Option): letra + texto, estados padrão/hover/selecionada e, após confirmar, correct, incorrect e missed com ícone e rótulo. AnswerOptionGroup é um radiogroup. Estilos outline/filled/glass, tom brand/neutral."
---

```tsx
import { AnswerOption, AnswerOptionGroup } from "@t2-educacao/midas";
```

## Quando usar

Questões de múltipla escolha (A–E) em simulados e quizzes. Antes de confirmar: default/hover/selecionada. Depois: `result="correct"` (acertou), `"incorrect"` (marcou errada) e `"missed"` (mostra a certa); as demais ficam `disabled`.

## Props

`AnswerOptionGroup` (radiogroup): `appearance`, `tone`, `value`, `onValueChange`, `disabled`, `aria-label`.

`AnswerOption`:

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `value` | `string` | | Valor (obrigatório) |
| `letter` | `string` | | Letra no círculo (obrigatório) |
| `children` | `ReactNode` | | Texto da alternativa |
| `result` | `"correct" \| "incorrect" \| "missed"` | | Resultado após confirmar; mostra ícone e rótulo |
| `feedbackLabel` | `string` | Correta / Sua resposta / Resposta certa | Texto do feedback |
| `appearance` | `"outline" \| "filled" \| "glass"` | `"outline"` | Estilo |
| `tone` | `"brand" \| "neutral"` | `"brand"` | Neutral é indicado para simulados sóbrios |
| `disabled` | `boolean` | | |

Exporta `answerOptionVariants`.

## Exemplo

```tsx
<AnswerOptionGroup aria-label="Questão 3 de 20" value={resposta} onValueChange={setResposta} disabled={confirmada}>
  <AnswerOption value="a" letter="A" result={confirmada && resposta === "a" ? "incorrect" : undefined}>
    A poupança, por render mais que a inflação.
  </AnswerOption>
  <AnswerOption value="b" letter="B" result={confirmada ? (resposta === "b" ? "correct" : "missed") : undefined}>
    O Tesouro Selic, pela liquidez diária e baixo risco.
  </AnswerOption>
</AnswerOptionGroup>
```

## Acessibilidade

O nome acessível é "letra + texto"; o feedback é a descrição. Anuncie o resultado numa região `aria-live="polite"` ("Resposta incorreta. A correta é a B"). Correto/incorreto nunca só por cor: ícone e rótulo.

## Não faça

- Não use `glass` fora de imagem/gradiente.
- Não mostre só a cor para indicar o resultado.
