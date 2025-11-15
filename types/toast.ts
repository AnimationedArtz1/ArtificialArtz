export type ToastVariant = 'default' | 'success' | 'error' | 'warning' | 'info';

export type Toast = {
  id: string;
  title?: string;
  message: string;
  variant?: ToastVariant;
  duration?: number;
};
