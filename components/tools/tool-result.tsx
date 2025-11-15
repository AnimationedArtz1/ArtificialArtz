'use client';

import { ClipboardDocumentIcon } from '@heroicons/react/24/outline';
import { useToast } from '@/components/providers/toast-provider';

type ToolResultProps = {
  result: string;
  label: string;
};

export const ToolResult = ({ result, label }: ToolResultProps) => {
  const { pushToast } = useToast();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(result);
      pushToast({ message: 'Copied to clipboard!', variant: 'success' });
    } catch {
      pushToast({ message: 'Failed to copy', variant: 'error' });
    }
  };

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">{label}</h3>
        <button
          onClick={handleCopy}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
        >
          <ClipboardDocumentIcon className="h-5 w-5" />
          Copy
        </button>
      </div>
      <pre className="overflow-x-auto whitespace-pre-wrap rounded-xl bg-black/30 p-4 text-sm text-white/90">
        {result}
      </pre>
    </div>
  );
};
