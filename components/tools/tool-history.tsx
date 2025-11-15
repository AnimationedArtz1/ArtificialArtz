'use client';

import { useMemo } from 'react';
import { ClockIcon, TrashIcon } from '@heroicons/react/24/outline';

import type { ToolHistoryEntry } from '@/types/tool';
import { Button } from '@/components/ui/button';

import { cn } from '@/lib/utils/cn';

type ToolHistoryProps = {
  history: ToolHistoryEntry[];
  onRestore: (entry: ToolHistoryEntry) => void;
  onClear: () => void;
};

export const ToolHistory = ({ history, onRestore, onClear }: ToolHistoryProps) => {
  const groupedHistory = useMemo(() => {
    return history.reduce<Record<string, ToolHistoryEntry[]>>((acc, entry) => {
      const date = new Date(entry.createdAt).toLocaleDateString();
      acc[date] = acc[date] || [];
      acc[date].push(entry);
      return acc;
    }, {});
  }, [history]);

  if (!history.length) {
    return (
      <div className="rounded-3xl border border-white/5 bg-white/5 p-6 text-center text-white/60">
        No history yet. Your generated results will appear here.
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">Generation History</h3>
        <Button variant="ghost" size="sm" onClick={onClear}>
          <TrashIcon className="mr-2 h-4 w-4" /> Clear history
        </Button>
      </div>
      <div className="space-y-6">
        {Object.entries(groupedHistory).map(([date, entries]) => (
          <div key={date} className="space-y-4">
            <div className="flex items-center gap-2 text-sm text-white/50">
              <ClockIcon className="h-4 w-4" />
              {date}
            </div>
            <div className="space-y-3">
              {entries.map(entry => (
                <button
                  key={entry.id}
                  onClick={() => onRestore(entry)}
                  className="w-full rounded-2xl border border-white/5 bg-white/5 px-4 py-3 text-left transition hover:border-white/10 hover:bg-white/10"
                >
                  <p className="text-sm font-semibold text-white/80">
                    {new Date(entry.createdAt).toLocaleTimeString()}
                  </p>
                  <p className={cn('mt-1 text-xs text-white/60 line-clamp-2')}>{entry.output}</p>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
