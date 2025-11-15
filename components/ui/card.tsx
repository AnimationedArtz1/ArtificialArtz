import { cn } from '@/lib/utils/cn';

export type CardProps = React.PropsWithChildren<{
  className?: string;
  variant?: 'default' | 'outlined' | 'glass';
}>;

export const Card = ({ children, className, variant = 'default' }: CardProps) => {
  return (
    <div
      className={cn(
        'group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 text-white shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-primary-500/30',
        variant === 'outlined' && 'border-white/15 bg-transparent hover:border-white/40',
        variant === 'glass' &&
          'border-white/10 bg-gradient-to-br from-white/10 via-white/0 to-white/0 backdrop-blur-xl',
        className,
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative z-10">{children}</div>
    </div>
  );
};
