import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "../../lib/cn";

export const formLayoutVariants = cva("grid gap-4", {
  variants: {
    columns: {
      1: "grid-cols-1",
      2: "grid-cols-1 md:grid-cols-2",
      3: "grid-cols-1 md:grid-cols-3",
    },
  },
  defaultVariants: {
    columns: 1,
  },
});

export interface FormLayoutProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof formLayoutVariants> {}

export const FormLayout = React.forwardRef<HTMLDivElement, FormLayoutProps>(
  ({ className, columns, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="form-layout"
      className={cn(formLayoutVariants({ columns }), className)}
      {...props}
    />
  ),
);
FormLayout.displayName = "FormLayout";

export interface FormLayoutItemProps extends React.HTMLAttributes<HTMLDivElement> {
  span?: "auto" | "full";
}

export const FormLayoutItem = React.forwardRef<HTMLDivElement, FormLayoutItemProps>(
  ({ className, span = "auto", ...props }, ref) => (
    <div
      ref={ref}
      data-slot="form-layout-item"
      className={cn("min-w-0", span === "full" && "col-span-full", className)}
      {...props}
    />
  ),
);
FormLayoutItem.displayName = "FormLayoutItem";

export interface FormSectionProps
  extends Omit<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, "title"> {
  title: React.ReactNode;
  description?: React.ReactNode;
  layout?: "stacked" | "side-by-side";
}

export const FormSection = React.forwardRef<HTMLFieldSetElement, FormSectionProps>(
  ({ className, title, description, layout = "stacked", children, ...props }, ref) => {
    const titleId = React.useId();
    return (
      <fieldset
        ref={ref}
        aria-labelledby={titleId}
        data-slot="form-section"
        data-layout={layout}
        className={cn(
          "m-0 grid min-w-0 gap-4 border-0 p-0",
          layout === "side-by-side" && "md:grid-cols-[220px_minmax(0,1fr)] md:gap-8",
          className,
        )}
        {...props}
      >
        <div className="flex flex-col gap-1">
          <div id={titleId} className="text-heading-sm text-content-primary">
            {title}
          </div>
          {description ? (
            <p className="text-body-sm text-content-secondary">{description}</p>
          ) : null}
        </div>
        <div className="flex min-w-0 flex-col gap-5">{children}</div>
      </fieldset>
    );
  },
);
FormSection.displayName = "FormSection";

export const FormActions = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="form-actions"
      className={cn("flex flex-col-reverse gap-3 sm:flex-row sm:justify-end", className)}
      {...props}
    />
  ),
);
FormActions.displayName = "FormActions";
