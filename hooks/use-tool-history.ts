'use client';

import { useCallback, useEffect, useState } from 'react';
import { storage } from '@/lib/storage/local-storage';
import type { ToolHistoryEntry, ToolSlug } from '@/types/tool';

const HISTORY_KEY = 'tool_history';
const MAX_HISTORY = 50;

export const useToolHistory = (tool?: ToolSlug) => {
  const [history, setHistory] = useState<ToolHistoryEntry[]>([]);

  useEffect(() => {
    if (!tool) {
      setHistory([]);
      return;
    }
    const all = storage.get<ToolHistoryEntry[]>(HISTORY_KEY) || [];
    setHistory(all.filter(entry => entry.tool === tool).slice(0, 20));
  }, [tool]);

  const addEntry = useCallback(
    (input: Record<string, string>, output: string) => {
      if (!tool) return;
      const entry: ToolHistoryEntry = {
        id: `${Date.now()}-${Math.random().toString(36).substring(7)}`,
        tool,
        input,
        output,
        createdAt: Date.now(),
      };

      const all = storage.get<ToolHistoryEntry[]>(HISTORY_KEY) || [];
      const updated = [entry, ...all].slice(0, MAX_HISTORY);
      storage.set(HISTORY_KEY, updated);
      setHistory(updated.filter(e => e.tool === tool).slice(0, 20));
    },
    [tool],
  );

  const clearHistory = useCallback(() => {
    if (!tool) return;
    const all = storage.get<ToolHistoryEntry[]>(HISTORY_KEY) || [];
    const remaining = all.filter(entry => entry.tool !== tool);
    storage.set(HISTORY_KEY, remaining);
    setHistory([]);
  }, [tool]);

  return { history, addEntry, clearHistory };
};
