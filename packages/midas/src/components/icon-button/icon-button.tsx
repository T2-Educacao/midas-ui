import * as React from "react";
import { Button, type ButtonProps } from "../button/button";

export type IconButtonSize = "xs" | "sm" | "md" | "lg" | "xl";
export type IconButtonShape = "rounded" | "circle";

export interface IconButtonProps extends Omit<ButtonProps, "size" | "rounded" | "filled"> {
  "aria-label": string;
  size?: IconButtonSize;
  shape?: IconButtonShape;
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ size = "md", shape = "rounded", ...props }, ref) => (
    <Button
      ref={ref}
      data-slot="icon-button"
      size={`icon-${size}`}
      rounded={shape === "circle"}
      {...props}
    />
  ),
);
IconButton.displayName = "IconButton";
