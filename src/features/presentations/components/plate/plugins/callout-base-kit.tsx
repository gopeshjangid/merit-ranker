import { BaseCalloutPlugin } from "@platejs/callout";

import { CalloutElementStatic } from "@/features/presentations/components/plate/ui/callout-node-static";

export const BaseCalloutKit = [
  BaseCalloutPlugin.withComponent(CalloutElementStatic),
];
