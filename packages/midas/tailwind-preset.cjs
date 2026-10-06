const color =
  (name) =>
  ({ opacityValue }) =>
    opacityValue === undefined || opacityValue === "1"
      ? `var(--midas-${name})`
      : `color-mix(in srgb, var(--midas-${name}) ${Number(opacityValue) * 100}%, transparent)`;

const names = [
  "background",
  "foreground",
  "card",
  "card-foreground",
  "popover",
  "popover-foreground",
  "primary",
  "primary-foreground",
  "secondary",
  "secondary-foreground",
  "muted",
  "muted-foreground",
  "accent",
  "accent-foreground",
  "destructive",
  "destructive-foreground",
  "success",
  "success-foreground",
  "warning",
  "warning-foreground",
  "info",
  "info-foreground",
  "border",
  "input",
  "ring",
  "chart-1",
  "chart-2",
  "chart-3",
  "chart-4",
  "chart-5",
  "chart-6",
  "chart-7",
  "chart-8",
];

module.exports = {
  theme: {
    extend: {
      colors: Object.fromEntries(names.map((name) => [name, color(name)])),
      borderRadius: {
        xs: "var(--midas-radius-xs)",
        sm: "var(--midas-radius-sm)",
        md: "var(--midas-radius-md)",
        lg: "var(--midas-radius-lg)",
        xl: "var(--midas-radius-xl)",
        "2xl": "var(--midas-radius-2xl)",
      },
      fontFamily: {
        sans: ["var(--midas-font-sans)"],
        mono: ["var(--midas-font-mono)"],
      },
    },
  },
};
