import { type ClassValue, clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const textStyles = [
  "display-lg",
  "display-md",
  "heading-xl",
  "heading-lg",
  "heading-md",
  "heading-sm",
  "body-lg",
  "body-md",
  "body-sm",
  "label-lg",
  "label-md",
  "label-sm",
  "caption",
  "mono-overline",
  "mono-sm",
  "mono-md",
];

const controlSizes = [
  "control-xs",
  "control-sm",
  "control-md",
  "control-lg",
  "control-xl",
  "control-2xl",
  "control-3xl",
  "control-4xl",
];
const iconSizes = ["icon-xs", "icon-sm", "icon-md", "icon-lg", "icon-xl"];

const twMerge = extendTailwindMerge<"midas-text-style">({
  extend: {
    classGroups: {
      "midas-text-style": textStyles.map((name) => `text-${name}`),
      shadow: [
        {
          shadow: [
            "elevation-control",
            "elevation-card",
            "elevation-raised",
            "elevation-overlay",
            "elevation-modal",
            "focus-ring",
            "focus-ring-danger",
            "focus-ring-neutral",
          ],
        },
      ],
      rounded: [{ rounded: ["control", "container", "overlay", "pill", "3xl"] }],
      h: [{ h: controlSizes }],
      "min-h": [{ "min-h": controlSizes }],
      size: [{ size: [...controlSizes, ...iconSizes] }],
    },
    conflictingClassGroups: {
      "midas-text-style": ["font-size", "leading", "font-weight", "tracking"],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
