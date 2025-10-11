'use client';

import { ListPlugin } from '@platejs/list/react';
import { KEYS } from 'platejs';

import { IndentKit } from '@/features/presentations/plate/plugins/indent-kit';
import { BlockList } from '@/features/presentations/plate/ui/block-list';

export const ListKit = [
  ...IndentKit,
  ListPlugin.configure({
    inject: {
      targetPlugins: [
        ...KEYS.heading,
        KEYS.p,
        KEYS.blockquote,
        KEYS.codeBlock,
        KEYS.toggle,
      ],
    },
    render: {
      belowNodes: BlockList,
    },
  }),
];
