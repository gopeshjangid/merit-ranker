'use client';

import dynamic from 'next/dynamic';
import { type ThemeProperties } from '@/lib/presentation/themes';

const FontPicker = dynamic(
  () =>
    import('@/components/ui/font-picker').then((mod) => ({
      default: mod.FontPicker,
    })),
  { ssr: false }
);

// Component to load fonts for custom themes
export function CustomThemeFontLoader({
  themeData,
}: {
  themeData: ThemeProperties;
}) {
  const fonts = [themeData.fonts.heading, themeData.fonts.body];

  return (
    <div style={{ display: 'none' }}>
      <FontPicker
        defaultValue={fonts[0]}
        loadFonts={fonts}
        loaderOnly
        autoLoad
      />
    </div>
  );
}
