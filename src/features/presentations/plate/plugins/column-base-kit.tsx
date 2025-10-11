import { BaseColumnItemPlugin, BaseColumnPlugin } from '@platejs/layout';

import {
  ColumnElementStatic,
  ColumnGroupElementStatic,
} from '@/features/presentations/plate/ui/column-node-static';

export const BaseColumnKit = [
  BaseColumnPlugin.withComponent(ColumnGroupElementStatic),
  BaseColumnItemPlugin.withComponent(ColumnElementStatic),
];
