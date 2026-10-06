"use client";

import { Check } from "@phosphor-icons/react/ssr";
import * as React from "react";
import { cn } from "../../lib/cn";

type StepperOrientation = "horizontal" | "vertical";
type StepState = "completed" | "current" | "pending";

interface StepperContextValue {
  value: number;
  orientation: StepperOrientation;
  onValueChange?: (value: number) => void;
}

const StepperContext = React.createContext<StepperContextValue>({
  value: 0,
  orientation: "horizontal",
});

const StepContext = React.createContext<{ step: number; state: StepState }>({
  step: 0,
  state: "pending",
});

export interface StepperProps extends React.OlHTMLAttributes<HTMLOListElement> {
  orientation?: StepperOrientation;
  value?: number;
  onValueChange?: (value: number) => void;
}

export const Stepper = React.forwardRef<HTMLOListElement, StepperProps>(
  (
    { className, orientation = "horizontal", value = 0, onValueChange, children, ...props },
    ref,
  ) => {
    const context = React.useMemo(
      () => ({ value, orientation, onValueChange }),
      [value, orientation, onValueChange],
    );
    let index = 0;
    const items = React.Children.map(children, (child) => {
      const position = index++;
      if (React.isValidElement<{ step?: number }>(child) && child.props.step === undefined) {
        return React.cloneElement(child, { step: position });
      }
      return child;
    });
    return (
      <StepperContext.Provider value={context}>
        <ol
          ref={ref}
          data-slot="stepper"
          data-orientation={orientation}
          className={cn(
            "flex w-full gap-2 data-[orientation=horizontal]:flex-row data-[orientation=horizontal]:items-start data-[orientation=vertical]:flex-col",
            className,
          )}
          {...props}
        >
          {items}
        </ol>
      </StepperContext.Provider>
    );
  },
);
Stepper.displayName = "Stepper";

export interface StepperItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  step?: number;
}

export const StepperItem = React.forwardRef<HTMLLIElement, StepperItemProps>(
  ({ className, step = 0, children, ...props }, ref) => {
    const { value, orientation, onValueChange } = React.useContext(StepperContext);
    const state: StepState = step < value ? "completed" : step === value ? "current" : "pending";
    const stepContext = React.useMemo(() => ({ step, state }), [step, state]);
    const interactive = onValueChange !== undefined;
    const Content = interactive ? "button" : "div";
    return (
      <StepContext.Provider value={stepContext}>
        <li
          ref={ref}
          data-slot="stepper-item"
          data-state={state}
          data-orientation={orientation}
          aria-current={state === "current" ? "step" : undefined}
          className={cn(
            "group/step relative flex flex-1",
            "after:absolute after:bg-border last:after:hidden",
            "data-[orientation=horizontal]:after:start-9 data-[orientation=horizontal]:after:end-2 data-[orientation=horizontal]:after:top-3.5 data-[orientation=horizontal]:after:h-px",
            "data-[orientation=vertical]:after:start-3.5 data-[orientation=vertical]:after:top-9 data-[orientation=vertical]:after:-bottom-2 data-[orientation=vertical]:after:w-px",
            "data-[state=completed]:after:bg-primary",
            className,
          )}
          {...props}
        >
          <Content
            {...(interactive
              ? { type: "button" as const, onClick: () => onValueChange?.(step) }
              : {})}
            data-slot="stepper-trigger"
            className={cn(
              "flex flex-1 gap-3 text-start group-data-[orientation=horizontal]/step:flex-col",
              interactive &&
                "cursor-pointer rounded-md outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
            )}
          >
            <StepperIndicator />
            <div data-slot="stepper-body" className="flex min-w-0 flex-col gap-0.5">
              {children}
            </div>
          </Content>
        </li>
      </StepContext.Provider>
    );
  },
);
StepperItem.displayName = "StepperItem";

function StepperIndicator() {
  const { step, state } = React.useContext(StepContext);
  return (
    <span
      aria-hidden="true"
      data-slot="stepper-indicator"
      data-state={state}
      className={cn(
        "relative z-10 flex size-7 shrink-0 items-center justify-center rounded-full border text-xs font-medium",
        "transition-colors motion-reduce:transition-none",
        state === "completed" && "border-primary bg-primary text-primary-foreground",
        state === "current" && "border-primary bg-background text-primary",
        state === "pending" && "border-border bg-background text-muted-foreground",
      )}
    >
      {state === "completed" ? <Check className="size-4" weight="bold" /> : step + 1}
    </span>
  );
}

export const StepperTitle = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { state } = React.useContext(StepContext);
    return (
      <div
        ref={ref}
        data-slot="stepper-title"
        className={cn(
          "text-sm font-medium",
          state === "pending" ? "text-muted-foreground" : "text-foreground",
          className,
        )}
        {...props}
      />
    );
  },
);
StepperTitle.displayName = "StepperTitle";

export const StepperDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    data-slot="stepper-description"
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
StepperDescription.displayName = "StepperDescription";
