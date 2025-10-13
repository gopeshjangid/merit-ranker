'use client';

import { Skeleton } from '@/components/ui/skeleton';
import { ThemeBackground } from '../theme/ThemeBackground';

export function LoadingState() {
  return (
    <ThemeBackground>
      <div className="mx-auto max-w-[90%] space-y-8 pt-16">
        {/* Loading skeleton for slides */}
        <div className="space-y-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="mx-auto w-full max-w-6xl rounded-lg border bg-card p-8 shadow-lg"
            >
              <div className="space-y-4">
                {/* Title skeleton */}
                <Skeleton className="h-8 w-3/4" />
                {/* Content skeleton */}
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                  <Skeleton className="h-4 w-4/6" />
                </div>
                {/* Image skeleton */}
                <Skeleton className="h-64 w-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </ThemeBackground>
  );
}
