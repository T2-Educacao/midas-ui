"use client";

import { IconCheck, IconX } from "@tabler/icons-react";
import { cva, type VariantProps } from "class-variance-authority";
import { RadioGroup as RadioGroupPrimitive } from "radix-ui";
import * as React from "react";
import { cn } from "../../lib/cn";

export type AnswerOptionResult = "correct" | "incorrect" | "missed";

export const answerOptionVariants = cva(
  [
    "group/answer-option relative flex w-full items-center gap-3.5 rounded-container border px-4 py-3.5 text-start outline-none",
    "transition-[color,background-color,border-color,box-shadow] duration-150 motion-reduce:transition-none",
    "disabled:cursor-not-allowed disabled:shadow-none",
    "data-[result=correct]:border-status-success-border data-[result=correct]:bg-status-success-subtle data-[result=correct]:shadow-elevation-control",
    "data-[result=incorrect]:border-status-danger-border data-[result=incorrect]:bg-status-danger-subtle data-[result=incorrect]:shadow-elevation-control",
    "data-[result=missed]:border-status-success-border",
  ],
  {
    variants: {
      appearance: {
        outline:
          "border-border-subtle bg-surface-canvas shadow-elevation-control hover:border-border-default hover:bg-state-hover",
        filled: "border-transparent bg-surface-muted hover:border-border-default",
        glass:
          "border-material-glass-border bg-material-glass-surface backdrop-blur-midas-md hover:border-border-default",
      },
      tone: {
        brand:
          "focus-visible:focus-ring data-[state=checked]:border-selection-border data-[state=checked]:bg-selection-bg data-[state=checked]:shadow-focus-ring",
        neutral:
          "focus-visible:focus-ring-neutral data-[state=checked]:border-border-strong data-[state=checked]:bg-surface-muted data-[state=checked]:shadow-focus-ring-neutral",
      },
    },
    defaultVariants: {
      appearance: "outline",
      tone: "brand",
    },
  },
);

type AnswerOptionStyle = VariantProps<typeof answerOptionVariants>;

const AnswerOptionContext = React.createContext<AnswerOptionStyle>({});

export type AnswerOptionGroupProps = React.ComponentPropsWithoutRef<
  typeof RadioGroupPrimitive.Root
> &
  AnswerOptionStyle;

export const AnswerOptionGroup = React.forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitive.Root>,
  AnswerOptionGroupProps
>(({ className, appearance, tone, ...props }, ref) => {
  const style = React.useMemo(() => ({ appearance, tone }), [appearance, tone]);
  return (
    <AnswerOptionContext.Provider value={style}>
      <RadioGroupPrimitive.Root
        ref={ref}
        data-slot="answer-option-group"
        className={cn("flex flex-col gap-3", className)}
        {...props}
      />
    </AnswerOptionContext.Provider>
  );
});
AnswerOptionGroup.displayName = "AnswerOptionGroup";

const feedback = {
  correct: {
    label: "Correta",
    Icon: IconCheck,
    className: "border-status-success-border bg-status-success-subtle text-status-success-content",
  },
  incorrect: {
    label: "Sua resposta",
    Icon: IconX,
    className: "border-status-danger-border bg-status-danger-subtle text-status-danger-content",
  },
  missed: {
    label: "Resposta certa",
    Icon: IconCheck,
    className: "border-status-success-border bg-status-success-subtle text-status-success-content",
  },
} as const;

const letterResult = {
  correct: "border-status-success-border bg-status-success-subtle text-status-success-content",
  incorrect: "border-status-danger-border bg-status-danger-subtle text-status-danger-content",
  missed: "border-status-success-border bg-status-success-subtle text-status-success-content",
} as const;

export interface AnswerOptionProps
  extends Omit<
      React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>,
      "children" | "title"
    >,
    AnswerOptionStyle {
  letter: string;
  children: React.ReactNode;
  result?: AnswerOptionResult;
  feedbackLabel?: string;
}

export const AnswerOption = React.forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitive.Item>,
  AnswerOptionProps
>(
  (
    { className, letter, children, result, feedbackLabel, appearance, tone, disabled, ...props },
    ref,
  ) => {
    const context = React.useContext(AnswerOptionContext);
    const id = React.useId();
    const letterId = `${id}-letter`;
    const answerId = `${id}-answer`;
    const feedbackId = `${id}-feedback`;
    const feedbackData = result ? feedback[result] : null;
    return (
      <RadioGroupPrimitive.Item
        ref={ref}
        data-slot="answer-option"
        data-result={result}
        disabled={disabled}
        aria-labelledby={`${letterId} ${answerId}`}
        aria-describedby={feedbackData ? feedbackId : undefined}
        className={cn(
          answerOptionVariants({
            appearance: appearance ?? context.appearance,
            tone: tone ?? context.tone,
          }),
          className,
        )}
        {...props}
      >
        <span
          id={letterId}
          data-slot="answer-option-letter"
          className={cn(
            "flex size-8 shrink-0 items-center justify-center rounded-pill border border-border-default bg-surface-canvas text-label-md text-content-primary",
            "group-data-[state=checked]/answer-option:border-selection-fill group-data-[state=checked]/answer-option:bg-selection-fill group-data-[state=checked]/answer-option:text-selection-on-fill",
            "group-disabled/answer-option:border-disabled-border group-disabled/answer-option:bg-disabled-bg group-disabled/answer-option:text-content-disabled",
            result && letterResult[result],
          )}
        >
          {letter}
        </span>
        <span
          id={answerId}
          data-slot="answer-option-text"
          className="min-w-0 flex-1 text-body-md text-content-primary group-disabled/answer-option:text-content-secondary"
        >
          {children}
        </span>
        {feedbackData ? (
          <span
            id={feedbackId}
            data-slot="answer-option-feedback"
            className={cn(
              "inline-flex h-6 shrink-0 items-center gap-1 rounded-pill border px-2 text-label-sm",
              feedbackData.className,
            )}
          >
            <feedbackData.Icon aria-hidden="true" className="size-icon-sm" />
            {feedbackLabel ?? feedbackData.label}
          </span>
        ) : null}
      </RadioGroupPrimitive.Item>
    );
  },
);
AnswerOption.displayName = "AnswerOption";
