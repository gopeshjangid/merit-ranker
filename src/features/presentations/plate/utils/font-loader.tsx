'use client';

import dynamic from 'next/dynamic';

const FontPicker = dynamic(
  () =>
    import('@/components/ui/font-picker').then((mod) => ({
      default: mod.FontPicker,
    })),
  { ssr: false }
);

export const FontLoader = ({ fontsToLoad }: { fontsToLoad: string[] }) => {
  if (fontsToLoad.length === 0) return null;

  return (
    <div style={{ display: 'none' }}>
      <FontPicker loadFonts={fontsToLoad} loaderOnly />
    </div>
  );
};
