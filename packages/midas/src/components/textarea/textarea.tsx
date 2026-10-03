import * as React from "react";
import { cn } from "../../lib/cn";

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    data-slot="textarea"
    className={cn(
      "field-sizing-content flex min-h-16 w-full rounded-lg border border-input bg-transparent px-2.5 py-2 text-sm text-foreground outline-none",
      "transition-[color,border-color,box-shadow] duration-150 motion-reduce:transition-none",
      "placeholder:text-muted-foreground",
      "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
      "disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50",
      "aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20",
      "dark:bg-input/30",
      className,
    )}
    {...props}
  />
));
Textarea.displayName = "Textarea";
