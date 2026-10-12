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
    },
    conflictingClassGroups: {
      "midas-text-style": ["font-size", "leading", "font-weight", "tracking"],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
