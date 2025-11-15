'use client';

import { useEffect, useState } from 'react';

export const useScratchpad = (key: string) => {
  const storageKey = `scratchpad:${key}`;
  const [value, setValue] = useState('');

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const stored = window.localStorage.getItem(storageKey);
    if (stored) {
      setValue(stored);
    }
  }, [storageKey]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem(storageKey, value);
  }, [storageKey, value]);

  return { value, setValue } as const;
};
