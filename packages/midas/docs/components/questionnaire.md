---
title: "Questionnaire"
description: "Questionário em etapas guiado por dados. Escolha única ou múltipla, resposta livre (outro), pular, atalhos de teclado (letras ou números), validação, perguntas condicionais, progresso em texto, barra ou fração, variante card, animação, e etapa e respostas controláveis (para salvar e retomar)."
---

```tsx
import {
  Questionnaire,
  type QuestionnaireAnswers,
  type QuestionnaireQuestion,
} from "@t2-educacao/midas";
```

## Uso

```tsx
const perguntas: QuestionnaireQuestion[] = [
  {
    id: "certificacao",
    title: "Qual certificação você vai tirar?",
    description: "Vamos montar seu plano de estudos.",
    options: [
      { value: "cpa", label: "CPA" },
      { value: "cpro-r", label: "CPRO-R" },
      { value: "cpro-i", label: "CPRO-I" },
    ],
  },
  {
    id: "tempo",
    title: "Quanto tempo você tem por semana?",
    options: [
      { value: "ate-3", label: "Até 3 horas" },
      { value: "3-a-6", label: "De 3 a 6 horas" },
      { value: "mais-6", label: "Mais de 6 horas" },
    ],
  },
];

<Questionnaire questions={perguntas} onComplete={(respostas) => salvarPlano(respostas)} />
```

## Props

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `questions` | `QuestionnaireQuestion[]` | obrigatório | As perguntas |
| `onComplete` | `(answers) => void \| Promise` | | Chamado ao enviar a última. Se retornar promise, o botão mostra carregando |
| `value` / `defaultValue` / `onValueChange` | `QuestionnaireAnswers` | | Respostas controladas / iniciais |
| `step` / `defaultStep` / `onStepChange` | `number` | `0` | Etapa atual (índice nas perguntas visíveis) |
| `progress` | `"text" \| "bar" \| "fraction" \| "none"` | `"text"` (se > 1 pergunta) | Estilo do progresso |
| `progressLabel` | `(current, total) => ReactNode` | "Pergunta 1 de 3" | Texto do progresso |
| `renderProgress` | `({ current, total, question }) => ReactNode` | | Progresso totalmente personalizado |
| `shortcuts` | `"letters" \| "numbers" \| false` | `false` | Atalhos A, B, C ou 1, 2, 3 |
| `variant` | `"default" \| "card"` | `"default"` | `card` envolve em um Card com rodapé |
| `animated` | `boolean` | `true` | Anima a troca de pergunta |
| `labels` | `{ next, back, submit, skip, otherPlaceholder }` | "Próxima", "Voltar", "Enviar", "Pular" | Textos dos botões |

### QuestionnaireQuestion

| Campo | Tipo | Descrição |
|---|---|---|
| `id` | `string` | Chave da resposta |
| `title` / `description` | `ReactNode` | Pergunta e texto de apoio |
| `type` | `"single" \| "multiple"` | Escolha única (padrão) ou múltipla |
| `options` | `{ value, label, description?, disabled? }[]` | Opções |
| `other` | `boolean \| { placeholder?, label? }` | Campo de resposta livre abaixo das opções |
| `optional` | `boolean` | Permite avançar sem responder |
| `skippable` | `boolean` | Mostra o botão "Pular" |
| `validate` | `(answer, answers) => string \| undefined` | Retorne a mensagem de erro para bloquear |
| `when` | `(answers) => boolean` | Mostra a pergunta só quando retornar `true` |

### Formato das respostas

```ts
type QuestionnaireAnswers = Record<string, { values: string[]; other?: string; skipped?: boolean }>;

{ certificacao: { values: ["cpa"] }, temas: { values: ["etica"], other: "Previdência" } }
```

## Exemplos

### Múltipla escolha com resposta livre

```tsx
{
  id: "temas",
  title: "Quais temas você quer revisar?",
  type: "multiple",
  options: [{ value: "etica", label: "Ética" }, { value: "investimentos", label: "Investimentos" }],
  other: { placeholder: "Outro tema…" },
}
```

### Validação

```tsx
{
  id: "temas",
  type: "multiple",
  title: "Escolha os temas",
  options: [...],
  validate: (answer) => (answer.values.length < 2 ? "Escolha pelo menos dois temas." : undefined),
}
```

### Pergunta condicional

```tsx
{
  id: "modulo",
  title: "Qual módulo da CPRO-R?",
  when: (respostas) => respostas.certificacao?.values[0] === "cpro-r",
  options: [...],
}
```

### Salvar e retomar

```tsx
const [respostas, setRespostas] = useState<QuestionnaireAnswers>(salvas ?? {});
const [etapa, setEtapa] = useState(etapaSalva ?? 0);

<Questionnaire
  questions={perguntas}
  value={respostas}
  onValueChange={setRespostas}
  step={etapa}
  onStepChange={setEtapa}
/>
```

### Em card ou dialog

```tsx
<Questionnaire variant="card" progress="fraction" questions={perguntas} />

<Dialog>
  <DialogTrigger asChild><Button>Montar meu plano</Button></DialogTrigger>
  <DialogContent>
    <DialogTitle className="sr-only">Montar plano de estudos</DialogTitle>
    <Questionnaire questions={perguntas} />
  </DialogContent>
</Dialog>
```

## Teclado

| Tecla | Ação |
|---|---|
| `Tab` / setas | Navega entre as opções (radio nativo) |
| `Espaço` | Marca a opção focada |
| `A`, `B`, `C`... ou `1`, `2`, `3`... | Marca a opção (com `shortcuts`) |
| `Enter` | Próxima pergunta / enviar |

## Acessibilidade

- As opções são inputs nativos (`radio`/`checkbox`) dentro de `radiogroup`/`group` com o título como nome.
- Erros de validação são anunciados (`role="alert"`).
- O botão "Próxima" fica desabilitado até a pergunta obrigatória ser respondida.
