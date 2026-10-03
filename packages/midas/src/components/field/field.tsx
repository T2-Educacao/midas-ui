import { cva, type VariantProps } from "class-variance-authority";
import { Label as LabelPrimitive } from "radix-ui";
import * as React from "react";
import { cn } from "../../lib/cn";

export const Label = React.forwardRef<
  React.ComponentRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    data-slot="label"
    className={cn(
      "flex select-none items-center gap-2 text-sm font-medium text-foreground",
      "peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
      className,
    )}
    {...props}
  />
));
Label.displayName = "Label";

export const fieldVariants = cva("group/field flex w-full gap-2", {
  variants: {
    orientation: {
      vertical: "flex-col",
      horizontal: "flex-row items-center [&>[data-slot=field-label]]:flex-auto",
    },
  },
  defaultVariants: {
    orientation: "vertical",
  },
});

export interface FieldProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof fieldVariants> {
  invalid?: boolean;
  disabled?: boolean;
}

export const Field = React.forwardRef<HTMLDivElement, FieldProps>(
  ({ className, orientation, invalid, disabled, ...props }, ref) => (
    <div
      ref={ref}
      role="group"
      data-slot="field"
      data-orientation={orientation ?? "vertical"}
      data-invalid={invalid || undefined}
      data-disabled={disabled || undefined}
      className={cn(fieldVariants({ orientation }), className)}
      {...props}
    />
  ),
);
Field.displayName = "Field";

export interface FieldLabelProps
  extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> {
  required?: boolean;
}

export const FieldLabel = React.forwardRef<
  React.ComponentRef<typeof LabelPrimitive.Root>,
  FieldLabelProps
>(({ className, required, children, ...props }, ref) => (
  <Label
    ref={ref}
    data-slot="field-label"
    className={cn(
      "w-fit has-[>[data-slot=badge]]:w-full group-data-[disabled=true]/field:opacity-50 group-data-[invalid=true]/field:text-destructive",
      "[&>[data-slot=badge]]:ms-auto",
      className,
    )}
    {...props}
  >
    {children}
    {required && (
      <span aria-hidden className="-ms-1 text-destructive">
        *
      </span>
    )}
  </Label>
));
FieldLabel.displayName = "FieldLabel";

export const FieldDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    data-slot="field-description"
    className={cn(
      "text-sm font-normal text-muted-foreground group-data-[disabled=true]/field:opacity-50",
      "[&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary",
      className,
    )}
    {...props}
  />
));
FieldDescription.displayName = "FieldDescription";

export const FieldError = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  if (!children) return null;
  return (
    <p
      ref={ref}
      role="alert"
      data-slot="field-error"
      className={cn("text-sm font-normal text-destructive", className)}
      {...props}
    >
      {children}
    </p>
  );
});
FieldError.displayName = "FieldError";

export const FieldGroup = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="field-group"
      className={cn("flex w-full flex-col gap-6", className)}
      {...props}
    />
  ),
);
FieldGroup.displayName = "FieldGroup";
