'use client';

import dynamic from 'next/dynamic';
import { ExcalidrawPlugin } from '@platejs/excalidraw/react';

const ExcalidrawElement = dynamic(
  () =>
    import('@/components/ui/excalidraw-node').then((mod) => ({
      default: mod.ExcalidrawElement,
    })),
  {
    ssr: false,
    loading: () => <div>Loading...</div>,
  }
);

const ExcalidrawNodeComponent: React.FC<any> = (props) => (
  <ExcalidrawElement {...props} />
);

export const ExcalidrawKit = [
  ExcalidrawPlugin.withComponent(ExcalidrawNodeComponent),
];
