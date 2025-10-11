import { BaseCalloutPlugin } from '@platejs/callout';

import { CalloutElementStatic } from '@/features/presentations/plate/ui/callout-node-static';

export const BaseCalloutKit = [
  BaseCalloutPlugin.withComponent(CalloutElementStatic),
];
