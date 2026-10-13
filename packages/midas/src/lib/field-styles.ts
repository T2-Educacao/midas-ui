import { cva, type VariantProps } from "class-variance-authority";

export type FieldSize = "sm" | "md" | "lg";
export type FieldAppearance = "outline" | "filled" | "glass";
export type FieldTone = "brand" | "neutral";
export type FieldShape = "rounded" | "pill";

const surface = [
  "w-full min-w-0 border text-content-primary outline-none",
  "transition-[color,background-color,border-color,box-shadow] duration-150 motion-reduce:transition-none",
];

const appearance = {
  outline:
    "border-border-subtle bg-field-bg shadow-elevation-control hover:border-border-default hover:bg-field-bg-hover",
  filled: "border-transparent bg-surface-muted hover:border-border-default",
  glass:
    "border-material-glass-border bg-material-glass-surface backdrop-blur-midas-md hover:border-border-default",
};

const shape = {
  rounded: "rounded-control",
  pill: "rounded-pill",
};

export const fieldControlVariants = cva(
  [
    ...surface,
    "placeholder:text-content-secondary",
    "disabled:pointer-events-none disabled:cursor-not-allowed disabled:border-disabled-border disabled:bg-disabled-bg disabled:text-content-disabled disabled:shadow-none disabled:backdrop-blur-none",
    "aria-invalid:border-status-danger-border",
    "data-[success=true]:border-status-success-border",
  ],
  {
    variants: {
      size: {
        sm: "h-control-lg text-body-md",
        md: "h-control-xl text-body-lg",
        lg: "h-control-2xl text-body-lg",
      },
      appearance,
      tone: {
        brand: "focus-visible:focus-ring aria-invalid:focus-visible:focus-ring-danger",
        neutral: "focus-visible:focus-ring-neutral aria-invalid:focus-visible:focus-ring-danger",
      },
      shape,
    },
    compoundVariants: [
      { shape: "rounded", size: "sm", className: "gap-2 px-3" },
      { shape: "rounded", size: "md", className: "gap-2 px-3.5" },
      { shape: "rounded", size: "lg", className: "gap-2.5 px-4" },
      { shape: "pill", size: "sm", className: "gap-2 px-4" },
      { shape: "pill", size: "md", className: "gap-2 px-4.5" },
      { shape: "pill", size: "lg", className: "gap-2.5 px-5" },
    ],
    defaultVariants: {
      size: "md",
      appearance: "outline",
      tone: "brand",
      shape: "rounded",
    },
  },
);

export const fieldGroupVariants = cva(
  [
    ...surface,
    "flex items-center",
    "has-[[data-slot=input-group-control]:disabled]:cursor-not-allowed has-[[data-slot=input-group-control]:disabled]:border-disabled-border has-[[data-slot=input-group-control]:disabled]:bg-disabled-bg has-[[data-slot=input-group-control]:disabled]:text-content-disabled has-[[data-slot=input-group-control]:disabled]:shadow-none",
    "has-[[data-slot][aria-invalid=true]]:border-status-danger-border",
    "data-[success=true]:border-status-success-border",
  ],
  {
    variants: {
      size: {
        sm: "h-control-lg text-body-md",
        md: "h-control-xl text-body-lg",
        lg: "h-control-2xl text-body-lg",
      },
      appearance,
      tone: {
        brand:
          "has-[[data-slot=input-group-control]:focus-visible]:focus-ring has-[[data-slot][aria-invalid=true]:focus-visible]:focus-ring-danger",
        neutral:
          "has-[[data-slot=input-group-control]:focus-visible]:focus-ring-neutral has-[[data-slot][aria-invalid=true]:focus-visible]:focus-ring-danger",
      },
      shape,
    },
    compoundVariants: [
      { shape: "rounded", size: "sm", className: "gap-2 px-3" },
      { shape: "rounded", size: "md", className: "gap-2 px-3.5" },
      { shape: "rounded", size: "lg", className: "gap-2.5 px-4" },
      { shape: "pill", size: "sm", className: "gap-2 px-4" },
      { shape: "pill", size: "md", className: "gap-2 px-4.5" },
      { shape: "pill", size: "lg", className: "gap-2.5 px-5" },
    ],
    defaultVariants: {
      size: "md",
      appearance: "outline",
      tone: "brand",
      shape: "rounded",
    },
  },
);

export type FieldControlVariantProps = VariantProps<typeof fieldControlVariants>;
