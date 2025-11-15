'use client';

import { ThemeProvider } from '@/components/providers/theme-provider';
import { ToastProvider } from '@/components/providers/toast-provider';
import { ErrorBoundary } from '@/components/providers/error-boundary';

export const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <ToastProvider>
        <ErrorBoundary>{children}</ErrorBoundary>
      </ToastProvider>
    </ThemeProvider>
  );
};
