"use client";

import * as React from "react";
import { cn } from "../../lib/cn";
import { Checkbox } from "../checkbox/checkbox";
import { RadioGroupItem } from "../radio-group/radio-group";
import { Switch } from "../switch/switch";

export type SelectionFieldControl = "checkbox" | "radio" | "toggle";
export type SelectionFieldAppearance = "plain" | "card";
export type SelectionFieldTone = "brand" | "neutral";

export interface SelectionFieldProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange" | "defaultValue" | "title"> {
  label: React.ReactNode;
  description?: React.ReactNode;
  errorMessage?: React.ReactNode;
  icon?: React.ReactNode;
  control?: SelectionFieldControl;
  appearance?: SelectionFieldAppearance;
  tone?: SelectionFieldTone;
  invalid?: boolean;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  value?: string;
  checked?: boolean | "indeterminate";
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  controlId?: string;
}

export const SelectionField = React.forwardRef<HTMLDivElement, SelectionFieldProps>(
  (
    {
      className,
      label,
      description,
      errorMessage,
      icon,
      control = "checkbox",
      appearance = "plain",
      tone = "brand",
      invalid = false,
      disabled = false,
      required,
      name,
      value,
      checked,
      defaultChecked,
      onCheckedChange,
      controlId,
      ...props
    },
    ref,
  ) => {
    const generatedId = React.useId();
    const id = controlId ?? generatedId;
    const descriptionId = `${id}-description`;
    const hasInvalid = invalid || errorMessage !== undefined;
    const supportingText = hasInvalid && errorMessage !== undefined ? errorMessage : description;
    const card = appearance === "card";

    const controlProps = {
      id,
      disabled,
      required,
      name,
      value,
      "aria-invalid": hasInvalid || undefined,
      "aria-describedby": supportingText ? descriptionId : undefined,
      tone,
    };

    const controlElement =
      control === "radio" ? (
        <RadioGroupItem {...controlProps} value={value ?? id} />
      ) : control === "toggle" ? (
        <Switch
          {...controlProps}
          checked={checked === "indeterminate" ? undefined : checked}
          defaultChecked={defaultChecked}
          onCheckedChange={onCheckedChange}
        />
      ) : (
        <Checkbox
          {...controlProps}
          checked={checked}
          defaultChecked={defaultChecked}
          onCheckedChange={onCheckedChange ? (state) => onCheckedChange(state === true) : undefined}
        />
      );

    const iconTile = icon ? (
      <span
        data-slot="selection-field-icon"
        className="flex size-10 shrink-0 items-center justify-center rounded-overlay bg-surface-muted text-content-primary [&_svg:not([class*='size-'])]:size-icon-md"
      >
        {icon}
      </span>
    ) : null;

    const text = (
      <span data-slot="selection-field-text" className="flex min-w-0 flex-1 flex-col gap-0.5">
        <label
          htmlFor={id}
          className={cn(
            "text-label-md text-content-primary",
            disabled ? "cursor-not-allowed text-content-disabled" : "cursor-pointer",
          )}
        >
          {label}
        </label>
        {supportingText ? (
          <span
            id={descriptionId}
            className={cn(
              "text-body-sm",
              hasInvalid ? "text-status-danger-content" : "text-content-secondary",
            )}
          >
            {supportingText}
          </span>
        ) : null}
      </span>
    );

    return (
      <div
        ref={ref}
        data-slot="selection-field"
        data-control={control}
        data-appearance={appearance}
        data-invalid={hasInvalid || undefined}
        data-disabled={disabled || undefined}
        className={cn(
          "flex items-start gap-3",
          card &&
            "rounded-container border border-border-default bg-surface-default px-4 py-3.5 transition-colors duration-150 motion-reduce:transition-none",
          card &&
            control !== "toggle" &&
            "has-[[data-state=checked]]:border-selection-border has-[[data-state=checked]]:bg-selection-bg",
          card &&
            hasInvalid &&
            "border-status-danger-fill has-[[data-state=checked]]:border-status-danger-fill",
          className,
        )}
        {...props}
      >
        {card ? iconTile : null}
        {control === "toggle" ? (
          <>
            {text}
            {controlElement}
          </>
        ) : (
          <>
            <span className="flex h-5 items-center">{controlElement}</span>
            {text}
          </>
        )}
      </div>
    );
  },
);
SelectionField.displayName = "SelectionField";
