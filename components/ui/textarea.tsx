import { TextareaHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils/cn';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5">
        {label ? (
          <label htmlFor={props.id} className="text-sm font-medium text-white/90">
            {label}
          </label>
        ) : null}
        <textarea
          ref={ref}
          className={cn(
            'min-h-[140px] rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white transition placeholder:text-white/40 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/30',
            error && 'border-red-500 focus:border-red-500 focus:ring-red-500/30',
            className,
          )}
          {...props}
        />
        {error ? <p className="text-xs text-red-400">{error}</p> : null}
      </div>
    );
  },
);

Textarea.displayName = 'Textarea';
