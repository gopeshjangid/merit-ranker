import { BaseColumnItemPlugin, BaseColumnPlugin } from "@platejs/layout";

import {
  ColumnElementStatic,
  ColumnGroupElementStatic,
} from "@/features/presentations/components/plate/ui/column-node-static";

export const BaseColumnKit = [
  BaseColumnPlugin.withComponent(ColumnGroupElementStatic),
  BaseColumnItemPlugin.withComponent(ColumnElementStatic),
];
