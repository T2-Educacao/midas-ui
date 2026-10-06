import * as React from "react";
import { cn } from "../../lib/cn";

export const inputClasses = [
  "h-8 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-sm text-foreground outline-none",
  "transition-[color,border-color,box-shadow] duration-150 motion-reduce:transition-none",
  "placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground",
  "file:inline-flex file:h-6 file:border-0 file:bg-transparent file:pe-1 file:text-sm file:font-medium file:text-foreground",
  "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
  "disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50",
  "aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20",
  "dark:bg-input/30 dark:disabled:bg-input/80",
];

const dateBounds: Record<string, { min: string; max: string } | undefined> = {
  date: { min: "1900-01-01", max: "2100-12-31" },
  "datetime-local": { min: "1900-01-01T00:00", max: "2100-12-31T23:59" },
};

export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type = "text", min, max, ...props }, ref) => {
  const bounds = dateBounds[type];
  return (
    <input
      ref={ref}
      type={type}
      min={min ?? bounds?.min}
      max={max ?? bounds?.max}
      data-slot="input"
      className={cn(inputClasses, className)}
      {...props}
    />
  );
});
Input.displayName = "Input";
