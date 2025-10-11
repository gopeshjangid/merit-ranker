import { BaseMentionPlugin } from '@platejs/mention';

import { MentionElementStatic } from '@/features/presentations/plate/ui/mention-node-static';

export const BaseMentionKit = [
  BaseMentionPlugin.withComponent(MentionElementStatic),
];
