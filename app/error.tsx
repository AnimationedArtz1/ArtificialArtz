'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Page error:', error);
  }, [error]);

  return (
    <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center gap-6 px-6 text-center">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Something went wrong!</h1>
        <p className="text-white/60">
          We encountered an unexpected error. Our team has been notified and we will work on fixing it.
        </p>
        {error.message ? (
          <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-4">
            <p className="text-sm font-mono text-red-300">{error.message}</p>
          </div>
        ) : null}
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Button onClick={() => reset()}>Try Again</Button>
        <Button variant="secondary" onClick={() => window.location.href = '/'}>
          Go Home
        </Button>
      </div>
    </div>
  );
}
