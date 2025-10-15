'use client';

import { Button } from '@/components/ui/button';
import { Smartphone } from 'lucide-react'; // Using Smartphone icon
import Link from 'next/link';

export default function CompatibilityError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="container mx-auto flex min-h-[calc(100vh-10rem)] flex-col items-center justify-center px-4 py-20 text-center">
      <Smartphone className="mb-4 h-16 w-16 text-red-500" />
      <h2 className="mb-3 text-3xl font-bold text-red-400">
        Error Loading Compatibility List
      </h2>
      <p className="mb-6 max-w-md text-slate-300">
        We couldn't fetch the device compatibility information. Please try
        refreshing.
      </p>
      {process.env.NODE_ENV === 'development' && error?.message && (
        <pre className="mb-4 max-w-xl overflow-auto rounded bg-slate-800 p-2 text-left text-xs">
          {error.message}
          {error.digest && `\nDigest: ${error.digest}`}
        </pre>
      )}
      <Button
        onClick={() => reset()}
        className="bg-cyan-500 text-white hover:bg-cyan-600"
      >
        Try Again
      </Button>
      <Link href="/" className="mt-4 text-cyan-400 hover:text-cyan-300">
        Go to Homepage
      </Link>
    </div>
  );
}
