"use client";

import { IconCheck } from "@tabler/icons-react";
import { cva, type VariantProps } from "class-variance-authority";
import { Checkbox as CheckboxPrimitive, RadioGroup as RadioGroupPrimitive } from "radix-ui";
import * as React from "react";
import { cn } from "../../lib/cn";

export const choiceCardVariants = cva(
  [
    "group/choice-card relative flex w-full gap-3.5 rounded-container border p-4 text-start outline-none",
    "transition-[color,background-color,border-color,box-shadow] duration-150 motion-reduce:transition-none",
    "disabled:pointer-events-none disabled:cursor-not-allowed disabled:border-disabled-border disabled:bg-disabled-bg disabled:text-content-disabled disabled:shadow-none disabled:backdrop-blur-none",
    "aria-invalid:border-status-danger-border",
  ],
  {
    variants: {
      appearance: {
        outline:
          "border-border-subtle bg-surface-canvas shadow-elevation-control hover:border-border-default hover:bg-state-hover",
        filled: "border-transparent bg-surface-muted hover:border-border-default",
        glass:
          "border-material-glass-border bg-material-glass-surface backdrop-blur-midas-md hover:border-border-default",
      },
      tone: {
        brand:
          "focus-visible:focus-ring data-[state=checked]:border-selection-border data-[state=checked]:bg-selection-bg data-[state=checked]:shadow-focus-ring",
        neutral:
          "focus-visible:focus-ring-neutral data-[state=checked]:border-border-strong data-[state=checked]:bg-surface-muted data-[state=checked]:shadow-focus-ring-neutral",
      },
      layout: {
        horizontal: "flex-row items-start",
        vertical: "flex-col items-stretch",
      },
    },
    defaultVariants: {
      appearance: "outline",
      tone: "brand",
      layout: "horizontal",
    },
  },
);

type ChoiceCardStyle = Pick<
  VariantProps<typeof choiceCardVariants>,
  "appearance" | "tone" | "layout"
>;

const ChoiceCardContext = React.createContext<ChoiceCardStyle>({});

export type ChoiceCardGroupProps = React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> &
  ChoiceCardStyle & {
    columns?: 1 | 2 | 3;
  };

const columnClasses = {
  1: "grid-cols-1",
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
};

export const ChoiceCardGroup = React.forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitive.Root>,
  ChoiceCardGroupProps
>(({ className, appearance, tone, layout, columns = 1, ...props }, ref) => {
  const style = React.useMemo(() => ({ appearance, tone, layout }), [appearance, tone, layout]);
  return (
    <ChoiceCardContext.Provider value={style}>
      <RadioGroupPrimitive.Root
        ref={ref}
        data-slot="choice-card-group"
        className={cn("grid gap-3", columnClasses[columns], className)}
        {...props}
      />
    </ChoiceCardContext.Provider>
  );
});
ChoiceCardGroup.displayName = "ChoiceCardGroup";

type ChoiceCardBaseProps = ChoiceCardStyle & {
  title: React.ReactNode;
  description?: React.ReactNode;
  icon?: React.ReactNode;
  illustration?: React.ReactNode;
};

interface ChoiceCardContentProps {
  titleId: string;
  descriptionId: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  icon?: React.ReactNode;
  illustration?: React.ReactNode;
  vertical: boolean;
  indicator: React.ReactNode;
}

function ChoiceCardContent({
  titleId,
  descriptionId,
  title,
  description,
  icon,
  illustration,
  vertical,
  indicator,
}: ChoiceCardContentProps) {
  const media = illustration ? (
    <span
      data-slot="choice-card-illustration"
      aria-hidden="true"
      className="flex size-18 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border-subtle bg-surface-canvas"
    >
      {illustration}
    </span>
  ) : icon ? (
    <span
      data-slot="choice-card-icon"
      aria-hidden="true"
      className="flex size-10 shrink-0 items-center justify-center rounded-overlay bg-surface-muted text-content-primary group-data-[state=checked]/choice-card:bg-surface-canvas group-data-[state=checked]/choice-card:text-selection-content group-data-[tone=neutral]/choice-card:group-data-[state=checked]/choice-card:text-content-primary [&_svg:not([class*='size-'])]:size-icon-lg"
    >
      {icon}
    </span>
  ) : null;
  const text = (
    <span className="flex min-w-0 flex-1 flex-col gap-0.5">
      <span
        id={titleId}
        className="text-label-md text-content-primary group-disabled/choice-card:text-content-disabled"
      >
        {title}
      </span>
      {description ? (
        <span
          id={descriptionId}
          className="text-body-sm text-content-secondary group-disabled/choice-card:text-content-disabled"
        >
          {description}
        </span>
      ) : null}
    </span>
  );
  if (vertical) {
    return (
      <>
        <span className="flex items-start justify-between gap-3">
          {media}
          {indicator}
        </span>
        {text}
      </>
    );
  }
  return (
    <>
      {media}
      {text}
      {indicator}
    </>
  );
}

const indicatorBase =
  "mt-0.5 ms-auto flex size-5 shrink-0 items-center justify-center border border-border-default bg-surface-canvas transition-[background-color,border-color] duration-150 motion-reduce:transition-none";

const indicatorChecked =
  "group-data-[state=checked]/choice-card:border-selection-fill group-data-[state=checked]/choice-card:bg-selection-fill group-data-[state=checked]/choice-card:text-selection-on-fill group-data-[tone=neutral]/choice-card:group-data-[state=checked]/choice-card:border-action-primary-bg group-data-[tone=neutral]/choice-card:group-data-[state=checked]/choice-card:bg-action-primary-bg group-data-[tone=neutral]/choice-card:group-data-[state=checked]/choice-card:text-action-primary-content group-disabled/choice-card:border-disabled-border group-disabled/choice-card:bg-disabled-bg";

function useCardStyle(props: ChoiceCardStyle) {
  const context = React.useContext(ChoiceCardContext);
  return {
    appearance: props.appearance ?? context.appearance ?? "outline",
    tone: props.tone ?? context.tone ?? "brand",
    layout: props.layout ?? context.layout ?? "horizontal",
  } as const;
}

export interface ChoiceCardProps
  extends Omit<
      React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>,
      "title" | "children"
    >,
    ChoiceCardBaseProps {}

export const ChoiceCard = React.forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitive.Item>,
  ChoiceCardProps
>(
  (
    { className, title, description, icon, illustration, appearance, tone, layout, ...props },
    ref,
  ) => {
    const id = React.useId();
    const titleId = `${id}-title`;
    const descriptionId = `${id}-description`;
    const style = useCardStyle({ appearance, tone, layout });
    return (
      <RadioGroupPrimitive.Item
        ref={ref}
        data-slot="choice-card"
        data-tone={style.tone}
        aria-labelledby={titleId}
        aria-describedby={description ? descriptionId : undefined}
        className={cn(choiceCardVariants(style), className)}
        {...props}
      >
        <ChoiceCardContent
          titleId={titleId}
          descriptionId={descriptionId}
          title={title}
          description={description}
          icon={icon}
          illustration={illustration}
          vertical={style.layout === "vertical"}
          indicator={
            <span
              data-slot="choice-card-indicator"
              aria-hidden="true"
              className={cn(indicatorBase, "rounded-pill", indicatorChecked)}
            >
              <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
                <span className="size-2 rounded-pill bg-selection-on-fill group-data-[tone=neutral]/choice-card:bg-action-primary-content" />
              </RadioGroupPrimitive.Indicator>
            </span>
          }
        />
      </RadioGroupPrimitive.Item>
    );
  },
);
ChoiceCard.displayName = "ChoiceCard";

export interface ChoiceCardCheckboxProps
  extends Omit<React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>, "title" | "children">,
    ChoiceCardBaseProps {}

export const ChoiceCardCheckbox = React.forwardRef<
  React.ComponentRef<typeof CheckboxPrimitive.Root>,
  ChoiceCardCheckboxProps
>(
  (
    { className, title, description, icon, illustration, appearance, tone, layout, ...props },
    ref,
  ) => {
    const id = React.useId();
    const titleId = `${id}-title`;
    const descriptionId = `${id}-description`;
    const style = useCardStyle({ appearance, tone, layout });
    return (
      <CheckboxPrimitive.Root
        ref={ref}
        data-slot="choice-card"
        data-tone={style.tone}
        aria-labelledby={titleId}
        aria-describedby={description ? descriptionId : undefined}
        className={cn(choiceCardVariants(style), className)}
        {...props}
      >
        <ChoiceCardContent
          titleId={titleId}
          descriptionId={descriptionId}
          title={title}
          description={description}
          icon={icon}
          illustration={illustration}
          vertical={style.layout === "vertical"}
          indicator={
            <span
              data-slot="choice-card-indicator"
              aria-hidden="true"
              className={cn(indicatorBase, "rounded-xs", indicatorChecked)}
            >
              <CheckboxPrimitive.Indicator className="flex items-center justify-center">
                <IconCheck stroke={3} className="size-icon-xs" />
              </CheckboxPrimitive.Indicator>
            </span>
          }
        />
      </CheckboxPrimitive.Root>
    );
  },
);
ChoiceCardCheckbox.displayName = "ChoiceCardCheckbox";
