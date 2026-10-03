"use client";

import * as React from "react";
import { cn } from "../../lib/cn";
import { Button } from "../button/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../card/card";
import { Kbd } from "../kbd/kbd";

export interface QuestionnaireOption {
  value: string;
  label: React.ReactNode;
  description?: React.ReactNode;
  disabled?: boolean;
}

export interface QuestionnaireAnswer {
  values: string[];
  other?: string;
  skipped?: boolean;
}

export type QuestionnaireAnswers = Record<string, QuestionnaireAnswer>;

export interface QuestionnaireQuestion {
  id: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  type?: "single" | "multiple";
  options: QuestionnaireOption[];
  other?: boolean | { placeholder?: string; label?: string };
  optional?: boolean;
  skippable?: boolean;
  validate?: (answer: QuestionnaireAnswer, answers: QuestionnaireAnswers) => string | undefined;
  when?: (answers: QuestionnaireAnswers) => boolean;
}

export interface QuestionnaireProgressState {
  current: number;
  total: number;
  question: QuestionnaireQuestion;
}

export interface QuestionnaireLabels {
  next?: string;
  back?: string;
  submit?: string;
  skip?: string;
  otherPlaceholder?: string;
}

export interface QuestionnaireProps {
  questions: QuestionnaireQuestion[];
  value?: QuestionnaireAnswers;
  defaultValue?: QuestionnaireAnswers;
  onValueChange?: (answers: QuestionnaireAnswers) => void;
  step?: number;
  defaultStep?: number;
  onStepChange?: (step: number) => void;
  onComplete?: (answers: QuestionnaireAnswers) => unknown;
  progress?: "text" | "bar" | "fraction" | "none";
  progressLabel?: (current: number, total: number) => React.ReactNode;
  renderProgress?: (state: QuestionnaireProgressState) => React.ReactNode;
  shortcuts?: "letters" | "numbers" | false;
  variant?: "default" | "card";
  animated?: boolean;
  labels?: QuestionnaireLabels;
  className?: string;
}

const emptyAnswer: QuestionnaireAnswer = { values: [] };

export const isAnswered = (answer?: QuestionnaireAnswer) =>
  !!answer && (answer.values.length > 0 || !!answer.other?.trim() || !!answer.skipped);

const shortcutFor = (index: number, mode: "letters" | "numbers") =>
  mode === "letters" ? String.fromCharCode(65 + index) : String(index + 1);

export function Questionnaire({
  questions,
  onComplete,
  progress,
  progressLabel = (current, total) => `Pergunta ${current} de ${total}`,
  renderProgress,
  shortcuts = false,
  variant = "default",
  animated = true,
  labels,
  className,
  ...props
}: QuestionnaireProps) {
  const uid = React.useId();
  const [answersState, setAnswersState] = React.useState<QuestionnaireAnswers>(
    props.defaultValue ?? {},
  );
  const answers = props.value ?? answersState;
  const [stepState, setStepState] = React.useState(props.defaultStep ?? 0);
  const [error, setError] = React.useState<string>();
  const [submitting, setSubmitting] = React.useState(false);

  const visible = questions.filter((q) => !q.when || q.when(answers));
  const total = visible.length;
  const step = Math.min(Math.max(props.step ?? stepState, 0), Math.max(total - 1, 0));
  const question = visible[step];

  if (!question) return null;

  const answer = answers[question.id] ?? emptyAnswer;
  const isLast = step === total - 1;
  const canProceed = question.optional || isAnswered(answer);
  const progressMode = progress ?? (total > 1 ? "text" : "none");
  const other = question.other ? (typeof question.other === "object" ? question.other : {}) : null;
  const titleId = `${uid}-titulo`;
  const descriptionId = `${uid}-descricao`;
  const errorId = `${uid}-erro`;

  const setAnswers = (next: QuestionnaireAnswers) => {
    if (props.value === undefined) setAnswersState(next);
    props.onValueChange?.(next);
  };

  const setAnswer = (next: QuestionnaireAnswer) => {
    setError(undefined);
    setAnswers({ ...answers, [question.id]: next });
  };

  const goTo = (next: number) => {
    setError(undefined);
    if (props.step === undefined) setStepState(next);
    props.onStepChange?.(next);
  };

  const toggle = (value: string) => {
    if (question.type === "multiple") {
      const values = answer.values.includes(value)
        ? answer.values.filter((v) => v !== value)
        : [...answer.values, value];
      setAnswer({ ...answer, values, skipped: false });
    } else {
      setAnswer({ values: [value], skipped: false });
    }
  };

  const submit = async () => {
    if (!canProceed) return;
    const message = question.validate?.(answer, answers);
    if (message) {
      setError(message);
      return;
    }
    if (!isLast) {
      goTo(step + 1);
      return;
    }
    const result = onComplete?.(answers);
    if (result instanceof Promise) {
      setSubmitting(true);
      try {
        await result;
      } finally {
        setSubmitting(false);
      }
    }
  };

  const skip = () => {
    setAnswers({ ...answers, [question.id]: { values: [], skipped: true } });
    setError(undefined);
    if (!isLast) goTo(step + 1);
    else onComplete?.({ ...answers, [question.id]: { values: [], skipped: true } });
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;
    const typing =
      target.tagName === "TEXTAREA" ||
      (target.tagName === "INPUT" && (target as HTMLInputElement).type === "text");
    if (event.key === "Enter" && !event.shiftKey && target.tagName !== "BUTTON") {
      event.preventDefault();
      submit();
      return;
    }
    if (!shortcuts || typing || event.metaKey || event.ctrlKey || event.altKey) return;
    const index = question.options.findIndex(
      (_, i) => shortcutFor(i, shortcuts).toLowerCase() === event.key.toLowerCase(),
    );
    const option = question.options[index];
    if (option && !option.disabled) {
      event.preventDefault();
      toggle(option.value);
    }
  };

  const progressNode = renderProgress ? (
    renderProgress({ current: step + 1, total, question })
  ) : progressMode === "text" ? (
    <p data-slot="questionnaire-progress" className="text-xs font-medium text-muted-foreground">
      {progressLabel(step + 1, total)}
    </p>
  ) : progressMode === "bar" ? (
    <div data-slot="questionnaire-progress" className="flex flex-col gap-2">
      <div
        role="progressbar"
        aria-valuemin={1}
        aria-valuemax={total}
        aria-valuenow={step + 1}
        aria-label="Progresso"
        className="flex gap-1.5"
      >
        {visible.map((q, index) => (
          <span
            key={q.id}
            className={cn(
              "h-1.5 flex-1 rounded-full bg-muted transition-colors duration-300 motion-reduce:transition-none",
              index <= step && "bg-primary",
            )}
          />
        ))}
      </div>
      <p className="text-xs font-medium text-muted-foreground">{progressLabel(step + 1, total)}</p>
    </div>
  ) : null;

  const fraction =
    progressMode === "fraction" ? (
      <span
        data-slot="questionnaire-progress"
        className="text-xs font-medium text-muted-foreground"
      >
        {step + 1}/{total}
      </span>
    ) : null;

  const header = (
    <div data-slot="questionnaire-header" className="flex flex-col">
      <h3 id={titleId} className="text-base font-medium text-foreground">
        {question.title}
      </h3>
      {question.description && (
        <p id={descriptionId} className="text-sm text-muted-foreground">
          {question.description}
        </p>
      )}
    </div>
  );

  const choices = (
    <div className="flex flex-col gap-2">
      <fieldset
        aria-labelledby={titleId}
        aria-describedby={cn(question.description && descriptionId, error && errorId) || undefined}
        data-slot="questionnaire-choices"
        className="m-0 flex min-w-0 flex-col gap-2 border-0 p-0"
      >
        {question.options.map((option, index) => (
          <QuestionnaireChoice
            key={option.value}
            name={`${uid}-${question.id}`}
            type={question.type === "multiple" ? "checkbox" : "radio"}
            option={option}
            checked={answer.values.includes(option.value)}
            shortcut={shortcuts ? shortcutFor(index, shortcuts) : undefined}
            onToggle={() => toggle(option.value)}
          />
        ))}
      </fieldset>
      {other && (
        <input
          type="text"
          data-slot="questionnaire-input"
          aria-label={other.label ?? "Outra resposta"}
          placeholder={other.placeholder ?? labels?.otherPlaceholder ?? "Outra resposta…"}
          value={answer.other ?? ""}
          onChange={(event) =>
            setAnswer({
              values: question.type === "multiple" ? answer.values : [],
              other: event.target.value,
              skipped: false,
            })
          }
          className="h-8 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-sm text-foreground outline-none transition-[color,border-color,box-shadow] duration-150 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 motion-reduce:transition-none dark:bg-input/30"
        />
      )}
      {error && (
        <p id={errorId} role="alert" className="text-sm text-destructive">
          {error}
        </p>
      )}
    </div>
  );

  const size = variant === "card" ? "sm" : "default";
  const actions = (
    <div data-slot="questionnaire-actions" className="flex flex-wrap items-center gap-2">
      {step > 0 && (
        <Button variant="outline" size={size} onClick={() => goTo(step - 1)}>
          {labels?.back ?? "Voltar"}
        </Button>
      )}
      <Button size={size} disabled={!canProceed} loading={submitting} onClick={submit}>
        {isLast ? (labels?.submit ?? "Enviar") : (labels?.next ?? "Próxima")}
      </Button>
      {question.skippable && (
        <Button variant="ghost" size={size} onClick={skip}>
          {labels?.skip ?? "Pular"}
        </Button>
      )}
    </div>
  );

  const motion = animated ? "animate-midas-slide motion-reduce:animate-none" : undefined;

  if (variant === "card") {
    return (
      <Card data-slot="questionnaire" className={className} onKeyDown={onKeyDown}>
        <CardHeader>
          <CardTitle id={titleId} key={`${question.id}-titulo`} className={motion}>
            {question.title}
          </CardTitle>
          {question.description && (
            <CardDescription id={descriptionId}>{question.description}</CardDescription>
          )}
          {(fraction || progressMode === "text") && (
            <CardAction>
              {fraction ?? (
                <span className="text-xs font-medium text-muted-foreground">
                  {step + 1}/{total}
                </span>
              )}
            </CardAction>
          )}
        </CardHeader>
        <CardContent key={question.id} className={motion}>
          {choices}
        </CardContent>
        <CardFooter>{actions}</CardFooter>
      </Card>
    );
  }

  return (
    <div
      role="group"
      aria-labelledby={titleId}
      data-slot="questionnaire"
      className={cn("flex w-full flex-col gap-4", className)}
      onKeyDown={onKeyDown}
    >
      {progressNode}
      <div
        key={question.id}
        data-slot="questionnaire-item"
        className={cn("flex flex-col gap-4", motion)}
      >
        <div className="flex items-start justify-between gap-4">
          {header}
          {fraction}
        </div>
        {choices}
      </div>
      {actions}
    </div>
  );
}

export interface QuestionnaireChoiceProps {
  name: string;
  type: "radio" | "checkbox";
  option: QuestionnaireOption;
  checked: boolean;
  shortcut?: string;
  onToggle: () => void;
}

export function QuestionnaireChoice({
  name,
  type,
  option,
  checked,
  shortcut,
  onToggle,
}: QuestionnaireChoiceProps) {
  return (
    <label
      data-slot="questionnaire-choice"
      data-checked={checked || undefined}
      className={cn(
        "group/choice flex min-h-11 cursor-pointer items-center gap-2.5 rounded-lg border border-border px-3 py-2.5",
        "transition-[color,background-color,border-color,box-shadow] duration-150 motion-reduce:transition-none",
        "hover:bg-accent/50 has-checked:border-primary/40 has-checked:bg-accent",
        "has-focus-visible:border-ring has-focus-visible:ring-3 has-focus-visible:ring-ring/50",
        "has-disabled:cursor-not-allowed has-disabled:opacity-50",
      )}
    >
      <input
        type={type}
        name={name}
        value={option.value}
        checked={checked}
        disabled={option.disabled}
        onChange={onToggle}
        aria-keyshortcuts={shortcut}
        className="sr-only"
      />
      <span
        aria-hidden
        data-slot="questionnaire-choice-indicator"
        className="flex size-4 shrink-0 items-center justify-center rounded-full border border-input bg-background transition-colors dark:border-muted-foreground/50 group-has-checked/choice:border-primary dark:group-has-checked/choice:border-primary group-has-checked/choice:bg-primary"
      >
        <span className="size-2 rounded-full bg-primary-foreground opacity-0 group-has-checked/choice:opacity-100" />
      </span>
      <span className="flex min-w-0 flex-1 flex-col gap-0.5">
        <span className="text-sm font-medium text-foreground">{option.label}</span>
        {option.description && (
          <span className="text-xs text-muted-foreground">{option.description}</span>
        )}
      </span>
      {shortcut && (
        <Kbd
          aria-hidden
          className="size-5 rounded-md border border-border bg-background text-[10px]"
        >
          {shortcut}
        </Kbd>
      )}
    </label>
  );
}
