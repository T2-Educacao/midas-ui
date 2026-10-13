export type OverlayAppearance = "solid" | "glass";
export type OverlayTone = "brand" | "neutral";

export const overlayAppearance = {
  solid: "border-border-subtle bg-overlay-surface",
  glass: "border-material-glass-border bg-material-glass-surface backdrop-blur-midas-lg",
};

export const overlayScrimClasses =
  "fixed inset-0 z-(--midas-z-overlay) bg-material-scrim-bg animate-midas-fade motion-reduce:animate-none";

export const overlayHandleClasses = "mx-auto h-1.5 w-10 shrink-0 rounded-pill bg-border-default";
