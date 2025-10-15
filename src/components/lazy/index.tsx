/**
 * Lazy-loaded heavy components for better initial load performance
 * These components are code-split and loaded on-demand
 */

import dynamic from 'next/dynamic';

// Emoji picker is large and rarely used immediately
export const EmojiToolbarButton = dynamic(
  () =>
    import('@/components/ui/emoji-toolbar-button').then(
      (mod) => mod.EmojiToolbarButton
    ),
  {
    ssr: false,
    loading: () => null,
  }
);

// Excalidraw is very large and should be lazy-loaded
export const ExcalidrawElement = dynamic(
  () =>
    import('@/components/ui/excalidraw-node').then(
      (mod) => mod.ExcalidrawElement
    ),
  {
    ssr: false,
    loading: () => <div>Loading drawing tool...</div>,
  }
);

// Chart components can be lazy-loaded
export const Chart = dynamic(
  () => import('@/components/ui/chart').then((mod) => mod.Chart),
  {
    loading: () => <div>Loading chart...</div>,
  }
);

// Icon picker is large
export const IconPicker = dynamic(
  () => import('@/components/ui/icon-picker').then((mod) => mod.IconPicker),
  {
    ssr: false,
    loading: () => null,
  }
);

// Font picker with Google Fonts
export const FontPicker = dynamic(
  () =>
    import('@/components/ui/font-picker/components/FontPicker').then(
      (mod) => mod.FontPicker
    ),
  {
    ssr: false,
    loading: () => null,
  }
);
