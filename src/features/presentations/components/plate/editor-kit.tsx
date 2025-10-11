'use client';

import { type Value, TrailingBlockPlugin } from 'platejs';
import { type TPlateEditor, useEditorRef } from 'platejs/react';

import { AIKit } from '@/features/presentations/components/plate/plugins/ai-kit';
import { AlignKit } from '@/components/editor/plugins/align-kit';
import { AutoformatKit } from '@/features/presentations/components/plate/plugins/autoformat-kit';
import { BasicBlocksKit } from '@/components/editor/plugins/basic-blocks-kit';
import { BasicMarksKit } from '@/features/presentations/components/plate/plugins/basic-marks-kit';
import { BlockMenuKit } from '@/features/presentations/components/plate/plugins/block-menu-kit';
import { BlockPlaceholderKit } from '@/features/presentations/components/plate/plugins/block-placeholder-kit';
import { CalloutKit } from '@/features/presentations/components/plate/plugins/callout-kit';
import { CodeBlockKit } from '@/features/presentations/components/plate/plugins/code-block-kit';
import { ColumnKit } from '@/features/presentations/components/plate/plugins/column-kit';
import { CommentKit } from '@/features/presentations/components/plate/plugins/comment-kit';
// import { CopilotKit } from "@/features/presentations/components/plate/plugins/copilot-kit";
import { CursorOverlayKit } from '@/features/presentations/components/plate/plugins/cursor-overlay-kit';
import { DateKit } from '@/features/presentations/components/plate/plugins/date-kit';
import { DiscussionKit } from '@/features/presentations/components/plate/plugins/discussion-kit';
import { DndKit } from '@/features/presentations/components/plate/plugins/dnd-kit';
import { ExitBreakKit } from '@/components/editor/plugins/exit-break-kit';
import { FixedToolbarKit } from '@/features/presentations/components/plate/plugins/fixed-toolbar-kit';
import { FloatingToolbarKit } from '@/features/presentations/components/plate/plugins/floating-toolbar-kit';
import { FontKit } from '@/features/presentations/components/plate/plugins/font-kit';
import { LineHeightKit } from '@/components/editor/plugins/line-height-kit';
import { LinkKit } from '@/features/presentations/components/plate/plugins/link-kit';
import { ListKit } from '@/features/presentations/components/plate/plugins/list-kit';
import { MarkdownKit } from '@/features/presentations/components/plate/plugins/markdown-kit';
import { MathKit } from '@/features/presentations/components/plate/plugins/math-kit';
import { MediaKit } from '@/components/editor/plugins/media-kit';
import { MentionKit } from '@/features/presentations/components/plate/plugins/mention-kit';
import { SlashKit } from '@/features/presentations/components/plate/plugins/slash-kit';
import { SuggestionKit } from '@/features/presentations/components/plate/plugins/suggestion-kit';
import { TableKit } from '@/features/presentations/components/plate/plugins/table-kit';
import { TocKit } from '@/features/presentations/components/plate/plugins/toc-kit';
import { ToggleKit } from '@/features/presentations/components/plate/plugins/toggle-kit';

export const EditorKit = [
  // ...CopilotKit,
  ...AIKit,

  // Elements
  ...BasicBlocksKit,
  ...CodeBlockKit,
  ...TableKit,
  ...ToggleKit,
  ...TocKit,
  ...MediaKit,
  ...CalloutKit,
  ...ColumnKit,
  ...MathKit,
  ...DateKit,
  ...LinkKit,
  ...MentionKit,

  // Marks
  ...BasicMarksKit,
  ...FontKit,

  // Block Style
  ...ListKit,
  ...AlignKit,
  ...LineHeightKit,

  // Collaboration
  ...DiscussionKit,
  ...CommentKit,
  ...SuggestionKit,

  // Editing
  ...SlashKit,
  ...AutoformatKit,
  ...CursorOverlayKit,
  ...BlockMenuKit,
  ...DndKit,
  ...ExitBreakKit,
  TrailingBlockPlugin,

  // Parsers
  ...MarkdownKit,

  // UI
  ...BlockPlaceholderKit,
  ...FixedToolbarKit,
  ...FloatingToolbarKit,
];

export type MyEditor = TPlateEditor<Value, (typeof EditorKit)[number]>;

export const useEditor = () => useEditorRef<MyEditor>();
