"use client";

import { IconChevronDown } from "@tabler/icons-react";
import { cva } from "class-variance-authority";
import { Accordion as AccordionPrimitive } from "radix-ui";
import * as React from "react";
import { cn } from "../../lib/cn";

export type AccordionVariant = "faq" | "cards" | "filled" | "glass" | "module";
export type AccordionTone = "brand" | "neutral";

export const accordionVariants = cva("group/accordion flex w-full flex-col", {
  variants: {
    variant: {
      faq: "[--acc-px:0px]",
      cards: "gap-2 [--acc-px:var(--midas-space-4)]",
      filled: "gap-2 [--acc-px:var(--midas-space-4)]",
      glass: "gap-2 [--acc-px:var(--midas-space-4)]",
      module:
        "overflow-hidden rounded-container border border-border-subtle bg-surface-default [--acc-px:var(--midas-space-4)]",
    },
  },
  defaultVariants: { variant: "faq" },
});

type AccordionRootProps = React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root>;

export type AccordionProps = AccordionRootProps & {
  variant?: AccordionVariant;
  tone?: AccordionTone;
};

export const Accordion = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Root>,
  AccordionProps
>(({ className, variant = "faq", tone = "brand", ...props }, ref) => (
  <AccordionPrimitive.Root
    ref={ref}
    data-slot="accordion"
    data-variant={variant}
    data-tone={tone}
    className={cn(accordionVariants({ variant }), className)}
    {...(props as AccordionRootProps)}
  />
));
Accordion.displayName = "Accordion";

export const AccordionItem = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    data-slot="accordion-item"
    className={cn(
      "group-data-[variant=faq]/accordion:border-b group-data-[variant=faq]/accordion:border-border-subtle group-data-[variant=faq]/accordion:last:border-b-0",
      "group-data-[variant=module]/accordion:border-b group-data-[variant=module]/accordion:border-border-subtle group-data-[variant=module]/accordion:last:border-b-0",
      "group-data-[variant=cards]/accordion:rounded-container group-data-[variant=cards]/accordion:border group-data-[variant=cards]/accordion:border-border-subtle group-data-[variant=cards]/accordion:bg-surface-default group-data-[variant=cards]/accordion:shadow-elevation-card",
      "group-data-[variant=filled]/accordion:rounded-container group-data-[variant=filled]/accordion:bg-surface-muted",
      "group-data-[variant=glass]/accordion:material-glass group-data-[variant=glass]/accordion:rounded-container group-data-[variant=glass]/accordion:border group-data-[variant=glass]/accordion:border-material-glass-border",
      className,
    )}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

export interface AccordionTriggerProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> {
  icon?: React.ReactNode;
  meta?: React.ReactNode;
}

export const AccordionTrigger = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Trigger>,
  AccordionTriggerProps
>(({ className, children, icon, meta, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      data-slot="accordion-trigger"
      className={cn(
        "group/accordion-trigger flex flex-1 items-center justify-between gap-4 rounded-control px-(--acc-px) py-4 text-start text-label-md text-content-primary outline-none",
        "transition-[color,background-color,border-color,box-shadow] duration-150 motion-reduce:transition-none",
        "hover:text-content-primary focus-visible:focus-ring",
        "group-data-[variant=cards]/accordion:hover:bg-state-hover group-data-[variant=filled]/accordion:hover:bg-state-hover group-data-[variant=glass]/accordion:hover:bg-state-hover group-data-[variant=module]/accordion:hover:bg-state-hover",
        "disabled:pointer-events-none disabled:text-content-disabled",
        className,
      )}
      {...props}
    >
      {icon ? (
        <span
          data-slot="accordion-icon"
          className="flex shrink-0 text-content-secondary [&_svg:not([class*='size-'])]:size-icon-md"
        >
          {icon}
        </span>
      ) : null}
      <span className="min-w-0 flex-1">{children}</span>
      {meta ? (
        <span data-slot="accordion-meta" className="shrink-0 text-mono-sm text-content-secondary">
          {meta}
        </span>
      ) : null}
      <IconChevronDown
        aria-hidden="true"
        className={cn(
          "pointer-events-none size-icon-sm shrink-0 text-content-secondary transition-transform duration-200 motion-reduce:transition-none",
          "group-data-[state=open]/accordion-trigger:rotate-180",
          "group-data-[state=open]/accordion-trigger:group-data-[tone=brand]/accordion:text-selection-content",
          "group-data-[state=open]/accordion-trigger:group-data-[tone=neutral]/accordion:text-content-primary",
        )}
      />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = "AccordionTrigger";

export const AccordionContent = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    data-slot="accordion-content"
    className="overflow-hidden text-body-md text-content-secondary"
    {...props}
  >
    <div className={cn("px-(--acc-px) pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = "AccordionContent";
