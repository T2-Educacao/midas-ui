import * as React from "react";
import { cn } from "../../lib/cn";
import { type FieldControlVariantProps, fieldControlVariants } from "../../lib/field-styles";

export const inputVariants = fieldControlVariants;

const dateBounds: Record<string, { min: string; max: string } | undefined> = {
  date: { min: "1900-01-01", max: "2100-12-31" },
  "datetime-local": { min: "1900-01-01T00:00", max: "2100-12-31T23:59" },
};

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    FieldControlVariantProps {
  success?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, type = "text", min, max, size, appearance, tone, shape, success, ...props },
    ref,
  ) => {
    const bounds = dateBounds[type];
    return (
      <input
        ref={ref}
        type={type}
        min={min ?? bounds?.min}
        max={max ?? bounds?.max}
        data-slot="input"
        data-success={success ? "true" : undefined}
        className={cn(
          inputVariants({ size, appearance, tone, shape }),
          "file:inline-flex file:h-6 file:border-0 file:bg-transparent file:pe-2 file:text-label-md file:text-content-primary",
          "selection:bg-selection-fill selection:text-selection-on-fill",
          className,
        )}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";
