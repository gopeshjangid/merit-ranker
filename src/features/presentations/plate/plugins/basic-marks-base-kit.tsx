import {
  BaseBoldPlugin,
  BaseCodePlugin,
  BaseHighlightPlugin,
  BaseItalicPlugin,
  BaseKbdPlugin,
  BaseStrikethroughPlugin,
  BaseSubscriptPlugin,
  BaseSuperscriptPlugin,
  BaseUnderlinePlugin,
} from '@platejs/basic-nodes';

import { CodeLeafStatic } from '@/features/presentations/plate/ui/code-node-static';
import { HighlightLeafStatic } from '@/features/presentations/plate/ui/highlight-node-static';
import { KbdLeafStatic } from '@/features/presentations/plate/ui/kbd-node-static';

export const BaseBasicMarksKit = [
  BaseBoldPlugin,
  BaseItalicPlugin,
  BaseUnderlinePlugin,
  BaseCodePlugin.withComponent(CodeLeafStatic),
  BaseStrikethroughPlugin,
  BaseSubscriptPlugin,
  BaseSuperscriptPlugin,
  BaseHighlightPlugin.withComponent(HighlightLeafStatic),
  BaseKbdPlugin.withComponent(KbdLeafStatic),
];
