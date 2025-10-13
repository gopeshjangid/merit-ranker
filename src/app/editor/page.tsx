'use client';

import dynamic from 'next/dynamic';
import { Toaster } from 'sonner';
import Loading from './loading';

const PlateEditor = dynamic(
  () =>
    import('@/components/editor/plate-editor').then((mod) => ({
      default: mod.PlateEditor,
    })),
  {
    ssr: false,
    loading: () => <Loading />,
  }
);

export default function Page() {
  return (
    <div className="h-screen w-full">
      <PlateEditor />
      <Toaster />
    </div>
  );
}
