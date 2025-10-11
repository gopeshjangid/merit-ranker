'use client';

import { BulletGroupPlugin, BulletItemPlugin } from './plugins/bullet-plugin';
import { CycleItemPlugin, CyclePlugin } from './plugins/cycle-plugin';
import { GeneratingPlugin } from './plugins/generating-plugin';
import { IconListItemPlugin, IconListPlugin } from './plugins/icon-list-plugin';
import { IconPlugin } from './plugins/icon-plugin';
import {
  StaircaseGroupPlugin,
  StairItemPlugin,
} from './plugins/staircase-plugin';
// Create presentation-specific plugins

import { AIKit } from '@/components/editor/plugins/ai-kit';
import { AlignKit } from '@/components/editor/plugins/align-kit';
import { AutoformatKit } from '@/components/editor/plugins/autoformat-kit';
import { BasicMarksKit } from '@/components/editor/plugins/basic-marks-kit';
import { BlockMenuKit } from '@/components/editor/plugins/block-menu-kit';
import { BlockPlaceholderKit } from '@/components/editor/plugins/block-placeholder-kit';
import { CalloutKit } from '@/components/editor/plugins/callout-kit';
import { CodeBlockKit } from '@/components/editor/plugins/code-block-kit';
import { ColumnKit } from '@/components/editor/plugins/column-kit';
import { CommentKit } from '@/components/editor/plugins/comment-kit';
import { CursorOverlayKit } from '@/components/editor/plugins/cursor-overlay-kit';
import { DateKit } from '@/components/editor/plugins/date-kit';
import { DiscussionKit } from '@/components/editor/plugins/discussion-kit';
import { DndKit } from '@/features/presentations/plate/plugins/dnd-kit';
import { ExitBreakKit } from '@/components/editor/plugins/exit-break-kit';
import { FixedToolbarKit } from '@/features/presentations/plate/plugins/fixed-toolbar-kit';
import { FloatingToolbarKit } from '@/features/presentations/plate/plugins/floating-toolbar-kit';
import { FontKit } from '@/components/editor/plugins/font-kit';
import { LineHeightKit } from '@/components/editor/plugins/line-height-kit';
import { LinkKit } from '@/components/editor/plugins/link-kit';
import { ListKit } from '@/features/presentations/plate/plugins/list-kit';
import { MarkdownKit } from '@/components/editor/plugins/markdown-kit';
import { MathKit } from '@/components/editor/plugins/math-kit';
import { MentionKit } from '@/components/editor/plugins/mention-kit';
import { SlashKit } from '@/components/editor/plugins/slash-kit';
import { SuggestionKit } from '@//features/presentations/plate/plugins/suggestion-kit';
// import { TableKit } from "@/components/editor/plugins/table-kit";
import { TocKit } from '@/components/editor/plugins/toc-kit';
import { ToggleKit } from '@/components/editor/plugins/toggle-kit';
import { ArrowListItemPlugin, ArrowListPlugin } from './plugins/arrow-plugin';
import { BasicBlocksKit } from './plugins/basic-blocks-kit';
import {
  BeforeAfterGroupPlugin,
  BeforeAfterSidePlugin,
} from './plugins/before-after-plugin';
import { BoxGroupPlugin, BoxItemPlugin } from './plugins/box-plugin';
import { ButtonPlugin } from './plugins/button-plugin';
import {
  AreaChartPlugin,
  BarChartPlugin,
  LineChartPlugin,
  PieChartPlugin,
  RadarChartPlugin,
  ScatterChartPlugin,
} from './plugins/chart-plugin';
import {
  CompareGroupPlugin,
  CompareSidePlugin,
} from './plugins/compare-plugin';
import {
  VisualizationItemPlugin,
  VisualizationListPlugin,
} from './plugins/legacy/visualization-list-plugin';
import { MediaKit } from './plugins/media-kit';
import { PresentationTableKit } from './plugins/presentation-table-kit';
import {
  ConsItemPlugin,
  ProsConsGroupPlugin,
  ProsItemPlugin,
} from './plugins/pros-cons-plugin';
import {
  PyramidGroupPlugin,
  PyramidItemPlugin,
} from './plugins/pyramid-plugin';
import {
  SequenceArrowGroupPlugin,
  SequenceArrowItemPlugin,
} from './plugins/sequence-arrow-plugin';
import { TimelineItemPlugin, TimelinePlugin } from './plugins/timeline-plugin';
// import { TablePlugin, TableRowPlugin, TableCellPlugin } from "./plugins/table-plugin";

export const presentationPlugins = [
  ...AIKit,

  // Elements
  ...BasicBlocksKit,
  ...CodeBlockKit,
  // Replace default table with themed presentation table
  ...PresentationTableKit,
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

  // Parsers
  ...MarkdownKit,

  // UI
  ...BlockPlaceholderKit,
  ...FixedToolbarKit,
  ...FloatingToolbarKit,
  // TrailingBlockPlugin,

  // Custom ELements
  VisualizationListPlugin,
  VisualizationItemPlugin,

  BulletGroupPlugin,
  BulletItemPlugin,

  StaircaseGroupPlugin,
  StairItemPlugin,

  IconPlugin,
  IconListPlugin,
  IconListItemPlugin,

  ArrowListPlugin,
  ArrowListItemPlugin,

  TimelinePlugin,
  TimelineItemPlugin,

  PyramidGroupPlugin,
  PyramidItemPlugin,

  // New components
  BoxGroupPlugin,
  BoxItemPlugin,

  CompareGroupPlugin,
  CompareSidePlugin,

  BeforeAfterGroupPlugin,
  BeforeAfterSidePlugin,

  ProsConsGroupPlugin,
  ProsItemPlugin,
  ConsItemPlugin,

  SequenceArrowGroupPlugin,
  SequenceArrowItemPlugin,

  // Individual chart elements
  PieChartPlugin,
  BarChartPlugin,
  AreaChartPlugin,
  RadarChartPlugin,
  ScatterChartPlugin,
  LineChartPlugin,

  CycleItemPlugin,
  CyclePlugin,

  GeneratingPlugin,
  ButtonPlugin,
];
