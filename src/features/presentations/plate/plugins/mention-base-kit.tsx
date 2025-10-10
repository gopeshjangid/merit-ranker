import { BaseMentionPlugin } from "@platejs/mention";

import { MentionElementStatic } from "@/features/presentations/components/plate/ui/mention-node-static";

export const BaseMentionKit = [
  BaseMentionPlugin.withComponent(MentionElementStatic),
];
