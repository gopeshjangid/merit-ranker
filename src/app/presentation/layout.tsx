import { PresentationGenerationManager } from '@/features/presentations/dashboard/PresentationGenerationManager';
import PresentationHeader from '@/features/presentations/presentation-page/PresentationHeader';
import type React from 'react';

export default function PresentationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PresentationGenerationManager />
      <div className="flex h-screen w-screen flex-col supports-[(height:100dvh)]:h-[100dvh]">
        <PresentationHeader />
        <main className="relative flex flex-1 overflow-hidden">
          <div className="sheet-container h-[calc(100vh-3.8rem)] flex-1 place-items-center overflow-x-clip overflow-y-auto supports-[(height:100dvh)]:h-[calc(100dvh-3.8rem)]">
            {children}
          </div>
        </main>
      </div>
    </>
  );
}
