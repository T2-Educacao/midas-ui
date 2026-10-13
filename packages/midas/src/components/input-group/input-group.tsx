"use client";

import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "../../lib/cn";
import { fieldGroupVariants } from "../../lib/field-styles";
import { Button, type ButtonProps } from "../button/button";

export const inputGroupVariants = fieldGroupVariants;

export interface InputGroupProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof inputGroupVariants> {
  success?: boolean;
}

export const InputGroup = React.forwardRef<HTMLDivElement, InputGroupProps>(
  ({ className, size, appearance, tone, shape, success, ...props }, ref) => (
    <div
      ref={ref}
      role="group"
      data-slot="input-group"
      data-success={success ? "true" : undefined}
      className={cn(
        inputGroupVariants({ size, appearance, tone, shape }),
        "group/input-group relative has-[>textarea]:h-auto",
        className,
      )}
      {...props}
    />
  ),
);
InputGroup.displayName = "InputGroup";

export const inputGroupAddonVariants = cva(
  [
    "flex h-auto cursor-text select-none items-center justify-center gap-2 py-1.5 text-label-md text-content-secondary",
    "[&>svg]:text-content-secondary [&>svg:not([class*='size-'])]:size-icon-md",
    "group-has-[[data-slot=input-group-control]:disabled]/input-group:text-content-disabled",
  ],
  {
    variants: {
      align: {
        start: "order-first pe-2 has-[>button]:-ms-1",
        end: "order-last ps-2 has-[>button]:-me-1",
      },
    },
    defaultVariants: {
      align: "start",
    },
  },
);

export interface InputGroupAddonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof inputGroupAddonVariants> {}

export const InputGroupAddon = React.forwardRef<HTMLDivElement, InputGroupAddonProps>(
  ({ className, align = "start", onClick, ...props }, ref) => (
    <div
      ref={ref}
      role="group"
      data-slot="input-group-addon"
      data-align={align}
      className={cn(inputGroupAddonVariants({ align }), className)}
      onClick={(event) => {
        onClick?.(event);
        if ((event.target as HTMLElement).closest("button")) return;
        event.currentTarget.parentElement
          ?.querySelector<HTMLInputElement>("[data-slot=input-group-control]")
          ?.focus();
      }}
      {...props}
    />
  ),
);
InputGroupAddon.displayName = "InputGroupAddon";

export const InputGroupInput = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type = "text", ...props }, ref) => (
  <input
    ref={ref}
    type={type}
    data-slot="input-group-control"
    className={cn(
      "h-full min-w-0 flex-1 border-0 bg-transparent p-0 text-[length:inherit] text-content-primary outline-none",
      "placeholder:text-content-secondary disabled:cursor-not-allowed disabled:text-content-disabled",
      className,
    )}
    {...props}
  />
));
InputGroupInput.displayName = "InputGroupInput";

export const InputGroupTextarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    data-slot="input-group-control"
    className={cn(
      "field-sizing-content min-h-24 w-full flex-1 resize-none border-0 bg-transparent py-3 text-[length:inherit] text-content-primary outline-none",
      "placeholder:text-content-secondary disabled:cursor-not-allowed disabled:text-content-disabled",
      className,
    )}
    {...props}
  />
));
InputGroupTextarea.displayName = "InputGroupTextarea";

export const InputGroupText = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    data-slot="input-group-text"
    className={cn(
      "flex items-center gap-2 text-body-sm text-content-secondary [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-icon-md",
      className,
    )}
    {...props}
  />
));
InputGroupText.displayName = "InputGroupText";

export const InputGroupButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "ghost", size = "xs", ...props }, ref) => (
    <Button
      ref={ref}
      data-slot="input-group-button"
      variant={variant}
      size={size}
      className={cn("shadow-none", className)}
      {...props}
    />
  ),
);
InputGroupButton.displayName = "InputGroupButton";
