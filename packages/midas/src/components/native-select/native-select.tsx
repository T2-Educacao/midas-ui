import { IconChevronDown } from "@tabler/icons-react";
import * as React from "react";
import { cn } from "../../lib/cn";
import { type FieldControlVariantProps, fieldControlVariants } from "../../lib/field-styles";

export interface NativeSelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "size">,
    Omit<FieldControlVariantProps, "size"> {
  size?: "sm" | "md" | "lg" | "default";
  fullWidth?: boolean;
  success?: boolean;
  wrapperClassName?: string;
}

export const NativeSelect = React.forwardRef<HTMLSelectElement, NativeSelectProps>(
  (
    {
      className,
      wrapperClassName,
      size = "default",
      appearance,
      tone,
      shape,
      success,
      fullWidth = false,
      ...props
    },
    ref,
  ) => (
    <div
      data-slot="native-select-wrapper"
      className={cn(
        "group/native-select relative",
        fullWidth ? "w-full" : "w-fit",
        wrapperClassName,
      )}
    >
      <select
        ref={ref}
        data-slot="native-select"
        data-size={size}
        data-success={success ? "true" : undefined}
        className={cn(
          fieldControlVariants({ size: size === "default" ? "md" : size, appearance, tone, shape }),
          "appearance-none pe-10 select-none",
          "*:bg-overlay-surface *:text-content-primary",
          className,
        )}
        {...props}
      />
      <IconChevronDown
        aria-hidden
        className="pointer-events-none absolute top-1/2 end-3.5 size-icon-md -translate-y-1/2 text-content-secondary group-has-[select:disabled]/native-select:text-content-disabled"
      />
    </div>
  ),
);
NativeSelect.displayName = "NativeSelect";
