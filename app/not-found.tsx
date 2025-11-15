import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center gap-6 px-6 text-center">
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.3em] text-primary-400">404</p>
        <h1 className="text-4xl font-bold md:text-5xl">We lost that page.</h1>
        <p className="text-white/60">
          The page you are looking for might have been moved or no longer exists. Explore our tools or
          head back to the homepage.
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link href="/">
          <Button>Return Home</Button>
        </Link>
        <Link href="/tools">
          <Button variant="secondary">Explore Tools</Button>
        </Link>
      </div>
    </div>
  );
}
