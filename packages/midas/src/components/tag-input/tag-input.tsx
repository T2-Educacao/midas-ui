"use client";

import { IconX } from "@tabler/icons-react";
import * as React from "react";
import { cn } from "../../lib/cn";
import { fieldGroupVariants } from "../../lib/field-styles";

export interface TagInputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "size" | "value" | "defaultValue" | "onChange"
  > {
  value?: string[];
  defaultValue?: string[];
  onValueChange?: (value: string[]) => void;
  size?: "md" | "lg";
  appearance?: "outline" | "filled" | "glass";
  tone?: "brand" | "neutral";
  shape?: "rounded" | "pill";
  maxTags?: number;
  allowDuplicates?: boolean;
  separators?: string[];
  removeLabel?: string;
  wrapperClassName?: string;
  invalid?: boolean;
}

export const TagInput = React.forwardRef<HTMLInputElement, TagInputProps>(
  (
    {
      className,
      wrapperClassName,
      value,
      defaultValue = [],
      onValueChange,
      size = "md",
      appearance,
      tone,
      shape,
      maxTags,
      allowDuplicates = false,
      separators = ["Enter", ","],
      removeLabel = "Remover",
      placeholder = "Adicionar…",
      disabled,
      invalid,
      onKeyDown,
      onBlur,
      ...props
    },
    ref,
  ) => {
    const [internal, setInternal] = React.useState(defaultValue);
    const [draft, setDraft] = React.useState("");
    const tags = value ?? internal;
    const inputRef = React.useRef<HTMLInputElement | null>(null);

    const setRefs = React.useCallback(
      (node: HTMLInputElement | null) => {
        inputRef.current = node;
        if (typeof ref === "function") ref(node);
        else if (ref) ref.current = node;
      },
      [ref],
    );

    const commit = (next: string[]) => {
      if (value === undefined) setInternal(next);
      onValueChange?.(next);
    };

    const add = (raw: string) => {
      const text = raw.trim();
      if (!text) return;
      if (maxTags !== undefined && tags.length >= maxTags) return;
      if (!allowDuplicates && tags.includes(text)) {
        setDraft("");
        return;
      }
      commit([...tags, text]);
      setDraft("");
    };

    const focusOnBackgroundClick = {
      onClick: (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) inputRef.current?.focus();
      },
    };

    const remove = (index: number) => commit(tags.filter((_, i) => i !== index));

    return (
      <div
        data-slot="tag-input"
        data-invalid={invalid ? "true" : undefined}
        className={cn(
          fieldGroupVariants({ size, appearance, tone, shape }),
          "h-auto min-h-control-xl flex-wrap gap-1.5 py-2 ps-2",
          size === "lg" && "min-h-control-2xl",
          shape === "pill" && "ps-3",
          invalid && "border-status-danger-border",
          wrapperClassName,
        )}
        {...focusOnBackgroundClick}
      >
        {tags.map((tag, index) => (
          <span
            key={tag}
            data-slot="tag-input-tag"
            className={cn(
              "inline-flex h-6 items-center gap-1 rounded-pill border border-border-subtle ps-2.5 text-label-sm",
              tone === "neutral"
                ? "bg-surface-muted text-content-primary"
                : "bg-selection-bg text-selection-content",
              disabled && "text-content-disabled",
            )}
          >
            {tag}
            <button
              type="button"
              disabled={disabled}
              aria-label={`${removeLabel} ${tag}`}
              onClick={() => remove(index)}
              className="flex h-full items-center rounded-pill pe-2 ps-0.5 outline-none hover:opacity-70 focus-visible:focus-ring disabled:pointer-events-none"
            >
              <IconX aria-hidden="true" className="size-icon-xs" />
            </button>
          </span>
        ))}
        <input
          ref={setRefs}
          type="text"
          data-slot="input-group-control"
          value={draft}
          disabled={disabled}
          aria-invalid={invalid || undefined}
          placeholder={placeholder}
          onChange={(event) => setDraft(event.target.value)}
          onKeyDown={(event) => {
            onKeyDown?.(event);
            if (event.defaultPrevented) return;
            if (separators.includes(event.key)) {
              event.preventDefault();
              add(draft);
            } else if (event.key === "Backspace" && !draft && tags.length > 0) {
              remove(tags.length - 1);
            }
          }}
          onBlur={(event) => {
            onBlur?.(event);
            add(draft);
          }}
          className={cn(
            "h-6 min-w-24 flex-1 border-0 bg-transparent p-0 ps-1 text-[length:inherit] text-content-primary outline-none placeholder:text-content-secondary disabled:cursor-not-allowed",
            className,
          )}
          {...props}
        />
      </div>
    );
  },
);
TagInput.displayName = "TagInput";
