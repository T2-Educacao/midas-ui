"use client";

import { IconCheck } from "@tabler/icons-react";
import { cva, type VariantProps } from "class-variance-authority";
import { Checkbox as CheckboxPrimitive, RadioGroup as RadioGroupPrimitive } from "radix-ui";
import * as React from "react";
import { cn } from "../../lib/cn";

export const choiceChipVariants = cva(
  [
    "group/choice-chip inline-flex shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-pill border text-label-md outline-none select-none",
    "transition-[color,background-color,border-color,box-shadow] duration-150 motion-reduce:transition-none",
    "disabled:pointer-events-none disabled:cursor-not-allowed disabled:border-disabled-border disabled:bg-disabled-bg disabled:text-content-disabled disabled:shadow-none disabled:backdrop-blur-none",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-icon-sm",
  ],
  {
    variants: {
      size: {
        md: "h-9 px-3.5",
        lg: "h-11 px-4.5 text-label-lg",
      },
      appearance: {
        outline:
          "border-border-subtle bg-surface-canvas text-content-primary shadow-elevation-control hover:border-border-default hover:bg-state-hover",
        filled:
          "border-transparent bg-surface-muted text-content-primary hover:border-border-default",
        glass:
          "border-material-glass-border bg-material-glass-surface text-content-primary backdrop-blur-midas-md hover:border-border-default",
      },
      tone: {
        brand:
          "focus-visible:focus-ring data-[state=checked]:border-selection-border data-[state=checked]:bg-selection-bg data-[state=checked]:text-selection-content",
        neutral:
          "focus-visible:focus-ring-neutral data-[state=checked]:border-border-strong data-[state=checked]:bg-action-primary-bg data-[state=checked]:text-action-primary-content",
      },
    },
    defaultVariants: {
      size: "md",
      appearance: "outline",
      tone: "brand",
    },
  },
);

type ChoiceChipStyle = VariantProps<typeof choiceChipVariants>;

type ChoiceChipContextValue = ChoiceChipStyle & {
  type: "single" | "multiple";
  value: string[];
  toggle: (value: string, checked: boolean) => void;
};

const ChoiceChipContext = React.createContext<ChoiceChipContextValue | null>(null);

type ChoiceChipGroupBaseProps = ChoiceChipStyle & {
  className?: string;
  "aria-label"?: string;
  "aria-labelledby"?: string;
  disabled?: boolean;
  children?: React.ReactNode;
};

export type ChoiceChipGroupProps = ChoiceChipGroupBaseProps &
  (
    | {
        type?: "single";
        value?: string;
        defaultValue?: string;
        onValueChange?: (value: string) => void;
      }
    | {
        type: "multiple";
        value?: string[];
        defaultValue?: string[];
        onValueChange?: (value: string[]) => void;
      }
  );

export const ChoiceChipGroup = React.forwardRef<HTMLDivElement, ChoiceChipGroupProps>(
  (props, ref) => {
    const { className, size, appearance, tone, disabled, children, ...rest } = props;
    const type = props.type ?? "single";
    const [internal, setInternal] = React.useState<string[]>(() => {
      const initial = props.defaultValue;
      if (initial === undefined) return [];
      return Array.isArray(initial) ? initial : [initial];
    });
    const controlled = props.value;
    const current =
      controlled === undefined ? internal : Array.isArray(controlled) ? controlled : [controlled];

    const toggle = React.useCallback(
      (itemValue: string, checked: boolean) => {
        const next = checked ? [...current, itemValue] : current.filter((v) => v !== itemValue);
        if (controlled === undefined) setInternal(next);
        if (props.type === "multiple") props.onValueChange?.(next);
      },
      [current, controlled, props],
    );

    const context = React.useMemo(
      () => ({ type, value: current, toggle, size, appearance, tone }),
      [type, current, toggle, size, appearance, tone],
    );

    const groupClassName = cn("flex flex-wrap gap-2", className);
    const aria = {
      "aria-label": rest["aria-label"],
      "aria-labelledby": rest["aria-labelledby"],
    };

    if (type === "single") {
      const single = props as Extract<ChoiceChipGroupProps, { type?: "single" }>;
      return (
        <ChoiceChipContext.Provider value={context}>
          <RadioGroupPrimitive.Root
            ref={ref}
            data-slot="choice-chip-group"
            className={groupClassName}
            value={single.value}
            defaultValue={single.defaultValue}
            onValueChange={single.onValueChange}
            disabled={disabled}
            {...aria}
          >
            {children}
          </RadioGroupPrimitive.Root>
        </ChoiceChipContext.Provider>
      );
    }

    return (
      <ChoiceChipContext.Provider value={context}>
        <div
          ref={ref}
          role="group"
          data-slot="choice-chip-group"
          data-disabled={disabled ? "" : undefined}
          className={groupClassName}
          {...aria}
        >
          {children}
        </div>
      </ChoiceChipContext.Provider>
    );
  },
);
ChoiceChipGroup.displayName = "ChoiceChipGroup";

export interface ChoiceChipProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "value">,
    ChoiceChipStyle {
  value: string;
  icon?: React.ReactNode;
}

export const ChoiceChip = React.forwardRef<HTMLButtonElement, ChoiceChipProps>(
  ({ className, value, icon, size, appearance, tone, children, disabled, ...props }, ref) => {
    const context = React.useContext(ChoiceChipContext);
    if (!context) {
      throw new Error("ChoiceChip precisa estar dentro de um ChoiceChipGroup.");
    }
    const style = {
      size: size ?? context.size,
      appearance: appearance ?? context.appearance,
      tone: tone ?? context.tone,
    };
    const classes = cn(choiceChipVariants(style), className);

    if (context.type === "single") {
      return (
        <RadioGroupPrimitive.Item
          ref={ref}
          value={value}
          disabled={disabled}
          data-slot="choice-chip"
          className={classes}
          {...props}
        >
          {icon}
          {children}
        </RadioGroupPrimitive.Item>
      );
    }

    return (
      <CheckboxPrimitive.Root
        ref={ref}
        checked={context.value.includes(value)}
        onCheckedChange={(checked) => context.toggle(value, checked === true)}
        disabled={disabled}
        data-slot="choice-chip"
        className={classes}
        {...props}
      >
        {icon}
        <IconCheck
          aria-hidden="true"
          stroke={2.5}
          className="hidden group-data-[state=checked]/choice-chip:block"
        />
        {children}
      </CheckboxPrimitive.Root>
    );
  },
);
ChoiceChip.displayName = "ChoiceChip";
