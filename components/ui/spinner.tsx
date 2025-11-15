import { cn } from '@/lib/utils/cn';

type SpinnerProps = {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
};

export const Spinner = ({ size = 'md', className }: SpinnerProps) => {
  return (
    <div
      className={cn(
        'animate-spin rounded-full border-2 border-white/20 border-t-primary-500',
        size === 'sm' && 'h-4 w-4',
        size === 'md' && 'h-8 w-8',
        size === 'lg' && 'h-12 w-12',
        className,
      )}
    />
  );
};
