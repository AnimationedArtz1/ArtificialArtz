'use client';

import { useEffect } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

import type { Toast } from '@/types/toast';
import { cn } from '@/lib/utils/cn';

type ToastContainerProps = {
  toasts: Toast[];
  onDismiss: (id: string) => void;
};

export const ToastContainer = ({ toasts, onDismiss }: ToastContainerProps) => {
  useEffect(() => {
    toasts.forEach(toast => {
      if (!toast.duration) return;
      const handle = window.setTimeout(() => onDismiss(toast.id), toast.duration);
      return () => window.clearTimeout(handle);
    });
  }, [toasts, onDismiss]);

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[2000] flex max-w-sm flex-col gap-3">
      {toasts.map(toast => (
        <div
          key={toast.id}
          className={cn(
            'relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/90 p-4 shadow-lg backdrop-blur transition hover:border-white/30',
            toast.variant === 'success' && 'border-emerald-400/40 bg-emerald-500/10',
            toast.variant === 'error' && 'border-rose-400/40 bg-rose-500/10',
            toast.variant === 'warning' && 'border-amber-400/40 bg-amber-500/10',
            toast.variant === 'info' && 'border-sky-400/40 bg-sky-500/10',
          )}
        >
          <button
            onClick={() => onDismiss(toast.id)}
            className="absolute right-3 top-3 text-white/60 transition hover:text-white"
            aria-label="Dismiss toast"
          >
            <XMarkIcon className="h-4 w-4" />
          </button>
          {toast.title ? (
            <p className="mb-1 text-sm font-semibold text-white/90">{toast.title}</p>
          ) : null}
          <p className="text-sm text-white/70">{toast.message}</p>
        </div>
      ))}
    </div>
  );
};
