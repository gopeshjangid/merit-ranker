import { BaseTogglePlugin } from '@platejs/toggle';

import { ToggleElementStatic } from '@/features/presentations/plate/ui/toggle-node-static';

export const BaseToggleKit = [
  BaseTogglePlugin.withComponent(ToggleElementStatic),
];
