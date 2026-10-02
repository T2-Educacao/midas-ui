import { SpinnerGap } from "@phosphor-icons/react/ssr";
import type * as React from "react";
import { cn } from "../../lib/cn";

export interface SpinnerProps extends React.SVGProps<SVGSVGElement> {
  label?: string;
}

export function Spinner({ className, label = "Carregando", ...props }: SpinnerProps) {
  return (
    <SpinnerGap
      role={label ? "status" : undefined}
      aria-label={label || undefined}
      data-slot="spinner"
      className={cn("size-4 animate-spin motion-reduce:animate-none", className)}
      {...(props as object)}
    />
  );
}
