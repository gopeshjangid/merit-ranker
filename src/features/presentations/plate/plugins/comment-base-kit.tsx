import { BaseCommentPlugin } from '@platejs/comment';

import { CommentLeafStatic } from '@/features/presentations/plate/ui/comment-node-static';

export const BaseCommentKit = [
  BaseCommentPlugin.withComponent(CommentLeafStatic),
];
