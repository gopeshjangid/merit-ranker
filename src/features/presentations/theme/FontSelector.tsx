'use client';

import dynamic from 'next/dynamic';
import { Label } from '@/components/ui/label';

const FontPicker = dynamic(
  () =>
    import('@/components/ui/font-picker').then((mod) => ({
      default: mod.FontPicker,
    })),
  { ssr: false }
);

interface FontSelectorProps {
  value: string;
  onChange: (value: string) => void;
  label: string;
}

export function FontSelector({ value, onChange, label }: FontSelectorProps) {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <FontPicker
        value={onChange}
        defaultValue={value}
        autoLoad={true}
        mode="combo"
      />
    </div>
  );
}
