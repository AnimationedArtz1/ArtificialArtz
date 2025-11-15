'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useEffect } from 'react';

import { NAVIGATION_ITEMS, SOCIAL_LINKS } from '@/lib/constants/navigation';
import { cn } from '@/lib/utils/cn';

type MobileNavProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export const MobileNav = ({ open, onOpenChange }: MobileNavProps) => {
  const pathname = usePathname();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  return (
    <>
      {open ? (
        <div
          className="fixed inset-0 z-[80] bg-black/60 backdrop-blur-sm md:hidden"
          onClick={() => onOpenChange(false)}
          onKeyDown={e => e.key === 'Escape' && onOpenChange(false)}
          role="button"
          tabIndex={0}
          aria-label="Close navigation"
        />
      ) : null}
      <div
        className={cn(
          'fixed right-0 top-0 z-[100] h-screen w-[300px] transform border-l border-white/10 bg-slate-950 px-6 py-6 shadow-2xl transition-transform duration-300 md:hidden',
          open ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <div className="flex items-center justify-between">
          <Link
            href="/"
            onClick={() => onOpenChange(false)}
            className="text-lg font-semibold text-white"
          >
            ArtificialArtz
          </Link>
          <button
            className="rounded-full p-2 text-white hover:bg-white/10"
            onClick={() => onOpenChange(false)}
            aria-label="Close navigation"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>
        <div className="mt-8 flex flex-col gap-3">
          {NAVIGATION_ITEMS.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'rounded-xl px-4 py-3 text-base font-medium text-white/80 transition hover:bg-white/5 hover:text-white',
                pathname === item.href && 'bg-primary-500/10 text-white',
              )}
              onClick={() => onOpenChange(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="mt-8 flex flex-col gap-4">
          <Link
            href="/contact"
            onClick={() => onOpenChange(false)}
            className="inline-flex rounded-full bg-gradient-to-r from-primary-500 to-accent-500 px-5 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-primary-500/30"
          >
            Hire Us
          </Link>
        </div>
        <div className="absolute bottom-8 flex gap-3">
          <a
            href={SOCIAL_LINKS.fiverr}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-white/70 hover:text-white"
          >
            Fiverr
          </a>
          <span className="text-white/40">•</span>
          <a
            href={SOCIAL_LINKS.bionluk}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-white/70 hover:text-white"
          >
            Bionluk
          </a>
        </div>
      </div>
    </>
  );
};
