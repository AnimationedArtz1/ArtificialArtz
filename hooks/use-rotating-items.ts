'use client';

import { useEffect, useState } from 'react';

export const useRotatingItems = <T,>(items: T[], interval = 4000) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (items.length === 0) return;
    const timer = window.setInterval(() => {
      setIndex(previous => (previous + 1) % items.length);
    }, interval);
    return () => window.clearInterval(timer);
  }, [items, interval]);

  return items[index] ?? items[0];
};
