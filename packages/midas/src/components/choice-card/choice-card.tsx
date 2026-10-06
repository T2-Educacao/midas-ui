"use client";

import { Check } from "@phosphor-icons/react/ssr";
import { cva } from "class-variance-authority";
import { Checkbox as CheckboxPrimitive, RadioGroup as RadioGroupPrimitive } from "radix-ui";
import * as React from "react";
import { cn } from "../../lib/cn";

export const choiceCardVariants = cva([
  "group/choice-card relative flex w-full items-start gap-3 rounded-lg border border-input bg-background p-4 text-start outline-none",
  "transition-[color,background-color,border-color,box-shadow] duration-150 motion-reduce:transition-none",
  "hover:bg-accent/50",
  "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
  "disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-background",
  "aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20",
  "data-[state=checked]:border-primary data-[state=checked]:bg-primary/5 data-[state=checked]:ring-1 data-[state=checked]:ring-primary",
  "dark:bg-input/30",
]);

export type ChoiceCardGroupProps = React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>;

export const ChoiceCardGroup = React.forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitive.Root>,
  ChoiceCardGroupProps
>(({ className, ...props }, ref) => (
  <RadioGroupPrimitive.Root
    ref={ref}
    data-slot="choice-card-group"
    className={cn("grid gap-3", className)}
    {...props}
  />
));
ChoiceCardGroup.displayName = "ChoiceCardGroup";

interface ChoiceCardContentProps {
  titleId: string;
  descriptionId: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  icon?: React.ReactNode;
  indicator: React.ReactNode;
}

function ChoiceCardContent({
  titleId,
  descriptionId,
  title,
  description,
  icon,
  indicator,
}: ChoiceCardContentProps) {
  return (
    <>
      {icon ? (
        <span
          data-slot="choice-card-icon"
          aria-hidden="true"
          className="flex size-9 shrink-0 items-center justify-center rounded-md bg-muted text-foreground group-data-[state=checked]/choice-card:bg-primary group-data-[state=checked]/choice-card:text-primary-foreground [&_svg:not([class*='size-'])]:size-5"
        >
          {icon}
        </span>
      ) : null}
      <span className="flex min-w-0 flex-1 flex-col gap-1">
        <span id={titleId} className="text-sm font-medium leading-5 text-foreground">
          {title}
        </span>
        {description ? (
          <span id={descriptionId} className="text-sm leading-5 text-muted-foreground">
            {description}
          </span>
        ) : null}
      </span>
      {indicator}
    </>
  );
}

type ChoiceCardBaseProps = {
  title: React.ReactNode;
  description?: React.ReactNode;
  icon?: React.ReactNode;
};

export interface ChoiceCardProps
  extends Omit<
      React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>,
      "title" | "children"
    >,
    ChoiceCardBaseProps {}

export const ChoiceCard = React.forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitive.Item>,
  ChoiceCardProps
>(({ className, title, description, icon, ...props }, ref) => {
  const id = React.useId();
  const titleId = `${id}-title`;
  const descriptionId = `${id}-description`;
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      data-slot="choice-card"
      aria-labelledby={titleId}
      aria-describedby={description ? descriptionId : undefined}
      className={cn(choiceCardVariants(), className)}
      {...props}
    >
      <ChoiceCardContent
        titleId={titleId}
        descriptionId={descriptionId}
        title={title}
        description={description}
        icon={icon}
        indicator={
          <span
            data-slot="choice-card-indicator"
            aria-hidden="true"
            className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full border border-input bg-background group-data-[state=checked]/choice-card:border-primary group-data-[state=checked]/choice-card:bg-primary"
          >
            <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
              <span className="size-2 rounded-full bg-primary-foreground" />
            </RadioGroupPrimitive.Indicator>
          </span>
        }
      />
    </RadioGroupPrimitive.Item>
  );
});
ChoiceCard.displayName = "ChoiceCard";

export interface ChoiceCardCheckboxProps
  extends Omit<React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>, "title" | "children">,
    ChoiceCardBaseProps {}

export const ChoiceCardCheckbox = React.forwardRef<
  React.ComponentRef<typeof CheckboxPrimitive.Root>,
  ChoiceCardCheckboxProps
>(({ className, title, description, icon, ...props }, ref) => {
  const id = React.useId();
  const titleId = `${id}-title`;
  const descriptionId = `${id}-description`;
  return (
    <CheckboxPrimitive.Root
      ref={ref}
      data-slot="choice-card"
      aria-labelledby={titleId}
      aria-describedby={description ? descriptionId : undefined}
      className={cn(choiceCardVariants(), className)}
      {...props}
    >
      <ChoiceCardContent
        titleId={titleId}
        descriptionId={descriptionId}
        title={title}
        description={description}
        icon={icon}
        indicator={
          <span
            data-slot="choice-card-indicator"
            aria-hidden="true"
            className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-[4px] border border-input bg-background group-data-[state=checked]/choice-card:border-primary group-data-[state=checked]/choice-card:bg-primary group-data-[state=checked]/choice-card:text-primary-foreground"
          >
            <CheckboxPrimitive.Indicator className="flex items-center justify-center">
              <Check weight="bold" className="size-3" />
            </CheckboxPrimitive.Indicator>
          </span>
        }
      />
    </CheckboxPrimitive.Root>
  );
});
ChoiceCardCheckbox.displayName = "ChoiceCardCheckbox";
