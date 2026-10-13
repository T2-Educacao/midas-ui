"use client";

import { cva } from "class-variance-authority";
import * as React from "react";
import { cn } from "../../lib/cn";

export const codeSlotVariants = cva(
  [
    "border text-center text-content-primary caret-selection-fill outline-none",
    "transition-[color,background-color,border-color,box-shadow] duration-150 motion-reduce:transition-none",
    "disabled:cursor-not-allowed disabled:border-disabled-border disabled:bg-disabled-bg disabled:text-content-disabled disabled:shadow-none",
    "aria-invalid:border-status-danger-border aria-invalid:text-status-danger-content",
    "data-[success=true]:border-status-success-border",
  ],
  {
    variants: {
      size: {
        md: "h-14 w-12 text-heading-md",
        lg: "h-16 w-14 text-heading-lg",
      },
      appearance: {
        outline:
          "border-border-subtle bg-field-bg shadow-elevation-control hover:border-border-default hover:bg-field-bg-hover",
        filled: "border-transparent bg-surface-muted hover:border-border-default",
        glass:
          "border-material-glass-border bg-material-glass-surface backdrop-blur-midas-md hover:border-border-default",
      },
      tone: {
        brand: "focus-visible:focus-ring aria-invalid:focus-visible:focus-ring-danger",
        neutral: "focus-visible:focus-ring-neutral aria-invalid:focus-visible:focus-ring-danger",
      },
      shape: {
        rounded: "",
        pill: "rounded-pill",
      },
    },
    compoundVariants: [
      { shape: "rounded", size: "md", className: "rounded-overlay" },
      { shape: "rounded", size: "lg", className: "rounded-xl" },
    ],
    defaultVariants: {
      size: "md",
      appearance: "outline",
      tone: "brand",
      shape: "rounded",
    },
  },
);

export interface CodeInputProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange" | "defaultValue"> {
  length?: 4 | 6;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  onComplete?: (value: string) => void;
  size?: "md" | "lg";
  appearance?: "outline" | "filled" | "glass";
  tone?: "brand" | "neutral";
  shape?: "rounded" | "pill";
  numeric?: boolean;
  invalid?: boolean;
  success?: boolean;
  disabled?: boolean;
  name?: string;
  slotLabel?: (index: number, total: number) => string;
}

export const CodeInput = React.forwardRef<HTMLDivElement, CodeInputProps>(
  (
    {
      className,
      length = 4,
      value,
      defaultValue = "",
      onValueChange,
      onComplete,
      size,
      appearance,
      tone,
      shape,
      numeric = true,
      invalid,
      success,
      disabled,
      name,
      slotLabel = (index, total) => `Dígito ${index + 1} de ${total}`,
      ...props
    },
    ref,
  ) => {
    const [internal, setInternal] = React.useState(defaultValue);
    const current = (value ?? internal).slice(0, length);
    const refs = React.useRef<Array<HTMLInputElement | null>>([]);
    const filter = (text: string) => (numeric ? text.replace(/\D/g, "") : text.replace(/\s/g, ""));

    const commit = (next: string) => {
      if (value === undefined) setInternal(next);
      onValueChange?.(next);
      if (next.length === length) onComplete?.(next);
    };

    const slots = Array.from({ length }, (_, i) => i);
    const hasSeparator = length === 6;

    return (
      <div
        ref={ref}
        role="group"
        data-slot="code-input"
        className={cn("flex items-center gap-2", className)}
        {...props}
      >
        {name ? <input type="hidden" name={name} value={current} /> : null}
        {slots.map((index) => (
          <React.Fragment key={index}>
            {hasSeparator && index === 3 ? (
              <span aria-hidden="true" className="text-heading-md text-content-secondary">
                ·
              </span>
            ) : null}
            <input
              ref={(node) => {
                refs.current[index] = node;
              }}
              data-slot="code-input-slot"
              data-success={success ? "true" : undefined}
              type="text"
              inputMode={numeric ? "numeric" : "text"}
              autoComplete={index === 0 ? "one-time-code" : "off"}
              maxLength={1}
              value={current[index] ?? ""}
              disabled={disabled}
              aria-invalid={invalid || undefined}
              aria-label={slotLabel(index, length)}
              className={cn(codeSlotVariants({ size, appearance, tone, shape }))}
              onFocus={(event) => event.currentTarget.select()}
              onChange={(event) => {
                const typed = filter(event.target.value).slice(-1);
                if (!typed) return;
                const chars = current.padEnd(index, " ").split("");
                chars[index] = typed;
                commit(chars.join("").trimEnd());
                refs.current[Math.min(index + 1, length - 1)]?.focus();
              }}
              onPaste={(event) => {
                const pasted = filter(event.clipboardData.getData("text")).slice(0, length - index);
                if (!pasted) return;
                event.preventDefault();
                const next = (current.slice(0, index).padEnd(index, " ") + pasted).slice(0, length);
                commit(next.trimEnd());
                refs.current[Math.min(index + pasted.length, length - 1)]?.focus();
              }}
              onKeyDown={(event) => {
                if (event.key === "Backspace") {
                  event.preventDefault();
                  if (current[index]) {
                    commit((current.slice(0, index) + current.slice(index + 1)).trimEnd());
                  } else if (index > 0) {
                    commit(current.slice(0, index - 1) + current.slice(index));
                    refs.current[index - 1]?.focus();
                  }
                } else if (event.key === "ArrowLeft") {
                  event.preventDefault();
                  refs.current[Math.max(index - 1, 0)]?.focus();
                } else if (event.key === "ArrowRight") {
                  event.preventDefault();
                  refs.current[Math.min(index + 1, length - 1)]?.focus();
                }
              }}
            />
          </React.Fragment>
        ))}
      </div>
    );
  },
);
CodeInput.displayName = "CodeInput";
