import { CaretDown } from "@phosphor-icons/react/ssr";
import * as React from "react";
import { cn } from "../../lib/cn";

export interface NativeSelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  size?: "sm" | "default";
}

export const NativeSelect = React.forwardRef<HTMLSelectElement, NativeSelectProps>(
  ({ className, size = "default", ...props }, ref) => (
    <div
      data-slot="native-select-wrapper"
      className="group/native-select relative w-fit has-[select:disabled]:opacity-50"
    >
      <select
        ref={ref}
        data-slot="native-select"
        data-size={size}
        className={cn(
          "w-full min-w-0 appearance-none rounded-lg border border-input bg-transparent py-1 pe-8 ps-2.5 text-sm text-foreground outline-none select-none",
          "transition-[color,border-color,box-shadow] duration-150 motion-reduce:transition-none",
          "data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-md",
          "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
          "disabled:pointer-events-none disabled:cursor-not-allowed",
          "aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20",
          "dark:bg-input/30 dark:*:bg-popover",
          className,
        )}
        {...props}
      />
      <CaretDown
        aria-hidden
        className="pointer-events-none absolute top-1/2 end-2.5 size-4 -translate-y-1/2 text-muted-foreground"
      />
    </div>
  ),
);
NativeSelect.displayName = "NativeSelect";
