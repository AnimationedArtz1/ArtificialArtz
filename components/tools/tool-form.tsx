'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import type { ToolDefinition } from '@/types/tool';

const buildSchema = (fields: ToolDefinition['fields']) => {
  const shape: Record<string, z.ZodTypeAny> = {};
  fields.forEach(field => {
    let validator: z.ZodString = z.string();
    if (field.required) {
      validator = validator.min(1, `${field.label} is required`);
    }
    if (field.maxLength) {
      validator = validator.max(field.maxLength, `${field.label} is too long`);
    }
    shape[field.id] = validator;
  });
  return z.object(shape);
};

type ToolFormProps = {
  tool: ToolDefinition;
  onSubmit: (values: Record<string, string>) => Promise<void> | void;
  loading?: boolean;
};

export const ToolForm = ({ tool, onSubmit, loading }: ToolFormProps) => {
  const schema = buildSchema(tool.fields);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Record<string, string>>({
    resolver: zodResolver(schema),
    defaultValues: Object.fromEntries(tool.fields.map(field => [field.id, ''])),
  });

  return (
    <form
      onSubmit={handleSubmit(async values => onSubmit(values))}
      className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6"
    >
      <div className="grid gap-6 md:grid-cols-2">
        {tool.fields.map(field => {
          const commonProps = {
            id: field.id,
            placeholder: field.placeholder,
            ...register(field.id),
            disabled: loading,
          };

          if (field.type === 'textarea') {
            return (
              <div key={field.id} className="md:col-span-2">
                <Textarea
                  label={field.label}
                  error={errors[field.id]?.message}
                  {...commonProps}
                />
                {field.helperText ? (
                  <p className="mt-1 text-xs text-white/40">{field.helperText}</p>
                ) : null}
              </div>
            );
          }

          if (field.type === 'select') {
            return (
              <div key={field.id}>
                <label htmlFor={field.id} className="text-sm font-medium text-white/90">
                  {field.label}
                </label>
                <select
                  className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-white focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/30"
                  {...commonProps}
                >
                  <option value="">Select option</option>
                  {field.options?.map(option => (
                    <option key={option.value} value={option.value} className="bg-slate-900">
                      {option.label}
                    </option>
                  ))}
                </select>
                {errors[field.id]?.message ? (
                  <p className="mt-1 text-xs text-red-400">{errors[field.id]?.message}</p>
                ) : null}
              </div>
            );
          }

          return (
            <Input
              key={field.id}
              label={field.label}
              error={errors[field.id]?.message}
              {...commonProps}
            />
          );
        })}
      </div>
      <div className="flex justify-end">
        <Button type="submit" disabled={loading} className="min-w-[160px]">
          {loading ? 'Generating...' : 'Generate'}
        </Button>
      </div>
    </form>
  );
};
