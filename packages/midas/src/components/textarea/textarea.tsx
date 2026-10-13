"use client";

import * as React from "react";
import { cn } from "../../lib/cn";
import { type FieldControlVariantProps, fieldControlVariants } from "../../lib/field-styles";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> &
  Omit<FieldControlVariantProps, "size"> & {
    autoGrow?: boolean;
    bare?: boolean;
    success?: boolean;
  };

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    { className, autoGrow, bare, success, appearance, tone, shape, onInput, ...props },
    forwardedRef,
  ) => {
    const innerRef = React.useRef<HTMLTextAreaElement | null>(null);

    const setRefs = React.useCallback(
      (node: HTMLTextAreaElement | null) => {
        innerRef.current = node;
        if (typeof forwardedRef === "function") forwardedRef(node);
        else if (forwardedRef) forwardedRef.current = node;
      },
      [forwardedRef],
    );

    const resize = React.useCallback(() => {
      const node = innerRef.current;
      if (!node) return;
      node.style.height = "auto";
      node.style.height = `${node.scrollHeight}px`;
    }, []);

    React.useLayoutEffect(() => {
      if (autoGrow) resize();
    });

    return (
      <textarea
        ref={setRefs}
        data-slot="textarea"
        data-success={success ? "true" : undefined}
        onInput={(event) => {
          onInput?.(event);
          if (autoGrow) resize();
        }}
        className={cn(
          autoGrow ? "field-sizing-fixed resize-none overflow-hidden" : "field-sizing-content",
          bare
            ? "flex w-full min-h-0 border-0 bg-transparent p-0 text-body-md text-content-primary outline-none placeholder:text-content-secondary focus-visible:ring-0 disabled:cursor-not-allowed disabled:text-content-disabled"
            : [
                fieldControlVariants({ appearance, tone, shape }),
                "flex h-auto min-h-24 px-3.5 py-3",
                shape === "pill" && "rounded-3xl px-5",
              ],
          className,
        )}
        {...props}
      />
    );
  },
);
Textarea.displayName = "Textarea";
