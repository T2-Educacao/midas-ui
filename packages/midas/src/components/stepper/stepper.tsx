"use client";

import { IconAlertTriangle, IconCheck } from "@tabler/icons-react";
import * as React from "react";
import { cn } from "../../lib/cn";

type StepperOrientation = "horizontal" | "vertical";
export type StepperType = "default" | "segmented";
export type StepState = "completed" | "current" | "pending" | "error";
export type StepIndicator = "number" | "icon" | "dot";

interface StepperContextValue {
  value: number;
  orientation: StepperOrientation;
  type: StepperType;
  onValueChange?: (value: number) => void;
}

const StepperContext = React.createContext<StepperContextValue>({
  value: 0,
  orientation: "horizontal",
  type: "default",
});

const StepContext = React.createContext<{
  step: number;
  state: StepState;
  indicator: StepIndicator;
  icon?: React.ReactNode;
}>({
  step: 0,
  state: "pending",
  indicator: "number",
});

export interface StepperProps extends Omit<React.OlHTMLAttributes<HTMLOListElement>, "type"> {
  orientation?: StepperOrientation;
  type?: StepperType;
  value?: number;
  onValueChange?: (value: number) => void;
}

export const Stepper = React.forwardRef<HTMLOListElement, StepperProps>(
  (
    {
      className,
      orientation = "horizontal",
      type = "default",
      value = 0,
      onValueChange,
      children,
      ...props
    },
    ref,
  ) => {
    const context = React.useMemo(
      () => ({ value, orientation, type, onValueChange }),
      [value, orientation, type, onValueChange],
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
          data-type={type}
          className={cn(
            "flex w-full gap-2 data-[orientation=horizontal]:flex-row data-[orientation=horizontal]:items-start data-[orientation=vertical]:flex-col",
            "data-[type=segmented]:gap-3",
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
  state?: StepState;
  indicator?: StepIndicator;
  icon?: React.ReactNode;
}

export const StepperItem = React.forwardRef<HTMLLIElement, StepperItemProps>(
  (
    { className, step = 0, state: stateProp, indicator = "number", icon, children, ...props },
    ref,
  ) => {
    const { value, orientation, type, onValueChange } = React.useContext(StepperContext);
    const state: StepState =
      stateProp ?? (step < value ? "completed" : step === value ? "current" : "pending");
    const stepContext = React.useMemo(
      () => ({ step, state, indicator, icon }),
      [step, state, indicator, icon],
    );
    const interactive = onValueChange !== undefined;
    const Content = interactive ? "button" : "div";
    const segmented = type === "segmented";
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
            !segmented && [
              "after:absolute after:bg-border-default last:after:hidden",
              "data-[orientation=horizontal]:after:start-9 data-[orientation=horizontal]:after:end-2 data-[orientation=horizontal]:after:top-3.5 data-[orientation=horizontal]:after:h-px",
              "data-[orientation=vertical]:after:start-3.5 data-[orientation=vertical]:after:top-9 data-[orientation=vertical]:after:-bottom-2 data-[orientation=vertical]:after:w-px",
              "data-[state=completed]:after:bg-action-accent-bg",
            ],
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
              segmented && "flex-col-reverse justify-end gap-2",
              interactive && "cursor-pointer rounded-control outline-none focus-visible:focus-ring",
            )}
          >
            {segmented ? <StepperBar /> : <StepperIndicator />}
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

function StepperBar() {
  const { state } = React.useContext(StepContext);
  return (
    <span
      aria-hidden="true"
      data-slot="stepper-bar"
      data-state={state}
      className="relative block h-1 w-full overflow-hidden rounded-pill bg-border-default"
    >
      <span
        className={cn(
          "absolute inset-y-0 start-0 rounded-pill transition-[width] duration-300 motion-reduce:transition-none",
          state === "completed" && "w-full bg-action-accent-bg",
          state === "current" && "w-1/2 bg-selection-fill",
          state === "error" && "w-full bg-status-danger-fill",
          state === "pending" && "w-0",
        )}
      />
    </span>
  );
}

function StepperIndicator() {
  const { step, state, indicator, icon } = React.useContext(StepContext);
  let content: React.ReactNode;
  if (state === "error") {
    content = <IconAlertTriangle className="size-icon-sm" />;
  } else if (indicator === "dot") {
    content = <span className="size-2 rounded-pill bg-current" />;
  } else if (indicator === "icon") {
    content =
      state === "completed" && !icon ? <IconCheck className="size-icon-sm" stroke={3} /> : icon;
  } else {
    content = state === "completed" ? <IconCheck className="size-icon-sm" stroke={3} /> : step + 1;
  }
  return (
    <span
      aria-hidden="true"
      data-slot="stepper-indicator"
      data-state={state}
      data-indicator={indicator}
      className={cn(
        "relative z-10 flex size-control-sm shrink-0 items-center justify-center rounded-pill border text-mono-sm",
        "[&_svg:not([class*='size-'])]:size-icon-sm",
        "transition-colors motion-reduce:transition-none",
        state === "completed" &&
          "border-action-accent-bg bg-action-accent-bg text-action-accent-content",
        state === "current" &&
          "border-selection-border bg-selection-bg text-selection-content ring-4 ring-selection-bg",
        state === "pending" && "border-border-strong bg-surface-default text-content-secondary",
        state === "error" &&
          "border-status-danger-fill bg-status-danger-subtle text-status-danger-content",
      )}
    >
      {content}
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
          "text-label-md",
          state === "pending" && "text-content-secondary",
          state === "error" && "text-status-danger-content",
          (state === "completed" || state === "current") && "text-content-primary",
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
>(({ className, ...props }, ref) => {
  const { state } = React.useContext(StepContext);
  return (
    <p
      ref={ref}
      data-slot="stepper-description"
      className={cn(
        "text-body-sm text-content-secondary",
        state === "error" && "text-status-danger-content",
        className,
      )}
      {...props}
    />
  );
});
StepperDescription.displayName = "StepperDescription";

export interface StepperCompactProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  value: number;
  total: number;
  title: React.ReactNode;
  nextTitle?: React.ReactNode;
}

export const StepperCompact = React.forwardRef<HTMLDivElement, StepperCompactProps>(
  ({ className, value, total, title, nextTitle, ...props }, ref) => (
    <div
      ref={ref}
      role="group"
      aria-label={`Etapa ${value + 1} de ${total}`}
      data-slot="stepper-compact"
      className={cn("flex w-full flex-col gap-2", className)}
      {...props}
    >
      <p className="text-mono-overline text-content-secondary">
        Etapa {value + 1} de {total}
      </p>
      <p aria-current="step" className="text-label-md text-content-primary">
        {title}
      </p>
      {nextTitle ? (
        <p className="text-body-sm text-content-secondary">Próxima: {nextTitle}</p>
      ) : null}
      <div aria-hidden="true" className="flex gap-1">
        {Array.from({ length: total }, (_, position) => position).map((position) => (
          <span
            key={position}
            className={cn(
              "h-1 flex-1 rounded-pill",
              position < value && "bg-action-accent-bg",
              position === value && "bg-selection-fill",
              position > value && "bg-border-default",
            )}
          />
        ))}
      </div>
    </div>
  ),
);
StepperCompact.displayName = "StepperCompact";
