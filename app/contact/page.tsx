'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { EnvelopeIcon } from '@heroicons/react/24/outline';

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/providers/toast-provider';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const { pushToast } = useToast();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setLoading(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      pushToast({
        title: 'Message sent!',
        message: "Thanks for reaching out. We'll get back to you soon.",
        variant: 'success',
      });
      reset();
    } catch (error) {
      pushToast({
        title: 'Error',
        message: error instanceof Error ? error.message : 'Failed to send message',
        variant: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <div className="mb-12 text-center">
        <h1 className="text-5xl font-extrabold md:text-6xl">Get in Touch</h1>
        <p className="mt-4 text-lg text-white/70">
          Have a project in mind? Questions about our services? Let&apos;s talk about how we can help you
          scale creative operations.
        </p>
      </div>
      <div className="grid gap-10 md:grid-cols-[2fr,1fr]">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8"
        >
          <Input
            label="Name"
            placeholder="Your name"
            error={errors.name?.message}
            {...register('name')}
            disabled={loading}
          />
          <Input
            label="Email"
            type="email"
            placeholder="you@example.com"
            error={errors.email?.message}
            {...register('email')}
            disabled={loading}
          />
          <Input
            label="Subject"
            placeholder="What can we help with?"
            error={errors.subject?.message}
            {...register('subject')}
            disabled={loading}
          />
          <Textarea
            label="Message"
            placeholder="Tell us more about your project or question..."
            error={errors.message?.message}
            {...register('message')}
            disabled={loading}
            className="min-h-[200px]"
          />
          <Button type="submit" disabled={loading} className="w-full" size="lg">
            {loading ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <EnvelopeIcon className="mb-4 h-8 w-8 text-primary-400" />
            <h3 className="mb-2 text-lg font-semibold">Email</h3>
            <a
              href="mailto:hello@artificialartz.com"
              className="text-white/70 transition hover:text-white"
            >
              hello@artificialartz.com
            </a>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-4 text-lg font-semibold">Service Platforms</h3>
            <div className="space-y-3 text-sm">
              <a
                href="https://www.fiverr.com/artificialartz"
                target="_blank"
                rel="noreferrer"
                className="block text-white/70 transition hover:text-white"
              >
                Fiverr →
              </a>
              <a
                href="https://bionluk.com/artificialartz"
                target="_blank"
                rel="noreferrer"
                className="block text-white/70 transition hover:text-white"
              >
                Bionluk →
              </a>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-4 text-lg font-semibold">Response Time</h3>
            <p className="text-sm text-white/70">
              We typically respond within 24-48 hours during business days. For urgent inquiries, please
              mention it in your message.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
