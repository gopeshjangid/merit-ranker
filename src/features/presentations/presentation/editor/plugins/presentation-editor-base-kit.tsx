import { BaseAlignKit } from '@/features/presentations/components/plate/plugins/align-base-kit';
import { BaseBasicMarksKit } from '@/features/presentations/components/plate/plugins/basic-marks-base-kit';
import { BaseCalloutKit } from '@/features/presentations/components/plate/plugins/callout-base-kit';
import { BaseCodeBlockKit } from '@/features/presentations/components/plate/plugins/code-block-base-kit';
import { BaseColumnKit } from '@/features/presentations/components/plate/plugins/column-base-kit';
import { BaseCommentKit } from '@/features/presentations/components/plate/plugins/comment-base-kit';
import { BaseDateKit } from '@/features/presentations/components/plate/plugins/date-base-kit';
import { BaseFontKit } from '@/features/presentations/components/plate/plugins/font-base-kit';
import { BaseLineHeightKit } from '@/features/presentations/components/plate/plugins/line-height-base-kit';
import { BaseLinkKit } from '@/features/presentations/components/plate/plugins/link-base-kit';
import { BaseListKit } from '@/features/presentations/components/plate/plugins/list-base-kit';
import { MarkdownKit } from '@/features/presentations/components/plate/plugins/markdown-kit';
import { BaseMathKit } from '@/features/presentations/components/plate/plugins/math-base-kit';
import { BaseMediaKit } from '@/features/presentations/components/plate/plugins/media-base-kit';
import { BaseMentionKit } from '@/features/presentations/components/plate/plugins/mention-base-kit';
import { BaseSuggestionKit } from '@/features/presentations/components/plate/plugins/suggestion-base-kit';
import { BaseTocKit } from '@/features/presentations/components/plate/plugins/toc-base-kit';
import { BaseToggleKit } from '@/features/presentations/components/plate/plugins/toggle-base-kit';
import { PresentationBasicBlocksBaseKit } from './presentation-basic-blocks-base-kit';

// Presentation-focused BaseEditorKit using presentation static components for headings/paragraphs
export const PresentationEditorBaseKit = [
  ...PresentationBasicBlocksBaseKit,
  ...BaseCodeBlockKit,
  ...BaseToggleKit,
  ...BaseTocKit,
  ...BaseMediaKit,
  ...BaseCalloutKit,
  ...BaseColumnKit,
  ...BaseMathKit,
  ...BaseDateKit,
  ...BaseLinkKit,
  ...BaseMentionKit,
  ...BaseBasicMarksKit,
  ...BaseFontKit,
  ...BaseListKit,
  ...BaseAlignKit,
  ...BaseLineHeightKit,
  ...BaseCommentKit,
  ...BaseSuggestionKit,
  ...MarkdownKit,
];
