"use client";

import { Collapsible as CollapsiblePrimitive } from "radix-ui";
import * as React from "react";

export const Collapsible = React.forwardRef<
  React.ComponentRef<typeof CollapsiblePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Root>
>((props, ref) => <CollapsiblePrimitive.Root ref={ref} data-slot="collapsible" {...props} />);
Collapsible.displayName = "Collapsible";

export const CollapsibleTrigger = React.forwardRef<
  React.ComponentRef<typeof CollapsiblePrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Trigger>
>((props, ref) => (
  <CollapsiblePrimitive.Trigger ref={ref} data-slot="collapsible-trigger" {...props} />
));
CollapsibleTrigger.displayName = "CollapsibleTrigger";

export const CollapsibleContent = React.forwardRef<
  React.ComponentRef<typeof CollapsiblePrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Content>
>((props, ref) => (
  <CollapsiblePrimitive.Content ref={ref} data-slot="collapsible-content" {...props} />
));
CollapsibleContent.displayName = "CollapsibleContent";
