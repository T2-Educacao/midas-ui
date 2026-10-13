import { IconAlertCircle, IconCircleCheck } from "@tabler/icons-react";
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
      "flex select-none items-center gap-2 text-label-md text-content-primary",
      "peer-disabled:cursor-not-allowed peer-disabled:text-content-disabled",
      className,
    )}
    {...props}
  />
));
Label.displayName = "Label";

export const fieldVariants = cva("group/field flex w-full gap-1.5", {
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
      "w-fit has-[>[data-slot=badge]]:w-full group-data-[disabled=true]/field:text-content-disabled group-data-[invalid=true]/field:text-status-danger-content",
      "[&>[data-slot=badge]]:ms-auto",
      className,
    )}
    {...props}
  >
    {children}
    {required && (
      <span aria-hidden className="-ms-1 text-status-danger-content">
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
      "text-caption text-content-secondary group-data-[disabled=true]/field:text-content-disabled",
      "[&>a]:text-content-link [&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-content-primary",
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
      className={cn("flex items-start gap-1.5 text-caption text-status-danger-content", className)}
      {...props}
    >
      <IconAlertCircle aria-hidden="true" className="mt-px size-icon-sm shrink-0" />
      <span>{children}</span>
    </p>
  );
});
FieldError.displayName = "FieldError";

export const FieldSuccess = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  if (!children) return null;
  return (
    <p
      ref={ref}
      data-slot="field-success"
      className={cn("flex items-start gap-1.5 text-caption text-status-success-content", className)}
      {...props}
    >
      <IconCircleCheck aria-hidden="true" className="mt-px size-icon-sm shrink-0" />
      <span>{children}</span>
    </p>
  );
});
FieldSuccess.displayName = "FieldSuccess";

export const FieldCounter = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    data-slot="field-counter"
    className={cn(
      "ms-auto text-mono-sm text-content-secondary group-data-[invalid=true]/field:text-status-danger-content",
      className,
    )}
    {...props}
  />
));
FieldCounter.displayName = "FieldCounter";

export const FieldGroup = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="field-group"
      className={cn("flex w-full flex-col gap-5", className)}
      {...props}
    />
  ),
);
FieldGroup.displayName = "FieldGroup";
