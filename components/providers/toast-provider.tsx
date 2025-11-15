'use client';

import { createContext, useCallback, useContext, useMemo, useRef, useState } from 'react';
import { ToastContainer } from '@/components/ui/toast-container';
import type { Toast } from '@/types/toast';

export type ToastContextValue = {
  toasts: Toast[];
  pushToast: (toast: Omit<Toast, 'id'>) => void;
  dismissToast: (id: string) => void;
  clearToasts: () => void;
};

const ToastContext = createContext<ToastContextValue | undefined>(undefined);

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const counter = useRef(0);

  const pushToast = useCallback((toast: Omit<Toast, 'id'>) => {
    counter.current += 1;
    const id = `${Date.now()}-${counter.current}`;
    setToasts(prev => [...prev, { id, duration: 5000, variant: 'default', ...toast }]);
  }, []);

  const dismissToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }, []);

  const clearToasts = useCallback(() => setToasts([]), []);

  const value = useMemo(
    () => ({
      toasts,
      pushToast,
      dismissToast,
      clearToasts,
    }),
    [toasts, pushToast, dismissToast, clearToasts],
  );

  return (
    <ToastContext.Provider value={value}>
      {children}
      <ToastContainer toasts={toasts} onDismiss={dismissToast} />
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
