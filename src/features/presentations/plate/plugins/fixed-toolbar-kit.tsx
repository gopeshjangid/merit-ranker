'use client';

import { createPlatePlugin } from 'platejs/react';

import { FixedToolbar } from '@/features/presentations/plate/ui/fixed-toolbar';
import { FixedToolbarButtons } from '@/features/presentations/plate/ui/fixed-toolbar-buttons';

export const FixedToolbarKit = [
  createPlatePlugin({
    key: 'fixed-toolbar',
    render: {
      beforeContainer: () => (
        <FixedToolbar>
          <FixedToolbarButtons />
        </FixedToolbar>
      ),
    },
  }),
];
