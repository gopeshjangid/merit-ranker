'use client';

import { TogglePlugin } from '@platejs/toggle/react';

import { IndentKit } from '@/features/presentations/plate/plugins/indent-kit';
import { ToggleElement } from '@/features/presentations/plate/ui/toggle-node';

export const ToggleKit = [
  ...IndentKit,
  TogglePlugin.withComponent(ToggleElement),
];
