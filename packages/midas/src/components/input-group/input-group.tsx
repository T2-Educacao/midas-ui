"use client";

import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "../../lib/cn";
import { Button, type ButtonProps } from "../button/button";

export const InputGroup = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      role="group"
      data-slot="input-group"
      className={cn(
        "group/input-group relative flex h-8 w-full min-w-0 items-center rounded-lg border border-input bg-transparent outline-none",
        "transition-[color,border-color,box-shadow] duration-150 motion-reduce:transition-none dark:bg-input/30",
        "has-[>textarea]:h-auto",
        "has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50",
        "has-[[data-slot][aria-invalid=true]]:border-destructive has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-destructive/20",
        "has-[[data-slot=input-group-control]:disabled]:bg-input/50 has-[[data-slot=input-group-control]:disabled]:opacity-50",
        className,
      )}
      {...props}
    />
  ),
);
InputGroup.displayName = "InputGroup";

export const inputGroupAddonVariants = cva(
  [
    "flex h-auto cursor-text select-none items-center justify-center gap-2 py-1.5 text-sm font-medium text-foreground",
    "[&>svg]:text-muted-foreground [&>svg:not([class*='size-'])]:size-4",
    "group-has-[[data-slot=input-group-control]:disabled]/input-group:opacity-50",
  ],
  {
    variants: {
      align: {
        start: "order-first pl-2 has-[>button]:-ml-1",
        end: "order-last pr-2 has-[>button]:-mr-1",
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
      "h-full min-w-0 flex-1 border-0 bg-transparent px-2 py-1.5 text-sm text-foreground outline-none",
      "placeholder:text-muted-foreground disabled:cursor-not-allowed",
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
      "field-sizing-content min-h-16 w-full flex-1 resize-none border-0 bg-transparent px-2.5 py-2 text-sm text-foreground outline-none",
      "placeholder:text-muted-foreground disabled:cursor-not-allowed",
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
      "flex items-center gap-2 text-sm text-muted-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
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
