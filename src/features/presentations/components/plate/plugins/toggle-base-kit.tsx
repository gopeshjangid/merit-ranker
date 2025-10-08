import { BaseTogglePlugin } from "@platejs/toggle";

import { ToggleElementStatic } from "@/features/presentations/components/plate/ui/toggle-node-static";

export const BaseToggleKit = [
  BaseTogglePlugin.withComponent(ToggleElementStatic),
];
