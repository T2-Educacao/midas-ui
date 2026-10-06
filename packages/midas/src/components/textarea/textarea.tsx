"use client";

import * as React from "react";
import { cn } from "../../lib/cn";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  autoGrow?: boolean;
  bare?: boolean;
};

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, autoGrow, bare, onInput, ...props }, forwardedRef) => {
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
        onInput={(event) => {
          onInput?.(event);
          if (autoGrow) resize();
        }}
        className={cn(
          "flex w-full text-sm text-foreground outline-none",
          "placeholder:text-muted-foreground",
          "disabled:cursor-not-allowed disabled:opacity-50",
          autoGrow ? "field-sizing-fixed resize-none overflow-hidden" : "field-sizing-content",
          bare
            ? "min-h-0 border-0 bg-transparent p-0 focus-visible:ring-0"
            : [
                "min-h-16 rounded-lg border border-input bg-transparent px-2.5 py-2",
                "transition-[color,border-color,box-shadow] duration-150 motion-reduce:transition-none",
                "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
                "disabled:bg-input/50",
                "aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20",
                "dark:bg-input/30",
              ],
          className,
        )}
        {...props}
      />
    );
  },
);
Textarea.displayName = "Textarea";
