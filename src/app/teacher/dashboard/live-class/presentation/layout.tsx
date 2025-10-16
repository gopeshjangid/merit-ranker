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
      <div className="flex h-full w-full flex-col">
        <PresentationHeader />
        <main className="relative flex flex-1">
          <div className="flex-1 place-items-center">
            {children}
          </div>
        </main>
      </div>
    </>
  );
}
