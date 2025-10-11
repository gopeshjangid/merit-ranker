'use client';

import { LinkPlugin } from '@platejs/link/react';

import { LinkElement } from '@/features/presentations/plate/ui/link-node';
import { LinkFloatingToolbar } from '@/features/presentations/plate/ui/link-toolbar';

export const LinkKit = [
  LinkPlugin.configure({
    render: {
      node: LinkElement,
      afterEditable: () => <LinkFloatingToolbar />,
    },
  }),
];
