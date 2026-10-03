"use client";

import { Direction as DirectionPrimitive } from "radix-ui";
import type * as React from "react";

export type Direction = "ltr" | "rtl";

export interface DirectionProviderProps {
  dir: Direction;
  children?: React.ReactNode;
}

export function DirectionProvider({ dir, children }: DirectionProviderProps) {
  return <DirectionPrimitive.Provider dir={dir}>{children}</DirectionPrimitive.Provider>;
}

export function useDirection(localDir?: Direction): Direction {
  return DirectionPrimitive.useDirection(localDir);
}
