'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeftIcon, PencilSquareIcon } from '@heroicons/react/24/outline';

import { ToolForm } from '@/components/tools/tool-form';
import { ToolResult } from '@/components/tools/tool-result';
import { ToolHistory } from '@/components/tools/tool-history';
import { Textarea } from '@/components/ui/textarea';
import { TOOL_DEFINITIONS } from '@/lib/constants/tools';
import { generateToolResult } from '@/lib/utils/tool-generators';
import { useToolHistory } from '@/hooks/use-tool-history';
import { useScratchpad } from '@/hooks/use-scratchpad';
import { useToast } from '@/components/providers/toast-provider';

export default function ToolPage() {
  const params = useParams<{ slug: string }>();
  const slug = Array.isArray(params?.slug) ? params?.slug[0] : params?.slug;
  const tool = useMemo(() => TOOL_DEFINITIONS.find(t => t.slug === slug), [slug]);

  const { pushToast } = useToast();
  const { history, addEntry, clearHistory } = useToolHistory(tool?.slug);
  const { value: scratchpad, setValue: setScratchpad } = useScratchpad(slug || '');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  if (!tool) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-16 text-center">
        <h1 className="text-4xl font-bold">Tool not found</h1>
        <p className="mt-4 text-white/60">This tool does not exist.</p>
        <Link
          href="/tools"
          className="mt-6 inline-flex items-center gap-2 text-primary-300 hover:text-primary-200"
        >
          <ArrowLeftIcon className="h-5 w-5" /> Back to tools
        </Link>
      </div>
    );
  }

  const handleGenerate = async (values: Record<string, string>) => {
    setLoading(true);
    try {
      const output = await generateToolResult(tool.slug, values);
      setResult(output);
      addEntry(values, output);
      pushToast({ message: 'Generated successfully!', variant: 'success' });
    } catch (error) {
      pushToast({
        message: error instanceof Error ? error.message : 'Failed to generate',
        variant: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <Link
        href="/tools"
        className="mb-8 inline-flex items-center gap-2 text-white/60 transition hover:text-white"
      >
        <ArrowLeftIcon className="h-5 w-5" /> Back to tools
      </Link>
      <div className="mb-8">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-200">
          {tool.category}
        </div>
        <h1 className="text-4xl font-extrabold md:text-5xl">{tool.name}</h1>
        <p className="mt-4 text-lg text-white/70">{tool.longDescription}</p>
      </div>
      <div className="grid gap-8 lg:grid-cols-[2fr,1fr]">
        <div className="space-y-8">
          <ToolForm tool={tool} onSubmit={handleGenerate} loading={loading} />
          {result ? <ToolResult result={result} label={tool.resultLabel} /> : null}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="mb-3 flex items-center gap-2 text-lg font-semibold text-white">
              <PencilSquareIcon className="h-5 w-5 text-primary-400" />
              Scratchpad
            </div>
            <p className="mb-4 text-sm text-white/60">
              Use this space to save ideas, notes, or draft content.
            </p>
            <Textarea
              placeholder="Your notes..."
              value={scratchpad}
              onChange={e => setScratchpad(e.target.value)}
              className="min-h-[200px]"
            />
          </div>
        </div>
        <div>
          <ToolHistory
            history={history}
            onRestore={entry => {
              setResult(entry.output);
              pushToast({ message: 'Restored from history', variant: 'info' });
            }}
            onClear={() => {
              clearHistory();
              pushToast({ message: 'History cleared', variant: 'success' });
            }}
          />
        </div>
      </div>
    </div>
  );
}
