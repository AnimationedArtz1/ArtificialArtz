'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Bars3Icon, BoltIcon, MoonIcon, SunIcon } from '@heroicons/react/24/outline';

import { NAVIGATION_ITEMS } from '@/lib/constants/navigation';
import { cn } from '@/lib/utils/cn';
import { useTheme } from '@/components/providers/theme-provider';
import { MobileNav } from '@/components/layout/site-mobile-nav';

export const SiteHeader = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold text-white">
            <BoltIcon className="h-6 w-6 text-primary-400" />
            ArtificialArtz
          </Link>
        </div>
        <div className="hidden items-center gap-7 text-sm font-medium text-white/80 md:flex">
          {NAVIGATION_ITEMS.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'relative transition hover:text-white',
                pathname === item.href &&
                  'text-white after:absolute after:bottom-[-10px] after:left-0 after:h-[2px] after:w-full after:bg-primary-500',
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <button
            className="rounded-full border border-white/10 bg-white/5 p-2 text-white transition hover:bg-white/10"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          </button>
          <Link
            href="/contact"
            className="hidden rounded-full bg-gradient-to-r from-primary-500 to-accent-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-primary-500/30 transition hover:shadow-primary-500/50 md:inline-flex"
          >
            Hire Us
          </Link>
          <button
            className="inline-flex rounded-full border border-white/10 p-2 text-white md:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open navigation"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>
      </nav>
      <MobileNav open={open} onOpenChange={setOpen} />
    </header>
  );
};
