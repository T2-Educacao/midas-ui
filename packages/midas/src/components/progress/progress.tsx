"use client";

import { Progress as ProgressPrimitive } from "radix-ui";
import * as React from "react";
import { cn } from "../../lib/cn";

export interface ProgressProps
  extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  value?: number | null;
}

export const Progress = React.forwardRef<
  React.ComponentRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, value, max = 100, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    data-slot="progress"
    value={value}
    max={max}
    className={cn("relative h-1.5 w-full overflow-hidden rounded-full bg-muted", className)}
    {...props}
  >
    <ProgressPrimitive.Indicator
      data-slot="progress-indicator"
      className="h-full w-full flex-1 rounded-full bg-primary transition-transform duration-300 motion-reduce:transition-none"
      style={{ transform: `translateX(-${100 - ((value ?? 0) / max) * 100}%)` }}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = "Progress";
